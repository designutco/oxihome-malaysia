'use client'

import { useEffect, useRef } from 'react'

export default function RedirectClient({ url }: { url: string }) {
  const linkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    linkRef.current?.click()
  }, [])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      <div style={{ textAlign: 'center' }}>
        <a
          ref={linkRef}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#25D366', fontWeight: 600, fontSize: '16px' }}
        >
          Open WhatsApp
        </a>
        <p style={{ color: '#4a7a8a', marginTop: '8px', fontSize: '14px' }}>
          Click the link above if WhatsApp did not open.
        </p>
      </div>
    </div>
  )
}
