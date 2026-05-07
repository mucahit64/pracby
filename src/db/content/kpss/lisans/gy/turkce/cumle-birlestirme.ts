import { McQ } from "../../../../types";

// ============================================================================
// CÜMLE BİRLEŞTİRME - TEST 1
// ============================================================================
export const TUR_CUMLE_BIRLESTIRME_TEST_1: McQ[] = [
  {
    text: "<p>• Merkezine bir cinayet soruşturmasını yerleştiren Suç Mahalli adlı film, cinayetin zanlıları olan iki kadını, biri deneyimli biri çaylak iki polisin gözünden izliyor.<br>• İlk gösterimini Altın Palmiye için yarıştığı Cannes Film Festivali'nde yaptı.</p><p><b>Bu iki cümlede ifade edilenlerin doğru bir biçimde özetlenmiş hâli aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Öncüldeki iki cümlenin birleşmiş hali şudur: 'İlk gösterimini Altın Palmiye için yarıştığı Cannes Film Festivali'nde yapan ve merkezine bir cinayet soruşturmasını yerleştiren Suç Mahalli adlı film, cinayetin zanlıları olan iki kadını, biri deneyimli biri çaylak iki polisin gözünden izliyor.' Bu bilgiler ışığında B seçeneği en kapsamlı ve doğru özettir.",
    answers: [
      { text: "Cinayet konusunu işleyen film, iki polisin başrolleriyle Altın Palmiye Sinema Ödülü'ne layık görülmüştür.", ok: false },
      { text: "İki farklı nitelikteki polisin gözünden cinayet zanlılarının izlendiği Suç Mahalli adlı film ilk gösterimini Cannes Film Festivali'nde yaptı.", ok: true },
      { text: "Suç Mahalli adlı film, bir cinayet soruşturmasını merkeze almakla birlikte Cannes Film Festivali'nde Altın Palmiye Ödülü aldı.", ok: false },
      { text: "Altın Palmiye için yarışan Suç Mahalli adlı film, başrollerini iki kadının paylaştığı polisiye filmdir.", ok: false },
      { text: "Başrollerini biri deneyimli biri çaylak iki polisin üstlendiği polisiye film, bir cinayet soruşturmasını konu almaktadır.", ok: false }
    ]
  },
  {
    text: "<p>• Erzurum Kayak Merkezi, yüksekliği 2000 metre olan bir tepenin zirvesinin altında kurulmuştur.<br>• Erzurum Kayak Merkezi kış aylarında yoğun bir ziyaretçi akınına uğruyor.</p><p><b>Bu iki cümlenin anlamca doğru bir biçimde birleştirilmiş hâli aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "İki cümledeki bilgiler (yükseklik, konum ve ziyaretçi durumu) eksiksiz olarak C seçeneğinde birleştirilmiştir: 'Yüksekliği 2000 metre olan bir tepenin zirvesinin altında kurulan Erzurum Kayak Merkezi, kış aylarında yoğun bir ziyaretçi akınına uğruyor.'",
    answers: [
      { text: "Erzurum Kayak Merkezi yoğun ziyaretçi akınına uğrayan, yüksekliği 2000 metre olan bir tepenin zirvesinin altında kış aylarında kurulmuştur.", ok: false },
      { text: "Yoğun bir ziyaretçi akınına uğrayan Erzurum Kayak Merkezi, kış aylarında yüksekliği 2000 metre olan bir tepenin zirvesinin altında kurulmuştur.", ok: false },
      { text: "Yüksekliği 2000 metre olan bir tepenin zirvesinin altında kurulan Erzurum Kayak Merkezi, kış aylarında yoğun bir ziyaretçi akınına uğruyor.", ok: true },
      { text: "Bir tepenin zirvesinin altında kurulan Erzurum Kayak Merkezi, yüksekliği 2000 metre olduğundan kış aylarında yoğun bir ziyaretçi akınına uğruyor.", ok: false },
      { text: "Yüksekliği 2000 metre olan bir tepenin zirvesinin altında kurulan Erzurum Kayak Merkezi, senenin belli dönemlerinde yoğun bir ziyaretçi akınına uğruyor.", ok: false }
    ]
  },
  {
    text: "<p>• Seçimlere giren partilerin propaganda hak ve olanakları iktidardaki partiyle eşit olmalıdır.<br>• Tüm sistemin, seçmen listelerinin oluşmasından, sandık bazındaki oy sayımlarına ve sonuçlarının ilanına kadar, her vatandaşın gözlemine açık, tümüyle yargı denetimine tabi ve şeffaf olması gerekir.</p><p><b>Bu iki cümlenin anlamca doğru bir biçimde birleştirilmiş hâli aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "İki farklı talebi (propaganda eşitliği ve seçim şeffaflığı) 've' bağlacı ile birbirine bağlayan D seçeneği, öncüldeki mesajları bozmadan birleştirmiştir.",
    answers: [
      { text: "Seçimlere giren partilerin propaganda hak ve olanakları iktidardaki partiyle seçmen listelerinin oluşmasından sandık bazındaki oy sayımlarına kadar eşit olmalıdır; böylece tüm sistemin, her vatandaşın gözlemine açık, tümüyle yargı denetimine tabi ve şeffaf olması sağlanır.", ok: false },
      { text: "Tüm seçim sisteminin, seçmen listelerinin oluşmasından, sandık bazındaki oy sayımlarına ve sonuçlarının ilanına kadar, her vatandaşın gözlemine açık, tümüyle yargı denetimine tabi olmasının yanında muhalefet partilerinin propaganda hak ve olanakları iktidardaki partiye eşit olmalıdır.", ok: false },
      { text: "Seçimlere giren partilerin propaganda hak ve olanakları iktidardaki partiyle eşit olmasının yanında tüm sistemin, seçmen listelerinin oluşmasından, sandık bazındaki oy sayımlarına kadar, her vatandaşın gözlemine açık, tümüyle yargı denetimine tabi ve şeffaf olması gerekir.", ok: false },
      { text: "Seçimlere giren partilerin propaganda hak ve olanakları iktidardaki partiyle eşit olmasının yanında tüm sistemin, seçmen listelerinin oluşmasından, sandık bazındaki oy sayımlarına ve sonuçlarının ilanına kadar, her vatandaşın gözlemine açık, tümüyle yargı denetimine tabi ve şeffaf olması gerekir.", ok: true },
      { text: "Tüm seçim sisteminin, seçmen listelerinin oluşmasından, sandık bazındaki oy sayımlarına ve sonuçlarının ilanına kadar şeffaf olmalı, seçimlere giren partilerin propaganda hak ve olanaklarının iktidardaki partiyle eşit olmalıdır.", ok: false }
    ]
  },
  {
    text: "<p>• Osmanlı İmparatorluğu çok geniş bir coğrafyaya yayılmış olsa da ticari olarak o kadar iyi bir yapılanmaya sahip değildi.<br>• Bir araştırmaya göre XVI. ve XVII. yüzyılda Osmanlı İmparatorluğu çağdaşı, coğrafi alanı çok daha küçük Avrupa ülkelerine göre daha az ticari potansiyele sahipti.</p><p><b>Bu iki cümlenin anlamca doğru bir biçimde birleştirilmiş hâli aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "A seçeneği, hem Avrupa ülkeleriyle yapılan karşılaştırmayı hem de geniş coğrafyaya rağmen ticari yapılanmanın zayıflığını neden-sonuç ilişkisi kurmadan, öncüldeki anlamı koruyarak aktarmıştır.",
    answers: [
      { text: "Bir araştırmaya göre XVI. ve XVII. yüzyılda Osmanlı İmparatorluğu çağdaşı, coğrafi alanı çok daha küçük Avrupa ülkelerine göre daha az ticari potansiyele sahip olması, Osmanlı İmparatorluğu'nun çok geniş bir coğrafyaya yayılmış olsa da ticari olarak o kadar iyi bir yapılanmaya sahip olmadığını gösterir.", ok: true },
      { text: "Bir araştırmaya göre XVI. ve XVII. yüzyılda Osmanlı İmparatorluğu çağdaşı Avrupa ülkelerine göre daha az ticari potansiyele sahip olmasının, Osmanlı İmparatorluğu'nun çok geniş bir coğrafyaya yayılmış olsa da ticari olarak o kadar iyi bir yapılanmaya sahip olmadığını gösterir.", ok: false },
      { text: "Bir araştırmaya göre XVI. ve XVII. yüzyılda Osmanlı İmparatorluğu çağdaşı, coğrafi alanı çok daha küçük Avrupa ülkelerine göre daha az ticari potansiyele sahip olması, Osmanlı İmparatorluğu'nun ticari yapılanmayı bilmediğini gösterir.", ok: false },
      { text: "Bir araştırmaya göre XVI. ve XVII. yüzyılda Osmanlı İmparatorluğu, coğrafi alanı çok daha küçük Avrupa ülkelerine göre daha çok ticari potansiyele sahip olması, Osmanlı İmparatorluğu'nun çok geniş bir coğrafyaya yayılmasıyla ticari olarak iyi bir yapılanmaya sahip olduğunu gösterir.", ok: false },
      { text: "Bir araştırmaya göre Osmanlı İmparatorluğu çağdaşı, coğrafi alanı çok daha küçük Avrupa ülkelerine göre daha az ticari potansiyele sahip olması, Osmanlı İmparatorluğu'nun çok geniş bir coğrafyaya yayılmış olsa da ticari olarak o kadar iyi bir yapılanmaya sahip olmadığını gösterir.", ok: false }
    ]
  },
  {
    text: "<p>• Bilim insanları karıncaların yaşadıkları bir deneyimin ardından, görsel hafızalarını kullanarak kendilerini tehlikeden koruyabildiklerini ortaya çıkardı.<br>• Araştırma kapsamında yapılan deneyde bilinçli olarak kazılan çukura ilk seferde düşen karıncalar ikinci seferde kurtulmayı başardı.</p><p><b>Bu iki cümlenin anlamca doğru birleştirilmiş hâli aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Karıncaların görsel hafıza sayesinde tehlikeden (çukurdan) kaçışını anlatan iki cümleyi, deneyin sonucunu (ifade etti/ortaya koydu) belirterek birleştiren C seçeneği doğrudur.",
    answers: [
      { text: "Karıncaların yaşadıkları bir deneyimde görsel hafızalarını kullandıkları takdirde kendilerini koruyabildiklerini ortaya atan araştırmacılar, yaptıkları deneylerde karıncaların kurtulmayı başardıklarını kanıtladı.", ok: false },
      { text: "Bilim insanları, karıncaların görsel hafızalarının güçlü olduğunu kanıtlamak için yaptıkları deneyde bilinçli olarak kazılan çukura karıncaların ilk seferde düştüklerini kaydetti.", ok: false },
      { text: "Karıncaların yaşadıkları bir deneyimin ardından görsel hafızalarını kullanarak kendilerini koruyabildiklerini ortaya koyan bilim insanları yaptıkları bir deneyde bilinçli olarak kazılan çukura ilk seferde düşen karıncaların ikinci seferde kurtulmayı başardıklarını ifade etti.", ok: true },
      { text: "Karıncaların görsel hafızalarının oldukça kuvvetli olduğunu ortaya atan bilim insanları yaptıkları deneyler sonucunda karıncaların bazı tehlikelere karşı direnç gösterdiğini, kolaylıkla kendilerini tehlikeye attıklarını belirtti.", ok: false },
      { text: "Yapılan araştırmalar kapsamında karıncaların hafızasını ölçmek için bilinçli olarak çukurlar oluşturulmuş ve bu çukurlara ilk seferde düşen karıncalar ikinci seferde kurtulmayı başarmıştır.", ok: false }
    ]
  },
  {
    text: "<p>I. Geleneksel medya; reklam panoları, basılı reklamlar ve televizyon reklamları gibi araçlarla geniş kitlelere ulaşmayı hedefler ve hedef kitle aynıdır ve özelleştirilemez.<br>II. Dijital medya ile reklamda dar bir hedef kitleye odaklanılabilir, hedef kitle belirlenerek bu kitleye özgü içerikler sunulabilir, geleneksel medyaya göre daha özgür bir mecradır ve dijital mecralar, insanların daha fazla vakit geçirdiği alanlar olarak geleneksel medyadan bir adım öne çıkmaktadır.</p><p><b>Numaralanmış II. cümle ile ilgili aşağıdakilerden hangisi söylenebilir?</b></p>",
    diff: 3,
    expl: "I. cümlede geleneksel medyanın hedef kitleyi özelleştiremediği anlatılırken, II. cümlede dijital medyanın bu konudaki farkı (hedef kitle odaklılık ve özgürlük) açıklanmıştır. Yani II. cümle, I. cümlede belirtilen durumdan farklı olan yönleri açıklamaktadır.",
    answers: [
      { text: "I. cümlede yer alan reklam tekniğinin daha etkin olduğu görüşünü ön plana çıkartmaktadır.", ok: false },
      { text: "I. cümlede belirtilen durumun gerekçesini açıklamaktadır.", ok: false },
      { text: "I. cümlede belirtilen medya türünün hedef kitleye yönelik durumundan dijital medya reklamcılığının farklı tarafları açıklanmıştır.", ok: true },
      { text: "I. cümledeki yargıyı kanıtlama amacı taşımaktadır.", ok: false },
      { text: "I. cümlede yer verilen reklam panoları, basılı reklamlar ve televizyon reklamları gibi araçların önemini hiçbir zaman yitirmeyeceğini açıklamak tadır.", ok: false }
    ]
  },
  {
    text: "<p>I. XIX. asra gelindiğinde divan şiiri artık iyiden iyiye tükenmiş, Şeyh Galip'in gençlik aşısına benzeyen şiiri bile onu hayata döndürmeye yetmemiş tir.<br>II. Hatta denebilir ki bu aşı, kocalmış gövdenin kalan bütün gücünü de harcayarak şiirin birdenbire iflas etmesine yol açmıştır.</p><p><b>Yukarıda verilen II numaralı cümleyle ilgili olarak aşağıdakilerden hangisi söylenebilir?</b></p>",
    diff: 3,
    expl: "I. cümlede Şeyh Galip'in şiirinin (aşının) divan şiirini kurtarmaya yetmediği söylenmiş, II. cümlede ise bu durumun tam tersi bir etki yaratarak (olumsuz sonuç) şiirin iflasına (çöküşüne) neden olduğu belirtilmiştir.",
    answers: [
      { text: "I. cümlede ifade edilen konuyla çelişen farklı bir durumdan söz edilmektedir.", ok: false },
      { text: "I. cümlede anlatılan durumun tersine, neden olunan bir olumsuzluktan bahsedilmektedir.", ok: true },
      { text: "I. cümledeki olgunun, divan şiirini neden daha fazla etkilediği açıklanmaktadır.", ok: false },
      { text: "I. cümlede belirtilen olgunun yalnızca şiir geleneğinde gerçekleşmediği örneklenmektedir.", ok: false },
      { text: "I. cümlede değinilen düşüncenin bilimsel olarak kanıtlanmaya çalışılmıştır.", ok: false }
    ]
  },
  {
    text: "<p>I. Ressamlarımızın çoğu, resimden başka bir şey düşünmez.<br>II. Gerçi bunların büyük bir çoğunluğu edebiyatçılarla dosttur ama edebiyatın hiçbir dalıyla doğrudan ilgilenmezler.</p><p><b>Yukarıda verilen II numaralı cümleyle ilgili olarak aşağıdakilerden hangisi söylenebilir?</b></p>",
    diff: 2,
    expl: "I. cümlede ressamların sadece resimle ilgilendiği belirtilmiş, II. cümlede ise bu durum edebiyatla ilişkileri üzerinden desteklenmiş ve pekiştirilmiştir. Edebiyatçılarla dost olsalar dahi edebiyatla ilgilenmemeleri, I. cümleyi güçlendirir.",
    answers: [
      { text: "I. cümlede ifade edilen konuyla ilgili olmayan başka bir konudan bahsedilmiştir.", ok: false },
      { text: "I. cümlede anlatılan durumun edebiyat dünyasında yarattığı bir olumsuzluktan bahsedilmiştir.", ok: false },
      { text: "I. cümlede bahsedilen durumu destekleyecek bir açıklama yapılmıştır.", ok: true },
      { text: "I. cümlede bahsedilen durumla çelişen bir konudan bahsedilmiştir.", ok: false },
      { text: "I. cümlede üzerinde durulan konunun amacından bahsedilmiştir.", ok: false }
    ]
  },
  {
    text: "<p>I. \"Bir Kaktüs Resmi Çiz Testi\" hem çocukların hem de yetişkinlerin iç dünyaları, mizaçları, duygu durumları hakkında bilgi vermeyi sağlayan yansıtıcı testlerden biridir ve saksı içindeki ve kökleri olan kaktüs resimleri, evcimen olmayla bağdaştırılırken; çöl kaktüsü, kökü olmayan ve yaban kaktüs resimleri bağımsız olmayla ilişkilendirilmektedir.<br>II. Araştırmadan elde edilen sonuçlara göre; kadın katılımcıların bir kısmının ve erkek katılımcıların hepsinin yabani bir kaktüs resmi çizdikleri, saksı çizmedikleri gözlemlenmiştir.</p><p><b>Bu iki cümleden çıkarılabilecek ortak sonuç aşağıdaki seçeneklerin hangisinde verilmiştir?</b></p>",
    diff: 3,
    expl: "I. cümlede yabani/kökü olmayan kaktüs çizmenin 'bağımsız olma' ile ilişkili olduğu belirtilmiştir. II. cümlede erkeklerin tamamının bu tür bir resim çizdiği söylenmiştir. Bu iki bilgiden 'Erkek katılımcıların bağımsızlıklarına/özgürlüklerine düşkün oldukları (yani evcimen olmadıkları)' sonucu çıkar.",
    answers: [
      { text: "Erkek katılımcıların özgürlüklerine düşkün oldukları yani evcimen mizaç taşımadıkları söylenebilir.", ok: true },
      { text: "Bireylerin yaptıkları resimler aracılığıyla onların önemli bilgiler elde edilebilir.", ok: false },
      { text: "Kaktüs görüntüsüyle gücü, saksı da yuvayı simgelemektedir.", ok: false },
      { text: "Bazı bitkiler bizim dünyayı nasıl algıladığımızla ilgili karşı tarafa bilgi verebilir.", ok: false },
      { text: "Farklı cinsiyetlerle yapılan araştırmalar her zaman bizi daha doğru sonuçlara götürür.", ok: false }
    ]
  }
];