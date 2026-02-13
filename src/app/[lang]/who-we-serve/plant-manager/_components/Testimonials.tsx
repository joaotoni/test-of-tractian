import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

type Item = {
  title: string;
  description: string;
  icon: string;
};

export default async function Testimonials() {
  const t = await getTranslations('plantManager.testimonials');
  const items = t.raw('items') as Item[];

  return (
    <section className="bg-slate-100 px-6 py-20 md:px-10">
      <div className="mx-auto max-w-275">
        <h2 className="text-center text-2xl font-bold  md:text-2xl">
          {t('title')}
        </h2>

        <div className="mt-12 space-y-10 lg:hidden">
          {items.map((item) => (
            <div key={item.title} className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-white shadow-sm">
                <Image
                  src={item.icon}
                  alt=""
                  width={26}
                  height={26}
                  className="object-contain"
                />
              </div>

              <div>
                <h3 className="text-[15px] font-bold">
                  {item.title}
                </h3>

                <p className="mt-1 text-[15px] leading-6 text-slate-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 hidden gap-12 lg:grid lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-sm bg-white shadow-sm">
                <Image
                  src={item.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>

              <h3 className="mt-6 text-lg font-bold lg:text-xl">
                {item.title}
              </h3>

              <p className="mt-3 mx-auto max-w-[320px] text-md leading-relaxed text-slate-500 md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
