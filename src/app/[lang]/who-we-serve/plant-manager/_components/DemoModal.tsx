'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslations } from 'next-intl';

type AssetsRange = 'lt25' | '25_49' | '50_99' | '100_249' | '250p' | 'na';

function XIcon({ className = '' }: { className?: string }) {
	return (
		<svg className={className} width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
			<path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
		</svg>
	);
}

function ChevronDown({ className = '' }: { className?: string }) {
	return (
		<svg className={className} width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
			<path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

export default function DemoModal({ lang }: { lang: string }) {
	const t = useTranslations('plantManager.formModal');

	const [mounted, setMounted] = useState(false);
	const [open, setOpen] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [countryCode, setCountryCode] = useState('+55');
	const [phone, setPhone] = useState('');
	const [jobTitle, setJobTitle] = useState('');
	const [industry, setIndustry] = useState('');
	const [solution, setSolution] = useState('');
	const [assets, setAssets] = useState<AssetsRange | null>(null);

	const dialogRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => setMounted(true), []);

	const close = () => {
		setOpen(false);
		setSubmitted(false);
	};

	useEffect(() => {
		const onOpen = () => setOpen(true);
		window.addEventListener('open-demo-modal', onOpen as EventListener);
		return () => window.removeEventListener('open-demo-modal', onOpen as EventListener);
	}, []);

	useEffect(() => {
		if (!open) return;
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') close();
		};
		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
	}, [open]);

	useEffect(() => {
		if (!open) return;
		document.body.style.overflow = 'hidden';
		const t = setTimeout(() => {
			const first = dialogRef.current?.querySelector<HTMLInputElement>('input[name="name"]');
			first?.focus();
		}, 50);
		return () => {
			clearTimeout(t);
			document.body.style.overflow = '';
		};
	}, [open]);

	const assetsOptions = useMemo(
		() => [
			{ key: 'lt25' as const, label: t('assets.lt25') },
			{ key: '25_49' as const, label: t('assets.25_49') },
			{ key: '50_99' as const, label: t('assets.50_99') },
			{ key: '100_249' as const, label: t('assets.100_249') },
			{ key: '250p' as const, label: t('assets.250p') },
			{ key: 'na' as const, label: t('assets.na') },
		],
		[t]
	);

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const payload = {
			lang,
			name,
			email,
			countryCode,
			phone,
			jobTitle,
			industry,
			solution,
			assets,
			submittedAt: new Date().toISOString(),
		};

		console.log('[demo-form] submit', payload);
		setSubmitted(true);
	};

	if (!mounted) return null;
	if (!open) return null;

	const content = (
		<div className="fixed inset-0 z-80">
			<div className="absolute inset-0 bg-black/60" onClick={close} aria-hidden="true" />
			<div className="relative flex min-h-full items-center justify-center px-4 py-8">
				<div
					ref={dialogRef}
					role="dialog"
					aria-modal="true"
					aria-label={t('title')}
					className="w-full max-w-2xl rounded-sm bg-white shadow-2xl"
				>
					<div className="relative px-6 pb-7 pt-8 md:px-10">
						<button
							type="button"
							onClick={close}
							aria-label={t('close')}
							className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-sm text-slate-500 hover:bg-slate-100 hover:text-slate-700"
						>
							<XIcon />
						</button>
						<h3 className="text-center text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
							{t('title')}
						</h3>
						<p className="mx-auto mt-2 max-w-xl text-center text-sm leading-6 text-slate-600">
							{t('subtitle')}
						</p>
						<div className="mt-6">
							{submitted ? (
								<div className="rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-900">
									<p className="font-semibold">{t('success.title')}</p>
									<p className="mt-1 text-sm text-emerald-800">{t('success.desc')}</p>
									<div className="mt-4 flex justify-center">
										<button
											type="button"
											onClick={close}
											className="rounded-sm border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
										>
											{t('success.close')}
										</button>
									</div>
								</div>
							) : (
								<form onSubmit={onSubmit} className="space-y-3">
									<input
										name="name"
										value={name}
										onChange={(e) => setName(e.target.value)}
										placeholder={t('fields.name')}
										className="h-11 w-full rounded-sm border border-slate-300 px-4 text-sm outline-none focus:border-blue-600"
										required
									/>
									<input
										type="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder={t('fields.email')}
										className="h-11 w-full rounded-sm border border-slate-300 px-4 text-sm outline-none focus:border-blue-600"
										required
									/>
									<div className="grid grid-cols-1 gap-3 md:grid-cols-2">
										<div className="flex h-11 items-stretch overflow-hidden rounded-sm border border-slate-300 focus-within:border-blue-600">
											<select
												value={countryCode}
												onChange={(e) => setCountryCode(e.target.value)}
												className="h-full w-23 shrink-0 bg-white px-3 text-sm text-slate-700 outline-none"
												aria-label={t('fields.countryCode')}
											>
												<option value="+55">🇧🇷 +55</option>
												<option value="+1">🇺🇸 +1</option>
												<option value="+34">🇪🇸 +34</option>
											</select>
											<input
												value={phone}
												onChange={(e) => setPhone(e.target.value)}
												placeholder={t('fields.phone')}
												className="h-full w-full px-4 text-sm outline-none"
												inputMode="tel"
											/>
										</div>
										<div className="relative">
											<select
												value={jobTitle}
												onChange={(e) => setJobTitle(e.target.value)}
												className="h-11 w-full appearance-none rounded-sm border border-slate-300 bg-white px-4 pr-10 text-sm text-slate-700 outline-none focus:border-blue-600"
												required
											>
												<option value="" disabled>
													{t('fields.jobTitle')}
												</option>
												<option value="Plant Manager">{t('jobTitles.plantManager')}</option>
												<option value="Maintenance Manager">{t('jobTitles.maintenanceManager')}</option>
												<option value="Reliability Engineer">{t('jobTitles.reliabilityEngineer')}</option>
												<option value="Operations">{t('jobTitles.operations')}</option>
												<option value="Other">{t('jobTitles.other')}</option>
											</select>
											<ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500" />
										</div>
									</div>
									<div className="relative">
										<select
											value={industry}
											onChange={(e) => setIndustry(e.target.value)}
											className="h-11 w-full appearance-none rounded-sm border border-slate-300 bg-white px-4 pr-10 text-sm text-slate-700 outline-none focus:border-blue-600"
											required
										>
											<option value="" disabled>
												{t('fields.industry')}
											</option>
											<option value="Manufacturing">{t('industries.manufacturing')}</option>
											<option value="Food & Beverage">{t('industries.foodBeverage')}</option>
											<option value="Automotive">{t('industries.automotive')}</option>
											<option value="Oil & Gas">{t('industries.oilGas')}</option>
											<option value="Other">{t('industries.other')}</option>
										</select>
										<ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500" />
									</div>
								<div className="relative">
										<select
											value={solution}
											onChange={(e) => setSolution(e.target.value)}
											className="h-11 w-full appearance-none rounded-sm border border-slate-300 bg-white px-4 pr-10 text-sm text-slate-700 outline-none focus:border-blue-600"
											required
										>
											<option value="" disabled>
												{t('fields.solution')}
											</option>
											<option value="Condition Monitoring">{t('solutions.condition')}</option>
											<option value="CMMS">{t('solutions.cmms')}</option>
											<option value="OEE">{t('solutions.oee')}</option>
											<option value="Bundle">{t('solutions.bundle')}</option>
										</select>
										<ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500" />
									</div>
									<div className="rounded-sm border border-slate-300 px-4 py-3">
										<p className="text-sm font-medium text-slate-800">{t('assets.label')}</p>
										<div className="mt-3 flex flex-wrap gap-2">
											{assetsOptions.map((opt) => {
												const active = assets === opt.key;
												return (
													<button
														key={opt.key}
														type="button"
														onClick={() => setAssets(opt.key)}
														className={[
															'h-9 rounded-sm border px-3 text-xs font-semibold transition-colors',
															active
																? 'border-blue-600 bg-blue-50 text-blue-700'
																: 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50',
														].join(' ')}
													>
														{opt.label}
													</button>
												);
											})}
										</div>
									</div>
									<button
										type="submit"
										className="mt-2 h-11 w-full rounded-sm bg-[#16a34a] text-sm font-semibold text-white hover:bg-[#15803d]"
									>
										{t('submit')}
									</button>
								</form>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	return createPortal(content, document.body);
}
