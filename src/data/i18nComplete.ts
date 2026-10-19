import { I18N_PART_1, type TrilingualEntry } from './i18nPart1';
import { I18N_PART_2 } from './i18nPart2';
import { I18N_PART_3 } from './i18nPart3';
import { I18N_PART_4 } from './i18nPart4';
import { I18N_PART_5 } from './i18nPart5';
import { I18N_PART_6 } from './i18nPart6';
import { I18N_PART_7 } from './i18nPart7';

export const I18N_TEXT_MAP: Record<string, TrilingualEntry> = {
  ...I18N_PART_1,
  ...I18N_PART_2,
  ...I18N_PART_3,
  ...I18N_PART_4,
  ...I18N_PART_5,
  ...I18N_PART_6,
  ...I18N_PART_7,
};

export const I18N_PLACEHOLDER_MAP: Record<string, TrilingualEntry> = {
  "e.g., Daniel Tan": {
    bm: "cth., Daniel Tan",
    zh: "例如：陈伟明 (Daniel Tan)"
  },
  "e.g., Apex Retail Sdn Bhd": {
    bm: "cth., Apex Retail Sdn Bhd",
    zh: "例如：Apex Retail Sdn Bhd"
  },
  "name@company.com": {
    bm: "nama@syarikat.com",
    zh: "name@company.com"
  },
  "e.g., +60 12-345 6789": {
    bm: "cth., +60 12-345 6789",
    zh: "例如：+60 12-345 6789"
  },
  "Tell us what you want to automate or replace...": {
    bm: "Beritahu kami apa yang anda mahu automasikan atau gantikan...",
    zh: "请简述您希望自动化或替换的业务流程..."
  },
  "Answer": {
    bm: "Jawapan",
    zh: "输入答案"
  },
  "Ask about OCR, POS, ERPNext, LHDN...": {
    bm: "Tanya tentang OCR, POS, ERPNext, LHDN...",
    zh: "询问有关 OCR、POS、ERPNext、LHDN..."
  }
};
