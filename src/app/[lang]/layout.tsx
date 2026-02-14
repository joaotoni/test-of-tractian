import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {locales} from '@/i18n/routing';
import type {Locale} from '@/i18n/routing';

export function generateStaticParams() {
  return locales.map((lang) => ({lang}));
}

export default async function LangLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{lang: string}>;
}) {
  const {lang: rawLang} = await params;

  const lang = locales.includes(rawLang as Locale) ? (rawLang as Locale) : null;
  if (!lang) notFound();

  setRequestLocale(lang);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider key={lang} locale={lang} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
