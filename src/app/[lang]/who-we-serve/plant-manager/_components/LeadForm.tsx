import {getTranslations} from 'next-intl/server';
import OpenDemoButton from './OpenDemoButton';

export default async function LeadForm() {
  const t = await getTranslations('plantManager.form');

  return (
    <section id="lead-form" className="px-6 py-12 md:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold md:text-3xl">{t('title')}</h2>
        <p className="mt-3 max-w-2xl text-neutral-700">{t('subtitle')}</p>

        <div className="mt-8 rounded-xl border border-neutral-200 bg-white p-6">
          <OpenDemoButton className="h-11 w-full rounded-sm bg-[#16a34a] text-sm font-semibold text-white hover:bg-[#15803d] md:w-auto md:px-10">
            {t('cta')}
          </OpenDemoButton>
        </div>
      </div>
    </section>
  );
}
