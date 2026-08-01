"use client";

import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";

import { PhoneInput } from "@/components/ui/phone-input";
import { HugeiconsIcon } from "@hugeicons/react";
import { ImageUpload01Icon } from "@hugeicons/core-free-icons/index";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();
  const [msg, setMsg] = useState("");

  const MAX_SIZE = 2 * 1024 * 1024; // 2 MB

  // helper: File -> dataURL
  const fileToDataUrl = (file) =>
    new Promise((resolve, reject) => {
      if (!file) return resolve("");
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
      reader.readAsDataURL(file);
    });

  const onSubmit = async (data) => {
    setMsg("");
    try {
      // data.image (if provided) is a FileList from react-hook-form
      const file = data.image && data.image[0];

      if (file && file.size > MAX_SIZE) {
        setMsg("Image too large, max 2 MB.");
        return;
      }

      const imageDataUrl = file ? await fileToDataUrl(file) : "";

      const payload = {
        firstName: data.firstName || "",
        lastName: data.lastName || "",
        email: data.email || "",
        phone: data.phone || "",
        message: data.message || "",
      };

      // Only include image field if there's actually an image
      if (imageDataUrl) {
        payload.image = imageDataUrl;
      }

      const response = await axios.post("/api/submit-enquiry", payload, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("Response:", response.data);
      setMsg("Form submitted successfully!");
      reset();
    } catch (error) {
      console.error("Error:", error);
      setMsg("Submission failed. Try again.");
    }
  };

  return (
    <section className="bg-primary/5 rounded-4xl flex md:flex-row flex-col max-w-6xl mx-auto p-8 md:p-16 mt-32 justify-between">
      <div className="space-y-4 ">
        <h1 className="text-3xl  font-medium text-primary">Contact</h1>
        <p className="text-xl font-medium "><span className="text-primary text-sm">USA & CANADA</span><br/><a className="underline hover:text-primary" href="tel:+1-610-787-0713">+1-610-787-0713</a></p>

        <p className="text-xl font-medium "><span className="text-primary text-sm">INTERNATIONAL</span><br/> <a className="underline hover:text-primary " href="https://wa.me/16107870713">Chat with us on WhatsApp</a></p>
        
        <p className="text-lg font-medium "><span className="text-primary text-sm">EMAIL</span><br/>info@sultanghc.com</p>
        <p className="text-sm  max-w-sm">
          *The Sultan Global Health Care does not provide any medical advice,
          diagnosis or treatment.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 mt-4 md:mt-0 md:ml-4 w-full max-w-sm"
      >
        <h2 className="text-3xl  font-medium text-primary">Make an Enquiry</h2>

        <div className="flex flex-col gap-1 text-sm ">
          <label className="font-semibold ">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            {...register("firstName", { required: "First name is required" })}
            className="border px-3 py-2 input-states"
          />
          {errors.firstName && (
            <span className="text-red-500 text-sm">
              {errors.firstName.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1 text-sm ">
          <label className="font-semibold ">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            {...register("lastName", { required: "Last name is required" })}
            className="border px-3 py-2 input-states input-states"
          />
          {errors.lastName && (
            <span className="text-red-500 text-sm">
              {errors.lastName.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1 text-sm ">
          <label className="font-semibold ">Email</label>
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            className="border px-3 py-2 input-states input-states"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        {/* <input
        type="tel"
        placeholder="Phone Number"
        {...register("phone", {
          required: "Phone number is required",
          minLength: { value: 10, message: "At least 10 digits" },
        })}
        className="border px-3 py-2 input-states"
      />
      {errors.phone && (
        <span className="text-red-500 text-sm">{errors.phone.message}</span>
      )} */}

        <div className="flex flex-col gap-1 text-sm ">
          <label className="font-semibold ">Phone</label>
          <Controller
            name="phone"
            control={control}
            rules={{ required: "Phone number is required" }}
            render={({ field }) => (
              <PhoneInput
                value={field.value || ""}
                onChange={(value) => field.onChange(value)}
                placeholder="Enter phone number"
              />
            )}
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">{errors.phone.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1 text-sm ">
          <label className="font-semibold ">Message</label>
          <textarea
            placeholder="Message"
            rows="4"
            {...register("message", { required: "Message is required" })}
            className="border px-3 py-2 input-states input-states"
          />
          {errors.message && (
            <span className="text-red-500 text-sm">
              {errors.message.message}
            </span>
          )}
        </div>

        {/* optional image */}
        <label className="text-sm font-medium mb-1 block">
          Attach image (optional, max 2 MB)
        </label>

        {/* Remove button (only if file exists) */}
        {watch("image")?.[0] && (
          <button
            type="button"
            onClick={() => {
              // clear the react-hook-form value
              const input = document.getElementById("image-input");
              if (input) input.value = "";
              setValue("image", undefined, {
                shouldDirty: true,
                shouldValidate: true,
              });
            }}
            className="text-xs text-red-600 underline"
          >
            Remove X
          </button>
        )}

        <div
          className="border border-dashed hover:outline-none hover:border-primary active:scale-95 border-gray-400 rounded-xl p-5 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-white transition"
          onClick={() => document.getElementById("image-input").click()}
        >
          <HugeiconsIcon
            icon={ImageUpload01Icon}
            className="w-8 h-8 text-gray-500"
          />

          <span className="text-xs text-gray-600 max-w-[120px] truncate">
            {watch("image")?.[0]?.name || "Click to add"}
          </span>

          <input
            id="image-input"
            {...register("image")}
            type="file"
            accept="image/*"
            className="hidden"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-fit bg-primary active:blur-[1px] active:scale-95 transition-all  font-bruno group shadow-xl shadow-blue-600/20 flex items-center pr-1 py-1 pl-4 gap-6
              border-[1px] border-primary/30 rounded-full"
        >
          <p className="text-white text-sm font-semibold">
            {isSubmitting ? "Submitting..." : "Submit Query"}
          </p>

          <div
            className="relative w-10 h-10 flex items-center justify-center 
                  rounded-full bg-white overflow-hidden"
          >
            <img
              className="w-7
                      group-hover:translate-x-10 group-hover:-translate-y-10 transition-transform
                      duration-300"
              src="/send-plane.svg"
              alt="arrow"
            />

            <img
              className="w-7 absolute -translate-x-10 translate-y-10
                      group-hover:translate-x-0 group-hover:translate-y-0 transition-transform
                      duration-300"
              src="/send-plane.svg"
              alt="arrow"
            />
          </div>
        </button>

        {msg && <p className="mt-2 text-center text-sm text-gray-700">{msg}</p>}
      </form>
    </section>
  );
}
