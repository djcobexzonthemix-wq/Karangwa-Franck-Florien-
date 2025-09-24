
import { translations } from '../translations';

export const t = (key: string, params: Record<string, string | number> = {}) => {
  let text = translations.en[key as keyof typeof translations.en] || key;
  
  Object.keys(params).forEach(pKey => {
    const regex = new RegExp(`{${pKey}}`, 'g');
    text = text.replace(regex, String(params[pKey]));
  });
  return text;
};
