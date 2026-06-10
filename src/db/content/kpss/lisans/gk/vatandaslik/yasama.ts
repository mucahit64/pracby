import type { McQ } from "../../../../types";

// ============================================================================
// YASAMA - TEST 1
// ============================================================================
export const VAT_YASAMA_TEST_1: McQ[] = [
  {
    text: "<p><b>1982 Anayasası'na göre, Türkiye Büyük Millet Meclisi genel oyla seçilen kaç milletvekilinden oluşur?</b></p>",
    diff: 1,
    expl: "1982 Anayasası'na göre, Türkiye Büyük Millet Meclisi genel oyla seçilen altı yüz (600) milletvekilinden oluşur. Milletvekilleri tüm milleti temsil ederler.",
    answers: [
      { text: "450", ok: false },
      { text: "500", ok: false },
      { text: "550", ok: false },
      { text: "600", ok: true },
      { text: "700", ok: false }
    ]
  },
  {
    text: "<p><b>2839 sayılı Milletvekili Seçim Kanunu'na göre, bir ilde en fazla kaç seçim çevresi olabilir?</b></p>",
    diff: 2,
    expl: "Milletvekili seçim kanununa göre bir il en çok 3 seçim çevresine bölünür. Çıkaracağı milletvekili sayısı 18'e kadar olan iller 1 seçim çevresi sayılır. Çıkaracağı milletvekili sayısı 19'dan 35'e kadar olan iller 2, 36 ve daha fazla olan iller 3 seçim çevresine bölünür.",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: true },
      { text: "4", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "<p>I. Nispi temsil sistemi<br>II. d'Hont usulü<br>III. %7 ülke barajı<br><br><b>Yukarıdakilerden hangileri ülkemizdeki milletvekili genel seçim sisteminde benimsenmiş ilkelerdir?</b></p>",
    diff: 1,
    expl: "Türkiye'de yüzde 7 ülke barajlı, nispi temsil sistemine dayanan d'Hont sistemi uygulanmaktadır. Her üç öncül de ülkemizde milletvekili seçimlerinde kullanılan sistemin temel ilkeleridir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, TBMM seçimleriyle ilgili olarak aşağıdaki ifadelerden hangisi yanlıştır?</b></p>",
    diff: 1,
    expl: "Seçimler, Yüksek Seçim Kurulunun genel yönetim ve denetimi altında yapılır. Ancak Anayasa m.67'ye göre, seçimler tek derecelidir, yani halk doğrudan oy kullanır; \"çift dereceli\" (örneğin önce delegeler, sonra temsilciler) bir sistem söz konusu değildir.",
    answers: [
      { text: "Cumhurbaşkanı seçimi ile aynı günde yapılır.", ok: false },
      { text: "Savaş nedeniyle 1 yıl geriye bırakılabilir.", ok: false },
      { text: "Cumhurbaşkanı süre dolmadan erken seçim kararı verebilir.", ok: false },
      { text: "Çift dereceli olarak yapılır.", ok: true },
      { text: "Yargı organlarının genel yönetim ve denetimi altında yapılır.", ok: false }
    ]
  },
  {
    text: "<p>I. Türkiye Büyük Millet Meclisi<br>II. Cumhurbaşkanı<br>III. Yüksek Seçim Kurulu<br><br><b>1982 Anayasası'na göre, yukarıdakilerden hangileri Türkiye Büyük Millet Meclisi seçimlerinin yenilenmesine karar verebilir?</b></p>",
    diff: 1,
    expl: "1982 Anayasası'na göre TBMM seçimlerini yenileme yetkisi yalnızca 'TBMM' ve 'Cumhurbaşkanı'na aittir. Yüksek Seçim Kurulunun seçimleri yenileme yetkisi yoktur, sadece seçimleri yönetir ve denetler.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: true },
      { text: "I ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Yasama yetkisinin genelliği aşağıdakilerden hangisi ile ifade edilir?</b></p>",
    diff: 2,
    expl: "Yasama yetkisinin genelliği, yasama organının kanunla düzenleme yapabileceği alanların konu itibarıyla sınırlandırılmamış olması ve yasama organının bir konuyu dilediği ölçüde, en ince ayrıntılarına kadar düzenleyebilmesi (yürütme organına takdir yetkisi bırakmayacak şekilde) anlamına gelmektedir.",
    answers: [
      { text: "Yasama organının her zaman kanun yapabilme yetkisine sahip olması", ok: false },
      { text: "Yasama organının, yasa yapma yetkisini doğrudan Anayasa'dan alması", ok: false },
      { text: "Yasama yetkisinin TBMM'ye ait olduğu ve devredilemeyeceği", ok: false },
      { text: "Yasama organının, hiçbir makamın veya işlemin onayı olmadan doğrudan kanun yapma yetkisine sahip olması", ok: false },
      { text: "Yasama organının, herhangi bir konuyu, kanunla ayrıntılarına kadar düzenleyebilme yetkisine sahip olması", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Türkiye Büyük Millet Meclisi seçimleri hangi gerekçeyle ve bir seferde en fazla ne kadar süreyle geriye bırakılabilir?</b></p>",
    diff: 1,
    expl: "Savaş sebebiyle yeni seçimlerin yapılmasına imkân görülmezse, Türkiye Büyük Millet Meclisi, seçimlerin 1 yıl geriye bırakılmasına karar verebilir. Geri bırakma sebebi ortadan kalkmamışsa, erteleme kararındaki usule göre bu işlem tekrarlanabilir.",
    answers: [
      { text: "Olağanüstü hâl - 1 yıl", ok: false },
      { text: "Sıkıyönetim - 1 yıl", ok: false },
      { text: "Savaş - 1 yıl", ok: true },
      { text: "Ayaklanma - 2 yıl", ok: false },
      { text: "Doğal afet - 2 yıl", ok: false }
    ]
  },
  {
    text: "<p>Türkiye Büyük Millet Meclisi 240 milletvekili ile toplantıyı açmıştır.<br><br><b>1982 Anayasası'na göre, Türkiye Büyük Millet Meclisi seçimlerinin yenilenmesi için gereken karar yeter sayısı aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Türkiye Büyük Millet Meclisi, üye tam sayısının beşte üç çoğunluğu (360) ile seçimlerin yenilenmesine karar verebilir. Bu kararın alınabilmesi için toplantıda bulunanların değil, üye tam sayısının beşte üçü gerekir.",
    answers: [
      { text: "110 milletvekili", ok: false },
      { text: "201 milletvekili", ok: false },
      { text: "301 milletvekili", ok: false },
      { text: "360 milletvekili", ok: true },
      { text: "400 milletvekili", ok: false }
    ]
  },
  {
    text: "<p>İzmir milletvekili A'nın vefatı ve Batman milletvekili B'nin milletvekilliğinin düşürülmesi üzerine bu iki seçim çevresinde boşalan milletvekillikleri için seçim karar alınır.<br><br><b>Buna göre Türkiye Büyük Millet Meclisi üyeliklerinde boşalma olması durumunda yapılan seçime ne ad verilir?</b></p>",
    diff: 1,
    expl: "Türkiye Büyük Millet Meclisi üyeliklerinde boşalma olması hâlinde gidilen seçime ARA SEÇİM adı verilir. Ara seçim, her seçim döneminde 1 defa yapılır ve genel seçimden 30 ay geçmedikçe ara seçime gidilemez.",
    answers: [
      { text: "Ara seçim", ok: true },
      { text: "Seçimin geriye bırakılması", ok: false },
      { text: "Erken seçim", ok: false },
      { text: "Halk vetosu", ok: false },
      { text: "Baskın seçim", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, TBMM'de boşalan üyeliklerin sayısı üye tam sayısının ne kadarını bulduğunda üç ay içinde ara seçimlere gidilmesi zorunludur?</b></p>",
    diff: 2,
    expl: "Boşalan üyeliklerin sayısı, üye tam sayısının yüzde 5'ini (30 milletvekili) bulduğu hâllerde, ara seçimlerin 3 ay içinde yapılmasına karar verilir. Ancak genel seçimlere 1 yıl kala, ara seçim yapılamaz.",
    answers: [
      { text: "%3", ok: false },
      { text: "%5", ok: true },
      { text: "%7", ok: false },
      { text: "%10", ok: false },
      { text: "%30", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Cumhurbaşkanı hangi durumda Türkiye Büyük Millet Meclisi seçimlerinin yenilenmesine karar veremez?</b></p>",
    diff: 3,
    expl: "1982 Anayasası'na göre, Cumhurbaşkanı seçimlerinin yenilenmesine karar verebilir. Bu durumun tek istisnası Cumhurbaşkanı hakkında Türkiye Büyük Millet Meclisi tarafından soruşturma açılmasına karar verilmesidir. Anayasaya göre, böyle bir durumda Cumhurbaşkanı seçimleri yenileme kararı veremez.",
    answers: [
      { text: "TBMM'nin savaş ilan etmesi durumunda", ok: false },
      { text: "Cumhurbaşkanı'nın Bütçe Kanunu teklifinin Meclis tarafından reddedilmesi durumunda", ok: false },
      { text: "Türkiye Büyük Millet Meclisi genel seçimlerine son bir yıl kalması durumunda", ok: false },
      { text: "Cumhurbaşkanı hakkında Meclis tarafından soruşturma açılmasına karar verilmesi durumunda", ok: true },
      { text: "Türkiye Büyük Millet Meclisinin tatil ve ara verme durumlarında", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Türkiye Büyük Millet Meclisi seçimlerinin geriye bırakılması ile ilgili;</b><br><br>I. Seçimler 1 yıl süreyle geriye bırakılabilir.<br>II. Yalnızca savaş sebebiyle seçimler geriye bırakılabilir.<br>III. Geriye bırakılma kararını Türkiye Büyük Millet Meclisi verebilir.<br><br><b>ifadelerinden hangileri doğrudur?</b></p>",
    diff: 2,
    expl: "Anayasa'ya göre, sadece SAVAŞ SEBEBİYLE yeni seçimlerin yapılmasına imkân görülmezse, Türkiye Büyük Millet Meclisi, seçimlerin 1 YIL GERİYE BIRAKILMASINA karar verebilir. Dolayısıyla verilen ifadelerin üçü de doğrudur.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p>Nüfusu azalan Yozgat ilinin çıkaracağı milletvekili sayısı azaltılırken, Antalya ilinin çıkaracağı milletvekili sayısı artırılır.<br><br><b>Buna göre seçim çevreleri ve her seçim çevresinin çıkaracağı milletvekili sayısını belirleme yetkisi aşağıdakilerden hangisine aittir?</b></p>",
    diff: 1,
    expl: "Seçim çevrelerini ve seçim çevrelerinin çıkaracağı milletvekili sayısını belirleme yetkisi Yüksek Seçim Kurulunun görevidir. Yüksek Seçim Kurulu bu durumu o ilin nüfusuna göre belirler.",
    answers: [
      { text: "Danıştay", ok: false },
      { text: "Yüksek Seçim Kurulu", ok: true },
      { text: "Yargıtay", ok: false },
      { text: "TBMM Başkanı", ok: false },
      { text: "Türkiye Büyük Millet Meclisi", ok: false }
    ]
  },
  {
    text: "<p>Genel seçimlere 9 ay kala A ilinin Türkiye Büyük Millet Meclisindeki son üyesi istifa ediyor ve istifası Meclis tarafından kabul ediliyor.<br><br><b>1982 Anayasası'na göre, milletvekilinin istifa etmesi üzerine kural olarak üyelikten boşalmayı takip eden kaç gün sonraki ilk pazar günü ara seçim yapılmalıdır?</b></p>",
    diff: 2,
    expl: "Bir ilin veya seçim çevresinin, Türkiye Büyük Millet Meclisinde üyesinin kalmaması hâlinde, boşalmayı takip eden 90 günden sonraki ilk pazar günü ara seçim yapılır. Bu durumda genel seçime 1 yıl kala ara seçim yapılamaz kuralı uygulanmaz, her şekilde ara seçim yapılması zorunludur.",
    answers: [
      { text: "25", ok: false },
      { text: "30", ok: false },
      { text: "45", ok: false },
      { text: "60", ok: false },
      { text: "90", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, seçimler ve halk oylamaları aşağıdakilerden hangisinin yönetim ve denetiminde yapılır?</b></p>",
    diff: 1,
    expl: "Seçimler, yargı organlarının genel yönetim ve denetimi altında yapılır. Seçimlerin başlamasından bitimine kadar yönetimi, Yargı organı statüsünde olan Yüksek Seçim Kurulu ve İl Seçim Kurullarınca sağlanır.",
    answers: [
      { text: "TBMM", ok: false },
      { text: "Millî Güvenlik Kurulu", ok: false },
      { text: "Yargı organları", ok: true },
      { text: "İçişleri Bakanlığı", ok: false },
      { text: "Adalet Bakanlığı", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Yüksek Seçim Kurulu üyeleri;</b><br><br>I. Danıştay,<br>II. Hâkimler ve Savcılar Kurulu,<br>III. Yargıtay<br><br><b>verilenlerden hangileri tarafından seçilir?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'na göre, Yüksek Seçim Kurulu 7 asıl 4 yedek üyeden oluşur. Üyelerinin 6'sını Yargıtay, 5'ini Danıştay seçer. Hâkimler ve Savcılar Kurulu üye seçmez. YSK Başkanı'nı ise üyeler kendi içlerinden gizli oyla seçerler.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve III", ok: true },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  }
];

// ============================================================================
// YASAMA - TEST 2
// ============================================================================
export const VAT_YASAMA_TEST_2: McQ[] = [
  {
    text: "<p><b>1982 Anayasası'na göre, Yüksek Seçim Kurulu ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?</b></p>",
    diff: 1,
    expl: "Yüksek Seçim Kurulu bir yargı organı olmasına rağmen Anayasa'da yasama bölümünde düzenlenmiştir. Anayasa'da yüksek mahkemeler arasında sayılmamıştır. 7 asıl 4 yedek üyesi vardır. Üyeleri Yargıtay (6 üye) ve Danıştay (5 üye) Genel Kurulları tarafından seçilir. Başkanı Cumhurbaşkanı tarafından seçilmez, Yüksek Seçim Kurulu üyeleri kendi üyeleri içerisinden gizli oyla seçer.",
    answers: [
      { text: "Anayasa'da yasama bölümünde düzenlenmiştir.", ok: false },
      { text: "7 asıl ve 4 yedek üyeden oluşur.", ok: false },
      { text: "Anayasa'da yüksek mahkemeler arasında sayılmamıştır.", ok: false },
      { text: "Başkanı, Cumhurbaşkanı tarafından seçilir.", ok: true },
      { text: "Üyeleri Yargıtay ve Danıştay Genel Kurulları tarafından seçilir.", ok: false }
    ]
  },
  {
    text: "<p>Milletvekili adayı Murat, okuma-yazma bilmeyen seçmenlere yakınları tarafından yardım edilmesi nedeniyle seçimin iptali için ilçe seçim kuruluna başvurmuş ancak başvurusu reddedilmiştir. Daha sonra bu karara karşı il seçim kuruluna başvurmuş aynı şekilde ret cevabı almıştır. Son olarak Yüksek Seçim Kuruluna başvurmuş ve Yüksek Seçim Kurulu da Murat'ın yaptığı iptal başvurusunu reddetmiştir.<br><br><b>1982 Anayasası'na göre, Murat'ın bu aşamada Yüksek Seçim Kurulu kararlarına karşı başvurabileceği hukuki yola ilişkin aşağıdaki ifadelerden hangisi doğrudur?</b></p>",
    diff: 2,
    expl: "Seçimler, yargı organlarının genel yönetim ve denetimi altında yapılır. Seçim tutanaklarını kabul etme görevi Yüksek Seçim Kurulunundur. Yüksek Seçim Kurulunun kararları aleyhine başka bir mercie başvurulamaz, yani yargı yolu kapalıdır.",
    answers: [
      { text: "Kararları kesin olduğundan bu karar aleyhine hiçbir mercie başvurulamaz.", ok: true },
      { text: "Kararları idari işlem niteliğinde olduğundan Danıştaya iptal davası açılabilir.", ok: false },
      { text: "Kararlar aleyhine Avrupa İnsan Hakları Mahkemesine başvurulur.", ok: false },
      { text: "Kararlar aleyhine Uyuşmazlık Mahkemesini başvurulur.", ok: false },
      { text: "Kararlar aleyhine Anayasa Mahkemesine başvurulur.", ok: false }
    ]
  },
  {
    text: "<p>Defne, hukuk fakültesi öğrencisi olan arkadaşı Ali'ye milletvekili seçilebilme şartlarını soruyor.<br><br><b>Ali arkadaşı Defne'ye 1982 Anayasası'nda yer alan milletvekili seçilme şartlarından hangisini söylerse yanlış bir bilgi vermiş olur?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'na göre milletvekili seçilebilmek için taksirli suçlar hariç toplam bir yıl veya daha fazla hapis ile ağır hapis cezasına hüküm giymemiş olmak gerekir. Ancak herhangi bir suçtan bir yıl ve üzeri hüküm giymemiş olmak ifadesi yanlıştır, çünkü taksirli suçlardan hüküm giymek milletvekili seçilmeye engel değildir.",
    answers: [
      { text: "Milletvekili seçilebilmek en az on sekiz yaşı doldurmuş olmak gerekir.", ok: false },
      { text: "Milletvekili seçilebilmek için kamu hizmetlerinden yasaklı olmamak gerekir.", ok: false },
      { text: "Milletvekili seçilmek için herhangi bir suçtan bir yıl ve üzeri hüküm giymemiş olmak gerekir.", ok: true },
      { text: "Milletvekili seçilmek için en az ilkokul mezunu olmak gerekir.", ok: false },
      { text: "Milletvekili seçilebilecek kişinin askerlikle ilişiğinin olmaması gerekir.", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, milletvekili seçilme şartları ile ilgili aşağıdaki ifadelerden hangisi doğrudur?</b></p>",
    diff: 1,
    expl: "Milletvekili seçilebilmek için Türk vatandaşı olmak şarttır. Türk vatandaşı olmayanlar milletvekili seçilemez. Yaş sınırı 18'dir (25 değil). En az ilkokul mezunu olmak gerekir (ortaokul değil). Askerlikle ilişiği olmamak yeterlidir (askerliğini yapmış olmak şart değildir). Taksirli suçlardan hüküm giymek milletvekili seçilmeye engel değildir.",
    answers: [
      { text: "25 yaşını doldurmayanlar milletvekili seçilemez.", ok: false },
      { text: "En az ortaokul mezunu olmayanlar milletvekili seçilemez.", ok: false },
      { text: "Askerliğini yapmamış olanlar milletvekili seçilemez.", ok: false },
      { text: "Taksirli suçlardan hüküm giyenler milletvekili seçilemez.", ok: false },
      { text: "Türk vatandaşı olmayanlar milletvekili seçilemez.", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, milletvekili adaylığı için aşağıdakilerden hangisinin belirtilen görevinden çekilmesi gerekmez?</b></p>",
    diff: 3,
    expl: "Hâkimler ve savcılar, yüksek yargı organları mensupları, yükseköğretim kurumlarındaki öğretim elemanları, Yükseköğretim Kurulu üyeleri, kamu kurum ve kuruluşlarının memur statüsündeki görevlileri ile yaptıkları hizmet bakımından işçi niteliği taşımayan diğer kamu görevlileri ve Silahlı Kuvvetler mensupları görevlerinden çekilmedikçe aday olamazlar. Ancak Kars Belediyesinde İŞÇİ STATÜSÜNDE görev yapan Mehtap'ın çekilmesi gerekmez.",
    answers: [
      { text: "Kars Belediyesinde işçi statüsünde görev yapan Mehtap", ok: true },
      { text: "Türk Dil Kurumunda memur olarak görev yapan Görkem", ok: false },
      { text: "Millî Eğitim Bakanlığında sözleşmeli personel olarak görev yapan fen bilgisi öğretmeni Büşra", ok: false },
      { text: "Gazi Üniversitesinde Doçent olarak görev yapan Mehmet", ok: false },
      { text: "Samsun İdare Mahkemesi Hâkimi olan Erdem", ok: false }
    ]
  },
  {
    text: "<p><b>2839 sayılı Milletvekili Seçim Kanunu'na göre, aşağıdakilerden hangisi bir milletvekili genel seçiminde tanımlanan bir seçim çevresini ifade eder?</b></p>",
    diff: 1,
    expl: "Milletvekili Seçim Kanunu'na göre yapılan tespit sonunda, çıkaracağı milletvekili sayısı 18'e kadar olan İLLER bir seçim çevresi sayılır. Seçim çevreleri il bazında belirlenir (Yalova ili gibi). Belediye, mahalle veya coğrafi bölgeler seçim çevresi değildir.",
    answers: [
      { text: "Pazarcık Belediyesi", ok: false },
      { text: "Mutlu Mahallesi", ok: false },
      { text: "Yalova ili", ok: true },
      { text: "Güneydoğu Anadolu Bölgesi", ok: false },
      { text: "Türkiye", ok: false }
    ]
  },
  {
    text: "<p>I. Yargıtay üyesi A<br>II. Marmara Üniversitesi'nde profesör olarak görev yapan B<br>III. Isparta İl Emniyet Müdürlüğünde görevli başkomiser C<br>IV. Ordu Cumhuriyet savcısı D<br>V. Kara Kuvvetleri Komutanlığında astsubay olan E<br><br><b>Yukarıdakilerden hangileri milletvekili seçilemediklerinde görevine geri dönemeyenler arasında yer almaz?</b></p>",
    diff: 3,
    expl: "Seçimlerin Temel Hükümleri ve Seçmen Kütükleri Hakkında Kanun'a göre; \"Yüksek mahkeme üyeleri, hâkimler, savcılar ve bu meslekten sayılanlar ile Subay ve Astsubaylar hariç olmak üzere; milletvekili ve mahalli idareler genel ve ara seçimlerinde aday ve aday adayı olan Devlet memurları seçimi kaybetmeleri hâlinde eski görevlerine dönebilirler.\" Bu kurala göre Profesör (II) ve Başkomiser (III) görevine dönebilir.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: true },
      { text: "III ve IV", ok: false },
      { text: "IV ve V", ok: false },
      { text: "II, III ve V", ok: false }
    ]
  },
  {
    text: "<p><b>2839 sayılı Milletvekili Seçim Kanunu'na göre, milletvekili seçilenlere, seçildiklerine dair tutanak aşağıdakilerden hangisi tarafından derhâl verilir?</b></p>",
    diff: 2,
    expl: "Milletvekilliği sıfatı, İl Seçim Kurulu tarafından, milletvekili seçildiğine dair tutanağın düzenlendiği an kazanılır. Seçilenlere tutanak İl Seçim Kurulu tarafından verilir.",
    answers: [
      { text: "Yüksek Seçim Kurulu", ok: false },
      { text: "İldeki en kıdemli hâkim", ok: false },
      { text: "İl Seçim Kurulu", ok: true },
      { text: "Türkiye Büyük Millet Meclisi", ok: false },
      { text: "İl Asliye Hukuk Mahkemesi", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, milletvekilliği statüsünü kazananların milletvekili yetkilerini kullanabilmeleri için aşağıdakilerden hangisini yapması zorunludur?</b></p>",
    diff: 1,
    expl: "Milletvekilliği statüsünü kazananların milletvekili yetkilerini kullanabilmeleri için Mecliste Anayasa'nın 81. maddesine göre ant içmeleri gerekir. Ant içmeyen milletvekili göreve başlayamaz.",
    answers: [
      { text: "TBMM toplantılarına katılmak", ok: false },
      { text: "Anayasa'nın 81. maddesine göre ant içmek", ok: true },
      { text: "Meclis komisyonlarına üye olarak seçilmek", ok: false },
      { text: "Bir siyasi parti grubuna üye olmak", ok: false },
      { text: "Yasama sorumsuzluğuna sahip olmak", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi göreve başlarken Türkiye Büyük Millet Meclisi önünde ant içecekler arasında yer almaz?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'na göre, Milletvekilliği statüsünü kazananlar, Kamu Başdenetçisi, Cumhurbaşkanı, Cumhurbaşkanı yardımcıları ve Bakanlar göreve başlarken Mecliste yemin eder. Ancak TBMM genel sekreteri göreve başlarken Mecliste yemin etmez.",
    answers: [
      { text: "Cumhurbaşkanı", ok: false },
      { text: "Kamu Başdenetçisi", ok: false },
      { text: "Cumhurbaşkanı yardımcısı", ok: false },
      { text: "TBMM genel sekreteri", ok: true },
      { text: "Bakan", ok: false }
    ]
  },
  {
    text: "<p><b>Yasama yetkisinin asliliği aşağıdakilerden hangisi ile ifade edilir?</b></p>",
    diff: 3,
    expl: "Yasama yetkisinin asliliği, yasama organının bir konuya ilişkin doğrudan doğruya, araya başka bir işlem girmesine gerek duymaksızın kanun çıkarabilmesi anlamına gelmektedir. Yasama organı, araya bir işlem veya organ girmeksizin yasa yapma yetkisini doğrudan Anayasa'dan alır.",
    answers: [
      { text: "Yasama yetkisinin TBMM'ye ait olduğu ve devredilemeyeceği", ok: false },
      { text: "Yasama organının dilediği her zaman kanun yapabilme yetkisine sahip olması", ok: false },
      { text: "Yasama organının, Anayasa'da belirtilmeyen bir konuyu düzenleme yetkisinin olmaması", ok: false },
      { text: "Yasama organının, herhangi bir konuyu, kanunla ayrıntılarına kadar düzenleyebilme yetkisine sahip olması", ok: false },
      { text: "Yasama organının, araya bir işlem veya organ girmeksizin yasa yapma yetkisini doğrudan Anayasa'dan alması", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, milletvekillerinin seçildikleri bölgeyi veya kendilerini seçenleri temsil ile sınırlandırılmaması aşağıdakilerden hangisinin bir gereğidir?</b></p>",
    diff: 1,
    expl: "Türkiye Büyük Millet Meclisi üyeleri, seçildikleri bölgeyi veya kendilerini seçenleri değil, bütün milleti temsil ederler. Bu ilke 'Milletin Temsili' (milletvekillerinin tüm Türk milletini temsil etmeleri) ilkesinin bir gereğidir.",
    answers: [
      { text: "Milletvekillerinin yasama dokunulmazlığına sahip olması", ok: false },
      { text: "Milletvekillerinin temsilde adalet ilkesine göre seçilmeleri", ok: false },
      { text: "Milletvekillerinin tüm Türk milletini temsil etmeleri", ok: true },
      { text: "Milletvekillerinin yasama sorumsuzluğuna sahip olmaları", ok: false },
      { text: "Milletvekillerinin genel oyla seçilmeleri", ok: false }
    ]
  },
  {
    text: "<p><b>Türkiye Büyük Millet Meclisi üyelerinin, Meclis çalışmalarındaki oy ve sözlerinden, Mecliste ileri sürdükleri düşüncelerden, o oturumdaki Başkanlık Divanının teklifi üzerine Meclisçe başka bir karar alınmadıkça bunları Meclis dışında tekrarlamak ve açığa vurmaktan sorumlu tutulamaması aşağıdakilerden hangisiyle ifade edilir?</b></p>",
    diff: 1,
    expl: "Türkiye Büyük Millet Meclisi üyelerinin, Meclis çalışmalarındaki oy ve sözlerinden, Mecliste ileri sürdükleri düşüncelerden sorumlu tutulamaması 'Yasama Sorumsuzluğu' olarak ifade edilir. Bu muafiyetin diğer adı kürsü dokunulmazlığıdır ve yasama sorumsuzluğu süreklidir.",
    answers: [
      { text: "Milletin temsili", ok: false },
      { text: "Yasama sorumsuzluğu", ok: true },
      { text: "Milletvekilliğinin düşmesi", ok: false },
      { text: "Yasama dokunulmazlığı", ok: false },
      { text: "Milletvekilliği ile bağdaşmayan işler", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, yasama dokunulmazlığı milletvekilini aşağıdakilerden hangisine karşı korumaz?</b></p>",
    diff: 2,
    expl: "Seçimden önce veya sonra bir suç işlediği ileri sürülen bir milletvekili, Meclisin kararı olmadıkça tutulamaz, sorguya çekilemez, tutuklanamaz ve yargılanamaz. Ancak yasama dokunulmazlığı 'delil toplama' işlemlerine karşı koruma sağlamaz; milletvekili aleyhine delil toplanabilir.",
    answers: [
      { text: "Tutulma", ok: false },
      { text: "Delil toplama", ok: true },
      { text: "Tutuklanma", ok: false },
      { text: "Yargılanma", ok: false },
      { text: "Sorguya çekilme", ok: false }
    ]
  },
  {
    text: "<p><b>Seçimden önce veya sonra bir suç işlediği ileri sürülen bir milletvekilinin, Meclisin kararı olmadıkça tutulamaması, sorguya çekilememesi, tutuklanamaması ve yargılanamaması aşağıdakilerden hangisiyle ifade edilir?</b></p>",
    diff: 1,
    expl: "Seçimden önce veya sonra bir suç işlediği ileri sürülen bir milletvekilinin, Meclisin kararı olmadıkça tutulamaması, sorguya çekilememesi, tutuklanamaması ve yargılanamaması 'Yasama Dokunulmazlığı' (nispi dokunulmazlık) ile ifade edilir.",
    answers: [
      { text: "Yasamanın genelliği", ok: false },
      { text: "Milletvekilliğinin düşmesi", ok: false },
      { text: "Yasama dokunulmazlığı", ok: true },
      { text: "Milletin temsili", ok: false },
      { text: "Yasamanın sürekliliği", ok: false }
    ]
  }
];

// ============================================================================
// YASAMA - TEST 3
// ============================================================================
export const VAT_YASAMA_TEST_3: McQ[] = [
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisi görevi ile ilgili olmayan suçlarda yasama dokunulmazlığından yararlanır?</b></p>",
    diff: 2,
    expl: "Cumhurbaşkanı yardımcıları ve bakanlar hakkında görevleriyle ilgili suç işledikleri iddiasıyla soruşturma açılması istenebilir. Ancak görevleriyle ilgili olmayan suçlarda (kişisel suçlarda) Cumhurbaşkanı yardımcıları ve bakanlar da tıpkı milletvekilleri gibi yasama dokunulmazlığı hükümlerinden yararlanır.",
    answers: [
      { text: "Diyanet İşleri Başkanı", ok: false },
      { text: "Yargıtay Cumhuriyet Başsavcısı", ok: false },
      { text: "Ticaret Bakanı", ok: true },
      { text: "Anayasa Mahkemesi Üyesi", ok: false },
      { text: "Merkez Bankası Başkanı", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, yasama dokunulmazlığı ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "Yasama dokunulmazlığı yalnızca TBMM Genel Kurulu tarafından kaldırılabilir. Anayasa Mahkemesinin yasama dokunulmazlığını kaldırma yetkisi yoktur, ancak TBMM'nin kararına karşı yapılan itirazları inceleyip iptal edebilir.",
    answers: [
      { text: "Anayasa Mahkemesi tarafından kaldırılabilir.", ok: true },
      { text: "Ağır cezayı gerektiren suçüstü hâlinde, milletvekilleri yasama dokunulmazlığından faydalanamaz.", ok: false },
      { text: "Cumhurbaşkanı yardımcıları, yasama dokunulmazlığından yararlanır.", ok: false },
      { text: "Meclisteki siyasi parti grupları yasama dokunulmazlığı ile ilgili görüşme yapamaz, karar alamaz.", ok: false },
      { text: "TBMM, milletvekilinin dokunulmazlığını 151 sayının altına düşmemek kaydıyla katılanların salt çoğunluğu ile kaldırabilir.", ok: false }
    ]
  },
  {
    text: "<p>Milletvekili A'nın yasama dokunulmazlığı Türkiye Büyük Millet Meclisinde katılanların salt çoğunluğunun oyu ile kaldırılıyor.<br><br><b>1982 Anayasası'na göre, kararının alındığı tarihten başlayarak kaç gün içerisinde ilgili milletvekili veya bir diğer milletvekili, kararın iptali için Anayasa Mahkemesine başvurabilir?</b></p>",
    diff: 1,
    expl: "Yasama dokunulmazlığının kaldırılmasına veya milletvekilliğinin düşmesine karar verilmesi hâllerinde, Meclis Genel Kurulu kararının alındığı tarihten başlayarak 7 gün içerisinde ilgili milletvekili veya bir diğer milletvekili iptal istemiyle Anayasa Mahkemesine başvurabilir.",
    answers: [
      { text: "5", ok: false },
      { text: "7", ok: true },
      { text: "10", ok: false },
      { text: "15", ok: false },
      { text: "20", ok: false }
    ]
  },
  {
    text: "<p>Dokunulmazlığı kaldırılan milletvekili F, kararın iptali için Anayasa Mahkemesine itiraz ediyor.<br><br><b>1982 Anayasası'na göre, Anayasa Mahkemesi bu iptal istemini en geç ne kadar süre içinde sonuçlandırmalıdır?</b></p>",
    diff: 1,
    expl: "Yasama dokunulmazlığının kaldırılması veya milletvekilliğinin düşmesi kararlarına karşı yapılan iptal başvurularını, Anayasa Mahkemesi 15 gün içerisinde kesin karara bağlar.",
    answers: [
      { text: "5 gün", ok: false },
      { text: "10 gün", ok: false },
      { text: "15 gün", ok: true },
      { text: "1 ay", ok: false },
      { text: "3 ay", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, milletvekilliği aşağıdakilerden hangisinin gerçekleşmesi durumunda sona erer?</b></p>",
    diff: 2,
    expl: "Bakan seçilmek (veya Cumhurbaşkanı yardımcısı seçilmek), milletvekilliği ile bağdaşmayan bir görev olduğu için milletvekilliğini doğrudan sona erdiren sebepler arasındadır. Meclis başkanı seçilmek, partisinden istifa etmek, yasama dokunulmazlığının kaldırılması veya partinin kapatılmasına beyan ve eylemleriyle sebep olmak milletvekilliğini düşürmez.",
    answers: [
      { text: "Bakan seçilmek", ok: true },
      { text: "Beyan ve eylemleri ile partisinin kapatılmasına sebep olmak", ok: false },
      { text: "Partisinden istifa etmek", ok: false },
      { text: "Meclis başkanı seçilmek", ok: false },
      { text: "Dokunulmazlığın kaldırılması", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, milletvekilliğinin sona ermesine ilişkin;</b><br><br>I. devamsızlık,<br>II. mahkeme kararı ile kısıtlanma,<br>III. milletvekilliğinden istifa,<br>IV. Cumhurbaşkanı yardımcısı seçilme<br><br><b>ifadelerinin hangilerinde milletvekilliği Meclis kararına gerek kalmadan sona erer?</b></p>",
    diff: 3,
    expl: "Milletvekilliğinin kesin hüküm giyme veya kısıtlanma hâlinde düşmesi, kesin mahkeme kararının Genel Kurula bildirilmesiyle olur (Meclis kararı gerekmez). Bakan veya Cumhurbaşkanı Yardımcısı seçilme durumunda da milletvekilliği kendiliğinden sona erer. Ancak istifa, devamsızlık ve bağdaşmayan işi sürdürmekte ısrar durumlarında vekilliğin düşmesi için TBMM'nin oylama yapıp karar vermesi (Meclis kararı) gerekir.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "II ve IV", ok: true },
      { text: "I, II ve IV", ok: false }
    ]
  },
  {
    text: "<p>Milletvekili A'nın Türkiye Büyük Millet Meclisi toplantılarına uzun bir süredir izinsiz ve mazeretsiz katılmadığı meclis başkanlık divanınca tespit edilir.<br><br><b>1982 Anayasası'na göre, milletvekilinin TBMM çalışmalarına özürsüz veya izinsiz olarak bir ay içinde toplam kaç birleşim günü katılmaması durumunda devamsızlık nedeniyle vekilliği sonlandırılabilir?</b></p>",
    diff: 1,
    expl: "Meclis çalışmalarına özürsüz veya izinsiz olarak bir ay içerisinde toplam beş (5) birleşim günü katılmayan milletvekilinin milletvekilliğinin düşmesine, Genel Kurulca üye tam sayısının salt çoğunluğunun oyuyla karar verilebilir.",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "5", ok: true },
      { text: "10", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, milletvekillerinin yapamayacakları işler arasında;</b><br><br>I. ticari faaliyetlerde bulunmak,<br>II. kamuya yararlı derneklerde denetçi olmak,<br>III. kamu tüzel kişilerinde görev almak<br><br><b>verilenlerden hangileri yer almaktadır?</b></p>",
    diff: 3,
    expl: "Anayasa TBMM üyelerinin ticari faaliyette bulunmalarını (I. öncül) veya serbest mesleklerini icra etmelerini yasaklamamıştır. Ancak milletvekilleri devlet kurumlarında (kamu tüzel kişilerinde) veya kamuya yararlı derneklerin yönetim/denetim kurullarında görev alamazlar (II ve III yasaktır).",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: true }
    ]
  },
  {
    text: "<p>Meclis, kanun yapma dışında kendi iç işleyişi, yürütme ve yargı ile olan ilişkileri konusunda da kararlar alır.<br><br><b>Türkiye Büyük Millet Meclisinin kanun dışında yaptığı işlemlere ne ad verilir?</b></p>",
    diff: 1,
    expl: "TBMM'nin kanun dışında yaptığı işlemlere, yani Meclisin iç işleyişine, yürütme ve yargı organı ile olan ilişkilerine yönelik kararlara 'Parlamento Kararları' adı verilir. Kural olarak bunlara karşı yargı yolu kapalıdır.",
    answers: [
      { text: "Parlamento tasarısı", ok: false },
      { text: "Parlamento kararı", ok: true },
      { text: "Meclis teklifi", ok: false },
      { text: "Meclis kararnamesi", ok: false },
      { text: "Meclis işleyişi", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Türkiye Büyük Millet Meclisinin görevlerine ilişkin;</b><br><br>I. savaş ilanına karar vermek,<br>II. para basılmasına karar vermek,<br>III. milletlerarası antlaşmaların onaylanmasını uygun bulmak,<br>IV. genel ve özel af ilanına karar vermek<br><br><b>ifadelerinden hangileri doğrudur?</b></p>",
    diff: 1,
    expl: "Savaş ilanı, para basılması, milletlerarası antlaşmaların onaylanmasının uygun bulunması ve genel-özel af ilanına karar vermek TBMM'nin anayasal görev ve yetkileri arasındadır. Tüm ifadeler doğrudur.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I, II ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "II ve IV", ok: false },
      { text: "I, II, III ve IV", ok: true }
    ]
  },
  {
    text: "<p>Hukuk fakültesi öğrencisi Bayram, Türkiye Büyük Millet Meclisinin ve Cumhurbaşkanı'nın görevlerini aşağıdaki gibi not alıyor.<br><br><b>Türkiye Büyük Millet Meclisi</b><br>• Genel ve özel af ilan etmek<br>• Kamu Başdenetçisi'ni seçmek<br>• Savaş ilan etmek<br>• Kalkınma planlarını onaylamak<br><br><b>Cumhurbaşkanı</b><br>• Kanunları yayımlamak<br>• Bütçe kanun teklifi vermek<br>• Olağanüstü hâl ilan kararını onaylamak<br>• Millî güvenlik politikalarını belirlemek<br><br><b>1982 Anayasası'na göre Bayram, yukarıdakilerden hangisini yanlış tarafa yazmıştır?</b></p>",
    diff: 3,
    expl: "Olağanüstü hâl ilan etme yetkisi Cumhurbaşkanına aittir. Ancak Cumhurbaşkanının verdiği bu 'olağanüstü hâl ilan kararını onaylamak', süresini uzatmak veya kaldırmak TBMM'nin görevidir. Bu yüzden 'OHAL ilan kararını onaylamak' Cumhurbaşkanının değil, TBMM'nin yetkileri arasında olmalıydı.",
    answers: [
      { text: "Kalkınma planlarını onaylamak", ok: false },
      { text: "Bütçe Kanun'u teklifi vermek", ok: false },
      { text: "Genel ve özel af ilan etmek", ok: false },
      { text: "Kamu Başdenetçisi'ni seçmek", ok: false },
      { text: "Olağanüstü hâl ilan kararını onaylamak", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Türkiye Büyük Millet Meclisi aşağıdakilerden hangisini parlamento kararı ile gerçekleştirir?</b></p>",
    diff: 2,
    expl: "Meclisin kanun dışında yaptığı işlemlere parlamento kararı denir. Anayasa değişikliği, para basılması, antlaşmaların onaylanmasının uygun bulunması ve af ilanı 'Kanunla' yapılan işlemlerdir. Ancak TBMM İç Tüzüğü'nü yapmak veya değiştirmek bir parlamento kararıdır (ve yargısal denetime tabi istisnai parlamento kararlarından biridir).",
    answers: [
      { text: "Anayasayı değiştirmek", ok: false },
      { text: "Genel ve özel af ilan etmek", ok: false },
      { text: "TBMM İç Tüzüğü'nü yapmak veya değiştirmek", ok: true },
      { text: "Para basılmasına karar vermek", ok: false },
      { text: "Milletlerarası antlaşmaların onaylanmasını uygun bulmak", ok: false }
    ]
  },
  {
    text: "<p>I. Seçimlerin yenilenmesi kararı<br>II. Savaş ilan etme<br>III. İç tüzük değişiklikleri<br>IV. Milletvekilliğinin düşürülmesi<br>V. Milletvekili dokunulmazlığının kaldırılması<br><br><b>Yukarıda verilen parlamento kararlarının hangilerinin iptali için Anayasa Mahkemesine dava açılabilir?</b></p>",
    diff: 3,
    expl: "Kural olarak parlamento kararları anayasal denetime tabi değildir, yargı yolu kapalıdır. Bunun yalnızca 3 istisnası vardır: TBMM İç Tüzüğü değişiklikleri (III), Milletvekilliği dokunulmazlığının kaldırılması (V) ve Milletvekilliği sıfatının düşürülmesi kararı (IV).",
    answers: [
      { text: "I ve II", ok: false },
      { text: "Yalnız V", ok: false },
      { text: "II, III ve IV", ok: false },
      { text: "III, IV ve V", ok: true },
      { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p>Türkiye Büyük Millet Meclisi Başkanlığına \"Özel Tüketim Vergisi Kanununda Değişiklik Yapılması Hakkında\" kanun teklifi veriliyor.<br><br><b>1982 Anayasası'na göre bu kanun teklifini;</b><br><br>I. Hazine ve Maliye Bakanı A,<br>II. Cumhurbaşkanı B,<br>III. İzmir Milletvekili C,<br>IV. Cumhurbaşkanı yardımcısı D<br><br><b>verilenlerden hangileri yapmış olabilir?</b></p>",
    diff: 2,
    expl: "1982 Anayasası m. 88'e göre (bütçe kanunu hariç) kanun teklif etmeye yalnızca milletvekilleri yetkilidir. Cumhurbaşkanı, yardımcıları veya bakanların (örneğin vergi kanunu) teklif etme yetkisi yoktur. Bu yüzden teklifi sadece İzmir Milletvekili C (III) vermiş olabilir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız III", ok: true },
      { text: "I ve II", ok: false },
      { text: "II ve IV", ok: false },
      { text: "I, III ve IV", ok: false }
    ]
  },
  {
    text: "<p>Milletvekili A, Türkiye Büyük Millet Meclisi Başkanlığına kanun teklifi yapıyor.<br><br><b>1982 Anayasası'na göre, Milletvekili A,</b><br><br>I. Bütçe Kanunu,<br>II. Türk Ceza Kanunu,<br>III. Kesin Hesap Kanunu,<br>IV. Genel ve Özel Af Kanunu<br><br><b>verilenlerden hangileri için kanun teklifi veremez?</b></p>",
    diff: 3,
    expl: "1982 Anayasası'na göre genel olarak kanun teklif etmeye milletvekilleri yetkilidir. Ancak 'Bütçe Kanunu' (I) ve 'Kesin Hesap Kanunu' (III) teklifleri istisnai olarak milletvekilleri tarafından değil, doğrudan Cumhurbaşkanı tarafından Meclise sunulur.",
    answers: [
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve IV", ok: false },
      { text: "I ve III", ok: true },
      { text: "II ve IV", ok: false }
    ]
  }
];

// ============================================================================
// YASAMA - TEST 4
// ============================================================================
export const VAT_YASAMA_TEST_4: McQ[] = [
  {
    text: "<p>Cumhurbaşkanı, yayımlanmasını kısmen veya tamamen uygun bulmadığı kanunları, bir daha görüşülmek üzere, bu hususta gösterdiği gerekçe ile birlikte aynı süre içinde, Türkiye Büyük Millet Meclisine geri gönderir.<br><br><b>1982 Anayasası'na göre,</b><br><br>I. Genel ve Özel Af Kanunu,<br>II. Bütçe Kanunu,<br>III. Seçim Kanunu,<br>IV. Anayasa değişikliğine ilişkin kanunlar<br><br><b>hangileri bu hükme tabi değildir?</b></p>",
    diff: 1,
    expl: "Cumhurbaşkanı yayımlanmasını uygun bulmadığı kanunları tekrar görüşülmek üzere Meclis'e geri gönderebilir (Veto hakkı). Ancak 'Bütçe Kanunları' bu hükme tabi değildir. Cumhurbaşkanı Bütçe Kanunu'nu tekrar görüşülmek üzere TBMM'ye geri gönderemez.",
    answers: [
      { text: "Yalnız II", ok: true },
      { text: "Yalnız IV", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve IV", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Türkiye Büyük Millet Meclisi tarafından reddedilmiş olan kanun tekliflerinin, aynı yasama dönemi içinde yeniden verilebilmesi için ret tarihinden itibaren ne kadar bir sürenin geçmiş olması gerekir?</b></p>",
    diff: 1,
    expl: "Türkiye Büyük Millet Meclisi tarafından reddedilmiş olan kanun teklifleri, ret tarihinden itibaren 1 tam yıl geçmedikçe Türkiye Büyük Millet Meclisinin aynı yasama dönemi içinde yeniden verilemez.",
    answers: [
      { text: "1 ay", ok: false },
      { text: "3 ay", ok: false },
      { text: "6 ay", ok: false },
      { text: "1 yıl", ok: true },
      { text: "5 yıl", ok: false }
    ]
  },
  {
    text: "<p><b>Bir yasama dönemi içinde verilen bir kanunun ya da bir önerinin yine o yasama dönemi içinde yasalaşamaması durumunda o kanun teklifinin artık görüşülme olanağının kalmamasına ne ad verilir?</b></p>",
    diff: 2,
    expl: "Türkiye Büyük Millet Meclisinin kabul ettiği kanun tekliflerinin bir yasama dönemi boyunca sonuçlandırılamamasına kadük olmak yani hükümsüz olma denir.",
    answers: [
      { text: "Kadük olma", ok: true },
      { text: "Mülga olma", ok: false },
      { text: "Butlan olma", ok: false },
      { text: "Askıda kalma", ok: false },
      { text: "İvedi olma", ok: false }
    ]
  },
  {
    text: "<p>TBMM tarafından kabul edilen bir kanun, Cumhurbaşkanı tarafından bir kez daha görüşülmek üzere Meclise geri gönderilmiştir.<br><br><b>1982 Anayasası'na göre, Türkiye Büyük Millet Meclisinin bu kanunu hangi çoğunlukla aynen kabul ederse bu kanunun Cumhurbaşkanı tarafından yayımlanması zorunludur?</b></p>",
    diff: 3,
    expl: "Türkiye Büyük Millet Meclisi, geri gönderilen kanunu üye tam sayısının salt çoğunluğuyla (en az 301 milletvekili) aynen kabul ederse, kanun Cumhurbaşkanı tarafından yayımlanır; Meclis, geri gönderilen kanunda yeni bir değişiklik yaparsa, Cumhurbaşkanı değiştirilen kanunu tekrar Meclise geri gönderebilir.",
    answers: [
      { text: "151", ok: false },
      { text: "200", ok: false },
      { text: "301", ok: true },
      { text: "360", ok: false },
      { text: "400", ok: false }
    ]
  },
  {
    text: "<p><b>Türkiye Büyük Millet Meclisi tarafından kabul edilen Gelir Vergisi Kanunu'nu yayımlama görevi aşağıdakilerden hangisine aittir?</b></p>",
    diff: 1,
    expl: "Cumhurbaşkanı, Türkiye Büyük Millet Meclisince kabul edilen kanunları 15 gün içinde yayımlar. Kanunların yayımlanması görevi Anayasa'ya göre doğrudan Cumhurbaşkanına aittir.",
    answers: [
      { text: "Cumhurbaşkanı", ok: true },
      { text: "İletişim Başkanı", ok: false },
      { text: "Kanunla ilgili bakan", ok: false },
      { text: "Meclis Başkanı", ok: false },
      { text: "İçişleri Bakanı", ok: false }
    ]
  },
  {
    text: "<p>Türkiye Büyük Millet Meclisi tarafından Siber Güvenlik Kanunu kabul edilmiştir.<br><br><b>1982 Anayasası'na göre, meclis tarafından kabul edilen kanunları Cumhurbaşkanı kaç gün içinde yayımlamak veya Türkiye Büyük Millet Meclisine geri göndermek zorundadır?</b></p>",
    diff: 1,
    expl: "Kanunların Cumhurbaşkanı'na Gönderilmesi ve Yayımlanması: Cumhurbaşkanı, Türkiye Büyük Millet Meclisince kabul edilen kanunları 15 gün içinde yayımlar veya aynı süre içinde bir daha görüşülmek üzere TBMM'ye geri gönderir.",
    answers: [
      { text: "5", ok: false },
      { text: "10", ok: false },
      { text: "15", ok: true },
      { text: "30", ok: false },
      { text: "60", ok: false }
    ]
  },
  {
    text: "<p><b>Türkiye Büyük Millet Meclisince kabul edilen ve ayrıca bir yürürlük tarihi belirtilmeyen Basın Kanunu ne zaman yürürlüğe girecektir?</b></p>",
    diff: 2,
    expl: "10 sayılı Cumhurbaşkanı Kararnamesi madde 7'ye göre, kanunlar, Cumhurbaşkanlığı kararnameleri ve yönetmelikler ile diğer düzenlemeler, ayrıca bir yürürlük tarihi belirtilmemiş ise Resmî Gazete'de yayımlandığı gün yürürlüğe girer.",
    answers: [
      { text: "Resmî Gazete'de yayımlandığı gün", ok: true },
      { text: "Resmî Gazete'de yayımlandığı günü izleyen 15 gün sonra", ok: false },
      { text: "Resmî Gazete'de yayımlandığı günü izleyen 20 gün sonra", ok: false },
      { text: "Resmî Gazete'de yayımlandığı günü izleyen 45 gün sonra", ok: false },
      { text: "Resmî Gazete'de yayımlandığı günü izleyen 60 gün sonra", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Cumhurbaşkanı Bütçe Kanun teklifini, mali yılbaşından en az kaç gün önce, Türkiye Büyük Millet Meclisine sunar?</b></p>",
    diff: 1,
    expl: "Cumhurbaşkanı Bütçe Kanun teklifini, malî yılbaşından en az 75 gün önce, Türkiye Büyük Millet Meclisine sunar. Bütçe teklifi Bütçe Komisyonunda görüşülür.",
    answers: [
      { text: "15", ok: false },
      { text: "30", ok: false },
      { text: "55", ok: false },
      { text: "60", ok: false },
      { text: "75", ok: true }
    ]
  },
  {
    text: "<p><b>Cumhurbaşkanınca sunulan bütçe kanun teklifi, TBMM Plan ve Bütçe Komisyonu tarafından en geç kaç gün içinde karara bağlanmalıdır?</b></p>",
    diff: 2,
    expl: "Cumhurbaşkanı tarafından sunulan bütçe teklifi, Bütçe Komisyonunda görüşülür. Komisyonun 55 gün içinde kabul edeceği metin Genel Kurulda görüşülür ve malî yılbaşına kadar karara bağlanır.",
    answers: [
      { text: "30", ok: false },
      { text: "45", ok: false },
      { text: "55", ok: true },
      { text: "60", ok: false },
      { text: "75", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Bütçe Kanunu'nun süresinde yürürlüğe konulamaması hâlinde aşağıdaki uygulamalardan hangisine başvurulur?</b></p>",
    diff: 2,
    expl: "Bütçe Kanunu'nun süresinde yürürlüğe konulamaması hâlinde, geçici Bütçe Kanunu çıkarılır. Geçici Bütçe Kanunu'nun da çıkarılamaması durumunda, yeni bütçe kanunu kabul edilinceye kadar bir önceki yılın bütçesi yeniden değerleme oranına göre artırılarak uygulanır.",
    answers: [
      { text: "Yeni bütçe teklif edilinceye kadar harcama yapılamaz.", ok: false },
      { text: "Bir önceki yılın bütçesi aynı şekilde uygulanmaya devam eder.", ok: false },
      { text: "Bütçe yetkisi Bakanlıklar arası protokolle düzenlenir.", ok: false },
      { text: "Türkiye Büyük Millet Meclisi, geçici Bütçe Kanunu çıkarır.", ok: true },
      { text: "Cumhurbaşkanı geçici mali düzenleme kararnamesi yayımlar.", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Bütçe Kanunu'nun süresinde yürürlüğe konulamaması ve geçici bütçenin de çıkarılamaması durumunda aşağıdakilerden hangisi uygulanır?</b></p>",
    diff: 2,
    expl: "Bütçe Kanunu'nun süresinde yürürlüğe konulamaması hâlinde geçici Bütçe Kanunu çıkarılır. Geçici Bütçe Kanunu'nun da çıkarılamaması durumunda, yeni bütçe kanunu kabul edilinceye kadar bir önceki yılın bütçesi yeniden değerleme oranına göre artırılarak uygulanır.",
    answers: [
      { text: "Cumhurbaşkanlığı Kararnamesi ile harcama yapılır.", ok: false },
      { text: "Bakanlıkların teklifleri doğrultusunda yeni bütçe yapılır.", ok: false },
      { text: "Bir önceki yıl bütçesi yeniden değerleme oranıyla uygulanır.", ok: true },
      { text: "Kamu hizmetleri durdurulur.", ok: false },
      { text: "Hazine ve Maliye Bakanlığı geçici harcama emri çıkarır.", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'nda ismen belirtilen kanunlar arasında aşağıdakilerden hangisi yer almaz?</b></p>",
    diff: 3,
    expl: "1982 Anayasası'nda ismen adı geçen kanunlar şunlardır: Bütçe ve Kesin Hesap Kanunları, İnkılap Kanunları, Seçim Kanunları, Anayasa değişikliğine ilişkin kanunlar. Ancak Ticaret Kanunu Anayasa'da ismen (özel bir ad olarak) belirtilmemiştir.",
    answers: [
      { text: "Ticaret Kanunu", ok: true },
      { text: "Seçim Kanunları", ok: false },
      { text: "Bütçe Kanunu", ok: false },
      { text: "İnkılap Kanunları", ok: false },
      { text: "Kesin Hesap Kanunu", ok: false }
    ]
  },
  {
    text: "<p>Milletvekili A'nın Türkiye Büyük Millet Meclisine sunduğu kanun teklifinin yasallaşması ile ilgili olarak;<br><br>I. Kanun teklifinin mecliste görüşülebilmesi için toplantı yeter sayısı hazır olmalıdır.<br>II. Meclisçe kabul edilen kanunları Meclis Başkanı yayımlar.<br>III. Yürürlük tarihi metninde belirtilmeyen kanun yayımlandığı gün yürürlüğe girer.<br><br><b>verilenlerden hangileri doğrudur?</b></p>",
    diff: 2,
    expl: "Kanun teklifinin görüşülebilmesi için TBMM üye tam sayısının en az 1/3'ünün (200 milletvekili) hazır olması gerekir (Toplantı yeter sayısı). Yürürlük tarihi belirtilmeyen kanunlar Resmî Gazete'de yayımlandığı gün yürürlüğe girer. Ancak kanunları yayımlama görevi Meclis Başkanına değil, Cumhurbaşkanına aittir (II yanlış).",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: true },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Türk Ticaret Kanunu'nun belirli maddelerinin başka bir kanunla yürürlükten kaldırılan hükümleri aşağıdakilerden hangisiyle ifade edilir?</b></p>",
    diff: 2,
    expl: "Mülga: Bir yasanın, kabul edilen yeni bir yasa ile yürürlükten kaldırılmasıdır. Yani yasa maddelerinin uygulanabilirliğine son vermedir. Mülga olan bir kanun hükmü, yürürlükten kaldırılma tarihinden sonra meydana gelen hiçbir hukuki olaya uygulanamaz.",
    answers: [
      { text: "Geri alma", ok: false },
      { text: "Mülga", ok: true },
      { text: "İptal", ok: false },
      { text: "Kadük", ok: false },
      { text: "Düzeltme", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisi para basılmasına karar verme yetkisine sahiptir?</b></p>",
    diff: 1,
    expl: "1982 Anayasası'na göre, para basılmasına karar vermek yetkisi Türkiye Büyük Millet Meclisine aittir. TBMM para basılmasına karar verme yetkisini kanun şeklinde kullanır. (Not: TBMM, para basma yetkisini devretmiştir; banknot basma yetkisi Merkez Bankasına, madenî para basma yetkisi de Darphaneye verilmiştir ancak Anayasal karar yetkisi TBMM'nindir.)",
    answers: [
      { text: "Cumhurbaşkanı", ok: false },
      { text: "TBMM", ok: true },
      { text: "T.C. Merkez Bankası", ok: false },
      { text: "Hazine ve Maliye Bakanlığı", ok: false },
      { text: "Darphane", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Radyo ve Televizyon Üst Kurulu Türkiye Büyük Millet Meclisi tarafından seçilen kaç üyeden oluşur?</b></p>",
    diff: 2,
    expl: "Radyo ve televizyon faaliyetlerini düzenlemek ve denetlemek amacıyla kurulan Radyo ve Televizyon Üst Kurulu 9 üyeden oluşur. Üyeler, siyasi parti gruplarının üye sayısı oranında belirlenecek üye sayısının ikişer katı olarak gösterecekleri adaylar arasından, Türkiye Büyük Millet Meclisi Genel Kurulunca seçilir.",
    answers: [
      { text: "5", ok: false },
      { text: "7", ok: false },
      { text: "9", ok: true },
      { text: "11", ok: false },
      { text: "13", ok: false }
    ]
  }
];

// ============================================================================
// YASAMA - TEST 5
// ============================================================================
export const VAT_YASAMA_TEST_5: McQ[] = [
  {
    text: "<p>Bir adam, orman arazisinde kasten yangın çıkarır ve büyük bir orman alanının yok olmasına sebep olur. Ardından Meclis tarafından Af Kanunu çıkarılır.<br><br><b>1982 Anayasası'na göre, bu durumda aşağıdakilerden hangisi doğrudur?</b></p>",
    diff: 1,
    expl: "Ormanlara zarar verebilecek hiçbir faaliyet ve eyleme müsaade edilemez. Ormanları yakmak, ormanı yok etmek veya daraltmak amacıyla işlenen suçlar genel ve özel af kapsamına alınamaz.",
    answers: [
      { text: "Genel af kapsamında oldukları için failin cezası ortadan kalkar.", ok: false },
      { text: "Orman yangını suçu, genel ve özel af kapsamına alınamaz.", ok: true },
      { text: "Fail, pişmanlık göstermesi hâlinde af hükümlerinden yararlanabilir.", ok: false },
      { text: "Anayasa Mahkemesi, bu suçu affetme yetkisine sahiptir.", ok: false },
      { text: "TBMM, herhangi bir suç ayrımı yapmaksızın genel af ilan edebilir.", ok: false }
    ]
  },
  {
    text: "<p>Türkiye Büyük Millet Meclisi Genel Af Kanunu'nu oylamak üzere 500 milletvekili ile toplanmıştır.<br><br><b>1982 Anayasası'na göre, genel ve özel af kanununun Mecliste kabul edilebilmesi için en az kaç üyenin oyu gereklidir?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'na göre, TBMM'nin genel af ilanı kanun ile yaptığı işlemlerden biridir. Bunun için TBMM üye tam sayısının (600) 3/5'inin (360) kabul oyu ile mümkün olur. Toplantıya katılanların sayısı önemli değildir, üye tam sayısının 3/5'i şarttır.",
    answers: [
      { text: "151", ok: false },
      { text: "201", ok: false },
      { text: "251", ok: false },
      { text: "360", ok: true },
      { text: "400", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, milletlerarası antlaşmalar hangisi tarafından uygun bulunur ve kim tarafından onaylanır?</b></p>",
    diff: 1,
    expl: "Türkiye Cumhuriyeti adına yabancı devletlerle ve milletlerarası kuruluşlarla yapılacak antlaşmaların onaylanması, TBMM'nin onaylamayı bir kanunla uygun bulmasına bağlıdır. Uluslararası antlaşmaları onaylama ve yayımlamak Cumhurbaşkanı'nın görevidir.",
    answers: [
      { text: "TBMM tarafından uygun bulunur ve onaylanır.", ok: false },
      { text: "Cumhurbaşkanı tarafından uygun bulunur ve onaylanır.", ok: false },
      { text: "Dışişleri Bakanı tarafından uygun bulunur ve Cumhurbaşkanınca onaylanır.", ok: false },
      { text: "TBMM Başkanı tarafından uygun bulunur ve Cumhurbaşkanınca onaylanır.", ok: false },
      { text: "TBMM tarafından uygun bulunur ve Cumhurbaşkanınca onaylanır.", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, uygun bulma kanunu olmaksızın yayımlanma ile yürürlüğe giren bir milletlerarası antlaşma ne kadar süre içerisinde Türkiye Büyük Millet Meclisinin bilgisine sunulur?</b></p>",
    diff: 2,
    expl: "Ekonomik, ticari veya teknik ilişkileri düzenleyen ve süresi bir yılı aşmayan antlaşmalar, devlet maliyesi bakımından bir yüklenme getirmemek, kişi hâllerine ve Türklerin yabancı memleketlerdeki mülkiyet haklarına dokunmamak şartıyla, yayımlanma ile yürürlüğe konabilir. Bu takdirde bu antlaşmalar, yayımlarından başlayarak 2 ay içinde Türkiye Büyük Millet Meclisinin bilgisine sunulur.",
    answers: [
      { text: "15 gün", ok: false },
      { text: "1 ay", ok: false },
      { text: "2 ay", ok: true },
      { text: "4 ay", ok: false },
      { text: "6 ay", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, usulüne göre yürürlüğe konulmuş temel hak ve özgürlüklere ilişkin milletlerarası antlaşmalarla kanunların aynı konuda farklı hükümler içermesi nedeniyle çıkabilecek uyuşmazlıklarla ilgili aşağıdakilerden hangisi doğrudur?</b></p>",
    diff: 1,
    expl: "2004 yılı Anayasa değişikliği ile usulüne göre yürürlüğe konulmuş temel hak ve özgürlüklere ilişkin milletlerarası antlaşmalarla kanunların aynı konuda farklı hükümler içermesi nedeniyle çıkabilecek uyuşmazlıklarda milletlerarası antlaşma hükümleri esas alınır.",
    answers: [
      { text: "Kanun hükümleri esas alınır.", ok: false },
      { text: "Milletlerarası antlaşma hükümleri esas alınır.", ok: true },
      { text: "Anayasa Mahkemesi uyuşmazlığı çözmekle yetkilidir.", ok: false },
      { text: "Cumhurbaşkanı uyuşmazlığı çözmekle yetkilidir.", ok: false },
      { text: "Uyuşmazlık Mahkemesi uyuşmazlığı çözmekle yetkilidir.", ok: false }
    ]
  },
  {
    text: "<p>Bir televizyon kanalında tartışma programı sunan Mehmet, izleyicilere \"Anayasa değişikliği teklifinde bulunma yetkisi kime aittir?\" diye soruyor.<br><br><b>1982 Anayasası'na göre, Mehmet'in sorduğu soruya verilen aşağıdaki yanıtlardan hangisi doğrudur?</b></p>",
    diff: 1,
    expl: "1982 Anayasası'nın 175. maddesine göre, Anayasa değişikliği teklif etme yetkisi yalnızca Türkiye Büyük Millet Meclisi üye tam sayısının en az üçte biri olan 200 milletvekiline aittir. Cumhurbaşkanı, Adalet Bakanı veya siyasi partiler (gruplar) Anayasa değişikliği teklif edemez.",
    answers: [
      { text: "Arzu: Cumhurbaşkanı", ok: false },
      { text: "Mehmet: Siyasi partiler", ok: false },
      { text: "Kerem: Adalet Bakanı", ok: false },
      { text: "Defne: 200 milletvekili", ok: true },
      { text: "Zeynep: Mecliste grubu bulunan herhangi bir siyasi parti", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Anayasa'nın değiştirilmesi ile ilgili aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "Teklif, TBMM'nin en az 2/3 (400) üyesinin onayı ile kabul edilirse Cumhurbaşkanı görüşülmek üzere Meclise iade EDEBİLİR. (İster iade eder, ister halkoyuna sunar, isterse de onaylar.) İade edemez ifadesi yanlıştır.",
    answers: [
      { text: "Anayasa'nın ilk üç maddesinin değiştirilmesi teklif edilemez.", ok: false },
      { text: "Her madde Meclis Genel Kurulunda iki kez görüşülür.", ok: false },
      { text: "Türkiye Büyük Millet Meclisinde gizli oyla oylanır.", ok: false },
      { text: "Teklif, TBMM'nin en az 3/5 üyesinin onayı ile kabul edilebilir.", ok: false },
      { text: "Teklif, TBMM'nin en az 2/3 üyesinin onayı ile kabul edilirse Cumhurbaşkanı görüşülmek üzere Meclise iade edemez.", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdaki kanunlardan hangisi referanduma sunulabilir?</b></p>",
    diff: 1,
    expl: "Halk oylaması bir yarı doğrudan demokrasi aracıdır. 1982 Anayasası'na göre, referandum iki durumda mümkündür. İlki anayasa değişikliğine ilişkin kanunların gerektiğinde referanduma sunulması, ikincisi ise Cumhurbaşkanlığı seçiminin ikinci turunda adayın tek kişi kalması durumudur. Sadece 'Anayasa değişikliğine ilişkin kanun' referanduma sunulabilir.",
    answers: [
      { text: "Vergi Kanunu'nun değiştirilmesine ilişkin kanun", ok: false },
      { text: "Genel veya Özel Af Kanunu", ok: false },
      { text: "Milletlerarası antlaşmaları uygun bulma kanunu", ok: false },
      { text: "Bütçe ve Kesin Hesap kanunları", ok: false },
      { text: "Anayasa değişikliğine ilişkin kanun", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisinin Türkiye Büyük Millet Meclisi Genel Kurulunda iki defa görüşülmesi zorunludur?</b></p>",
    diff: 2,
    expl: "Anayasa'nın değiştirilmesi hakkında teklifler TBMM Genel Kurulunda iki defa görüşülür. Anayasa değişiklikleri kanunlardan farklı olarak GİZLİ OYLA oylanır. Diğer kanun tekliflerinde iki defa görüşülme zorunluluğu yoktur.",
    answers: [
      { text: "Bütçe Kanunu teklifi", ok: false },
      { text: "Bir üniversite kurulmasına dair kanun teklifi", ok: false },
      { text: "Milletlerarası antlaşmaların onaylanmasının uygun bulunmasına ilişkin kanun teklifleri", ok: false },
      { text: "Anayasa'nın değiştirilmesi hakkında kanun teklifi", ok: true },
      { text: "Genel ve özel affa ilişkin kanun teklifi", ok: false }
    ]
  },
  {
    text: "<p>Üç farklı anayasa değişikliği kanununun son oylamasında aldıkları kabul ve ret oyları şöyledir:<br><br>1: 360/127<br>2: 403/98<br>3: 379/18<br><br><b>1982 Anayasası'na göre, söz konusu kanunlar üzerinde Cumhurbaşkanı'nın kullanabileceği yetkilere ilişkin olarak aşağıdakilerden hangisinde sırasıyla doğru ifadelere yer verilmiştir?</b></p>",
    diff: 3,
    expl: "Oylamada 360-400 arası oy alınırsa (1. ve 3. durum), Cumhurbaşkanı ya geri gönderir ya da halkoyuna sunar (Zorunlu halk oylaması). Onaylama yetkisi yoktur. 400 ve üzeri (403) oy alınırsa (2. durum), Cumhurbaşkanı onaylayabilir, geri gönderebilir veya halkoyuna sunabilir (İhtiyari halk oylaması). Bu nedenle sırasıyla: Zorunlu - İhtiyari - Zorunlu şeklindedir. Verilen seçenekler arasında buna uygun olanı C şıkkıdır.",
    answers: [
      { text: "1: İhtiyari halk oylaması, 2: Geri gönderme, 3: Onay", ok: false },
      { text: "1: Onay, 2: İhtiyari halk oylaması, 3: Geri gönderme", ok: false },
      { text: "1: Geri gönderme, 2: Onay, 3: Zorunlu halk oylaması", ok: true },
      { text: "1: İhtiyari halk oylaması, 2: Onay, 3: Zorunlu halk oylaması", ok: false },
      { text: "1: Geri gönderme, 2: Zorunlu halk oylaması, 3: Onay", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, bir milletvekili;</b><br><br>I. kanun teklif etme,<br>II. yazılı soru önergesi verme,<br>III. Meclis başkanlığı için adaylık başvurusu yapma<br><br><b>işlemlerinden hangilerini yapabilir?</b></p>",
    diff: 1,
    expl: "1982 Anayasası'na göre bir milletvekili; kanun teklifi sunabilir, yazılı soru önergesi verebilir, Meclis Başkanlığı için adaylık başvurusu yapabilir. (Ayrıca dokunulmazlığı kaldırılan veya vekilliği düşürülen milletvekili için 7 gün içinde Anayasa Mahkemesine itiraz edebilir.)",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p>I. Cumhurbaşkanı'nın anayasaya aykırı olduğunu düşündüğü bir kanunu meclise geri göndermesi<br>II. Cumhurbaşkanı'nın anayasaya aykırı olduğunu düşündüğü bir kanun hakkında Anayasa Mahkemesinde iptal davası açması<br>III. Kanun teklifinin görüşüldüğü komisyonda yapılan anayasaya uygunluk denetimi<br><br><b>Yukarıdakilerden hangileri Türk hukukunda kanunların anayasa uygunluğunun siyasal denetimi yöntemlerinden biri değildir?</b></p>",
    diff: 3,
    expl: "Türk hukukunda kanunların anayasa uygunluk denetimi siyasi ve yargısal olmak üzere iki türlüdür. Siyasi denetim kanunun teklif olarak parlamentoya sunulmasıyla başlar (komisyonlar, genel kurul, Cumhurbaşkanının geri göndermesi). Yürürlüğe girdikten sonra Anayasa Mahkemesine iptal davası açılması ise yargısal denetimdir. Yani II. öncül (iptal davası açması) siyasal denetim yöntemi değildir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: true },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p>Türkiye Büyük Millet Meclisi, her yıl ---- ayının ilk günü ---- toplanır.<br><br><b>1982 Anayasası'na göre, yukarıda bırakılan boşluklara sırasıyla hangisi getirilmelidir?</b></p>",
    diff: 1,
    expl: "Türkiye Büyük Millet Meclisi, her yıl Ekim ayının ilk günü kendiliğinden toplanır. Meclis, bir yasama yılında en çok üç ay tatil yapabilir.",
    answers: [
      { text: "eylül – kendiliğinden", ok: false },
      { text: "ekim – kendiliğinden", ok: true },
      { text: "eylül – Meclis Başkanı'nın çağrısıyla", ok: false },
      { text: "ekim – Meclis Başkanı'nın çağrısıyla", ok: false },
      { text: "kasım – kendiliğinden", ok: false }
    ]
  },
  {
    text: "<p>Mecliste kanunların olgunlaştığı ve kanunlara son şeklinin verildiği yer komisyonlardır.<br><br><b>Türkiye Büyük Millet Meclisinde yer alan komisyonlar arasında aşağıdakilerden hangisi yoktur?</b></p>",
    diff: 2,
    expl: "TBMM İç Tüzüğü'ne göre Anayasa Komisyonu, Adalet Komisyonu, İçişleri Komisyonu ve Dilekçe Komisyonu mevcuttur. Ancak TBMM bünyesinde daimi bir 'Olağanüstü Hâl Komisyonu' bulunmamaktadır.",
    answers: [
      { text: "Anayasa Komisyonu", ok: false },
      { text: "Adalet Komisyonu", ok: false },
      { text: "İçişleri Komisyonu", ok: false },
      { text: "Dilekçe Komisyonu", ok: false },
      { text: "Olağanüstü Hâl Komisyonu", ok: true }
    ]
  },
  {
    text: "<p><b>Milletlerarası hukukun meşru saydığı hâllerde savaş hali ilanına ve Türkiye'nin taraf olduğu milletlerarası andlaşmaların veya milletlerarası nezaket kurallarının gerektirdiği haller dışında, Türk Silahlı Kuvvetlerinin yabancı ülkelere gönderilmesine veya yabancı silahlı kuvvetlerin Türkiye'de bulunmasına izin verme yetkisi aşağıdakilerden hangisine aittir?</b></p>",
    diff: 1,
    expl: "Milletlerarası hukukun meşru saydığı hâllerde savaş hali ilanına ve Türk Silahlı Kuvvetlerinin yabancı ülkelere gönderilmesine veya yabancı silahlı kuvvetlerin Türkiye'de bulunmasına izin verme yetkisi (Tezkere) Türkiye Büyük Millet Meclisine (TBMM) aittir.",
    answers: [
      { text: "Türkiye Büyük Millet Meclisi", ok: true },
      { text: "Genelkurmay Başkanı", ok: false },
      { text: "Millî Savunma Bakanı", ok: false },
      { text: "Cumhurbaşkanı", ok: false },
      { text: "Millî Güvenlik Kurulu", ok: false }
    ]
  }
];

// ============================================================================
// YASAMA - TEST 6
// ============================================================================
export const VAT_YASAMA_TEST_6: McQ[] = [
  {
    text: "<p><b>Türkiye Büyük Millet Meclisi yasama yılı başlangıç günü aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Türkiye Büyük Millet Meclisi, her yıl Ekim ayının ilk günü kendiliğinden toplanır. Meclis, bir yasama yılında en çok üç ay tatil yapabilir; ara verme veya tatil sırasında, doğrudan doğruya Cumhurbaşkanınca toplantıya çağrılır.",
    answers: [
      { text: "1 Ocak", ok: false },
      { text: "1 Şubat", ok: false },
      { text: "1 Temmuz", ok: false },
      { text: "30 Ağustos", ok: false },
      { text: "1 Ekim", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Meclis bir yasama yılında en çok ne kadar süre tatil yapar?</b></p>",
    diff: 1,
    expl: "Türkiye Büyük Millet Meclisi, her yıl ekim ayının ilk günü kendiliğinden toplanır. Meclis, bir yasama yılında en çok üç ay tatil yapabilir.",
    answers: [
      { text: "10 gün", ok: false },
      { text: "1 ay", ok: false },
      { text: "2 ay", ok: false },
      { text: "3 ay", ok: true },
      { text: "6 ay", ok: false }
    ]
  },
  {
    text: "<p>Türkiye Büyük Millet Meclisi İç Tüzüğü'ne göre, ara verme; Meclisin, çalışmalarını tek seferde en fazla kaç gün süreyle ertelemesidir?<br><br><b> </b></p>",
    diff: 2,
    expl: "Tatil, Türkiye Büyük Millet Meclisinin çalışmalarının belli bir süre ertelenmesidir. Ara verme ise, Türkiye Büyük Millet Meclisinin 15 günü geçmemek üzere çalışmalarını ertelemesidir.",
    answers: [
      { text: "5", ok: false },
      { text: "10", ok: false },
      { text: "15", ok: true },
      { text: "20", ok: false },
      { text: "30", ok: false }
    ]
  },
  {
    text: "<p>I. Türkiye Büyük Millet Meclisi başkanı<br>II. Cumhurbaşkanı<br>III. Türkiye Büyük Millet Meclisi üyelerinin 1/5'i<br><br><b>1982 Anayasası'na göre, yukarıdakilerden hangileri ara verme veya tatil sırasında Türkiye Büyük Millet Meclisini doğrudan doğruya toplantıya çağırabilir?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'na göre, TBMM tatildeyken Cumhurbaşkanı ve TBMM Başkanı doğrudan; TBMM üye tam sayısının en az beşte birinin (120 Milletvekili) yazılı istemi ile de TBMM Başkanı dolaylı olarak TBMM'yi toplantıya çağırmaya yetkilidir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: true },
      { text: "I ve III", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, TBMM Başkanı en az kaç milletvekilinin yazılı istemiyle Türkiye Büyük Millet Meclisini toplantıya çağırabilir?</b></p>",
    diff: 1,
    expl: "1982 Anayasası'na göre, TBMM tatildeyken Cumhurbaşkanı ve TBMM Başkanı doğrudan ve TBMM üye tam sayısının en az beşte birinin (600 / 5 = 120 Milletvekili) yazılı istemi ile de TBMM Başkanı dolaylı olarak TBMM'yi toplantıya çağırmaya yetkilidir.",
    answers: [
      { text: "120", ok: true },
      { text: "151", ok: false },
      { text: "200", ok: false },
      { text: "301", ok: false },
      { text: "360", ok: false }
    ]
  },
  {
    text: "<p>Meclis Başkanlık Divanı kurulmadan Meclis, çalışmalarını sürdüremez.<br><br><b>1982 Anayasası'na göre, aşağıdakilerden hangisi Meclis Başkanlık Divanında yer almaz?</b></p>",
    diff: 2,
    expl: "Türkiye Büyük Millet Meclisinin Başkanlık Divanı, Meclis üyeleri arasından seçilen Meclis Başkanı, Başkanvekilleri, kâtip üyeler ve idare amirlerinden oluşur. Meclis genel sekreteri Başkanlık Divanı üyesi değildir.",
    answers: [
      { text: "Meclis Başkanı", ok: false },
      { text: "Başkan vekilleri", ok: false },
      { text: "Kâtip üyeler", ok: false },
      { text: "Meclis genel sekreteri", ok: true },
      { text: "İdare amirleri", ok: false }
    ]
  },
  {
    text: "<p>Türkiye Büyük Millet Meclisi İç Tüzüğü'ne göre, yasama döneminin birinci birleşiminin ilk oturumundan başlayarak Türkiye Büyük Millet Meclisi başkanı seçilinceye kadar, aşağıdakilerden hangisi geçici başkanlık görevini yürütür?<br><br><b> </b></p>",
    diff: 1,
    expl: "Yasama döneminin birinci birleşiminin ilk oturumundan başlayarak Başkan seçilinceye kadar, en yaşlı milletvekili, \"Geçici Başkanlık\" görevini yürütür. İkinci derecede en yaşlı üye, başkanvekilliği görevini yerine getirir. En genç altı milletvekili de geçici olarak kâtip üyelik yaparlar.",
    answers: [
      { text: "En fazla üyeye sahip partinin genel başkanı olan milletvekili", ok: false },
      { text: "En kıdemli olan milletvekili", ok: false },
      { text: "Türkiye Büyük Millet Meclisi genel sekreteri", ok: false },
      { text: "En yaşlı olan milletvekili", ok: true },
      { text: "Türkiye Büyük Millet Meclisince geçici başkan seçilen milletvekili", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisinin seçiminde milletvekilleri etkili değildir?</b></p>",
    diff: 2,
    expl: "Kamu Başdenetçisi'ni, TBMM Başkanı'nı, Anayasa Mahkemesinin üç üyesini, Hâkimler ve Savcılar Kurulunun yedi üyesini TBMM (milletvekilleri) seçer. Cumhurbaşkanı yardımcıları ise doğrudan Cumhurbaşkanınca seçilir ve atanır.",
    answers: [
      { text: "TBMM Başkanı", ok: false },
      { text: "Kamu Başdenetçisi", ok: false },
      { text: "Anayasa Mahkemesi üyeleri", ok: false },
      { text: "Hâkimler ve Savcılar Kurulu üyeleri", ok: false },
      { text: "Cumhurbaşkanı yardımcıları", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Türkiye Büyük Millet Meclisinde Başkanlık Divanı seçiminin üçüncü turunda aranan karar yeter sayısı aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "TBMM Başkan adayları için seçim 4 turda ve gizli oyla yapılır. İlk iki oylamada üye tam sayısının üçte iki (400) ve üçüncü oylamada üye tam sayısının salt çoğunluğu (301) aranır. Üçüncü oylamada salt çoğunluk sağlanamazsa, bu oylamada en çok oy alan iki aday için dördüncü oylama yapılır ve en fazla oy alan seçilir.",
    answers: [
      { text: "151", ok: false },
      { text: "200", ok: false },
      { text: "301", ok: true },
      { text: "360", ok: false },
      { text: "400", ok: false }
    ]
  },
  {
    text: "<p>Milletvekili M, Türkiye Büyük Millet Meclisi Başkanlığı için aday olmak istiyor.<br><br><b>1982 Anayasası'na göre, Türkiye Büyük Millet Meclisi başkanı ile ilgili aşağıda verilen ifadelerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "Meclis Başkanı ve diğer başkanlık divanı üyeleri, başkanlık divanına seçildikten sonra da partilerinin üyesi ve milletvekili olarak kalmaya devam ederler. Yani Meclis Başkanı seçilen kişinin siyasi partisi ile ilişiği sona ermez. Sadece siyasi parti faaliyetlerine katılamaz.",
    answers: [
      { text: "Siyasi parti grupları Meclis Başkanlığı için aday gösteremez.", ok: false },
      { text: "Meclis Başkanlığı seçimi gizli oyla yapılır.", ok: false },
      { text: "Meclis Başkanı, Genel Kuruldaki oturumlarda oy kullanamaz.", ok: false },
      { text: "Meclis Başkanı seçilen kişinin varsa siyasi partisi ile ilişiği sona erer.", ok: true },
      { text: "Bir yasama döneminde iki kez Meclis Başkanlığı seçimi yapılır.", ok: false }
    ]
  },
  {
    text: "<p>TBMM Başkanlık Divanının görev süresi sona erdiği için yeni seçimler yapılacaktır.<br><br><b>1982 Anayasası'na göre, TBMM Başkanlık Divanı seçimi hakkında aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "Başkanlık divanına seçilecek tüm üyeler milletvekili olmak zorundadır. Ancak TBMM Başkanlık Divanı seçimlerinde siyasi parti grupları aday gösteremez, adaylar bireysel başvuru yapar.",
    answers: [
      { text: "Meclis Başkanlık Divanı üyeleri milletvekili olmak zorundadır.", ok: false },
      { text: "İkinci dönem seçilenler yasama döneminin sonuna kadar göre yapar.", ok: false },
      { text: "Meclis Başkanı seçilen kişinin milletvekilliği devam eder.", ok: false },
      { text: "Meclis Başkanı meclisteki oylamalara katılamaz.", ok: false },
      { text: "Siyasi parti grupları meclis başkanlığı için aday gösterebilir.", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi Meclis Başkanı'nın görevlerinden biridir?</b></p>",
    diff: 1,
    expl: "TBMM'yi Meclis dışında temsil etmek, Meclis Başkanının görevlerindendir. Anayasa Mahkemesine iptal davası açmak Cumhurbaşkanının veya meclisteki en fazla üyeye sahip iki partinin yetkisindedir. Milletlerarası antlaşmaları onaylamak ve yayımlamak ile Millî güvenlik politikalarını belirlemek Cumhurbaşkanı'nın; Cumhurbaşkanı'na vekâlet etmek ise Cumhurbaşkanı Yardımcısı'nın görevidir.",
    answers: [
      { text: "Anayasa Mahkemesine iptal davası açmak", ok: false },
      { text: "Milletlerarası antlaşmaları onaylamak ve yayımlamak", ok: false },
      { text: "Türkiye Büyük Millet Meclisini temsil etmek", ok: true },
      { text: "Millî güvenlik politikalarını belirlemek", ok: false },
      { text: "Cumhurbaşkanı'na vekâlet etmek", ok: false }
    ]
  },
  {
    text: "<p>Türkiye Büyük Millet Meclisi, yapacağı seçimler dahil bütün işlerinde üye tam sayısının en az ---- ile toplanır. Türkiye Büyük Millet Meclisi, Anayasada başkaca bir hüküm yoksa toplantıya katılanların ---- ile karar verir.<br><br><b>1982 Anayasası'na yukarıda boş bırakılan yerlere sırasıyla hangisi getirilmelidir?</b></p>",
    diff: 1,
    expl: "Türkiye Büyük Millet Meclisi, yapacağı seçimler dahil bütün işlerinde üye tam sayısının en az üçte biri (200 milletvekili) ile toplanır. Türkiye Büyük Millet Meclisi, Anayasada başkaca bir hüküm yoksa toplantıya katılanların salt çoğunluğu ile karar verir; ancak karar yeter sayısı hiçbir şekilde üye tam sayısının dörtte birinin bir fazlasından az olamaz.",
    answers: [
      { text: "üçte biri – beşte üçü", ok: false },
      { text: "beşte biri – üçte biri", ok: false },
      { text: "üçte biri – salt çoğunluğu", ok: true },
      { text: "beşte biri – salt çoğunluğu", ok: false },
      { text: "üçte biri – üçte ikisi", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, özel bir karar yeter sayısı getirilmemişse Türkiye Büyük Millet Meclisinin bir konuda karara varabilmesi için en az karar yeter sayısı aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Meclisin herhangi bir toplantıyı açması için en az 200 milletvekili hazır olmalıdır. Meclis karar alırken özel bir çoğunluk aranmamışsa toplantıya katılanların yarısından bir fazlası yeterlidir. Ancak bu sayı (karar yeter sayısı) hiçbir zaman üye tam sayısının dörtte birinin bir fazlasından (600 / 4 + 1 = 151) az olamaz.",
    answers: [
      { text: "120", ok: false },
      { text: "139", ok: false },
      { text: "151", ok: true },
      { text: "200", ok: false },
      { text: "301", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, 460 milletvekili ile toplanan bir Türkiye Büyük Millet Meclisi Genel Kurulunda aşağıdakilerden hangisiyle karar alınabilir?</b></p>",
    diff: 3,
    expl: "Meclis özel bir karar yeter sayısı aramıyorsa toplantıya katılanların salt çoğunluğu ile (yarısından bir fazlası) karar alır. Toplantıya katılanların sayısı 460 olduğuna göre; 460 / 2 = 230. Bir fazlası ise 231'dir. (Karar yeter sayısı en az 151 olmak zorundadır şartını da sağladığı için cevap 231'dir).",
    answers: [
      { text: "151", ok: false },
      { text: "200", ok: false },
      { text: "230", ok: false },
      { text: "231", ok: true },
      { text: "251", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisi Türkiye Büyük Millet Meclisi üyeleri arasından seçilemez?</b></p>",
    diff: 2,
    expl: "TBMM Başkanı ve Başkanvekilleri milletvekilleri arasından seçilir. Bakanlar ve Cumhurbaşkanı yardımcıları milletvekili olabilir ancak atandıkları an milletvekilliği sıfatları sona erer (yani başlangıçta milletvekili olabilirler). Ancak TBMM Genel Sekreteri, TBMM üyesi olmayan, kariyer memurluğu esasına göre atanan bir kamu görevlisidir.",
    answers: [
      { text: "TBMM Başkanı", ok: false },
      { text: "Cumhurbaşkanı Yardımcısı", ok: false },
      { text: "TBMM Başkan vekili", ok: false },
      { text: "Millî Savunma Bakanı", ok: false },
      { text: "TBMM Genel Sekreteri", ok: true }
    ]
  },
  {
    text: "<p><b>Kanun maddelerinin kendi içinde satır başlarıyla ayrılan küçük alt bölümlerine ne ad verilir?</b></p>",
    diff: 1,
    expl: "Bir maddenin kendi içinde anlam bütünlüğü taşıyan alt kısımlarına fıkra denir. Fıkralar satır başı yapılır, numara veya sıra ile ayrılır ve maddenin detaylandırılmasını sağlar. Hukukta 'paragraf' kavramı kullanılmaz, onun yerine teknik terim 'fıkra'dır.",
    answers: [
      { text: "Bent", ok: false },
      { text: "Madde", ok: false },
      { text: "Fıkra", ok: true },
      { text: "Paragraf", ok: false },
      { text: "Tüzük", ok: false }
    ]
  }
];

// ============================================================================
// YASAMA - TEST 7
// ============================================================================
export const VAT_YASAMA_TEST_7: McQ[] = [
  {
    text: "<p><b>1982 Anayasası'na göre, TBMM'nin aşağıda verilen kararlarından hangisi için nitelikli çoğunluk aranmaz?</b></p>",
    diff: 2,
    expl: "Anayasa'nın değiştirilmesi (3/5 veya 2/3), Genel ve özel af ilanı (3/5), Seçimlerin yenilenmesine karar vermek (3/5) ve Meclis Başkanı/Kamu Başdenetçisi seçimi (ilk iki turda 2/3, üçüncü turda salt çoğunluk) gibi konularda nitelikli çoğunluk aranır. Ancak yasama dokunulmazlığının kaldırılması için basit çoğunluk (toplantıya katılanların salt çoğunluğu, en az 151) yeterlidir.",
    answers: [
      { text: "Anayasa'nın değiştirilmesinin kabulü", ok: false },
      { text: "Yasama dokunulmazlığının kaldırılması kararı", ok: true },
      { text: "Genel ve özel af ilanı", ok: false },
      { text: "Seçimlerin yenilenmesine karar vermek", ok: false },
      { text: "Meclis Başkanı ve Kamu Başdenetçisi seçimi", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, TBMM'nin aşağıda verilen kararlarından hangisi için gizli oylama aranmaz?</b></p>",
    diff: 1,
    expl: "Anayasa değişikliği kabulü, Kamu Başdenetçisi seçimi, TBMM Başkanı seçimi, HSK ve Anayasa Mahkemesine üye seçimi, Yüce Divana sevk gibi işlemlerde gizli oylama zorunludur. Ancak savaş ilan etme kararı gibi konularda gizli oylama şartı yoktur.",
    answers: [
      { text: "Anayasa değişikliği kabulü", ok: false },
      { text: "Kamu Başdenetçisi'nin seçimi", ok: false },
      { text: "TBMM Başkanı'nın seçimi", ok: false },
      { text: "Savaş ilan etme kararı", ok: true },
      { text: "Hâkimler ve Savcılar Kuruluna üye seçimi", ok: false }
    ]
  },
  {
    text: "<p>A partisinde ayrılan 5 milletvekili B partisine geçer. Ancak B partisinin mecliste grup oluşturmak için milletvekili sayısı yeterli değildir.<br><br><b>1982 Anayasası'na göre, B partisinin mecliste grup kurmak amacıyla yeterli sayıya ulaşması için en az kaç milletvekiline daha ihtiyacı vardır?</b></p>",
    diff: 2,
    expl: "Siyasi parti grupları, en az 20 milletvekilinden meydana gelir. B partisinin 5 milletvekili olduğuna göre, grup oluşturmak için 15 milletvekiline daha ihtiyacı vardır.",
    answers: [
      { text: "7", ok: false },
      { text: "10", ok: false },
      { text: "15", ok: true },
      { text: "20", ok: false },
      { text: "30", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Türkiye Büyük Millet Meclisindeki siyasi parti gruplarına yasaklanmış işler arasında;</b><br><br>I. Cumhurbaşkanlığına aday göstermek,<br>II. yasama dokunulmazlığının kaldırılması için görüşme yapmak ve karar almak,<br>III. Meclis Başkanlığına aday göstermek<br><br><b>hangileri yer alır?</b></p>",
    diff: 2,
    expl: "Türkiye Büyük Millet Meclisindeki siyasi parti gruplarınca, yasama dokunulmazlığı ve meclis soruşturması ile ilgili görüşme yapılamaz ve karar alınamaz (II). Yine siyasi parti gruplarınca Meclis Başkanlığı için aday gösterilemez (III). Ancak siyasi parti grupları Cumhurbaşkanı adayı gösterebilir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: true }
    ]
  },
  {
    text: "<p>A Partisi: 270 milletvekili<br>B Partisi: 30 milletvekili<br>C Partisi: 98 milletvekili<br>D Partisi: 140 milletvekili<br>E Partisi: 19 milletvekili<br>Bağımsızlar: 43 milletvekili<br><br><b>1982 Anayasası'na göre, yukarıdaki sayısal verilerden yola çıkılarak mecliste kaç adet siyasi parti grubu kurulabilir?</b></p>",
    diff: 3,
    expl: "Bir siyasi partinin mecliste grup oluşturabilmesi için en az 20 milletvekili gereklidir. Her partinin mecliste en az bir grubu olabilir, bir partinin birden çok grubu olamaz. Bağımsız milletvekilleri ise partileşmeden grup kuramazlar. A (270), B (30), C (98) ve D (140) partileri 20'yi geçtiği için birer grup kurabilir (Toplam 4 grup). E partisi (19) ve Bağımsızlar grup kuramaz.",
    answers: [
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: true },
      { text: "5", ok: false },
      { text: "7", ok: false }
    ]
  },
  {
    text: "<p>Öğretmenlik Meslek Kanunu teklifi TBMM Genel Kurulunda oylamaya sunulur.<br><br><b>1982 Anayasası'na göre, aşağıdakilerden hangisi Türkiye Büyük Millet Meclisinde yapılan oylamalara katılabilir?</b></p>",
    diff: 2,
    expl: "Bağımsız milletvekilleri, seçilmiş ve ant içmiş olmak kaydıyla Meclis çalışmalarına ve oylamalara tam olarak katılabilirler. Ancak TBMM Başkanı, oturumu yöneten Başkanvekili, ant içmeyen milletvekilleri ve milletvekili olmayan Cumhurbaşkanı yardımcıları/bakanlar oylamalara katılamaz.",
    answers: [
      { text: "Meclis başkanı", ok: false },
      { text: "Bağımsız milletvekilleri", ok: true },
      { text: "Ant içmeyen milletvekili", ok: false },
      { text: "Cumhurbaşkanı yardımcıları ve bakanlar", ok: false },
      { text: "Oturumu yöneten Meclis başkan vekili", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Türkiye Büyük Millet Meclisi üyelerine ödenecek ödenek ve yollukların en geç kaç aylığı önceden ödenebilir?</b></p>",
    diff: 1,
    expl: "Türkiye Büyük Millet Meclisi üyelerine ödenecek ödenek ve yollukların en çok 3 aylığı önceden ödenebilir.",
    answers: [
      { text: "2", ok: false },
      { text: "3", ok: true },
      { text: "4", ok: false },
      { text: "6", ok: false },
      { text: "8", ok: false }
    ]
  },
  {
    text: "<p><b>Türkiye Büyük Millet Meclisi İç Tüzüğü ile ilgili olarak;</b><br><br>I. Parlamento kararıdır.<br>II. İç tüzük yapmak Meclisin yöntemsel bağımsızlığının bir sonucudur.<br>III. İç tüzük değişiklikleri Anayasa Mahkemesinin denetimine tabi değildir.<br>IV. İç tüzük değişikliklerini Cumhurbaşkanı yayımlar.<br><br><b>ifadelerinden hangileri doğrudur?</b></p>",
    diff: 3,
    expl: "İç tüzük, meclisin kendi çalışma kurallarını belirlediği yöntemsel bağımsızlığının sonucudur ve bir parlamento kararıdır (I ve II doğru). Parlamento kararı olduğu için Cumhurbaşkanına gitmez, TBMM Başkanı tarafından Resmî Gazete'de yayımlanır (IV yanlış). Parlamento kararı olmasına rağmen anayasal bir istisna olarak Anayasa Mahkemesinin yargısal denetimine tabidir (III yanlış).",
    answers: [
      { text: "I ve II", ok: true },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "III ve IV", ok: false },
      { text: "I, III ve IV", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Türkiye Büyük Millet Meclisi Genel Kurulundaki görüşmeler açıktır ve aşağıdakilerden hangisinde tam olarak yayımlanır?</b></p>",
    diff: 1,
    expl: "Türkiye Büyük Millet Meclisi Genel Kurulundaki görüşmeler açıktır ve Tutanak Dergisinde tam olarak yayımlanır.",
    answers: [
      { text: "Meclis zabıtları", ok: false },
      { text: "Tutanak dergisi", ok: true },
      { text: "Meclis yıllığı", ok: false },
      { text: "Almanak dergisi", ok: false },
      { text: "Meclis bülteni", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıda verilenlerden hangisi Türkiye Büyük Millet Meclisinin bilgi edinme ve denetim yolları arasında yer alır?</b></p>",
    diff: 1,
    expl: "TBMM'nin bilgi edinme ve denetim yolları dört tanedir. Bunlar; yazılı soru, genel görüşme, meclis araştırması ve meclis soruşturmasıdır. Gensoru 2017 anayasa değişikliği ile kaldırılmıştır.",
    answers: [
      { text: "Gensoru", ok: false },
      { text: "Meclis kovuşturması", ok: false },
      { text: "Yazılı soru", ok: true },
      { text: "Faaliyet raporlarının değerlendirilmesi", ok: false },
      { text: "Denetim komisyonu", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre,</b><br><br>• belli bir konuda bilgi edinmek için yapılan inceleme,<br>• toplumu ve devlet faaliyetlerini ilgilendiren belli bir konunun Meclis Genel Kurulunda görüşülmesi<br><br><b>sırasıyla Meclisin hangi bilgi edinme ve denetim yollarını tanımlamaktadır?</b></p>",
    diff: 1,
    expl: "Belli bir konuda bilgi edinmek için yapılan inceleme 'Meclis araştırması'dır. Toplumu ve Devlet faaliyetlerini ilgilendiren belli bir konunun Türkiye Büyük Millet Meclisi Genel Kurulunda görüşülmesi ise 'Genel görüşme'dir.",
    answers: [
      { text: "Genel görüşme – meclis araştırması", ok: false },
      { text: "Meclis araştırması – yazılı soru", ok: false },
      { text: "Meclis soruşturması – genel görüşme", ok: false },
      { text: "Genel görüşme – yazılı soru", ok: false },
      { text: "Meclis araştırması – genel görüşme", ok: true }
    ]
  },
  {
    text: "<p>Bakan A'nın, görevi sırasında yolsuzluk yaptığı iddia ediliyor.<br><br><b>1982 Anayasası'na göre, Bakan A'nın görevi ile ilgili suçlardan dolayı Yüce Divanda yargılanabilmesi için aşağıdaki denetim yollarından hangisi işletilmelidir?</b></p>",
    diff: 1,
    expl: "Meclis soruşturması, Cumhurbaşkanı yardımcıları ve bakanların görevleriyle ilgili suç işledikleri iddiasıyla TBMM tarafından yargısal amaçlı denetlenmesidir. Cumhurbaşkanı yardımcıları ve bakanları Yüce Divana Meclis gönderir. Bu işlem 'Meclis Soruşturması' yoluyla gerçekleştirilir.",
    answers: [
      { text: "Gensoru", ok: false },
      { text: "Meclis soruşturması", ok: true },
      { text: "Genel görüşme", ok: false },
      { text: "Meclis araştırması", ok: false },
      { text: "Yazılı soru", ok: false }
    ]
  },
  {
    text: "<p>Milletvekili K, özel hastanelerdeki bebek ölümleri ile ilgili Sağlık Bakanı'na yönelik yazılı sorusunu Meclis Başkanlığına iletiyor.<br><br><b>1982 Anayasası'na göre, Meclis Başkanlığınca gönderilen bu yazılı soruyu Sağlık Bakanı en geç kaç gün içinde cevaplandırmalıdır?</b></p>",
    diff: 1,
    expl: "1982 Anayasası'na göre yazılı soru, yazılı olarak en geç 15 gün içinde cevaplanmak üzere milletvekillerinin, Cumhurbaşkanı yardımcıları ve bakanlara yazılı olarak soru sormalarından ibarettir.",
    answers: [
      { text: "5", ok: false },
      { text: "10", ok: false },
      { text: "15", ok: true },
      { text: "30", ok: false },
      { text: "60", ok: false }
    ]
  },
  {
    text: "<p>Bakan A hakkında \"görevi kötüye kullanma\", \"kamu görevlisinin suçu bildirmemesi\", gibi suçlardan dolayı meclis soruşturması açılmak isteniyor.<br><br><b>1982 Anayasası'na göre, Bakan A hakkında göreviyle ilgili işlediği iddia edilen suçlardan dolayı en az kaç milletvekilinin yazılı istemi ile meclis soruşturması açılması istenebilir?</b></p>",
    diff: 2,
    expl: "Cumhurbaşkanı yardımcıları ve bakanlar hakkında görevleriyle ilgili suç işledikleri iddiasıyla, Türkiye Büyük Millet Meclisi üye tam sayısının salt çoğunluğunun (301 milletvekili) vereceği önergeyle soruşturma açılması istenebilir.",
    answers: [
      { text: "400", ok: false },
      { text: "360", ok: false },
      { text: "301", ok: true },
      { text: "151", ok: false },
      { text: "120", ok: false }
    ]
  },
  {
    text: "<p>I. En geç 10 gün içinde cevaplandırılır.<br>II. Yazılı soru bir milletvekili tarafından verilir.<br>III. Cumhurbaşkanı ve bakanlara soru sormaktan ibarettir.<br><br><b>1982 Anayasası'na göre, 'yazılı soru' ile ilgili yukarıdaki ifadelerden hangileri doğrudur?</b></p>",
    diff: 2,
    expl: "Yazılı soru, en geç 15 gün içinde cevaplanmak (I yanlış) üzere milletvekillerinin (II doğru), Cumhurbaşkanı yardımcıları ve bakanlara (III yanlış - Cumhurbaşkanına yazılı soru sorulamaz) soru sormalarından ibarettir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "Yalnız II", ok: true },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p>Bakan M hakkında meclis soruşturması açılıyor ve Yüce Divana sevk kararı alınıyor.<br><br><b>1982 Anayasası'na göre, bu durumla ilgili aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "Yüce Divana gönderilmek tek başına görevi sona erdirmez. Anayasa'ya göre Cumhurbaşkanı yardımcıları ve bakanlar Yüce Divan'da seçilmeye engel bir suçtan hüküm giyerse ancak o zaman görevleri sona erer. Yüce Divana sevk edilen M'nin görevinin hemen sona ereceği bilgisi yanlıştır.",
    answers: [
      { text: "En az 301 üyenin oyu ile soruşturma teklif edilmiştir.", ok: false },
      { text: "Meclis soruşturması en az 360 üyenin oyu ile açılmıştır.", ok: false },
      { text: "Yüce Divana en az 400 üyenin oyu ile sevk edilmiştir.", ok: false },
      { text: "Yüce Divana sevk edilen M'nin görevi sona ermiştir.", ok: true },
      { text: "Yüce Divan yargılaması ek süre dâhil olmak üzere en fazla 6 ayda tamamlanmalıdır.", ok: false }
    ]
  }
];