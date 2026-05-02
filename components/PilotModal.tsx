'use client';

import { useEffect, useState, useCallback } from 'react';
import { X } from 'lucide-react';
import { EmailForm } from '@/components/EmailForm';
import { useBodyScrollLock } from '@/lib/use-body-scroll-lock';

const EVENT_NAME = 'open-pilot-modal';

type OpenDetail = { email?: string };

export function openPilotModal(email?: string) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent<OpenDetail>(EVENT_NAME, { detail: { email } }));
}

export function PilotModal() {
  const [open, setOpen] = useState(false);
  const [prefill, setPrefill] = useState<string | undefined>(undefined);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onOpen = (e: Event) => {
      const detail = (e as CustomEvent<OpenDetail>).detail;
      setPrefill(detail?.email);
      setOpen(true);
    };
    window.addEventListener(EVENT_NAME, onOpen);
    return () => window.removeEventListener(EVENT_NAME, onOpen);
  }, []);

  useBodyScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Request your pilot"
      className="pilot-modal-backdrop"
      onClick={close}
    >
      <div
        className="pilot-modal-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button stays visible no matter how far the form scrolls
            on a small viewport — the panel is the scroll container, so
            a position:sticky close stays pinned to the top-right. */}
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="pilot-modal-close"
        >
          <X className="pilot-modal-close-icon" aria-hidden />
        </button>
        <EmailForm prefillEmail={prefill} />
      </div>
    </div>
  );
}
