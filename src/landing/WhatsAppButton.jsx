'use client'

import { useState, useRef, useEffect } from 'react'
import { X, ChevronRight, ArrowLeft, Send, User } from 'lucide-react'

const PHONE = '16107870713'

const TOPICS = [
  {
    id: 'opinion',
    icon: '🩺',
    label: 'Request a Free Medical Opinion',
    msg: 'I would like to request a free medical opinion for my case.',
  },
  {
    id: 'cost',
    icon: '💰',
    label: 'Get a Treatment Cost Estimate',
    msg: 'I would like to get a cost estimate for my treatment.',
  },
  {
    id: 'consultation',
    icon: '📅',
    label: 'Book an Online Consultation',
    msg: 'I would like to book an online consultation with a specialist.',
  },
  {
    id: 'india',
    icon: '🏥',
    label: 'Treatment in India',
    msg: 'I am interested in arranging medical treatment in India.',
  },
  {
    id: 'turkey',
    icon: '✈️',
    label: 'Treatment in Turkey',
    msg: 'I am interested in arranging medical treatment in Turkey.',
  },
  {
    id: 'general',
    icon: '💬',
    label: 'General Enquiry',
    msg: 'I have a general enquiry about Sultan GHC services.',
  },
]

export default function WhatsAppButton() {
  const [open, setOpen]         = useState(false)
  const [step, setStep]         = useState('topic')   // 'topic' | 'name'
  const [topic, setTopic]       = useState(null)
  const [name, setName]         = useState('')
  const [pulse, setPulse]       = useState(true)
  const nameRef                 = useRef(null)
  const panelRef                = useRef(null)

  // stop pulse after first open
  const handleOpen = () => {
    setOpen(true)
    setPulse(false)
    setStep('topic')
    setTopic(null)
    setName('')
  }

  // focus name field when step changes to name
  useEffect(() => {
    if (step === 'name' && nameRef.current) {
      setTimeout(() => nameRef.current?.focus(), 120)
    }
  }, [step])

  // close on outside click
  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  const selectTopic = (t) => {
    setTopic(t)
    setStep('name')
  }

  const sendToWhatsApp = () => {
    const trimmed = name.trim()
    const greeting = trimmed ? `Hi, I'm ${trimmed}. ` : 'Hi. '
    const text = encodeURIComponent(`${greeting}${topic.msg}`)
    window.open(`https://wa.me/${PHONE}?text=${text}`, '_blank', 'noopener,noreferrer')
    setOpen(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && name.trim()) sendToWhatsApp()
  }

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999 }}>

      {/* ── Popup panel ── */}
      <div
        ref={panelRef}
        style={{
          position: 'absolute',
          bottom: '68px',
          right: '0',
          width: '320px',
          background: '#fff',
          borderRadius: '20px',
          boxShadow: '0 8px 40px rgba(0,0,0,0.18)',
          overflow: 'hidden',
          transformOrigin: 'bottom right',
          transform: open ? 'scale(1) translateY(0)' : 'scale(0.85) translateY(16px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'transform 0.22s cubic-bezier(0.34,1.56,0.64,1), opacity 0.18s ease',
        }}
        role="dialog"
        aria-label="Chat with Sultan GHC on WhatsApp"
      >
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #075e54 0%, #128c7e 100%)',
          padding: '16px 16px 18px',
          position: 'relative',
        }}>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            style={{
              position: 'absolute', top: '12px', right: '12px',
              background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%',
              width: '28px', height: '28px', display: 'flex', alignItems: 'center',
              justifyContent: 'center', cursor: 'pointer', color: '#fff',
            }}
          >
            <X size={14} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Avatar */}
            <div style={{
              width: '44px', height: '44px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '18px', flexShrink: 0,
            }}>
              🏥
            </div>
            <div>
              <p style={{ margin: 0, color: '#fff', fontWeight: 600, fontSize: '14px', lineHeight: 1.3 }}>Sultan GHC</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '2px' }}>
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4de070' }} />
                <p style={{ margin: 0, color: 'rgba(255,255,255,0.8)', fontSize: '11px' }}>Typically replies within minutes</p>
              </div>
            </div>
          </div>

          {/* Chat bubble */}
          <div style={{
            marginTop: '14px',
            background: 'rgba(255,255,255,0.15)',
            borderRadius: '12px 12px 12px 4px',
            padding: '10px 13px',
          }}>
            <p style={{ margin: 0, color: '#fff', fontSize: '13px', lineHeight: 1.5 }}>
              {step === 'topic'
                ? 'Hello! How can we help you today?'
                : `Great choice! What is your name so we can personalize your message?`}
            </p>
          </div>
        </div>

        {/* Body */}
        <div style={{ background: '#f0f0f0', minHeight: '180px' }}>

          {/* Step 1 — Topic selection */}
          {step === 'topic' && (
            <div style={{ padding: '12px' }}>
              {TOPICS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => selectTopic(t)}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    width: '100%', background: '#fff', border: '1px solid #e8e8e8',
                    borderRadius: '10px', padding: '10px 12px', marginBottom: '6px',
                    cursor: 'pointer', textAlign: 'left', gap: '8px',
                    transition: 'border-color 0.15s, box-shadow 0.15s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#25d366'; e.currentTarget.style.boxShadow = '0 0 0 2px rgba(37,211,102,0.12)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e8e8'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                    <span style={{ fontSize: '16px', lineHeight: 1 }}>{t.icon}</span>
                    <span style={{ fontSize: '12.5px', color: '#1a1a1a', fontWeight: 500, lineHeight: 1.4 }}>{t.label}</span>
                  </span>
                  <ChevronRight size={14} style={{ color: '#25d366', flexShrink: 0 }} />
                </button>
              ))}
            </div>
          )}

          {/* Step 2 — Name input */}
          {step === 'name' && (
            <div style={{ padding: '16px 12px 12px' }}>
              {/* Selected topic pill */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                background: '#e7fce8', border: '1px solid #b7f0be', borderRadius: '10px',
                padding: '8px 10px', marginBottom: '14px',
              }}>
                <span style={{ fontSize: '12px', color: '#1a5e20', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>{topic?.icon}</span> {topic?.label}
                </span>
                <button
                  onClick={() => setStep('topic')}
                  aria-label="Change topic"
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: '#388e3c', padding: '2px', display: 'flex',
                  }}
                >
                  <ArrowLeft size={13} />
                </button>
              </div>

              {/* Name field */}
              <div style={{
                background: '#fff', borderRadius: '12px', border: '1px solid #e0e0e0',
                display: 'flex', alignItems: 'center', gap: '8px', padding: '0 12px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
              }}>
                <User size={15} style={{ color: '#aaa', flexShrink: 0 }} />
                <input
                  ref={nameRef}
                  type="text"
                  placeholder="Your name (optional)"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  onKeyDown={handleKeyDown}
                  style={{
                    flex: 1, border: 'none', outline: 'none', fontSize: '13px',
                    color: '#1a1a1a', padding: '12px 0', background: 'transparent',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              <p style={{ margin: '8px 4px 14px', fontSize: '11px', color: '#888', lineHeight: 1.4 }}>
                Enter your name or tap the button below to continue.
              </p>

              {/* Send button */}
              <button
                onClick={sendToWhatsApp}
                style={{
                  width: '100%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  background: '#25d366', border: 'none', borderRadius: '12px',
                  color: '#fff', fontWeight: 600, fontSize: '14px', padding: '12px',
                  cursor: 'pointer', transition: 'background 0.15s',
                  fontFamily: 'inherit',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#1da851' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#25d366' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Continue on WhatsApp
                <Send size={14} />
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{
          background: '#f0f0f0', borderTop: '1px solid #e0e0e0',
          padding: '8px 12px', textAlign: 'center',
        }}>
          <p style={{ margin: 0, fontSize: '10.5px', color: '#aaa' }}>
            Powered by WhatsApp · Sultan Global Health Care
          </p>
        </div>
      </div>

      {/* ── Floating WhatsApp button ── */}
      <button
        onClick={open ? () => setOpen(false) : handleOpen}
        aria-label="Chat with us on WhatsApp"
        style={{
          width: '56px', height: '56px', borderRadius: '50%',
          background: '#25d366', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          position: 'relative',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(37,211,102,0.55)' }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.45)' }}
      >
        {/* Pulse ring — shows before first click */}
        {pulse && !open && (
          <span style={{
            position: 'absolute', inset: '-6px', borderRadius: '50%',
            border: '2px solid rgba(37,211,102,0.5)',
            animation: 'wa-pulse 1.8s ease-out infinite',
          }} />
        )}

        {/* Icon — toggles between WA logo and X */}
        <span style={{
          position: 'absolute',
          transition: 'opacity 0.18s, transform 0.18s',
          opacity: open ? 0 : 1,
          transform: open ? 'scale(0.6) rotate(90deg)' : 'scale(1) rotate(0deg)',
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </span>
        <span style={{
          position: 'absolute',
          transition: 'opacity 0.18s, transform 0.18s',
          opacity: open ? 1 : 0,
          transform: open ? 'scale(1) rotate(0deg)' : 'scale(0.6) rotate(-90deg)',
        }}>
          <X size={22} color="#fff" />
        </span>
      </button>

      {/* Pulse keyframe */}
      <style>{`
        @keyframes wa-pulse {
          0%   { transform: scale(1);   opacity: 0.7; }
          70%  { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
