import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {locales} from '@/i18n/routing';
import type {Locale} from '@/i18n/routing';

export function generateStaticParams() {
  return locales.map((lang) => ({lang}));
}

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{lang: Locale}>;
};

export default async function LangLayout({children, params}: LayoutProps) {
  const {lang} = await params;

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
