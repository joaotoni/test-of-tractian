'use client';

import { useTranslations } from 'next-intl';
import MegaMenuLinkItem from '@/app/[lang]/who-we-serve/plant-manager/_components/header/MegaMenuLinkItem';

type Props = {
  lang: string;
  onNavigate?: () => void;
  variant?: 'desktop' | 'mobile';
};

export default function ResourcesMegaMenu({ lang, onNavigate, variant = 'desktop' }: Props) {
  const t = useTranslations('plantManager.header.resources');
  const isMobile = variant === 'mobile';

  if (isMobile) {
    return (
      <div className="rounded-md bg-slate-50 p-3">
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-slate-500">{t('sections.resourcesCenter')}</h3>
            <div className="mt-3 space-y-2">
              <MegaMenuLinkItem
                href={`/${lang}/resources/case-studies`}
                onNavigate={onNavigate}
                iconSrc="/icons/header/resources/case-studies.svg"
                title={t('items.caseStudies')}
                iconSize="sm"
                className="rounded-md px-2 py-2 hover:bg-white"
              />
              <MegaMenuLinkItem
                href={`/${lang}/resources/ebooks`}
                onNavigate={onNavigate}
                iconSrc="/icons/header/resources/ebooks.svg"
                title={t('items.ebooks')}
                iconSize="sm"
                className="rounded-md px-2 py-2 hover:bg-white"
              />
              <MegaMenuLinkItem
                href={`/${lang}/blog`}
                onNavigate={onNavigate}
                iconSrc="/icons/header/resources/blog.svg"
                title={t('items.blog')}
                iconSize="sm"
                className="rounded-md px-2 py-2 hover:bg-white"
              />
              <MegaMenuLinkItem
                href={`/${lang}/resources/templates`}
                onNavigate={onNavigate}
                iconSrc="/icons/header/resources/templates.svg"
                title={t('items.templates')}
                iconSize="sm"
                className="rounded-md px-2 py-2 hover:bg-white"
              />
              <MegaMenuLinkItem
                href={`/${lang}/resources/calculators`}
                onNavigate={onNavigate}
                iconSrc="/icons/header/resources/calculators.svg"
                title={t('items.calculators')}
                iconSize="sm"
                className="rounded-md px-2 py-2 hover:bg-white"
              />
              <MegaMenuLinkItem
                href={`/${lang}/resources/events-webinars`}
                onNavigate={onNavigate}
                iconSrc="/icons/header/resources/events-webinars.svg"
                title={t('items.eventsWebinars')}
                iconSize="sm"
                className="rounded-md px-2 py-2 hover:bg-white"
              />
              <MegaMenuLinkItem
                href={`/${lang}/resources/sops`}
                onNavigate={onNavigate}
                iconSrc="/icons/header/resources/sops.svg"
                title={t('items.sops')}
                iconSize="sm"
                className="rounded-md px-2 py-2 hover:bg-white"
              />
              <MegaMenuLinkItem
                href={`/${lang}/resources/chatgpt-plugins`}
                onNavigate={onNavigate}
                iconSrc="/icons/header/resources/chatgpt-plugins.svg"
                title={t('items.chatgptPlugins')}
                iconSize="sm"
                className="rounded-md px-2 py-2 hover:bg-white"
              />
            </div>
          </div>
          <div className="h-px w-full bg-slate-200" />
          <div>
            <h3 className="text-sm font-medium text-slate-500">{t('sections.customerHub')}</h3>
            <div className="mt-3 space-y-2">
              <MegaMenuLinkItem
                href={`/${lang}/resources/product-updates`}
                onNavigate={onNavigate}
                iconSrc="/icons/header/resources/product-updates.svg"
                title={t('items.productUpdates')}
                iconSize="sm"
                className="rounded-md px-2 py-2 hover:bg-white"
              />
              <MegaMenuLinkItem
                href={`/${lang}/resources/academy`}
                onNavigate={onNavigate}
                iconSrc="/icons/header/resources/tractian-academy.svg"
                title={t('items.academy')}
                iconSize="sm"
                className="rounded-md px-2 py-2 hover:bg-white"
              />
              <MegaMenuLinkItem
                href={`/${lang}/help-center`}
                onNavigate={onNavigate}
                iconSrc="/icons/header/resources/help-center.svg"
                title={t('items.helpCenter')}
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
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
        <div className="border-l border-slate-200 pl-6">
          <h3 className="text-sm font-medium text-slate-500">{t('sections.resourcesCenter')}</h3>
          <div className="mt-5 grid grid-cols-1 gap-x-10 gap-y-1 md:grid-cols-3">
            <MegaMenuLinkItem
              href={`/${lang}/resources/case-studies`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/resources/case-studies.svg"
              title={t('items.caseStudies')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/resources/ebooks`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/resources/ebooks.svg"
              title={t('items.ebooks')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/blog`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/resources/blog.svg"
              title={t('items.blog')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/resources/templates`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/resources/templates.svg"
              title={t('items.templates')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/resources/calculators`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/resources/calculators.svg"
              title={t('items.calculators')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/resources/events-webinars`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/resources/events-webinars.svg"
              title={t('items.eventsWebinars')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/resources/sops`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/resources/sops.svg"
              title={t('items.sops')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/resources/chatgpt-plugins`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/resources/chatgpt-plugins.svg"
              title={t('items.chatgptPlugins')}
              iconSize="sm"
              className="px-2"
            />
          </div>
        </div>
        <div className="border-l border-slate-200 pl-6">
          <h3 className="text-sm font-medium text-slate-500">{t('sections.customerHub')}</h3>
          <div className="mt-5 space-y-1">
            <MegaMenuLinkItem
              href={`/${lang}/resources/product-updates`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/resources/product-updates.svg"
              title={t('items.productUpdates')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/resources/academy`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/resources/tractian-academy.svg"
              title={t('items.academy')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/help-center`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/resources/help-center.svg"
              title={t('items.helpCenter')}
              iconSize="sm"
              className="px-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
