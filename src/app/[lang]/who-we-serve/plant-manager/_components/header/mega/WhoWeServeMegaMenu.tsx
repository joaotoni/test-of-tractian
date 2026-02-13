'use client';

import { useTranslations } from 'next-intl';
import MegaMenuLinkItem from '@/app/[lang]/who-we-serve/plant-manager/_components/header/MegaMenuLinkItem';

export default function WhoWeServeMegaMenu({
  lang,
  onNavigate,
}: {
  lang: string;
  onNavigate?: () => void;
}) {
  const t = useTranslations('plantManager.header.whoWeServe');

  return (
    <div className="mx-auto max-w-310 px-6 py-8">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr]">
        <div className="border-l border-slate-200 pl-6">
          <h3 className="text-sm font-medium text-slate-500">
            {t('sections.byRole')}
          </h3>
          <div className="mt-5 space-y-1">
            <MegaMenuLinkItem
              href={`/${lang}/who-we-serve/plant-manager`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/who-we-serve/person.svg"
              title={t('roles.plantManager')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/who-we-serve/reliability-engineer`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/who-we-serve/person.svg"
              title={t('roles.reliabilityEngineer')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/who-we-serve/maintenance-engineer`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/who-we-serve/person.svg"
              title={t('roles.maintenanceEngineer')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/who-we-serve/manufacturing-engineer`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/who-we-serve/person.svg"
              title={t('roles.manufacturingEngineer')}
              iconSize="sm"
              className="px-2"
            />
          </div>
        </div>
        <div className="border-l border-slate-200 pl-6">
          <h3 className="text-sm font-medium text-slate-500">
            {t('sections.bySector')}
          </h3>
          <div className="mt-5 grid grid-cols-1 gap-x-10 gap-y-1 md:grid-cols-3">
            <MegaMenuLinkItem
              href={`/${lang}/who-we-serve/automotive-parts`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/who-we-serve/automotive-parts.svg"
              title={t('sectors.automotiveParts')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/who-we-serve/fleet`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/who-we-serve/fleet.svg"
              title={t('sectors.fleet')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/who-we-serve/manufacturing`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/who-we-serve/manufacturing.svg"
              title={t('sectors.manufacturing')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/who-we-serve/oil-gas`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/who-we-serve/oil-gas.svg"
              title={t('sectors.oilGas')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/who-we-serve/chemicals`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/who-we-serve/chemicals.svg"
              title={t('sectors.chemicals')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/who-we-serve/food-beverage`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/who-we-serve/food-beverage.svg"
              title={t('sectors.foodBeverage')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/who-we-serve/mills-agriculture`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/who-we-serve/mills-agriculture.svg"
              title={t('sectors.millsAgriculture')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/who-we-serve/facilities`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/who-we-serve/facilities.svg"
              title={t('sectors.facilities')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/who-we-serve/heavy-equipment`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/who-we-serve/heavy-equipment.svg"
              title={t('sectors.heavyEquipment')}
              iconSize="sm"
              className="px-2"
            />
            <MegaMenuLinkItem
              href={`/${lang}/who-we-serve/mining-metals`}
              onNavigate={onNavigate}
              iconSrc="/icons/header/who-we-serve/mining-metals.svg"
              title={t('sectors.miningMetals')}
              iconSize="sm"
              className="px-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}