'use client';

import { useTranslations } from 'next-intl';
import MegaMenuLinkItem from '@/app/[lang]/who-we-serve/plant-manager/_components/header/MegaMenuLinkItem';

type Props = {
	lang: string;
	onNavigate?: () => void;
	variant?: 'desktop' | 'mobile';
};

export default function PricingMegaMenu({ lang, onNavigate, variant = 'desktop' }: Props) {
	const t = useTranslations('plantManager.header.pricing');
	const isMobile = variant === 'mobile';

	if (isMobile) {
		return (
			<div className="rounded-md bg-slate-50 p-3">
				<div className="space-y-2">
					<MegaMenuLinkItem
						href={`/${lang}/pricing/condition-monitoring`}
						onNavigate={onNavigate}
						iconSrc="/icons/header/pricing/condition-monitoring.svg"
						title={t('conditionMonitoring')}
						showLeadingBar
						iconSize="md"
						className="rounded-md px-4 py-3 hover:bg-white"
					/>
					<MegaMenuLinkItem
						href={`/${lang}/pricing/cmms`}
						onNavigate={onNavigate}
						iconSrc="/icons/header/pricing/cmms-software.svg"
						title={t('cmmsSoftware')}
						showLeadingBar
						iconSize="md"
						className="rounded-md px-4 py-3 hover:bg-white"
					/>
				</div>
			</div>
		);
	}
	return (
		<div className="mx-auto max-w-310 px-6 py-8">
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
				<MegaMenuLinkItem
					href={`/${lang}/pricing/condition-monitoring`}
					onNavigate={onNavigate}
					iconSrc="/icons/header/pricing/condition-monitoring.svg"
					title={t('conditionMonitoring')}
					showLeadingBar
					iconSize="md"
					className="px-5"
				/>
				<MegaMenuLinkItem
					href={`/${lang}/pricing/cmms`}
					onNavigate={onNavigate}
					iconSrc="/icons/header/pricing/cmms-software.svg"
					title={t('cmmsSoftware')}
					showLeadingBar
					iconSize="md"
					className="px-5"
				/>
			</div>
		</div>
	);
}
