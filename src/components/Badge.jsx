"use client";

export default function Badge({ text = "OUR FOCUS", className = "" }) {
  return (
    <div className={` flex items-center gap-2 w-fit ${className}`}>
      <span className="w-1 h-1 rounded-full bg-primary"></span>
      <p className="text-xs">{text}</p>
    </div>
  );
}
