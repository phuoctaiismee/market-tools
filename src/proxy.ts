import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './config';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,
  
  // Don't use a prefix for the default locale
  localePrefix: 'as-needed' 
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|vi)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};
