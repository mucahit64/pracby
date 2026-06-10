import { McQ } from "../../../../types";

// ============================================================================
// YÜRÜTME - TEST 1
// ============================================================================
export const VAT_YURUTME_TEST_1: McQ[] = [
  {
    text: "<p>I. Cumhurbaşkanı<br>II. Bakanlar<br>III. Cumhurbaşkanı yardımcıları<br><br><b>1982 Anayasası'nda yürütme yetki ve görevinin, yukarıdakilerden hangileri tarafından Anayasa'ya ve kanunlara uygun olarak kullanılacağı ve yerine getirileceği belirtilmiştir?</b></p>",
    diff: 1,
    expl: "2017 Anayasa değişikliği öncesi yürütme yetkisi ve görevi Cumhurbaşkanı ve Bakanlar Kurulu tarafından kullanılmaktaydı. 2017 değişikliği ile Bakanlar Kurulu kaldırılmış, bu yetki sadece Cumhurbaşkanı'na verilmiştir. Bakanlar ve Cumhurbaşkanı yardımcıları yürütme yetkisini doğrudan kullanan asli organlar değildir.",
    answers: [
      { text: "Yalnız I", ok: true },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p>I. Halk tarafından 5 yıl için seçilir.<br>II. Cumhurbaşkanlığı seçimi iki derecelidir.<br>III. Bir kimse en fazla 2 defa Cumhurbaşkanı seçilebilir.<br><br><b>1982 Anayasası'na göre, Cumhurbaşkanı'nın seçimine ilişkin yukarıda verilenlerden hangileri doğrudur?</b></p>",
    diff: 1,
    expl: "Cumhurbaşkanı, halk tarafından doğrudan (tek dereceli seçimle) 5 yıllığına seçilir. İki dereceli seçim sistemi geçerli değildir. Bir kimse en fazla iki defa Cumhurbaşkanı seçilebilir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve III", ok: true },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Türkiye'de Cumhurbaşkanı'nın halk tarafından seçilmesi ilk kez aşağıdaki seçimlerden hangisi ile gerçekleşmiştir?</b></p>",
    diff: 2,
    expl: "2007 yılında yapılan Anayasa değişikliğiyle Cumhurbaşkanı'nın halk tarafından seçilmesi kabul edilmiştir. Bu kuralın ilk defa uygulandığı ve Cumhurbaşkanının ilk kez halkoyuyla doğrudan seçildiği seçim 10 Ağustos 2014'te gerçekleşmiştir. Bu seçimde Recep Tayyip Erdoğan Cumhurbaşkanı seçilmiştir.",
    answers: [
      { text: "2010", ok: false },
      { text: "2013", ok: false },
      { text: "2014", ok: true },
      { text: "2018", ok: false },
      { text: "2023", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisi Cumhurbaşkanı seçilebilmek için zorunlu şartlar arasında yer almaz?</b></p>",
    diff: 1,
    expl: "Cumhurbaşkanı adayı olabilmek için Mecliste milletvekili olmak şartı aranmaz. Yükseköğrenim yapmış, 40 yaşını doldurmuş, milletvekili seçilme yeterliliğine sahip Türk vatandaşları doğrudan halk tarafından aday gösterilip seçilebilir.",
    answers: [
      { text: "Türk vatandaşı olmak", ok: false },
      { text: "40 yaşını doldurmuş olmak", ok: false },
      { text: "Milletvekili seçilebilme yeterliliğine sahip olmak", ok: false },
      { text: "Yükseköğretim mezunu olmak", ok: false },
      { text: "Türkiye Büyük Millet Meclisi üyesi olmak", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisi Cumhurbaşkanı adayı olamaz?</b></p>",
    diff: 2,
    expl: "Cumhurbaşkanı adayı olabilmek için 'yükseköğrenim' mezunu olmak şarttır. Seçeneklerdeki diğer kişiler üniversite mezunu iken, Galatasaray Lisesi, ne kadar köklü bir eğitim kurumu olursa olsun bir lisedir (ortaöğretim). Bu nedenle lise mezunu biri Cumhurbaşkanı adayı olamaz.",
    answers: [
      { text: "Fen Edebiyat Fakültesi mezunu 42 yaşındaki A", ok: false },
      { text: "Mühendislik Fakültesi mezunu 41 yaşındaki M", ok: false },
      { text: "İktisadi ve İdari Bilimler Fakültesi mezunu 43 yaşındaki L", ok: false },
      { text: "Galatasaray Lisesi mezunu 42 yaşındaki K", ok: true },
      { text: "Anadolu Üniversitesi Açıköğretim Fakültesi mezunu F", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisi Cumhurbaşkanlığına aday gösterebilir?</b></p>",
    diff: 1,
    expl: "Cumhurbaşkanlığına, siyasi parti grupları, en son yapılan genel seçimlerde toplam geçerli oyların tek başına veya birlikte en az %5'ini almış olan siyasi partiler ile en az 100.000 seçmen aday gösterebilir.",
    answers: [
      { text: "100.000 seçmen", ok: true },
      { text: "TBMM Başkanı", ok: false },
      { text: "Kanuna uygun şekilde kurulmuş herhangi bir siyasi parti", ok: false },
      { text: "120 milletvekili", ok: false },
      { text: "En son yapılan genel seçimlerde toplam geçerli oyların yüzde üçünü almış olan siyasi parti", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisi Cumhurbaşkanlığına aday gösteremez?</b></p>",
    diff: 2,
    expl: "Anayasa, Cumhurbaşkanlığına siyasi parti gruplarının (en az 20 milletvekilinden oluşur) aday gösterebileceğini belirtmektedir. Ancak tek tek veya bağımsız 20 milletvekili bir araya gelerek '20 milletvekili' sıfatıyla aday gösteremez, bunu ancak bir 'siyasi parti grubu' olarak yapabilirler.",
    answers: [
      { text: "Siyasi parti grupları", ok: false },
      { text: "En son yapılan genel seçimlerde toplam geçerli oyların yüzde 8'ini birlikte almış siyasi partiler", ok: false },
      { text: "En son yapılan genel seçimlerde toplam oyların yüzde 20'sini almış siyasi parti", ok: false },
      { text: "100.000 seçmen", ok: false },
      { text: "20 milletvekili", ok: true }
    ]
  },
  {
    text: "<p>Cumhurbaşkanlığı seçiminde geçerli oy sayısı 68.000.000'dur.<br><br>Adayların aldığı oy sayısı şu şekildedir:<br>• A adayı ... 30.200.000<br>• B adayı ... 27.500.000<br>• C adayı ... 6.800.000<br>• D adayı ... 3.500.000<br><br><b>1982 Anayasası'nın ilgili hükümleri dikkate alındığında aşağıdaki ifadelerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "İlk turda hiçbir aday geçerli oyların salt çoğunluğuna (68 milyonun yarısından bir fazlası olan 34.000.001'e) ulaşamadığı için seçim ikinci tura kalır. İkinci tura ilk turda en çok oy alan iki aday (A ve B) birlikte katılır. 'Sadece A katılır ve seçim referandum şeklinde yapılır' ifadesi Anayasa'ya aykırıdır.",
    answers: [
      { text: "A, Cumhurbaşkanı seçilemez çünkü salt çoğunluğa ulaşamamıştır.", ok: false },
      { text: "B, ikinci turda yarışma hakkına sahiptir çünkü ilk turda ikinci en yüksek oyu almıştır.", ok: false },
      { text: "Seçim ikinci tura kalır ve ikinci tura A ve B adayları katılır.", ok: false },
      { text: "İkinci tura sadece A katılır ve seçim referandum şeklinde yapılır.", ok: true },
      { text: "Hiçbir aday ilk turda geçerli oyların salt çoğunluğunu sağlayamamıştır.", ok: false }
    ]
  },
  {
    text: "<p>Cumhurbaşkanlığı seçiminde ikinci turda A Adayı %49, B Adayı %47 oranında oy almış; %4 oy geçersiz sayılmıştır.<br><br><b>1982 Anayasası'na göre, aşağıdaki ifadelerden hangisi doğrudur?</b></p>",
    diff: 2,
    expl: "Cumhurbaşkanlığı seçiminin ikinci turunda salt çoğunluk aranmaz. Yalnızca geçerli oyların çoğunluğunu alan aday Cumhurbaşkanı seçilmiş olur. A adayı geçerli oyların %49'unu alarak çoğunluğu sağladığı için Cumhurbaşkanı seçilir.",
    answers: [
      { text: "A Adayı seçilemez çünkü geçerli oyların salt çoğunluğu sağlanmamıştır.", ok: false },
      { text: "Seçim yenilenir çünkü geçerli oyların salt çoğunluğu aşılmamıştır.", ok: false },
      { text: "Geçerli oyların çoğunluğunu alan A adayı Cumhurbaşkanı seçilir.", ok: true },
      { text: "Seçim referandum şeklinde yapılır.", ok: false },
      { text: "Cumhurbaşkanı, Türkiye Büyük Millet Meclisi tarafından seçilir.", ok: false }
    ]
  },
  {
    text: "<p>Cumhurbaşkanlığı seçiminde A, B ve C adayları yarışmıştır. İlk turda A ve C adayları en çok oyu alarak ikinci tura kalmıştır. Ancak C adayı ikinci turdan önce adaylıktan çekilmiştir.<br><br><b>1982 Anayasası'na göre, bu durumla ilgili aşağıda verilen ifadelerden hangisi doğrudur?</b></p>",
    diff: 3,
    expl: "İkinci oylamaya katılmaya hak kazanan adaylardan birinin herhangi bir nedenle seçime katılmaması hâlinde; ikinci oylama, boşalan adaylığın birinci oylamadaki sıraya göre ikame edilmesi (kaydırılması) suretiyle yapılır. Yani 3. sırada olan B adayı ikinci tura alınır.",
    answers: [
      { text: "A Adayı ikinci tur yapılmaksızın Cumhurbaşkanı seçilir.", ok: false },
      { text: "Seçim yenilenir, ilk tur yeniden yapılır ve tüm adaylar tekrar yarışır.", ok: false },
      { text: "Üçüncü sırada olan B, ikame usulü yöntemi ile ikinci tura alınır.", ok: true },
      { text: "Seçim referandum niteliğine dönüşür, A Adayı için halk oylaması yapılır.", ok: false },
      { text: "TBMM ve Cumhurbaşkanı seçimleri birlikte yenilenir.", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisinde Cumhurbaşkanlığı seçimi için referanduma gidilmesi zorunludur?</b></p>",
    diff: 1,
    expl: "İkinci oylamaya katılmaya hak kazanan adaylardan birinin ölümü veya seçilme yeterliğini kaybetmesi nedeniyle ikinci oylamaya tek adayın kalması hâlinde, bu oylama referandum şeklinde yapılır. Aday geçerli oyların salt çoğunluğunu aldığı takdirde Cumhurbaşkanı seçilir.",
    answers: [
      { text: "Genel seçimlere son bir yıl kalması durumunda Cumhurbaşkanlığı makamı boşalmışsa", ok: false },
      { text: "Cumhurbaşkanlığı seçiminin ilk turunda Cumhurbaşkanı seçilememişse", ok: false },
      { text: "Genel seçimlere bir yıldan fazla kalması durumunda Cumhurbaşkanlığı makamı boşalmışsa", ok: false },
      { text: "Cumhurbaşkanlığı seçiminin ikinci turunda da Cumhurbaşkanı seçilememişse", ok: false },
      { text: "Cumhurbaşkanlığı seçiminin ikinci turunda tek aday kalmışsa", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdaki ifadelerden hangisi, 1982 Anayasası'na göre yalnızca Cumhurbaşkanı yemininde yer almakta, milletvekili yemin metninde yer almamaktadır?</b></p>",
    diff: 3,
    expl: "Hem Cumhurbaşkanı hem de milletvekili yemini namus ve şeref üzerine ant içilerek yapılır. 'Görevimi tarafsızlıkla yerine getireceğime' ifadesi ise yalnızca Cumhurbaşkanlığı yemininde yer alır, milletvekili yemininde bulunmaz. Bu ifade Cumhurbaşkanının tarafsız temsil işlevine vurgu yapar.",
    answers: [
      { text: "\"Anayasaya sadakatten ayrılmayacağıma\"", ok: false },
      { text: "\"Demokrasiye bağlı kalacağıma\"", ok: false },
      { text: "\"Görevimi tarafsızlıkla yerine getireceğime\"", ok: true },
      { text: "\"Milletin egemenliğine bağlı kalacağıma\"", ok: false },
      { text: "\"Namusum ve şerefim üzerine ant içerim\"", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisi Cumhurbaşkanlığı görevi ile bağdaşır?</b></p>",
    diff: 2,
    expl: "2017 Anayasa değişikliğiyle birlikte yürürlüğe giren Cumhurbaşkanlığı Hükûmet Sistemi'nde, Cumhurbaşkanı seçilen kişinin bir siyasi partiyle ilişiği kesilmez. Siyasi parti üyeliği, hatta genel başkanlığı Cumhurbaşkanlığı ile bağdaşır. Ancak milletvekilliği ve Meclis görevleri bağdaşmaz.",
    answers: [
      { text: "Yüksek Seçim Kurulu üyeliği", ok: false },
      { text: "TBMM Başkanlığı", ok: false },
      { text: "Siyasi parti üyeliği", ok: true },
      { text: "Milletvekilliği", ok: false },
      { text: "TBMM Anayasa Komisyonu üyeliği", ok: false }
    ]
  },
  {
    text: "<p>A, 110.000 seçmenin yazılı imzasıyla Cumhurbaşkanı adayı gösterilen bir milletvekilidir. A, aynı zamanda bir siyasi partinin de genel başkanıdır.<br><br><b>1982 Anayasası'na göre A, Cumhurbaşkanı seçildiği takdirde aşağıdakilerden hangisi doğrudur?</b></p>",
    diff: 2,
    expl: "Cumhurbaşkanı seçilen milletvekilinin Türkiye Büyük Millet Meclisi üyeliği (milletvekilliği) derhal sona erer. Ancak partisinden istifa etmesi gerekmez, genel başkanlık görevini sürdürebilir.",
    answers: [
      { text: "Partisi ile ilişiği kesilir.", ok: false },
      { text: "Genel Başkanlık görevini Cumhurbaşkanlığı süresince sürdüremez.", ok: false },
      { text: "Milletvekilliği sona ereceği için parti üyeliği de sona erer.", ok: false },
      { text: "Türkiye Büyük Millet Meclisindeki oylamalara katılabilir.", ok: false },
      { text: "Türkiye Büyük Millet Meclisi üyeliği sona erer.", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Cumhurbaşkanı makamının herhangi bir nedenle boşalması hâlinde kaç gün içinde Cumhurbaşkanı seçimi yapılır?</b></p>",
    diff: 1,
    expl: "Cumhurbaşkanı makamının herhangi bir nedenle (ölüm, istifa vb.) boşalması hâlinde, 45 gün içinde Cumhurbaşkanı seçimi yapılır. Yenisi seçilene kadar Cumhurbaşkanı yardımcısı Cumhurbaşkanlığına vekâlet eder.",
    answers: [
      { text: "15", ok: false },
      { text: "30", ok: false },
      { text: "45", ok: true },
      { text: "60", ok: false },
      { text: "90", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, bir bakanı göreviyle ilgili suçlardan dolayı Yüce Divana sevk etme yetkisi aşağıdakilerden hangisine aittir?</b></p>",
    diff: 2,
    expl: "Cumhurbaşkanı yardımcıları ve bakanlar hakkında görevleriyle ilgili suç işledikleri iddiasıyla Türkiye Büyük Millet Meclisi'nde soruşturma açılabilir. Meclis, üye tam sayısının üçte ikisinin (400) gizli oyuyla Yüce Divana sevk kararı alabilir.",
    answers: [
      { text: "Türkiye Büyük Millet Meclisi", ok: true },
      { text: "Cumhurbaşkanı", ok: false },
      { text: "Yargıtay Cumhuriyet Başsavcısı", ok: false },
      { text: "Adalet Bakanlığı", ok: false },
      { text: "Devlet Denetleme Kurulu", ok: false }
    ]
  }
];

// ============================================================================
// YÜRÜTME - TEST 2
// ============================================================================
export const VAT_YURUTME_TEST_2: McQ[] = [
  {
    text: "<p>Genel seçime 6 ay kala Cumhurbaşkanı makamı, Cumhurbaşkanın istifası nedeniyle boşalır.<br><br><b>1982 Anayasası'na göre, bu durumla ilgili;</b><br><br>I. Sadece Cumhurbaşkanı seçimi yenilenir.<br>II. Cumhurbaşkanı yardımcısı Cumhurbaşkanlığına vekâlet eder.<br>III. Seçilen Cumhurbaşkanı açısından bu süre dönemden sayılmaz.<br><br><b>ifadelerinden hangileri doğrudur?</b></p>",
    diff: 3,
    expl: "Cumhurbaşkanlığı makamının herhangi bir nedenle boşalması hâlinde, 45 gün içinde Cumhurbaşkanı seçimi yapılır. Yenisi seçilene kadar Cumhurbaşkanı yardımcısı vekâlet eder (II doğru). Genel seçime 1 yıl veya daha az kalmışsa (soruda 6 ay) TBMM seçimi ile Cumhurbaşkanı seçimi 'birlikte' yenilenir, sadece CB seçimi yenilenmez (I yanlış). Kalan süreyi tamamlama ve dönemden sayılmama durumu yalnızca genel seçime 1 yıldan FAZLA kaldığı durumlarda geçerlidir. Seçimler birlikte yenilendiği için yeni seçilen CB tam bir 5 yıllık dönem için seçilmiş olur (III yanlış).",
    answers: [
      { text: "Yalnız II", ok: true },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p>Genel seçimlere 9 ay kala Cumhurbaşkanı A hakkında, TBMM tarafından başlatılan soruşturma süreci sonucunda Yüce Divan yargılaması yapılmış ve A'nın seçilme yeterliliğini ortadan kaldıran bir suçtan mahkûmiyetine karar verilmiştir.<br><br><b>1982 Anayasası'na göre, yukarıda verilen durum ile ilgili;</b><br><br>I. Cumhurbaşkanı A'nın görevi sona erer.<br>II. 45 gün içinde yeni Cumhurbaşkanlığı seçimi yapılır.<br>III. TBMM seçimleri de Cumhurbaşkanı seçimleri ile birlikte yenilenir.<br><br><b>ifadelerinden hangileri doğrudur?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'na göre, Yüce Divan tarafından seçilmeye engel bir suçtan mahkûm edilen Cumhurbaşkanı'nın görevi sona erer (I). Cumhurbaşkanı'nın görevi sona erdiğinden (makamın boşalması) 45 gün içinde Cumhurbaşkanı seçimi yapılır (II). Makamın boşaldığı tarihte genel seçime bir yıl veya daha az (soruda 9 ay) kalmış durumunda Türkiye Büyük Millet Meclisi seçimi de Cumhurbaşkanı seçimi ile birlikte yenilenir (III).",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre,</b><br><br>I. TBMM tarafından seçimlerin yenilenmesine karar verilmesi,<br>II. Cumhurbaşkanlığı makamının, genel seçimlere 2 yıl kala boşalması,<br>III. Cumhurbaşkanlığı makamının, genel seçimlere 6 ay kala boşalması<br><br><b>durumlarından hangilerinde Cumhurbaşkanı ve Türkiye Büyük Millet Meclisi seçimleri birlikte yapılır?</b></p>",
    diff: 2,
    expl: "TBMM'nin veya Cumhurbaşkanının seçimleri yenilemesi durumunda her iki seçim birlikte yenilenir (I). Cumhurbaşkanlığı makamının boşalması durumunda ise; genel seçimlere 1 yıldan AZ kalmışsa iki seçim BİRLİKTE yenilenir (III). Ancak genel seçimlere 1 yıldan FAZLA kalmışsa (sorudaki 2 yıl gibi) SADECE Cumhurbaşkanlığı seçimi yenilenir (II yanlış).",
    answers: [
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: true },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, mevcut Cumhurbaşkanı'nın görev süresinin dolması ve Cumhurbaşkanı seçiminin tamamlanamaması durumunda yeni Cumhurbaşkanı göreve başlayıncaya kadar bu görevi aşağıdakilerden hangisi yürütür?</b></p>",
    diff: 1,
    expl: "Genel oyla yapılacak seçimde, aday geçerli oyların çoğunluğunu alamazsa, sadece Cumhurbaşkanı seçimi yenilenir. Seçimlerin tamamlanamaması hâlinde, yenisi göreve başlayıncaya kadar 'mevcut Cumhurbaşkanı'nın' görevi devam eder.",
    answers: [
      { text: "TBMM Başkanı", ok: false },
      { text: "Cumhurbaşkanı Yardımcısı", ok: false },
      { text: "Görev süresi dolan Cumhurbaşkanı", ok: true },
      { text: "Cumhurbaşkanı Genel Sekreteri", ok: false },
      { text: "Adalet Bakanı", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Cumhurbaşkanı'nın görevi,</b><br><br>I. devamsızlık,<br>II. yeniden seçilememe,<br>III. Meclis tarafından Yüce Divana sevk edilme<br><br><b>durumlarından hangilerinde sona erer?</b></p>",
    diff: 2,
    expl: "Cumhurbaşkanı'nın ölüm, çekilme, seçilmeye engel bir suçtan hakkında mahkûmiyet kararı verilmesi, yeni seçilen Cumhurbaşkanı'nın göreve başlaması (yeniden seçilememe) durumlarında görevi kendiliğinden sona erer. Cumhurbaşkanı'nın Yüce Divana SEVK EDİLMESİ görevini sona erdirmez, sadece seçilmeye engel mahkumiyet kararı alırsa sona erer. Devamsızlık ise milletvekilliğinin düşme sebebidir, Cumhurbaşkanı için geçerli değildir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: true },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Devlet organlarının çalışma düzeninden, Türkiye Cumhuriyeti ve Türk Milletinin birliğinin temsilinden aşağıdakilerden hangisi sorumludur?</b></p>",
    diff: 1,
    expl: "Cumhurbaşkanı devletin başıdır. Yürütme yetkisi Cumhurbaşkanına aittir. Cumhurbaşkanı, Devlet başkanı sıfatıyla Türkiye Cumhuriyeti'ni ve Türk Milletinin birliğini temsil eder; Anayasanın uygulanmasını, Devlet organlarının düzenli ve uyumlu çalışmasını temin eder.",
    answers: [
      { text: "TBMM Başkanı", ok: false },
      { text: "Anayasa Mahkemesi Başkanı", ok: false },
      { text: "Genelkurmay Başkanı", ok: false },
      { text: "Cumhurbaşkanı", ok: true },
      { text: "İçişleri Bakanı", ok: false }
    ]
  },
  {
    text: "<p>Cumhurbaşkanı A, resmî ziyaretlerde bulunmak amacıyla Almanya'ya seyahat etmek üzere yurttan ayrılır.<br><br><b>1982 Anayasası'na göre aşağıdakilerden hangisi Cumhurbaşkanı'na vekâlet eder ve Cumhurbaşkanı'na ait yetkileri kullanır?</b></p>",
    diff: 1,
    expl: "Cumhurbaşkanı'nın hastalık ve yurt dışına çıkma gibi sebeplerle geçici olarak görevinden ayrılması hâllerinde, Cumhurbaşkanı'nın kendisinin belirleyeceği 'Cumhurbaşkanı Yardımcısı' vekâlet eder ve Cumhurbaşkanı'na ait yetkileri kullanır. (2017 değişikliği ile TBMM Başkanı'nın vekaletine son verilmiştir).",
    answers: [
      { text: "En kıdemli milletvekili", ok: false },
      { text: "TBMM Başkanı", ok: false },
      { text: "Cumhurbaşkanı Yardımcısı", ok: true },
      { text: "En yaşlı bakan", ok: false },
      { text: "Cumhurbaşkanı Genel Sekreteri", ok: false }
    ]
  },
  {
    text: "<p>Aşağıda birtakım yetkiler ve bu yetkilerin hangi güce dayandığı verilmiştir.<br><br>I. Anayasa değişikliklerini referanduma sunma → TBMM<br>II. Olağanüstü hâl ilan etme → Cumhurbaşkanı<br>III. RTÜK üyelerini seçmek → TBMM<br>IV. Yükseköğretim Kurulu üyelerini atama → Cumhurbaşkanı<br>V. Milletlerarası antlaşmaların onaylanmasını uygun bulma → TBMM<br><br><b>1982 Anayasası'na göre, yukarıdaki sütunlardan hangisinde verilen bilgi yanlıştır?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'nın 175. maddesine göre, Anayasa değişikliklerini referanduma (halkoyuna) sunma yetkisi TBMM'ye değil, Cumhurbaşkanına aittir. Diğer tüm eşleştirmeler Anayasa'ya göre doğrudur.",
    answers: [
      { text: "V", ok: false },
      { text: "IV", ok: false },
      { text: "III", ok: false },
      { text: "II", ok: false },
      { text: "I", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'nda, Cumhurbaşkanı'nın, aşağıdakilerden hangisi bakımından Türkiye Büyük Millet Meclisine karşı sorumlu olduğu açıkça belirtilmiştir?</b></p>",
    diff: 2,
    expl: "Anayasa'nın 117. maddesine göre, Millî güvenliğin sağlanmasından ve Silahlı Kuvvetlerin yurt savunmasına hazırlanmasından, Türkiye Büyük Millet Meclisine karşı, Cumhurbaşkanı sorumludur.",
    answers: [
      { text: "Millî Güvenlik Kurulunun gündeminin belirlenmesinden", ok: false },
      { text: "Bakanları atamak ve görevden almaktan", ok: false },
      { text: "Millî güvenliğin sağlanması ve Türk silahlı kuvvetlerinin yurt savunmasına hazırlanmasından", ok: true },
      { text: "Ülkenin iç ve dış politikasını belirlemekten", ok: false },
      { text: "Sürekli hastalık, sakatlık ve kocama sebebiyle kişilerin cezalarını hafifletmekten veya kaldırmaktan", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisi Cumhurbaşkanı'nın görevleri arasında yer almaz?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'na göre Cumhurbaşkanı hiçbir durumda TBMM'ye başkanlık yapamaz. TBMM'ye yalnızca açılış konuşması yapabilir, toplantılara katılamaz ve başkanlık yetkisi yoktur (TBMM İç Tüzüğü ve Anayasa m.93, m.104).",
    answers: [
      { text: "Milletlerarası antlaşmaları onaylar ve yayımlar.", ok: false },
      { text: "Üst kademe kamu yöneticilerini atar, görevlerine son verir.", ok: false },
      { text: "Millî güvenlik politikalarını belirler ve gerekli tedbirleri alır.", ok: false },
      { text: "Yabancı devletlere Türkiye Cumhuriyeti'nin temsilcilerini gönderir.", ok: false },
      { text: "Gerekli gördüğü takdirde, Türkiye Büyük Millet Meclisine başkanlık eder.", ok: true }
    ]
  },
  {
    text: "<p><b>Resmî Gazete, aşağıdakilerden hangisi tarafından yayımlanır?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'na göre, kanunlar, Cumhurbaşkanı tarafından yayımlanmak üzere Resmî Gazete'de yayımlanır. Ayrıca, 1 No'lu Cumhurbaşkanlığı Kararnamesi'nin 3. maddesi gereği, Resmî Gazete'nin yayımlanmasından ve yönetiminden Cumhurbaşkanlığı sorumludur. (İletişim Başkanlığı tarafından hazırlanabilir ancak yayımlama yetkisi Cumhurbaşkanlığına aittir.)",
    answers: [
      { text: "TBMM Başkanlığı", ok: false },
      { text: "Cumhurbaşkanlığı", ok: true },
      { text: "İletişim Başkanlığı", ok: false },
      { text: "Radyo ve Televizyon Üst Kurulu", ok: false },
      { text: "Danıştay", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Cumhurbaşkanı'nın görev ve yetkileri arasında aşağıdakilerden hangisi yer almaz?</b></p>",
    diff: 1,
    expl: "Anayasa'ya göre devlet adına resmî para çıkarma, yani 'para basılmasına karar verme' yetkisi TBMM'ye aittir. Cumhurbaşkanının böyle bir yetkisi yoktur. (TBMM bu yetkisini kanunla Merkez Bankasına bırakmıştır).",
    answers: [
      { text: "Kanunları yayımlar.", ok: false },
      { text: "Millî Güvenlik Kuruluna başkanlık eder.", ok: false },
      { text: "Devlet Denetleme Kurulunun başkan ve üyelerini atar.", ok: false },
      { text: "Gerekli gördüğünde yasama yılının ilk günü açılış konuşması yapar.", ok: false },
      { text: "Para basılmasına karar verir.", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Meclis tarafından hakkında soruşturma açılmasına karar verilen Cumhurbaşkanı;</b><br><br>I. olağanüstü hâl ilan etmek,<br>II. seçimlerin yenilenmesine karar vermek,<br>III. kanunları yayımlamak<br><br><b>yetkilerinden hangilerini kullanamaz?</b></p>",
    diff: 2,
    expl: "Hakkında soruşturma açılmasına karar verilen Cumhurbaşkanı yalnızca 'seçim kararı alamaz' (seçimlerin yenilenmesine karar veremez). Diğer görev ve yetkilerini (OHAL ilanı, kanun yayımlama vb.) Yüce Divan mahkûmiyeti kesinleşene kadar kullanmaya devam edebilir.",
    answers: [
      { text: "Yalnız II", ok: true },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Cumhurbaşkanı hakkında bir suç işlediği iddiasıyla Meclis soruşturması açılması süreci aşağıdakilerden hangisiyle başlar?</b></p>",
    diff: 1,
    expl: "Anayasa m.105/2'ye göre: Cumhurbaşkanı hakkında bir suç işlediği iddiasıyla, Türkiye Büyük Millet Meclisi üye tam sayısının salt çoğunluğu (301) tarafından önerge verilmesi ile soruşturma süreci başlar.",
    answers: [
      { text: "Yargıtay Cumhuriyet Başsavcısının başvurmasıyla", ok: false },
      { text: "En az 200 milletvekilinin önerge vermesiyle", ok: false },
      { text: "TBMM Başkanının soruşturma başlatmasıyla", ok: false },
      { text: "En az 301 milletvekilinin önerge vermesiyle", ok: true },
      { text: "Anayasa Mahkemesine başvurulmasıyla", ok: false }
    ]
  },
  {
    text: "<p>Cumhurbaşkanı B hakkında bir suç işlediği iddiasıyla Meclis tarafından soruşturma açılıyor ve kendisi hakkında Yüce Divana sevk kararı alınıyor.<br><br><b>1982 Anayasası'na göre, bu olay ile ilgili aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "Cumhurbaşkanının Yüce Divana sevk edilmesi, onun görevini otomatik olarak sona erdirmez. Sadece Yüce Divan yargılaması sonucunda 'seçilmeye engel bir suçtan mahkûm edilen' Cumhurbaşkanının görevi sona erer. Bu nedenle 'Yüce Divana sevk edilen Cumhurbaşkanı'nın görevi sona erer' ifadesi yanlıştır.",
    answers: [
      { text: "Yüce Divan yargılaması ek süreler dâhil en fazla 6 ay sürmelidir.", ok: false },
      { text: "En az 360 üyenin oyu ile soruşturma açılmasına karar verilmiştir.", ok: false },
      { text: "Yüce Divana sevk edilen Cumhurbaşkanı'nın görevi sona erer.", ok: true },
      { text: "En az 400 üyenin oyu ile Yüce Divana sevk edilmiştir.", ok: false },
      { text: "Hakkında soruşturma açılmasına karar verilen Cumhurbaşkanı, seçim kararı alamaz.", ok: false }
    ]
  }
];

// ============================================================================
// YÜRÜTME - TEST 3
// ============================================================================
export const VAT_YURUTME_TEST_3: McQ[] = [
  {
    text: "<p><b>Devlet Denetleme Kurulu idarenin hukuka uygunluğunun düzenli ve verimli şekilde yürütülmesinin ve geliştirilmesinin sağlanması amacıyla aşağıdakilerden hangisine bağlı olarak kurulmuştur?</b></p>",
    diff: 1,
    expl: "İdarenin hukuka uygunluğunun, düzenli ve verimli şekilde yürütülmesinin ve geliştirilmesinin sağlanması amacıyla, Cumhurbaşkanlığına bağlı olarak kurulan Devlet Denetleme Kurulu, tüm kamu kurum ve kuruluşlarında denetlemeler yapar.",
    answers: [
      { text: "İçişleri Bakanlığı", ok: false },
      { text: "Cumhurbaşkanlığı", ok: true },
      { text: "Adalet Bakanlığı", ok: false },
      { text: "Türkiye Büyük Millet Meclisi", ok: false },
      { text: "Ticaret Bakanlığı", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Devlet Denetleme Kurulu ile ilgili;</b><br><br>I. Yargı organları görev alanı dışındadır.<br>II. Silahlı Kuvvetleri denetleyebilir.<br>III. Cumhurbaşkanlığına bağlı olarak kurulmuştur.<br><br><b>ifadelerinden hangileri doğrudur?</b></p>",
    diff: 2,
    expl: "İdarenin hukuka uygunluğunun sağlanması amacıyla Cumhurbaşkanlığına bağlı olarak kurulan Devlet Denetleme Kurulunun görev alanı dışında kalan tek istisna 'yargı organları'dır (I ve III doğru). 2017 anayasa değişikliği ile Türk Silahlı Kuvvetleri de denetim kapsamına alınmıştır (II doğru).",
    answers: [
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p><b>Devlet Denetleme Kurulu ile ilgili;</b><br><br>I. Türk Silahlı Kuvvetleri, denetim alanı dışındadır.<br>II. İdari soruşturma yapabilir.<br>III. Başkan ve üyelerini Türkiye Büyük Millet Meclisi seçer.<br><br><b>ifadelerinden hangileri doğrudur?</b></p>",
    diff: 2,
    expl: "Devlet Denetleme Kurulunun Başkan ve üyeleri, Cumhurbaşkanınca atanır (III yanlış). Türk Silahlı Kuvvetleri 2017 yılından itibaren denetim alanı içindedir (I yanlış). DDK, Cumhurbaşkanının isteği üzerine idari soruşturma, inceleme, araştırma ve denetlemeler yapar (II doğru).",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: true },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisi Devlet Denetleme Kurulunun denetleyebileceği yerlerden biri değildir?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'na göre DDK'nın görev alanı dışında kalan tek istisna 'yargı organları'dır. Danıştay bir yüksek yargı organı olduğu için DDK'nın görev alanı dışındadır. Kamu hastaneleri, RTÜK, Genelkurmay Başkanlığı ve İstanbul Barosu gibi kuruluşlar denetlenebilir.",
    answers: [
      { text: "Haydarpaşa Numune Hastanesi", ok: false },
      { text: "Radyo ve Televizyon Üst Kurulu", ok: false },
      { text: "Genelkurmay Başkanlığı", ok: false },
      { text: "Danıştay", ok: true },
      { text: "İstanbul Barosu", ok: false }
    ]
  },
  {
    text: "<p>I. İnceleme ve araştırma<br>II. Denetleme ve idari soruşturma<br>III. Uzlaştırma ve ara buluculuk<br><br><b>1982 Anayasası'na göre, Devlet Denetleme Kurulu, denetim yetkisine sahip olduğu idareler üzerinde yukarıdakilerden hangilerini yapabilir?</b></p>",
    diff: 2,
    expl: "Devlet Denetleme Kurulu, Cumhurbaşkanının isteği üzerine, yetkili olduğu kurum ve kuruluşlarda her türlü idari soruşturma, inceleme, araştırma ve denetlemeleri yapar. Uzlaştırma ve ara buluculuk gibi bir görevi bulunmamaktadır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: true },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisi Cumhurbaşkanınca atananlar arasında yer almaz?</b></p>",
    diff: 1,
    expl: "1982 Anayasası'na göre Üst kademe yöneticileri, Genelkurmay Başkanı, Devlet Denetleme Kurulu başkan ve üyeleri, Cumhurbaşkanı yardımcıları ve bakanlar Cumhurbaşkanı tarafından atanır. Ancak TBMM Başkanı, milletvekilleri tarafından TBMM Genel Kurulunca gizli oyla seçilir.",
    answers: [
      { text: "Üst kademe yöneticileri", ok: false },
      { text: "Genelkurmay Başkanı", ok: false },
      { text: "Devlet Denetleme Kurulu başkan ve üyeleri", ok: false },
      { text: "Cumhurbaşkanı yardımcıları", ok: false },
      { text: "TBMM Başkanı", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Cumhurbaşkanı yardımcıları ve bakanlar aşağıdakilerden hangisine karşı sorumludur?</b></p>",
    diff: 1,
    expl: "1982 Anayasası'nda 2017 yılında yapılan değişikliklerle birlikte parlamenter sistemin bir özelliği olan meclise karşı siyasi sorumluluk (gensoru vb.) kaldırılmıştır. Yeni sistemde Cumhurbaşkanı yardımcıları ve bakanlar, kendilerini atayan Cumhurbaşkanına karşı sorumludur.",
    answers: [
      { text: "Cumhurbaşkanı", ok: true },
      { text: "Türkiye Büyük Millet Meclisi", ok: false },
      { text: "Yüce Divan", ok: false },
      { text: "Üyesi bulundukları siyasi parti", ok: false },
      { text: "Türk milleti", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Cumhurbaşkanı yardımcısı ve bakan olmak için aranan şartlar arasında;</b><br><br>I. yükseköğretim mezunu olmak,<br>II. askerlikle ilişiği olmamak,<br>III. 40 yaşını doldurmuş olmak<br><br><b>verilenlerden hangileri yer alır?</b></p>",
    diff: 3,
    expl: "Anayasa'nın 106. maddesine göre Cumhurbaşkanı yardımcıları ve bakanlar, milletvekili seçilme yeterliliğine sahip olanlar arasından atanır. Milletvekili seçilmek için 'askerlikle ilişiği olmamak' şarttır (II). Ancak yükseköğretim mezunu olmak ve 40 yaşını doldurmuş olmak Cumhurbaşkanı adayı olmak için aranan şartlardır, bakanlar/yardımcılar için (en az ilkokul ve 18 yaş kuralı geçerli olduğundan) zorunlu değildir.",
    answers: [
      { text: "Yalnız II", ok: true },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Cumhurbaşkanı yardımcıları ve bakanların göreve başlama anı aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Cumhurbaşkanı yardımcıları ve bakanlar, 81'inci maddede yazılı şekilde Türkiye Büyük Millet Meclisi önünde ant içerek (yemin ederek) göreve başlarlar.",
    answers: [
      { text: "Cumhurbaşkanı'nın huzurunda yemin etmek", ok: false },
      { text: "Atama kararının Resmî Gazete'de yayımlanması", ok: false },
      { text: "Anayasa Mahkemesi önünde bağlılık yemini etmek", ok: false },
      { text: "Türkiye Büyük Millet Meclisi (TBMM) önünde yemin etmek", ok: true },
      { text: "Atama kararının TBMM Genel Kurulu tarafından onaylanması", ok: false }
    ]
  },
  {
    text: "<p>Prof. Dr. M, anayasa hukuku dersinde öğrencilere \"Cumhurbaşkanı yardımcıları hakkında neler biliyorsunuz?\" şeklinde soru soruyor.<br><br><b>1982 Anayasası'na göre, aşağıdaki yanıtlardan hangisi doğru değildir?</b></p>",
    diff: 2,
    expl: "Türkiye Büyük Millet Meclisi üyeleri (milletvekilleri), Cumhurbaşkanı yardımcısı veya bakan olarak atandıklarında milletvekillikleri (meclis üyelikleri) sona erer. Göreve hem milletvekili hem de Cumhurbaşkanı yardımcısı/bakan olarak devam edemezler.",
    answers: [
      { text: "Bir veya daha fazla Cumhurbaşkanı yardımcısı olabilir.", ok: false },
      { text: "Türkiye Büyük Millet Meclisi önünde ant içerek göreve başlarlar.", ok: false },
      { text: "Görevleri ile ilgili olmayan suçlarda yasama dokunulmazlığı hükümlerinden yararlanırlar.", ok: false },
      { text: "Türkiye Büyük Millet Meclisi üyeleri Cumhurbaşkanı yardımcısı olarak atandıklarında meclis üyelikleri devam eder.", ok: true },
      { text: "Cumhurbaşkanı yardımcıları, Cumhurbaşkanı'na karşı sorumludur.", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, bakanlıklarla ilgili aşağıdakilerden hangisi Cumhurbaşkanı Kararnamesi ile düzenlenemez?</b></p>",
    diff: 2,
    expl: "Bakanlıkların kurulması, kaldırılması, görevleri, yetkileri, teşkilat yapısı ile merkez ve taşra teşkilatlarının kurulması Cumhurbaşkanlığı Kararnamesi'yle düzenlenir. Ancak bakanlıkların bütçeleri yıllık olarak TBMM tarafından yasalaşan 'Bütçe Kanunu' ile belirlenir, kararname ile düzenlenemez.",
    answers: [
      { text: "Bakanlıkların kurulması ve kaldırılması", ok: false },
      { text: "Bakanlıkların yıllık bütçeleri", ok: true },
      { text: "Bakanlıkların görev ve yetkileri", ok: false },
      { text: "Bakanlarının teşkilat yapısı", ok: false },
      { text: "Bakanlıkların merkez ve taşra teşkilatlarının kurulması", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, bakanlar hakkında aşağıda verilenlerden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "Bakanlar (ve Cumhurbaşkanı yardımcıları), görevleriyle ilgili işledikleri iddia edilen suçlardan dolayı meclis soruşturması sonucunda Yüce Divanda yargılanırlar. Ancak görevleriyle İLGİLİ OLMAYAN (kişisel vb.) suçlarda yasama dokunulmazlığına ilişkin hükümlerden yararlanırlar ve genel mahkemelerde yargılanırlar.",
    answers: [
      { text: "Bakanlar, milletvekili seçilme yeterliğine sahip olanlar arasından Cumhurbaşkanı tarafından atanır ve görevden alınır.", ok: false },
      { text: "Bakanlar, Türkiye Büyük Millet Meclisi önünde ant içerler.", ok: false },
      { text: "Türkiye Büyük Millet Meclisi üyeleri, bakan olarak atanırsalar üyelikleri sona erer.", ok: false },
      { text: "Bakanlar, görevleriyle ilgili olmayan suçlarda Yüce Divanda yargılanır.", ok: true },
      { text: "Bakanlar, Cumhurbaşkanı'na karşı sorumludur.", ok: false }
    ]
  },
  {
    text: "<p>Sağlık Bakanı olan M, görevden alınıp yerine milletvekili L'nin Sağlık Bakanı olarak ataması yapılıyor.<br><br><b>1982 Anayasası'na göre, bu olay ile ilgili aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "Bakanlıkların kurulması, kaldırılması, görevleri ve yetkileri ile teşkilat yapısı 'Cumhurbaşkanlığı Kararnamesi' ile düzenlenir. Kanunla (Meclis tarafından) düzenlenmesi 2017 anayasa değişikliği öncesine ait bir bilgidir.",
    answers: [
      { text: "Sağlık Bakanı M'nin ataması Cumhurbaşkanı tarafından yapılmıştır.", ok: false },
      { text: "Sağlık Bakanlığının teşkilat ve görevleri Meclis tarafından kanunla düzenlenmiştir.", ok: true },
      { text: "Sağlık Bakanı L, Mecliste yemin ederek göreve başlamıştır.", ok: false },
      { text: "Sağlık Bakanı M, milletvekili seçilebilme şartlarına sahiptir.", ok: false },
      { text: "Sağlık Bakanı L, Meclis üyeleri arasından seçildiği için Meclis üyeliği sona ermiştir.", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre olağan dönemlerde çıkarılan Cumhurbaşkanı kararnameleriyle ilgili aşağıda verilen ifadelerden hangisi doğrudur?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'nın 104. maddesine göre; Kanunlar ile Cumhurbaşkanlığı kararnamesi arasında farklı hükümler bulunması durumunda kanun hükümleri uygulanır. Ayrıca yürütme yetkisine ilişkin konularda çıkarılabilir (A yanlış). Münhasıran kanunla düzenlenmesi öngörülen konularda çıkarılamaz (B yanlış). Kanunda açıkça düzenlenen konularda çıkarılamaz (C yanlış). TBMM'nin aynı konuda kanun çıkarması durumunda kararname hükümsüz hale gelir (E yanlış).",
    answers: [
      { text: "Cumhurbaşkanı'nın yürütme yetkisine ilişkin konularda çıkarılamaz.", ok: false },
      { text: "Anayasa'da münhasıran kanunla düzenlenmesi öngörülen konularda çıkarılabilir.", ok: false },
      { text: "Kanunda açıkça düzenlenen konularda çıkarılabilir.", ok: false },
      { text: "Kanunlar ile arasında farklı hükümler bulunması durumunda kanun hükümleri uygulanır.", ok: true },
      { text: "Türkiye Büyük Millet Meclisinin aynı konuda kanun çıkarması durumunda kanunla birlikte uygulanmaya devam eder.", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdaki konulardan hangisi Cumhurbaşkanlığı Kararnamesi ile düzenlenebilir?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'na göre temel haklar, kişi hak ve hürriyetleri (mülkiyet hakkı, dernek kurma hakkı vb.) ile siyasi hak ve ödevler (seçme seçilme hakkı vb.) olağan Cumhurbaşkanlığı Kararnamesi ile düzenlenemez. Ayrıca kanunla düzenlenmiş konularda da çıkarılamaz. Ancak yürütme yetkisine ilişkin olan 'Bakanlık teşkilat yapısının belirlenmesi' doğrudan Cumhurbaşkanlığı Kararnamesi ile düzenlenir.",
    answers: [
      { text: "Mülkiyet hakkının sınırlandırılması", ok: false },
      { text: "Dernek kurma hakkının kapsamı", ok: false },
      { text: "Bakanlık teşkilat yapısının belirlenmesi", ok: true },
      { text: "Seçme ve seçilme yeterlilikleri", ok: false },
      { text: "Kanunla düzenlenmiş olan bir kamu görevi atama usulü", ok: false }
    ]
  },
  {
    text: "<p>I. Olağan dönem Cumhurbaşkanı kararnamesi<br>II. Cumhurbaşkanı Yönetmeliği<br>III. Kanun Hükmünde Kararname<br>IV. Cumhurbaşkanı Tüzüğü<br>V. OHAL Cumhurbaşkanı Kararnamesi<br><br><b>1982 Anayasası'nda, Cumhurbaşkanı'nın yukarıdakilerden hangilerini çıkarabileceği düzenlenmemiştir?</b></p>",
    diff: 3,
    expl: "2017 Anayasa değişikliği ile birlikte 'Kanun Hükmünde Kararname' (KHK) ve 'Tüzük' çıkarılması yetkisi sistemden tamamen kaldırılmıştır. Yeni sistemde Cumhurbaşkanı; Olağan Dönem Cumhurbaşkanlığı Kararnamesi, OHAL Cumhurbaşkanlığı Kararnamesi ve Yönetmelik çıkarabilir. Dolayısıyla III ve IV nolu işlemler anayasal olarak düzenlenmemiştir.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "II ve IV", ok: false },
      { text: "III ve IV", ok: true },
      { text: "IV ve V", ok: false },
      { text: "I, III ve V", ok: false }
    ]
  }
];

// ============================================================================
// YÜRÜTME - TEST 4
// ============================================================================
export const VAT_YURUTME_TEST_4: McQ[] = [
  {
    text: "<p><b>1982 Anayasası'na göre, olağan dönem Cumhurbaşkanı kararnameleri hakkında aşağıda verilen ifadelerden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "1982 Anayasası madde 13'e göre temel hak ve hürriyetler ancak KANUNLA sınırlandırılabilir. Dolayısıyla olağan dönem Cumhurbaşkanlığı Kararnameleri ile temel hak ve hürriyetlerde sınırlama YAPILAMAZ.",
    answers: [
      { text: "Yürütme yetkisine ilişkin konularda çıkarılabilir.", ok: false },
      { text: "Temel hak ve hürriyetler sınırlandırılabilir.", ok: true },
      { text: "Kanunla aynı konuda farklı hükümler içermesi durumunda kanun hükümleri geçerlidir.", ok: false },
      { text: "Yargısal denetimini Anayasa Mahkemesi yapar.", ok: false },
      { text: "Münhasıran kanunla düzenlenmesi öngörülen konularda çıkarılamaz.", ok: false }
    ]
  },
  {
    text: "<p>Cumhurbaşkanı, kamuda yeni bir teşkilat kurmak için Cumhurbaşkanlığı Kararnamesi çıkarmıştır. Aynı konuda TBMM daha sonra bir kanun çıkarmış ve teşkilatın yapısını farklı şekilde düzenlemiştir.<br><br><b>1982 Anayasası'na göre, bu durumda aşağıdaki ifadelerden hangisi doğrudur?</b></p>",
    diff: 2,
    expl: "Türkiye Büyük Millet Meclisinin aynı konuda kanun çıkarması durumunda, Cumhurbaşkanlığı Kararnamesi hükümsüz hâle gelir.",
    answers: [
      { text: "Her iki düzenleme birlikte uygulanır.", ok: false },
      { text: "Kanunla kararname arasında çatışma varsa kararname geçerli olur.", ok: false },
      { text: "Kanun yürürlüğe girdiği anda kararname hükümsüz hale gelir.", ok: true },
      { text: "Cumhurbaşkanı Kararnamesi kanuna rağmen uygulanır.", ok: false },
      { text: "Önceki düzenleme uygulanır.", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisi kanunla düzenlenir?</b></p>",
    diff: 2,
    expl: "Millî Güvenlik Kurulu Genel Sekreterliğinin teşkilatı ve görevleri, Üst kademe kamu yöneticilerinin atanması usulleri, Bakanlıkların kurulması/kaldırılması ve Devlet Denetleme Kurulunun işleyişi CUMHURBAŞKANI KARARNAMESİ ile düzenlenir. Ancak mahallî idarelerin kuruluş ve görevleri ile yetkileri KANUNLA düzenlenir.",
    answers: [
      { text: "Mahallî idarelerin kuruluş ve görevleri ile yetkileri", ok: true },
      { text: "Millî Güvenlik Kurulu Genel Sekreterliğinin teşkilatı ve görevleri", ok: false },
      { text: "Üst kademe kamu yöneticilerini atanması, görevlerine son verilmesi ve bunların atanmalarına ilişkin usul ve esaslar", ok: false },
      { text: "Bakanlıkların kurulması, kaldırılması, görevleri ve yetkileri ile teşkilat yapısı ile merkez ve taşra teşkilatlarının kurulması", ok: false },
      { text: "Devlet Denetleme Kurulunun işleyişi, üyelerinin görev süresi ve diğer özlük işleri", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdaki temel hak ve hürriyetlerden hangisi Cumhurbaşkanı Kararnamesi ile düzenlenebilir?</b></p>",
    diff: 3,
    expl: "Anayasa'nın ikinci kısmının birinci ve ikinci bölümlerinde yer alan temel haklar, kişi hakları ve ödevleriyle dördüncü bölümde yer alan siyasi haklar ve ödevler Cumhurbaşkanlığı Kararnamesi'yle düzenlenemez. Dernek kurma, dilekçe hakkı, kamu hizmetine girme ve vatandaşlık hakkı kişi/siyasi haklardır. Ancak 'Sağlık, çevre ve konut hakkı' sosyal ve ekonomik haklar içerisinde yer alır ve olağan dönem CBK ile düzenlenebilir.",
    answers: [
      { text: "Dernek kurma hakkı", ok: false },
      { text: "Dilekçe hakkı", ok: false },
      { text: "Sağlık, çevre ve konut hakkı", ok: true },
      { text: "Kamu hizmetine girme hakkı", ok: false },
      { text: "Vatandaşlık hakkı", ok: false }
    ]
  },
  {
    text: "<p><b>10 sayılı Cumhurbaşkanı Kararnamesi'ne göre, kanun, kararname ve yönetmelikler için yürürlük tarihi belirlenmemişse ne zaman yürürlüğe girer?</b></p>",
    diff: 1,
    expl: "10 sayılı Cumhurbaşkanı Kararnamesi'nin 7. maddesine göre kanunlar, Cumhurbaşkanı kararnameleri ve yönetmelikler ile diğer düzenlemeler için ayrıca bir yürürlük tarihi belirtilmemişse Resmî Gazete'de yayımlandığı gün yürürlüğe girer.",
    answers: [
      { text: "Resmî Gazete'de yayımlandığı gün kendiliğinden", ok: true },
      { text: "Resmî Gazete'de yayımını izleyen 15 gün sonra kendiliğinden", ok: false },
      { text: "Resmî Gazete'de yayımını izleyen 30 gün sonra kendiliğinden", ok: false },
      { text: "Resmî Gazete'de yayımını izleyen 45 gün sonra kendiliğinden", ok: false },
      { text: "Resmî Gazete'de yayımını izleyen 90 gün sonra kendiliğinden", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, olağanüstü hâl döneminde çıkarılan Cumhurbaşkanı kararnameleri hakkında aşağıda verilen ifadelerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "Olağanüstü hâllerde Cumhurbaşkanı, olağanüstü hâlin gerekli kıldığı konularda, Anayasadaki sınırlamalara tabi olmaksızın Cumhurbaşkanlığı Kararnamesi çıkarabilir. Bu kararnameler kanun hükmündedir, Resmî Gazete'de yayımlanır ve TBMM onayına sunulur. Ancak Anayasa'ya göre olağanüstü hâl döneminde çıkarılan kararnamelere karşı Anayasa Mahkemesine iptal davası AÇILAMAZ (Yargısal denetimi yoktur).",
    answers: [
      { text: "Olağanüstü hâlin gerekli kıldığı konularda çıkarılabilir.", ok: false },
      { text: "Kanun hükmündedir.", ok: false },
      { text: "Resmî Gazete'de yayımlanır.", ok: false },
      { text: "Türkiye Büyük Millet Meclisinin onayına sunulur.", ok: false },
      { text: "Anayasa Mahkemesinin yargısal denetimine tabidir.", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, savaş ve mücbir durumlar hariç olmak üzere olağanüstü hâl sırasında çıkarılan Cumhurbaşkanlığı kararnameleri en geç kaç ay içerisinde Türkiye Büyük Millet Meclisinde görüşülür ve karara bağlanır?</b></p>",
    diff: 2,
    expl: "Olağanüstü hâl sırasında çıkarılan Cumhurbaşkanlığı kararnameleri, savaş ve mücbir sebeplerle TBMM'nin toplanamaması hâli hariç olmak üzere, üç (3) ay içinde Türkiye Büyük Millet Meclisinde görüşülür ve karara bağlanır. Aksi hâlde olağanüstü hâllerde çıkarılan Cumhurbaşkanlığı Kararnamesi kendiliğinden yürürlükten kalkar.",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: true },
      { text: "6", ok: false },
      { text: "9", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, olağanüstü hâllerde, olağanüstü hâlin gerekli kıldığı konularda çıkarılan Cumhurbaşkanlığı Kararnamesi, Resmî Gazete'de yayımlandıktan itibaren en geç ne kadar süre içinde Türkiye Büyük Millet Meclisinin onayına sunulur?</b></p>",
    diff: 1,
    expl: "Olağanüstü hâllerde Cumhurbaşkanı tarafından çıkarılan kanun hükmündeki bu kararnameler Resmî Gazete'de yayımlanır ve 'aynı gün' Meclis onayına sunulur.",
    answers: [
      { text: "Aynı gün", ok: true },
      { text: "Takip eden gün", ok: false },
      { text: "Takip eden ilk iş günü", ok: false },
      { text: "5 gün", ok: false },
      { text: "10 gün", ok: false }
    ]
  },
  {
    text: "<p>I. Tüm yönetmelikler Resmî Gazete'de yayımlanır.<br>II. Cumhurbaşkanı, bakanlıklar ve kamu tüzel kişileri çıkarabilir.<br>III. Kanunların ve Cumhurbaşkanlığı kararnamelerinin uygulanmasını sağlamak üzere ve bunlara aykırı olmamak şartıyla çıkarılır.<br><br><b>1982 Anayasası'na göre, yönetmeliklerle ilgili yukarıdakilerden hangileri doğrudur?</b></p>",
    diff: 2,
    expl: "Cumhurbaşkanı, bakanlıklar ve kamu tüzel kişileri, görev alanlarını ilgilendiren kanunların ve CBK'ların uygulanmasını sağlamak üzere yönetmelikler çıkarabilir (II ve III doğru). Ancak 'tüm yönetmelikler Resmî Gazete'de yayımlanır' ifadesi yanlıştır. Hangi yönetmeliklerin Resmî Gazete'de yayımlanacağı kanunda belirtilir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "I ve II", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "II ve III", ok: true },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Yönetmelik yapmaya ilişkin 1982 Anayasası hükümleri dikkate alındığında aşağıdaki birimlerden hangisi yönetmelik çıkaramaz?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'nın 124. maddesi uyarınca; Cumhurbaşkanı, bakanlıklar ve kamu tüzel kişileri kanunlara uygun olmak kaydıyla yönetmelik çıkarabilir. Sağlık Bakanlığı, Üniversiteler, Belediyeler ve Barolar yönetmelik çıkarabilir. Emniyet Genel Müdürlüğü ise bir kamu tüzel kişiliği olmadığı için bu kurum yönetmelik çıkaramaz.",
    answers: [
      { text: "Samsun Ondokuz Mayıs Üniversitesi", ok: false },
      { text: "Adana Büyükşehir Belediyesi", ok: false },
      { text: "Batman Barosu", ok: false },
      { text: "Emniyet Genel Müdürlüğü", ok: true },
      { text: "Sağlık Bakanlığı", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre aşağıdakilerden hangisinin tümü Resmî Gazete'de yayımlanmaz?</b></p>",
    diff: 1,
    expl: "Anayasa, Kanunlar, Olağan Dönem CBK ve OHAL CBK'larının tümü Resmî Gazete'de yayımlanmak zorundadır. Ancak Anayasa m.124'e göre 'Hangi yönetmeliklerin Resmî Gazete'de yayımlanacağı kanunda belirtilir.' Yani yönetmeliklerin tümü Resmî Gazete'de yayımlanmaz (örneğin yerel çapta faaliyet gösteren kamu tüzel kişilerinin yönetmelikleri yerel gazetede yayımlanabilir).",
    answers: [
      { text: "Kanun", ok: false },
      { text: "Anayasa", ok: false },
      { text: "Olağan dönem Cumhurbaşkanı Kararnamesi", ok: false },
      { text: "Yönetmelik", ok: true },
      { text: "Olağanüstü hâl Cumhurbaşkanı Kararnamesi", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Türk Silahlı Kuvvetlerinin Başkomutanlığını aşağıdakilerden hangisi temsil eder?</b></p>",
    diff: 1,
    expl: "Başkomutanlık, Türkiye Büyük Millet Meclisinin manevi varlığından ayrılamaz ve Cumhurbaşkanı tarafından temsil olunur.",
    answers: [
      { text: "Genelkurmay Başkanı", ok: false },
      { text: "Millî Savunma Bakanı", ok: false },
      { text: "TBMM Başkanı", ok: false },
      { text: "Cumhurbaşkanı", ok: true },
      { text: "Deniz Kuvvetleri Komutanı", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre Başkomutanlık, aşağıdakilerden hangisinin manevi varlığından ayrılamaz?</b></p>",
    diff: 1,
    expl: "Başkomutanlık, Türkiye Büyük Millet Meclisinin manevi varlığından ayrılamaz ve Cumhurbaşkanı tarafından temsil olunur.",
    answers: [
      { text: "Genelkurmay Başkanı", ok: false },
      { text: "Türkiye Büyük Millet Meclisi", ok: true },
      { text: "Millî Savunma Bakanlığı", ok: false },
      { text: "Cumhurbaşkanlığı", ok: false },
      { text: "Kara Kuvvetleri Komutanlığı", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Cumhurbaşkanı'nın Türk Silahlı Kuvvetlerine dair görev ve yetkileriyle ilgili;</b><br><br>I. TBMM adına Türk Silahlı Kuvvetlerinin Başkomutanlığını temsil eder.<br>II. Türk Silahlı Kuvvetlerinin kullanılmasına karar verebilir.<br>III. Savaş hâlinde Başkomutanlık görevini Millî Savunma Bakanı'na devreder.<br><br><b>ifadelerinden hangileri doğrudur?</b></p>",
    diff: 2,
    expl: "Cumhurbaşkanı, Türkiye Büyük Millet Meclisi adına Türk Silahlı Kuvvetlerinin Başkomutanlığını temsil eder (I). Cumhurbaşkanı, Türk Silahlı Kuvvetlerinin kullanılmasına karar verir (II). Ancak Savaş hâlinde Başkomutanlık görevini Millî Savunma Bakanı'na değil, atadığı Genelkurmay Başkanı'na devreder (III yanlış).",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: true },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Cumhurbaşkanınca atanan Genelkurmay Başkanı; Silahlı Kuvvetlerin komutanı olup, savaşta Başkomutanlık görevlerini aşağıdakilerden hangisinin adına yerine getirir?</b></p>",
    diff: 1,
    expl: "1982 Anayasası'nın 117. maddesine göre: Başkomutanlık, Türkiye Büyük Millet Meclisinin manevi varlığından alınan yetkiyle Cumhurbaşkanı tarafından temsil edilir. Silahlı Kuvvetlerin komutanı olan Genelkurmay Başkanı, savaşta Başkomutanlık görevlerini 'Cumhurbaşkanı adına' yerine getirir.",
    answers: [
      { text: "Türk Milleti", ok: false },
      { text: "Cumhurbaşkanı", ok: true },
      { text: "Türkiye Büyük Millet Meclisi", ok: false },
      { text: "Millî Savunma Bakanı", ok: false },
      { text: "TBMM Başkanı", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Cumhurbaşkanı yardımcıları ile ilgili aşağıda verilen ifadelerden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "Anayasa'ya göre Cumhurbaşkanı yardımcıları Cumhurbaşkanı tarafından atanır ve görevden alınır. Görevleriyle ilgili suçlardan dolayı Yüce Divanda yargılanabilirler. Milletvekili seçilmeleri hâlinde milletvekilliği sıfatları sona erer. Sayıları Anayasa'da sınırlanmamıştır. Ancak, Cumhurbaşkanı yardımcıları (ve bakanlar) TBMM'den güvenoyu alarak göreve başlamazlar. Bu parlamenter sistem uygulaması 2017 değişikliğiyle kaldırılmıştır, doğrudan Cumhurbaşkanına bağlıdırlar.",
    answers: [
      { text: "Cumhurbaşkanı tarafından atanır ve görevden alınır.", ok: false },
      { text: "Görevleriyle ilgili suçlardan dolayı Yüce Divanda yargılanabilirler.", ok: false },
      { text: "Milletvekili seçilmeleri hâlinde Cumhurbaşkanı yardımcılığı sıfatları sona erer.", ok: false },
      { text: "TBMM'den güvenoyu alarak göreve başlarlar.", ok: true },
      { text: "Sayıları Anayasa ile sınırlanmış değildir.", ok: false }
    ]
  }
];

// ============================================================================
// YÜRÜTME - TEST 5
// ============================================================================
export const VAT_YURUTME_TEST_5: McQ[] = [
  {
    text: "<p><b>1982 Anayasası'na göre, Genelkurmay Başkanı hakkında aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "Millî güvenliğin sağlanmasından ve Silahlı Kuvvetlerin yurt savunmasına hazırlanmasından, Türkiye Büyük Millet Meclisine karşı, Cumhurbaşkanı sorumludur. Genelkurmay Başkanı değil.",
    answers: [
      { text: "Silahlı Kuvvetlerin komutanıdır.", ok: false },
      { text: "Cumhurbaşkanı tarafından atanır.", ok: false },
      { text: "Silahlı Kuvvetlerin yurt savunmasına hazırlanmasından Meclise karşı sorumludur.", ok: true },
      { text: "Savaş hâlinde Cumhurbaşkanı adına Başkomutanlık görevini yürütür.", ok: false },
      { text: "Millî Güvenlik Kurulu üyesidir.", ok: false }
    ]
  },
  {
    text: "<p>Cumhurbaşkanı, yurt dışı ziyareti nedeniyle Millî Güvenlik Kurulu (MGK) toplantısına katılamayacağını bildirmiştir. Kurulun toplanması için gerekli işlemler tamamlanmış ve toplantı başlamıştır.<br><br><b>1982 Anayasası'na göre, Millî Güvenlik Kuruluna kim başkanlık edecektir?</b></p>",
    diff: 1,
    expl: "1982 Anayasası'nın 118. maddesine göre Millî Güvenlik Kurulu, Cumhurbaşkanı'nın başkanlığında toplanır. Ancak Cumhurbaşkanı'nın katılamadığı hâllerde, Kurula Cumhurbaşkanı Yardımcısı başkanlık eder.",
    answers: [
      { text: "Genelkurmay Başkanı", ok: false },
      { text: "Cumhurbaşkanı Yardımcısı", ok: true },
      { text: "Millî Savunma Bakanı", ok: false },
      { text: "TBMM Başkanı", ok: false },
      { text: "İçişleri Bakanı", ok: false }
    ]
  },
  {
    text: "<p>Millî Güvenlik Kurulunun gündemi; ---- ve ---- önerileri dikkate alınarak Cumhurbaşkanınca düzenlenir.<br><br><b>1982 Anayasası'na yukarıda bırakılan boşluklara sırasıyla hangileri gelmelidir?</b></p>",
    diff: 2,
    expl: "Millî Güvenlik Kurulunun gündemi; Cumhurbaşkanı yardımcıları ve Genelkurmay Başkanı'nın önerileri dikkate alınarak Cumhurbaşkanınca düzenlenir.",
    answers: [
      { text: "Millî Savunma Bakanı – Genelkurmay Başkanı", ok: false },
      { text: "İçişleri Bakanı – Millî Savunma Bakanı", ok: false },
      { text: "Cumhurbaşkanı Yardımcısı – Genelkurmay Başkanı", ok: true },
      { text: "İçişleri Bakanı – Genelkurmay Başkanı", ok: false },
      { text: "Cumhurbaşkanı Yardımcısı – Millî Savunma Bakanı", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Millî Güvenlik Kurulu tarafından alınan tavsiye kararlarının iletildiği makam aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Anayasa m.118/4'e göre: Millî Güvenlik Kurulu; devletin millî güvenlik siyasetinin tayini, tespiti ve uygulanması ile ilgili alınan tavsiye kararlarını Cumhurbaşkanı'na bildirir.",
    answers: [
      { text: "Türkiye Büyük Millet Meclisi", ok: false },
      { text: "Millî Savunma Bakanlığı", ok: false },
      { text: "Cumhurbaşkanlığı Savunma Politikaları Kurulu", ok: false },
      { text: "Cumhurbaşkanı", ok: true },
      { text: "Genelkurmay Başkanlığı", ok: false }
    ]
  },
  {
    text: "<p>Millî Güvenlik Kurulu Cumhurbaşkanı başkanlığında toplanmıştır. Diğer asıl üyeler ise aşağıda verilmiştir.<br><br>• Cumhurbaşkanı Yardımcıları<br>• Genelkurmay Başkanı<br>• ---- Bakanı<br>• Kara Kuvvetleri Komutanı<br>• ---- Bakanı<br>• Hava Kuvvetleri Komutanı<br>• ---- Bakanı<br>• Deniz Kuvvetleri Komutanı<br>• ---- Bakanı<br><br><b>1982 Anayasası'na göre, Millî Güvenlik Kurulu üyesi olan bakanlar için yukarıda boş bırakılan yerlere hangisi getirilemez?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'nın 118. maddesine göre Millî Güvenlik Kurulu (MGK); Cumhurbaşkanı başkanlığında, Cumhurbaşkanı Yardımcısı, Adalet Bakanı, Millî Savunma Bakanı, İçişleri Bakanı, Dışişleri Bakanı, Genelkurmay Başkanı, Kuvvet Komutanlarından oluşur. Hazine ve Maliye Bakanı bu üyeler arasında yer almaz.",
    answers: [
      { text: "Millî Savunma Bakanı", ok: false },
      { text: "Adalet Bakanı", ok: false },
      { text: "İçişleri Bakanı", ok: false },
      { text: "Hazine ve Maliye Bakanı", ok: true },
      { text: "Dışişleri Bakanı", ok: false }
    ]
  },
  {
    text: "<p>Cumhurbaşkanı'nın çağrısı ile olağanüstü toplantı nedeniyle eksiksiz olarak toplanan Millî Güvenlik Kuruluna gündemin özelliği gereği Kurul üyesi olmayan Sağlık Bakanı da katılıyor.<br><br><b>1982 Anayasası'na göre, Millî Güvenlik Kurulu toplantısına toplamda kaç bakan katılmıştır?</b></p>",
    diff: 3,
    expl: "Anayasa'ya göre MGK'ye katılan asıl bakan sayısı 4'tür (Millî Savunma, İçişleri, Dışişleri, Adalet). Soruda Kurul üyesi olmayan Sağlık Bakanı da gündemin özelliği gereği çağrıldığı belirtiliyor. Böylece: 4 asıl MGK bakanı + 1 Sağlık Bakanı (misafir) = toplamda 5 bakan katılmış olur.",
    answers: [
      { text: "5", ok: true },
      { text: "6", ok: false },
      { text: "7", ok: false },
      { text: "8", ok: false },
      { text: "10", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi Millî Güvenlik Kurulu toplantılarına katılır ancak oylamalara katılamaz?</b></p>",
    diff: 1,
    expl: "Millî Güvenlik Kurulu Genel Sekreteri toplantılara katılır, fakat oylamaya katılamaz.",
    answers: [
      { text: "Kara Kuvvetleri Komutanı", ok: false },
      { text: "Millî Güvenlik Kurulu Genel Sekreteri", ok: true },
      { text: "Cumhurbaşkanı", ok: false },
      { text: "Adalet Bakanı", ok: false },
      { text: "Millî Savunma Bakanı", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Millî Güvenlik Kurulu ile ilgili olarak aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "2017 Anayasa değişikliği ile Jandarma Genel Komutanı'nın Millî Güvenlik Kurulu üyeliğine son verilmiştir.",
    answers: [
      { text: "Kurul toplantılarına ilgili bakan ve kişiler çağrılıp görüşleri alınabilir.", ok: false },
      { text: "Cumhurbaşkanı başkanlığında toplanır.", ok: false },
      { text: "Gündemi Cumhurbaşkanınca düzenlenir.", ok: false },
      { text: "Devletin millî güvenlik siyasetinin tayini, tespiti ve uygulanması ile ilgili alınan tavsiye kararlarını Cumhurbaşkanı'na bildirir.", ok: false },
      { text: "Jandarma Genel Komutanı Kurul üyeleri arasındadır.", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, olağanüstü hâl aşağıdakilerden hangisi tarafından en çok kaç ayı geçmemek üzere ilan edilebilir?</b></p>",
    diff: 1,
    expl: "Cumhurbaşkanı; Anayasa'da belirtilen durumların ortaya çıkması hâllerinde yurdun tamamında veya bir bölgesinde, süresi 6 ayı geçmemek üzere olağanüstü hâl ilan edebilir.",
    answers: [
      { text: "Genelkurmay Başkanlığı - 4 ay", ok: false },
      { text: "Cumhurbaşkanı - 6 ay", ok: true },
      { text: "İçişleri Bakanı - 3 ay", ok: false },
      { text: "TBMM - 6 ay", ok: false },
      { text: "Millî Güvenlik Kurulu - 4 ay", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisi Cumhurbaşkanı'nın olağanüstü hâl etmesine neden olan durumlar arasında yer almaz?</b></p>",
    diff: 2,
    expl: "Siyasi partiler arasında çıkan görüş ayrılıklarının ülke geneline yayılması olağanüstü hâl (OHAL) ilan etme nedeni değildir. Savaş, ayaklanma, kalkışma, şiddet olaylarının yaygınlaşması, doğal afet, salgın hastalık veya ağır ekonomik bunalım gibi nedenlerle OHAL ilan edilebilir.",
    answers: [
      { text: "Anayasal düzene yönelik yaygın şiddet olaylarının ortaya çıkması", ok: false },
      { text: "Vatan ve Cumhuriyet'e karşı kuvvetli ve eylemli bir kalkışma yaşanması", ok: false },
      { text: "Siyasi partiler arasında çıkan görüş ayrılıklarının ülke geneline yayılması", ok: true },
      { text: "Doğal afetler veya tehlikeli salgın hastalıkların baş göstermesi", ok: false },
      { text: "Ağır ekonomik bunalım nedeniyle kamu düzeninin ciddi biçimde bozulması", ok: false }
    ]
  },
  {
    text: "<p>Cumhurbaşkanı'nın talebiyle olağanüstü hâl TBMM tarafından 4 ayı geçmemek üzere uzatılabilir.<br><br><b>1982 Anayasası'na göre, aşağıdakilerden hangisinin varlığı hâlinde 4 aylık süre aranmaz?</b></p>",
    diff: 1,
    expl: "1982 Anayasası'na göre olağanüstü hâl Cumhurbaşkanı'nın talebiyle her defasında 4 ayı geçmemek üzere TBMM tarafından uzatılabilir. Ancak SAVAŞ durumunda bu dört aylık süre aranmaz.",
    answers: [
      { text: "Olağanüstü hâl", ok: false },
      { text: "Yakın savaş tehlikesi", ok: false },
      { text: "Kamu düzeninin bozulması, şiddet olaylarının artması", ok: false },
      { text: "Savaş", ok: true },
      { text: "Doğal afet", ok: false }
    ]
  },
  {
    text: "<p>Cumhurbaşkanı tehlikeli salgın hastalık gerekçesiyle tüm yurtta 3 ay süreyle olağanüstü hâl ilan ediyor.<br><br><b>1982 Anayasası'na göre, olağanüstü hâl kapsamında, aşağıdaki işlemlerden hangisi yapılamaz?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'na göre, seçimler sadece 'savaş' nedeniyle bir yıl süreyle Türkiye Büyük Millet Meclisi tarafından ertelenebilir. Salgın hastalık veya diğer olağanüstü hâl nedenleri tek başına seçimlerin ertelenmesi için yeterli veya geçerli bir anayasal sebep değildir.",
    answers: [
      { text: "Toplantı ve gösteri yürüyüşleri yasaklanabilir.", ok: false },
      { text: "Bazı temel haklar geçici olarak durdurulabilir.", ok: false },
      { text: "Seçimler, olağanüstü hâl süresi boyunca ertelenebilir.", ok: true },
      { text: "Olağanüstü hâl kapsamında çıkarılan Cumhurbaşkanlığı kararnameleri TBMM onayına sunulmak zorundadır.", ok: false },
      { text: "TBMM, olağanüstü hâl ilanını tamamen kaldırabilir.", ok: false }
    ]
  },
  {
    text: "<p>Cumhurbaşkanı doğal afet nedeniyle A ilinde 5 ay süreyle olağanüstü hâl ilan ediyor. Olağanüstü hâl ilan kararı verildiği gün Resmî Gazete'de yayımlanıyor ve aynı gün Türkiye Büyük Millet Meclisinin onayına sunuluyor.<br><br><b>1982 Anayasası'na göre Türkiye Büyük Millet Meclisinin olağanüstü hâl ilanına ilişkin yetkileriyle ilgili;</b><br><br>I. TBMM, olağanüstü hâli onaylayabilir, süresini uzatabilir veya kaldırabilir.<br>II. TBMM, olağanüstü hâli onaylama yetkisine sahiptir, süresini değiştiremez.<br>III. TBMM, olağanüstü hâlin süresini her defasında dört ayı geçmemek üzere uzatabilir.<br><br><b>ifadelerinden hangileri doğrudur?</b></p>",
    diff: 3,
    expl: "Türkiye Büyük Millet Meclisi gerekli gördüğü takdirde olağanüstü hâlin süresini kısaltabilir, uzatabilir veya olağanüstü hâli kaldırabilir (I doğru, II yanlış). Cumhurbaşkanı'nın talebiyle Türkiye Büyük Millet Meclisi her defasında dört ayı geçmemek üzere süreyi uzatabilir (III doğru).",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve III", ok: true },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p>I. Vatandaşlara para, mal ve çalışma yükümlülüğü getirilebilir.<br>II. Cumhurbaşkanı olağanüstü hâlin gerekli kıldığı konularda kararname çıkarabilir.<br>III. Kolluk görev ve yetkisi askerî makamlara geçer.<br><br><b>1982 Anayasası'na göre, olağanüstü hâl yönetimi hakkında yukarıda verilen bilgilerden hangileri doğrudur?</b></p>",
    diff: 3,
    expl: "Olağanüstü hâllerde vatandaşlar için para, mal ve çalışma yükümlülükleri getirilebilir (I doğru). Cumhurbaşkanı olağanüstü hâlin gerekli kıldığı konularda CBK çıkarabilir (II doğru). Ancak 2017 Anayasa değişikliği ile sıkıyönetim kaldırılmıştır, dolayısıyla kolluk görev ve yetkisi her durumda (OHAL'de bile) sivil makamlarda kalır, askerî makamlara geçmez (III yanlış).",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: true },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false }
    ]
  },
  {
    text: "<p>A şehrinde yaşanan doğal afet nedeniyle bu ilde olağanüstü hâl ilan edilir.<br><br><b>1982 Anayasası'na göre, bu olay ile ilgili aşağıda verilen ifadelerden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'na göre, olağanüstü hâl yurdun bir ilinde, bir bölgesinde veya tamamında süresi 6 ayı aşmamak üzere Cumhurbaşkanınca ilan edilir. 'En fazla 3 ay süreyle ilan edilebilir' ifadesi yanlıştır.",
    answers: [
      { text: "Olağanüstü hâl ilan kararı Cumhurbaşkanınca alınmıştır.", ok: false },
      { text: "En fazla 3 ay süreyle ilan edilebilir.", ok: true },
      { text: "Olağanüstü hâl kararı Resmî Gazete'de yayımlandığı gün Meclisin onayına sunulur.", ok: false },
      { text: "Vatandaşlara para, mal ve çalışma yükümlülüğü getirilebilir.", ok: false },
      { text: "Meclis gerekli gördüğü takdirde olağanüstü hâlin süresini kısaltabilir, uzatabilir veya olağanüstü hali kaldırabilir.", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Cumhurbaşkanı'nın karar ve işlemlerinden;</b><br><br>I. olağanüstü hâl ilanı,<br>II. Cumhurbaşkanı yardımcısı ve bakan atama,<br>III. olağanüstü hâl Cumhurbaşkanı Kararnamesi<br><br><b>hangileri Türkiye Büyük Millet Meclisinin onayına sunulmak zorundadır?</b></p>",
    diff: 3,
    expl: "Olağanüstü hâl ilanı (I) ve Olağanüstü Hâl Cumhurbaşkanlığı Kararnamesi (III) çıkarıldıkları veya ilan edildikleri gün Türkiye Büyük Millet Meclisinin onayına sunulmak zorundadır. Ancak Cumhurbaşkanı yardımcıları ve bakan atama işlemleri (II) için TBMM onayı veya güvenoyuna tabi tutulma kuralı yoktur.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve III", ok: true },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  }
];