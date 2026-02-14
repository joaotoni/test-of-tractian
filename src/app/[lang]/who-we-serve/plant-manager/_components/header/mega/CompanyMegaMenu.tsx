'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import MegaMenuLinkItem from '@/app/[lang]/who-we-serve/plant-manager/_components/header/MegaMenuLinkItem';

type Props = {
  lang: string;
  onNavigate?: () => void;
  variant?: 'desktop' | 'mobile';
};

function CardLink({
  href,
  onNavigate,
  imgSrc,
  imgAlt,
  title,
  size = 'md',
}: {
  href: string;
  onNavigate?: () => void;
  imgSrc: string;
  imgAlt: string;
  title: string;
  size?: 'md' | 'lg';
}) {
  const imgBox = size === 'lg' ? 'h-26 w-40' : 'h-30 w-30';
  const titleCls = size === 'lg' ? 'text-base' : 'text-sm';
  const pad = size === 'lg' ? 'p-3' : 'p-2';
  const gap = size === 'lg' ? 'gap-5' : 'gap-4';

  return (
    <a href={href} onClick={onNavigate} className={['group flex items-center rounded-md hover:bg-white', pad, gap].join(' ')}>
      <div className={['relative shrink-0 overflow-hidden rounded-md bg-slate-100', imgBox].join(' ')}>
        <Image
          src={imgSrc}
          alt={imgAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="min-w-0">
        <div className={['truncate font-semibold text-slate-800 group-hover:text-blue-600', titleCls].join(' ')}>
          {title}
        </div>
      </div>
    </a>
  );
}

export default function CompanyMegaMenu({ lang, onNavigate, variant = 'desktop' }: Props) {
  const t = useTranslations('plantManager.header.company');
  const isMobile = variant === 'mobile';

  if (isMobile) {
    return (
      <div className="rounded-md bg-slate-50 p-3">
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-slate-500">{t('sections.about')}</h3>
            <div className="mt-3 space-y-2">
              <CardLink
                size="lg"
                href={`/${lang}/about`}
                onNavigate={onNavigate}
                imgSrc="/img/about.png"
                imgAlt={t('alts.aboutCard')}
                title={t('cards.aboutUs')}
              />
              <CardLink
                size="lg"
                href={`/${lang}/careers`}
                onNavigate={onNavigate}
                imgSrc="/img/careers.png"
                imgAlt={t('alts.careersCard')}
                title={t('cards.careers')}
              />
              <CardLink
                size="lg"
                href={`/${lang}/newsroom`}
                onNavigate={onNavigate}
                imgSrc="/img/newsroom.png"
                imgAlt={t('alts.newsroomCard')}
                title={t('cards.newsroom')}
              />
            </div>
          </div>
          <div className="h-px w-full bg-slate-200" />
          <div>
            <h3 className="text-sm font-medium text-slate-500">{t('sections.others')}</h3>
            <div className="mt-3 space-y-2">
              <MegaMenuLinkItem
                href={`/${lang}/contact`}
                onNavigate={onNavigate}
                iconSrc="/icons/header/company/contact-us.svg"
                title={t('links.contactUs')}
                iconSize="sm"
                className="rounded-md px-2 py-2 hover:bg-white"
              />
              <MegaMenuLinkItem
                href={`/${lang}/referrals`}
                onNavigate={onNavigate}
                iconSrc="/icons/header/company/referrals.svg"
                title={t('links.referrals')}
                iconSize="sm"
                className="rounded-md px-2 py-2 hover:bg-white"
              />
              <MegaMenuLinkItem
                href={`/${lang}/trust-center`}
                onNavigate={onNavigate}
                iconSrc="/icons/header/company/trust-center.svg"
                title={t('links.trustCenter')}
                iconSize="sm"
                className="rounded-md px-2 py-2 hover:bg-white"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-310 px-6 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
        <div className="border-l border-slate-200 pl-6">
          <h3 className="text-sm font-medium text-slate-500">{t('sections.about')}</h3>
          <div className="mt-5 grid grid-cols-1 gap-2 md:grid-cols-3">
            <CardLink
              href={`/${lang}/about`}
              onNavigate={onNavigate}
              imgSrc="/img/about.png"
              imgAlt={t('alts.aboutCard')}
              title={t('cards.aboutUs')}
            />
            <CardLink
              href={`/${lang}/careers`}
              onNavigate={onNavigate}
              imgSrc="/img/careers.png"
              imgAlt={t('alts.careersCard')}
              title={t('cards.careers')}
            />
            <CardLink
              href={`/${lang}/newsroom`}
              onNavigate={onNavigate}
              imgSrc="/img/newsroom.png"
              imgAlt={t('alts.newsroomCard')}
              title={t('cards.newsroom')}
            />
          </div>
        </div>
        <div className="border-l border-slate-200 pl-6">
          <h3 className="text-sm font-medium text-slate-500">{t('sections.others')}</h3>
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
