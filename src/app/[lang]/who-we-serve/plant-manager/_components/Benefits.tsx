import { getTranslations } from 'next-intl/server';
import BenefitsTabs from './BenefitsTabs';

function pickBullets(t: any, baseKey: string, max = 12) {
  const out: string[] = [];
  for (let i = 0; i < max; i++) {
    const key = `${baseKey}.bullets.${i}`;
    if (!t.has(key)) break;
    out.push(t(key));
  }
  return out;
}

function pickOptional(t: any, key: string) {
  return t.has(key) ? t(key) : undefined;
}

export default async function Benefits() {
  const t = await getTranslations('plantManager.benefits');

  const tabs = [0, 1, 2, 3].map((idx) => {
    const base = `tabs.${idx}`;

    return {
      tabLabel: t(`${base}.label`),
      heading: t(`${base}.heading`),
      description: pickOptional(t, `${base}.description`), 
      bullets: pickBullets(t, base),
      imageSrc: t.has(`${base}.imageSrc`) ? t(`${base}.imageSrc`) : '/img/benefits/reports.png'
    };
  });

  return (
    <section id="benefits" className="bg-white px-6 md:px-0 py-20 ">
      <div className="mx-auto max-w-300">
        <h2 className="text-left text-2xl font-bold tracking-tight  md:text-md lg:text-center">
          {t('title')}
        </h2>

        <div className="mt-10">
          <BenefitsTabs tabs={tabs} />
        </div>
      </div>
    </section>
  );
}
