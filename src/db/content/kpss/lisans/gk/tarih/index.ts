import type { TopicDef } from "../../../../types";
import { TAR_ILK_TURK_DEVLETLERI } from "./ilk-turk-devletleri";
import { TAR_TURK_ISLAM_VE_TURKIYE, TAR_TURKIYE_VE_KULTUR_MEDENIYET } from "./turk-islam-devletleri";
import { TAR_KULTUR_MEDENIYET_VE_ORTACAG_AVRUPA } from "./turk-islam-kultur";
import { TAR_OSMANLI_KURULUS_YUKSELME } from "./osmanli-kurulus";
import { TAR_DUNYA_GUCU_VE_KULTUR_MEDENIYET, TAR_OSMANLI_KULTUR_MEDENIYET_3_4_5, TAR_KULTUR_MEDENIYET_VE_17_YUZYIL } from "./dunya-gucu-osmanli";
import { TAR_18_YUZYIL_VE_AVRUPA_GELISMELERI } from "./18-yuzyil";
import { TAR_EN_UZUN_YUZYIL_1_2_3, TAR_EN_UZUN_YUZYIL_4_5_6 } from "./en-uzun-yuzyil";
import { TAR_EN_UZUN_YUZYIL_7_VE_XX_YUZYIL, TAR_XX_YUZYIL_3_VE_4 } from "./xx-yuzyil";
import { TAR_BIRINCI_DUNYA_SAVASI } from "./birinci-dunya-savasi";
import { TAR_MONDROS_ISGALLER_CEMIYETLER } from "./mondros-isgaller";
import { TAR_EN_UZUN_YUZYIL_VE_MONDROS, TAR_MILLI_MUCADELE_HAZIRLIK_2_3_4, TAR_MILLI_MUCADELE_HAZIRLIK_5_VE_6 } from "./milli-mucadele-hazirlik";
import { TAR_BASIN_YAYIN_VE_TBMM } from "./basin-yayin-tbmm";
import { TAR_KURTULUS_SAVASI_TEST_1, TAR_KURTULUS_SAVASI_TEST_4 } from "./kurtulus-savasi";
import { TAR_CUMHURIYET_DONEMI_IC_POLITIKA } from "./cumhuriyet-ic-politika";
import { TAR_ATATURK_DONEMI_INKILAPLAR } from "./ataturk-inkilaplari";
import { TAR_ATATURK_ILKELERI_VE_SAHSIYETLER } from "./ataturk-ilkeleri";
import { TAR_DIS_POLITIKA_VE_CAGDAS_DUNYA } from "./dis-politika";
import { TAR_CAGDAS_DUNYA_VE_2_DUNYA_SAVASI } from "./ikinci-dunya-savasi";
import { TAR_YUMUSAMA_DONEMI } from "./soguk-savas";
import { TAR_CAGDAS_DUNYA_TEKRAR_VE_KURESELLESME } from "./kuresellesme";

