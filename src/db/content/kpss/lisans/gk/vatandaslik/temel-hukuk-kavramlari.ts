import type { McQ } from "../../../../types";

// ============================================================================
// TEMEL HUKUK KAVRAMLARI - TEST 1
// ============================================================================
export const VAT_TEMEL_HUKUK_TEST_1: McQ[] = [
  {
    text: "<p>Sosyal hayatı düzenleyen kurallar ve onlara ait yaptırımlar aşağıda verilmiştir:</p><ul><li>I. Ahlak kuralları – tazminat</li><li>II. Din kuralları – günahkâr sayılma</li><li>III. Hukuk kuralları – ceza</li><li>IV. Görgü kuralları – ayıplama</li></ul><p><b>Buna göre yaptırımı yanlış eşleştirilen kural yukarıdakilerden hangileridir?</b></p>",
    diff: 2,
    expl: "Ahlak kuralları bireyin vicdanına hitap eder ve yaptırımı tazminat değil, toplumsal dışlanma veya vicdani rahatsızlık gibi manevi sonuçlardır. Tazminat ise yalnızca hukuk kurallarının ihlali hâlinde gündeme gelir.",
    answers: [
      { text: "Yalnız I", ok: true },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve IV", ok: false },
      { text: "II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi hukukun temel amaçları arasında yer almaz?</b></p>",
    diff: 2,
    expl: "Hukukun temel amaçları arasında özgürlük, güvenlik, adalet ve toplumsal düzeni sağlamak yer alır. Ancak hukuk, bireyler arasında mutlak eşitliği değil hukuki eşitliği sağlamayı amaçlar. Mutlak eşitlik hukukun amaçladığı bir durum değildir.",
    answers: [
      { text: "Hukuk özgürlük sağlar.", ok: false },
      { text: "Hukuk güvenlik sağlar.", ok: false },
      { text: "Hukuk adaleti sağlar.", ok: false },
      { text: "Hukuk toplumsal düzeni sağlar.", ok: false },
      { text: "Hukuk mutlak eşitlik sağlar.", ok: true }
    ]
  },
  {
    text: "<p><b>Tazminat miktarında kişinin maddi durumunun göz önüne alınması aşağıdaki adalet türlerinden hangisine örnek olarak gösterilebilir?</b></p>",
    diff: 3,
    expl: "Dağıtıcı / Paylaştırıcı Adalet: Değerlerin dağıtılmasında, herkesin yeteneğine ve toplum içindeki durumuna göre pay almasıdır. Ceza veya tazminat miktarında kişinin maddi durumunun göz önüne alınması, verginin mali güce göre alınması dağıtıcı adalete örnektir.",
    answers: [
      { text: "Denkleştirici adalet", ok: false },
      { text: "Bozucu adalet", ok: false },
      { text: "Değiştirici adalet", ok: false },
      { text: "Paylaştırıcı adalet", ok: true },
      { text: "Düzeltici adalet", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi hukukta müeyyide çeşitleri arasında yer almaz?</b></p>",
    diff: 2,
    expl: "Müeyyide (yaptırım), hukuk kurallarına aykırı davranıldığında karşılaşılan hukuki sonuçlardır (Tazminat, iptal, cebri icra, hapis, geçersizlik). Ancak kıyas, bir yaptırım değil; hukuk boşluğu durumunda benzer kurallardan hareketle hüküm üretme yöntemidir.",
    answers: [
      { text: "Tazminat", ok: false },
      { text: "İptal", ok: false },
      { text: "Hapis cezası", ok: false },
      { text: "Kıyas", ok: true },
      { text: "Geçersizlik", ok: false }
    ]
  },
  {
    text: "<p><b>Bir hukuki işlemin hiç olmamış ya da yapılmamış gibi kabul edilmesi hâli için kullanılan ifade aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Keenlemyekün Arapça kökenli bir terim olup kelime anlamı olarak 'hiç olmamış gibi' demektir. Hukukta, bir işlemin kurucu unsurlarının eksik olması hâlinde o işlem yok hükmünde sayılır ve hiç doğmamış kabul edilir.",
    answers: [
      { text: "Mutlak butlan", ok: false },
      { text: "Keenlemyekün", ok: true },
      { text: "Galatı meşhur", ok: false },
      { text: "Hükmü asıl", ok: false },
      { text: "Nispi butlan", ok: false }
    ]
  },
  {
    text: "<p>Bir kamu kurumunda görevli memura, herhangi bir haklı neden olmaksızın aylıktan kesme disiplin cezası verilir. Memur, bu işlemin geçmişe etkili biçimde ortadan kaldırılmasını talep eder.</p><p><b>Bu durumda memurun başvuracağı yaptırım ve davanın görüleceği yargı kolu aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "İdari işlemlerin hukuka aykırılığı sebebiyle açılan davalarda idari yargı mercileri tarafından verilen karar, işlemi geriye etkili olarak ortadan kaldırır. Bu yaptırımın adı iptaldir.",
    answers: [
      { text: "Geri alma – idari yargı", ok: false },
      { text: "Tazminat – Anayasa yargısı", ok: false },
      { text: "Cebri icra – adli yargı", ok: false },
      { text: "Mutlak butlan – adli yargı", ok: false },
      { text: "İptal – idari yargı", ok: true }
    ]
  },
  {
    text: "<p><b>Türk Borçlar Kanunu'na göre aşağıdakilerden hangisi bir sözleşmede nispi butlan (iptal edilebilirlik) sebebi değildir?</b></p>",
    diff: 2,
    expl: "Korkutma (ikrah), aşırı yararlanma (gabin), hata ve hile irade bozuklukları olup sözleşmeyi nispi butlanla sakatlar. Karşılıklı muvazaa (tarafların gerçek iradelerini gizleyip görünüşte işlem yapmaları) ise mutlak butlan (kesin hükümsüzlük) sebebidir.",
    answers: [
      { text: "Korkutma (ikrah)", ok: false },
      { text: "Aşırı yararlanma (gabin)", ok: false },
      { text: "Hata", ok: false },
      { text: "Hile", ok: false },
      { text: "Muvazaa", ok: true }
    ]
  },
  {
    text: "<p>Türk hukukunda;</p><ul><li>imam nikâhı ile yapılan evlilik,</li><li>16 yaşındaki bir çocuğun velisinin onayı olmadan bilgisayar satın alması,</li><li>bir kimsenin isim benzerliği nedeniyle yanlış kişiyle sözleşme yapması</li></ul><p><b>verilen işlemlere uygulanacak yaptırımlar sırasıyla hangisinde doğru verilmiştir?</b></p>",
    diff: 3,
    expl: "İmam nikâhı şekil kurallarına aykırıdır, 'yokluk' yaptırımına tabidir. 16 yaşındaki çocuğun işlemi 'tek taraflı bağlamazlık' ile sakattır. Yanlış kişiyle yapılan sözleşme ise irade sakatlığı (hata) sebebiyle 'nispi butlan' yaptırımına tabidir.",
    answers: [
      { text: "yokluk, mutlak butlan, nispi butlan", ok: false },
      { text: "yokluk, tek taraflı bağlamazlık, nispi butlan", ok: true },
      { text: "yokluk, nispi butlan, tek taraflı bağlamazlık", ok: false },
      { text: "mutlak butlan, tek taraflı bağlamazlık, nispi butlan", ok: false },
      { text: "mutlak butlan, nispi butlan, tek taraflı bağlamazlık", ok: false }
    ]
  },
  {
    text: "<p>Aşağıda bazı hukuki durumlar verilmiştir:</p><ul><li>Bir kişi, hukuka aykırı davranarak diğer tarafa zarar verir.</li><li>Suç işleyen bir kişi hakkında mahkeme hüküm verir.</li><li>Borcunu rızasıyla ödemeyen kişiye karşı ilamlı takip başlatılır.</li></ul><p><b>Bu işlemlere uygulanacak yaptırımlar sırasıyla aşağıdakilerden hangisinde doğru verilmiştir?</b></p>",
    diff: 2,
    expl: "Hukuka aykırılıkla zarar verilmesi 'tazminat', suç işlenmesi 'ceza', borcunu ödemeyene zorla tahsil süreci ise 'cebri icra' yaptırımına tabidir.",
    answers: [
      { text: "cebri icra – ceza – tazminat", ok: false },
      { text: "ceza – tazminat – cebri icra", ok: false },
      { text: "tazminat – ceza – cebri icra", ok: true },
      { text: "ceza – cebri icra – tazminat", ok: false },
      { text: "tazminat – cebri icra – ceza", ok: false }
    ]
  },
  {
    text: "<p>Bir sözleşmenin geçerli olabilmesi için aşağıdaki unsurların sağlanması gerekir:</p><ul><li>Tarafların sözleşme yapma ehliyetine sahip olması,</li><li>Sözleşmenin emredici hükümlere, kişiliğe, ahlaka ve kamu düzenine uygun olması,</li><li>Sözleşme konusunun mümkün ve belirli olması</li></ul><p><b>Buna göre yukarıdaki unsurlara aykırı olan bir sözleşme aşağıdaki yaptırımlardan hangisine tabi olur?</b></p>",
    diff: 2,
    expl: "Ehliyetsizlik, emredici hükümlere, ahlaka ve adaba aykırılık ile konunun imkansız olması durumları sözleşmeyi baştan itibaren geçersiz kılar. Bu yaptırım türü mutlak butlan (kesin hükümsüzlük) olarak adlandırılır.",
    answers: [
      { text: "Kesin hükümsüzlük", ok: true },
      { text: "İptal edilebilirlik", ok: false },
      { text: "Ceza", ok: false },
      { text: "Yokluk", ok: false },
      { text: "Tazminat", ok: false }
    ]
  },
  {
    text: "<p>Türk hukukuna göre</p><ul><li>A'nın antika diye B'ye sattığı vazonun sahte çıkması,</li><li>C'nin Mars'ta olduğunu iddia ettiği arsayı D'ye satması</li></ul><p><b>işlemlerinin hukukta karşılaşacağı yaptırımlar sırasıyla aşağıdakilerden hangisinde doğru verilmiştir?</b></p>",
    diff: 3,
    expl: "Sahte vazo satışı, irade sakatlığı (hata/hile) oluşturduğu için 'nispi butlan' ile iptal edilebilir. Mars'ta arsa satışı ise konusu baştan itibaren fiziksel olarak imkansız olduğundan kesin hükümsüz (mutlak butlan) yaptırımıyla geçersizdir.",
    answers: [
      { text: "mutlak butlan – nispi butlan", ok: false },
      { text: "nispi butlan – yokluk", ok: false },
      { text: "mutlak butlan – tek taraflı bağlamazlık", ok: false },
      { text: "nispi butlan – mutlak butlan", ok: true },
      { text: "tek taraflı bağlamazlık – yokluk", ok: false }
    ]
  },
  {
    text: "<p>Mustafa, beyaz eşya dükkânı olan Arda ile bir çamaşır makinesi satışı hususunda anlaşır.</p><p><b>Buna göre Mustafa, çamaşır makinesini teslim almasına rağmen satış bedelini kararlaştırılan zamanda ve şekilde ödememişse aşağıdaki müeyyidelerden hangisi ile karşılaşabilir?</b></p>",
    diff: 2,
    expl: "Borcun rızayla ödenmemesi durumunda alacaklının mahkemeye başvurarak veya ilamsız takip yoluyla devlet eliyle zorla tahsilini sağlamasına 'cebri icra' denir.",
    answers: [
      { text: "El koyma", ok: false },
      { text: "İdari para cezası", ok: false },
      { text: "Hapis cezası", ok: false },
      { text: "Adli para cezası", ok: false },
      { text: "Cebri icra", ok: true }
    ]
  },
  {
    text: "<p>Türk hukukuna göre</p><ul><li>Bir sözleşmede karşılıklı edimler arasında açık oransızlık, zarar görenin zor durumda kalmasından veya deneyimsizliğinden kaynaklanır.</li><li>Taraflar, üçüncü kişileri aldatmak amacıyla kendi aralarında hüküm doğurmayan görünüşte bir işlem yapma konusunda anlaşır.</li></ul><p><b>verilen tanımlar sırasıyla aşağıdaki kavramlardan hangisini açıklar?</b></p>",
    diff: 3,
    expl: "İlk ifade edimler arası aşırı dengesizliği anlatan gabin (aşırı yararlanma) kavramıdır. İkinci ifade ise tarafların gerçekte sözleşme yapma iradeleri olmamasına rağmen üçüncü kişileri aldatmak için yapılan muvazaa işlemidir.",
    answers: [
      { text: "muvazaa – gabin", ok: false },
      { text: "gabin – aldatma", ok: false },
      { text: "gabin – muvazaa", ok: true },
      { text: "hile – gabin", ok: false },
      { text: "gabin – haksız fiil", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisinin yaptırımı idari işlemde iptal olamaz?</b></p>",
    diff: 3,
    expl: "İdari işlemler yetki, şekil, sebep, konu veya amaç yönünden hukuka aykırıysa iptal davasına konu olabilir. Ancak trafik kazasında kusurlu sürücünün sebep olduğu zarar bir idari işlem değil, 'haksız fiil' niteliğindedir. Bu durumda adli yargıda tazminat davası açılır.",
    answers: [
      { text: "Yetkisiz bir makam tarafından yapılan memur ataması", ok: false },
      { text: "Şekil şartlarına uyulmadan verilen bir disiplin cezası", ok: false },
      { text: "Trafik kazasında kusurlu bir sürücünün sebep olduğu zarar", ok: true },
      { text: "Sebepsiz yere bir öğretmene disiplin cezası verilmesi", ok: false },
      { text: "Belediyenin, kamu yararına aykırı şekilde bir araziyi kamulaştırması", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi 5237 sayılı Türk Ceza Kanunu'nda yer alan ceza türlerinden biri değildir?</b></p>",
    diff: 2,
    expl: "Ölüm cezası ve genel müsadere cezası 2004 Anayasa değişikliği ile hukukumuzdan çıkarılmıştır. TCK'ya göre hapis cezaları; süreli hapis, müebbet hapis ve ağırlaştırılmış müebbet hapistir.",
    answers: [
      { text: "Süreli hapis cezası", ok: false },
      { text: "Ağırlaştırılmış müebbet hapis cezası", ok: false },
      { text: "Kısa süreli hapis cezası", ok: false },
      { text: "Müebbet hapis cezası", ok: false },
      { text: "Genel müsadere cezası", ok: true }
    ]
  }
];

// ============================================================================
// TEMEL HUKUK KAVRAMLARI - TEST 2
// ============================================================================
export const VAT_TEMEL_HUKUK_TEST_2: McQ[] = [
  {
    text: "<p><b>5237 sayılı Türk Ceza Kanunu'na göre, aşağıdakilerden hangisi kısa süreli hapis cezası olarak kabul edilir?</b></p>",
    diff: 2,
    expl: "Türk Ceza Kanunu'nun 49. maddesine göre, 1 yıl veya daha az süreli hapis cezaları 'kısa süreli hapis cezası' olarak tanımlanır.",
    answers: [
      { text: "En fazla 6 ay süreli hapis cezaları", ok: false },
      { text: "1 yıl ile 2 yıl arası hapis cezaları", ok: false },
      { text: "En fazla 1 yıl olan hapis cezaları", ok: true },
      { text: "En az 2 yıl olan hapis cezaları", ok: false },
      { text: "En fazla 5 yıl olan hapis cezaları", ok: false }
    ]
  },
  {
    text: "<p>Meltem ile Osman resmî nikâh memuru önünde evlenmişlerdir.</p><p><b>4721 sayılı Türk Medeni Kanunu'na göre, aşağıdakilerden hangisi bu evliliğin mutlak butlan ile kesin hükümsüz sayılmasına neden olmaz?</b></p>",
    diff: 3,
    expl: "Evlenmenin kesin hükümsüzlüğüne (mutlak butlan) neden olan sebepler; akıl hastalığı, mevcut evlilik ve yakın hısımlıktır. Ancak bulaşıcı hastalığını gizlemek, aldatma kapsamında yer aldığı için nispi butlan sebebidir.",
    answers: [
      { text: "Osman'ın mevcut evliliğinin sona ermemiş olması", ok: false },
      { text: "Meltem'in akıl hastası olması", ok: false },
      { text: "Osman'ın, Meltem'in amcası olması", ok: false },
      { text: "Meltem'in bulaşıcı hastalığını Osman'dan gizlemesi", ok: true },
      { text: "Osman ile Meltem arasında evlatlık ilişkisinin olması", ok: false }
    ]
  },
  {
    text: "<p><ul><li>Belirli bir ülkede yürürlükte bulunan yazılı ve yazısız bütün hukuk kurallarıdır.</li><li>Olan değil, olması gereken hukuk kurallarıdır.</li><li>Yetkili makamlar tarafından konulan ve yürürlükte olan bütün hukuk kurallarıdır.</li></ul></p><p><b>Bu tanımlar sırasıyla hangi hukuk türlerine aittir?</b></p>",
    diff: 2,
    expl: "Yürürlükte bulunan tüm yazılı ve yazısız hukuk 'Pozitif hukuk'tur. Olan değil, olması gereken ideal hukuk 'Doğal hukuk'tur. Yetkili makamlar tarafından konulmuş salt yazılı kurallar ise 'Mevzu hukuk'tur.",
    answers: [
      { text: "pozitif hukuk – doğal hukuk – mevzu hukuk", ok: true },
      { text: "mevzu hukuk – doğal hukuk – pozitif hukuk", ok: false },
      { text: "doğal hukuk – pozitif hukuk – mevzu hukuk", ok: false },
      { text: "pozitif hukuk – mevzu hukuk – doğal hukuk", ok: false },
      { text: "doğal hukuk – mevzu hukuk – pozitif hukuk", ok: false }
    ]
  },
  {
    text: "<p><b>4721 sayılı Türk Medeni Kanun m. 1'e göre, bir hukuki uyuşmazlığın çözümünde;</b><br/><br/>I. kanun,<br/>II. hâkimin oluşturduğu hukuk,<br/>III. örf ve âdet hukuku<br/><br/><b>ifadelerini hangi sırayla uygulamalıdır?</b></p>",
    diff: 2,
    expl: "Hakim uyuşmazlığın çözümünde öncelikle yazılı kaynaklara (Kanun) bakar. Kanunda hüküm yoksa yazısız kaynaklara (Örf ve âdet hukuku) başvurur. Orada da hüküm yoksa hakim kendisi kural koyarak hukuk yaratır.",
    answers: [
      { text: "I - II - III", ok: false },
      { text: "II - I - III", ok: false },
      { text: "III - II - I", ok: false },
      { text: "I - III - II", ok: true },
      { text: "II - III - I", ok: false }
    ]
  },
  {
    text: "<p>4721 sayılı Türk Medeni Kanunu m. 1'e göre, <i>\"Kanunda hüküm bulunmayan hâllerde hâkim önce ---- hukukuna başvurur, bu da yoksa ---- gibi kural koyar; karar verirken ---- ve yargı kararlarından da yararlanır.\"</i></p><p><b>Yukarıda bırakılan boşluklara sırasıyla hangisi getirilmelidir?</b></p>",
    diff: 2,
    expl: "TMK Madde 1'e göre: Kanunda hüküm bulunmayan hâllerde hâkim örf ve âdet hukukuna göre karar verir. Bu da yoksa kendisi kanun koyucu olsaydı nasıl bir kural koyacaksa ona göre karar verir. Karar verirken bilimsel görüşlerden (doktrin) yararlanır.",
    answers: [
      { text: "içtihat – bilim insanı – örf ve âdet", ok: false },
      { text: "Anayasa – mahkeme – bilirkişi", ok: false },
      { text: "örf ve âdet – kanun koyucu – bilimsel görüş", ok: true },
      { text: "yönetmelik – öğreti – içtihat", ok: false },
      { text: "doktrin – kanun koyucu – bilimsel görüş", ok: false }
    ]
  },
  {
    text: "<p>Adalet Meslek Yüksekokulunda yapılan Hukuka Giriş dersi sınavında, \"Kanunla eş değer hukuk normları nelerdir?\" sorusu sorulmuştur. Öğrencilerden bazıları şu cevapları vermiştir:<br/><br/><b>Ayşegül:</b> \"Yönetmelik ve Genelge\"<br/><b>Aydın:</b> \"Cumhurbaşkanı Kararnamesi ve Yönetmelik\"<br/><b>Mercan:</b> \"Anayasa ve Cumhurbaşkanı Kararnamesi\"<br/><b>Mete:</b> \"Milletlerarası Antlaşmalar ve Olağanüstü Hâl Cumhurbaşkanı Kararnameleri\"<br/><b>Hatice:</b> \"Anayasa ve Olağanüstü Hâl Cumhurbaşkanı Kararnameleri\"</p><p><b>Bu cevaplardan hangisi doğrudur?</b></p>",
    diff: 3,
    expl: "Normlar hiyerarşisinde 'kanunla eşdeğer' olan düzenleyici işlemler; Milletlerarası Antlaşmalar (Anayasa m.90) ve Olağanüstü Hâl Cumhurbaşkanlığı Kararnameleri (OHAL CBK)'dir. Normal CBK'lar kanunun altındadır, Anayasa ise en üsttedir.",
    answers: [
      { text: "Ayşegül", ok: false },
      { text: "Aydın", ok: false },
      { text: "Mercan", ok: false },
      { text: "Mete", ok: true },
      { text: "Hatice", ok: false }
    ]
  },
  {
    text: "<p>Ülkemizde hâlen yürürlükte olan bazı hukuk kurallarını çıkarma yetkisi 9.7.2018 tarihi itibarıyla sona ermiştir diyen bir kimse bu düşüncesine;<br/><br/>I. tüzük,<br/>II. Kanun hükmünde kararname,<br/>III. yönetmelik,<br/>IV. Cumhurbaşkanı Kararnamesi<br/><br/><b>verilen hukuk kurallarından hangilerini örnek olarak verebilir?</b></p>",
    diff: 3,
    expl: "Cumhurbaşkanlığı Hükümet Sistemi'ne geçiş (2018) ile birlikte Tüzük ve Kanun Hükmünde Kararname (KHK) çıkarma yetkisi hukuk sistemimizden çıkarılmıştır.",
    answers: [
      { text: "I ve II", ok: true },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "II ve IV", ok: false },
      { text: "I, II ve IV", ok: false }
    ]
  },
  {
    text: "<p>Vatandaşlık dersini videodan takip eden Ahmet, hukukun kaynakları ile ilgili aşağıdaki notları alıyor.<br/><b>Asli Kaynaklar</b><br/>a) Yazılı Kaynaklar: Anayasa, Milletlerarası antlaşma, Kanun, Cumhurbaşkanı Kararnamesi<br/>b) Yazısız Kaynaklar: Örf ve âdet hukuku<br/><b>Yardımcı Kaynaklar</b><br/>Doktrin, Yönetmelik</p><p><b>Buna göre Ahmet, hukukun kaynaklarından hangisini yanlış yere yazmıştır?</b></p>",
    diff: 2,
    expl: "Yönetmelikler asli (bağlayıcı) kaynaklar olan yazılı kaynaklar arasında yer alır. Yardımcı kaynaklar ise yalnızca doktrin (bilimsel görüşler) ve içtihatlardan (mahkeme kararları) oluşur.",
    answers: [
      { text: "Kanun", ok: false },
      { text: "Örf ve âdet hukuku", ok: false },
      { text: "Anayasa", ok: false },
      { text: "Yönetmelik", ok: true },
      { text: "Doktrin", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi, hukukun yardımcı kaynakları arasında yer almaz?</b></p>",
    diff: 3,
    expl: "Bilimsel görüşler (doktrin) ve ilk derece mahkemelerinin kararları (içtihat) yardımcı kaynaktır ve bağlayıcı değildir. Ancak Yargıtay Büyük Genel Kurulunun verdiği 'İçtihadı Birleştirme Kararları' ilgili tüm mahkemeler için kesin bağlayıcıdır, yardımcı kaynak sayılamaz.",
    answers: [
      { text: "İstanbul İş Mahkemesi hâkiminin verdiği bir işe iade kararı", ok: false },
      { text: "Prof. Dr. Y'nin yazdığı \"Borçlar Hukukunda Hata\" adlı kitap", ok: false },
      { text: "Ankara Bölge Adliye Mahkemesinin verdiği emsal karar", ok: false },
      { text: "\"İdare Hukuku'nda Yetki Teorisi\" başlıklı doktora tezi", ok: false },
      { text: "Yargıtay Büyük Genel Kurulunun verdiği içtihadı birleştirme kararı", ok: true }
    ]
  },
  {
    text: "<p><b>Türk hukukunda normlar hiyerarşisine göre,</b><br/><br/>I. kanun,<br/>II. temel hak ve özgürlüklere ilişkin milletlerarası antlaşmalar,<br/>III. Cumhurbaşkanı kararnameleri<br/><br/><b>verilen normların büyükten küçüğe sıralaması hangisinde doğru verilmiştir?</b></p>",
    diff: 3,
    expl: "Anayasa madde 90'a göre, temel hak ve özgürlüklere ilişkin milletlerarası antlaşmalar kanunlarla çelişirse antlaşma hükümleri üstün tutulur. Bu yüzden sıralama: Temel hak antlaşması > Kanun > Cumhurbaşkanlığı Kararnamesi şeklinde olmalıdır.",
    answers: [
      { text: "I - II - III", ok: false },
      { text: "I - III - II", ok: false },
      { text: "II - III - I", ok: false },
      { text: "II - I - III", ok: true },
      { text: "III - I - II", ok: false }
    ]
  },
  {
    text: "<p><b>---- hukuk kuralları kamu düzenini, genel ahlakı ve zayıfları korumak üzere çıkarılır. Bu tür hukuk kurallarının aksi kararlaştırılamaz.</b></p><p><b>Yukarıdaki cümlede boş bırakılan yere hangisi getirilmelidir?</b></p>",
    diff: 2,
    expl: "Tarafların kendi iradeleriyle aksi yönünde bir anlaşma yapamadıkları, kamu düzenini koruma amaçlı kesin bağlayıcı kurallara 'emredici hukuk kuralları' denir.",
    answers: [
      { text: "Tamamlayıcı", ok: false },
      { text: "Yorumlayıcı", ok: false },
      { text: "Yetki verici", ok: false },
      { text: "Emredici", ok: true },
      { text: "Tanımlayıcı", ok: false }
    ]
  },
  {
    text: "<p>I. Kayın hısımlığı, kendisini meydana getiren evliliğin sona ermesiyle ortadan kalkmaz.<br/>II. Borcun ifası için gün belirtilmeksizin sadece ay belirlenmişse, bundan o ayın son günü anlaşılır.<br/>III. Sözleşme ile aksi kararlaştırılmadıkça satıcı ve alıcı borçlarını aynı anda ifa etmekle yükümlüdürler.</p><p><b>Yukarıda verilen hukuk kurallarının nitelikleri sırasıyla hangisinde doğru verilmiştir?</b></p>",
    diff: 3,
    expl: "I. cümlede tarafların iradesine bakılmaksızın uygulanan 'emredici' bir kural vardır. II. cümlede belirsizliği gidermek için kullanılan 'yorumlayıcı' kural bulunur. III. cümlede ise aksi kararlaştırılabildiği için 'tamamlayıcı' bir hukuk kuralı yer almaktadır.",
    answers: [
      { text: "I. emredici, II. yorumlayıcı – III. tamamlayıcı", ok: true },
      { text: "I. tamamlayıcı – II. emredici – III. yorumlayıcı", ok: false },
      { text: "I. yorumlayıcı – II. tamamlayıcı – III. emredici", ok: false },
      { text: "I. tamamlayıcı – II. yorumlayıcı – III. emredici", ok: false },
      { text: "I. emredici – II. tamamlayıcı – III. yorumlayıcı", ok: false }
    ]
  },
  {
    text: "<p>6098 sayılı Türk Borçlar Kanunu m. 299'da belirtilen <i>\"Kira sözleşmesi, kiraya verenin bir şeyin kullanılmasını veya kullanmayla birlikte ondan yararlanılmasını kiracıya bırakmayı, kiracının da buna karşılık kararlaştırılan kira bedelini ödemeyi üstlendiği sözleşmedir\"</i>. <b>ifadesi hangi hukuk kuralına örnektir?</b></p>",
    diff: 2,
    expl: "Bir hukuki kavramın neleri kapsadığını ve sınırlarının neler olduğunu açıklayan ve anlamlandıran kurallar 'tanımlayıcı hukuk kuralları'dır.",
    answers: [
      { text: "Tamamlayıcı", ok: false },
      { text: "Emredici", ok: false },
      { text: "Tanımlayıcı", ok: true },
      { text: "Yorumlayıcı", ok: false },
      { text: "Yetki verici", ok: false }
    ]
  },
  {
    text: "<p><b>4721 sayılı Türk Medeni Kanunu'na göre, durumun gereklerini ya da haklı sebepleri göz önünde tutmayı emrettiği konularda hâkimin, hukuka ve hakkaniyete göre karar vermesi aşağıdakilerden hangisiyle ifade edilir?</b></p>",
    diff: 2,
    expl: "Hâkime kanun tarafından somut olayın özelliklerine, durumun haklı sebeplerine göre adalete uygun karar verme yetkisi tanınmasına 'takdir yetkisi' adı verilir.",
    answers: [
      { text: "İyi niyet", ok: false },
      { text: "Takdir yetkisi", ok: true },
      { text: "Dürüstlük", ok: false },
      { text: "Hukuk yaratma", ok: false },
      { text: "Kıyas", ok: false }
    ]
  }
];

// ============================================================================
// TEMEL HUKUK KAVRAMLARI - TEST 3
// ============================================================================
export const VAT_TEMEL_HUKUK_TEST_3: McQ[] = [
  {
    text: "<p>4721 sayılı Türk Medeni Kanunu m.1'e göre, kanun, sözüyle ve özüyle değindiği bütün konularda uygulanır. Kanunda uygulanabilir bir hüküm yoksa hâkim, örf ve âdet hukukuna göre karar verir.</p><p><b>Bu da yoksa hâkim aşağıdakilerden hangisini yapar?</b></p>",
    diff: 2,
    expl: "TMK m.1'e göre; somut bir uyuşmazlığa uygulanacak ne mevcut kanunlarda bir hüküm ne de örf ve âdet hukukunda bir düzenleme bulunmuyorsa (hukuk boşluğu varsa), hâkim kendisi kanun koyucu olsaydı nasıl bir kural koyacaksa ona göre karar verir. Yani hâkim hukuk yaratır.",
    answers: [
      { text: "Kanun yaratır.", ok: false },
      { text: "Takdir yetkisini kullanır.", ok: false },
      { text: "Davayı sonlandırır.", ok: false },
      { text: "Hukuk yaratır.", ok: true },
      { text: "Davayı istinafa gönderir.", ok: false }
    ]
  },
  {
    text: "<p><b>Belli bir konuda, kanun tarafından mutlaka düzenlenmesi gereken olumlu veya olumsuz bir hükmün kanunda bulunmaması ve yorum yoluyla da kanundan bu konuya ilişkin bir hükmün çıkarılmaması hâlinde, aşağıdaki durumlardan hangisi söz konusu olur?</b></p>",
    diff: 2,
    expl: "Açık (diğer adıyla gerçek) boşluk, bir konuda kanun koyucunun hüküm koymayı unuttuğu veya atladığı durumlarda ortaya çıkar. Ortada düzenlenmesi gereken bir hukuki durum vardır ancak kanunda hiçbir hüküm bulunmaz.",
    answers: [
      { text: "Gerçek kanun boşluğu", ok: true },
      { text: "Örtülü boşluk", ok: false },
      { text: "Gerçek hukuk boşluğu", ok: false },
      { text: "Hukuk boşluğu", ok: false },
      { text: "Kural içi boşluk", ok: false }
    ]
  },
  {
    text: "<p><b>Somut bir uyuşmazlığa uygulanacak yazılı ya da yazılı olmayan bir hukuk kuralının bulunmaması durumuna ne ad verilir?</b></p>",
    diff: 2,
    expl: "Somut olaya uygulanacak yazılı (kanun vb.) ve yazısız (örf ve âdet) hukuk kurallarının hiçbirinin bulunmamasına 'hukuk boşluğu' denir. Bu durumda hâkim hukuk yaratır.",
    answers: [
      { text: "Örtülü boşluk", ok: false },
      { text: "Açık boşluk", ok: false },
      { text: "Hukuk boşluğu", ok: true },
      { text: "Yorum boşluğu", ok: false },
      { text: "Kural içi boşluk", ok: false }
    ]
  },
  {
    text: "<p>6098 sayılı Türk Borçlar Kanunu m. 59'da düzenlenen <i>\"Hâkim olayın özelliklerine ve kusurun ağırlığına göre tazminatın şeklini ve miktarını belirler\"</i>. <b>hükmüyle hâkime takdir yetkisi tanınması aşağıdaki boşluklardan hangisi için geçerlidir?</b></p>",
    diff: 3,
    expl: "Kanun koyucunun, bilerek ve isteyerek bıraktığı; çözümünü hâkimin takdir yetkisine (durumun gerekleri ve hakkaniyete göre belirlemesine) bıraktığı boşluk türüne 'kural içi boşluk' denir.",
    answers: [
      { text: "Gerçek boşluk", ok: false },
      { text: "Kural içi boşluk", ok: true },
      { text: "Örtülü boşluk", ok: false },
      { text: "Hukuk boşluğu", ok: false },
      { text: "Açık boşluk", ok: false }
    ]
  },
  {
    text: "<p><b>Kanunda bir hüküm bulunmakla birlikte, bu hükmün bazı durumlarda adaletsiz sonuçlara yol açması sebebiyle uygulanamayacak olması aşağıdaki boşluk türlerinden hangisini ifade eder?</b></p>",
    diff: 3,
    expl: "Örtülü boşluk, kanunda bir düzenleme olmasına rağmen, bu düzenlemenin tüm olaylara uygulanamayacak kadar katı ya da hakkaniyetsiz sonuçlar doğurduğu durumlarda ortaya çıkar. Hâkim bu durumlarda hükmü daraltarak yorumlar.",
    answers: [
      { text: "Açık boşluk", ok: false },
      { text: "Bilinçli boşluk", ok: false },
      { text: "Örtülü boşluk", ok: true },
      { text: "Kural içi boşluk", ok: false },
      { text: "Gerçek hukuk boşluğu", ok: false }
    ]
  },
  {
    text: "<p><ul><li>Kanun, belirli bir konuda \"hakkaniyete uygun olarak karar verileceğini\" söylemektedir.</li><li>Ayırt etme gücüne sahip olmayan kişi, yaptığı geçersiz iş sözleşmesi gereği çalıştığı işverenden ücretini istemektedir.</li><li>Yapay zekâ varlıklarının mal varlığı edinmesine ilişkin hiçbir düzenleme kanunda yer almamaktadır.</li></ul></p><p><b>Yukarıda verilen olaylar sırasıyla hangi boşluk türlerini ifade etmektedir?</b></p>",
    diff: 3,
    expl: "Birinci olayda hâkime takdir yetkisi verilmiştir (Kural içi boşluk). İkinci olayda kanundaki katı hüküm adalet hislerini zedeleyeceği için daraltılır (Örtülü boşluk). Üçüncü olayda ise yapay zeka ile ilgili kanunda hiçbir hüküm yoktur (Açık/Gerçek kanun boşluğu).",
    answers: [
      { text: "açık – örtülü – kural içi", ok: false },
      { text: "kural içi – örtülü – açık", ok: true },
      { text: "örtülü – kural içi – açık", ok: false },
      { text: "kural içi – açık – örtülü", ok: false },
      { text: "örtülü – açık – kural içi", ok: false }
    ]
  },
  {
    text: "<p>Bir öğrenci, Medeni Hukuk dersinde <i>\"kanun koyucunun gerek gördüğü takdirde, yürürlükteki kanunun anlamını açıklayıcı ve bağlayıcı biçimde yorum yapabileceğini\"</i> söylemiştir. Ancak ders hocası, bu yorum türünün 1924 Anayasası Dönemi'nde uygulandığını ancak artık uygulanmadığını belirtmiştir.</p><p><b>Bu açıklamalar, aşağıdaki yorum türlerinden hangisine ilişkindir?</b></p>",
    diff: 2,
    expl: "Yasama organı (Meclis) tarafından kanunun anlamını açıklamak için yapılan bağlayıcı yoruma 'Yasama yorumu' denir. 1924 Anayasası'nda uygulanmış, ancak 1961'den itibaren hukukumuzdan çıkarılmıştır.",
    answers: [
      { text: "Amaçsal yorum", ok: false },
      { text: "Doktrinel yorum", ok: false },
      { text: "Yargısal yorum", ok: false },
      { text: "Yasama yorumu", ok: true },
      { text: "Lafzî yorum", ok: false }
    ]
  },
  {
    text: "<p><b>4721 sayılı Türk Medeni Kanunu'nu oluşturan kitaplar arasında aşağıdakilerden hangisi yer almaz?</b></p>",
    diff: 2,
    expl: "Türk Medeni Kanunu (TMK); Başlangıç hükümleri ile başlar. Kitapları sırasıyla; Kişiler Hukuku, Aile Hukuku, Miras Hukuku ve Eşya Hukuku'dur. Ticari işletme hukuku ise Ticaret Hukukunun bir alt dalıdır.",
    answers: [
      { text: "Eşya hukuku", ok: false },
      { text: "Aile hukuku", ok: false },
      { text: "Miras hukuku", ok: false },
      { text: "Ticari işletme hukuku", ok: true },
      { text: "Kişiler hukuku", ok: false }
    ]
  },
  {
    text: "<p>I. Suç şüphesinin öğrenilmesinden, iddianamenin kabulüne kadar geçen evredir.<br/>II. İddianamenin kabulüyle başlayıp, hükmün kesinleşmesine kadar süren evredir.</p><p><b>Bu tanımlar aşağıdaki kavramlarla doğru şekilde eşleştirildiğinde hangi seçenek doğrudur?</b></p>",
    diff: 3,
    expl: "Ceza Muhakemesi Kanunu (CMK) m.2'ye göre; suç şüphesinden iddianamenin kabulüne kadar olan evreye 'soruşturma' (yetkili merci Cumhuriyet Savcısıdır), iddianamenin kabulüyle başlayıp hüküm verilene kadar geçen evreye ise 'kovuşturma' (yargılama) denir.",
    answers: [
      { text: "I – kovuşturma / II – soruşturma", ok: false },
      { text: "I – gözaltı / II – yargılama", ok: false },
      { text: "I – hazırlık soruşturması / II – ceza infazı", ok: false },
      { text: "I – soruşturma / II – kovuşturma", ok: true },
      { text: "I – savunma / II – mahkûmiyet", ok: false }
    ]
  },
  {
    text: "<p><b>5271 sayılı Ceza Muhakemesi Kanunu'na göre</b><br/><br/>I. suç şüphesi altında bulunan kişinin, henüz iddianame düzenlenmeden önceki evredeki sıfatı,<br/>II. iddianamenin kabulüyle birlikte suç isnadı altında yargılanan kişinin sıfatı<br/><br/><b>aşağıdaki kavramlarla eşleştirildiğinde hangisi doğrudur?</b></p>",
    diff: 2,
    expl: "Soruşturma evresinde hakkında ceza soruşturması yürütülen kişiye 'şüpheli' denir. İddianamenin mahkemece kabulüyle birlikte başlayan kovuşturma (yargılama) evresinde ise kişi artık 'sanık' sıfatını kazanır.",
    answers: [
      { text: "I – tanık / II – sanık", ok: false },
      { text: "I – mağdur / II – şüpheli", ok: false },
      { text: "I – şüpheli / II – sanık", ok: true },
      { text: "I – müdafi / II – katılan", ok: false },
      { text: "I – sanık / II – hükümlü", ok: false }
    ]
  },
  {
    text: "<p><b>5271 sayılı Ceza Muhakemesi Kanunu'na göre</b><br/><br/>I. soruşturma evresinde suçun işlendiğini öğrenerek araştırma yapma ve iddianame düzenleyerek kamu davası açma yetkisi bulunan görevli kişi,<br/>II. yargılamada tarafsızlık ve bağımsızlık içinde karar verme yetkisi bulunan kişi,<br/><br/><b>aşağıdaki kavramlarla eşleştirildiğinde hangisi doğrudur?</b></p>",
    diff: 2,
    expl: "Soruşturma evresinin en yetkili kamu görevlisi Cumhuriyet savcısıdır (araştırır ve iddianame düzenler). Kovuşturma (yargılama) evresinde davayı yürüten ve bağımsız şekilde hüküm veren kişi ise hâkimdir.",
    answers: [
      { text: "I – kolluk / II – hâkim", ok: false },
      { text: "I – Cumhuriyet savcısı / II – avukat", ok: false },
      { text: "I – hâkim / II – katılan", ok: false },
      { text: "I – Cumhuriyet savcısı / II – hâkim", ok: true },
      { text: "I – avukat / II – Cumhuriyet savcısı", ok: false }
    ]
  },
  {
    text: "<p><b>5271 sayılı Ceza Muhakemesi Kanunu'na göre kamu davası açılması için yeterli şüphe bulunmaması hâlinde, savcının soruşturma evresinde verdiği karar aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Savcı yaptığı soruşturma sonucunda dava açmak için yeterli şüphe veya delil bulamazsa 'Kovuşturmaya Yer Olmadığına Dair Karar (KYOK)', diğer adıyla takipsizlik kararı verir.",
    answers: [
      { text: "Dava zaman aşımı", ok: false },
      { text: "Takipsizlik", ok: true },
      { text: "Yargılamanın durması", ok: false },
      { text: "Görevsizlik", ok: false },
      { text: "Dosyanın iadesi", ok: false }
    ]
  },
  {
    text: "<p><b>Ceza muhakemesi sürecinde kişi özgürlüğünü sınırlayan tedbirlerden;</b><br/><br/>I. yakalama,<br/>II. tutuklama,<br/>III. gözaltı<br/><br/><b>hangileri yalnızca hâkim kararıyla gerçekleştirilebilir?</b></p>",
    diff: 3,
    expl: "Yakalama işlemi suçüstü hâlinde herkes veya kolluk tarafından yapılabilir. Gözaltı kararı Cumhuriyet savcısı tarafından verilir. Ancak kişinin cezaevine gönderilmesi anlamına gelen 'Tutuklama' kararı yalnızca yetkili hâkim tarafından verilebilir.",
    answers: [
      { text: "Yalnız II", ok: true },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p>Bir dolandırıcılık olayında, müşteki (şikâyetçi) olan şahıs dava sürecinde bir avukat tutmuştur. Aynı davada suçlanan kişi olan sanık da bir avukatla savunma yapmaktadır.</p><p><b>Bu davada müştekinin (şikâyetçi) avukatı ve sanığın avukatı aşağıdakilerden hangisiyle adlandırılır?</b></p>",
    diff: 3,
    expl: "Ceza muhakemesinde mağdur/müşteki sıfatı taşıyan kişiyi temsil eden avukata 'vekil', suçlanan kişiyi (şüpheli/sanık) savunan avukata ise 'müdafi' adı verilir.",
    answers: [
      { text: "Her ikisi de müdafidir.", ok: false },
      { text: "Müştekinin avukatı vekil, sanığın avukatı müdafidir.", ok: true },
      { text: "Her ikisi de vekildir.", ok: false },
      { text: "Müştekinin avukatı müdafi, sanığın avukatı vekildir.", ok: false },
      { text: "Müştekinin avukatı katılan, sanığın avukatı vekildir.", ok: false }
    ]
  },
  {
    text: "<p><b>5271 sayılı Ceza Muhakemesi Kanunu'na göre, hâkim veya mahkeme tarafından verilen ve hüküm niteliğinde olmayan kararlar için başvurulan, ilk derece mahkemesinin yargı çevresinde değerlendirilmek üzere yapılan olağan kanun yolu aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Tutuklama, el koyma gibi hüküm (son karar) niteliğinde olmayan ara kararlara karşı başvurulan olağan kanun yoluna 'İtiraz' denir. Kararı veren merciin bağlı bulunduğu başka bir hâkim veya mahkeme tarafından incelenir.",
    answers: [
      { text: "İstinaf", ok: false },
      { text: "Temyiz", ok: false },
      { text: "Karar düzeltme", ok: false },
      { text: "İtiraz", ok: true },
      { text: "Şikâyet", ok: false }
    ]
  }
];

// ============================================================================
// TEMEL HUKUK KAVRAMLARI - TEST 4
// ============================================================================
export const VAT_TEMEL_HUKUK_TEST_4: McQ[] = [
  {
    text: "<p>Bir ceza yargılamasında sanık, Asliye Ceza Mahkemesi tarafından verilen mahkûmiyet kararına karşı başvuruda bulunmuştur. Dosya, kararın hem maddi yönüyle hem de hukuki yönüyle denetlenerek, ilgili bölge adliye mahkemesi tarafından incelenmiştir.</p><p><b>5271 sayılı Ceza Muhakemesi Kanunu'na göre, sanığın başvurduğu bu olağan kanun yolu aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "İlk derece mahkemelerinin kararlarının (hükümlerinin) hem maddi olay yönünden (delillerin incelenmesi) hem de hukuki yönden Bölge Adliye Mahkemeleri (BAM) tarafından yeniden incelenmesini sağlayan kanun yoluna 'İstinaf' denir.",
    answers: [
      { text: "İtiraz", ok: false },
      { text: "Temyiz", ok: false },
      { text: "Yeniden yargılama", ok: false },
      { text: "İstinaf", ok: true },
      { text: "Olağanüstü itiraz", ok: false }
    ]
  },
  {
    text: "<p><b>5271 sayılı Ceza Muhakemesi Kanunu'na göre, bölge adliye mahkemesi kararlarının Yargıtay nezdinde hukuka uygunluk yönünden denetlenmesini sağlayan olağan kanun yolu aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Bölge adliye mahkemesi (istinaf) kararlarının Yargıtay nezdinde yalnızca 'hukuka uygunluk' (olaylar değil kanunun doğru uygulanıp uygulanmadığı) yönünden denetlenmesini sağlayan olağan kanun yoluna 'Temyiz' denir.",
    answers: [
      { text: "İstinaf", ok: false },
      { text: "Karar düzeltme", ok: false },
      { text: "Temyiz", ok: true },
      { text: "İtiraz", ok: false },
      { text: "Ara karar", ok: false }
    ]
  },
  {
    text: "<p><b>Ceza muhakemesi sürecinde;</b><br/><br/>I. Cumhuriyet savcısının, yeterli şüphe bulunduğuna kanaat getirerek kamu davası açmak amacıyla düzenlediği yazılı belge,<br/>II. yargılama sonunda mahkemenin delilleri değerlendirerek verdiği karar<br/><br/><b>aşağıdaki kavramlarla eşleştirildiğinde hangisi doğrudur?</b></p>",
    diff: 2,
    expl: "Savcının dava açmak için hazırladığı yazılı ve suçlamaları içeren belgeye 'İddianame' denir. Mahkemenin yargılama sonunda sanığın beraatine, mahkûmiyetine vb. dair verdiği son karara ise 'Hüküm' adı verilir.",
    answers: [
      { text: "I – gözaltı kararı / II – tutuklama kararı", ok: false },
      { text: "I – iddianame / II – hüküm", ok: true },
      { text: "I – soruşturma / II – yargılama", ok: false },
      { text: "I – sanık savunması / II – hüküm", ok: false },
      { text: "I – iddianame / II – tutuklama kararı", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'nda <i>\"Ölüm cezası ve genel müsadere cezası verilemez.\"</i> hükmü hangi yıl yapılan anayasa değişikliği ile hukukumuza girmiştir?</b></p>",
    diff: 3,
    expl: "Ölüm cezası (idam) ve genel müsadere cezası, 2004 yılında yapılan Anayasa değişikliği ile hukuk sistemimizden tamamen çıkarılmıştır.",
    answers: [
      { text: "1995", ok: false },
      { text: "2001", ok: false },
      { text: "2004", ok: true },
      { text: "2007", ok: false },
      { text: "2010", ok: false }
    ]
  },
  {
    text: "<p><b>Ceza yargılama sürecinde;</b><br/><br/><ul><li>Uyuşmazlık konusu bir vakıanın varlığı ya da yokluğu hakkında hâkimi ikna etmek için tarafların yargılamada başvurduğu araçtır.</li><li>Tarafların ya da uzmanların, dava konusu hakkında sundukları bağlayıcı olmayan hukuki değerlendirmelerdir.</li></ul></p><p><b>verilen tanımlar sırasıyla aşağıdaki kavramlardan hangisine karşılık gelir?</b></p>",
    diff: 3,
    expl: "Hâkimi olayın gerçekleştiğine ikna etmek için kullanılan geçerli araçlara (tanık, keşif, belge vb.) 'delil' denir. Uzman kişilerin veya tarafların olay hakkındaki hukuki görüş ve açıklamalarına ise 'mütalaa' denir.",
    answers: [
      { text: "mütalaa – delil", ok: false },
      { text: "delil – mütalaa", ok: true },
      { text: "savunma – mütalaa", ok: false },
      { text: "delil – keşif", ok: false },
      { text: "mütalaa – savunma", ok: false }
    ]
  },
  {
    text: "<p>I. Kanunun açıkça suç saymadığı bir fiil için kimseye ceza verilemez.<br/>II. İdarenin düzenleyici işlemleriyle suç ve ceza konulamaz.<br/>III. Kanunların suç ve ceza içeren hükümlerinde kıyas yapılamaz.</p><p><b>5237 sayılı Türk Ceza Kanunu'nun 2. maddesine göre, yukarıdakilerden hangileri \"suçta ve cezada kanunilik\" ilkesinin sonuçları arasında yer alır?</b></p>",
    diff: 3,
    expl: "TCK m.2 'Suçta ve cezada kanunilik' ilkesini düzenler. Buna göre kanunsuz suç ve ceza olmaz, idarenin işlemiyle ceza getirilemez ve suç/ceza içeren hükümlerde kıyas uygulanamaz. Üçü de bu ilkenin sonucudur.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p>Alacaklı İbrahim, borçlu Selim'e <i>\"Sana sattığım ürünlerin borçlarını ödemezsen seni hapislerde süründürürüm.\"</i> diyor.</p><p><b>1982 Anayasası'na göre, İbrahim'in bu ifadesi suç ve cezalara ilişkin esaslardan hangisine aykırılık teşkil etmektedir?</b></p>",
    diff: 2,
    expl: "1982 Anayasası m.38'e göre: 'Hiç kimse, yalnızca sözleşmeden doğan bir yükümlülüğü yerine getirememesinden dolayı özgürlüğünden alıkonulamaz.' Borcun ödenmemesi (sözleşme ihlali) kişiye hapis cezası verilmesinin gerekçesi olamaz.",
    answers: [
      { text: "Ölüm cezası ve genel müsadere cezası verilemez.", ok: false },
      { text: "Ceza ve ceza yerine geçen güvenlik tedbirleri ancak kanunla konulur.", ok: false },
      { text: "Hiç kimse, yalnızca sözleşmeden doğan bir yükümlülüğü yerine getirememesinden dolayı özgürlüğünden alıkonulamaz.", ok: true },
      { text: "Suçluluğu hükmen sabit oluncaya kadar, kimse suçlu sayılamaz.", ok: false },
      { text: "İdare, kişi hürriyetinin kısıtlanması sonucunu doğuran bir müeyyide uygulayamaz.", ok: false }
    ]
  },
  {
    text: "<p>Banu, trafikte tartıştığı Hakan'a <i>\"Bana ehliyeti kasaptan mı aldın diyerek hakaret ettin; sen suçlusun, hapis cezası alacaksın.\"</i> diyor.</p><p><b>Buna göre Banu, aşağıdaki hukukun temel ilkelerinden hangisine aykırı davranmıştır?</b></p>",
    diff: 2,
    expl: "1982 Anayasası m.38 uyarınca 'Suçluluğu hükmen sabit oluncaya kadar, kimse suçlu sayılamaz'. Bu ilkeye 'Masumiyet karinesi' denir. Mahkeme kararı olmadan birini kesin suçlu ilan etmek bu ilkeye aykırıdır.",
    answers: [
      { text: "Kanun önünde eşitlik", ok: false },
      { text: "Kazanılmış haklara saygı", ok: false },
      { text: "Masumiyet karinesi", ok: true },
      { text: "Cezanın şahsiliği", ok: false },
      { text: "Suç ve cezaların geçmişe yürümezliği", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'nda vergi, resim, harç ve benzeri mali yükümlülüklerin aşağıdakilerden hangisi tarafından konulacağı, değiştirilebileceği veya kaldırılabileceği hükme bağlanmıştır?</b></p>",
    diff: 2,
    expl: "Anayasa m.73 uyarınca 'Vergi, resim, harç ve benzeri mali yükümlülükler KANUNLA konulur, değiştirilir veya kaldırılır.' Kanun yapma yetkisi ise doğrudan Türkiye Büyük Millet Meclisi'ne (TBMM) aittir.",
    answers: [
      { text: "Cumhurbaşkanı", ok: false },
      { text: "Türkiye Büyük Millet Meclisi", ok: true },
      { text: "T.C. Merkez Bankası", ok: false },
      { text: "Hazine ve Maliye Bakanlığı", ok: false },
      { text: "Sayıştay", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'ndaki <i>\"Herkes mali gücüne göre vergi ödemekle yükümlüdür.\"</i> ifadesi vergiye ilişkin aşağıdaki ilkelerden hangisine yöneliktir?</b></p>",
    diff: 3,
    expl: "Cümledeki 'herkes' kelimesi, ayrım yapılmaksızın tüm vatandaşların vergi mükellefi olmasını yani 'genellik' ilkesini belirtir. 'Mali gücüne göre' ifadesi ise çok kazanandan çok, az kazanandan az vergi alınmasını yani 'adalet' ilkesini vurgular.",
    answers: [
      { text: "kanunilik – istisnailik", ok: false },
      { text: "genellik – azalan oranlılık", ok: false },
      { text: "genellik – kanunilik", ok: false },
      { text: "kanunilik – artan oranlılık", ok: false },
      { text: "genellik – adalet", ok: true }
    ]
  },
  {
    text: "<p><b>Kamu gelirlerine ilişkin verilen;</b><br/><br/><ul><li>Belirli bir kamu hizmetinden yararlanmanın karşılığıdır.</li><li>Resmî belge veya işlem için alınan sabit nitelikteki ücrettir.</li><li>Kamu hizmeti karşılığı olmadan alınan, genel bütçe geliridir.</li></ul></p><p><b>ifadeler sırasıyla aşağıdaki kavramlardan hangilerinin karşılığıdır?</b></p>",
    diff: 3,
    expl: "1. Belirli bir hizmetin (pasaport, ruhsat) bireysel karşılığı olan bedele 'harç' denir. 2. Resmî bir işlemin sonucu/belge üzerinden alınan bedele 'resim' denir. 3. Karşılıksız ve kamu hizmetlerinin genel finansmanı için zorunlu alınan bedele ise 'vergi' denir.",
    answers: [
      { text: "harç – vergi – resim", ok: false },
      { text: "resim – harç – vergi", ok: false },
      { text: "vergi – harç – resim", ok: false },
      { text: "vergi – resim – harç", ok: false },
      { text: "harç – resim – vergi", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi mülkiyet (servet) üzerinden alınan vergilerden biridir?</b></p>",
    diff: 2,
    expl: "Türk vergi sisteminde vergiler Gelir, Harcama ve Servet üzerinden alınanlar olarak üçe ayrılır. Emlak Vergisi, Motorlu Taşıtlar Vergisi (MTV) ve Veraset ve İntikal Vergisi servet/mülkiyet üzerinden alınan vergilerdir. KDV, ÖTV, Damga Vergisi harcama üzerinden alınır.",
    answers: [
      { text: "Emlak vergisi", ok: true },
      { text: "Katma değer vergisi", ok: false },
      { text: "Damga vergisi", ok: false },
      { text: "Banka işlemleri vergisi", ok: false },
      { text: "Sigorta işlemleri vergisi", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi gelir üzerinden alınan vergilerden biridir?</b></p>",
    diff: 2,
    expl: "Başlıca vergilerden Gelir Vergisi (gerçek kişilerin gelirlerinden) ve Kurumlar Vergisi (tüzel kişilerin kazançlarından) 'gelir üzerinden' alınan doğrudan vergilerdir. Diğer seçenekler harcama (KDV, ÖTV, İletişim vb.) vergileridir.",
    answers: [
      { text: "Katma değer vergisi", ok: false },
      { text: "Özel tüketim vergisi", ok: false },
      { text: "Kurumlar vergisi", ok: true },
      { text: "Motorlu taşıtlar vergisi", ok: false },
      { text: "İletişim vergisi", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıda vergilendirme sürecine ilişkin ifadeler verilmiştir:</b><br/><br/><ul><li>Vergi alacağının kanuna göre hesaplanarak belirlenmesi</li><li>Vergi alacağının mükellefe resmî yolla bildirilmesi</li><li>Vergi alacağının kesinleşerek ödemeye hazır hâle gelmesi</li><li>Vergi alacağının kamu gücüyle elde edilmesi</li></ul></p><p><b>Bu işlemler, gerçekleşme sırasına göre aşağıdaki kavramlardan hangileriyle doğru eşleştirilmiştir?</b></p>",
    diff: 3,
    expl: "Vergilendirme süreci 4 aşamadan oluşur: 1) Tarh (hesaplanıp belirlenmesi), 2) Tebliğ (hesaplanan verginin mükellefe bildirilmesi), 3) Tahakkuk (hukuken kesinleşip ödenecek aşamaya gelmesi), 4) Tahsil (verginin fiilen ödenmesi/alınması).",
    answers: [
      { text: "tebliğ – tarh – tahakkuk – tahsil", ok: false },
      { text: "tarh – tebliğ – tahakkuk – tahsil", ok: true },
      { text: "tarh – tahsil – tebliğ – tahakkuk", ok: false },
      { text: "tahakkuk – tarh – tebliğ – tahsil", ok: false },
      { text: "tarh – tebliğ – tahsil – tahakkuk", ok: false }
    ]
  },
  {
    text: "<p><b>Vergi hukukunda, vergi borcunu doğuran olaya taraf olan ve bu borcun muhatabı olan kişi aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Vergi borcunu doğuran olayın hukuki ve ekonomik muhatabı olan ve kendi mal varlığından bu vergiyi devlete ödemekle yükümlü olan gerçek veya tüzel kişiye 'mükellef' denir.",
    answers: [
      { text: "Yükümlü", ok: false },
      { text: "Tahakkuk eden", ok: false },
      { text: "Mükellef", ok: true },
      { text: "Vergi sorumlusu", ok: false },
      { text: "Borçlu", ok: false }
    ]
  }
];

// ============================================================================
// TEMEL HUKUK KAVRAMLARI - TEST 5
// ============================================================================
export const VAT_TEMEL_HUKUK_TEST_5: McQ[] = [
  {
    text: "<p><b>4721 sayılı Türk Medeni Kanunu'na göre, gerçek kişiliğin başlangıcı için</b></p><ul><li>I. tam doğmuş olmak,</li><li>II. ana rahmine düşmüş olmak,</li><li>III. sağ doğmuş olmak,</li><li>IV. ergin olmak</li></ul><p><b>verilenlerden hangilerinin birlikte gerçekleşmesi zorunludur?</b></p>",
    diff: 2,
    expl: "Gerçek kişiliğin başlangıcı, çocuğun tam ve sağ doğmasıyla gerçekleşir. Hukuken gerçek kişi olabilmek için çocuğun anne rahminden tamamen ayrılması (tam doğum) ve çok kısa bir süre de olsa anneden bağımsız yaşaması (sağ doğum) şarttır.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: true },
      { text: "II ve III", ok: false },
      { text: "II ve IV", ok: false },
      { text: "I, II ve IV", ok: false }
    ]
  },
  {
    text: "<p>Elif, 15 Ağustos 2024'te hamile olduğunu öğreniyor ve 5 Nisan 2025'te sağlıklı bir şekilde doğum yaparak oğluna Fatih adını veriyor. Fatih'in nüfusa kaydı ise 10 Nisan 2025 tarihinde gerçekleştiriliyor.</p><p><b>Türk Medeni Kanunu'na göre, Fatih ne zaman kişilik kazanmıştır?</b></p>",
    diff: 2,
    expl: "Kişiliğin kazanılması yalnızca tam ve sağ doğumla gerçekleşir. Nüfus kaydı sadece doğumun resmî tescilidir; kişiliğin kazanılmasını etkilemez. Bu nedenle Fatih, doğduğu tarih olan 5 Nisan 2025'te kişilik kazanmıştır.",
    answers: [
      { text: "5 Ağustos 2024", ok: false },
      { text: "15 Ağustos 2024", ok: false },
      { text: "5 Nisan 2025", ok: true },
      { text: "10 Nisan 2025", ok: false },
      { text: "11 Nisan 2025", ok: false }
    ]
  },
  {
    text: "<p><b>4721 sayılı Türk Medeni Kanunu'na göre</b></p><ul><li>I. ana rahmindeki cenin,</li><li>II. tam ve sağ doğan çocuk,</li><li>III. kanuna uygun şekilde kurulmuş vakıf</li></ul><p><b>verilenlerden hangileri gerçek kişi olarak kabul edilmektedir?</b></p>",
    diff: 2,
    expl: "Türk hukukunda gerçek kişiler 'insanlar'dır ve kişilik tam ve sağ doğmakla başlar. Ana rahmindeki cenin henüz kişi kabul edilmez (sadece hak ehliyeti koşullu başlar). Vakıf ise tüzel kişidir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: true },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Bir gerçek kişinin doğumu ve soy bağıyla ilgili kayıtları içeren kütüğe ne ad verilir?</b></p>",
    diff: 2,
    expl: "Doğumlara ilişkin bildirimler ve kimsesiz olarak bulunmuş çocuklar hakkında işlemler kanunlara göre 'doğum kütüğü'ne işlenir.",
    answers: [
      { text: "Aile kütüğü", ok: false },
      { text: "Yer değiştirme kütüğü", ok: false },
      { text: "Evlenme kütüğü", ok: false },
      { text: "Nüfus kütüğü", ok: false },
      { text: "Doğum kütüğü", ok: true }
    ]
  },
  {
    text: "<p><b>Hukukta, bilinen bir olgudan hareketle, bilinmeyen başka bir olgunun varlığı ya da yokluğu hakkında çıkarım yapılmasına ne ad verilir?</b></p>",
    diff: 2,
    expl: "Hukukta ispatı zor olan bir durumla ilgili olarak, bilinen bir olaydan yola çıkarak bilinmeyene ulaşmak için kullanılan mantıksal çıkarım yoluna 'karine' denir (Örn: Babalık karinesi, ölüm karinesi).",
    answers: [
      { text: "Yorum", ok: false },
      { text: "Kıyas", ok: false },
      { text: "Karine", ok: true },
      { text: "İçtihat", ok: false },
      { text: "Takdir yetkisi", ok: false }
    ]
  },
  {
    text: "<p><b>4721 sayılı Türk Medeni Kanunu'na göre, aşağıdakilerden hangisi gerçek kişiliği sona erdirir?</b></p>",
    diff: 2,
    expl: "Gerçek kişiliği sona erdiren durumlar; ölüm, ölüm karinesi ve gaiplik kararı verilmesidir. Kısıtlanma, fiil ehliyetinin kaybı veya yerleşim yeri değişikliği kişiliği sona erdirmez.",
    answers: [
      { text: "Kısıtlanma kararı verilmesi", ok: false },
      { text: "Ad değişikliğinin yapılması", ok: false },
      { text: "Gaiplik kararı verilmesi", ok: true },
      { text: "Fiil ehliyetinin kaybedilmesi", ok: false },
      { text: "Yerleşim yerinin değişmesi", ok: false }
    ]
  },
  {
    text: "<p><b>4721 sayılı Türk Medeni Kanunu'na göre, kişinin içinde bulunduğu uçağın havada infilak etmesi nedeniyle kişi hakkında ölüm karinesi çıkarılması için</b></p><ul><li>I. cesedinin bulunamaması,</li><li>II. ölümüne muhtemel gözle bakılması,</li><li>III. mahallî mülki amirin kararı</li></ul><p><b>verilenlerden hangilerinin varlığı aranmaktadır?</b></p>",
    diff: 3,
    expl: "Ölüm karinesi; kişinin ölümüne 'kesin' (muhtemel değil) gözle bakılmayı gerektiren bir durumda kaybolması ve cesedinin bulunamamasıdır. Bu durumda mahkeme kararına gerek duyulmaksızın 'mahallin en büyük mülki amirinin (vali/kaymakam)' emriyle ölüm kaydı düşülür.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: true },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Medeni hukuka göre, hakkında mahkemece gaiplik kararı verilen bir kişiyle ilgili;</b></p><ul><li>I. Evliliği kendiliğinden sona erer.</li><li>II. Evliliğin sona ermesi için mahkemeden ayrıca evliliğin feshine karar verilmesi gerekir.</li><li>III. Evliliğin feshine karar verilmeden yeniden evlenilemez.</li></ul><p><b>ifadelerinden hangileri doğrudur?</b></p>",
    diff: 3,
    expl: "Gaiplik kararı evliliği kendiliğinden sona erdirmez. Eşin yeniden evlenebilmesi için gaiplik davası ile birlikte veya ayrıca evliliğin feshini talep etmesi gerekir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: true },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Türk medeni hukukuna göre</b></p><ul><li>kendisinden uzun süreden beridir haber alınamayan A ile</li><li>ölümüne kesin gözüyle bakılmasını gerektiren bir durumda kaybolan ve cesedi bulunamayan B'nin</li></ul><p><b>kişiliklerinin sona ermesine neden olan durumlar sırasıyla aşağıdakilerden hangisinde doğru verilmiştir?</b></p>",
    diff: 3,
    expl: "Uzun süre haber alınamama durumu 'gaiplik' (mahkeme kararı gerektirir), ölümüne kesin gözüyle bakılan bir olayda (örn: uçak kazası) cesedin bulunamaması durumu ise 'ölüm karinesi'dir.",
    answers: [
      { text: "ölüm – gaiplik", ok: false },
      { text: "birlikte ölüm karinesi – ölüm karinesi", ok: false },
      { text: "gaiplik – ölüm karinesi", ok: true },
      { text: "gaiplik – ölüm", ok: false },
      { text: "ölüm karinesi – gaiplik", ok: false }
    ]
  },
  {
    text: "<p>Gaiplik kararı, <b>----</b> tarafından verilir ve karar öncesinde, başvuru yapılan kişinin durumuna göre ya en az <b>----</b> yıl ölüm tehlikesi içinde kaybolmuş olması ya da <b>----</b> yıl boyunca kendisinden haber alınamamış olması gerekir.</p><p><b>4721 sayılı Türk Medeni Kanunu'na göre, yukarıda bırakılan boşluklara sırasıyla hangisi getirilmelidir?</b></p>",
    diff: 3,
    expl: "Gaiplik kararı Sulh Hukuk Mahkemesi tarafından verilir. Kişi ölüm tehlikesi içinde kaybolmuşsa en az 1 yıl, uzun süredir haber alınamıyorsa en az 5 yıl geçmesi şarttır.",
    answers: [
      { text: "Noterlik – 1 – 5", ok: false },
      { text: "Nüfus müdürlüğü – 2 – 4", ok: false },
      { text: "Aile mahkemesi – 1 – 5", ok: false },
      { text: "Mahallî mülki idare amiri – 2 – 5", ok: false },
      { text: "Sulh hukuk mahkemesi – 1 – 5", ok: true }
    ]
  },
  {
    text: "<p>Bir dağ kazasında, dağcı Mert'in cesedine ulaşılamamış, ancak olaya tanık olan iki arkadaşı onun uçurumdan düştüğünü ve yaşamadığını belirtmiştir.</p><p><b>4721 sayılı Türk Medeni Kanunu'na göre, Mert'in nüfus siciline ölüm kaydı aşağıdakilerden hangisinin kararıyla yapılabilir?</b></p>",
    diff: 3,
    expl: "Olayda ölümüne kesin gözüyle bakılan bir durum ve cesedin bulunamaması (ölüm karinesi) vardır. Bu durumda mahkeme kararına gerek yoktur; mahallî mülki idare amiri (vali veya kaymakam) emriyle kütüğe ölü kaydı düşülür.",
    answers: [
      { text: "Aile mahkemesi", ok: false },
      { text: "Mahallî mülki idare amiri", ok: true },
      { text: "Nüfus müdürlüğü", ok: false },
      { text: "Cumhuriyet savcılığı", ok: false },
      { text: "Sulh ceza hâkimliği", ok: false }
    ]
  },
  {
    text: "<p><b>4721 sayılı Türk Medeni Kanunu'na göre, ölümüne kesin gözüyle bakılan M hakkında ölüm karinesi kararı alınabilmesi için aşağıdakilerden hangisinin varlığı da şarttır?</b></p>",
    diff: 2,
    expl: "Ölüm karinesinin uygulanabilmesi için kişinin ölümüne kesin gözle bakılan bir durumda kaybolmasının yanında 'cesedinin bulunamaması' (cesedine ulaşılamaması) şartı aranır.",
    answers: [
      { text: "M'nin Türk vatandaşı olması", ok: false },
      { text: "Tehlikeli olay üzerinden bir yıl geçmesi", ok: false },
      { text: "M'nin cesedine ulaşılamaması", ok: true },
      { text: "Son haber alma tarihi üzerinden beş yıl geçmesi", ok: false },
      { text: "M'nin kaybolduğuna ilişkin mahkeme kararı", ok: false }
    ]
  },
  {
    text: "<p>Asiye ve babası Halil, aynı trafik kazasında vefat etmiş; otopsi ve tanık beyanlarına rağmen kimin önce öldüğü tespit edilememiştir.</p><p><b>4721 sayılı Türk Medeni Kanunu'na göre, mirasçılık durumu ile ilgili aşağıdaki ifadelerden hangisi doğrudur?</b></p>",
    diff: 3,
    expl: "Kimin önce öldüğü anlaşılamayan durumlarda 'birlikte ölüm karinesi' uygulanır ve bu kişiler hukuken aynı anda ölmüş sayılırlar. Aynı anda ölmüş sayıldıkları için birbirlerine mirasçı olamazlar; her birinin mirası kendi alt/diğer mirasçılarına geçer.",
    answers: [
      { text: "Miras, Halil'den Asiye'ye, ardından Asiye'nin mirasçılarına geçer.", ok: false },
      { text: "Halil'in mirası, Asiye'nin yasal mirasçılarına geçer.", ok: false },
      { text: "Asiye ile Halil birbirlerine mirasçı olamayacağından her birinin mirası kendi mirasçılarına geçer.", ok: true },
      { text: "Miras sırası yaş küçüğüne öncelik tanınarak belirlenir.", ok: false },
      { text: "Asiye'nin annesi, Halil'in yerine doğrudan mirasçı sayılır.", ok: false }
    ]
  },
  {
    text: "<p><b>4721 sayılı Türk Medeni Kanunu'na göre gerçek kişilerde hak ehliyetine sahip olmak için</b></p><ul><li>I. tam ve sağ doğmak,</li><li>II. ergin olmak,</li><li>III. ana rahmine düşmek,</li><li>IV. ayırt etme gücüne sahip olmak</li></ul><p><b>verilenlerden hangilerinin birlikte gerçekleşmesi gerekir?</b></p>",
    diff: 3,
    expl: "Hak ehliyeti kural olarak pasif bir ehliyettir. Hukuken hak ehliyeti, 'tam ve sağ doğmak' koşuluyla, çocuğun 'ana rahmine düştüğü' andan itibaren başlar. Ergin olmak ve ayırt etme gücü fiil ehliyetinin şartlarıdır.",
    answers: [
      { text: "I ve IV", ok: false },
      { text: "I ve III", ok: true },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false },
      { text: "II ve IV", ok: false }
    ]
  },
  {
    text: "<p>Türk Medeni Kanunu 8. maddesine göre, <i>\"Bütün insanlar, hukuk düzeninin sınırları içinde, haklara ve borçlara ehil olmada eşittirler.\"</i></p><p><b>ifadesi hak ehliyetinin hangi ilkelerinden bahsetmektedir?</b></p>",
    diff: 2,
    expl: "Maddedeki 'Bütün insanlar' ifadesi hiçbir ayrım gözetilmediğini belirten 'Genellik' ilkesini, 'ehil olmada eşittirler' ifadesi ise 'Eşitlik' ilkesini ifade eder.",
    answers: [
      { text: "süreklilik – değişkenlik", ok: false },
      { text: "eşitlik – süreklilik", ok: false },
      { text: "genellik – nesnellik", ok: false },
      { text: "serbestlik – eşitlik", ok: false },
      { text: "genellik – eşitlik", ok: true }
    ]
  },
  {
    text: "<p><b>Türk medeni hukukuna göre</b></p><ul><li>bir kimsenin kendi fiilleriyle lehine haklar aleyhine borçlar yaratabilmesi,</li><li>bir kimsenin haklara ve borçlara sahip olması</li></ul><p><b>ifadeleri sırasıyla hangilerini tanımlar?</b></p>",
    diff: 2,
    expl: "Kendi fiil ve işlemleriyle (sözleşme vb.) hak ve borç yaratabilme gücüne 'Fiil Ehliyeti', sadece pasif olarak bir hakka veya borca taraf olabilme (doğuştan gelen) duruma ise 'Hak Ehliyeti' denir.",
    answers: [
      { text: "hak ehliyeti – fiil ehliyeti", ok: false },
      { text: "fiil ehliyeti – hak ehliyeti", ok: true },
      { text: "fiil ehliyeti – yerleşim yeri ehliyeti", ok: false },
      { text: "hak ehliyeti – vesayet ehliyeti", ok: false },
      { text: "fiil ehliyeti – dava ehliyeti", ok: false }
    ]
  }
];

// ============================================================================
// TEMEL HUKUK KAVRAMLARI - TEST 6
// ============================================================================
export const VAT_TEMEL_HUKUK_TEST_6: McQ[] = [
  {
    text: "<p>Fiil ehliyetini kazanabilmesi için kişi, <b>----</b> ayırt etme gücüne sahip olmalı ve <b>----</b> olmamalıdır.</p><p><b>4721 sayılı Türk Medeni Kanunu'na göre, yukarıda bırakılan boşluklara sırasıyla hangisi getirilmelidir?</b></p>",
    diff: 2,
    expl: "Fiil ehliyetine sahip olabilmenin 3 şartı vardır: 1) Ergin olmak, 2) Ayırt etme gücüne sahip olmak, 3) Kısıtlı olmamak.",
    answers: [
      { text: "kısıtlı olmalı – ergin", ok: false },
      { text: "ergin olmalı – kısıtlı", ok: true },
      { text: "ergin olmalı – evli", ok: false },
      { text: "hak ehliyetine sahip olmalı – kısıtlı", ok: false },
      { text: "reşit olmamalı – evli", ok: false }
    ]
  },
  {
    text: "<p><b>4721 sayılı Türk Medeni Kanunu'na göre</b></p><ul><li>I. on sekiz yaşının doldurulması,</li><li>II. evlenme,</li><li>III. on beş yaşın doldurulması, kişinin başvurusu ve velinin rızası</li></ul><p><b>ifadelerinden hangilerinde ergin olmak için mahkeme kararı gereklidir?</b></p>",
    diff: 3,
    expl: "18 yaşın doldurulması veya evlenme ile kişi kendiliğinden ergin olur (mahkeme kararına gerek yoktur). Ancak 15 yaşını dolduran bir küçüğün kendi isteği ve velisinin rızası ile ergin kılınması (kazai rüşt) için yetkili mahkemenin kararı şarttır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: true },
      { text: "I ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Medeni hukuka göre bir kişinin ergin sayılmasını sağlayan durumlar arasında;</b></p><ul><li>I. on sekiz yaşını doldurmak,</li><li>II. evlenmek,</li><li>III. mahkeme kararı</li></ul><p><b>verilenlerden hangileri yer alır?</b></p>",
    diff: 2,
    expl: "Kişi 18 yaşını doldurarak (olağan rüşt), yasal sınırlar içinde evlenerek (evlenme rüştü) veya şartları sağladığında mahkeme kararıyla (kazai rüşt) ergin sayılabilir. Üçü de geçerlidir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p><b>Türk Medeni Kanunu'na göre</b></p><ul><li>I. 17 yaşını dolduran kişiler, veli izniyle evlenebilir.</li><li>II. 16 yaşını dolduran kişilerin evlenmesine, ancak olağanüstü durum ve çok önemli bir sebep bulunursa mahkeme izin verebilir.</li><li>III. 15 yaşını dolduranlar, mahkeme izniyle de evlenemez.</li></ul><p><b>ifadelerinden hangileri doğrudur?</b></p>",
    diff: 3,
    expl: "Olağan evlenme yaşı 17'dir (veli izniyle). Olağanüstü durumlarda mahkeme kararıyla evlenme yaşı 16'dır. 15 yaşını dolduran kişi mahkeme kararıyla ergin kılınsa bile (kazai rüşt) kesinlikle evlenemez. Üç ifade de hukuk sistemimize göre doğrudur.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p>Demir ile Ela evlenmek istemektedir.</p><p><b>Buna göre Demir ve Ela olağan durumlarda kaç yaşını doldurup aile rızası ile evlenebilir?</b></p>",
    diff: 2,
    expl: "Medeni Kanun'a göre erkek veya kadın ancak 17 yaşını doldurduktan sonra yasal temsilcisinin (aile/veli) rızası ile olağan olarak evlenebilir.",
    answers: [
      { text: "15", ok: false },
      { text: "16", ok: false },
      { text: "17", ok: true },
      { text: "18", ok: false },
      { text: "19", ok: false }
    ]
  },
  {
    text: "<p>Sevgi, Erkan ile yaşadığı evlilik dışı ilişkiden hamile kalmıştır. Türk Medeni Kanunu'na göre, Sevgi ve Erkan'ın evlenmesi mümkündür ancak hâkim (mahkeme) kararı gereklidir.</p><p><b>Buna göre ancak hâkim kararı ile evlenebilmesi mümkün olan Sevgi ve Erkan kaç yaşını doldurmuştur?</b></p>",
    diff: 3,
    expl: "Kadının gebe kalması vb. olağanüstü durumlarda ve pek önemli bir sebeple, hâkim izniyle (mahkeme kararı) evlenmeye izin verilebilir. Bunun için kişilerin en az 16 yaşını doldurmuş olması şarttır.",
    answers: [
      { text: "14", ok: false },
      { text: "15", ok: false },
      { text: "16", ok: true },
      { text: "17", ok: false },
      { text: "18", ok: false }
    ]
  },
  {
    text: "<p><b>4721 sayılı Türk Medeni Kanunu'na göre, aşağıdakilerden hangisi kısıtlanma sebepleri arasında gösterilemez?</b></p>",
    diff: 2,
    expl: "Akıl hastalığı/zayıflığı, savurganlık, alkol veya uyuşturucu madde bağımlılığı, kötü yönetim ve 1 yıl/daha fazla hapis cezası almak kısıtlanma sebepleridir. 'Yaş küçüklüğü' ise bir kısıtlanma sebebi değildir; küçükler zaten doğrudan velayet altındadır.",
    answers: [
      { text: "Yaş küçüklüğü", ok: true },
      { text: "Akıl hastalığı veya akıl zayıflığı", ok: false },
      { text: "Savurganlık", ok: false },
      { text: "Alkol ve uyuşturucu madde bağımlılığı", ok: false },
      { text: "Kötü yönetim", ok: false }
    ]
  },
  {
    text: "<p><b>4721 sayılı Türk Medeni Kanunu'na göre, aşağıdakilerden hangisi tam ehliyetsiz kabul edilir?</b></p>",
    diff: 3,
    expl: "Tam ehliyetsizliğin tek kriteri 'ayırt etme gücünden' (temyiz kudreti) yoksun olmaktır. Ergin olup olmamalarına veya kısıtlı olup olmamalarına bakılmaksızın ayırt etme gücü olmayan kişiler (Örn: 30 yaşındaki Ayla) tam ehliyetsizdir.",
    answers: [
      { text: "16 yaşındaki ayırt etme gücüne sahip Defne", ok: false },
      { text: "Alkol bağımlısı olduğu için kısıtlanmış olan Emre", ok: false },
      { text: "30 yaşında olup ayırt etme gücü olmayan Ayla", ok: true },
      { text: "20 yaşındaki kendisine yasal danışman atanmış Cem", ok: false },
      { text: "40 yaşında ayırt etme gücü olan ve kısıtlı olmayan Ferit", ok: false }
    ]
  },
  {
    text: "<p><b>4721 sayılı Türk Medeni Kanunu'na göre,</b></p><ul><li>I. kendisine yasal danışman atanmış kişiler,</li><li>II. mümeyyiz (ayırt etme gücüne sahip) çocuklar,</li><li>III. ayırt etme gücüne sahip ergin kısıtlılar</li></ul><p><b>verilenlerden hangileri fiil ehliyeti yönünden sınırlı ehliyetsizler grubuna dâhildir?</b></p>",
    diff: 3,
    expl: "Ayırt etme gücüne sahip küçükler (mümeyyiz çocuklar) ve ayırt etme gücüne sahip kısıtlılar 'Sınırlı Ehliyetsizler' grubundadır. Kendisine yasal danışman atananlar ise 'Sınırlı Ehliyetliler' grubundadır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: true }
    ]
  },
  {
    text: "<p><b>4721 sayılı Türk Medeni Kanunu'na göre, sınırlı ehliyetlileri tam ehliyetlerden ayıran kriter;</b></p><ul><li>I. mümeyyiz olma,</li><li>II. kendisine yasal danışman atanmış olma,</li><li>III. kısıtlı olmama,</li><li>IV. ergin olma</li></ul><p><b>verilenlerden hangileridir?</b></p>",
    diff: 3,
    expl: "Sınırlı ehliyetliler aslında tam ehliyetin tüm şartlarına sahip olan ancak korunmaları amacıyla kendilerine mahkemece belli konularda 'yasal danışman' atanmış kişilerdir. Tek ayıran kriter budur.",
    answers: [
      { text: "Yalnız II", ok: true },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "III ve IV", ok: false },
      { text: "I, II ve IV", ok: false }
    ]
  },
  {
    text: "<p><b>4721 sayılı Türk Medeni Kanunu'na göre, fiil ehliyeti açısından tam ehliyetsizliği belirlemede kullanılan kriter;</b></p><ul><li>I. ayırt etme gücü,</li><li>II. yaş küçüklüğü,</li><li>III. kısıtlılık</li></ul><p><b>verilenlerden hangileridir?</b></p>",
    diff: 2,
    expl: "Bir kişinin fiil ehliyeti açısından 'tam ehliyetsiz' (hiçbir hukuki işlem yapamayan) sayılmasının tek ölçütü ayırt etme gücünün olmamasıdır. Yaş veya kısıtlılık sınırlı ehliyetsizliği ilgilendirir.",
    answers: [
      { text: "Yalnız I", ok: true },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><ul><li>A, 15 yaşını doldurduktan sonra velisinin izniyle mahkemeye başvurarak ergin kılınmıştır.</li><li>B, 17 yaşındayken evlenmiş, bir yıl sonra boşanmıştır.</li></ul></p><p><b>Medeni hukuka göre, bu kişilerin ehliyet türleri sırasıyla aşağıdakilerden hangisidir? (Her ikisinin de ayırt etme gücü tamdır ve kısıtlı değillerdir.)</b></p>",
    diff: 3,
    expl: "A, mahkeme kararıyla (kazai rüşt) ergin olmuştur. B, evlenme ile ergin olmuştur (boşansa dahi erginlik devam eder). Her ikisi de ergin, ayırt etme gücüne sahip ve kısıtlı olmadığı için 'tam ehliyetli' statüsündedirler.",
    answers: [
      { text: "sınırlı ehliyetli – tam ehliyetli", ok: false },
      { text: "tam ehliyetsiz – sınırlı ehliyetli", ok: false },
      { text: "tam ehliyetli – tam ehliyetsiz", ok: false },
      { text: "tam ehliyetli – tam ehliyetli", ok: true },
      { text: "sınırlı ehliyetli – sınırlı ehliyetsiz", ok: false }
    ]
  },
  {
    text: "<p><b>4721 sayılı Türk Medeni Kanunu'na göre,</b></p><ul><li>ayırt etme gücüne sahip 16 yaşındaki M ile</li><li>ayırt etme gücüne sahip 28 yaşındaki kısıtlı L'nin</li></ul><p><b>fiil ehliyetleri sırasıyla aşağıdakilerden hangisinde doğru verilmiştir?</b></p>",
    diff: 3,
    expl: "M, yaş küçüklüğü nedeniyle ergin değildir; L ise ergin olmasına rağmen mahkeme kararıyla kısıtlanmıştır. Her ikisinin de ayırt etme gücü bulunduğu için hukuken 'sınırlı ehliyetsiz' statüsündedirler.",
    answers: [
      { text: "sınırlı ehliyetsiz – sınırlı ehliyetli", ok: false },
      { text: "tam ehliyetli – tam ehliyetsiz", ok: false },
      { text: "sınırlı ehliyetli – tam ehliyetsiz", ok: false },
      { text: "tam ehliyetli – sınırlı ehliyetli", ok: false },
      { text: "sınırlı ehliyetsiz – sınırlı ehliyetsiz", ok: true }
    ]
  },
  {
    text: "<p><b>4721 sayılı Türk Medeni Kanunu'na göre, \"yerleşim yeri\" hakkında aşağıda verilen ifadelerden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "Türk Medeni Kanunu madde 19'a göre, \"Bir kimsenin aynı zamanda birden çok yerleşim yeri olamaz.\" Kural teklik ilkesidir (Ticari/sınai kuruluşlar hariç).",
    answers: [
      { text: "Yerleşim yeri bir kimsenin sürekli kalma niyeti ile oturduğu yerdir.", ok: false },
      { text: "Bir kimsenin aynı zamanda birden çok yerleşim yeri olabilir.", ok: true },
      { text: "Bir yerleşim yerinin değiştirilmesi, yenisinin edinilmesine bağlıdır.", ok: false },
      { text: "Velayet altındaki çocuğun yerleşim yeri ana ve babasının yerleşim yeridir.", ok: false },
      { text: "Vesayet altındakilerin yerleşim yeri bağlı oldukları vesayet makamının bulundukları yerdir.", ok: false }
    ]
  },
  {
    text: "<p><ul><li>I. Evli kişiler</li><li>II. Velayet altındaki çocuklar</li><li>III. Vesayet altındaki kişiler</li></ul></p><p><b>Türk Medeni Kanunu'na göre, yukarıdakilerden hangilerinin yerleşim yeri kanuni yerleşim yeridir?</b></p>",
    diff: 3,
    expl: "Kişinin iradesi dışında bizzat kanun tarafından belirlenen yerleşim yerine 'kanuni yerleşim yeri' denir. Velayet altındaki çocukların (anne-babanın yanı) ve vesayet altındakilerin (vesayet makamının yanı) yerleşim yerleri kanunidir. Evli kişiler artık kendi yerleşim yerlerini serbestçe (iradi) seçebilir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: true },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Medeni hukuka göre sınırlı ehliyetsizler;</b></p><ul><li>I. bağışta bulunmak,</li><li>II. vasiyetname düzenlemek,</li><li>III. kefalet sözleşmesi yapmak,</li><li>IV. vakıf kurmak</li></ul><p><b>işlemlerinden hangileri yapamaz?</b></p>",
    diff: 3,
    expl: "Sınırlı ehliyetsizler (ayırt etme gücü olan küçük ve kısıtlılar) kanun gereği şu 4 işlemi kesinlikle yapamazlar: Kefil olmak, önemli bağışta bulunmak, vakıf kurmak ve rekabet yasağı sözleşmesi yapmak. Vasiyetname düzenlemek ise kişiye sıkı sıkıya bağlı bir hak olduğundan yaş şartını sağlamak kaydıyla yapabilirler.",
    answers: [
      { text: "Yalnız II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve IV", ok: false },
      { text: "I, III ve IV", ok: true },
      { text: "II, III ve IV", ok: false }
    ]
  }
];

// ============================================================================
// TEMEL HUKUK KAVRAMLARI - TEST 7
// ============================================================================
export const VAT_TEMEL_HUKUK_TEST_7: McQ[] = [
  {
    text: "<p>\"Saldıray\", adının küçüklüğünden beri dalga geçilmesine neden olduğunu belirterek \"Mert\" adını almak istemektedir.</p><p><b>4721 sayılı Türk Medeni Kanunu m.27'ye göre Saldıray'ın adını değiştirmek için aşağıdakilerden hangisine başvurması gerekmektedir?</b></p>",
    diff: 2,
    expl: "4721 sayılı Türk Medeni Kanunu'nun 27. maddesine göre: 'Ad, ancak haklı sebeplerin varlığı hâlinde mahkeme kararıyla değiştirilebilir.' Adın değiştirilmesi işlemi idari bir işlem (Nüfus Müdürlüğü/e-Devlet) değil, mahkeme kararıyla yapılır ve ardından nüfus siciline tescil edilir.",
    answers: [
      { text: "Kaymakamlığa başvurmalıdır.", ok: false },
      { text: "Nüfus idaresine dilekçe ile başvurmalıdır.", ok: false },
      { text: "Mahkemeye başvurmalıdır.", ok: true },
      { text: "Dilekçeyle e-Devlet üzerinden değiştirmelidir.", ok: false },
      { text: "Noterden tasdik ettirmelidir.", ok: false }
    ]
  },
  {
    text: "<p>Hakan Bey'in kimliğinde \"Hakan Doğan\" yazmaktadır. Fakat yazarlık kariyerinde \"Derin Kalem\" adını kullanıyor. Sosyal çevresi ona güçlü kuvvetli olduğu için \"Ayı Hakan\" diye sesleniyor.</p><p><b>Hakan'ın bu üç farklı ad biçimi sırasıyla hangi ad türlerine karşılık gelir?</b></p>",
    diff: 2,
    expl: "Hakan Doğan: Nüfus kayıtlarında geçen resmî 'ad'dır. Derin Kalem: Kamuya açık eserlerde kullanılan 'müstear ad'dır (takma ad). Ayı Hakan: Toplumun fiziksel özelliklere göre taktığı 'lakap'tır.",
    answers: [
      { text: "Ad – Müstear ad – Lakap", ok: true },
      { text: "Soyad – Rumuz – Takma ad", ok: false },
      { text: "Ön ad – Unvan – Lakap", ok: false },
      { text: "Tescilli ad – Müstear ad – Rumuz", ok: false },
      { text: "Ad – Takma ad – Rumuz", ok: false }
    ]
  },
  {
    text: "<p><b>4721 sayılı Türk Medeni Kanunu'na göre, aşağıdakilerden hangisi hısımlık ilişkisi kurulmasının yollarından biri değildir?</b></p>",
    diff: 2,
    expl: "Hısımlık; kan bağı (doğum), evlilik (kayın hısımlığı), evlat edinme ve babalığın tanınması yollarıyla kurulur. Vesayet (vasi atanması) ise korunmaya muhtaç kişileri temsil etmek için mahkemece kurulan bir ilişkidir, hısımlık veya akrabalık doğurmaz.",
    answers: [
      { text: "Kan bağı", ok: false },
      { text: "Evlenme", ok: false },
      { text: "Vesayet", ok: true },
      { text: "Tanıma", ok: false },
      { text: "Evlat edinme", ok: false }
    ]
  },
  {
    text: "<p><b>Medeni hukuka göre, aşağıdakilerden hangisi dördüncü derece yan soy hısımıdır?</b></p>",
    diff: 3,
    expl: "Hısımlıkta dereceler doğum sayısına göre belirlenir. Kardeş 2. derece, amca/dayı/hala/teyze/yeğen 3. derece, kuzenler ise (ortak kök olan büyükanne/büyükbabaya çıkıp oradan kuzene inildiği için) 4. derece yan soy hısımlarıdır.",
    answers: [
      { text: "Yeğen", ok: false },
      { text: "Kuzen", ok: true },
      { text: "Büyükbabanın kardeşinin torunu", ok: false },
      { text: "Anne bir, baba ayrı kardeş", ok: false },
      { text: "Teyze", ok: false }
    ]
  },
  {
    text: "<p><b>Ahmet ile, anne bir kız kardeşi olan Fatma'nın oğlu Mehmet arasındaki hısımlık ilişkisi aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Ahmet ile Fatma'nın sadece anneleri ortak olduğu için 'yarım kan' hısımdırlar. Mehmet, Fatma'nın oğludur (Ahmet'in yeğeni). Ahmet'ten anneye (1), anneden Fatma'ya (2), Fatma'dan Mehmet'e (3). Sonuç: 3. dereceden yarım kan yan soy hısımlığı.",
    answers: [
      { text: "Üçüncü dereceden yarım kan yan soy hısımlığı", ok: true },
      { text: "İkinci dereceden tam kan yan soy hısımlığı", ok: false },
      { text: "Üçüncü dereceden alt soy hısımlığı", ok: false },
      { text: "İkinci dereceden kayın hısımlığı", ok: false },
      { text: "Dördüncü dereceden yarım kan yan soy hısımlığı", ok: false }
    ]
  },
  {
    text: "<p>Sedef ile Ali evlidir. 4721 sayılı Türk Medeni Kanunu'na göre;</p><ul><li>I. Ali'nin babası ile Sedef'in teyzesi,</li><li>II. Sedef ile Ali,</li><li>III. Ali ile Sedef'in dayısı,</li><li>IV. Sedef'in kız kardeşi ile Ali</li></ul><p><b>verilenlerin hangileri arasında hısımlık ilişkisi bulunmaz?</b></p>",
    diff: 3,
    expl: "Kanuna göre eşler (karı-koca) arasında doğrudan bir hısımlık ilişkisi (akrabalık) bulunmaz; onlar hısımlığı kuran bağın kendisidir (II). Aynı şekilde eşlerin hısımları arasında da (dünürler vb.) hısımlık kurulmaz (I). III ve IV kayın hısımlığıdır.",
    answers: [
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: true },
      { text: "II ve IV", ok: false },
      { text: "III ve IV", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><ul><li>Demir, Buse ile evlidir.</li><li>Buse ve Demir'in Umut isimli bir çocukları vardır.</li><li>Demir'in annesinin adı Hatice, Buse'nin babasının adı Ahmet'tir.</li></ul></p><p><b>Yukarıda verilenler arasındaki hısımlık bağına ilişkin hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "Evlenme ile oluşan kayın hısımlığı, eşlerden biri ile diğer eşin kan hısımları arasında kurulur (Örn: Buse ile Hatice). Ancak eşlerin kan hısımları kendi aralarında hısım olamaz. Bu nedenle 'Hatice (kayınvalide) ile Ahmet (kayınpeder) arasında hısımlık vardır' ifadesi yanlıştır.",
    answers: [
      { text: "Demir ve Buse arasında hısımlık ilişkisi yoktur.", ok: false },
      { text: "Ahmet, Demir'in birinci derece üst soy kayın hısımıdır.", ok: false },
      { text: "Umut, Hatice'nin ikinci derece alt soy kan hısımıdır.", ok: false },
      { text: "Buse, Umut'un birinci derece üst soy kan hısımıdır.", ok: false },
      { text: "Hatice, Ahmet'in ikinci derece yan soy kayın hısımıdır.", ok: true }
    ]
  },
  {
    text: "<p><b>4721 sayılı TMK'ye göre, aşağıdakilerden hangisi evlatlık hısımlığının kurulabilmesi için aranan şartlardan biri değildir?</b></p>",
    diff: 3,
    expl: "Evlat edinenin en az 30 yaşında olması (veya 5 yıllık evli olması), en az 18 yaş farkı ve mahkeme kararı şarttır. Ancak 'evlat edinilecek kişinin küçük yaşta olması' şart değildir; ergin kişiler de belli şartlarla (uzun süre bakılmış olması vb.) evlat edinilebilir.",
    answers: [
      { text: "Evlat edinenin en az 30 yaşında olması", ok: false },
      { text: "Evlat edinen ile evlatlık arasında en az 18 yaş yaş farkının bulunması", ok: false },
      { text: "Evlat edinilecek kişinin küçük yaşta olması", ok: true },
      { text: "Evlat edinmenin mahkeme kararıyla gerçekleşmesi", ok: false },
      { text: "Ergin evlatlığın, evlat edinmeye rıza göstermesi", ok: false }
    ]
  },
  {
    text: "<p><b>4721 sayılı Türk Medeni Kanunu'na göre, aşağıdakilerden hangi ikisi arasında hısımlık dolayısıyla evlenme engeli bulunmamaktadır?</b></p>",
    diff: 3,
    expl: "Türk Medeni Kanunu'na göre üst soy-alt soy, kardeşler, evlat edinen ile evlatlık arasında ve önceki evlilik bitse bile eşin üst soy/alt soyuyla evlenmek yasaktır. Ancak eşlerden birinin, diğerinin yan soy hısımlarıyla (amca, dayı, hala, teyze, kayınbirader, baldız) evlenmesinde yasal engel yoktur.",
    answers: [
      { text: "Teyze ile yeğeni", ok: false },
      { text: "Evlat edinen ile evlatlığı", ok: false },
      { text: "Eşlerden biri ile diğerinin üst soyu", ok: false },
      { text: "Eşlerden biri ile diğerinin amcası", ok: true },
      { text: "Evlat edinen ile evlatlığın alt soyu", ok: false }
    ]
  },
  {
    text: "<p>Tüzel kişi, belirli ve sürekli bir amacı gerçekleştirmek üzere kurulmuş, bağımsız varlığa sahip kişi veya mal topluluğudur.</p><p><b>Buna göre tüzel kişiler ile ilgili olarak;</b></p><ul><li>I. Kanuna uygun şekilde kurulduklarında hak ehliyeti kazanır.</li><li>II. Fiil ehliyetinin kazanılması için zorunlu organların oluşturulması gerekir.</li><li>III. Tüzel kişiler, iradelerini organları vasıtasıyla açıklarlar.</li></ul><p><b>ifadelerinden hangileri doğrudur?</b></p>",
    diff: 2,
    expl: "Tüzel kişiler kuruldukları an hak ehliyetini kazanırlar. Hukuki işlem yapabilmeleri (fiil ehliyeti) için kanuni zorunlu organlarının (Örn: Yönetim Kurulu) kurulması şarttır ve iradelerini bu organlar aracılığıyla açıklarlar. Üç öncül de doğrudur.",
    answers: [
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p><b>4721 sayılı Türk Medeni Kanunu'na göre, aşağıdakilerden hangisi derneklerin temel özelliklerinden biri değildir?</b></p>",
    diff: 2,
    expl: "Dernekler, kişi topluluğu olup en az 7 kişiyle, kazanç amacı gütmeden kurulan tüzel kişilerdir. Dernek kurmak için önceden izin almaya gerek yoktur (Bildirim sistemi geçerlidir); tüzüğün mülki amirliğe verilmesiyle tüzel kişilik kazanılır.",
    answers: [
      { text: "En az 7 gerçek veya tüzel kişi tarafından kurulur.", ok: false },
      { text: "Kazanç amacı güdemez.", ok: false },
      { text: "Tüzel kişiliğe sahiptir.", ok: false },
      { text: "Kuruluşu için önceden yetkili mercilerden izin alınmalıdır.", ok: true },
      { text: "Kişi topluluğu niteliğindedir.", ok: false }
    ]
  },
  {
    text: "<p><b>4721 sayılı Türk Medeni Kanunu'na göre, aşağıdakilerden hangisi vakıfların temel özelliklerinden biri değildir?</b></p>",
    diff: 2,
    expl: "Vakıflar, bir mal varlığının belirli bir amaca özgülenmesiyle (mal topluluğu) oluşan tüzel kişilerdir. En az iki kişi şartı yoktur; tek bir kişi bile malını bağışlayarak vakıf kurabilir.",
    answers: [
      { text: "Tüzel kişiliğe sahip kuruluşlardır.", ok: false },
      { text: "En az iki kişi tarafından kurulmalıdır.", ok: true },
      { text: "Mal topluluğu niteliğindedir.", ok: false },
      { text: "Belirli bir mal varlığı tahsis edilmesi gerekir.", ok: false },
      { text: "Gerçek ve tüzel kişiler tarafından kurulabilir.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi bir özel hukuk tüzel kişisi değildir?</b></p>",
    diff: 2,
    expl: "Vakıf, Dernek, Şirket ve Sendika kişilerin kendi özgür iradeleriyle kurdukları 'Özel Hukuk Tüzel Kişileri'dir. İl özel idaresi, belediye ve köyler ise devletin yetkisiyle kurulan 'Kamu Hukuku Tüzel Kişileri'dir.",
    answers: [
      { text: "Vakıf", ok: false },
      { text: "Dernek", ok: false },
      { text: "Şirket", ok: false },
      { text: "Sendika", ok: false },
      { text: "İl özel idaresi", ok: true }
    ]
  },
  {
    text: "<p>Ahmet, tüzel kişiler hakkında bir tablo oluşturuyor. Tabloda \"Kamu Hukuku Tüzel Kişileri\" bölümüne; T.C. Devleti, Sinop Üniversitesi, Bilecik İl Özel İdaresi, Ankara Barosu, Kulu Belediyesi, TÜBİTAK, Yavaşlı Köyü ve Büro Memur Sendikası'nı yazıyor.</p><p><b>Buna göre Ahmet, bu listedekilerden hangisini yanlış tarafa yazmıştır?</b></p>",
    diff: 3,
    expl: "Sendikalar, işçilerin veya memurların kendi aralarında serbestçe kurduğu 'Özel Hukuk Tüzel Kişileri'dir. Kanunla kurulan veya kamu gücüne sahip olan idareler (Baro, Üniversite, Belediye vb.) gibi Kamu Hukuku tüzel kişisi değillerdir.",
    answers: [
      { text: "Kızılay Derneği", ok: false },
      { text: "Büro Memur Sendikası", ok: true },
      { text: "TEMA Vakfı", ok: false },
      { text: "Bilecik İl Özel İdaresi", ok: false },
      { text: "Kilit Partisi", ok: false }
    ]
  },
  {
    text: "<p><b>4721 sayılı Türk Medeni Kanunu'na göre, federasyonlar kuruluş amaçları aynı olan en az kaç derneğin, amaçlarını gerçekleştirmek üzere üye sıfatıyla bir araya gelmeleri suretiyle kurulur?</b></p>",
    diff: 3,
    expl: "Derneklerin üst kuruluşu olan Federasyonlar, kuruluş amaçları aynı olan en az 5 (beş) derneğin bir araya gelmesiyle kurulur. Konfederasyonlar ise en az 3 federasyonun birleşmesiyle oluşur.",
    answers: [
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "5", ok: true },
      { text: "7", ok: false },
      { text: "15", ok: false }
    ]
  }
];

// ============================================================================
// TEMEL HUKUK KAVRAMLARI - TEST 8
// ============================================================================
export const VAT_TEMEL_HUKUK_TEST_8: McQ[] = [
  {
    text: "<p>4721 Türk Medeni Kanunu'na göre;</p><ul><li>ana ve babaya tanınan çocuğu temsil etme yetkisi,</li><li>belirli bir işin yürütülmesi veya bir malın yönetimi,</li><li>kısıtlı kişinin hem kişisel hem mal varlığı işlerini yürütmesi</li></ul><p><b>verilen açıklamalar sırasıyla hangi kavramlara uygundur?</b></p>",
    diff: 2,
    expl: "Çocuğu anne-babanın temsil etmesine 'Velayet/Veli', belirli bir malın veya işin yönetimi için atanan kişiye 'Kayyım', kısıtlı veya kimsesiz küçüğün tüm işlerini temsilen atanan kişiye ise 'Vasi' denir.",
    answers: [
      { text: "veli – vasi – kayyım", ok: false },
      { text: "veli – kayyım – vasi", ok: true },
      { text: "vasi – veli – kayyım", ok: false },
      { text: "vasi – kayyım – veli", ok: false },
      { text: "kayyım – vasi – veli", ok: false }
    ]
  },
  {
    text: "<p><ul><li>Ali henüz 14 yaşında bir çocuktur ve anne-babası hayattadır.</li><li>Zeynep, küçük bir çocuğa ait miras payını yönetmek üzere sulh hukuk mahkemesi kararıyla atanmıştır.</li><li>Mehmet, zihinsel engeli nedeniyle hem kişisel hem de mal varlığı işlerinde yardım alması gereken bir yetişkindir; onun işlerini bir kişi yürütmektedir.</li></ul></p><p><b>Buna göre Ali, Zeynep ve Mehmet'in hukuki durumlarında bu kişilere atanan sıfatlar sırasıyla hangisinde doğru verilmiştir?</b></p>",
    diff: 3,
    expl: "14 yaşındaki Ali'nin anne babasına 'Veli' denir. Belirli bir miras payını yöneten Zeynep 'Kayyım' statüsündedir. Zihinsel engelli Mehmet'in tüm işlemlerini yürütecek temsilciye ise 'Vasi' denir.",
    answers: [
      { text: "veli – vasi – kayyım", ok: false },
      { text: "veli – kayyım – vasi", ok: true },
      { text: "vasi – kayyım – veli", ok: false },
      { text: "kayyım – veli – vasi", ok: false },
      { text: "vasi – veli – kayyım", ok: false }
    ]
  },
  {
    text: "<p><b>4721 sayılı Türk Medeni Kanunu'na göre, aşağıdakilerden hangisi evlilik için zorunlu bir şart değildir?</b></p>",
    diff: 2,
    expl: "Türk Medeni Kanunu'na göre olağan evlenme yaşı 17'dir. 18 yaşın doldurulması zorunlu bir evlilik şartı değildir, 17 yaşını dolduranlar veli izniyle yasal olarak evlenebilirler.",
    answers: [
      { text: "Kadın ve erkeğin en az on sekiz yaşını doldurmuş olması", ok: true },
      { text: "Evlenecek kişilerin akıl sağlığının yerinde olması", ok: false },
      { text: "Evlenme töreninin resmî memur önünde yapılması", ok: false },
      { text: "Evlenecek kişilerin farklı cinsiyetten olması", ok: false },
      { text: "Evlenme engellerinin bulunmaması", ok: false }
    ]
  },
  {
    text: "<p><b>4721 sayılı Türk Medeni Kanunu'na göre, aşağıdakilerden hangisi yasal mirasçılar arasında yer almaz?</b></p>",
    diff: 2,
    expl: "Yasal (kanuni) mirasçılar; alt soy (çocuk/torun), üst soy (anne/baba), yan soy (kardeş vb.), evlatlık, sağ kalan eş ve Devlettir. Vasiyet alacaklısı ise kanunla değil, ölenin iradesiyle (vasiyetle) mirasçı olduğu için 'iradi mirasçı'dır.",
    answers: [
      { text: "Evlatlık", ok: false },
      { text: "Sağ kalan eş", ok: false },
      { text: "Devlet", ok: false },
      { text: "Vasiyet alacaklısı", ok: true },
      { text: "Alt soy", ok: false }
    ]
  },
  {
    text: "<p>Miras bırakanın ölüm anında geride kalan borç ve alacaklarının oluşturduğu bütüne <b>(I)</b> denir. Mirasçılık sıfatını ve payları resmî olarak gösteren belge <b>(II)</b> olarak adlandırılır. Miras bırakanın ölümünden sonra hüküm doğuracak, tek taraflı irade beyanı ise <b>(III)</b> ile gerçekleştirilir.</p><p><b>Yukarıdaki cümlede yer alan numaralı yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?</b></p>",
    diff: 2,
    expl: "Ölenin mal varlığı bütününe 'Tereke' (I), miras paylarını gösteren resmî belgeye 'Veraset İlamı' (II) ve kişinin ölümünden sonra geçerli olacak son isteklerine 'Vasiyetname' (III) denir.",
    answers: [
      { text: "(I) tereke / (II) vasiyetname / (III) veraset ilamı", ok: false },
      { text: "(I) vasiyetname / (II) tereke / (III) veraset ilamı", ok: false },
      { text: "(I) tereke / (II) veraset ilamı / (III) vasiyetname", ok: true },
      { text: "(I) veraset ilamı / (II) tereke / (III) vasiyetname", ok: false },
      { text: "(I) vasiyetname / (II) veraset ilamı / (III) tereke", ok: false }
    ]
  },
  {
    text: "<p><b>Türk medeni hukukunda eşyanın sahip olması gereken temel özellikleriyle ilgili;</b></p><ul><li>I. Maddi varlık taşımalıdır.</li><li>II. İnsan hâkimiyetine elverişli olmalıdır.</li><li>III. Ekonomik değer taşımalıdır.</li></ul><p><b>ifadelerinden hangileri doğrudur?</b></p>",
    diff: 2,
    expl: "Hukuken bir şeyin 'eşya' sayılabilmesi için bedensel (maddi) bir varlığının olması, üzerinde hakimiyet kurulabilmesi (Örn: Güneş ışığı eşya değildir) ve ekonomik bir değer ifade etmesi gerekir. Üçü de doğrudur.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p>Ahmet, sağlığında tüm mal varlığını üçüncü kişilere bağışlamış, vasiyetnamesinde de mirasçılarından hiç söz etmemiştir. Ölümünden sonra geride alt soyu olan kızı Merve ve sağ kalan eşi Ayşe, kendilerine haksızlık yapıldığını ileri sürerek mahkemeye başvurmuştur.</p><p><b>4721 sayılı Türk Medeni Kanunu'na göre, yasal mirasçıların korunmasına özgü kurum aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Miras bırakanın kendi iradesiyle dahi yasal mirasçılarından (eş, çocuk, anne-baba) kaçıramayacağı, kanunla koruma altına alınmış miras oranına 'saklı pay' (mahfuz hisse) denir.",
    answers: [
      { text: "Mirasın reddi", ok: false },
      { text: "Veraset ilamı", ok: false },
      { text: "Miras ortaklığı", ok: false },
      { text: "Saklı pay", ok: true },
      { text: "Denkleştirme yükümlülüğü", ok: false }
    ]
  },
  {
    text: "<p><b>Türk Medeni Kanunu'na göre, ayni haklarla ilgili;</b></p><ul><li>I. Ayni haklar mutlak haklardır ve herkese karşı ileri sürülebilir.</li><li>II. Mülkiyet hakkı, eşyayı kullanma, yararlanma ve tasarrufta bulunma yetkilerini içerir.</li><li>III. Rehin hakkı ve oturma hakkı sınırlı ayni haklardır.</li></ul><p><b>ifadelerinden hangileri doğrudur?</b></p>",
    diff: 3,
    expl: "Ayni haklar (eşya üzerindeki haklar) herkese karşı ileri sürülebilen mutlak haklardandır (I). Mülkiyet, tam ayni haktır ve 3 yetkiyi de verir (II). Rehin ve irtifak/oturma hakları ise sadece belirli yetkiler veren sınırlı ayni haklardır (III).",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi sınırlı ayni haklardan biri değildir?</b></p>",
    diff: 2,
    expl: "Ayni haklar mülkiyet hakkı (tam ayni hak) ve sınırlı ayni haklar (irtifak, rehin, taşınmaz yükü, intifa) olarak ayrılır. Mülkiyet hakkı eşya üzerindeki en geniş yetkiyi veren tam haktır, sınırlı değildir.",
    answers: [
      { text: "Rehin hakkı", ok: false },
      { text: "İrtifak hakkı", ok: false },
      { text: "Mülkiyet hakkı", ok: true },
      { text: "İntifa hakkı", ok: false },
      { text: "Taşınmaz yükü", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıda verilen hukuki tanımlar;</b></p><ul><li>Taşınmazlara ilişkin mülkiyet ve diğer ayni hakların tescil edildiği Devletin memurlarının tuttuğu kayıtlardır.</li><li>Taşınmaz üzerinde kişisel hakların, tasarruf yetkisinin kısıtlanmasına ilişkin sınırlamaların veya geçici tescil taleplerinin tapuya işlenmesidir.</li><li>Kişinin bir eşya üzerinde fiilî hâkimiyet kurması sonucu doğan, hukuken korunan durumdur.</li></ul><p><b>sırasıyla hangi kavramlara aittir?</b></p>",
    diff: 3,
    expl: "Kayıtların tutulduğu deftere 'Tapu Sicili', kısıtlayıcı/kişisel hakların bu sicile yazılmasına 'Şerh', malın üzerinde fiilen zilyet bulunma/kullanma durumuna ise 'Zilyetlik' denir.",
    answers: [
      { text: "şerh – tapu sicili – zilyetlik", ok: false },
      { text: "tapu sicili – zilyetlik – şerh", ok: false },
      { text: "zilyetlik – şerh – tapu sicili", ok: false },
      { text: "tapu sicili – şerh – zilyetlik", ok: true },
      { text: "zilyetlik – tapu sicili – şerh", ok: false }
    ]
  },
  {
    text: "<p><ul><li><b>----</b> payların belirlenmediği ve ortakların mal üzerinde bir bütün hâlinde malik sayıldığı mülkiyet biçimidir.</li><li><b>----</b> ise payların belirlendiği ve her paydaşın kendi payı üzerinde bağımsız tasarruf yetkisine sahip olduğu mülkiyet biçimidir.</li></ul></p><p><b>Yukarıda bırakılan boşluklara sırasıyla hangisi getirilmelidir?</b></p>",
    diff: 3,
    expl: "Ortakların hisselerinin (paylarının) belli olmadığı, malın tamamına birlikte sahip oldukları tür 'Elbirliği (İştirak) Mülkiyeti'dir (Örn: Miras). Payların (1/2, 1/3 gibi) önceden belli olduğu türe ise 'Paylı (Müşterek) Mülkiyet' denir.",
    answers: [
      { text: "Paylı mülkiyet – el birliği mülkiyet", ok: false },
      { text: "El birliği mülkiyet – paylı mülkiyet", ok: true },
      { text: "Taşınmaz mülkiyeti – el birliği mülkiyeti", ok: false },
      { text: "Paylı mülkiyet – taşınmaz mülkiyeti", ok: false },
      { text: "El birliği mülkiyet – miras ortaklığı", ok: false }
    ]
  },
  {
    text: "<p><ul><li>I. Eşyadan yararlanma ve kullanma yetkisi verir, ancak tasarruf hakkı vermeyen sınırlı bir ayni haktır.</li><li>II. Borcun teminatı amacıyla eşya üzerinde kurulan sınırlı ayni haktır.</li><li>III. Eşya üzerinde en geniş yetkiyi sağlar; kullanma, yararlanma ve tasarruf yetkisi içerir.</li></ul></p><p><b>Yukarıda verilen aynı hak türleriyle bu haklara ilişkin temel özellikler eşleştirildiğinde, hangisi doğrudur?</b></p>",
    diff: 3,
    expl: "Sadece kullanma/yararlanma (meyvesini yeme) veren hak İntifa hakkıdır (I). Teminat için konulan hak Rehin hakkıdır (II). Üç yetkiyi birden veren en geniş hak Mülkiyet hakkıdır (III).",
    answers: [
      { text: "I. rehin hakkı, II. mülkiyet hakkı, III. intifa hakkı", ok: false },
      { text: "I. rehin hakkı, II. intifa hakkı, III. mülkiyet hakkı", ok: false },
      { text: "I. mülkiyet hakkı, II. rehin hakkı, III. intifa hakkı", ok: false },
      { text: "I. intifa hakkı, II. rehin hakkı, III. mülkiyet hakkı", ok: true },
      { text: "I. intifa hakkı, II. mülkiyet hakkı, III. rehin hakkı", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi, borçlar hukukuna hâkim olan ilkelerden biri değildir?</b></p>",
    diff: 3,
    expl: "'Sınırlı sayı ve belirli bir tipe bağlı olma' ilkesi Eşya Hukukunda ayni haklar (mülkiyet, rehin vb.) için geçerlidir. Borçlar hukukunda ise tam tersine 'Sözleşme özgürlüğü' vardır ve taraflar kanunda tipi belirtilmeyen yeni sözleşmeler de üretebilirler.",
    answers: [
      { text: "Borcun zaman aşımına uğraması", ok: false },
      { text: "Üçüncü kişi aleyhine borç kurulamaması", ok: false },
      { text: "Sınırlı sayı ve belirli bir tipe bağlı olma", ok: true },
      { text: "Kusurlu sorumluluk ilkesi", ok: false },
      { text: "Sözleşme özgürlüğü ilkesi", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi sözleşme özgürlüğü kapsamında yer almaz?</b></p>",
    diff: 2,
    expl: "Sözleşme özgürlüğü sınırsız değildir. Taraflar emredici hukuk kurallarına, kamu düzenine, genel ahlaka, kişilik haklarına aykırı veya konusu imkânsız olan bir sözleşme yapamazlar. Yaparlarsa kesin hükümsüz (mutlak butlan) olur.",
    answers: [
      { text: "Tarafların sözleşme yapıp yapmama özgürlüğü", ok: false },
      { text: "Sözleşmenin içeriğini serbestçe belirleme özgürlüğü", ok: false },
      { text: "Sözleşmenin süresini belirleme özgürlüğü", ok: false },
      { text: "Emredici hükümlere ve kişilik haklarına aykırı veya konusu imkânsız olan sözleşme yapma özgürlüğü", ok: true },
      { text: "Sözleşmenin türünü seçme özgürlüğü", ok: false }
    ]
  },
  {
    text: "<p><ul><li>Kural olarak borç ilişkisi, yalnızca sözleşmenin tarafları arasında hüküm ve sonuç doğurur.</li><li>Taraflar, hukuka ve ahlaka aykırı olmamak kaydıyla diledikleri kişiyle sözleşme yapabilir ve içeriğini serbestçe belirleyebilir.</li><li>Sözleşmelerde taraflar kural olarak karşılıklı edim yüklenir.</li></ul></p><p><b>Bu bilgiler sırasıyla aşağıdaki borçlar hukuku ilkelerinden hangilerine karşılık gelir?</b></p>",
    diff: 3,
    expl: "Borcun sadece muhatabını ilgilendirmesi 'Nispilik', dilediğiyle ve istediği içerikte yapabilmesi 'Sözleşme özgürlüğü', karşılıklı çıkar (alacak-verecek) içermesi 'İvazlılık' ilkesidir.",
    answers: [
      { text: "İvazlılık – sözleşme özgürlüğü – nispilik", ok: false },
      { text: "Nispilik – sözleşme özgürlüğü – ivazlılık", ok: true },
      { text: "Sözleşme özgürlüğü – nispilik – ivazlılık", ok: false },
      { text: "Nispilik – ivazlılık – sözleşme özgürlüğü", ok: false },
      { text: "İvazlılık – nispilik – sözleşme özgürlüğü", ok: false }
    ]
  }
];

// ============================================================================
// TEMEL HUKUK KAVRAMLARI - TEST 9
// ============================================================================
export const VAT_TEMEL_HUKUK_TEST_9: McQ[] = [
  {
    text: "<p><ul><li>I. Borçlu</li><li>II. Edim</li><li>III. Alacaklı</li></ul></p><p><b>Türk Borçlar Kanunu'na göre, yukarıdakilerden hangileri borcun unsurları arasında yer alır?</b></p>",
    diff: 2,
    expl: "Her borç ilişkisinde alacaklı, borçlu ve edim olmak üzere üç temel unsur bulunur. Borcun konusu edim, tarafları ise alacaklı ve borçludur.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "Yalnız I", ok: false },
      { text: "I ve III", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi borcu sona erdirmez, ancak alacaklının dava yoluyla alacağını elde etme olanağını ortadan kaldırıp borcu eksik borç hâline getirir?</b></p>",
    diff: 2,
    expl: "Borçlar hukukunda ifa, ibra, takas, yenileme (tecdit) ve kusursuz imkânsızlık borcu tamamen sona erdirir. Zaman aşımına uğraması ise borcu sona erdirmez, sadece alacaklının dava yoluyla talep etme hakkını ortadan kaldırır (eksik borç).",
    answers: [
      { text: "İfa", ok: false },
      { text: "Takas", ok: false },
      { text: "Yenileme", ok: false },
      { text: "Birleşme", ok: false },
      { text: "Zaman aşımı", ok: true }
    ]
  },
  {
    text: "<p><ul><li>Tarafların karşılıklı ve birbirine uygun irade beyanlarıyla kurulan hukuki işlem</li><li>Borçlunun yerine getirmekle yükümlü olduğu yapma, yapmama veya verme davranışı</li><li>Borçlunun borcunu süresi içinde ifa etmemesi veya geciktirmesi hâli</li></ul></p><p><b>Bu ifadeler sırasıyla aşağıdaki kavramlardan hangilerine karşılık gelir?</b></p>",
    diff: 3,
    expl: "İki tarafın karşılıklı irade beyanıyla kurulan işleme 'sözleşme', borçlunun yerine getirmekle yükümlü olduğu davranışa 'edim', zamanında ifa edilmemesine ise 'temerrüt' denir.",
    answers: [
      { text: "edim – sözleşme – temerrüt", ok: false },
      { text: "sözleşme – temerrüt – edim", ok: false },
      { text: "temerrüt – edim – sözleşme", ok: false },
      { text: "sözleşme – edim – temerrüt", ok: true },
      { text: "edim – temerrüt – sözleşme", ok: false }
    ]
  },
  {
    text: "<p><ul><li>I. Sözleşmeler</li><li>II. Haksız fiiller</li><li>III. Sebepsiz zenginleşmeler</li></ul></p><p><b>Türk Borçlar Kanunu'na göre, yukarıdakilerden hangileri borcun kaynakları arasında yer alır?</b></p>",
    diff: 2,
    expl: "Borçlar hukukunda borcun üç temel kaynağı vardır: Sözleşmelerden doğan borçlar, Haksız fiilden doğan borçlar ve Sebepsiz zenginleşmeden doğan borçlar.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi haksız fiilin unsurları arasında yer almaz?</b></p>",
    diff: 2,
    expl: "Haksız fiil sorumluluğunun doğabilmesi için hukuka aykırı fiil, zarar, kusur ve nedensellik bağı gerekir. İbra ise borçlunun borçtan kurtulduğunu gösteren, borcu sona erdiren bir işlemdir.",
    answers: [
      { text: "Zarar", ok: false },
      { text: "Nedensellik bağı", ok: false },
      { text: "Hukuka aykırılık", ok: false },
      { text: "İbra", ok: true },
      { text: "Kusur", ok: false }
    ]
  },
  {
    text: "<p><b>6098 sayılı Türk Borçlar Kanunu'na göre, aşağıdakilerden hangisi sözleşmeyi kesin hükümsüz yapan sebepler arasında yer almaz?</b></p>",
    diff: 3,
    expl: "Emredici hükümlere, kişiliğe, ahlaka ve kamu düzenine aykırılık ile konunun baştan imkânsız olması mutlak butlan (kesin hükümsüzlük) sebepleridir. 'Aşırı yararlanma (gabin)' ise sözleşmeyi kesin hükümsüz kılmaz, iptal edilebilir (nispi butlan) hâle getirir.",
    answers: [
      { text: "Emredici hükümlere aykırılık", ok: false },
      { text: "Ahlaka aykırılık", ok: false },
      { text: "Konusunun imkânsız olması", ok: false },
      { text: "Aşırı yararlanma (gabin)", ok: true },
      { text: "Kamu düzenine aykırılık", ok: false }
    ]
  },
  {
    text: "<p><b>6098 sayılı Türk Borçlar Kanunu'nda sözleşmenin şekline ilişkin olarak benimsenen temel ilke aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Türk Borçlar Kanunu'na göre kural olarak sözleşmelerin geçerliliği belirli bir şekle (yazılı, resmî vb.) tabi değildir. Taraflar sözleşmeyi sözlü, yazılı veya örtülü yapabilirler. Buna 'şekil serbestisi' ilkesi denir.",
    answers: [
      { text: "Emredicilik", ok: false },
      { text: "Taraf iradesinin sınırlandırılması", ok: false },
      { text: "Şekil zorunluluğu", ok: false },
      { text: "Resmî yazılı", ok: false },
      { text: "Şekil serbestisi", ok: true }
    ]
  },
  {
    text: "<p><ul><li>I. Borçlu, kural olarak mal varlığı ile sorumlu tutulur; ancak şartları varsa şahsı üzerinden de sorumluluk doğabilir.</li><li>II. Borçlu, bazı hâllerde yalnızca belirli mal varlığı unsurları ile (sınırlı sorumluluk), bazı hâllerde tüm mal varlığı ile (sınırsız sorumluluk) sorumlu tutulabilir.</li><li>III. Hiç kimse, yalnızca sözleşmeden doğan bir borcunu ifa edemediği gerekçesiyle özgürlüğünden yoksun bırakılamaz.</li></ul></p><p><b>Borçlar hukukunda sorumluluk kavramı ile ilgili yukarıdaki ifadelerden hangileri yanlıştır?</b></p>",
    diff: 3,
    expl: "Borçlar hukukunda genel ilkeye göre borçlu kural olarak yalnızca 'mal varlığı' ile sorumludur; şahıs varlığı (beden bütünlüğü, özgürlük vb.) üzerinden sorumluluk doğamaz. Bu yüzden I. öncül kesinlikle yanlıştır.",
    answers: [
      { text: "Yalnız I", ok: true },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi borcu sona erdiren sebepler arasında yer almaz?</b></p>",
    diff: 2,
    expl: "Borcu sona erdiren sebepler; İfa, İfa imkânsızlığı, İbra, Yenileme (Tecdit), Takas ve Birleşme'dir. Alacaklının değişmesi (alacağın temliki) borcu sona erdirmez, sadece taraf değiştirir.",
    answers: [
      { text: "İbra", ok: false },
      { text: "Alacaklının değişmesi", ok: true },
      { text: "Tecdit (yenileme)", ok: false },
      { text: "Takas", ok: false },
      { text: "Kusursuz ifa imkânsızlığı", ok: false }
    ]
  },
  {
    text: "<p><b>Türk Ticaret Kanunu'na göre;</b></p><ul><li>bir ticari işletmeyi, kısmen dahi olsa, kendi adına işleten kişi,</li><li>ister sabit bir iş yerinde ister gezici olarak faaliyet göstersin, ekonomik faaliyeti sadece geçimini sağlamaya yetecek ölçüde olan ve ticari işletme düzeyine ulaşmayan kişi</li></ul><p><b>ifadeleri sırasıyla aşağıdakilerden hangisini tanımlar?</b></p>",
    diff: 2,
    expl: "Ticari işletmeyi kendi adına işleten kişiye 'Tacir'; ekonomik faaliyeti ancak geçimini sağlamaya yetecek, sermayeden çok emeğine dayanan ve ticari düzeye ulaşmayan kişiye ise 'Esnaf' denir.",
    answers: [
      { text: "esnaf – tacir", ok: false },
      { text: "tacir – esnaf", ok: true },
      { text: "esnaf – sanatkâr", ok: false },
      { text: "tacir – sanatkâr", ok: false },
      { text: "sanatkâr – tacir", ok: false }
    ]
  },
  {
    text: "<p><b>Esnaf işletmesi için öngörülen sınırı aşan düzeyde gelir sağlamayı hedef tutan faaliyetlerin devamlı ve bağımsız şekilde yürütüldüğü işletme aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Kanuna göre esnaf işletmesi sınırını aşan, devamlı, bağımsız ve kâr amacı güden işletmelere 'Ticari işletme' adı verilir.",
    answers: [
      { text: "Ticari işletme", ok: true },
      { text: "Esnaf işletmesi", ok: false },
      { text: "İmalathane", ok: false },
      { text: "Ticari temsilci", ok: false },
      { text: "Teşebbüs", ok: false }
    ]
  },
  {
    text: "<p><ul><li>I. Kollektif şirket</li><li>II. Limitet şirket</li><li>III. Anonim şirket</li></ul></p><p><b>6102 sayılı Türk Ticaret Kanunu'na göre, yukarıdaki şirketlerden hangileri tek kişi ile kurulabilir?</b></p>",
    diff: 3,
    expl: "Yeni Türk Ticaret Kanunu'na göre Limitet şirket (en fazla 50 kişi) ve Anonim şirket en az 1 (tek) kişi ile kurulabilmektedir. Ancak Kollektif şirket (şahıs şirketi) en az 2 ortakla kurulmak zorundadır.",
    answers: [
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: true },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>6102 sayılı Türk Ticaret Kanunu'na göre,</b></p><ul><li>I. limitet şirket,</li><li>II. kollektif şirket,</li><li>III. anonim şirket</li></ul><p><b>verilenlerden hangileri sermaye şirketidir?</b></p>",
    diff: 3,
    expl: "Türk Ticaret Kanunu'na göre Anonim, Limitet ve Sermayesi Paylara Bölünmüş Komandit şirketler 'sermaye şirketi' sayılır. Kollektif ve adi komandit şirketler ise 'şahıs şirketi'dir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: true }
    ]
  },
  {
    text: "<p>Amerikan vatandaşı olan Ali, Türkiye'de bulunan taşınmaz malları üzerinde miras hakkı iddiasında bulunarak dava açmak istemektedir.</p><p><b>Ali'nin Amerikan vatandaşlığı nedeniyle uygulanacak hukuk ve miras hakkının tespiti bakımından doğacak uyuşmazlık, hangi hukuk dalının konusuna girer?</b></p>",
    diff: 2,
    expl: "Birden çok ülkenin hukukunun ilgi alanına giren, yani içinde 'yabancılık unsuru' barındıran özel hukuk uyuşmazlıkları 'Devletler özel hukuku'nun konusudur.",
    answers: [
      { text: "Medeni hukuk", ok: false },
      { text: "Borçlar hukuku", ok: false },
      { text: "Ticaret hukuku", ok: false },
      { text: "Devletler özel hukuku", ok: true },
      { text: "Devletler genel hukuku", ok: false }
    ]
  },
  {
    text: "<p><b>Türk hukukuna göre,</b></p><ul><li>Gerçek kişiler (insanlar) ile Devlet arasındaki hukuki ve siyasi bağ,</li><li>Bir gerçek kişi veya bir şey (gemi, uçak) ile Devlet arasındaki siyasi ve hukuki bağ,</li></ul><p><b>açıklamaları sırasıyla aşağıdakilerden hangisini ifade eder?</b></p>",
    diff: 3,
    expl: "Sadece insanlar ile devlet arasındaki bağ 'vatandaşlık' olarak adlandırılırken; gerek gerçek/tüzel kişilerin gerekse eşyaların (gemi, uçak) devletle olan genel bağına 'uyrukluk (tabiiyet)' denir.",
    answers: [
      { text: "uyrukluk – vatandaşlık", ok: false },
      { text: "vatandaşlık – uyrukluk", ok: true },
      { text: "uyrukluk – devletler arası hukuk", ok: false },
      { text: "vatandaşlık – yabancılık", ok: false },
      { text: "uyrukluk – yabancılık", ok: false }
    ]
  },
  {
    text: "<p><b>Türk vatandaşlığını kazanmak isteyen yabancılarda;</b></p><ul><li>Başvuru tarihinden geriye doğru Türkiye'de kesintisiz <b>----</b> yıl ikamet etmek,</li><li>Bir Türk vatandaşı ile en az <b>----</b> yıldan beri evli olmak</li></ul><p><b>aranan yıl şartında bırakılan boşluklara sırasıyla hangisi getirilmelidir?</b></p>",
    diff: 2,
    expl: "Türk vatandaşlığına genel yoldan başvuran yabancılarda kesintisiz '5 yıl' ikamet şartı aranırken; evlenme yoluyla başvuracak kişilerde en az '3 yıldan' beri evli olma şartı aranır.",
    answers: [
      { text: "5 – 4", ok: false },
      { text: "5 – 3", ok: true },
      { text: "5 – 5", ok: false },
      { text: "3 – 5", ok: false },
      { text: "3 – 3", ok: false }
    ]
  }
];

// ============================================================================
// TEMEL HUKUK KAVRAMLARI - TEST 10
// ============================================================================
export const VAT_TEMEL_HUKUK_TEST_10: McQ[] = [
  {
    text: "<p><b>Aşağıdakilerden hangisi özel haklar arasında yer almaz?</b></p>",
    diff: 2,
    expl: "Özel haklar, bireylerin kendi aralarındaki özel hukuk ilişkilerinden doğan haklardır (boşanma, miras, mülkiyet, alacak). Ancak seçme ve seçilme hakkı, devlet ile birey arasındaki siyasi bir ilişkiyi düzenleyen kamu (anayasal) hakkıdır.",
    answers: [
      { text: "Boşanma hakkı", ok: false },
      { text: "Miras hakkı", ok: false },
      { text: "Seçme ve seçilme hakkı", ok: true },
      { text: "Mülkiyet hakkı", ok: false },
      { text: "Alacak hakkı", ok: false }
    ]
  },
  {
    text: "<p><ul><li>Herkese karşı ileri sürülebilen ve herkesin bu hakka saygı göstermekle yükümlü olduğu haklardır.</li><li>Sadece belirli kişiler arasında geçerli olan ve sadece ilgili kişilere karşı kullanılabilen haklardır.</li></ul></p><p><b>Yukarıda verilen ifadeler sırasıyla hangilerini tanımlar?</b></p>",
    diff: 2,
    expl: "Herkese karşı ileri sürülebilen haklara 'mutlak haklar' (Örn: mülkiyet hakkı), sadece hukuki ilişkinin tarafı olan belirli kişilere karşı ileri sürülebilen haklara ise 'nispi haklar' (Örn: alacak hakkı) denir.",
    answers: [
      { text: "nispi hak – mutlak hak", ok: false },
      { text: "kişilik hakkı – mülkiyet hakkı", ok: false },
      { text: "mutlak hak – nispi hak", ok: true },
      { text: "ayni hak – kişilik hakkı", ok: false },
      { text: "devren kazanım – aslen kazanım", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıda verilen mutlak hak ve nispi hak eşleştirmelerinden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "Mülkiyet ve kişilik hakları herkese karşı ileri sürülebildiği için mutlak haktır. Alacak ve nafaka hakları ise belirli kişilerden istendiği için nispi haktır. Kira hakkı da yalnızca sözleşme yapılan kiraya verene (ev sahibine) karşı ileri sürülebilen nispi bir haktır; mutlak hak değildir.",
    answers: [
      { text: "mutlak hak – mülkiyet hakkı", ok: false },
      { text: "nispi hak – alacak hakkı", ok: false },
      { text: "mutlak hak – kişilik hakkı", ok: false },
      { text: "nispi hak – nafaka hakkı", ok: false },
      { text: "mutlak hak – kira hakkı", ok: true }
    ]
  },
  {
    text: "<p>Miras yolu ile veya sözleşme gibi hukuki bir işlemle başkasına devredilebilen, kişiye bağlı olmayan haklar devredilebilen haklardır.</p><p><b>Buna göre,</b></p><ul><li>I. mülkiyet hakkı,</li><li>II. alacak hakkı,</li><li>III. nafaka hakkı,</li><li>IV. rehin hakkı</li></ul><p><b>gibi haklardan hangileri devredilebilen haklardır?</b></p>",
    diff: 3,
    expl: "Mülkiyet, alacak ve rehin hakları (mal varlığı hakları oldukları için) bir başkasına devredilebilir. Ancak 'nafaka hakkı', intifa hakkı ve oturma hakkı gibi haklar doğrudan kişiye bağlı oldukları için başkasına devredilemezler.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "III ve IV", ok: false },
      { text: "I, II ve III", ok: false },
      { text: "I, II ve IV", ok: true }
    ]
  },
  {
    text: "<p><ul><li>Kullanıldığında yeni bir hukuksal durum yaratmaz.</li><li>Kullanıldığında, mevcut bir hukuki durumu kuran, değiştiren ya da sona erdiren sonuç doğurur.</li></ul></p><p><b>Yukarıda verilen ifadeler sırasıyla hangi kavramlara denk gelmektedir?</b></p>",
    diff: 3,
    expl: "Kullanılmasıyla yeni bir hukuki durum doğurmayan haklara 'alelade (sıradan) haklar' (Örn: velayet hakkı) denir. Tek taraflı irade ile yeni bir hukuki durum kuran, değiştiren veya bozan haklara ise 'yenilik doğuran (inşai) haklar' denir.",
    answers: [
      { text: "yenilik doğuran hak – alelade hak", ok: false },
      { text: "alelade hak – yenilik doğuran hak", ok: true },
      { text: "talep hakkı – dava hakkı", ok: false },
      { text: "kişisel hak – mutlak hak", ok: false },
      { text: "kurucu hak – talep hakkı", ok: false }
    ]
  },
  {
    text: "<p>Sözleşmelerde kabul beyanı bir <b>----</b>, mirasın reddi bir <b>----</b>, ayıplı malın değiştirilmesini isteme ise bir <b>----</b> yenilik doğuran haktır.</p><p><b>Yukarıdaki ifadede boş bırakılan yerlere sırasıyla hangisi getirilmelidir?</b></p>",
    diff: 3,
    expl: "Kabul beyanı yeni bir ilişki doğurduğu için 'kurucu', mirasın reddi var olan ilişkiyi sona erdirdiği için 'bozucu', ayıplı malın yenisiyle değiştirilmesi ise ilişkinin içeriğini değiştirdiği için 'değiştirici' yenilik doğuran haktır.",
    answers: [
      { text: "kurucu – bozucu – değiştirici", ok: true },
      { text: "bozucu – kurucu – değiştirici", ok: false },
      { text: "değiştirici – bozucu – kurucu", ok: false },
      { text: "kurucu – değiştirici – bozucu", ok: false },
      { text: "kurucu – değiştirici – değiştirici", ok: false }
    ]
  },
  {
    text: "<p><ul><li>I. Kişinin hukuki sonuç doğurmak amacıyla yaptığı irade açıklamasıdır.</li><li>II. Hukukun sonuç bağladığı doğal olay ya da durumdur.</li><li>III. Hukuki sonuç doğuran insan davranışıdır.</li></ul></p><p><b>Bu tanımlar sırasıyla aşağıdaki kavramlarla eşleştirildiğinde hangisi doğrudur?</b></p>",
    diff: 3,
    expl: "Sonuç doğurmak maksadıyla yapılan bilinçli irade açıklamasına (Örn: sözleşme) 'hukuki işlem' denir. İrade dışı gelişen ancak hukukun sonuç bağladığı olaylara (Örn: ölüm) 'hukuki olay' denir. Hukuki sonuç doğuran iradi insan eylemlerine (Örn: ikametgâh edinme) ise 'hukuki fiil' denir.",
    answers: [
      { text: "I – hukuki fiil, II – hukuki işlem, III – hukuki olay", ok: false },
      { text: "I – hukuki olay, II – hukuki fiil, III – hukuki işlem", ok: false },
      { text: "I – hukuki işlem, II – hukuki olay, III – hukuki fiil", ok: true },
      { text: "I – hukuki fiil, II – hukuki olay, III – hukuki işlem", ok: false },
      { text: "I – hukuki işlem, II – hukuki fiil, III – hukuki olay", ok: false }
    ]
  },
  {
    text: "<p><b>4721 sayılı Türk Medeni Kanunu'na göre</b></p><ul><li>taşınmazlarda mülkiyetin devren kazanılması,</li><li>taşınır mallarda mülkiyetin devri,</li></ul><p><b>kural olarak sırasıyla hangisi ile gerçekleşmektedir?</b></p>",
    diff: 2,
    expl: "Türk Medeni Kanunu'na göre taşınmaz mülkiyetinin devri/kazanılması kural olarak 'tapu siciline tescil' ile olur. Taşınır (menkul) mallarda ise mülkiyetin devri o malın fiilen teslimi yani 'zilyetliğin devri' ile gerçekleşir.",
    answers: [
      { text: "tapu tescili – noter onaylı sözleşme", ok: false },
      { text: "iyi niyet – tescil", ok: false },
      { text: "tapu tescili – zilyetliğin teslimi", ok: true },
      { text: "teslim – yazılı irade beyanı", ok: false },
      { text: "zilyetliğin teslimi – miras yoluyla geçiş", ok: false }
    ]
  },
  {
    text: "<p><ul><li>Burcu, ormanda yürürken bir mantar bulup evine götürmüştür.</li><li>Cihan, köydeki sahipsiz ve tapusuz bir araziyi çitle çevirip domates ekmeye başlamıştır.</li></ul></p><p><b>Bu durumda Burcu ve Cihan'ın taşınır ve taşınmaz mallarda hak sahibi olması sırasıyla aşağıdaki eşleştirmelerden hangisinde doğru verilmiştir?</b></p>",
    diff: 3,
    expl: "Sahipsiz bir taşınır malı aslen kazanmaya 'sahiplenme (ihraz)' denir (Mantar toplamak). Sahipsiz bir taşınmaz malı aslen kazanmaya ise 'işgal' denir (Araziyi çevirmek).",
    answers: [
      { text: "aslen kazanım – devren kazanım", ok: false },
      { text: "işgal – sahiplenme", ok: false },
      { text: "sahiplenme – işgal", ok: true },
      { text: "devren kazanım – aslen kazanım", ok: false },
      { text: "haksız fiil – zilyetlik devri", ok: false }
    ]
  },
  {
    text: "<p>4721 sayılı Türk Medeni Kanunu'na göre, <i>\"Durumun gereklerine göre kendisinden beklenen özeni göstermeyen kimse <b>----</b> iddiasında bulunamaz.\"</i></p><p><b>İfadesinde bırakılan boşluğa aşağıdakilerden hangisi getirilmelidir?</b></p>",
    diff: 2,
    expl: "Bir hakkın kazanılmasında engeli bilmeyen kişinin durumunu koruyan iyi niyet (sübjektif iyi niyet) kuralıdır. Ancak kişi kendisinden beklenen asgari dikkati göstermemişse 'iyi niyet' iddiasında bulunamaz.",
    answers: [
      { text: "Dürüstlük", ok: false },
      { text: "Erginlik", ok: false },
      { text: "İyi niyet", ok: true },
      { text: "İspat yükü", ok: false },
      { text: "Takdir yetkisi", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi tek taraflı bir hukuki işlem değildir?</b></p>",
    diff: 2,
    expl: "Mirasın reddi, vakıf kurma, tanıma, vasiyetname ve sözleşmeden dönme işlemleri yalnızca bir kişinin irade açıklamasıyla (tek taraflı) hukuki sonuç doğurur. Ancak 'Sözleşme', adından da anlaşılacağı üzere en az iki tarafın karşılıklı irade uyuşmasıyla kurulan iki/çok taraflı bir işlemdir.",
    answers: [
      { text: "Mirasın reddi", ok: false },
      { text: "Sözleşme", ok: true },
      { text: "Vakıf kurma", ok: false },
      { text: "Tanıma", ok: false },
      { text: "Vasiyetname", ok: false }
    ]
  },
  {
    text: "<p>4721 sayılı Türk Medeni Kanunu m. 2'de yer alan, <i>\"Bir hakkın açıkça kötüye kullanılmasını hukuk düzeni korumaz\"</i>. <b>ifadesi aşağıdakilerden hangisi kapsamında düzenlenmiştir?</b></p>",
    diff: 2,
    expl: "TMK m.2 'Dürüstlük Kuralı'nı (Objektif İyi Niyet) düzenler. Herkes haklarını kullanırken ve borçlarını ifa ederken dürüst davranmak zorundadır; bir hakkı sırf başkasına zarar vermek için kötüye kullanmak dürüstlük kuralına aykırıdır.",
    answers: [
      { text: "Hukukun uygulanması ve kaynakları", ok: false },
      { text: "Dürüst davranma", ok: true },
      { text: "Takdir yetkisi", ok: false },
      { text: "İyi niyet", ok: false },
      { text: "İspat yükü", ok: false }
    ]
  },
  {
    text: "<p><b>Medeni hukuka göre</b></p><ul><li>Hakların kazanılmasında ve bir hukuksal sonucun doğmasındaki engelin bilinmemesinde,</li><li>Hakların kullanılmasında ve borçların yerine getirilmesinde</li></ul><p><b>sırasıyla aşağıdaki ilkelerden hangisi geçerlidir?</b></p>",
    diff: 3,
    expl: "Bir hakkın kazanılmasında eksikliği/engeli bilmemek 'İyi niyet' (Sübjektif iyi niyet, TMK m.3), var olan hakların kullanılması ve borçların yerine getirilmesinde uyulması gereken namuslu davranış ilkesi ise 'Dürüstlük' (Objektif iyi niyet, TMK m.2) kuralıdır.",
    answers: [
      { text: "dürüstlük – iyi niyet", ok: false },
      { text: "eşitlik – dürüstlük", ok: false },
      { text: "iyi niyet – dürüstlük", ok: true },
      { text: "adalet – eşitlik", ok: false },
      { text: "eşitlik – adalet", ok: false }
    ]
  },
  {
    text: "<p><ul><li>Bir kişinin hakkını korumak için yetkili makamlara başvurma imkânı bulunmadığında, hakkını makul sınırlar içinde kendisinin korumasıdır.</li><li>Bir kimsenin kendisine veya bir başkasına yönelik haksız bir saldırıyı önlemek amacıyla, saldırının niteliğine uygun şekilde savunma yapmasıdır.</li><li>Bir kişinin kendisinin veya başkasının canına ya da malına yönelik ağır ve yakın bir tehlikeden korunmak amacıyla, başkasının malına zarar vermesidir.</li></ul></p><p><b>Yukarıda verilen tanımlar sırasıyla hangi hukuka uygunluk sebepleridir?</b></p>",
    diff: 3,
    expl: "1. Kendi hakkını devlet gücüne başvuramadığı acil anda bizzat koruması 'Kendi gücüyle koruma', 2. Haksız saldırıyı orantılı şekilde defetmek 'Meşru müdafaa', 3. Bir tehlikeden kaçınmak için masum birinin malına (örn: kapıyı kırmak) zarar vermek 'Zaruret hâli (Iztırar)' olarak adlandırılır.",
    answers: [
      { text: "Meşru müdafaa, zaruret hâli, kendi gücüyle koruma", ok: false },
      { text: "Zaruret hâli, meşru müdafaa, kendi gücüyle koruma", ok: false },
      { text: "Meşru müdafaa, kendi gücüyle koruma, zaruret hâli", ok: false },
      { text: "Kendi gücüyle koruma, zaruret hâli, meşru müdafaa", ok: false },
      { text: "Kendi gücüyle koruma, meşru müdafaa, zaruret hâli", ok: true }
    ]
  }
];

// ============================================================================
// TEMEL HUKUK KAVRAMLARI - TEST 11
// ============================================================================
export const VAT_TEMEL_HUKUK_TEST_11: McQ[] = [
  {
    text: "<p><b>Bir otel işletmecisinin, müşterisinin kendisine bıraktığı eşya üzerinde ödenmeyen otel ücreti nedeniyle alacağını güvence altına almak için hapis hakkına sahip olması aşağıdaki hukuka uygunluk sebeplerinden hangisidir?</b></p>",
    diff: 3,
    expl: "Hakkın kaybolması tehlikesi mevcutken ve o anda mahkeme/kolluk güçlerine başvurma imkânı yokken, kişinin alacağını güvenceye almak için başkasının malına el koymasına 'Kendi hakkını kendi gücüyle koruma (kuvvet kullanma)' denir.",
    answers: [
      { text: "Iztırar hali", ok: false },
      { text: "Kendi gücüyle koruma", ok: true },
      { text: "Meşru müdafaa", ok: false },
      { text: "Zorunluluk hâli", ok: false },
      { text: "Haklı savunma", ok: false }
    ]
  },
  {
    text: "<p><b>5237 sayılı Türk Ceza Kanunu'na göre aşağıdakilerden hangisi meşru müdafaanın şartlarından biri değildir?</b></p>",
    diff: 3,
    expl: "Meşru müdafaa (haklı savunma) için saldırının haksız olması, hâlen devam etmesi (veya muhakkak olması) ve savunmanın saldırıyla orantılı/defetme amaçlı olması şarttır. Ancak saldırının fail tarafından 'önceden tasarlanmış' olması diye bir şart yoktur; anlık gelişen olaylarda da meşru müdafaa yapılabilir.",
    answers: [
      { text: "Saldırının haksız olması", ok: false },
      { text: "Saldırının devam ediyor veya derhâl gerçekleşmek üzere olması", ok: false },
      { text: "Saldırının fail tarafından önceden tasarlanmış olması", ok: true },
      { text: "Savunmanın saldırı ile orantılı olması", ok: false },
      { text: "Savunmanın saldırıyı defetmek amacıyla yapılması", ok: false }
    ]
  },
  {
    text: "<p>A, ormanda dolaşırken yırtıcı bir hayvanın saldırısına uğrar. Kendisini korumak için A, ormanda yaşayan B'nin kulübesinin kapısını kırarak içeri girer.</p><p><b>Buna göre A için aşağıdaki hukuka uygunluk hâllerinden hangisi bulunmaktadır?</b></p>",
    diff: 2,
    expl: "Kendisine veya başkasına yönelik ağır ve muhakkak bir tehlikeden kurtulmak amacıyla, tehlikeyle ilgisi olmayan masum üçüncü bir kişinin malına zarar verilmesine 'Iztırar (Zorunluluk/Zaruret) Hâli' denir.",
    answers: [
      { text: "Iztırar hâli", ok: true },
      { text: "Meşru savunma hâli", ok: false },
      { text: "Hakkın kullanılması hâli", ok: false },
      { text: "Kanun hükmünün yerine getirilmesi hâli", ok: false },
      { text: "İlgilinin rızası", ok: false }
    ]
  },
  {
    text: "<p><b>5237 sayılı Türk Ceza Kanunu'na göre, fiili işlediği sırada kaç yaşını doldurmamış çocukların cezai sorumluluğu yoktur?</b></p>",
    diff: 2,
    expl: "TCK m.31'e göre: 'Fiili işlediği sırada 12 yaşını doldurmamış olan çocukların ceza sorumluluğu yoktur.' 12 yaşından küçüklere sadece çocuklara özgü güvenlik tedbirleri uygulanabilir.",
    answers: [
      { text: "12", ok: true },
      { text: "13", ok: false },
      { text: "15", ok: false },
      { text: "16", ok: false },
      { text: "18", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi fiil ehliyeti bakımından sınırlı ehliyetli sayılmaktadır?</b></p>",
    diff: 3,
    expl: "Sınırlı ehliyetliler, aslında ayırt etme gücü olan ve ergin olan kişilerdir. Ancak kanunen bazı işlemleri yapabilmek için korunmaları amacıyla mahkemece 'kendilerine yasal danışman atanmış' kişilerdir.",
    answers: [
      { text: "Ergin olmayanlar", ok: false },
      { text: "Kötü yaşam nedeniyle kısıtlananlar", ok: false },
      { text: "Kendisine yasal danışman atanmışlar", ok: true },
      { text: "Ergin, ayırt etme gücü olup, kısıtlı olmayanlar", ok: false },
      { text: "Ayırt etme gücü olan on yedi yaşındaki çocuklar", ok: false }
    ]
  },
  {
    text: "<p><b>A'nın babası ile eşi G'nin annesi arasındaki hısımlık durumu ile ilgili aşağıdakilerden hangisi doğrudur?</b></p>",
    diff: 3,
    expl: "Evlenme ile oluşan kayın hısımlığı yalnızca eşlerden biri ile diğer eşin kan akrabaları arasında kurulur. Ancak eşlerin kendi akrabaları arasında (dünürler, yani A'nın babası ile G'nin annesi) hukuken herhangi bir hısımlık bağı (akrabalık) bulunmaz.",
    answers: [
      { text: "Herhangi bir hısımlık ilişkisi bulunmaz.", ok: true },
      { text: "İkinci derece üst soy kan hısımlığı vardır.", ok: false },
      { text: "Üçüncü derece üst soy kayın hısımlığı vardır.", ok: false },
      { text: "İkinci derece yan soy kayın hısımlığı vardır.", ok: false },
      { text: "Üçüncü derece yan soy kayın hısımlığı vardır.", ok: false }
    ]
  },
  {
    text: "<p><b>Türk Hukukunda gerçek veya tüzel kişilerin yeterli mal ve hakları belirli ve sürekli bir amaca özgülemeleriyle oluşan tüzel kişiliğe sahip mal topluluklarına ne ad verilir?</b></p>",
    diff: 2,
    expl: "Dernek ve şirketler 'kişi topluluğu'dur. Ancak mal varlığının belli bir amaca özgülenmesiyle kurulan 'mal topluluğu' statüsündeki tüzel kişilere 'Vakıf' adı verilir.",
    answers: [
      { text: "Dernek", ok: false },
      { text: "Tereke", ok: false },
      { text: "El birliği mülkiyeti", ok: false },
      { text: "Vakıf", ok: true },
      { text: "Şirket", ok: false }
    ]
  },
  {
    text: "<p>Bir kişi, hukuki bir işlem yaparken, durumun gereklerine göre elinden gelen özeni göstermesine rağmen, işlemin geçersizliğine neden olan bir engelin varlığından habersizdir. Ancak bu durum onun hukuken korunmasını sağlar.</p><p><b>Bu ifade aşağıdaki kavramlardan hangisini tanımlamaktadır?</b></p>",
    diff: 2,
    expl: "Kişinin hak kazanırken eksikliği veya kusuru bilmemesine, asgari özeni göstermesine rağmen habersiz olmasına ve hukuk tarafından korunmasına 'İyi niyet (sübjektif iyi niyet)' ilkesi denir.",
    answers: [
      { text: "Hakkın kötüye kullanılması", ok: false },
      { text: "Muvazaa", ok: false },
      { text: "Fiil ehliyeti", ok: false },
      { text: "İyi niyet", ok: true },
      { text: "Dürüst davranma", ok: false }
    ]
  },
  {
    text: "<p>Sahibine var olan hukuki durumu sona erdirmek yetkisi veren haklar bozucu yenilik doğuran haklardır.</p><p><b>Aşağıdakilerden hangisi bozucu yenilik doğuran bir hak değildir?</b></p>",
    diff: 3,
    expl: "Boşanma, fesih, mirasın reddi ve istifa mevcut bir ilişkiyi kökten bitiren bozucu haklardır. Ancak 'Alım (iştira) hakkı', tıpkı geri alım, ön alım ve kabul beyanları gibi kullanıldığında sözleşme ilişkisi kuran 'kurucu yenilik doğuran' haktır.",
    answers: [
      { text: "Boşanma hakkı", ok: false },
      { text: "Sözleşmenin feshi", ok: false },
      { text: "Mirasın reddi", ok: false },
      { text: "İstifa", ok: false },
      { text: "Alım hakkı", ok: true }
    ]
  },
  {
    text: "<p><b>4721 sayılı Türk Medeni Kanunu'na göre, aşağıdakilerden hangisi ayırt etme gücünü etkileyen sebepler arasında yer almaz?</b></p>",
    diff: 2,
    expl: "Akıl hastalığı, akıl zayıflığı, yaş küçüklüğü ve sarhoşluk kişinin fiillerini algılama yeteneğini (ayırt etme gücü) ortadan kaldırır. Ancak 'Savurganlık' kişinin ayırt etme gücünü bozmaz; sadece parasını kontrolsüz harcadığı için mahkemece kısıtlanmasına neden olan bir sebeptir.",
    answers: [
      { text: "Akıl hastalığı", ok: false },
      { text: "Akıl zayıflığı", ok: false },
      { text: "Savurganlık", ok: true },
      { text: "Yaş küçüklüğü", ok: false },
      { text: "Sarhoşluk", ok: false }
    ]
  },
  {
    text: "<p><b>Kişinin yerleşim yeri edinme durumunun hukuki niteliği aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Kişinin kendi iradesiyle, bir yerde sürekli kalmak niyetiyle bulunması (ikametgâh) hukuken bir irade açıklamasıdır. Sonuç doğuran insan davranışlarını ifade ettiği için bu durum 'Hukuki fiil' niteliğindedir.",
    answers: [
      { text: "Hukuki işlem", ok: false },
      { text: "Hukuki fiil", ok: true },
      { text: "Hukuki olay", ok: false },
      { text: "Sahiplenme", ok: false },
      { text: "Muvazaa", ok: false }
    ]
  },
  {
    text: "<p><b>4721 sayılı Türk Medeni Kanunu'na göre kişilerin haklarını kullanırken ve borçlarını yerine getirirken uymakla yükümlü olduğu, herkes için geçerli olan genel davranış ilkesi aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "TMK m.2 uyarınca, 'Herkes, haklarını kullanırken ve borçlarını yerine getirirken dürüstlük kurallarına uymak zorundadır.' Bu kural objektif iyi niyeti ve genel davranış standardını ifade eder.",
    answers: [
      { text: "Hakkaniyet", ok: false },
      { text: "Dürüstlük", ok: true },
      { text: "Örf ve âdet", ok: false },
      { text: "İyi niyet", ok: false },
      { text: "Takdir yetkisi", ok: false }
    ]
  },
  {
    text: "<p>Hukuka giriş dersinin hocası olan Halil, <i>\"Bir örf ve âdetin, örf ve âdet hukuku kuralı hâline gelebilmesi, toplum içinde uzun zamandan beri sürekli olarak uygulanabilmesine ve tekrarlanmasına bağlıdır.\"</i> diyor.</p><p><b>Buna göre Halil, yukarıdaki ifadede örf âdet hukukunun hangi unsurunu vurgulamıştır?</b></p>",
    diff: 2,
    expl: "Örf ve adet hukukunun kural olabilmesi için 3 unsur gerekir: Uzun süredir tekrarlanma ve alışkanlık (Maddi unsur), toplumun buna inanması (Manevi unsur) ve devlet/hukuk tarafından desteklenmesi (Hukuki unsur). Halil Hoca 'sürekli uygulanma ve tekrarlanma' diyerek Maddi unsuru vurgulamıştır.",
    answers: [
      { text: "Maddi unsur", ok: true },
      { text: "Manevi unsur", ok: false },
      { text: "Hukuki unsur", ok: false },
      { text: "Kanuni unsur", ok: false },
      { text: "Amaç unsuru", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi, borcun varlığını sona erdirmeyip sadece borçlunun borcu ödemekten kaçınmasına olanak sağlayan bir savunmadır?</b></p>",
    diff: 3,
    expl: "Borçlunun borcu kabul etmesi ancak belirli bir sebepten ötürü (örneğin borcun zaman aşımına uğraması) ödemekten hukuken kaçınma hakkı veren savunma yoluna 'Def'i' denir. İtirazda ise borcun doğmadığı veya sona erdiği iddia edilir.",
    answers: [
      { text: "İtiraz", ok: false },
      { text: "Def'i", ok: true },
      { text: "İbra", ok: false },
      { text: "Tazminat", ok: false },
      { text: "Sözleşme feshi", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki haklardan hangisi, eşya üzerinde kurulan mutlak haklardan biri değildir?</b></p>",
    diff: 3,
    expl: "İntifa, rehin, mülkiyet ve irtifak hakları doğrudan eşya/mal varlığı üzerinde kurulan ve herkese karşı ileri sürülebilen mutlak haklardır (ayni hak). Ancak 'Velayet hakkı' eşya üzerinde değil, 'kişiler' (çocuklar) üzerinde kurulan mutlak haktır.",
    answers: [
      { text: "İntifa hakkı", ok: false },
      { text: "Rehin hakkı", ok: false },
      { text: "Velayet hakkı", ok: true },
      { text: "Mülkiyet hakkı", ok: false },
      { text: "İrtifak hakkı", ok: false }
    ]
  },
  {
    text: "<p><b>6102 sayılı Türk Ticaret Kanunu'na göre, aşağıdakilerden hangisi ticaret şirketleri arasında yer almaz?</b></p>",
    diff: 2,
    expl: "Türk Ticaret Kanunu m.124'e göre ticaret şirketleri 5 gruba ayrılır: Kollektif, Komandit, Anonim, Limitet ve Kooperatif şirket. 'Adi Şirket' ise Borçlar Kanunu'nda düzenlenmiş olup tüzel kişiliğe sahip olmayan, ticaret şirketi sayılmayan bir gruptur.",
    answers: [
      { text: "Anonim şirket", ok: false },
      { text: "Komandit şirket", ok: false },
      { text: "Limitet şirket", ok: false },
      { text: "Adi şirket", ok: true },
      { text: "Kolektif şirket", ok: false }
    ]
  }
];