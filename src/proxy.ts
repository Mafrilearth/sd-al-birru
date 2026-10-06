import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'id', 'ar', 'ja'],

  // Used when no locale matches
  defaultLocale: 'id',
  
  // Set to 'always' if you want the locale prefix for the default locale too
  localePrefix: 'always' 
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
