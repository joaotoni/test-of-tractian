'use client';

import { useEffect, useState } from 'react';

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

export default function ImageLightbox({
	open,
	src,
	alt,
	onClose,
}: {
	open: boolean;
	src: string;
	alt?: string;
	onClose: () => void;
}) {
	const [scale, setScale] = useState(1);

	const zoomIn = () => setScale((s) => clamp(Number((s + 0.25).toFixed(2)), 1, 3));
	const zoomOut = () => setScale((s) => clamp(Number((s - 0.25).toFixed(2)), 1, 3));
	const reset = () => setScale(1);

	useEffect(() => {
		if (!open) return;

		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
			if (e.key === '+' || e.key === '=') zoomIn();
			if (e.key === '-') zoomOut();
			if (e.key === '0') reset();
		};

		document.addEventListener('keydown', onKeyDown);
		document.body.style.overflow = 'hidden';

		return () => {
			document.removeEventListener('keydown', onKeyDown);
			document.body.style.overflow = '';
		};
	}, [open]);

	useEffect(() => {
		if (open) setScale(1);
	}, [open, src]);

	if (!open) return null;

	const canZoomOut = scale > 1;
	const canZoomIn = scale < 3;

	return (
		<div
			role="dialog"
			aria-modal="true"
			className="fixed inset-0 z-80 flex items-center justify-center p-4"
			onMouseDown={(e) => {
				if (e.target === e.currentTarget) onClose();
			}}
		>
			<div className="absolute inset-0 bg-black/60 pointer-events-none" />

			<div
				className="
          relative z-81
          w-[min(92vw,1200px)]
          max-h-[92vh]
          rounded-sm bg-white shadow-2xl
          flex flex-col
        "
			>
				<div className="relative flex items-center justify-end gap-3 p-4">
					<button
						type="button"
						onClick={zoomIn}
						disabled={!canZoomIn}
						aria-label="Zoom in"
						className={[
							'inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow-sm transition',
							canZoomIn ? 'hover:bg-slate-50' : 'cursor-not-allowed opacity-40',
						].join(' ')}
					>
						<svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
							<circle cx="11" cy="11" r="7" />
							<path d="M21 21l-4.3-4.3" />
							<path d="M11 8v6" />
							<path d="M8 11h6" />
						</svg>
					</button>

					<button
						type="button"
						onClick={zoomOut}
						disabled={!canZoomOut}
						aria-label="Zoom out"
						className={[
							'inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow-sm transition',
							canZoomOut ? 'hover:bg-slate-50' : 'cursor-not-allowed opacity-40',
						].join(' ')}
					>
						<svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
							<circle cx="11" cy="11" r="7" />
							<path d="M21 21l-4.3-4.3" />
							<path d="M8 11h6" />
						</svg>
					</button>

					<button
						type="button"
						onClick={onClose}
						aria-label="Close"
						className="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow-sm transition hover:bg-slate-50"
					>
						<svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M18 6 6 18" />
							<path d="M6 6l12 12" />
						</svg>
					</button>
				</div>

				<div className="px-6 pb-6">
					<div
						className={[
							'mx-auto max-h-[72vh] overflow-y-auto overflow-x-hidden',
							'touch-pan-y overscroll-contain',
							scale > 1 ? 'cursor-move' : 'cursor-default',
						].join(' ')}
						style={{
							WebkitOverflowScrolling: 'touch',
						}}
					>
						<img
							src={src}
							alt={alt ?? ''}
							className="block max-w-full select-none object-contain"
							style={{
								transform: `scale(${scale})`,
								transformOrigin: 'center',
								transition: 'transform 150ms ease',
							}}
							draggable={false}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
