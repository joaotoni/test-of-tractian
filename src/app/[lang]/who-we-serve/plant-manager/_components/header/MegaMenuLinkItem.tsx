'use client';

import Link from 'next/link';
import Image from 'next/image';

type Props = {
	href: string;
	iconSrc: string;
	title: string;
	description?: string;
	onNavigate?: () => void;
	showLeadingBar?: boolean;
	iconSize?: 'sm' | 'md';
	className?: string;
};

export default function MegaMenuLinkItem({
	href,
	iconSrc,
	title,
	description,
	onNavigate,
	showLeadingBar = false,
	iconSize = 'md',
	className = '',
}: Props) {
	const hasDesc = Boolean(description);
	const alignClass = hasDesc ? 'items-start' : 'items-center';
	const iconBoxClass =
		iconSize === 'sm'
			? 'h-9 w-9'
			: 'h-10 w-10';
	const iconImgSize =
		iconSize === 'sm'
			? 18
			: 20;

	return (
		<Link
			href={href}
			onClick={onNavigate}
			className={[
				'group flex gap-3 rounded-md transition-colors duration-200',
				alignClass,
				className,
			].join(' ')}
		>
			{showLeadingBar && (
				<div
					className={
						iconSize === 'sm'
							? 'h-9 w-px bg-slate-300'
							: 'h-10 w-px bg-slate-300'
					}
				/>
			)}
			<span
				className={[
					'flex shrink-0 items-center justify-center border border-slate-200 ',
					iconBoxClass,
					hasDesc ? 'mt-0.5' : '',
				].join(' ')}
			>
				<Image
					src={iconSrc}
					alt=""
					width={iconImgSize}
					height={iconImgSize}
					className="opacity-80"
				/>
			</span>
			{hasDesc ? (
				<span className="min-w-0">
					<span className="flex items-center gap-2 text-sm font-semibold text-slate-800 transition-colors duration-200 group-hover:text-blue-600">
						{title}
						<span className="translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
							→
						</span>
					</span>
					<span className="mt-0.5 block text-xs leading-5 text-slate-500">
						{description}
					</span>
				</span>
			) : (
				<span className="flex items-center gap-2 text-sm font-semibold text-slate-800 transition-colors duration-200 group-hover:text-blue-600">
					{title}

					<span className="text-2xl pb-1 translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
						→
					</span>
				</span>
			)}
		</Link>
	);
}
