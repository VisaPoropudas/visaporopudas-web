import { getRequestConfig } from 'next-intl/server';

const locales = ['en'];
const defaultLocale = 'en';

export default getRequestConfig(async () => {
  return {
    locale: defaultLocale,
    messages: (await import(`./messages/${defaultLocale}.json`)).default,
  };
});
