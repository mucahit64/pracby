import type { TopicDef } from "../../../../types";
import { VAT_1982_GENEL_HUKUMLER_TEST_1, VAT_1982_GENEL_HUKUMLER_TEST_2 } from "./1982-anayasasi genel-hukumler";
import { VAT_ANAYASA_TARIHI_TEST_1, VAT_ANAYASA_TARIHI_TEST_2, VAT_ANAYASA_TARIHI_TEST_3 } from "./anayasa-tarihi";
import { VAT_IDARE_HUKUKU_TEST_1, VAT_IDARE_HUKUKU_TEST_10, VAT_IDARE_HUKUKU_TEST_2, VAT_IDARE_HUKUKU_TEST_3, VAT_IDARE_HUKUKU_TEST_4, VAT_IDARE_HUKUKU_TEST_5, VAT_IDARE_HUKUKU_TEST_6, VAT_IDARE_HUKUKU_TEST_7, VAT_IDARE_HUKUKU_TEST_8, VAT_IDARE_HUKUKU_TEST_9 } from "./idare-hukuku";
import { VAT_INSAN_HAKLARI_HUKUKU_TEST_1, VAT_INSAN_HAKLARI_HUKUKU_TEST_2 } from "./insan-haklari-hukuku";
import { VAT_TARAMA_TEST_1 } from "./tarama";
import { VAT_TEMEL_HAK_VE_OZGURLUKLER_TEST_1, VAT_TEMEL_HAK_VE_OZGURLUKLER_TEST_2, VAT_TEMEL_HAK_VE_OZGURLUKLER_TEST_3, VAT_TEMEL_HAK_VE_OZGURLUKLER_TEST_4, VAT_TEMEL_HAK_VE_OZGURLUKLER_TEST_5 } from "./temel-hak-ve-ozgurlukler";
import { VAT_TEMEL_HUKUK_TEST_1, VAT_TEMEL_HUKUK_TEST_10, VAT_TEMEL_HUKUK_TEST_11, VAT_TEMEL_HUKUK_TEST_2, VAT_TEMEL_HUKUK_TEST_3, VAT_TEMEL_HUKUK_TEST_4, VAT_TEMEL_HUKUK_TEST_5, VAT_TEMEL_HUKUK_TEST_6, VAT_TEMEL_HUKUK_TEST_7, VAT_TEMEL_HUKUK_TEST_8, VAT_TEMEL_HUKUK_TEST_9 } from "./temel-hukuk-kavramlari";
import { VAT_YARGI_TEST_1, VAT_YARGI_TEST_2, VAT_YARGI_TEST_3, VAT_YARGI_TEST_4, VAT_YARGI_TEST_5 } from "./yargi";
import { VAT_YASAMA_TEST_1, VAT_YASAMA_TEST_2, VAT_YASAMA_TEST_3, VAT_YASAMA_TEST_4, VAT_YASAMA_TEST_5, VAT_YASAMA_TEST_6, VAT_YASAMA_TEST_7 } from "./yasama";
import { VAT_YURUTME_TEST_1, VAT_YURUTME_TEST_2, VAT_YURUTME_TEST_3, VAT_YURUTME_TEST_4, VAT_YURUTME_TEST_5 } from "./yurutme";

