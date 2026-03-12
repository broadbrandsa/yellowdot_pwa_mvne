'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'

const CORRECT_CODE = '1006'
const STORAGE_KEY = 'dm_yellowdotpwa_v1_unlocked'

export default function LockScreen({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState<boolean | null>(null)
  const [digits, setDigits] = useState<string[]>(['', '', '', ''])
  const [error, setError] = useState(false)
  const [exiting, setExiting] = useState(false)
  const hiddenInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      setUnlocked(saved === 'true')
    } catch {
      setUnlocked(false)
    }
  }, [])

  const handleDelete = useCallback(() => {
    setDigits((prev) => {
      const next = [...prev]
      for (let i = 3; i >= 0; i--) {
        if (next[i] !== '') {
          next[i] = ''
          break
        }
      }
      return next
    })
  }, [])

  const handleDigit = useCallback(
    (d: string) => {
      if (error) return
      setDigits((prev) => {
        const next = [...prev]
        const idx = next.findIndex((v) => v === '')
        if (idx === -1) return prev
        next[idx] = d

        if (idx === 3) {
          const code = next.join('')
          if (code === CORRECT_CODE) {
            setTimeout(() => {
              setExiting(true)
              setTimeout(() => {
                try {
                  localStorage.setItem(STORAGE_KEY, 'true')
                } catch {}
                setUnlocked(true)
              }, 900)
            }, 200)
          } else {
            setTimeout(() => {
              setError(true)
              setTimeout(() => {
                setError(false)
                setDigits(['', '', '', ''])
              }, 700)
            }, 100)
          }
        }
        return next
      })
    },
    [error]
  )

  useEffect(() => {
    if (unlocked) return
    const onKey = (e: KeyboardEvent) => {
      if (document.activeElement === hiddenInputRef.current) return
      if (e.key >= '0' && e.key <= '9') handleDigit(e.key)
      if (e.key === 'Backspace') handleDelete()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [unlocked, handleDigit, handleDelete])

  const handleHiddenInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value
      if (!val) return
      const char = val[val.length - 1]
      if (char >= '0' && char <= '9') handleDigit(char)
      e.target.value = ''
    },
    [handleDigit]
  )

  if (unlocked === null) return null
  if (unlocked) return <>{children}</>

  return (
    <>
      <div
        className={`lock-overlay ${exiting ? 'lock-exiting' : ''} ${error ? 'lock-shake' : ''}`}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'start',
          background: '#0a0f1a',
          overflow: 'hidden',
        }}
      >
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none select-none" style={{ zIndex: 0 }}>
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(160deg, #0a1628 0%, #0d1f3c 50%, #0a0f1a 100%)',
            }}
          />
          <div
            className="absolute inset-0 hero-pattern opacity-20"
          />
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: '50%',
              background: 'linear-gradient(to top, #0a0f1a 0%, transparent 100%)',
            }}
          />
        </div>

        {/* Yellow glow top */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{
            height: '40vh',
            background:
              'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(234,179,8,0.12) 0%, transparent 70%)',
            zIndex: 0,
          }}
        />

        {/* Top: badge + logos */}
        <div className="relative z-10 flex flex-col items-center gap-4 mt-8 md:mt-10">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase"
            style={{
              background: 'rgba(234,179,8,0.12)',
              border: '1px solid rgba(234,179,8,0.30)',
              color: '#eab308',
            }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: '#eab308' }}
              />
              <span
                className="relative inline-flex rounded-full h-1.5 w-1.5"
                style={{ background: '#eab308' }}
              />
            </span>
            Confidential &middot; Yellow Dot PWA Proposal
          </span>

          <div className="flex items-center gap-4">
            <div className="relative w-28 h-7">
              <Image
                src="/Logos/mvne-white.png"
                alt="MVNE"
                fill
                className="object-contain object-center"
                style={{ opacity: 0.85 }}
              />
            </div>
            <div className="relative w-24 h-10">
              <Image
                src="/Logos/yellow+dot+logo.webp"
                alt="Yellow Dot"
                fill
                className="object-contain object-center"
                style={{ opacity: 0.85 }}
              />
            </div>
          </div>
        </div>

        {/* Centre: headline */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
          <h1
            className="font-black leading-none tracking-tight"
            style={{
              fontSize: 'clamp(1.8rem, 7vw, 7rem)',
              color: '#f0ede8',
              lineHeight: 0.9,
              maxWidth: '16ch',
            }}
          >
            ENTER THE 4
            <br />
            DIGIT CODE
            <br />
            <span style={{ color: '#eab308' }}>TO VIEW</span>
            <br />
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>THE PROPOSAL.</span>
          </h1>
        </div>

        {/* Bottom: digit boxes */}
        <div className="relative z-10 w-full flex flex-col items-center pb-8 md:pb-16 px-6 gap-6">
          <input
            ref={hiddenInputRef}
            type="tel"
            inputMode="numeric"
            onChange={handleHiddenInput}
            style={{
              position: 'absolute',
              opacity: 0,
              width: '1px',
              height: '1px',
              pointerEvents: 'none',
            }}
            autoComplete="off"
          />

          <div
            className="flex items-center gap-3 md:gap-5 cursor-pointer"
            onClick={() => hiddenInputRef.current?.focus()}
          >
            {digits.map((d, i) => {
              const isCurrent = d === '' && digits.slice(0, i).every((v) => v !== '')
              return (
                <div
                  key={i}
                  className="flex items-center justify-center rounded-2xl transition-all duration-200"
                  style={{
                    width: 'clamp(4rem, 16vw, 8rem)',
                    height: 'clamp(5rem, 20vw, 10rem)',
                    background: error
                      ? 'rgba(239,68,68,0.15)'
                      : d
                      ? 'rgba(234,179,8,0.18)'
                      : isCurrent
                      ? 'rgba(234,179,8,0.08)'
                      : 'rgba(255,255,255,0.04)',
                    border: error
                      ? '2px solid rgba(239,68,68,0.5)'
                      : d
                      ? '2px solid rgba(234,179,8,0.5)'
                      : isCurrent
                      ? '2px solid rgba(234,179,8,0.3)'
                      : '2px solid rgba(255,255,255,0.08)',
                    boxShadow:
                      d && !error ? '0 0 30px rgba(234,179,8,0.18)' : 'none',
                  }}
                >
                  <span
                    className="font-black leading-none"
                    style={{
                      fontSize: 'clamp(2rem, 10vw, 5rem)',
                      color: error
                        ? 'rgba(239,68,68,0.9)'
                        : d
                        ? '#f0ede8'
                        : 'rgba(255,255,255,0.15)',
                    }}
                  >
                    {d || (isCurrent ? '_' : '\u00B7')}
                  </span>
                </div>
              )
            })}
          </div>

          {error && (
            <p
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: 'rgba(239,68,68,0.8)' }}
            >
              Incorrect code — try again
            </p>
          )}
        </div>
      </div>

      <div style={{ visibility: 'hidden', pointerEvents: 'none' }}>
        {children}
      </div>
    </>
  )
}
