import { getTranslations } from 'next-intl/server';

export default async function FromFirst() {
	const t = await getTranslations('plantManager.fromFirst');
	const items = t.raw('items') as {
		title: string;
		description: string;
	}[];

	return (
		<section className="bg-[#F6F8FB] px-6 py-24 md:px-10">
			<div className="mx-auto max-w-300">
				<h2 className="text-left text-3xl font-bold md:text-xl lg:text-center">
					{t('title')}
				</h2>
				<div className="mt-16 md:mt-8 grid gap-14 md:gap-8 grid-cols-1 lg:grid-cols-4">
					{items.map((item, index) => (
						<div key={item.title} className="flex flex-col">

							<div className="flex h-10 w-10 md:h-7 md:w-7 items-center justify-center rounded-xs bg-blue-600 text-white text-sm font-bold">
								{index + 1}
							</div>

							<h3 className="mt-6 md:mt-2 text-lg font-bold ">
								{item.title}
							</h3>

							<p className="mt-4 text-md leading-relaxed text-slate-500 md:text-base">
								{item.description}
							</p>

						</div>
					))}
				</div>
			</div>
		</section>
	);
}
