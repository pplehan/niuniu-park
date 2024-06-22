import { createI18n } from 'vue-i18n';
import { getLang } from '@/utils/localStorage';
import zh from './lang/zh_TW.json';
import en from './lang/en_US.json';

export default createI18n({
  legacy: false,
  locale: getLang() || 'zh-TW',
  fallbackLocale: 'zh-TW',
  messages: {
    'zh-TW': zh,
    'en-US': en
  },
})