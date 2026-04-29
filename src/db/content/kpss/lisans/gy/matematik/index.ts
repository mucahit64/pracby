import type { TopicDef } from "../../../../types";
import { MAT_DEGER_VERME, MAT_EN_BUYUK_EN_KUCUK, MAT_ARDISIK_SAYILAR_T1, MAT_ARDISIK_SAYILAR_T2, MAT_ARDISIK_SAYILARIN_TOPLAMI, MAT_TEK_CIFT_T1, MAT_FAKTORIYEL_T3, MAT_TEMEL_KAVRAMLAR_GENEL } from "./temel-kavramlar";
import { MAT_BOLME_T1, MAT_BOLUNEBILME_T2, MAT_BOLME_BOLUNEBILME_T4 } from "./bolme-bolunebilme";
import { MAT_RASYONEL_SAYILAR_T3_T4 } from "./rasyonel-sayilar";
import { MAT_USLU_SAYILAR_T3_T4 } from "./uslu-sayilar";
import { MAT_KOKLU_SAYILAR_T1 } from "./koklu-sayilar";
import { MAT_BASIT_ESITSIZLIKLER_T2_DEVAM, MAT_BASIT_ESITSIZLIKLER_T3 } from "./basit-esitsizlik";
import { MAT_CARPANLARA_AYIRMA_T1 } from "./carpanlara-ayirma";
import { MAT_ORAN_ORANTI_T2_DEVAM } from "./oran-oranti";
import { MAT_SAYI_PROBLEMLERI_T3, MAT_SAYI_PROBLEMLERI_T5 } from "./sayi-problemleri";
import { MAT_KESIR_PROBLEMLERI_T3 } from "./kesir-problemleri";
import { MAT_SAYISAL_MANTIK_T5 } from "./sayisal-mantik";
import { MAT_YUZDE_PROBLEMLERI_T1 } from "./yuzde-problemleri";
import { MAT_HAREKET_PROBLEMLERI_T1 } from "./hareket-problemleri";
import { MAT_ISCI_HAVUZ_T1 } from "./isci-havuz";
import { MAT_ISLEM_T1 } from "./islem";
import { MAT_KATI_CISIMLER_T2, MAT_ANALITIK_GEOMETRI_T1, MAT_ANALITIK_GEOMETRI_T2 } from "./geometri";

