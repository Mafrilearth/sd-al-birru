import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['id', 'en', 'ar', 'ja'],

  // Used when no locale matches
  defaultLocale: 'id',
  
  // If true, the middleware will automatically redirect requests 
  // without a locale to the most appropriate one based on Accept-Language
  localePrefix: 'as-needed'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(id|en|ar|ja)/:path*']
};
