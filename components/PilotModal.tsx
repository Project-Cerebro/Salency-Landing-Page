'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { X } from 'lucide-react';
import { EmailForm } from '@/components/EmailForm';
import { useBodyScrollLock } from '@/lib/use-body-scroll-lock';

const EVENT_NAME = 'open-pilot-modal';

type OpenDetail = { email?: string };

export function openPilotModal(email?: string) {
  if (typeof window === 'undefined') return;
  // On /pilot the form is already on the page. Opening the modal would
  // mount a second copy (duplicate field ids), so take the visitor to the
  // inline form instead: first field, or the success heading once sent.
  const inline = document.getElementById('apply');
  if (inline) {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    inline.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    const target =
      inline.querySelector<HTMLElement>('#pilot-name') ??
      inline.querySelector<HTMLElement>('.pilot-form-title');
    target?.focus({ preventScroll: true });
    return;
  }
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

  const panelRef = useRef<HTMLDivElement>(null);

  // Focus management: move focus into the dialog on open (first form
  // field, not the close button), keep Tab inside it, and hand focus back
  // to whatever opened it on close.
  useEffect(() => {
    if (!open) return;
    const opener = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;
    const focusables = () =>
      Array.from(
        panel?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([tabindex="-1"]), select, textarea, [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      ).filter((el) => el.offsetParent !== null);

    const first = panel?.querySelector<HTMLElement>('#pilot-name') ?? focusables()[0];
    first?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
        return;
      }
      if (e.key !== 'Tab') return;
      const items = focusables();
      if (items.length === 0) return;
      const head = items[0];
      const tail = items[items.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === head || !panel?.contains(active))) {
        e.preventDefault();
        tail.focus();
      } else if (!e.shiftKey && (active === tail || !panel?.contains(active))) {
        e.preventDefault();
        head.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      opener?.focus?.();
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Apply for the pilot"
      className="pilot-modal-backdrop"
      onClick={close}
    >
      <div
        ref={panelRef}
        className="pilot-modal-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button stays visible no matter how far the form scrolls
            on a small viewport: the panel is the scroll container, so a
            position:sticky close stays pinned inside its top-right corner. */}
        <button
          type="button"
          onClick={close}
          aria-label="Close pilot application"
          className="pilot-modal-close"
        >
          <X className="pilot-modal-close-icon" aria-hidden />
        </button>
        <EmailForm prefillEmail={prefill} showTerms />
      </div>
    </div>
  );
}
