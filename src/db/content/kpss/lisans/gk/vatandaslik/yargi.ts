import { McQ } from "../../../../types";

// ============================================================================
// YARGI - TEST 1
// ============================================================================
export const VAT_YARGI_TEST_1: McQ[] = [
  {
    text: "<p>Hâkimler ve savcılar azlolunamaz, kendileri istemedikçe Anayasa'da gösterilen yaştan önce emekliye ayrılamaz; bir mahkemenin veya kadronun kaldırılması sebebiyle de olsa, aylık, ödenek ve diğer özlük haklarından yoksun kılınamaz.<br><br><b>1982 Anayasası'na göre, hâkimlerin emekliye ayrılabilmeleri için \"Anayasa'da gösterilen yaş\" aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Hâkimler ve savcılar 65 yaşını bitirinceye kadar hizmet görürler; askerî hâkimlerin yaş haddi, yükselme ve emeklilikleri kanunda gösterilir.",
    answers: [
      { text: "50", ok: false },
      { text: "55", ok: false },
      { text: "60", ok: false },
      { text: "65", ok: true },
      { text: "70", ok: false }
    ]
  },
  {
    text: "<p>Türk Silahlı Kuvvetlerinde görevli Teğmen Mehmet'e babası İbrahim askerî mahkemelerin kaldırıldığını, askerlerin bir durum dışında askerî mahkemelerde artık yargılanmayacaklarını söyler.<br><br><b>Teğmen Mehmet, askerî mahkemelerin Anayasa'ya göre sadece hangi durumda kurulabileceğini söylerse cevabı doğru olur?</b></p>",
    diff: 1,
    expl: "Disiplin mahkemeleri dışında askerî mahkemeler kurulamaz. Ancak savaş hâlinde, asker kişilerin görevleriyle ilgili olarak işledikleri suçlara ait davalara bakmakla görevli askerî mahkemeler kurulabilir.",
    answers: [
      { text: "Olağanüstü hâl", ok: false },
      { text: "Savaş ve olağanüstü hâl", ok: false },
      { text: "Seferberlik", ok: false },
      { text: "Savaş", ok: true },
      { text: "Savaş ve seferberlik", ok: false }
    ]
  },
  {
    text: "<p>Hiçbir organ, makam, merci veya kişi, yargı yetkisinin kullanılmasında mahkemelere ve hâkimlere emir ve talimat veremez; genelge gönderemez; tavsiye ve telkinde bulunamaz.<br><br><b>1982 Anayasası'nın bu hükmü, aşağıdaki başlıkların hangisinde düzenlenmiştir?</b></p>",
    diff: 2,
    expl: "Hâkimler, görevlerinde bağımsızdırlar; Anayasaya, kanuna ve hukuka uygun olarak vicdani kanaatlerine göre hüküm verirler. Hiçbir organ, makam, merci veya kişi, yargı yetkisinin kullanılmasında mahkemelere ve hâkimlere emir ve talimat veremez; genelge gönderemez; tavsiye ve telkinde bulunamaz. Bu durum \"Mahkemelerin bağımsızlığı\" ilkesiyle ilgilidir.",
    answers: [
      { text: "Hâkimlik ve savcılık teminatı", ok: false },
      { text: "Doğal yargıç güvencesi", ok: false },
      { text: "Masumiyet karinesi", ok: false },
      { text: "Mahkemelerin bağımsızlığı", ok: true },
      { text: "Adalet hizmetlerinin denetimi", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisi \"Yüksek Mahkemeler\" arasında yer almaz?</b></p>",
    diff: 1,
    expl: "1982 Anayasası'nda sayılan yüksek mahkemeler; Anayasa Mahkemesi, Yargıtay, Danıştay ve Uyuşmazlık Mahkemesidir. Sayıştay, Hâkimler ve Savcılar Kurulu ve Yüksek Seçim Kurulu birer yargı organı olmasına rağmen Anayasa'da yüksek mahkeme olarak belirtilmemiştir.",
    answers: [
      { text: "Danıştay", ok: false },
      { text: "Anayasa Mahkemesi", ok: false },
      { text: "Yüksek Seçim Kurulu", ok: true },
      { text: "Uyuşmazlık Mahkemesi", ok: false },
      { text: "Yargıtay", ok: false }
    ]
  },
  {
    text: "<p>Hâkimler ve savcılar azlolunamaz, kendileri istemedikçe Anayasa'da gösterilen yaştan önce emekliye ayrılamaz; bir mahkemenin veya kadronun kaldırılması sebebiyle de olsa, aylık, ödenek ve diğer özlük haklarından yoksun kılınamaz.<br><br><b>1982 Anayasası'nın bu hükmü, aşağıdaki başlıkların hangisinde düzenlenmiştir?</b></p>",
    diff: 1,
    expl: "Belirtilen hükümler hâkim ve savcıların mesleki güvencelerini ifade ettiği için Anayasa'da \"Hâkimlik ve savcılık teminatı\" başlığı altında düzenlenmiştir.",
    answers: [
      { text: "Hâkimlik ve savcılık mesleği", ok: false },
      { text: "Mahkemelerin bağımsızlığı", ok: false },
      { text: "Adalet hizmetlerinin denetimi", ok: false },
      { text: "Hâkimlik ve savcılık teminatı", ok: true },
      { text: "Kanuni hâkim güvencesi", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, \"hâkimlik ve savcılık mesleği\" ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "Hâkimler ve savcılar idari görevleri yönünden Hâkimler ve Savcılar Kuruluna değil, Adalet Bakanlığına bağlıdırlar. Diğer tüm seçenekler 1982 Anayasası'ndaki hâkimlik ve savcılık mesleği esaslarına uygundur.",
    answers: [
      { text: "Hâkimler ve savcılar, kanunda belirtilenlerden başka, resmî ve özel hiçbir görev alamazlar.", ok: false },
      { text: "Hâkimler ve savcılar adli ve idari yargı hâkim ve savcıları olarak görev yaparlar.", ok: false },
      { text: "Hâkimler ve savcılar idari görevleri yönünden Hâkimler ve Savcılar Kuruluna bağlıdırlar.", ok: true },
      { text: "Hâkimler ve savcılar altmış beş yaşını bitirinceye kadar hizmet görürler.", ok: false },
      { text: "Hâkimler, mahkemelerin bağımsızlığı ve hâkimlik teminatı esaslarına göre görev ifa ederler.", ok: false }
    ]
  },
  {
    text: "<p>I. Mahkemelerin kuruluşu, görev ve yetkileri, işleyişi ve yargılama usulleri kanunla düzenlenir.<br>II. Disiplin mahkemeleri dışında askerî mahkemeler kurulamaz.<br>III. Savaş hâlinde, asker kişilerin görevleriyle ilgili olarak işledikleri suçlara ait davalara bakmakla görevli askerî mahkemeler kurulabilir.<br><br><b>1982 Anayasası'na göre, mahkemelerin kuruluşuna ilişkin yukarıda verilen ifadelerden hangileri doğrudur?</b></p>",
    diff: 2,
    expl: "Mahkemelerin kuruluşu, görev ve yetkileri kanunla düzenlenir. Askeri mahkemeler sadece disiplin mahkemeleri olarak kurulabilir; ancak savaş halinde asker kişilerin görevleriyle ilgili suçlarına bakmak üzere istisnai olarak askeri mahkemeler kurulabilir. İfadelerin tümü Anayasa'ya uygundur.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi idari yargı mahkemeleri arasında yer almaz?</b></p>",
    diff: 1,
    expl: "İdare ve vergi mahkemeleri idari yargıda ilk derece mahkemeleridir. Bölge idare mahkemesi istinaf, Danıştay ise temyiz mahkemesidir. Ancak Kadastro mahkemesi adli yargıda yer alan bir mahkemedir.",
    answers: [
      { text: "Bölge idare mahkemesi", ok: false },
      { text: "Danıştay", ok: false },
      { text: "Vergi mahkemesi", ok: false },
      { text: "İdare mahkemesi", ok: false },
      { text: "Kadastro mahkemesi", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi yargı sistemimizde bulunan ilk derece mahkemelerinden biri değildir?</b></p>",
    diff: 2,
    expl: "Türkiye'deki bölge adliye mahkemeleri, diğer adıyla istinaf mahkemeleri Türkiye'de adli yargı kolunun içinde yer alan ikinci derece (üst derece) mahkemelerinden biridir. Sulh, Asliye, İdare ve Vergi mahkemeleri ise ilk derece mahkemeleridir.",
    answers: [
      { text: "Sulh hukuk mahkemeleri", ok: false },
      { text: "Asliye hukuk mahkemeleri", ok: false },
      { text: "Bölge adliye mahkemeleri", ok: true },
      { text: "İdare mahkemeleri", ok: false },
      { text: "Vergi mahkemeleri", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi Türk yargı sisteminde yer alan mahkemelerden biri değildir?</b></p>",
    diff: 2,
    expl: "Türk adli yargı sisteminde İcra Mahkemesi (veya icra daireleri) bulunmakla birlikte, bağımsız bir \"İflas mahkemesi\" adıyla kurulan bir ilk derece mahkemesi türü bulunmamaktadır. Tüketici, Fikri ve Sınai Haklar, Çocuk Ceza ve Asliye Ticaret mahkemeleri mevcuttur.",
    answers: [
      { text: "Tüketici mahkemesi", ok: false },
      { text: "Fikri sınai haklar hukuk mahkemesi", ok: false },
      { text: "Çocuk ceza mahkemesi", ok: false },
      { text: "Asliye ticaret mahkemesi", ok: false },
      { text: "İflas mahkemesi", ok: true }
    ]
  },
  {
    text: "<p><b>Kanunların ayrıca görevli kıldığı hâller saklı kalmak üzere, yürütülen soruşturmalarda hâkim tarafından verilmesi gerekli tutuklama, el koyma gibi kararları almak, işleri yapmak ve bunlara karşı yapılan itirazları incelemekle görevli yargı merci aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Soruşturma aşamasında hâkim tarafından verilmesi gerekli kararları (tutuklama, el koyma vb.) almak, işleri yapmak ve bunlara karşı yapılan itirazları incelemekle görevli merci 'Sulh Ceza Hâkimlikleri'dir.",
    answers: [
      { text: "Asliye ceza mahkemesi", ok: false },
      { text: "Sulh ceza hâkimliği", ok: true },
      { text: "Sulh hukuk mahkemesi", ok: false },
      { text: "Asliye ceza hâkimliği", ok: false },
      { text: "Ağır ceza mahkemesi", ok: false }
    ]
  },
  {
    text: "<p><b>Mahkemelerin verdiği kararların kesinleşmeden önce denetlenmesini sağlamak amacıyla üst derece mahkemelere yapılan, davanın taraflarına tanınmış hukuki yolun adı nedir?</b></p>",
    diff: 1,
    expl: "Mahkeme tarafından verilen ara kararlar ile yargılamayı bitiren nihai kararların hukuka uygun olmadığını düşüneniz hâlinde kararın bir kere daha aynı mahkeme ya da üst mahkeme tarafından gözden geçirilmesi yollarına genel olarak \"Kanun yolu\" denilmektedir.",
    answers: [
      { text: "Kanun yolu", ok: true },
      { text: "İç hukuk", ok: false },
      { text: "Kanun yararına bozma", ok: false },
      { text: "Olağanüstü itiraz", ok: false },
      { text: "Tahkim", ok: false }
    ]
  },
  {
    text: "<p><b>İlk derece mahkemesi kararlarına karşı başvurulabilen, yalnız hukukilik denetimi yapmakla kalınmayan, maddi olayı değerlendirip yeni bir karar verilebilen ikinci derece kanun yolu aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "İstinaf, ilk derece mahkemeleri tarafından verilmiş kararların; olay yönünden veya hukuki yönden üst dereceli mahkemeler tarafından denetlenmesidir. Sadece hukuki yönden inceleme yapan merci ise Temyiz (Yargıtay/Danıştay)'dir.",
    answers: [
      { text: "İtiraz", ok: false },
      { text: "Temyiz", ok: false },
      { text: "İstinaf", ok: true },
      { text: "Kanun yararına bozma", ok: false },
      { text: "İade etme", ok: false }
    ]
  },
  {
    text: "<p>I. Temyiz<br>II. İstinaf<br>III. İtiraz<br><br><b>Yukarıdakilerden hangileri Türk hukukunda \"olağan kanun yolları\" olarak adlandırılır?</b></p>",
    diff: 1,
    expl: "Olağan kanun yolları, henüz kesinleşmeyen hükümlere karşı başvurulan yasa yollarıdır. Olağan kanun yolları; itiraz, istinaf ve temyiz olmak üzere üçe ayrılmaktadır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p>I. İstinaf<br>II. Temyiz<br>III. İlk derece<br><br><b>Yerel mahkemelerde aleyhine karar çıkan kişilerin başvurabileceği üst derece mahkemeler arasında yukarıdakilerden hangileri yer alır?</b></p>",
    diff: 1,
    expl: "İlk derece mahkemeleri (yerel mahkemeler) kararlarına karşı, Adli ve idari yargıda başvurulabilecek üst derece mahkemeleri \"İstinaf (Bölge Adliye/Bölge İdare Mahkemeleri)\" ve \"Temyiz (Yargıtay/Danıştay)\" mercileridir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: true },
      { text: "II ve III", ok: false }
    ]
  },
  {
    text: "<p>I. Kanun yararına bozma<br>II. Yargıtay Cumhuriyet Başsavcısı'nın itirazı<br>III. Yargılanmanın yenilenmesi<br><br><b>Yukarıdakilerden hangileri olağanüstü kanun yolları arasında yer alır?</b></p>",
    diff: 2,
    expl: "Olağanüstü kanun yolları, kesinleşmiş mahkeme kararlarına karşı başvurulan kanun yoludur. Bunlar; Yargıtay Cumhuriyet Başsavcılığının itirazı, Kanun yararına bozma ve Yargılamanın yenilenmesi olmak üzere üçe ayrılmaktadır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve III", ok: false },
      { text: "I ve II", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  }
];

// ============================================================================
// YARGI - TEST 2
// ============================================================================
export const VAT_YARGI_TEST_2: McQ[] = [
  {
    text: "<p><b>Belirli suçlar bakımından ceza muhakemesi süreci içerisinde uygulanabilen ve başarılı olması hâlinde kamu davasının açılmasına engel olabilen alternatif uyuşmazlık çözüm yolu aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Uzlaştırma, 5271 sayılı CMK kapsamında düzenlenmiş, suçtan zarar gören ile şüpheli arasında yürütülen bir ceza muhakemesi kurumudur. Belirli hafif suçlarda uygulanabilir (örneğin hakaret, basit yaralama). Başarılı olması durumunda kamu davası hiç açılmaz ya da açılmışsa düşer.",
    answers: [
      { text: "Tahkim", ok: false },
      { text: "Ara buluculuk", ok: false },
      { text: "Sulh", ok: false },
      { text: "Müzakere", ok: false },
      { text: "Uzlaştırma", ok: true }
    ]
  },
  {
    text: "<p><b>Tarafların özel hukuk uyuşmazlıklarını, devlet yargılaması yerine önceden yaptıkları bir anlaşmayla, bağımsız hakemler önünde çözüme kavuşturmayı tercih ettikleri ve verilen kararın taraflar açısından bağlayıcı olduğu alternatif uyuşmazlık çözüm yolu aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Tahkim, tarafların bir özel hukuk uyuşmazlığını, devlet yargısı yerine hakem sıfatı taşıyan kişiler önünde ve genellikle önceden yapılmış bir tahkim sözleşmesi gereği çözmesidir. Hakem kararı, taraflar için mahkeme hükmü gibi bağlayıcıdır.",
    answers: [
      { text: "Ara buluculuk", ok: false },
      { text: "Tahkim", ok: true },
      { text: "Uzlaştırma", ok: false },
      { text: "Sulh", ok: false },
      { text: "Müzakere", ok: false }
    ]
  },
  {
    text: "<p><b>Bir suç ile bağlantısı olmayan özel hukuk uyuşmazlıklarının mahkeme dışı çözüm yöntemine ne ad verilir?</b></p>",
    diff: 1,
    expl: "Ara buluculuk, tarafsız bir kişi olan ara bulucunun, tarafların iletişim kurarak bir çözüm oluşturmasına yardımcı olduğu alternatif bir uyuşmazlık çözüm yöntemidir. Sadece özel hukuk uyuşmazlıklarında (işçi-işveren, ticari vb.) uygulanır, ceza muhakemesi (suç) ile ilgisi yoktur.",
    answers: [
      { text: "Ara buluculuk", ok: true },
      { text: "Denkleştirme", ok: false },
      { text: "Uzlaştırma", ok: false },
      { text: "Sulh olma", ok: false },
      { text: "Müzakere", ok: false }
    ]
  },
  {
    text: "<p>I. A ve B, kira sözleşmesinden doğan alacak uyuşmazlığını dava açmadan önce bir uzman eşliğinde çözmeye çalışmıştır.<br>II. C, kendisine hakaret eden D ile ceza soruşturması sürecinde, Cumhuriyet savcılığı tarafından yönlendirilen bir süreçte anlaşmaya varmıştır.<br>III. E ve F şirketleri, sözleşmelerine koydukları hükme dayanarak uyuşmazlıklarını mahkemeye gitmeden, belirledikleri üç hakem önünde çözüme kavuşturmuşlardır.<br><br><b>Bu uyuşmazlık çözüm yolları aşağıdakilerden hangisinde doğru kavramlarla eşleştirilmiştir?</b></p>",
    diff: 2,
    expl: "I. durumda, özel hukuk alanındaki bir uyuşmazlık, dava açmadan önce arabulucu eşliğinde çözülmeye çalışıldığı için ARA BULUCULUK'tur. II. durum, ceza muhakemesi kapsamında taksirle yaralama veya hakaret gibi suçta şüpheli ile mağdurun anlaştığı UZLAŞTIRMA sürecidir. III. durumda ise şirketler arasında hakemler önünde bağlayıcı karar alındığı için TAHKİM'dir.",
    answers: [
      { text: "I-uzlaştırma / II-ara buluculuk / III-tahkim", ok: false },
      { text: "I-ara buluculuk / II-tahkim / III-uzlaştırma", ok: false },
      { text: "I-tahkim / II-uzlaştırma / III-ara buluculuk", ok: false },
      { text: "I-ara buluculuk / II-uzlaştırma / III-tahkim", ok: true },
      { text: "I-sulh / II-ara buluculuk / III-tahkim", ok: false }
    ]
  },
  {
    text: "<p>I. Yargıtay<br>II. Cumhurbaşkanı<br>III. TBMM<br><br><b>1982 Anayasası'na göre, Anayasa Mahkemesi üyelerini seçme yetkisi yukarıdakilerden hangilerine aittir?</b></p>",
    diff: 1,
    expl: "Anayasa Mahkemesi 15 üyeden kurulur. Üyelerin 12'sini Cumhurbaşkanı, 3'ünü ise Türkiye Büyük Millet Meclisi (TBMM) seçer. Yargıtay üye seçmez, ancak kendi içinden aday gösterip Cumhurbaşkanına sunar.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: true },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Anayasa Mahkemesi ile ilgili olarak;</b><br><br>I. 15 üyeden oluşur.<br>II. Üyelerin görev süresi 12 yıldır.<br>III. Bireysel başvuruları karara bağlar.<br><br><b>ifadelerinden hangileri doğrudur?</b></p>",
    diff: 1,
    expl: "Anayasa Mahkemesi 15 üyeden oluşur (I). Anayasa Mahkemesi üyeleri 12 yıl için seçilirler ve bir kimse iki defa Anayasa Mahkemesi üyesi seçilemez (II). 2010 anayasa değişikliği ile bireysel başvuruları karara bağlamak Anayasa Mahkemesinin görevleri arasına girmiştir (III).",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Anayasa Mahkemesine aşağıdakilerden hangisinden üye seçilmez?</b></p>",
    diff: 2,
    expl: "Cumhurbaşkanı, Anayasa Mahkemesine üyeleri; Yargıtay, Danıştay, Yükseköğretim Kurulunun göstereceği adaylar (öğretim üyeleri) ile üst kademe yöneticileri, serbest avukatlar, birinci sınıf hâkim ve savcılar ile en az beş yıl raportörlük yapmış Anayasa Mahkemesi raportörleri arasından seçer. Ancak Sayıştay, TBMM'nin üye seçeceği bir kurumdur (TBMM Sayıştay'dan 2 üye seçer), Cumhurbaşkanının Sayıştay'dan doğrudan üye seçme hakkı yoktur. Yükseköğretim Kurulu (YÖK) ise Anayasa Mahkemesine doğrudan üye veremez, aday da gösteremez (YÖK genel kurulu değil, öğretim üyeleri arasından doğrudan CB seçer). [Kitap Çözüm Notu: YÖK kendi üyeleri arasından aday gösteremez, doğrudan CB öğretim üyeleri arasından seçer]. *Soru kökü ve seçenekler dikkate alındığında, Yükseköğretim Kurulu üye veremez.*",
    answers: [
      { text: "Danıştay", ok: false },
      { text: "Yükseköğretim Kurulu", ok: true },
      { text: "Sayıştay", ok: false },
      { text: "Anayasa Mahkemesi raportörleri", ok: false },
      { text: "Serbest avukatlar", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Anayasa Mahkemesi raportörlerinin Anayasa Mahkemesi üyesi seçilebilmeleri için kural olarak en az kaç yıl raportörlük görevinde bulunmuş olmaları gerekir?</b></p>",
    diff: 1,
    expl: "Cumhurbaşkanı; Anayasa Mahkemesine üyeleri seçerken, adayların üst kademe yöneticileri, serbest avukatlar, birinci sınıf hâkim ve savcılar ile en az beş (5) yıl raportörlük yapmış Anayasa Mahkemesi raportörleri arasından olmasını gözetir.",
    answers: [
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "5", ok: true },
      { text: "10", ok: false },
      { text: "20", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdaki görevlerden hangisine ikinci kez seçilmek anayasa gereği mümkün değildir?</b></p>",
    diff: 2,
    expl: "Anayasa Mahkemesi üyeliği, görev süresi 12 yıldır ve bir kimse ikinci kez Anayasa Mahkemesi üyesi olarak seçilemez (Anayasa m.147/2). Cumhurbaşkanlığı, Kamu Başdenetçiliği, HSK üyeliği ve Meclis Başkanlığı'na belirli şartlarda ikinci kez seçilmek mümkündür.",
    answers: [
      { text: "Cumhurbaşkanlığı", ok: false },
      { text: "Kamu Başdenetçiliği", ok: false },
      { text: "Hâkimler ve Savcılar Kurulu üyeliği", ok: false },
      { text: "Meclis Başkanlığı", ok: false },
      { text: "Anayasa Mahkemesi üyeliği", ok: true }
    ]
  },
  {
    text: "<p>I. Anayasa Mahkemesi raportörleri<br>II. Üst kademe yöneticileri<br>III. Serbest avukatlar<br>IV. Hâkim ve savcılar<br><br><b>1982 Anayasası'na göre, Anayasa Mahkemesine üye seçileceklerden hangisi için ilgili alanda en az 20 yıl çalışmış olma şartı aranır?</b></p>",
    diff: 3,
    expl: "Anayasa Mahkemesine üye seçilebilmek için, 45 yaşın doldurulmuş olması kaydıyla; avukatların en az 20 yıl fiilen avukatlık yapmış, üst kademe yöneticilerinin yükseköğrenim görmüş ve en az 20 yıl kamu hizmetinde fiilen çalışmış, birinci sınıf hâkim ve savcıların adaylık dâhil en az 20 yıl çalışmış olması şarttır. Anayasa Mahkemesi raportörlerinin ise en az 5 yıl raportörlük yapmış olmaları yeterlidir.",
    answers: [
      { text: "Yalnız II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve IV", ok: false },
      { text: "II, III ve IV", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisi Anayasa Mahkemesi üyeliğine seçilme şartlarını sağlamaktadır?</b></p>",
    diff: 3,
    expl: "Anayasa Mahkemesine üye seçilebilmek için tüm adayların 45 yaşını doldurmuş olması gerekir. Öğretim üyelerinin profesör veya doçent ünvanını kazanmış olması; avukatların, yöneticilerin, hakim ve savcıların 20 yıl çalışmış olması; raportörlerin 5 yıl çalışmış olması gerekir. Seçenekler arasında tüm şartları sadece '46 yaşında, profesör ünvanlı öğretim üyesi' sağlamaktadır.",
    answers: [
      { text: "46 yaşında, profesör ünvanlı öğretim üyesi", ok: true },
      { text: "45 yaşında, 19 yıllık kamu yöneticisi", ok: false },
      { text: "47 yaşında, 19 yıllık birinci sınıf hâkim", ok: false },
      { text: "50 yaşında, 18 yıllık avukat", ok: false },
      { text: "48 yaşında, doktor öğretim görevlisi", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Anayasa Mahkemesinin görev ve yetkileri arasında aşağıdakilerden hangisi yer almaz?</b></p>",
    diff: 2,
    expl: "Kanunların şekil/esas denetimi, siyasi partilerin mali denetimi ve kapatılması, Sayıştay başkan/üyelerini Yüce Divan sıfatıyla yargılamak Anayasa Mahkemesinin görevleridir. Ancak 1982 Anayasası'na göre, usulüne göre yürürlüğe giren milletlerarası antlaşmalara karşı Anayasa Mahkemesinde iptal davası açılamaz (yargı yolu kapalıdır). Dolayısıyla uygunluk denetimini yapamaz.",
    answers: [
      { text: "Kanunların şekil bakımından Anayasa'ya uygunluğunu denetlemek", ok: false },
      { text: "Usulüne göre yürürlüğe giren milletlerarası antlaşmaların Anayasa'ya uygunluğunu denetlemek", ok: true },
      { text: "Siyasi partilerin mal edinimleri ile gelir ve giderlerinin Anayasa'ya uygunluğunu denetlemek", ok: false },
      { text: "Sayıştay başkan ve üyelerini görevleriyle ilgili suçlardan dolayı Yüce Divan sıfatıyla yargılamak", ok: false },
      { text: "Kendi üyeleri arasından Uyuşmazlık Mahkemesi Başkanı'nı seçmek", ok: false }
    ]
  },
  {
    text: "<p>Anayasa Mahkemesi Genel Kurulu, milletvekili A'nın Meclis tarafından dokunulmazlığının kaldırılması kararına karşı yaptığı itirazı görüşmek üzere toplanmıştır.<br><br><b>1982 Anayasası'na göre, Anayasa Mahkemesi Genel Kurulu, Mahkeme Başkanı'nın veya başkanın belirleyeceği başkan vekilinin başkanlığında en az kaç üye ile toplanır?</b></p>",
    diff: 2,
    expl: "Anayasa Mahkemesi, iki bölüm ve Genel Kurul hâlinde çalışır. Genel Kurul, Mahkeme Başkanının veya Başkanın belirleyeceği başkan vekilinin başkanlığında en az 10 üye ile toplanır.",
    answers: [
      { text: "8", ok: false },
      { text: "9", ok: false },
      { text: "10", ok: true },
      { text: "12", ok: false },
      { text: "15", ok: false }
    ]
  },
  {
    text: "<p>• Anayasa Mahkemesi üyeleri ---- yıl için seçilirler.<br>• Bir kimse ---- defa Anayasa Mahkemesi üyesi seçilemez.<br>• Anayasa Mahkemesi üyeleri ---- yaşını doldurunca emekliye ayrılırlar.<br>• Anayasa Mahkemesine üye seçilebilmek için ---- yaşın doldurulmuş olması gerekir.<br>• Anayasa Mahkemesi üyeleri arasından gizli oyla ve üye tam sayısının salt çoğunluğu ile ---- yıl için bir Başkan seçilir.<br><br><b>1982 Anayasası'na göre, aşağıdakilerden hangisi Anayasa Mahkemesi üyeliği ile ilgili yukarıdaki tabloda bırakılan boşluklardan birine getirilemez?</b></p>",
    diff: 3,
    expl: "Anayasa Mahkemesi üyeleri 12 yıl için seçilirler. Bir kimse 2 defa üye seçilemez. Üyeler 65 yaşını doldurunca emekliye ayrılırlar. Üye seçilebilmek için 45 yaşın doldurulmuş olması gerekir. Kendi aralarından gizli oyla 4 yıl için bir Başkan seçilirler. Seçeneklerdeki 40 sayısı herhangi bir boşluğa getirilemez.",
    answers: [
      { text: "40", ok: true },
      { text: "12", ok: false },
      { text: "2", ok: false },
      { text: "65", ok: false },
      { text: "4", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Anayasa Mahkemesinde aşağıdaki davalardan hangisi duruşmalı olarak görülmek zorundadır?</b></p>",
    diff: 1,
    expl: "Anayasa Mahkemesi kural olarak dava ve işleri dosya üzerinden (duruşmasız) inceler. Ancak Yüce Divan sıfatıyla baktığı davalar (üst düzey kamu görevlilerinin yargılanması) duruşmalı olarak görülmek zorundadır.",
    answers: [
      { text: "Anayasa değişikliğinin iptali davası", ok: false },
      { text: "Bireysel başvuru yoluyla yapılan temel hak ihlali incelemesi", ok: false },
      { text: "TBMM İç Tüzüğü'nün iptali davası", ok: false },
      { text: "Yüce Divanda üst düzey kamu görevlilerinin yargılanması", ok: true },
      { text: "Siyasi partilerin kapatılması kararı", ok: false }
    ]
  },
  {
    text: "<p>Anayasa Mahkemesi, başkan vekilinin başkanlığında 4 üyenin katılımıyla toplanıyor.<br><br><b>1982 Anayasası'na göre, Anayasa Mahkemesi aşağıdakilerden hangisi karar bağlanmak için toplanmış olabilir?</b></p>",
    diff: 2,
    expl: "Anayasa Mahkemesinin bölümleri (başkan vekili başkanlığında 4 üye ile toplanan), yalnızca 'bireysel başvurulara' ilişkin kararları verir. Siyasi parti kapatma, Yüce Divan yargılamaları ve iptal davaları gibi konular en az 10 üye ile toplanan Genel Kurulun görevidir.",
    answers: [
      { text: "M Partisinin kapatılmasına ilişkin dava", ok: false },
      { text: "Vatandaşlık kanunundaki değişikliklerin iptaline ilişkin dava", ok: false },
      { text: "Milletvekili B'nin vekilliğinin düşürülmesine ilişkin itiraz davası", ok: false },
      { text: "K'nin yaptığı bireysel başvuruya ilişkin dava", ok: true },
      { text: "Görevini kötüye kullanan Danıştay üyesinin yargılandığı Yüce Divan sıfatıyla yürütülecek yargılama", ok: false }
    ]
  }
];

// ============================================================================
// YARGI - TEST 3
// ============================================================================
export const VAT_YARGI_TEST_3: McQ[] = [
  {
    text: "<p>1982 Anayasası'na göre,<br><br>I. bir Anayasa değişikliğinin iptali,<br>II. Yüce Divan yargılaması,<br>III. bir siyasi partinin kapatılması veya Devlet yardımından yoksun bırakılması<br><br><b>için 12 üye ile toplanan Anayasa Mahkemesi her bir dava için hangi sayılar ile karar alabilir?</b></p>",
    diff: 3,
    expl: "Anayasa Mahkemesi Genel Kurulu kural olarak salt çoğunlukla karar alır. Ancak Anayasa değişikliğinde iptale ve siyasi partilerin kapatılmasına ya da devlet yardımından yoksun bırakılmasına karar verilebilmesi için toplantıya katılan üyelerin üçte iki (2/3) oy çokluğu şarttır. Yüce Divan yargılamasında ise salt çoğunluk yeterlidir. 12 üye katıldığına göre; Anayasa değişikliği iptali için 12'nin 2/3'ü olan 8 oy, Yüce Divan için 12'nin salt çoğunluğu olan 7 oy, parti kapatma için 12'nin 2/3'ü olan 8 oy gerekir.",
    answers: [
      { text: "8 - 8 - 8", ok: false },
      { text: "8 - 7 - 8", ok: true },
      { text: "8 - 7 - 7", ok: false },
      { text: "7 - 7 - 7", ok: false },
      { text: "7 - 7 - 8", ok: false }
    ]
  },
  {
    text: "<p>Bir bakan hakkında görev suçu işlediği iddiasıyla meclis soruşturması açılmış, yapılan soruşturma sonucunda bakanın dosyası yargılanmak üzere Anayasa Mahkemesine gönderilmiştir.<br><br><b>1982 Anayasası'na göre bakanı görev suçu nedeniyle yargılayan Anayasa Mahkemesi organı aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Anayasa Mahkemesi; Cumhurbaşkanını, Türkiye Büyük Millet Meclisi Başkanını, Cumhurbaşkanı yardımcılarını ve bakanları görevleriyle ilgili suçlardan dolayı Yüce Divan sıfatıyla yargılar.",
    answers: [
      { text: "Anayasa Divanı", ok: false },
      { text: "Anayasa Mahkemesi Genel Kurulu", ok: false },
      { text: "Yüce Divan", ok: true },
      { text: "Anayasa Mahkemesi İçtihatları Birleştirme Kurulu", ok: false },
      { text: "Anayasa Konseyi", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Yüce Divan yargılamasına ilişkin aşağıdaki eşleştirmelerden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "Yüce Divan kararlarına karşı yeniden inceleme başvurusu yapılabilir ve bu başvuru sonucunda verilen karar kesindir. Ancak Yüce Divan kararlarına karşı \"temyiz\" yolu öngörülmemiştir. Dolayısıyla kararlarına karşı temyiz yolunun açık olduğu ifadesi Anayasa'ya aykırıdır.",
    answers: [
      { text: "Yargılama: Anayasa Mahkemesi tarafından yapılır.", ok: false },
      { text: "Savcılık görevi: Yargıtay Cumhuriyet Başsavcısı veya vekili yapar.", ok: false },
      { text: "Kararlarına karşı: Temyiz yolu açıktır.", ok: true },
      { text: "Mahkûmiyet: Seçilmeye engel ise görevi sona erdirir.", ok: false },
      { text: "Yeniden inceleme: Yapılabilir ancak sonucunda verilen karar kesindir.", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisi görevleriyle ilgili suçlardan dolayı Yüce Divanda yargılanabilir?</b></p>",
    diff: 2,
    expl: "Anayasa Mahkemesi; Cumhurbaşkanını, TBMM Başkanını, Cumhurbaşkanı yardımcılarını, Bakanları, Yüksek Mahkeme Başkan ve üyelerini, Başsavcılarını, HSK ve Sayıştay Başkan ve üyelerini, Genelkurmay Başkanı, Kara, Deniz ve Hava Kuvvetleri Komutanlarını Yüce Divan sıfatıyla yargılar. Jandarma Genel Komutanı 2017'de Yüce Divan kapsamından çıkarılmıştır. Doğru cevap Sayıştay Başkanı'dır.",
    answers: [
      { text: "Milletvekilleri", ok: false },
      { text: "Sayıştay Başkanı", ok: true },
      { text: "Jandarma Genel Komutanı", ok: false },
      { text: "Sahil Güvenlik Komutanı", ok: false },
      { text: "Emniyet Genel Müdürü", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Anayasa Mahkemesinin aşağıdaki kararlarından hangisine karşı yeniden inceleme başvurusu yapılabilir?</b></p>",
    diff: 1,
    expl: "Kural olarak Anayasa Mahkemesinin kararları kesindir. İptal kararları gerekçesi yazılmadan açıklanamaz. Ancak bu kuralın tek istisnası vardır: Yüce Divan kararlarına karşı ilgililer \"yeniden inceleme\" başvurusu yapabilirler. Genel Kurulun yeniden inceleme sonucunda verdiği karar ise kesinleşir.",
    answers: [
      { text: "Bir siyasi partiyi temelli kapatma kararı", ok: false },
      { text: "Bireysel başvurulara ilişkin kararları", ok: false },
      { text: "Yüce Divan sıfatıyla verdiği kararları", ok: true },
      { text: "Somut norm denetimine ilişkin kararları", ok: false },
      { text: "İptal davasına ilişkin kararları", ok: false }
    ]
  },
  {
    text: "<p>7528 sayılı Öğretmenlik Mesleği Kanunu'nun belirli maddelerinin esas bakımından Anayasa'ya aykırı olduğu iddiasıyla, Türkiye Büyük Millet Meclisinde en fazla üyeye sahip ikinci parti grubu, Anayasa Mahkemesi'ne dava açıyor.<br><br><b>1982 Anayasası'na göre, yukarıdaki açıklamada belirtilen dava aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Kanunların, Cumhurbaşkanlığı Kararnamelerinin veya TBMM İç Tüzüğü'nün, yürürlüğe girdikten sonra doğrudan Anayasa'ya uygunluk açısından iptali talebiyle dava açılması 'Soyut Norm Denetimi' (İptal Davası) kapsamındadır. Bu davayı belli organlar ve milletvekilleri açabilir.",
    answers: [
      { text: "Tam yargı davası", ok: false },
      { text: "Soyut norm denetimi", ok: true },
      { text: "İtiraz def'i", ok: false },
      { text: "Somut norm denetimi", ok: false },
      { text: "Bireysel başvuru", ok: false }
    ]
  },
  {
    text: "<p>İstanbul 5. İş Mahkemesi Hâkimi Ferhat Bey, önündeki davada uygulanan bazı kanun hükmünün Anayasa'daki eşitlik ilkesine aykırı olabileceğini değerlendirmiştir. Davalı avukatı Nilay Hanım da aynı yönde itirazda bulunmuş, hâkim bu itirazı ciddi bularak yargılamayı durdurmuş ve durumu Anayasa Mahkemesine iletmiştir.<br><br><b>1982 Anayasası'nda \"Anayasa'ya aykırılığın diğer mahkemelerce ileri sürülmesi\" aşağıdaki kavramlardan hangisiyle adlandırılır?</b></p>",
    diff: 2,
    expl: "Bir davaya bakmakta olan mahkemenin uygulayacağı kanun veya CBK hükümlerini Anayasa'ya aykırı görmesi veya taraflardan birinin ileri sürdüğü aykırılık iddiasının ciddi olduğu kanısına varması durumunda dosyayı Anayasa Mahkemesine göndermesine 'somut norm denetimi' (itiraz yolu) denir.",
    answers: [
      { text: "Bireysel başvuru", ok: false },
      { text: "Soyut norm denetimi", ok: false },
      { text: "Tam yargı davası", ok: false },
      { text: "Somut norm denetimi", ok: true },
      { text: "İptal davası", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Anayasa Mahkemesine açılacak iptal davası ile ilgili aşağıda verilen bilgilerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "Kanunların 'esas' bakımından iptali için dava açmaya yetkili olanlar; Cumhurbaşkanı, TBMM üye tam sayısının en az beşte biri (1/5) tutarındaki milletvekili ve TBMM'de en yüksek üyeye sahip İKİ PARTİ GRUBUDUR. B seçeneğinde eksik bilgi verilmiş, parti gruplarının dava açma yetkisi belirtilmemiştir.",
    answers: [
      { text: "Kanun / Şekil / Cumhurbaşkanı, en az 1/5 milletvekili", ok: false },
      { text: "Kanun / Esas / Cumhurbaşkanı, en az 1/5 milletvekili", ok: true },
      { text: "Cumhurbaşkanı Kararnamesi / Şekil ve esas / Cumhurbaşkanı, en az 1/5 milletvekili, en fazla üyeye sahip iki parti grubu", ok: false },
      { text: "TBMM İç Tüzüğü / Şekil ve esas / Cumhurbaşkanı, en az 1/5 milletvekili, en fazla üyeye sahip iki parti grubu", ok: false },
      { text: "Anayasa değişikliği / Şekil / Cumhurbaşkanı, en az 1/5 milletvekili", ok: false }
    ]
  },
  {
    text: "<p>Aşağıda Anayasa Mahkemesinin soyut norm denetimi (iptal davası) yetkisine ilişkin normlar ile bu normlara yönelik denetim türü ve normun yayımından itibaren başvuru süreleri verilmiştir.<br><br>I. Kanun - Şekil - 10 gün<br>II. Kanun - Esas - 60 gün<br>III. Cumhurbaşkanlığı Kararnamesi - Şekil ve esas - 10 gün<br>IV. TBMM İç Tüzüğü - Şekil ve esas - 60 gün<br>V. Anayasa değişikliği - Şekil - 10 gün<br><br><b>1982 Anayasası'na yukarıda verilen bilgilerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "Cumhurbaşkanlığı Kararnameleri için hem şekil hem de esas bakımından iptal davası açma süresi Resmî Gazete'de yayımını izleyen 60 gündür. 10 günlük süre sadece kanunların ve anayasa değişikliklerinin 'şekil' yönünden iptal davaları için geçerlidir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>TBMM'de kabul edilen \"Kişisel Verileri Koruma Kanunu\" 5 Temmuz'da Resmî Gazete'de yayımlanmıştır. 120 milletvekili, şekil yönünden Anayasa'ya aykırı olduğunu düşünerek iptal davası açmak istemektedir.<br><br><b>1982 Anayasası'na göre milletvekillerinin iptal davası açabileceği son gün aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Kanunların şekil bakımından iptali için Anayasa Mahkemesine, Resmî Gazete'de yayımlanmasından itibaren 10 gün içinde dava açılmalıdır. 5 Temmuz'da yayımlandığına göre son gün 15 Temmuz'dur.",
    answers: [
      { text: "10 Temmuz", ok: false },
      { text: "15 Temmuz", ok: true },
      { text: "20 Temmuz", ok: false },
      { text: "25 Temmuz", ok: false },
      { text: "5 Ağustos", ok: false }
    ]
  },
  {
    text: "<p>I. Milletlerarası antlaşmalar<br>II. İnkılap kanunları<br>III. Olağanüstü hâl Cumhurbaşkanı kararnameleri<br><br><b>1982 Anayasası'na göre, yukarıdakilerden hangileri için Anayasa Mahkemesine iptal davası açılamaz?</b></p>",
    diff: 1,
    expl: "Anayasa Mahkemesinin denetimine tabi olmayan ve yargı yolu tamamen kapalı olan normlar şunlardır: Usulüne göre yürürlüğe giren milletlerarası antlaşmalar, Olağanüstü hâl Cumhurbaşkanlığı kararnameleri ve İnkılap Kanunları.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Anayasa Mahkemesi aşağıdakilerden hangisi için açılan iptal davalarında esas (içerik) denetimi yapamaz?</b></p>",
    diff: 1,
    expl: "Anayasa Mahkemesi kanunların, Cumhurbaşkanı kararnamelerinin ve TBMM İç Tüzüğü'nün Anayasa'ya hem esas hem şekil yönünden uygunluğunu denetler. Ancak Anayasa değişikliklerini sadece \"şekil\" bakımından denetleyebilir, esas (içerik) denetimi yapamaz.",
    answers: [
      { text: "Bütçe Kanunu", ok: false },
      { text: "TBMM İç Tüzüğü", ok: false },
      { text: "Anayasa değişikliği", ok: true },
      { text: "Cumhurbaşkanı kararnameleri", ok: false },
      { text: "Türk Borçlar Kanunu", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisi için Anayasa Mahkemesine iptal davası açılabilir?</b></p>",
    diff: 2,
    expl: "Anayasa Mahkemesi, kanunların Anayasa'ya uygunluğunu denetler. Bütçe Kanunu da bir kanun olduğu için Anayasa Mahkemesi'nin yargısal denetimine tabidir. Ancak OHAL Kararnameleri, milletlerarası antlaşmalar (Montrö, AİHS) yargı denetimi dışındadır. Yönetmelikler ise idari yargının denetimi altındadır.",
    answers: [
      { text: "Bütçe Kanunu", ok: true },
      { text: "Kahramanmaraş depremleri sonrası yayımlanan OHAL Cumhurbaşkanlığı Kararnamesi", ok: false },
      { text: "9 Kasım 1936 tarihli Montrö Boğazlar Sözleşmesi", ok: false },
      { text: "Öğretmen Atama ve Yer Değiştirme Yönetmeliği", ok: false },
      { text: "Usulüne göre yürürlüğe giren Türkiye'nin taraf olduğu Avrupa İnsan Hakları Sözleşmesi hükümleri", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisi anayasada belirtilen \"İnkılap Kanunları\" arasında yer almaz?</b></p>",
    diff: 3,
    expl: "1982 Anayasası madde 174'te 8 adet inkılap kanunu koruma altına alınmıştır. Şapka Kanunu, Tekke ve Zaviyeler, Tevhid-i Tedrisat ve Türk Kanunu Medenisinin evlenme maddesi bunlardandır. Ancak \"Şeriye ve Evkâf Vekâletinin İlgasına Dair Kanun\" Anayasa'da özel olarak korunan inkılap kanunları listesinde yer almaz.",
    answers: [
      { text: "Şeriye ve Evkâf Vekâletinin İlgasına Dair Kanun", ok: true },
      { text: "Şapka İktisası Hakkında Kanun", ok: false },
      { text: "Tekke ve Zaviyelerle Türbelerin Seddine ve Türbedarlıklar İle Bir Takım Ünvanların Men ve İlgasına Dair Kanun", ok: false },
      { text: "Tevhid-i Tedrisat Kanunu", ok: false },
      { text: "Türk Kanunu Medenisi'yle Kabul Edilen, Evlenme Akdinin Evlendirme Memuru Önünde Yapılacağına Dair Kanun", ok: false }
    ]
  }
];

// ============================================================================
// YARGI - TEST 4
// ============================================================================
export const VAT_YARGI_TEST_4: McQ[] = [
  {
    text: "<p>Elif: Sayın hâkim, davaya uygulanacak kanun hükmünün Anayasa'ya aykırılığı iddiasıyla Anayasa Mahkemesine başvurdunuz, peki bu sürecin sonlanması ne kadar sürer?<br><br>Hâkim: Anayasaya göre Mahkemenin önünde belirli bir süre var.<br><br><b>1982 Anayasası'na göre, yukarıda yer alan ifadeler dikkate alındığında, mahkemenin Anayasa Mahkemesine yaptığı somut norm denetimi başvurusunda, Anayasa Mahkemesinin kararını en geç ne kadar süre içinde vermesi gerekir?</b></p>",
    diff: 1,
    expl: "Anayasa Mahkemesi, işin kendisine gelişinden başlamak üzere 5 ay içinde kararını verir ve açıklar. Bu süre içinde karar verilmezse mahkeme davayı yürürlükteki kanun hükümlerine göre sonuçlandırır.",
    answers: [
      { text: "3 ay", ok: false },
      { text: "4 ay", ok: false },
      { text: "5 ay", ok: true },
      { text: "6 ay", ok: false },
      { text: "1 yıl", ok: false }
    ]
  },
  {
    text: "<p>Bir somut norm denetiminde Anayasa Mahkemesi, işin kendisine gelmesinden itibaren beş ay içinde kararını vermiyor.<br><br><b>1982 Anayasası'na göre, bu durumda, mahkeme aşağıdaki işlemlerden hangisini yapmak zorundadır?</b></p>",
    diff: 2,
    expl: "Anayasa Mahkemesi, işin kendisine gelişinden başlamak üzere beş ay içinde kararını verir ve açıklar. Bu süre içinde karar verilmezse mahkeme davayı yürürlükteki kanun hükümlerine göre sonuçlandırır. Ancak, Anayasa Mahkemesinin kararı, esas hakkındaki karar kesinleşinceye kadar gelirse, mahkeme buna uymak zorundadır.",
    answers: [
      { text: "Yargılamayı süresiz askıya alır.", ok: false },
      { text: "Davayı sona erdirir.", ok: false },
      { text: "Normu uygulamadan hüküm verir.", ok: false },
      { text: "Mevcut kanun hükmünü esas alarak davayı sonuçlandırır.", ok: true },
      { text: "Dosyayı tekrar Anayasa Mahkemesine gönderir.", ok: false }
    ]
  },
  {
    text: "<p>Ahmet Bey, ceza davasının uzun sürmesi nedeniyle Anayasa'da ve Avrupa İnsan Hakları Sözleşmesi'nde güvence altına alınan makul sürede yargılanma hakkı ile diğer hak ve özgürlüklerin ihlal edildiği iddiasıyla Anayasa Mahkemesine başvurmuştur.<br><br><b>Anayasa hukukunda \"Anayasa Şikâyeti\" olarak da ifade edilen bu dava aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Anayasa Mahkemesine bireysel başvuru, anayasada tanımlanan ve aynı zamanda Avrupa İnsan Hakları Sözleşmesi (AİHS) ile ek protokollerde koruma altına alınmış temel hak ve özgürlüklerden herhangi birinin ihlali hâlinde başvurulan bir yargı yoludur. Bu hak arama yoluna anayasa hukukunda 'Bireysel Başvuru (Anayasa Şikâyeti)' adı verilir.",
    answers: [
      { text: "Bireysel başvuru", ok: true },
      { text: "Tam yargı davası", ok: false },
      { text: "Somut norm denetimi", ok: false },
      { text: "İtiraz def'i", ok: false },
      { text: "Kanun yolu", ok: false }
    ]
  },
  {
    text: "<p>Anayasa Mahkemesi somut norm denetimi yoluyla bir kanunun iptali için davada ret kararı verir.<br><br><b>1982 Anayasası'na göre, bu ret kararının Resmî Gazete'de yayımlanmasından itibaren kaç yıl geçmedikçe aynı norm hakkında anayasaya aykırılık iddiasıyla Anayasa Mahkemesine başvurulamaz?</b></p>",
    diff: 1,
    expl: "Anayasa Mahkemesinin işin esasına girerek verdiği ret kararının Resmî Gazete'de yayımlanmasından sonra 10 yıl geçmedikçe aynı kanun hükmünün Anayasa'ya aykırılığı iddiasıyla tekrar başvuruda bulunulamaz.",
    answers: [
      { text: "1", ok: false },
      { text: "5", ok: false },
      { text: "10", ok: true },
      { text: "15", ok: false },
      { text: "20", ok: false }
    ]
  },
  {
    text: "<p>Anayasa'nın 148. maddesine göre; herkes, Anayasada güvence altına alınmış temel hak ve özgürlüklerinden, ---- kapsamındaki herhangi birinin kamu gücü tarafından ihlal edildiği iddiasıyla, Anayasa Mahkemesine bireysel başvuru yapabilir.<br><br><b>1982 Anayasası'na göre, yukarıda bırakılan boşluğa hangisi getirilmelidir?</b></p>",
    diff: 1,
    expl: "Anayasa'nın 148. maddesinin 3. fıkrası, bireysel başvuru hakkının kapsamını hem iç hukukta anayasal güvence altına alınmış temel haklar, hem de Avrupa İnsan Hakları Sözleşmesi (AİHS) kapsamında tanınan haklarla sınırlandırmıştır.",
    answers: [
      { text: "Türk Ceza Kanunu", ok: false },
      { text: "Avrupa Sosyal Şartı", ok: false },
      { text: "Avrupa İnsan Hakları Sözleşmesi", ok: true },
      { text: "İnsan Hakları Evrensel Bildirgesi", ok: false },
      { text: "Avrupa Birliği Temel Haklar Şartı", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisi Anayasa'da \"Yargı\" başlığı altında düzenlenmemiştir?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'nın \"Yargı\" başlıklı kısmı; mahkemelerin bağımsızlığı, Hâkimler ve Savcılar Kurulu, Anayasa Mahkemesi, Yargıtay, Danıştay, Uyuşmazlık Mahkemesi ve Sayıştay gibi yargı organlarını bu bölüm altında düzenler. Ancak Yüksek Seçim Kurulu (YSK) bu bölümde değil seçimler ve halkoylamaları başlıklı \"Yasama\" bölümünde düzenlenmiştir.",
    answers: [
      { text: "Anayasa Mahkemesi", ok: false },
      { text: "Sayıştay", ok: false },
      { text: "Uyuşmazlık Mahkemesi", ok: false },
      { text: "Danıştay", ok: false },
      { text: "Yüksek Seçim Kurulu", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Anayasa Mahkemesine bireysel başvuru hakkı ile ilgili aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "Anayasa Mahkemesi, bireysel başvuruda sadece hak ihlali olup olmadığına karar verir; mahkeme kararlarını değiştirip yerine geçecek yeni bir karar (hüküm) veremez. İhlali ve sonuçlarını ortadan kaldırmak için yapılması gerekenlere hükmeder ancak kendisi yargı mercinin yerine geçip karar veremez.",
    answers: [
      { text: "Herkes, Anayasa Mahkemesine bireysel başvuruda bulunabilir.", ok: false },
      { text: "Anayasa Mahkemesine bireysel başvuruda bulunabilmek için olağan kanun yollarının tüketilmiş olması gerekir.", ok: false },
      { text: "Bireysel başvuru hakkı, Avrupa İnsan Hakları Sözleşmesi kapsamındaki hakların ihlaline dayalı olarak kullanılabilir.", ok: false },
      { text: "Kamu gücü tarafından gerçekleştirilen bir ihlal iddiası bireysel başvurunun ön şartıdır.", ok: false },
      { text: "Anayasa Mahkemesi, hak ihlali tespit ettiğinde mahkeme kararını değiştirip yeni bir hüküm verebilir.", ok: true }
    ]
  },
  {
    text: "<p>Anayasa Mahkemesi, bir kanun hükmünü Anayasa'ya aykırı bularak iptal etmiştir. Ancak hükmün yürürlükten hemen kaldırılmasının ciddi hukuki boşluklara yol açabileceğini dikkate alarak, iptal kararının yürürlüğe gireceği tarihi ileri bir tarihe bırakmıştır.<br><br><b>1982 Anayasası'na göre, bu tarih kararın Resmî Gazete'de yayımlandığı günden başlayarak en fazla ne kadar olabilir?</b></p>",
    diff: 1,
    expl: "1982 Anayasası'nın 153. maddesine göre, Anayasa Mahkemesi, gereken hâllerde iptal kararının yürürlüğe gireceği tarihi ayrıca kararlaştırabilir. Bu tarih, kararın Resmî Gazete'de yayımlandığı günden başlayarak en fazla 1 yıl olabilir.",
    answers: [
      { text: "3 ay", ok: false },
      { text: "6 ay", ok: false },
      { text: "9 ay", ok: false },
      { text: "1 yıl", ok: true },
      { text: "2 yıl", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Anayasa Mahkemesi'nin kararlarına ilişkin aşağıdaki ifadelerden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "Anayasa Mahkemesi iptal kararlarının yürürlüğe giriş tarihini erteleyebilir (en fazla bir yıl) ancak iptal kararları geçmişe yürüyemez (geçmişe etkili uygulanmaz). İptal edilen kanun maddesi uyarınca geçmişte doğmuş hukuki sonuçlar kural olarak etkilenmez.",
    answers: [
      { text: "Resmî Gazete'de yayımlanmak zorundadır.", ok: false },
      { text: "Yasama, yürütme ve yargı organlarını bağlar.", ok: false },
      { text: "İptal kararları geçmişe etkili olacak şekilde uygulanabilir.", ok: true },
      { text: "Anayasa Mahkemesinin kararları kesindir.", ok: false },
      { text: "Yürürlüğü, yayımlandığı tarihten itibaren en fazla bir yıl ertelenebilir.", ok: false }
    ]
  },
  {
    text: "<p>I. Hâkimler ve Savcılar Kurulu<br>II. Türkiye Büyük Millet Meclisi<br>III. Cumhurbaşkanı<br><br><b>Yargıtay üyeleri yukarıdakilerden hangileri tarafından seçilir?</b></p>",
    diff: 2,
    expl: "Yargıtay üyeleri, birinci sınıfa ayrılmış adli yargı hâkim ve Cumhuriyet savcıları ile bu meslekten sayılanlar arasından Hâkimler ve Savcılar Kurulu (HSK) üye tam sayısının salt çoğunluğu ile ve gizli oyla seçilir. Cumhurbaşkanı ve TBMM, Yargıtay'a üye seçmez.",
    answers: [
      { text: "Yalnız I", ok: true },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Hâkimler ve savcılar idari görevleri yönünden aşağıdakilerden hangisine bağlıdır?</b></p>",
    diff: 1,
    expl: "Hâkimler ve savcılar idari görevleri yönünden Adalet Bakanlığına bağlıdırlar.",
    answers: [
      { text: "Adalet Bakanlığı", ok: true },
      { text: "Yargıtay", ok: false },
      { text: "Hâkimler ve Savcılar Kurulu", ok: false },
      { text: "Anayasa Mahkemesi", ok: false },
      { text: "Danıştay", ok: false }
    ]
  },
  {
    text: "<p>Yargıtay Cumhuriyet Başsavcısı, Yargıtay Genel Kurulu tarafından gizli oyla belirlenen ---- aday arasından, ---- tarafından 4 yıl için seçilir.<br><br><b>1982 Anayasası'na göre, yukarıda bırakılan boşluklara sırasıyla hangisi getirilmelidir?</b></p>",
    diff: 2,
    expl: "Yargıtay Cumhuriyet Başsavcısı ve Cumhuriyet Başsavcıvekili, Yargıtay Genel Kurulunun kendi üyeleri arasından gizli oyla belirleyeceği beşer aday arasından Cumhurbaşkanı tarafından dört yıl için seçilirler.",
    answers: [
      { text: "üç - TBMM", ok: false },
      { text: "beş - Cumhurbaşkanı", ok: true },
      { text: "beş - Hâkimler ve Savcılar Kurulu", ok: false },
      { text: "yedi - Cumhurbaşkanı", ok: false },
      { text: "beş - Adalet Bakanı", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Danıştayın görev ve yetkileri arasında;</b><br><br>I. idari davaları karara bağlamak,<br>II. TBMM'ye sunulan kanun teklifleri hakkında görüş vermek,<br>III. idari uyuşmazlıklara çözüm getirmek,<br>IV. kamu hizmeti imtiyaz sözleşmeleri hakkında görüş vermek<br><br><b>ifadelerinden hangileri yer alır?</b></p>",
    diff: 2,
    expl: "Danıştay, idari mahkemelerce verilen ve kanunun başka bir idari yargı merciine bırakmadığı karar ve hükümlerin son inceleme merciidir. Danıştay; idari davaları görmek (I), idari uyuşmazlıkları çözmek (III) ve kamu hizmetleri ile ilgili imtiyaz şartlaşma ve sözleşmeleri hakkında iki ay içinde düşüncesini bildirmek (IV) ile görevlidir. Kanun teklifleri hakkında görüş vermek görevleri arasında değildir.",
    answers: [
      { text: "I, II ve III", ok: false },
      { text: "I, II ve IV", ok: false },
      { text: "I, III ve IV", ok: true },
      { text: "I ve III", ok: false },
      { text: "II, III ve IV", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre Danıştay, kamu hizmetleri ile ilgili imtiyaz şartlaşma ve sözleşmeleri hakkında ne kadar süre içerisinde düşüncesini bildirmekle görevlidir?</b></p>",
    diff: 1,
    expl: "Danıştay, kamu hizmetleri ile ilgili imtiyaz şartlaşma ve sözleşmeleri hakkında 2 ay içinde düşüncesini bildirmekle görevlidir.",
    answers: [
      { text: "15 gün", ok: false },
      { text: "1 ay", ok: false },
      { text: "2 ay", ok: true },
      { text: "3 ay", ok: false },
      { text: "6 ay", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Yargıtay ile ilgili aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "Yargıtay üyelerinin tamamı Hâkimler ve Savcılar Kurulu (HSK) tarafından seçilir. Cumhurbaşkanı, Yargıtay üyelerini seçmez (Sadece Yargıtay Cumhuriyet Başsavcısı ve vekilini 5 aday arasından seçer).",
    answers: [
      { text: "Üyelerinin tamamını Cumhurbaşkanı seçer.", ok: true },
      { text: "Bazı davalarda ilk ve son derece mahkemesi olarak görev yapar.", ok: false },
      { text: "Birinci başkanı ve başkanvekilleri, Yargıtay Genel Kurulunca seçilir.", ok: false },
      { text: "Yargıtay Cumhuriyet Başsavcısını Cumhurbaşkanı seçer.", ok: false },
      { text: "Adli yargı mahkemelerinin temyiz merci olarak görev yapar.", ok: false }
    ]
  },
  {
    text: "<p>Anayasa hukuku dersinde bir öğrenci;<br><br>• İdari mahkemelerce verilen ve kanunun başka bir idari yargı merciine bırakmadığı karar ve hükümlerin son inceleme merciidir.<br>• Üyelerinin 1/4'ünü Cumhurbaşkanı, 3/4'ünü Hâkimler ve Savcılar Kurulu seçer.<br><br>şeklinde notlar almışsa bu ifadeler 1982 Anayasası'na göre aşağıdakilerden hangisiyle ilgilidir?<br><b> </b></p>",
    diff: 1,
    expl: "Verilen özellikler Danıştay'a aittir. Danıştay, idari yargının en üst derece mahkemesidir. Üyelerinin dörtte birini Cumhurbaşkanı, dörtte üçünü Hâkimler ve Savcılar Kurulu (HSK) seçer.",
    answers: [
      { text: "Yargıtay", ok: false },
      { text: "Anayasa Mahkemesi", ok: false },
      { text: "Danıştay", ok: true },
      { text: "Uyuşmazlık Mahkemesi", ok: false },
      { text: "Yüksek Seçim Kurulu", ok: false }
    ]
  }
];

// ============================================================================
// YARGI - TEST 5
// ============================================================================
export const VAT_YARGI_TEST_5: McQ[] = [
  {
    text: "<p>Mahkeme verdiği bir kararında \"....5490 sayılı Nüfus Hizmetleri Kanunu uyarınca verilen idari para cezasının iptali istemiyle açılan davanın, adli yargı yerinde çözümlenmesi gerektiğini.....\" belirtilmiştir.<br><br><b>1982 Anayasası'ndaki görevi \"Adli ve idari yargı mercileri arasındaki görev ve hüküm uyuşmazlıklarını kesin olarak çözümlemeye yetkilidir.\" şeklinde düzenlenen mahkeme aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Uyuşmazlık Mahkemesi, adli ve idari yargı mercileri arasındaki görev ve hüküm uyuşmazlıklarını kesin olarak çözümlemeye yetkilidir.",
    answers: [
      { text: "Yargıtay", ok: false },
      { text: "Anayasa Mahkemesi", ok: false },
      { text: "Danıştay", ok: false },
      { text: "Uyuşmazlık Mahkemesi", ok: true },
      { text: "Sayıştay", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, diğer mahkemelerle Anayasa Mahkemesi arasında bir görev uyuşmazlığı çıkması hâlinde, bu uyuşmazlığın çözümünde aşağıdakilerden hangisi esas alınır?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'nın 158. maddesine göre, mahkemeler arasında çıkan görev ve hüküm uyuşmazlıklarını çözmek Uyuşmazlık Mahkemesinin görevidir. Ancak, bu görev uyuşmazlığı Anayasa Mahkemesi ile diğer mahkemeler arasında çıkmışsa, çözümde esas alınacak karar Anayasa Mahkemesininki olur. Bu istisna, AYM'nin anayasal konumunun üstünlüğüne dayanır.",
    answers: [
      { text: "Uyuşmazlık Mahkemesinin kararı", ok: false },
      { text: "Yargıtay Genel Kurulunun kararı", ok: false },
      { text: "Anayasa Mahkemesinin kararı", ok: true },
      { text: "Danıştayın içtihadı", ok: false },
      { text: "Hâkimler ve Savcılar Kurulunun kararı", ok: false }
    ]
  },
  {
    text: "<p>Olay ve Başvuru Yeri eşleştirmeleri:<br><br>I. Cumhurbaşkanlığı yönetmeliği hakkında açılan iptal davası → Danıştay<br>II. Bir kamu görevlisine verilen mahkûmiyet kararına karşı yapılan temyiz başvurusu → Yargıtay<br>III. Bir kamu idaresinin yaptığı usulsüz ödeme hakkında yapılan denetim → Sayıştay<br>IV. Adli ve idari yargı mercileri arasındaki görev ve hüküm uyuşmazlığının giderilmesi → Hâkimler ve Savcılar Kurulu<br>V. İfade özgürlüğünün ihlal edildiği gerekçesiyle yapılan bireysel başvuru → Anayasa Mahkemesi<br><br><b>Yukarıdaki tabloda verilen olay ve başvuru eşleştirmelerinden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "Adli ve idari yargı mercileri arasındaki görev ve hüküm uyuşmazlıklarını kesin olarak çözmeye yetkili organ 'Uyuşmazlık Mahkemesi'dir. 'Hâkimler ve Savcılar Kurulu' bir yargı organı veya mahkeme değildir, hâkim ve savcıların özlük işlerini yürüten bir kuruldur. Dolayısıyla IV. eşleştirme yanlıştır.",
    answers: [
      { text: "V", ok: false },
      { text: "IV", ok: true },
      { text: "III", ok: false },
      { text: "II", ok: false },
      { text: "I", ok: false }
    ]
  },
  {
    text: "<p>Uyuşmazlık Mahkemesinin başkanlığı, ---- tarafından ---- üyeleri arasından görevlendirilen bir üye tarafından yürütülür.<br><br><b>1982 Anayasası'na göre yukarıda bırakılan boşluklara sırasıyla hangisi getirilmelidir?</b></p>",
    diff: 1,
    expl: "Uyuşmazlık Mahkemesinin Başkanlığını Anayasa Mahkemesince, kendi üyeleri arasından görevlendirilen üye yapar.",
    answers: [
      { text: "Hâkimler ve Savcılar Kurulu – Danıştay", ok: false },
      { text: "TBMM – Yargıtay", ok: false },
      { text: "Anayasa Mahkemesi – kendi", ok: true },
      { text: "Cumhurbaşkanı – Yargıtay", ok: false },
      { text: "Danıştay – Sayıştay", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Hâkimler ve Savcılar Kurulu hakkında aşağıda verilen ifadelerden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "Hâkimler ve Savcılar Kurulu kararlarına karşı kural olarak yargı mercilerine başvurulamaz. Ancak bu kuralın istisnası vardır: Kurulun 'meslekten çıkarma' cezasına ilişkin kararlarına karşı yargı mercilerine başvurulabilir. Bu nedenle \"Kurulun tüm kararlarına karşı yargı yolu kapalıdır\" ifadesi yanlıştır.",
    answers: [
      { text: "13 üyeden oluşur.", ok: false },
      { text: "Kurulun tüm kararlarına karşı yargı yolu kapalıdır.", ok: true },
      { text: "2 daire hâlinde çalışır.", ok: false },
      { text: "Kurulun başkanı Adalet Bakanı'dır.", ok: false },
      { text: "Mahkemelerin bağımsızlığı ve hâkimlik teminatı esaslarına göre kurulur.", ok: false }
    ]
  },
  {
    text: "<p>Aşağıda Hâkimler ve Savcılar Kurulunun bazı işlemleri verilmiştir:<br><br>I. Hâkimlerin mesleğe kabul edilmesi<br>II. Hâkim ve savcılara disiplin cezası verilmesi<br>III. Hâkim ve savcıların kadro dağılımının yapılması<br>IV. Hâkim ve savcıların hakkında meslekten çıkarma kararı verilmesi<br>V. Hâkim ve savcıların yer değiştirme işlemi<br><br><b>1982 Anayasası'na göre, bu işlemlerden hangilerine karşı yargı yolu açıktır?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'na göre Hâkimler ve Savcılar Kurulunun kararlarına karşı genel kural olarak yargı yolu kapalıdır. Ancak bu kuralın istisnası, yalnızca \"meslekten çıkarma\" cezasına ilişkin kararlardır. Diğer işlemlere (mesleğe kabul, yer değiştirme vb.) karşı yargı yolu kapalıdır.",
    answers: [
      { text: "Yalnız IV", ok: true },
      { text: "I, IV ve V", ok: false },
      { text: "II, III ve V", ok: false },
      { text: "II ve IV", ok: false },
      { text: "I, II, III ve IV", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, mahkemelerin bağımsızlığı ve hâkimlik teminatı esaslarına göre kurulan ve görev yapan merci aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Hâkimler ve Savcılar Kurulu, mahkemelerin bağımsızlığı ve hâkimlik teminatı esaslarına göre kurulup görev yapan, adli ve idari yargı hâkim ve savcılarının özlük işlerini düzenleyen kuruldur.",
    answers: [
      { text: "Türkiye Adalet Akademisi", ok: false },
      { text: "Adalet Bakanlığı", ok: false },
      { text: "Hâkimler ve Savcılar Kurulu", ok: true },
      { text: "Sulh Ceza Hâkimliği", ok: false },
      { text: "Bölge Adliye Mahkemeleri", ok: false }
    ]
  },
  {
    text: "<p>Bir hukuk dersinde öğrenci;<br><br>• Üyeleri Hâkimler ve Savcılar Kurulu tarafından seçilir.<br>• Adli yargı alanında temyiz merci olarak görev yapar.<br>• Belli davalara da ilk ve son derece mahkemesi olarak bakar.<br><br><b>şeklinde notlar almışsa bu ifadeler 1982 Anayasası'na göre, aşağıdakilerden hangisi ile ilgilidir?</b></p>",
    diff: 1,
    expl: "Yargıtay, adliye mahkemelerince verilen ve kanunun başka bir adli yargı merciine bırakmadığı karar ve hükümlerin son inceleme (temyiz) merciidir. Yargıtay üyeleri, Hâkimler ve Savcılar Kurulu tarafından seçilir.",
    answers: [
      { text: "Anayasa Mahkemesi", ok: false },
      { text: "Danıştay", ok: false },
      { text: "Yargıtay", ok: true },
      { text: "Uyuşmazlık Mahkemesi", ok: false },
      { text: "Sayıştay", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıda verilenlerden hangisi Hâkimler ve Savcılar Kurulunun doğal üyesidir?</b></p>",
    diff: 1,
    expl: "Hâkimler ve Savcılar Kurulunun Başkanı Adalet Bakanı'dır. Adalet Bakanlığı müsteşarı (yeni adıyla Bakan yardımcısı), Kurulun tabii (doğal) üyesidir.",
    answers: [
      { text: "Danıştay Başsavcısı", ok: false },
      { text: "Adalet Bakan yardımcısı", ok: true },
      { text: "Danıştay Başkanı", ok: false },
      { text: "Anayasa Mahkemesi Başkanı", ok: false },
      { text: "Yargıtay Cumhuriyet Başsavcısı", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, merkezî yönetim bütçesi kapsamındaki kamu idareleri ile sosyal güvenlik kurumlarının bütün gelir ve giderlerini Türkiye Büyük Millet Meclisi adına aşağıdakilerden hangisi denetler?</b></p>",
    diff: 1,
    expl: "Sayıştay, merkezî yönetim bütçesi kapsamındaki kamu idareleri ile sosyal güvenlik kurumlarının bütün gelir ve giderleri ile mallarını Türkiye Büyük Millet Meclisi adına denetlemek ve sorumluların hesap ve işlemlerini kesin hükme bağlamakla görevlidir.",
    answers: [
      { text: "Devlet Denetleme Kurulu", ok: false },
      { text: "Sayıştay", ok: true },
      { text: "Gelir İdaresi Başkanlığı", ok: false },
      { text: "Hazine ve Maliye Bakanlığı", ok: false },
      { text: "Yüksek Hakem Kurulu", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre vergi, benzeri mali yükümlülükler ve ödevler hakkında Danıştay ile Sayıştay kararları arasındaki uyuşmazlıklarda aşağıdakilerden hangisi doğrudur?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'na göre, vergi, benzeri mali yükümlülükler ve ödevler hakkında Danıştay ile Sayıştay kararları arasındaki uyuşmazlıklarda Danıştay kararları esas alınır. Çünkü Danıştay bir yüksek mahkemedir (Sayıştay ise yüksek mahkeme olarak sayılmamıştır).",
    answers: [
      { text: "Sayıştay kararı esas alınır.", ok: false },
      { text: "Danıştay kararı esas alınır.", ok: true },
      { text: "Önceki karar esas alınır.", ok: false },
      { text: "Sonraki karar esas alınır.", ok: false },
      { text: "Uyuşmazlık Mahkemesi kesin kararı verir.", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, mahallî idarelerin hesap ve işlemlerinin denetimi ve kesin hükme bağlanması aşağıdakilerden hangisi tarafından yapılır?</b></p>",
    diff: 1,
    expl: "1982 Anayasası'na göre, merkezî yönetim kapsamındaki idarelerin yanı sıra mahallî idarelerin (belediye, il özel idaresi vb.) hesap ve işlemlerinin denetimi ve kesin hükme bağlanması da Sayıştay tarafından yapılır.",
    answers: [
      { text: "Anayasa Mahkemesi", ok: false },
      { text: "Danıştay", ok: false },
      { text: "Yargıtay", ok: false },
      { text: "Sayıştay", ok: true },
      { text: "Hazine ve Maliye Bakanlığı", ok: false }
    ]
  },
  {
    text: "<p>I. Hâkimler ve Savcılar Kurulu,<br>II. Anayasa Mahkemesi,<br>III. Yüksek Seçim Kurulu<br><br><b>hangilerinin üye sayısı 1982 Anayasası ile belirlenmiştir?</b></p>",
    diff: 3,
    expl: "1982 Anayasası'na göre; Hâkimler ve Savcılar Kurulu 13 üyeden, Anayasa Mahkemesi 15 üyeden, Yüksek Seçim Kurulu 7 asıl 4 yedek olmak üzere 11 üyeden oluşur. Yargıtay, Danıştay, Uyuşmazlık Mahkemesi ve Sayıştay'ın kaç üyeden oluştuğu Anayasa'da belirtilmemiş, kanuna bırakılmıştır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisi Cumhurbaşkanı'nın üye seçtiği mercilerdendir?</b></p>",
    diff: 2,
    expl: "Hâkimler ve Savcılar Kurulunun 13 üyesi vardır. Adalet Bakanı ve yardımcısı doğal üyedir. Kurulun 7 üyesini TBMM, 4 üyesini ise Cumhurbaşkanı seçer. Ancak Sayıştay, Yargıtay, Yüksek Seçim Kurulu ve Uyuşmazlık Mahkemesine Cumhurbaşkanı üye seçemez.",
    answers: [
      { text: "Sayıştay", ok: false },
      { text: "Yargıtay", ok: false },
      { text: "Yüksek Seçim Kurulu", ok: false },
      { text: "Uyuşmazlık Mahkemesi", ok: false },
      { text: "Hâkimler ve Savcılar Kurulu", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Adalet Bakanı aşağıdakilerden hangisinin başkanlığını yürütmektedir?</b></p>",
    diff: 1,
    expl: "Hâkimler ve Savcılar Kurulu (HSK), mahkemelerin bağımsızlığı ve hâkimlik teminatı esaslarına göre kurulur. Kurulun Başkanı Adalet Bakanı'dır.",
    answers: [
      { text: "Anayasa Mahkemesi", ok: false },
      { text: "Yargıtay", ok: false },
      { text: "Hâkimler ve Savcılar Kurulu", ok: true },
      { text: "Danıştay", ok: false },
      { text: "Uyuşmazlık Mahkemesi", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, bir mahkemenin kaldırılması veya yargı çevresinin değiştirilmesi, Adalet Bakanlığının önerisi üzerine, coğrafi durum ve iş ölçütlerine göre aşağıdakilerden hangisi tarafından kararlaştırılır?</b></p>",
    diff: 2,
    expl: "Adalet Bakanlığının, bir mahkemenin kaldırılması veya yargı çevresinin değiştirilmesi konusundaki tekliflerini karara bağlama görevi Hâkimler ve Savcılar Kuruluna aittir.",
    answers: [
      { text: "Cumhurbaşkanı", ok: false },
      { text: "Danıştay", ok: false },
      { text: "Hâkimler ve Savcılar Kurulu", ok: true },
      { text: "Uyuşmazlık Mahkemesi", ok: false },
      { text: "Yargıtay", ok: false }
    ]
  }
];