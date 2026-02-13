'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import ImageLightbox from './ImageLightbox';

type Tab = {
  tabLabel: string;
  heading: string;
  description?: string;
  bullets: string[];
  imageSrc: string;
  imageAlt?: string;
};

export default function BenefitsTabs({ tabs }: { tabs: Tab[] }) {
  const safeTabs = useMemo(() => tabs.filter(Boolean), [tabs]);

  const [active, setActive] = useState(0);
  const [openLightbox, setOpenLightbox] = useState(false);

  const pauseUntilRef = useRef<number>(0);
  const current = safeTabs[active] ?? safeTabs[0];

  function setActiveWithPause(next: number, pauseMs = 8000) {
    pauseUntilRef.current = Date.now() + pauseMs;
    setActive(next);
  }

  useEffect(() => {
    if (!safeTabs.length) return;

    const mq = window.matchMedia('(min-width: 768px)'); 
    const interval = window.setInterval(() => {
      if (mq.matches) return; 
      if (Date.now() < pauseUntilRef.current) return;

      setActive((prev) => (prev + 1) % safeTabs.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [safeTabs.length]);

  return (
    <div className="mx-auto max-w-245">
      <div className="rounded-md bg-[#F4F4F9] p-2 md:bg-transparent md:p-0">
        <div className="flex flex-col md:hidden">
          {safeTabs.map((tab, idx) => {
            const isActive = idx === active;

            return (
              <button
                key={tab.tabLabel}
                type="button"
                onClick={() => setActiveWithPause(idx)}
                className={[
                  'w-full rounded-sm px-4 py-3 text-center text-sm font-semibold transition-colors',
                  isActive
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700',
                ].join(' ')}
              >
                {tab.tabLabel}
              </button>
            );
          })}
        </div>

        <div className="hidden grid-cols-2 gap-y-2 md:grid md:grid-cols-4">
          {safeTabs.map((tab, idx) => {
            const isActive = idx === active;

            return (
              <button
                key={tab.tabLabel}
                type="button"
                onClick={() => setActiveWithPause(idx)}
                className={[
                  'relative px-2 py-3 text-center text-sm font-semibold',
                  isActive ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700',
                ].join(' ')}
              >
                {tab.tabLabel}

                <span
                  aria-hidden
                  className={[
                    'absolute left-0 right-0 -bottom-px mx-auto h-0.5 w-full transition-opacity',
                    isActive ? 'bg-blue-600 opacity-100' : 'bg-transparent opacity-0',
                  ].join(' ')}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="hidden h-px w-full bg-slate-200 md:block" />

      <div className="mt-10 grid items-center gap-10 lg:mt-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h3 className="text-xl font-bold md:text-2xl">{current.heading}</h3>

          {current.description ? (
            <p className="mt-4 max-w-xl text-md leading-relaxed text-slate-500 md:text-base">
              {current.description}
            </p>
          ) : null}

          <ul className="mt-6 space-y-3 text-md text-slate-500 md:text-base">
            {current.bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-slate-500" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6">
          <div className="relative overflow-hidden">
            <button
              type="button"
              onClick={() => setOpenLightbox(true)}
              className="group relative block w-full cursor-zoom-in"
              aria-label="Expand image"
            >
              <img
                src={current.imageSrc}
                alt={current.imageAlt ?? ''}
                className="h-auto w-full object-cover"
                loading="lazy"
              />
            </button>

            <ImageLightbox
              open={openLightbox}
              src={current.imageSrc}
              alt={current.imageAlt ?? ''}
              onClose={() => setOpenLightbox(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
