import { McQ } from "../../../../types";

// ============================================================================
// SÖZCÜK GRUPLARI ÇIKMIŞ SORULAR ANALİZİ - TEST 1
// ============================================================================
export const TUR_SOZCUK_GRUPLARI_CIKMIS_SORULAR_ANALIZI_TEST_1: McQ[] = [
  {
    text: "<p>(I) Emprovize caz yapan müzisyenlerde çok önemli bir yetenek var: Zihnin akış hâlini kullanmak. (II) Trans hâli olarak da bilinen akış, bütünüyle tek aktiviteye odaklandığımız durumlarda beliriyor. (III) Örneğin maratonda koşuyorsanız tüm dikkatiniz vücudunuzun hareketlerine odaklanıyor. (IV) Kas hareketlerinizi, ayaklarınızın yerle temasını hissetmeye başlıyor; benliğin kaybolduğunu gözlemliyorsunuz. (V) Böyle durumlarda odaklanılan beceriler en üst seviyede gerçekleştiriliyor.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde sıfat tamlaması <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "I, II, III ve V numaralı cümlelerde 'önemli bir yetenek', 'tek aktivite', 'tüm dikkatiniz', 'en üst seviye' gibi sıfat tamlamaları mevcuttur. IV numaralı cümlede ise sadece isim tamlamaları (kas hareketleri, ayakların teması vb.) yer almaktadır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Gökyüzünde kuyruklu yıldızları izlemek, en basit ve zevkli gözlemlerden biridir. <u>Gözlem yeri</u> (I) olarak <u>ışık kirliliğinden</u> (II) ne kadar <u>uzak bir yer</u> (III) seçerseniz o kadar çok kuyruklu yıldız görebilirsiniz. Kuyruklu <u>yıldız gözlemi</u> (IV) için hangi yöne baktığınız o kadar önemli değil. Ancak bakmak için gökyüzünün en karanlık bölgesini seçmenizde yarar var. Bu sayede <u>gökyüzü ışıklarını</u> (V) doyasıya izleyebilirsiniz.</p><p><b>Bu parçadaki numaralandırılmış sözlerden hangisi tamlama türü bakımından diğerlerinden farklıdır?</b></p>",
    diff: 3,
    expl: "I (gözlem yeri), II (ışık kirliliği), IV (yıldız gözlemi) ve V (gökyüzü ışıkları) numaralı sözler belirtisiz isim tamlamasıdır. III numaralı 'uzak bir yer' ise sıfat tamlamasıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Tarihî saat kuleleri, Osmanlı İmparatorluğu'nun <u>Batılılaşma serüveni</u> (I) ile örtüşüyor. <u>Saat kuleleri</u> (II) o dönemde Anadolu'daki şehirler için özel bir önem taşımış, <u>kent merkezleri</u>nin (III) mihenk taşları olarak kabul görmüştü. Ziya Paşa ve özellikle hükümdarın saatlere merakıyla <u>Anadolu şehirleri</u>nde (IV) artan bu <u>yapıların çoğu</u> (V) ne yazık ki ihmal edilmiş durumda.</p><p><b>Bu parçada numaralanmış isim tamlamalarından hangisi türü bakımından diğerlerinden farklıdır?</b></p>",
    diff: 2,
    expl: "I (Batılılaşma serüveni), II (Saat kuleleri), III (kent merkezleri) ve IV (Anadolu şehirleri) numaralı tamlamalarda tamlayan ilgi eki almadığı için bunlar belirtisiz isim tamlamasıdır. V numaralı 'yapıların çoğu' tamlamasında ise tamlayan ilgi eki aldığı için belirtili isim tamlamasıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>(I) Şunu anlamanızı istiyorum ki doğal dünyada dokular, renkler, kokular yok. (II) Güzellik, çirkinlik doğal dünyada yok; hiç yok öyle şeyler. (III) Orası bir enerji çorbası ve kaosu. (IV) Tam anlamıyla bunları alıp içimizde bir yerde bir dünya yaratıyoruz. (V) Her şeyin olup bittiği yer, kendi içimizde yer yer.</p><p><b>Bu parçada numaralanmış cümlelerle ilgili aşağıdakilerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "A seçeneğinde belirtilen edat grubu metinde bulunmamaktadır. Diğer cümlelerde sıfat tamlaması (II), belirtisiz isim tamlaması (III), zarf-fiil grubu (IV) ve sıfat-fiil grubu (V) mevcuttur.",
    answers: [
      { text: "I. cümlede edat grubu vardır.", ok: true },
      { text: "II. cümlede sıfat tamlaması vardır.", ok: false },
      { text: "III. cümlede belirtisiz isim tamlaması vardır.", ok: false },
      { text: "IV. cümlede zarf-fiil grubu vardır.", ok: false },
      { text: "V. cümlede sıfat-fiil grubu vardır.", ok: false }
    ]
  },
  {
    text: "<p>Unutulmaz yazar Dostoyevski'nin kahramanlarından <i>Hipolit Terantiyev</i>, insanları karşısına alıp çeyrek saat konuştuğunda onlara tüm gerçeği anlatabileceğini, onları ardından sürükleyerek dünyayı değiştirebileceğini düşünüyordu.</p><p><b>Bu parçada aşağıdakilerden hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Parçada 'değiştirebileceğini' (sıfat-fiil), 'sürükleyerek' (zarf-fiil), 'Dostoyevski'nin kahramanları' (isim tamlaması) ve 'unutulmaz yazar' (sıfat tamlaması) vardır ancak edat grubu bulunmamaktadır.",
    answers: [
      { text: "Edat grubu", ok: true },
      { text: "Zarf-fiil grubu", ok: false },
      { text: "Sıfat-fiil grubu", ok: false },
      { text: "İsim tamlaması", ok: false },
      { text: "Sıfat tamlaması", ok: false }
    ]
  },
  {
    text: "<p>Denizanasının, vücudunda ürettiği bir molekül olan yeşil floresan proteini 238 amino asitten meydana gelmektedir. Bu yapı; başka bir proteine, moleküle veya kimyasal reaksiyona ihtiyaç duymadan etrafına floresan yeşil ışık verir. Bu özelliğinden dolayı moleküler biyoloji, genetik mühendisliği ve biyomedikal alanlarında çalışan araştırmacıların bir hayli ilgisini çekmektedir.</p><p><b>Bu parçada aşağıdakilerden hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Metinde 'ihtiyaç duymadan' (zarf-fiil grubu), 'vücudunda ürettiği, molekül olan, ... alanlarında çalışan' (sıfat-fiil grubu), 'Bu özelliğinden dolayı' (edat grubu) ve 'proteine, moleküle veya kimyasal reaksiyona' (bağlama grubu) vardır. İsim-fiil grubu ise yoktur.",
    answers: [
      { text: "İsim-fiil grubu", ok: true },
      { text: "Zarf-fiil grubu", ok: false },
      { text: "Sıfat-fiil grubu", ok: false },
      { text: "Edat grubu", ok: false },
      { text: "Bağlama grubu", ok: false }
    ]
  },
  {
    text: "<p>Köşkün kapısından içeri girince ötesi berisi aşınmış hasır döşeli ve alçak tavanlı alt kat sofası; basık merdivenlerinden kolayca çıkılıveren üst katı; insana ilk görüşte biraz boşluk ve yalnızlık hissi verirdi.</p><p><b>Bu parçada aşağıdakilerden hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Metinde 'Köşkün kapısı' (belirtili isim tamlaması), 'içeri girince' (zarf-fiil grubu), 'alçak tavanlı alt kat sofası, basık merdivenler' (sıfat tamlaması) ve 'kolayca çıkılıveren üst katı' (sıfat-fiil grubu) örnekleri varken edat grubu yoktur.",
    answers: [
      { text: "Edat grubu", ok: true },
      { text: "Belirtili isim tamlaması", ok: false },
      { text: "Zarf-fiil grubu", ok: false },
      { text: "Sıfat tamlaması", ok: false },
      { text: "Sıfat-fiil grubu", ok: false }
    ]
  },
  {
    text: "<p>(I) Böcek dünyasında bazı olağanüstü rekorlar var. (II) Ağustos böceğinin şarkıları 500 metreden duyulabilir. (III) Termit kraliçeleri 50 yıl yaşayabilir. (IV) Birçok böcek, kendisinden 20 kat daha ağır bir yükü kaldırabilir. (V) Bütün bunların yanında, böceklerin en büyüğü olan Kraliçe Alexandra kuş kanatlı kelebeği bile, enine sadece 28 cm uzunluğundadır.</p><p><b>Bu parçadaki numaralandırılmış cümlelerin hangisinde isim tamlaması <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "IV numaralı 'Birçok böcek, kendisinden 20 kat daha ağır bir yükü kaldırabilir.' cümlesinde 'birçok böcek', 'ağır bir yük' gibi sıfat tamlamaları vardır ancak isim tamlaması yoktur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Mantarlar, orman ve çayır ekosisteminin sürdürülmesinin, besinlerin geri dönüşümünün ve karbon tutulumunun ayrılmaz bir parçası oldukları toprakta ve bitkilerde bulunur. Geliştirdikleri moleküllerle can sıkıcı bazı sorunların çözümüne yardımcı olacak bir dizi fırsat sunar.</p><p><b>Bu parçada aşağıdakilerden hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Metinde 'ekosistemin sürdürülmesi' (belirtili tamlama), 'ayrılmaz bir parça' (sıfat tamlaması) ve 'toprakta ve bitkilerde' (bağlama grubu) vardır. Zarf-fiil grubu bulunmamaktadır.",
    answers: [
      { text: "Sıfat tamlaması", ok: false },
      { text: "Belirtili isim tamlaması", ok: false },
      { text: "Belirtisiz isim tamlaması", ok: false },
      { text: "Sıfat-fiil grubu", ok: false },
      { text: "Zarf-fiil grubu", ok: true }
    ]
  },
  {
    text: "<p>Yıllar sonra beklenmedik bir anda seninle karşılaşmak beni derinden etkiledi.</p><p><b>Bu cümlenin öznesi, aşağıdaki kelime gruplarından hangisiyle oluşmuştur?</b></p>",
    diff: 2,
    expl: "Cümlenin öznesi 'seninle karşılaşmak' ifadesidir. '-mak' eki bir isim-fiil ekidir, dolayısıyla bu öbek bir isim-fiil grubudur.",
    answers: [
      { text: "İsim-fiil grubu", ok: true },
      { text: "İsim tamlaması", ok: false },
      { text: "Sıfat tamlaması", ok: false },
      { text: "Zarf-fiil grubu", ok: false },
      { text: "Sıfat-fiil grubu", ok: false }
    ]
  },
  {
    text: "<p>Toprak uğraşanları maddi açıdan desteklemek ülkemizin kalkınmasına önemli ölçüde katkı sağlayacaktır.</p><p><b>Bu cümlenin öznesi, aşağıdaki sözcük gruplarının hangisinden oluşmuştur?</b></p>",
    diff: 2,
    expl: "Cümlenin öznesi 'Toprak uğraşanları maddi açıdan desteklemek' kısmıdır. 'Desteklemek' kelimesindeki '-mek' ekiyle bu öbek bir isim-fiil grubu oluşturmuştur.",
    answers: [
      { text: "Sıfat tamlaması", ok: false },
      { text: "İsim tamlaması", ok: false },
      { text: "İsim-fiil grubu", ok: true },
      { text: "Zarf-fiil grubu", ok: false },
      { text: "Sıfat-fiil grubu", ok: false }
    ]
  }
];