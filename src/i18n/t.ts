import en from './en.json';
import es from './es.json';

const locales: Record<string, typeof en> = { en, es };

export function t(key: string, lang: string = 'en'): string {
  const locale = locales[lang] || en;
  return key.split('.').reduce((obj: any, k) => obj?.[k], locale) ?? key;
}

export function getLocaleData(lang: string = 'en') {
  return locales[lang] || en;
}
