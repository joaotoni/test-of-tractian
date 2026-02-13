'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import PainPointsAccordion from './PainPointsAccordian';

type Item = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
};

export default function PainPointsClient({ items }: { items: Item[] }) {
  const [active, setActive] = useState<string>('0');

  const pauseUntilRef = useRef<number>(0);

  const activeIndex = useMemo(() => {
    const n = Number.parseInt(active, 10);
    return Number.isNaN(n) ? 0 : n;
  }, [active]);

  const current = items[activeIndex] ?? items[0];

  function setActiveWithPause(next: string, pauseMs = 8000) {
    pauseUntilRef.current = Date.now() + pauseMs;
    setActive(next);
  }

  useEffect(() => {
  const mq = window.matchMedia('(min-width: 1024px)');
  let isDesktop = mq.matches;

  const handleMq = (e: MediaQueryListEvent) => {
    isDesktop = e.matches;
  };

  mq.addEventListener('change', handleMq);

  const interval = window.setInterval(() => {
    if (isDesktop) return;
    if (Date.now() < pauseUntilRef.current) return;

    setActive((prev) => {
      const n = Number.parseInt(prev, 10);
      const idx = Number.isNaN(n) ? 0 : n;
      const next = (idx + 1) % items.length;
      return String(next);
    });
  }, 4500);

  return () => {
    window.clearInterval(interval);
    mq.removeEventListener('change', handleMq);
  };
}, [items.length]);


  return (
    <div className="mt-14 grid items-start gap-10 lg:grid-cols-12">
      <div className="lg:col-span-6">
        <PainPointsAccordion
          items={items}
          value={active}
          onValueChange={(v) => setActiveWithPause(v)}
        />
      </div>

      <div className="lg:col-span-6">
        <div className="relative aspect-video w-full overflow-hidden rounded-md bg-slate-200 shadow-sm">
          <Image
            key={current.imageSrc}
            src={current.imageSrc}
            alt={current.imageAlt ?? ''}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </div>
  );
}
