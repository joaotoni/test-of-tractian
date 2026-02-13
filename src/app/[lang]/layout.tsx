import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import type {Locale} from '@/i18n/routing';

export default async function LangLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {lang: Locale};
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
