import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'id', 'ar', 'ja'];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  
  if (!locale || !locales.includes(locale as any)) {
    locale = 'id';
  }

  // Try to load dictionary, fallback to 'en' if not available
  let messages;
  try {
    messages = (await import(`./messages/${locale}.json`)).default;
  } catch (error) {
    messages = (await import(`./messages/en.json`)).default;
  }

  return {
    locale,
    messages
  };
});
