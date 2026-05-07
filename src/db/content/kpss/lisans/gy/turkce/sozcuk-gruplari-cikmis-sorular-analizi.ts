import { McQ } from "../../../../types";

// ============================================================================
// SÖZCÜK GRUPLARI ÇIKMIŞ SORULAR ANALİZİ - TEST 1
// ============================================================================
export const TUR_SOZCUK_GRUPLARI_CIKMIS_SORULAR_ANALIZI_TEST_1: McQ[] = [
  {
    text: "<p>(I) Emprovize caz yapan müzisyenlerde çok önemli bir yetenek var: Zihninin akış hâlini kullanmak. (II) Trans hâli olarak da bilinen akış, bütünüyle tek aktiviteye odaklandığımız durumlarda beliriyor. (III) Örneğin maratonda koşuyorsanız tüm dikkatiniz vücudunuzun hareketlerine odaklanıyor. (IV) Kas hareketlerinizi, ayaklarınızın yerle temasını hissetmeye başlıyor; benliğin kaybolduğunu gözlemliyorsunuz. (V) Böyle durumlarda odaklanılan beceriler en üst seviyede gerçekleştiriliyor.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde sıfat tamlaması yoktur?</b></p>",
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
    text: "<p>Gökyüzünde kuyruklu yıldızları izlemek... Gözlem yeri olarak <u>I. ışık kirliliğinden</u>... <u>II. ne kadar uzak bir yer</u>... <u>III. o kadar çok</u>... <u>IV. o kadar önemli</u>... <u>V. gökyüzü ışıklarını</u>...</p><p><b>Bu parçadaki numaralandırılmış sözlerden hangisi tamlama türü bakımından diğerlerinden farklıdır?</b></p>",
    diff: 3,
    expl: "I ve V numaralı söz öbekleri (ışık kirliliği, gökyüzü ışıkları) belirtisiz isim tamlamasıdır. II, III ve IV numaralı öbekler ise sıfat tamlaması yapısındadır. Cevap anahtarına göre C seçeneği vurgulanmıştır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><u>I. Batılılaşma serüveni</u>... <u>II. Saat kuleleri</u>... <u>III. kent merkezlerinin</u>... <u>IV. Anadolu şehirlerinde</u>... <u>V. yapıların çoğu</u>...</p><p><b>Bu parçada numaralanmış isim tamlamalarından hangisi türü bakımından diğerlerinden farklıdır?</b></p>",
    diff: 2,
    expl: "I, II ve IV numaralı tamlamalar belirtisiz isim tamlamasıdır. III numaralı 'kent merkezlerinin (mihenk taşları)' ve V numaralı 'yapıların çoğu' tamlamaları, tamlayan eki aldıkları için belirtili isim tamlaması kategorisindedir. Cevap anahtarı E'dir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>(I) Şunu anlamanızı istiyorum ki doğal dünyada dokular, renkler, kokular yok. (II) Güzellik, çirkinlik doğal dünyada yok; hiç yok öyle şeyler. (III) Orası bir enerji çorbası ve kaosu. (IV) Tam anlamıyla bunları alıp içimizde bir yerde bir dünya yaratıyoruz. (V) Her şeyin olup bittiği yer, kendi içimizde yer yer.</p><p><b>Bu parçada numaralanmış cümlelerle ilgili aşağıdakilerden hangisi yanlıştır?</b></p>",
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
    text: "<p>Unutulmaz yazar Dostoyevski'nin kahramanlarından... sürükleyerek dünyayı değiştirebileceğini düşünüyordu.</p><p><b>Bu parçada aşağıdakilerden hangisi yoktur?</b></p>",
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
    text: "<p>Denizanasının, vücudunda ürettiği bir molekül olan yeşil floresan proteini... bir hayli ilgisini çekmektedir.</p><p><b>Bu parçada aşağıdakilerden hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Metinde 'ürettiği' (sıfat-fiil), 'duymadan' (zarf-fiil), 'denizanasının... proteini' (isim tamlaması) ve 'molekül olan' (sıfat-fiil grubu) vardır. Bağlama grubu (ve, veya vb. ile kurulan öbek) yoktur.",
    answers: [
      { text: "İsim-fiil grubu", ok: false },
      { text: "Zarf-fiil grubu", ok: false },
      { text: "Sıfat-fiil grubu", ok: false },
      { text: "Edat grubu", ok: false },
      { text: "Bağlama grubu", ok: true }
    ]
  },
  {
    text: "<p>Köşkün kapısından içeri girince ötesi berisi aşınmış hasır döşeli... insana ilk görüşte biraz boşluk ve yalnızlık hissi verirdi.</p><p><b>Bu parçada aşağıdakilerden hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Metinde 'boşluk ve yalnızlık hissi' (belirtisiz isim tamlaması), 'girince' (zarf-fiil), 'hasır döşeli' (sıfat tamlaması) ve 'çıkılıveren' (sıfat-fiil) örnekleri varken edat grubu yoktur.",
    answers: [
      { text: "Edat grubu", ok: true },
      { text: "Belirtili isim tamlaması", ok: false },
      { text: "Zarf-fiil grubu", ok: false },
      { text: "Sıfat tamlaması", ok: false },
      { text: "Sıfat-fiil grubu", ok: false }
    ]
  },
  {
    text: "<p>(I) Böcek dünyasında bazı olağanüstü rekorlar var. (II) Ağustos böceğinin şarkıları 500 metreden duyulabilir. (III) Termit kraliçeleri 50 yıl yaşayabilir... <b>Bu parçadaki numaralandırılmış cümlelerin hangisinde isim tamlaması yoktur?</b></p>",
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
    text: "<p>Mantarlar, orman ve çayır ekosisteminin sürdürülmesinin... ayrılmaz bir parçası oldukları toprakta ve bitkilerde bulunur...</p><p><b>Bu parçada aşağıdakilerden hangisi yoktur?</b></p>",
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
    expl: "Cümlenin öznesi 'Toprak uğraşanları maddi açıdan desteklemek' kısmıdır. 'Desteklemek' kelimesindeki '-mek' ekiyle bu öbek bir isim-fiil grubu oluşturmuştur. Ancak seçeneklerde C (İsim-fiil grubu) doğru yanıttır.",
    answers: [
      { text: "Sıfat tamlaması", ok: false },
      { text: "İsim tamlaması", ok: false },
      { text: "İsim-fiil grubu", ok: true },
      { text: "Zarf-fiil grubu", ok: false },
      { text: "Sıfat-fiil grubu", ok: false }
    ]
  }
];