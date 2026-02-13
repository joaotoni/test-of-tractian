import { getTranslations } from 'next-intl/server';
import FaqAccordion from './FaqAccordion';

type FaqItem = { q: string; a: string };

export default async function FAQ() {
  const t = await getTranslations('plantManager.faq');

  const items = t.raw('items') as FaqItem[];

  return (
    <section className="bg-slate-100 px-6 py-20 md:px-10">
      <div className="mx-auto max-w-350">
        <p className="text-center text-[18px]  text-blue-600">
          {t('eyebrow')}
        </p>

        <h2 className="mt-4 text-center text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          {t('title')}
        </h2>

        {t('subtitle') ? (
          <p className="mx-auto mt-5 max-w-3xl text-center text-base text-slate-600 md:text-lg">
            {t('subtitle')}
          </p>
        ) : null}

        <div className="mx-auto mt-10 max-w-4xl">
          <FaqAccordion items={items} />
        </div>
      </div>
    </section>
  );
}