export const KPSS_GK_VATANDASLIK_TOPICS: TopicDef[] = [
  {
    name: "Temel Hukuk Kavramları",
    description: "Hukukun temel kuralları, yaptırımları, hak kavramı ve ehliyet türleri",
    steps: [
      { questions: VAT_TEMEL_HUKUK_TEST_1 },
      { questions: VAT_TEMEL_HUKUK_TEST_2 },
      { questions: VAT_TEMEL_HUKUK_TEST_3 },
      { reward: true, amount: 10 },
      { questions: VAT_TEMEL_HUKUK_TEST_4 },
      { questions: VAT_TEMEL_HUKUK_TEST_5 },
      { reward: true, amount: 10 },
      { questions: VAT_TEMEL_HUKUK_TEST_6 },
      { questions: VAT_TEMEL_HUKUK_TEST_7 },
      { reward: true, amount: 10 },
      { questions: VAT_TEMEL_HUKUK_TEST_8 },
      { questions: VAT_TEMEL_HUKUK_TEST_9 },
      { reward: true, amount: 10 },
      { questions: VAT_TEMEL_HUKUK_TEST_10 },
      { questions: VAT_TEMEL_HUKUK_TEST_11 },
    ],
  },
  {
    name: "Anayasa Tarihi",
    description: "Osmanlı'dan günümüze Türk anayasa tarihi ve gelişmeleri",
    steps: [
      { questions: VAT_ANAYASA_TARIHI_TEST_1 },
      { questions: VAT_ANAYASA_TARIHI_TEST_2 },
      { reward: true, amount: 10 },
      { questions: VAT_ANAYASA_TARIHI_TEST_3 },
    ],
  },
  {
    name: "1982 Anayasası Genel Hükümler",
    description: "1982 Anayasasının temel ilkeleri ve devletin nitelikleri",
    steps: [
      { questions: VAT_1982_GENEL_HUKUMLER_TEST_1 },
      { reward: true, amount: 10 },
      { questions: VAT_1982_GENEL_HUKUMLER_TEST_2 },
    ],
  },
  {
    name: "Temel Hak ve Hürriyetler",
    description: "Kişi hakları, sosyal ve ekonomik haklar, siyasi haklar ve ödevler",
    steps: [
      { questions: VAT_TEMEL_HAK_VE_OZGURLUKLER_TEST_1 },
      { questions: VAT_TEMEL_HAK_VE_OZGURLUKLER_TEST_2 },
      { reward: true, amount: 10 },
      { questions: VAT_TEMEL_HAK_VE_OZGURLUKLER_TEST_3 },
      { questions: VAT_TEMEL_HAK_VE_OZGURLUKLER_TEST_4 },
      { reward: true, amount: 10 },
      { questions: VAT_TEMEL_HAK_VE_OZGURLUKLER_TEST_5 },
    ],
  },
  {
    name: "Yasama",
    description: "TBMM'nin yapısı, görevleri, kanun yapım süreci ve seçimler",
    steps: [
      { questions: VAT_YASAMA_TEST_1 },
      { questions: VAT_YASAMA_TEST_2 },
      { questions: VAT_YASAMA_TEST_3 },
      { reward: true, amount: 10 },
      { questions: VAT_YASAMA_TEST_4 },
      { questions: VAT_YASAMA_TEST_5 },
      { reward: true, amount: 10 },
      { questions: VAT_YASAMA_TEST_6 },
      { questions: VAT_YASAMA_TEST_7 },
    ],
  },
  {
    name: "Yürütme",
    description: "Cumhurbaşkanının görevleri, yürütme organının yapısı ve yetkileri",
    steps: [
      { questions: VAT_YURUTME_TEST_1 },
      { questions: VAT_YURUTME_TEST_2 },
      { questions: VAT_YURUTME_TEST_3 },
      { reward: true, amount: 10 },
      { questions: VAT_YURUTME_TEST_4 },
      { questions: VAT_YURUTME_TEST_5 },
    ],
  },
  {
    name: "Yargı",
    description: "Yüksek mahkemeler, yargı yolu ve mahkemelerin bağımsızlığı",
    steps: [
      { questions: VAT_YARGI_TEST_1 },
      { questions: VAT_YARGI_TEST_2 },
      { reward: true, amount: 10 },
      { questions: VAT_YARGI_TEST_3 },
      { questions: VAT_YARGI_TEST_4 },
      { reward: true, amount: 10 },
      { questions: VAT_YARGI_TEST_5 },
    ],
  },
  {
    name: "İdare Hukuku",
    description: "Türkiye'nin idari yapısı, yerel yönetimler, memurlar ve idari işlemler",
    steps: [
      { questions: VAT_IDARE_HUKUKU_TEST_1 },
      { questions: VAT_IDARE_HUKUKU_TEST_2 },
      { questions: VAT_IDARE_HUKUKU_TEST_3 },
      { reward: true, amount: 10 },
      { questions: VAT_IDARE_HUKUKU_TEST_4 },
      { questions: VAT_IDARE_HUKUKU_TEST_5 },
      { reward: true, amount: 10 },
      { questions: VAT_IDARE_HUKUKU_TEST_6 },
      { questions: VAT_IDARE_HUKUKU_TEST_7 },
      { questions: VAT_IDARE_HUKUKU_TEST_8 },
      { reward: true, amount: 10 },
      { questions: VAT_IDARE_HUKUKU_TEST_9 },
      { questions: VAT_IDARE_HUKUKU_TEST_10 },
    ],
  },
  {
    name: "İnsan Hakları Hukuku",
    description: "Ulusal ve uluslararası boyutta insan haklarının korunması mekanizmaları",
    steps: [
      { questions: VAT_INSAN_HAKLARI_HUKUKU_TEST_1 },
      { reward: true, amount: 10 },
      { questions: VAT_INSAN_HAKLARI_HUKUKU_TEST_2 },
    ],
  },
  {
    name: "Genel Tarama",
    description: "Tüm KPSS Vatandaşlık konularını kapsayan genel değerlendirme",
    steps: [
      { questions: VAT_TARAMA_TEST_1 },
      { reward: true, amount: 10 },
    ],
  },
];