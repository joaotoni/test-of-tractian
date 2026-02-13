'use client';

import { useEffect, useState } from 'react';

type Item = { q: string; a: string };

export default function FaqAccordion({ items }: { items: Item[] }) {
	const [openSet, setOpenSet] = useState<Set<number>>(() => new Set());

	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setOpenSet(new Set());
		};
		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
	}, []);

	const toggle = (idx: number) => {
		setOpenSet((prev) => {
			const next = new Set(prev);
			if (next.has(idx)) next.delete(idx);
			else next.add(idx);
			return next;
		});
	};

	return (
		<div className="mt-10 space-y-5">
			{items.map((it, idx) => {
				const isOpen = openSet.has(idx);

				return (
					<div
						key={`${it.q}-${idx}`}
						className={[
							'group rounded-sm border transition-colors',
							isOpen
								? 'border-blue-600'
								: 'border-slate-200 hover:border-blue-500',
						].join(' ')}
					>
						<button
							type="button"
							onClick={() => toggle(idx)}
							aria-expanded={isOpen}
							className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
						>
							<span
								className={[
									'text-base font-semibold transition-colors',
									isOpen ? 'text-blue-500' : 'text-slate-900',
								].join(' ')}
							>
								{it.q}
							</span>

							<span
								aria-hidden
								className={[
									'flex h-8 w-8 items-center justify-center rounded-full transition-transform',
									isOpen ? 'rotate-180' : 'rotate-0',
								].join(' ')}
							>
								<svg
									viewBox="0 0 24 24"
									className={['h-5 w-5', isOpen ? 'text-blue-500' : 'text-slate-500'].join(' ')}
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M6 9l6 6 6-6" />
								</svg>
							</span>
						</button>

						{isOpen ? (
							<div className="px-6 pb-6">
								<p className="text-md leading-relaxed text-slate-500">{it.a}</p>
							</div>
						) : null}
					</div>
				);
			})}
		</div>
	);
}
