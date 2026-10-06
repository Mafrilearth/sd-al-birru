import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en-US', 'id-ID', 'ar-SA', 'ja-JP'],

  // Used when no locale matches
  defaultLocale: 'id-ID',
  
  // Automatically detect the user's language based on browser/OS settings
  localeDetection: true,
  
  // Only add prefix (e.g. /en, /ar) for non-default languages. Default language (id) uses root URL (/)
  localePrefix: 'as-needed' 
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
