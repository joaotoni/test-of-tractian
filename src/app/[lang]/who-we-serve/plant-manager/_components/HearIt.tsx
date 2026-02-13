import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import HearItCarousel from './HearItCarousel';

type Quote = {
	text: string;
	name: string;
	role: string;
	company: string;
	avatar: string;
};

type Logos = {
	label: string;
	items: string[];
};

export default async function HearIt() {
	const t = await getTranslations('plantManager.hearIt');

	const quotes = t.raw('quotes') as Quote[];
	const logos = t.raw('logos') as Logos;

	return (
		<section className="bg-white px-6 py-20 md:px-10">
			<div className="mx-auto max-w-275">
				<h2 className="text-left lg:text-center text-2xl font-bold tracking-tight  md:text-xl">
					{t('title')}
				</h2>

				<HearItCarousel quotes={quotes} />

				<h2 className="my-18 text-center text-sm text-slate-500 md:text-base">
					{logos.label}
				</h2>
				<div className="relative overflow-hidden lg:hidden">
					<div className="flex gap-12">
						<div className="flex min-w-full shrink-0 animate-carousel items-center gap-12">
							{logos.items.map((src) => (
								<div key={`t1-${src}`} className="relative h-10 w-32 shrink-0 opacity-80">
									<Image src={src} alt="" fill sizes="120px" className="object-contain" />
								</div>
							))}
						</div>
						<div className="flex min-w-full shrink-0 animate-carousel items-center gap-12">
							{logos.items.map((src) => (
								<div key={`t2-${src}`} className="relative h-10 w-32 shrink-0 opacity-80">
									<Image src={src} alt="" fill sizes="120px" className="object-contain" />
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="hidden grid-cols-6 items-center justify-items-center gap-x-10 gap-y-10 lg:grid">
					{logos.items.map((src) => (
						<div key={src} className="relative h-10 w-32 opacity-80">
							<Image src={src} alt="" fill sizes="160px" className="object-contain" />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
