import { TopicDef } from "../../../../types";
import { COGRAFI_KONUM_TEST1, COGRAFI_KONUM_TEST2, COGRAFI_KONUM_TEST3 } from "./cografi-konum";
import { DAGLAR_TEST_1, IC_KUVVETLER_TEST_1, TURKIYENIN_YER_SEKILLERININ_GENEL_OZELLIKLERI_TEST_1, TURKIYENIN_PLATOLARI_TEST_1, TURKIYENIN_OVALARI_TEST_1, JEOLOJIK_ZAMANLAR_TEST_1, DENIZLER_VE_KORFEZLER_TEST_1, GOLLER_TEST_1, AKARSULAR_TEST_1, YER_SEKILLERI_TURKIYENIN_YERALTI_SULARI_KAYNAKLARI_VE_KIYI_TIPLERI_TEST_1 } from "./yer-sekilleri-jeolojik-zamanlar";

export const KPSS_GK_COGRAFYA_TOPICS: TopicDef[] = [
  {
    name: "Coğrafi Konum",
    description: "Türkiye'nin coğrafi konumu ve özellikleri",
    steps: [
        { questions: COGRAFI_KONUM_TEST1 },
        { questions: COGRAFI_KONUM_TEST2 },
        { reward: true, amount: 10 },
        { questions: COGRAFI_KONUM_TEST3 },
    ],
  },
  {
    name: "Yer Şekilleri",
    description: "Türkiye'nin yer şekilleri ve oluşum süreçleri",
    steps: [
        { questions:  JEOLOJIK_ZAMANLAR_TEST_1 },
        { questions: IC_KUVVETLER_TEST_1 },
        { reward: true, amount: 10 },
        { questions:  TURKIYENIN_YER_SEKILLERININ_GENEL_OZELLIKLERI_TEST_1 },
        { questions:  DAGLAR_TEST_1 },
        { reward: true, amount: 10 },
        { questions:  TURKIYENIN_PLATOLARI_TEST_1 },
        { questions:  TURKIYENIN_OVALARI_TEST_1 },
        { reward: true, amount: 10 },
        { questions:  DENIZLER_VE_KORFEZLER_TEST_1 },
        { questions:  GOLLER_TEST_1 },
        { reward: true, amount: 10 },
        { questions:  AKARSULAR_TEST_1 },
        { questions:  YER_SEKILLERI_TURKIYENIN_YERALTI_SULARI_KAYNAKLARI_VE_KIYI_TIPLERI_TEST_1 },
    ],
  }
];