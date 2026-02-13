import { getTranslations } from 'next-intl/server';
import PainPointsClient from './PainPointsClient';

export default async function PainPoints() {
  const t = await getTranslations('plantManager.painPoints');

  const items = [
    {
      title: t('items.0.title'),
      description: t('items.0.description'),
      imageSrc: '/img/prove-the-roi.png',
      imageAlt: '',
    },
    {
      title: t('items.1.title'),
      description: t('items.1.description'),
      imageSrc: '/img/get-ahead-img.png',
      imageAlt: '',
    },
    {
      title: t('items.2.title'),
      description: t('items.2.description'),
      imageSrc: '/img/run-a-leaner-img.png',
      imageAlt: '',
    },
    {
      title: t('items.3.title'),
      description: t('items.3.description'),
      imageSrc: '/img/keeps-audit-simple-img.png',
      imageAlt: '',
    },
  ];

  return (
    <section className="bg-slate-100 px-6 py-16 md:px-10">
      <div className="mx-auto max-w-300">
        <p className="text-md uppercase text-blue-600">{t('eyebrow')}</p>
        <h2 className="mt-2 text-lg font-bold md:text-5xl">{t('title')}</h2>
        <PainPointsClient items={items} />
      </div>
    </section>
  );
}
