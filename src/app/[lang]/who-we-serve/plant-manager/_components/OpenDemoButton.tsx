'use client';

export default function OpenDemoButton({ className = '', children }: { className?: string; children: React.ReactNode }) {
	return (
		<button
			type="button"
			onClick={() => window.dispatchEvent(new CustomEvent('open-demo-modal'))}
			className={className}
		>
			{children}
		</button>
	);
}
