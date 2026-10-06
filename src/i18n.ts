import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en-US', 'id-ID', 'ar-SA', 'ja-JP'];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  
  if (!locale || !locales.includes(locale as any)) {
    locale = 'id-ID';
  }

  // Try to load dictionary, fallback to 'en-US' if not available
  let messages;
  try {
    messages = (await import(`./messages/${locale}.json`)).default;
  } catch (error) {
    messages = (await import(`./messages/en-US.json`)).default;
  }

  return {
    locale,
    messages
  };
});
