import {getRequestConfig} from 'next-intl/server';
import { defaultLocale, Locale, locales } from './routing';

export default getRequestConfig(async ({locale}) => {
  const resolvedLocale: Locale =
    locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale;

  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default
  };
});
