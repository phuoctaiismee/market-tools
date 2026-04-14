import { getRequestConfig } from 'next-intl/server';
import { locales, Locale } from '../config';
import { notFound } from 'next/navigation';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) as Locale;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
