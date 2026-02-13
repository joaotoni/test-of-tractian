import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {locales} from '@/i18n/routing';
import type {Locale} from '@/i18n/routing';

export function generateStaticParams() {
  return locales.map((lang) => ({lang}));
}

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{lang: string}>;
};

export default async function LangLayout({children, params}: LayoutProps) {
  const {lang: rawLang} = await params;

  const lang = locales.includes(rawLang as Locale) ? (rawLang as Locale) : null;
  if (!lang) notFound();

  const messages = await getMessages({locale: lang});

  return (
    <html lang={lang}>
      <body>
        <NextIntlClientProvider locale={lang} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
