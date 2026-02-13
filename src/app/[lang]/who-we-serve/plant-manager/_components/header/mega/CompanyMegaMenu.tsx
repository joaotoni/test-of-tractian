'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import MegaMenuLinkItem from '@/app/[lang]/who-we-serve/plant-manager/_components/header/MegaMenuLinkItem';

export default function CompanyMegaMenu({
  lang,
  onNavigate,
}: {
  lang: string;
  onNavigate?: () => void;
}) {
  const t = useTranslations('plantManager.header.company');

  return (
    <div className="mx-auto max-w-310 px-6 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">  
        <div className="border-l border-slate-200 pl-6">
          <h3 className="text-sm font-medium text-slate-500">
            {t('sections.about')}
          </h3>
          <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-3">          
            <div className="min-w-0">
              <a
                href={`/${lang}/about`}
                onClick={onNavigate}
                className="group block"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-md bg-slate-100">
                  <Image
                    src="/img/about.png"
                    alt={t('alts.aboutCard')}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-3 text-sm font-semibold text-slate-800 group-hover:text-blue-600">
                  {t('cards.aboutUs')}
                </div>
              </a>
            </div>
            <div className="min-w-0">
              <a
                href={`/${lang}/careers`}
                onClick={onNavigate}
                className="group block"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-md bg-slate-100">
                  <Image
                    src="/img/careers.png"
                    alt={t('alts.careersCard')}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-3 text-sm font-semibold text-slate-800 group-hover:text-blue-600">
                  {t('cards.careers')}
                </div>
              </a>
            </div>
            <div className="min-w-0">
              <a
                href={`/${lang}/newsroom`}
                onClick={onNavigate}
                className="group block"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-md bg-slate-100">
                  <Image
                    src="/img/newsroom.png"
                    alt={t('alts.newsroomCard')}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-3 text-sm font-semibold text-slate-800 group-hover:text-blue-600">
                  {t('cards.newsroom')}
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="border-l border-slate-200 pl-6">
          <h3 className="text-sm font-medium text-slate-500">
            {t('sections.others')}
          </h3>
          <div className="mt-5 space-y-3">
            <MegaMenuLinkItem
              href={`/${lang}/contact`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/company/contact-us.svg"
              title={t('links.contactUs')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/referrals`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/company/referrals.svg"
              title={t('links.referrals')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/trust-center`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/company/trust-center.svg"
              title={t('links.trustCenter')}
              iconSize="sm"
              className="px-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
