'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type Quote = {
	text: string;
	name: string;
	role: string;
	company: string;
	avatar: string;
};

export default function HearItCarousel({ quotes }: { quotes: Quote[] }) {
	const trackRef = useRef<HTMLDivElement | null>(null);
	const [active, setActive] = useState(0);
	const rafRef = useRef<number | null>(null);

	const total = quotes.length;

	const scrollToIndex = (index: number) => {
		const el = trackRef.current;
		if (!el) return;

		const clamped = Math.max(0, Math.min(index, total - 1));
		const slide = el.querySelector<HTMLElement>(`[data-slide="${clamped}"]`);
		slide?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
	};

	useEffect(() => {
		const el = trackRef.current;
		if (!el) return;

		const onScroll = () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
			rafRef.current = requestAnimationFrame(() => {
				const w = el.clientWidth || 1;
				const idx = Math.round(el.scrollLeft / w);
				setActive(Math.max(0, Math.min(idx, total - 1)));
			});
		};

		el.addEventListener('scroll', onScroll, { passive: true });
		return () => {
			el.removeEventListener('scroll', onScroll);
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		};
	}, [total]);

	return (
		<div className="mt-14">
			<div className="lg:hidden">
				<div
					ref={trackRef}
					className="no-scrollbar flex w-full snap-x snap-mandatory overflow-x-auto scroll-smooth"
					style={{ WebkitOverflowScrolling: 'touch' }}
				>
					{quotes.map((q, idx) => (
						<div
							key={`${q.name}-${q.company}-${idx}`}
							data-slide={idx}
							className="w-full flex-none snap-start px-6"
						>
							<article className="mx-auto flex min-h-65 max-w-md flex-col">
								<div className="flex items-start  gap-4 text-blue-600">
									<Image src="/icons/hear-icon.svg" alt="" width={32} height={32} className="h-8 w-8" />
									{idx === 1 ? (
										<Image
											src="/icons/icon-red.svg"
											alt=""
											width={32}
											height={32}
											className="h-6 w-6"
										/>
									) : null}
								</div>

								<p className="mt-6 text-quote italic leading-relaxed text-slate-500">{q.text}</p>

								<div className="mt-auto flex items-center gap-4 pt-6">
									<div className="relative h-14 w-14 overflow-hidden rounded-full">
										<Image src={q.avatar} alt={q.name} fill sizes="56px" className="object-cover" />
									</div>

									<div className="leading-tight">
										<p className="text-sm font-bold">{q.name}</p>
										<p className="text-sm text-slate-600">{q.role}</p>
										<p className="text-sm font-bold">{q.company}</p>
									</div>
								</div>
							</article>
						</div>
					))}
				</div>

				<div className="mt-10 flex items-center justify-center gap-3">
					{quotes.map((_, idx) => {
						const isActive = idx === active;
						return (
							<button
								key={idx}
								type="button"
								aria-label={`Go to testimonial ${idx + 1}`}
								onClick={() => scrollToIndex(idx)}
								className={[
									'h-0.5 rounded-full transition-all',
									isActive ? 'w-10 bg-blue-600' : 'w-8 bg-slate-200',
								].join(' ')}
							/>
						);
					})}
				</div>
			</div>

			<div className="hidden items-stretch gap-10 md:grid md:grid-cols-2 lg:grid-cols-4">
				{quotes.map((q, idx) => (
					<article key={`${q.name}-${q.company}`} className="flex h-full flex-col">
						<div className="text-blue-600 flex gap-2 items-center">
							<Image src="/icons/hear-icon.svg" alt="" width={32} height={32} className="h-8 w-8" />
							{idx === 1 ? (
								<Image
									src="/icons/icon-red.svg"
									alt=""
									width={28}
									height={28}
									className="h-6 w-6"
								/>
							) : null}
						</div>

						<p className="mt-6 text-quote italic leading-relaxed text-slate-500">{q.text}</p>

						<div className="mt-auto flex items-center gap-4 pt-4">
							<div className="relative h-14 w-14 overflow-hidden rounded-full">
								<Image src={q.avatar} alt={q.name} fill sizes="56px" className="object-cover" />
							</div>

							<div className="leading-tight">
								<p className="text-sm font-bold">{q.name}</p>
								<p className="text-sm">{q.role}</p>
								<p className="text-sm font-bold">{q.company}</p>
							</div>
						</div>
					</article>
				))}
			</div>
		</div>
	);
}
