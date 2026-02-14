'use client';

import { useRef } from 'react';

type Item = {
  title: string;
  description: string;
};

export default function PainPointsAccordion({
  items,
  value,
  onValueChange,
}: {
  items: Item[];
  value: string;
  onValueChange: (value: string) => void;
}) {
  const active = value === '' ? -1 : Number.parseInt(value, 10);
  const safeActive = Number.isNaN(active) ? -1 : active;

  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const ignoreClickRef = useRef(false);

  function onTouchStart(e: React.TouchEvent) {
    const t = e.touches[0];
    touchStartRef.current = { x: t.clientX, y: t.clientY };
  }

  function isScrollGesture(e: React.TouchEvent, threshold = 10) {
    const start = touchStartRef.current;
    const t = e.changedTouches[0];
    if (!start || !t) return false;
    const dx = Math.abs(t.clientX - start.x);
    const dy = Math.abs(t.clientY - start.y);
    return dx > threshold || dy > threshold;
  }

  function toggle(idx: number) {
    const isActive = idx === safeActive;
    onValueChange(isActive ? '' : String(idx));
  }

  return (
    <div className="relative">
      <div className="absolute left-0 top-0 h-full w-px bg-slate-200" />

      <div className="flex flex-col gap-6 pl-8">
        {items.map((it, idx) => {
          const isActive = idx === safeActive;

          return (
            <div key={it.title} className="relative">
              {isActive && (
                <span className="absolute -left-8 top-0 h-full w-0.75 bg-blue-600" />
              )}

              <button
                type="button"
                onTouchStart={onTouchStart}
                onTouchEnd={(e) => {
                  ignoreClickRef.current = true;
                  setTimeout(() => (ignoreClickRef.current = false), 0);

                  if (isScrollGesture(e)) return;
                  toggle(idx);
                }}
                onClick={() => {
                  if (ignoreClickRef.current) return;
                  toggle(idx);
                }}
                className="flex w-full flex-col items-start gap-2 bg-transparent text-left transition-all duration-300 touch-pan-y"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={[
                      'mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-sm border transition-colors',
                      isActive ? 'border-blue-600 bg-blue-600' : 'border-slate-300 bg-slate-100',
                    ].join(' ')}
                  >
                    <svg
                      viewBox="0 0 20 20"
                      className={['h-4 w-4', isActive ? 'text-white' : 'text-slate-400'].join(' ')}
                      fill="currentColor"
                    >
                      <path d="M7.6 13.3 4.7 10.4l-1.2 1.2 4.1 4.1L17 6.3l-1.2-1.2z" />
                    </svg>
                  </span>

                  <h3
                    className={[
                      'text-lg font-medium transition-all duration-500 lg:text-title-xs lg:font-semibold',
                      isActive ? 'text-slate-700' : 'text-slate-400',
                    ].join(' ')}
                  >
                    {it.title}
                  </h3>
                </div>

                {isActive && (
                  <div className="max-w-xl text-md leading-relaxed text-slate-500">
                    {it.description}
                  </div>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