export const KPSS_GY_MATEMATIK_TOPICS: TopicDef[] = [
  {
    name: "Temel Kavramlar (GY Matematik)",
    description: "Sayı sistemleri, ardışık sayılar, basamaklar, asal sayılar ve faktöriyel",
    icon: "🔢",
    steps: [
      {
        name: "Değer Verme",
        tests: [
          { name: "Test 1", questions: MAT_DEGER_VERME },
        ],
      },
      {
        name: "En Büyük-En Küçük Sayılar",
        tests: [
          { name: "Test 1", questions: MAT_EN_BUYUK_EN_KUCUK },
        ],
      },
      {
        name: "Ardışık Sayılar",
        tests: [
          { name: "Test 1", questions: MAT_ARDISIK_SAYILAR_T1 },
          { name: "Test 2", questions: MAT_ARDISIK_SAYILAR_T2 },
        ],
      },
      {
        name: "Ardışık Sayıların Toplamı",
        tests: [
          { name: "Test 1", questions: MAT_ARDISIK_SAYILARIN_TOPLAMI },
        ],
      },
      {
        name: "Tek-Çift Sayılar",
        tests: [
          { name: "Test 1", questions: MAT_TEK_CIFT_T1 },
        ],
      },
      {
        name: "Faktöriyel",
        tests: [
          { name: "Test 1", questions: MAT_FAKTORIYEL_T3 },
        ],
      },
      {
        name: "Temel Kavramlar Genel",
        tests: [
          { name: "Test 1", questions: MAT_TEMEL_KAVRAMLAR_GENEL },
        ],
      },
    ],
  },
  {
    name: "Bölme-Bölünebilme",
    description: "Bölme işlemi ve bölünebilme kuralları",
    icon: "➗",
    steps: [
      {
        name: "Bölme",
        tests: [
          { name: "Test 1", questions: MAT_BOLME_T1 },
        ],
      },
      {
        name: "Bölünebilme",
        tests: [
          { name: "Test 1", questions: MAT_BOLUNEBILME_T2 },
        ],
      },
      {
        name: "Bölme-Bölünebilme Genel",
        tests: [
          { name: "Test 1", questions: MAT_BOLME_BOLUNEBILME_T4 },
        ],
      },
    ],
  },
  {
    name: "Rasyonel Sayılar",
    description: "Kesirler, ondalıklı sayılar ve rasyonel sayı işlemleri",
    icon: "½",
    steps: [
      {
        name: "Rasyonel Sayılar",
        tests: [
          { name: "Test 1", questions: MAT_RASYONEL_SAYILAR_T3_T4 },
        ],
      },
    ],
  },
  {
    name: "Üslü Sayılar",
    description: "Kuvvet alma ve üslü sayı işlemleri",
    icon: "xⁿ",
    steps: [
      {
        name: "Üslü Sayılar",
        tests: [
          { name: "Test 1", questions: MAT_USLU_SAYILAR_T3_T4 },
        ],
      },
    ],
  },
  {
    name: "Köklü Sayılar",
    description: "Karekök ve köklü ifadelerle işlemler",
    icon: "√",
    steps: [
      {
        name: "Köklü Sayılar",
        tests: [
          { name: "Test 1", questions: MAT_KOKLU_SAYILAR_T1 },
        ],
      },
    ],
  },
  {
    name: "Basit Eşitsizlik",
    description: "Birinci dereceden eşitsizlikler",
    icon: "≤",
    steps: [
      {
        name: "Basit Eşitsizlik",
        tests: [
          { name: "Test 1", questions: MAT_BASIT_ESITSIZLIKLER_T2_DEVAM },
          { name: "Test 2", questions: MAT_BASIT_ESITSIZLIKLER_T3 },
        ],
      },
    ],
  },
  {
    name: "Çarpanlara Ayırma",
    description: "Cebirsel ifadelerin çarpanlarına ayrılması",
    icon: "✖",
    steps: [
      {
        name: "Çarpanlara Ayırma",
        tests: [
          { name: "Test 1", questions: MAT_CARPANLARA_AYIRMA_T1 },
        ],
      },
    ],
  },
  {
    name: "Oran-Orantı",
    description: "Oran, orantı ve doğru-ters orantı problemleri",
    icon: "📐",
    steps: [
      {
        name: "Oran-Orantı",
        tests: [
          { name: "Test 1", questions: MAT_ORAN_ORANTI_T2_DEVAM },
        ],
      },
    ],
  },
  {
    name: "Sayı Problemleri",
    description: "Sayılarla ilgili sözel problemler",
    icon: "🔢",
    steps: [
      {
        name: "Sayı Problemleri",
        tests: [
          { name: "Test 1", questions: MAT_SAYI_PROBLEMLERI_T3 },
          { name: "Test 2", questions: MAT_SAYI_PROBLEMLERI_T5 },
        ],
      },
    ],
  },
  {
    name: "Kesir Problemleri",
    description: "Kesir içeren sözel problemler",
    icon: "½",
    steps: [
      {
        name: "Kesir Problemleri",
        tests: [
          { name: "Test 1", questions: MAT_KESIR_PROBLEMLERI_T3 },
        ],
      },
    ],
  },
  {
    name: "Sayısal Mantık Problemleri",
    description: "Mantık yürütme ve sayısal akıl yürütme problemleri",
    icon: "🧠",
    steps: [
      {
        name: "Sayısal Mantık Problemleri",
        tests: [
          { name: "Test 1", questions: MAT_SAYISAL_MANTIK_T5 },
        ],
      },
    ],
  },
  {
    name: "Yüzde Problemleri",
    description: "Yüzde hesaplamaları ve yüzde artış-azalış problemleri",
    icon: "%",
    steps: [
      {
        name: "Yüzde Problemleri",
        tests: [
          { name: "Test 1", questions: MAT_YUZDE_PROBLEMLERI_T1 },
        ],
      },
    ],
  },
  {
    name: "Hareket Problemleri",
    description: "Hız, zaman ve mesafe problemleri",
    icon: "🚗",
    steps: [
      {
        name: "Hareket Problemleri",
        tests: [
          { name: "Test 1", questions: MAT_HAREKET_PROBLEMLERI_T1 },
        ],
      },
    ],
  },
  {
    name: "İşçi-Havuz Problemleri",
    description: "İşçi ve havuz doldurup boşaltma problemleri",
    icon: "🏗️",
    steps: [
      {
        name: "İşçi-Havuz Problemleri",
        tests: [
          { name: "Test 1", questions: MAT_ISCI_HAVUZ_T1 },
        ],
      },
    ],
  },
  {
    name: "İşlem",
    description: "Özel tanımlı işlem problemleri",
    icon: "⚙️",
    steps: [
      {
        name: "İşlem",
        tests: [
          { name: "Test 1", questions: MAT_ISLEM_T1 },
        ],
      },
    ],
  },
  {
    name: "Geometri",
    description: "Açılar, üçgenler, dörtgenler, çember ve analitik geometri",
    icon: "📐",
    steps: [
      {
        name: "Katı Cisimler",
        tests: [
          { name: "Test 1", questions: MAT_KATI_CISIMLER_T2 },
        ],
      },
      {
        name: "Analitik Geometri",
        tests: [
          { name: "Test 1", questions: MAT_ANALITIK_GEOMETRI_T1 },
          { name: "Test 2", questions: MAT_ANALITIK_GEOMETRI_T2 },
        ],
      },
    ],
  },
];
