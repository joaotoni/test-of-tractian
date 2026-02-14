'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import MegaMenuLinkItem from '@/app/[lang]/who-we-serve/plant-manager/_components/header/MegaMenuLinkItem';

type Props = {
  lang: string;
  onNavigate?: () => void;
  variant?: 'desktop' | 'mobile';
};

export default function SolutionsMegaMenu({ lang, onNavigate, variant = 'desktop' }: Props) {
  const t = useTranslations('plantManager.header.solutions');
  const isMobile = variant === 'mobile';

  if (isMobile) {
    return (
      <div className="rounded-md bg-slate-50 p-3">
        <div className="space-y-6">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white">
                <Image src="/icons/header/solutions/tractian-condition.svg" alt="" width={18} height={18} />
              </span>
              <h3 className="text-sm font-semibold text-slate-800">{t('columns.condition.title')}</h3>
            </div>
            <div className="space-y-2">
              <MegaMenuLinkItem
                href={`/${lang}/condition-monitoring/vibration-sensor`}
                onNavigate={onNavigate}
                iconSrc="/icons/header/solutions/vibration-sensor.svg"
                title={t('columns.condition.items.vibration.title')}
                description={t('columns.condition.items.vibration.desc')}
                iconSize="sm"
                className="rounded-md px-2 py-2 hover:bg-white"
              />
              <MegaMenuLinkItem
                href={`/${lang}/condition-monitoring/ai-failure-detection`}
                onNavigate={onNavigate}
                iconSrc="/icons/header/solutions/ai-failure.svg"
                title={t('columns.condition.items.aiFailure.title')}
                description={t('columns.condition.items.aiFailure.desc')}
                iconSize="sm"
                className="rounded-md px-2 py-2 hover:bg-white"
              />
              <MegaMenuLinkItem
                href={`/${lang}/condition-monitoring/reliability-root-cause`}
                onNavigate={onNavigate}
                iconSrc="/icons/header/solutions/reliability.svg"
                title={t('columns.condition.items.reliability.title')}
                description={t('columns.condition.items.reliability.desc')}
                iconSize="sm"
                className="rounded-md px-2 py-2 hover:bg-white"
              />
              <MegaMenuLinkItem
                href={`/${lang}/condition-monitoring/downtime-prevention-reporting`}
                onNavigate={onNavigate}
                iconSrc="/icons/header/solutions/downtime.svg"
                title={t('columns.condition.items.downtime.title')}
                description={t('columns.condition.items.downtime.desc')}
                iconSize="sm"
                className="rounded-md px-2 py-2 hover:bg-white"
              />
              <MegaMenuLinkItem
                href={`/${lang}/condition-monitoring/sensor-specifications`}
                onNavigate={onNavigate}
                iconSrc="/icons/header/solutions/sensor.svg"
                title={t('columns.condition.items.sensorSpecs.title')}
                description={t('columns.condition.items.sensorSpecs.desc')}
                iconSize="sm"
                className="rounded-md px-2 py-2 hover:bg-white"
              />
            </div>
          </div>
          <div className="h-px w-full bg-slate-200" />
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white">
                <Image src="/icons/header/solutions/tractian-cmms.svg" alt="" width={18} height={18} />
              </span>
              <h3 className="text-sm font-semibold text-slate-800">{t('columns.cmms.title')}</h3>
            </div>

            <div className="space-y-2">
              <MegaMenuLinkItem
                href={`/${lang}/cmms/troubleshooting-sops`}
                onNavigate={onNavigate}
                iconSrc="/icons/header/solutions/troubleshooting.svg"
                title={t('columns.cmms.items.troubleshooting.title')}
                description={t('columns.cmms.items.troubleshooting.desc')}
                iconSize="sm"
                className="rounded-md px-2 py-2 hover:bg-white"
              />
              <MegaMenuLinkItem
                href={`/${lang}/cmms/work-order-management`}
                onNavigate={onNavigate}
                iconSrc="/icons/header/solutions/work-order.svg"
                title={t('columns.cmms.items.workOrders.title')}
                description={t('columns.cmms.items.workOrders.desc')}
                iconSize="sm"
                className="rounded-md px-2 py-2 hover:bg-white"
              />
              <MegaMenuLinkItem
                href={`/${lang}/cmms/parts-inventory-management`}
                onNavigate={onNavigate}
                iconSrc="/icons/header/solutions/parts-inventory.svg"
                title={t('columns.cmms.items.partsInventory.title')}
                description={t('columns.cmms.items.partsInventory.desc')}
                iconSize="sm"
                className="rounded-md px-2 py-2 hover:bg-white"
              />
              <MegaMenuLinkItem
                href={`/${lang}/cmms/preventive-maintenance`}
                onNavigate={onNavigate}
                iconSrc="/icons/header/solutions/preventive-maintenance.svg"
                title={t('columns.cmms.items.preventive.title')}
                description={t('columns.cmms.items.preventive.desc')}
                iconSize="sm"
                className="rounded-md px-2 py-2 hover:bg-white"
              />
              <MegaMenuLinkItem
                href={`/${lang}/integrations`}
                onNavigate={onNavigate}
                iconSrc="/icons/header/solutions/integrations.svg"
                title={t('columns.cmms.items.integrations.title')}
                description={t('columns.cmms.items.integrations.desc')}
                iconSize="sm"
                className="rounded-md px-2 py-2 hover:bg-white"
              />
            </div>
          </div>

          <div className="h-px w-full bg-slate-200" />

          {/* OEE */}
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white">
                <Image src="/icons/header/solutions/tractian-oee.svg" alt="" width={18} height={18} />
              </span>
              <h3 className="text-sm font-semibold text-slate-800">{t('columns.oee.title')}</h3>
            </div>

            <div className="space-y-2">
              <MegaMenuLinkItem
                href={`/${lang}/oee/ai-production-tracking`}
                onNavigate={onNavigate}
                iconSrc="/icons/header/solutions/ai-production-tracking.svg"
                title={t('columns.oee.items.production.title')}
                description={t('columns.oee.items.production.desc')}
                iconSize="sm"
                className="rounded-md px-2 py-2 hover:bg-white"
              />
              <MegaMenuLinkItem
                href={`/${lang}/oee/operator-performance`}
                onNavigate={onNavigate}
                iconSrc="/icons/header/solutions/operator-performance.svg"
                title={t('columns.oee.items.operator.title')}
                description={t('columns.oee.items.operator.desc')}
                iconSize="sm"
                className="rounded-md px-2 py-2 hover:bg-white"
              />
              <MegaMenuLinkItem
                href={`/${lang}/oee/digitized-quality`}
                onNavigate={onNavigate}
                iconSrc="/icons/header/solutions/digitized-quality.svg"
                title={t('columns.oee.items.quality.title')}
                description={t('columns.oee.items.quality.desc')}
                iconSize="sm"
                className="rounded-md px-2 py-2 hover:bg-white"
              />
              <MegaMenuLinkItem
                href={`/${lang}/oee/custom-dashboards`}
                onNavigate={onNavigate}
                iconSrc="/icons/header/solutions/custom-dashboards.svg"
                title={t('columns.oee.items.dashboards.title')}
                description={t('columns.oee.items.dashboards.desc')}
                iconSize="sm"
                className="rounded-md px-2 py-2 hover:bg-white"
              />
              <MegaMenuLinkItem
                href={`/${lang}/oee/utility-process-analytics`}
                onNavigate={onNavigate}
                iconSrc="/icons/header/solutions/utility-process.svg"
                title={t('columns.oee.items.utility.title')}
                description={t('columns.oee.items.utility.desc')}
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
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-0">
        <div className="border-l border-slate-200/80 pr-0 lg:pr-10">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white">
              <Image src="/icons/header/solutions/tractian-condition.svg" alt="" width={20} height={20} />
            </span>
            <h3 className="text-base font-semibold text-slate-800">{t('columns.condition.title')}</h3>
          </div>
          <div className="space-y-4">
            <MegaMenuLinkItem
              href={`/${lang}/condition-monitoring/vibration-sensor`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/solutions/vibration-sensor.svg"
              title={t('columns.condition.items.vibration.title')}
              description={t('columns.condition.items.vibration.desc')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/condition-monitoring/ai-failure-detection`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/solutions/ai-failure.svg"
              title={t('columns.condition.items.aiFailure.title')}
              description={t('columns.condition.items.aiFailure.desc')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/condition-monitoring/reliability-root-cause`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/solutions/reliability.svg"
              title={t('columns.condition.items.reliability.title')}
              description={t('columns.condition.items.reliability.desc')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/condition-monitoring/downtime-prevention-reporting`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/solutions/downtime.svg"
              title={t('columns.condition.items.downtime.title')}
              description={t('columns.condition.items.downtime.desc')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/condition-monitoring/sensor-specifications`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/solutions/sensor.svg"
              title={t('columns.condition.items.sensorSpecs.title')}
              description={t('columns.condition.items.sensorSpecs.desc')}
              iconSize="sm"
              className="px-2"
            />
          </div>
        </div>
        <div className="border-l border-slate-200/80 px-0 lg:px-10">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white">
              <Image src="/icons/header/solutions/tractian-cmms.svg" alt="" width={20} height={20} />
            </span>
            <h3 className="text-base font-semibold text-slate-800">{t('columns.cmms.title')}</h3>
          </div>
          <div className="space-y-4">
            <MegaMenuLinkItem
              href={`/${lang}/cmms/troubleshooting-sops`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/solutions/troubleshooting.svg"
              title={t('columns.cmms.items.troubleshooting.title')}
              description={t('columns.cmms.items.troubleshooting.desc')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/cmms/work-order-management`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/solutions/work-order.svg"
              title={t('columns.cmms.items.workOrders.title')}
              description={t('columns.cmms.items.workOrders.desc')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/cmms/parts-inventory-management`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/solutions/parts-inventory.svg"
              title={t('columns.cmms.items.partsInventory.title')}
              description={t('columns.cmms.items.partsInventory.desc')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/cmms/preventive-maintenance`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/solutions/preventive-maintenance.svg"
              title={t('columns.cmms.items.preventive.title')}
              description={t('columns.cmms.items.preventive.desc')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/integrations`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/solutions/integrations.svg"
              title={t('columns.cmms.items.integrations.title')}
              description={t('columns.cmms.items.integrations.desc')}
              iconSize="sm"
              className="px-2"
            />
          </div>
        </div>
        <div className="border-l border-slate-200/80 pl-0 lg:pl-10">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white">
              <Image src="/icons/header/solutions/tractian-oee.svg" alt="" width={20} height={20} />
            </span>
            <h3 className="text-base font-semibold text-slate-800">{t('columns.oee.title')}</h3>
          </div>
          <div className="space-y-4">
            <MegaMenuLinkItem
              href={`/${lang}/oee/ai-production-tracking`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/solutions/ai-production-tracking.svg"
              title={t('columns.oee.items.production.title')}
              description={t('columns.oee.items.production.desc')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/oee/operator-performance`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/solutions/operator-performance.svg"
              title={t('columns.oee.items.operator.title')}
              description={t('columns.oee.items.operator.desc')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/oee/digitized-quality`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/solutions/digitized-quality.svg"
              title={t('columns.oee.items.quality.title')}
              description={t('columns.oee.items.quality.desc')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/oee/custom-dashboards`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/solutions/custom-dashboards.svg"
              title={t('columns.oee.items.dashboards.title')}
              description={t('columns.oee.items.dashboards.desc')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/oee/utility-process-analytics`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/solutions/utility-process.svg"
              title={t('columns.oee.items.utility.title')}
              description={t('columns.oee.items.utility.desc')}
              iconSize="sm"
              className="px-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
