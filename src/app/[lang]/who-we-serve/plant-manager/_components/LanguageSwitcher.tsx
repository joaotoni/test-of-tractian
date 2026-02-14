'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter, usePathname } from '@/i18n/routing';

type Lang = 'en' | 'pt' | 'es';

const LANGS: { code: Lang; label: string; flagSrc: string }[] = [
  { code: 'pt', label: 'Português (Brasil)', flagSrc: '/icons/flags/br.svg' },
  { code: 'en', label: 'English (United States)', flagSrc: '/icons/flags/us.svg' },
  { code: 'es', label: 'Español (México)', flagSrc: '/icons/flags/mx.svg' },
];

function ChevronDown({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Globe({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M2 12h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M12 2c3 2.7 5 6.7 5 10s-2 7.3-5 10c-3-2.7-5-6.7-5-10S9 4.7 12 2Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export default function LanguageSwitcher({
  lang,
  onSelect,
  className = '',
}: {
  lang: string;
  onSelect?: () => void;
  className?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const current: Lang = lang === 'pt' || lang === 'en' || lang === 'es' ? lang : 'en';

  const currentItem = useMemo(() => LANGS.find((l) => l.code === current)!, [current]);
  const options = useMemo(() => LANGS.filter((l) => l.code !== current), [current]);

  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (next: Lang) => {
    if (next === current) return;
    router.push(pathname, { locale: next });
    setOpen(false);
    onSelect?.();
  };

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      const el = rootRef.current;
      if (!el) return;
      if (!el.contains(e.target as Node)) setOpen(false);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={['relative w-full', className].join(' ')}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={[
          'flex w-full items-center justify-between gap-3',
          'rounded-md px-3 py-3',
          'text-left text-sm font-medium text-slate-700',
          'hover:bg-slate-50',
        ].join(' ')}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="flex min-w-0 items-center gap-3">
          <Globe className="shrink-0 text-slate-600" />
          <span className="flex min-w-0 items-center gap-2">
            <span className="relative h-4 w-6 shrink-0 overflow-hidden rounded-sm">
              <Image src={currentItem.flagSrc} alt="" fill className="object-cover" />
            </span>
            <span className="truncate">{currentItem.label}</span>
          </span>
        </span>

        <ChevronDown className={['shrink-0 text-slate-500 transition-transform', open ? 'rotate-180' : ''].join(' ')} />
      </button>

      <div
        className={[
          'mt-1 overflow-hidden rounded-md border border-slate-200 bg-white shadow-lg',
          'transition-[opacity,transform] duration-150 origin-top',
          open ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-1',
          'absolute left-0 right-0 z-50',
        ].join(' ')}
        role="listbox"
        aria-label="Select language"
      >
        <div className="py-1">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex w-full items-center gap-3 px-3 py-2 text-left text-sm font-medium text-slate-700 bg-slate-100"
            role="option"
            aria-selected="true"
          >
            <span className="relative h-4 w-6 shrink-0 overflow-hidden rounded-sm">
              <Image src={currentItem.flagSrc} alt="" fill className="object-cover" />
            </span>
            <span className="truncate">{currentItem.label}</span>
          </button>
          {options.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => handleSelect(l.code)}
              className="flex w-full items-center gap-3 px-3 py-2 text-left text-sm font-medium text-slate-600 hover:bg-slate-50"
              role="option"
            >
              <span className="relative h-4 w-6 shrink-0 overflow-hidden rounded-sm">
                <Image src={l.flagSrc} alt="" fill className="object-cover" />
              </span>
              <span className="truncate">{l.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