export const KPSS_GK_TARIH_TOPICS: TopicDef[] = [
  {
    name: "İlk Türk Devletleri",
    description: "Orta Asya'dan Anadolu'ya ilk Türk devletleri ve medeniyeti",
    icon: "🏛️",
    steps: [
      {
        name: "Test Seti",
        tests: [
          { name: "Test 1", questions: TAR_ILK_TURK_DEVLETLERI },
        ],
      },
    ],
  },
  {
    name: "Türk-İslam Devletleri ve Türkiye Tarihi",
    description: "İslam'ı kabul eden Türk devletleri ve Anadolu'ya yerleşme süreci",
    icon: "🏛️",
    steps: [
      {
        name: "Test Seti 1",
        tests: [
          { name: "Test 1", questions: TAR_TURK_ISLAM_VE_TURKIYE },
        ],
      },
      {
        name: "Test Seti 2",
        tests: [
          { name: "Test 1", questions: TAR_TURKIYE_VE_KULTUR_MEDENIYET },
        ],
      },
    ],
  },
  {
    name: "Türk-İslam Kültür ve Medeniyeti",
    description: "Türk-İslam devletlerinin kültür ve medeniyet anlayışı; Orta Çağ Avrupa",
    icon: "🏛️",
    steps: [
      {
        name: "Test Seti",
        tests: [
          { name: "Test 1", questions: TAR_KULTUR_MEDENIYET_VE_ORTACAG_AVRUPA },
        ],
      },
    ],
  },
  {
    name: "Osmanlı Devleti: Kuruluş ve Yükselme",
    description: "Osmanlı'nın beylikten imparatorluğa dönüşüm süreci",
    icon: "🏛️",
    steps: [
      {
        name: "Test Seti",
        tests: [
          { name: "Test 1", questions: TAR_OSMANLI_KURULUS_YUKSELME },
        ],
      },
    ],
  },
  {
    name: "Dünya Gücü Osmanlı ve Osmanlı Kültür Medeniyeti",
    description: "Osmanlı'nın dünya gücü olduğu dönem ve zengin kültür mirası",
    icon: "🏛️",
    steps: [
      {
        name: "Test Seti 1",
        tests: [
          { name: "Test 1", questions: TAR_DUNYA_GUCU_VE_KULTUR_MEDENIYET },
        ],
      },
      {
        name: "Test Seti 2",
        tests: [
          { name: "Test 1", questions: TAR_OSMANLI_KULTUR_MEDENIYET_3_4_5 },
        ],
      },
      {
        name: "Test Seti 3",
        tests: [
          { name: "Test 1", questions: TAR_KULTUR_MEDENIYET_VE_17_YUZYIL },
        ],
      },
    ],
  },
  {
    name: "XVIII. Yüzyılda Osmanlı ve Avrupa'daki Gelişmeler",
    description: "Osmanlı'nın gerileme dönemi ve Avrupa'da siyasi değişimler",
    icon: "🏛️",
    steps: [
      {
        name: "Test Seti",
        tests: [
          { name: "Test 1", questions: TAR_18_YUZYIL_VE_AVRUPA_GELISMELERI },
        ],
      },
    ],
  },
  {
    name: "En Uzun Yüzyıl",
    description: "XIX. yüzyılda Osmanlı'nın çöküş sürecindeki iç ve dış gelişmeler",
    icon: "🏛️",
    steps: [
      {
        name: "Test Seti 1",
        tests: [
          { name: "Test 1", questions: TAR_EN_UZUN_YUZYIL_1_2_3 },
        ],
      },
      {
        name: "Test Seti 2",
        tests: [
          { name: "Test 1", questions: TAR_EN_UZUN_YUZYIL_4_5_6 },
        ],
      },
    ],
  },
  {
    name: "XX. Yüzyıl Başlarında Osmanlı Devleti",
    description: "Osmanlı'nın son dönemi: Meşrutiyet, Balkan Savaşları ve çöküş",
    icon: "🏛️",
    steps: [
      {
        name: "Test Seti 1",
        tests: [
          { name: "Test 1", questions: TAR_EN_UZUN_YUZYIL_7_VE_XX_YUZYIL },
        ],
      },
      {
        name: "Test Seti 2",
        tests: [
          { name: "Test 1", questions: TAR_XX_YUZYIL_3_VE_4 },
        ],
      },
    ],
  },
  {
    name: "I. Dünya Savaşı Dönemi",
    description: "Birinci Dünya Savaşı'nda Osmanlı Devleti'nin tutumu ve savaş süreci",
    icon: "🏛️",
    steps: [
      {
        name: "Test Seti",
        tests: [
          { name: "Test 1", questions: TAR_BIRINCI_DUNYA_SAVASI },
        ],
      },
    ],
  },
  {
    name: "Mondros Ateşkesi, İşgaller ve Cemiyetler",
    description: "İşgal süreci, direniş cemiyetleri ve Mustafa Kemal'in Anadolu'ya geçişi",
    icon: "🏛️",
    steps: [
      {
        name: "Test Seti",
        tests: [
          { name: "Test 1", questions: TAR_MONDROS_ISGALLER_CEMIYETLER },
        ],
      },
    ],
  },
  {
    name: "Milli Mücadele'ye Hazırlık Dönemi",
    description: "Kongreler, TBMM'nin açılışı ve milli birliğin oluşturulması",
    icon: "🏛️",
    steps: [
      {
        name: "Test Seti 1",
        tests: [
          { name: "Test 1", questions: TAR_EN_UZUN_YUZYIL_VE_MONDROS },
        ],
      },
      {
        name: "Test Seti 2",
        tests: [
          { name: "Test 1", questions: TAR_MILLI_MUCADELE_HAZIRLIK_2_3_4 },
        ],
      },
      {
        name: "Test Seti 3",
        tests: [
          { name: "Test 1", questions: TAR_MILLI_MUCADELE_HAZIRLIK_5_VE_6 },
        ],
      },
    ],
  },
  {
    name: "Milli Mücadele'de Basın-Yayın ve TBMM Dönemi",
    description: "Kurtuluş Savaşı'nda basının rolü ve TBMM dönemi siyasi gelişmeleri",
    icon: "🏛️",
    steps: [
      {
        name: "Test Seti",
        tests: [
          { name: "Test 1", questions: TAR_BASIN_YAYIN_VE_TBMM },
        ],
      },
    ],
  },
  {
    name: "Kurtuluş Savaşı",
    description: "Milli Mücadele'nin askeri cepheleri ve zafer süreci",
    icon: "🏛️",
    steps: [
      {
        name: "Test Seti 1",
        tests: [
          { name: "Test 1", questions: TAR_KURTULUS_SAVASI_TEST_1 },
        ],
      },
      {
        name: "Test Seti 2",
        tests: [
          { name: "Test 1", questions: TAR_KURTULUS_SAVASI_TEST_4 },
        ],
      },
    ],
  },
  {
    name: "Cumhuriyet Dönemi İç Politika",
    description: "Çok partili hayata geçiş süreci ve Türkiye'nin iç siyasi tarihi",
    icon: "🏛️",
    steps: [
      {
        name: "Test Seti",
        tests: [
          { name: "Test 1", questions: TAR_CUMHURIYET_DONEMI_IC_POLITIKA },
        ],
      },
    ],
  },
  {
    name: "Atatürk Dönemi İnkılaplar",
    description: "Siyasi, hukuki, eğitim ve kültür alanlarındaki köklü değişimler",
    icon: "🏛️",
    steps: [
      {
        name: "Test Seti",
        tests: [
          { name: "Test 1", questions: TAR_ATATURK_DONEMI_INKILAPLAR },
        ],
      },
    ],
  },
  {
    name: "Atatürk İlkeleri ve Cumhuriyetin Önemli Şahsiyetleri",
    description: "Atatürk ilkeleri ve Türk modernleşmesinde önemli isimler",
    icon: "🏛️",
    steps: [
      {
        name: "Test Seti",
        tests: [
          { name: "Test 1", questions: TAR_ATATURK_ILKELERI_VE_SAHSIYETLER },
        ],
      },
    ],
  },
  {
    name: "Türk Dış Politikası ve Çağdaş Dünya",
    description: "Cumhuriyet döneminde Türkiye'nin dış politika ilkeleri ve gelişmeleri",
    icon: "🏛️",
    steps: [
      {
        name: "Test Seti",
        tests: [
          { name: "Test 1", questions: TAR_DIS_POLITIKA_VE_CAGDAS_DUNYA },
        ],
      },
    ],
  },
  {
    name: "II. Dünya Savaşı ve Sonrası",
    description: "İkinci Dünya Savaşı süreci ve dünya düzeninin yeniden şekillenmesi",
    icon: "🏛️",
    steps: [
      {
        name: "Test Seti",
        tests: [
          { name: "Test 1", questions: TAR_CAGDAS_DUNYA_VE_2_DUNYA_SAVASI },
        ],
      },
    ],
  },
  {
    name: "Soğuk Savaş ve Yumuşama Dönemi",
    description: "ABD-SSCB rekabeti, Soğuk Savaş'ın gelişimi ve bitiş süreci",
    icon: "🏛️",
    steps: [
      {
        name: "Test Seti",
        tests: [
          { name: "Test 1", questions: TAR_YUMUSAMA_DONEMI },
        ],
      },
    ],
  },
  {
    name: "Küreselleşen Dünya ve Çağdaş Türk ve Dünya Tarihi",
    description: "Küreselleşme süreci ve günümüz dünya düzeni tekrar testi",
    icon: "🏛️",
    steps: [
      {
        name: "Test Seti",
        tests: [
          { name: "Test 1", questions: TAR_CAGDAS_DUNYA_TEKRAR_VE_KURESELLESME },
        ],
      },
    ],
  },
];
