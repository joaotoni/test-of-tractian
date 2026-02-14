'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('plantManager.hero');

  return (
    <section className="w-full overflow-hidden">
      <div className="md:hidden">
        <div className="bg-blue-950 px-6 py-12 text-center">
          <p className="text-sm font-light text-white/90">{t('eyebrow')}</p>
          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white">
            {t('title')}
          </h1>
          <p className="mx-auto mt-4 max-w-sm text-base leading-relaxed text-white/80">
            {t('subtitle')}
          </p>
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => {
                window.dispatchEvent(new CustomEvent('open-demo-modal'));
              }}
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500"
            >
              {t('ctaPrimary')}
              <span aria-hidden>→</span>
            </button>
          </div>
        </div>
        <div className="relative h-90 w-full">
          <Image
            src="/img/plant-manager-header-image-full.png"
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover object-[92%_center] h-auto"
          />
        </div>
      </div>
      <div
        className="
          relative isolate hidden w-full overflow-hidden md:grid
          3xl:min-h-[675px] 4xl:min-h-[695px]
        "
      >
        <Image
          src="/img/plant-manager-header-image-full.png"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-cover object-[75%_center] md:object-[80%_center] lg:object-[80%_20%] h-auto"
        />
        <div className="z-10 mx-auto grid w-full grid-cols-12">
          <div className="col-span-12 md:col-span-6 max-w-full">
            <div className="flex h-full items-center justify-end bg-blue-950 px-4 py-14 md:bg-blue-950/80 lg:px-12 lg:py-16 xl:px-16 xl:py-20">
              <div className="flex w-full max-w-xl flex-col gap-6">
                <p className="text-md font-light text-white">{t('eyebrow')}</p>
                <h1 className="text-lg font-bold leading-tight tracking-tight text-white md:text-5xl">
                  {t('title')}
                </h1>
                <p className="max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
                  {t('subtitle')}
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent('open-demo-modal'));
                    }}
                    className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500"
                  >
                    {t('ctaPrimary')}
                    <span aria-hidden>→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 hidden items-center justify-self-end lg:col-span-6 lg:flex lg:pr-12">
            <div className="w-75 rounded-md bg-white px-6 py-8 shadow-lg 2xl:w-85 3xl:w-[380px] 4xl:w-[420px]">
              <p className="text-base leading-relaxed text-slate-500">{t('quote.text')}</p>

              <div className="mt-6">
                <p className="text-base font-bold">{t('quote.name')}</p>
                <p className="text-base text-slate-600">{t('quote.role')}</p>
                <p className="text-base font-semibold">{t('quote.company')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
