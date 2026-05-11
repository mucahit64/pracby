import { TopicDef } from "../../../../types";
import { COG_TURKIYENIN_COGRAFIK_KONUMU_TEST_1, COG_TURKIYENIN_COGRAFIK_KONUMU_TEST_2 } from "./turkiyenin-cogarafi-konumu";

export const KPSS_GK_COGRAFYA_TOPICS: TopicDef[] = [
  {
    name: "Türkiye'nin Coğrafi Konumu",
    description: "Türkiye'nin coğrafi konumu ve özellikleri",
    steps: [
        { questions: COG_TURKIYENIN_COGRAFIK_KONUMU_TEST_1 },
        { questions: COG_TURKIYENIN_COGRAFIK_KONUMU_TEST_2 },
        { reward: true, amount: 10 },
    ],
  },
];