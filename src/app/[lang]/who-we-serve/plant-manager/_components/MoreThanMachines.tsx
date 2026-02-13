import { getTranslations } from 'next-intl/server';

export default async function MoreThanMachines() {
  const t = await getTranslations('plantManager.moreThanMachines');

  return (
    <section className="w-full">
      <div
        className="
          relative w-full overflow-hidden
          bg-[url('/img/more-than-machines-img.png')] bg-cover bg-right bg-no-repeat
          min-h-80 md:min-h-115 lg:min-h-130
        "
      >
        <div
          className="
            absolute inset-0
            bg-blue-950/85 backdrop-blur-sm
            lg:w-1/2 lg:bg-blue-950/75
          "
        />
        <div className="relative z-10 flex h-full items-center">
          <div className="ml-8 mt-20 w-full max-w-7xl px-6 py-14 md:px-10 lg:px-14">
            <div className="w-full text-center lg:w-1/2 lg:text-left">
              <div className="mx-auto max-w-xl lg:mx-0">
                <h2 className="whitespace-pre-line text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                  {t('title')}
                </h2>

                <div className="mt-8 flex justify-center lg:justify-start">
                  <a
                    href="#lead-form"
                    className="inline-flex items-center justify-center rounded-sm bg-blue-600 px-7 py-3 text-sm font-semibold text-white hover:bg-blue-500"
                  >
                    {t('cta')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
