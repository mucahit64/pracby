import { McQ } from "../../../../types";

// ============================================================================
// SÖZCÜK TÜRLERİ BİLGİSİ GEREKTİREN SÖZCÜKTE YAPI ÇIKMIŞ SORULAR - TEST 1
// ============================================================================
export const TUR_SOZCUK_TURLERI_BILGISI_GEREKTIREN_SOZCUKTE_YAPI_CIKMIS_SORULAR_TEST_1: McQ[] = [
  {
    text: "<p>North Carolina Üniversitesinde <u>I. yapılan</u> bir araştırma, çocukların yeni besinlerle <u>II. tanışmayı</u> <u>III. reddetmesinde</u> tabaklarında hangi yemeğin olduğundan çok, <u>IV. kalıtsal</u> özelliklerinin etkili olduğunu <u>V. ortaya koyuyor</u>.</p><p><b>Bu parçadaki altı çizili sözcüklerin yapısıyla ilgili olarak aşağıdakilerin hangisi söylenemez?</b></p>",
    diff: 3,
    expl: "III numaralı 'reddetmesinde' sözcüğü 'red' ve 'etmek' sözcüklerinin birleşimi sırasında 'd' ünsüzü türemiştir, bu bir ses türemesidir. Ancak IV numaralı 'kalıtsal' sözcüğü 'kalıt' isminden '-sal' ekiyle türetilmiş bir isimdir, isimden fiil yapma eki almamıştır.",
    answers: [
      { text: "I. sözcük, sıfat-fiil eki almıştır.", ok: false },
      { text: "II. sözcük, hem yapım hem de çekim eki almıştır.", ok: false },
      { text: "III. sözcük, ses türemesi olmuş bir sözcüktür.", ok: false },
      { text: "IV. sözcük, isimden fiil yapma eki almıştır.", ok: true },
      { text: "V. sözcük, birleşik fiildir.", ok: false }
    ]
  },
  {
    text: "<p>NASA'nın Jüpiter'i <u>I. incelemek</u> amacıyla gezegenin yörüngesine gönderdiği Juno adlı uzay aracı, ağustos ayı başında önemli bir dönüm <u>II. noktasını</u> geride bıraktı. <u>III. Katedeceği</u> iki yakalama yörüngesinin <u>IV. ilindeki</u> en uzak noktaya ulaşan Juno, dev gezegene geri <u>V. dönmeye</u> başladı.</p><p><b>Bu parçadaki altı çizili sözcüklerle ilgili aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "IV numaralı 'ilindeki' sözcüğündeki '-ki' eki aitlik (sıfat yapan) ekidir. V numaralı 'dönmeye' sözcüğü ise '-ma/-me' isim-fiil eki almıştır, zarf-fiil eki almamıştır.",
    answers: [
      { text: "I. sözcük isim-fiil eki almıştır.", ok: false },
      { text: "II. sözcük iyelik eki almıştır.", ok: false },
      { text: "III. sözcük sıfat-fiil eki almıştır.", ok: false },
      { text: "IV. sözcük aitlik eki almıştır.", ok: false },
      { text: "V. sözcük zarf-fiil eki almıştır.", ok: true }
    ]
  },
  {
    text: "<p>Bir pazar günü Kanlıca'nın tarihî <u>I. yerlerini</u> gezmeyi umut ederek çıktığım yolda Boğaz'ın masmavi <u>II. suları</u>, martıların çığlığı ve bir ölüyü bile <u>III. diriltecek</u> kadar tatlı esen meltem, beni <u>IV. kendine</u> doğru çekmişti. Kendi kendime \"Kanlıca bu hafta kalsın.\" deyip <u>V. sahile</u> doğru yürümüş ve orada saatlerce oturmuştum.</p><p><b>Bu parçadaki altı çizili sözcüklerle ilgili olarak aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "III numaralı 'diriltecek' sözcüğü 'kadar' edatıyla öbekleşerek sıfat görevinde kullanılmıştır, yani bu bir sıfat-fiildir. Gelecek zaman kipi eki olarak kullanılmamıştır.",
    answers: [
      { text: "I. sözcükte belirtme hâli eki kullanılmıştır.", ok: false },
      { text: "II. sözcükte sıfat-fiil eki kullanılmıştır.", ok: true },
      { text: "III. sözcükte gelecek zaman eki kullanılmıştır.", ok: false },
      { text: "IV. sözcükte geçmiş zaman eki kullanılmıştır.", ok: false },
      { text: "V. sözcükte yönelme hâli eki kullanılmıştır.", ok: false }
    ]
  },
  {
    text: "<p>Her sene, <u>I. zamanı</u> gelince İstanbul'un mahallelerinden Boğaz'ın <u>II. köylerine</u> göçler başlardı... Boğaziçi'nin kenarlarına <u>III. yapılmış</u> ve eski erkân sedirleriyle... yer <u>IV. minderleri</u> gibi... yalılara <u>V. taşınırlardı</u>.</p><p><b>Bu parçada altı çizili sözcüklerle ilgili aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "V numaralı 'taşınırlardı' sözcüğü 'taşın-ırlar-dı' şeklinde analiz edilir. '-ır' geniş zaman ekidir. 'dı' ise ek-fiilin hikayesidir. Geniş zaman eki almıştır ancak iyelik ekiyle ilgili bir yanlışlık yoktur (Cevap anahtarı A dendiği için I. sözcük 'zamanı'ndaki -ı iyelik ekidir, belirtme durumu değildir).",
    answers: [
      { text: "I. sözcük belirtme durumu eki almıştır.", ok: true },
      { text: "II. sözcük iyelik eki almıştır.", ok: false },
      { text: "III. sözcük sıfat-fiil eki almıştır.", ok: false },
      { text: "IV. sözcük çokluk eki almıştır.", ok: false },
      { text: "V. sözcük geniş zaman eki almıştır.", ok: false }
    ]
  },
  {
    text: "<p>Orta Asya ve Sibirya'da eski geleneklere yeniden can <u>veren</u> mistik insanların ayinleri, kitlelerin ilgisini çekiyor... \"Ey engin mavi gökyüzü, battaniyem, lütfen gel bana.\"</p><p><b>Bu parçada aşağıdakilerden hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Metinde 'veren' (sıfat-fiil), 'geleneklere' (çokluk), 'battaniyem' (iyelik), 'kitlelerin' (tamlayan) ekleri vardır ancak zarf-fiil eki (-arak, -ınca vb.) yoktur.",
    answers: [
      { text: "Zarf-fiil eki", ok: true },
      { text: "Çokluk eki", ok: false },
      { text: "İyelik eki", ok: false },
      { text: "Tamlayan eki", ok: false },
      { text: "Sıfat-fiil eki", ok: false }
    ]
  },
  {
    text: "<p>Bilgisayar teknolojisiyle yetişen kuşaklarda ekrandan kitap okumanın yaratacağı hazzı, bilgisayarla ileriki yaşlarda tanışan insanlar tadamayacaktır.</p><p><b>Bu cümlede aşağıdakilerden hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Cümlede 'teknolojisi' (iyelik), 'okumanın' (isim-fiil), 'kitap okuma' (belirtisiz ad tamlaması), 'yetişen kuşaklar' (sıfat tamlaması) vardır. Ancak yüklem 'tadamayacaktır' (tat-a-ma-y-acak) geçişli bir fiildir (Neyi tadamayacaktır? Hazzı).",
    answers: [
      { text: "İyelik eki almış sözcük", ok: false },
      { text: "Geçişsiz çatılı yüklem", ok: true },
      { text: "İsim-fiil eki almış sözcük", ok: false },
      { text: "Belirtisiz ad tamlaması", ok: false },
      { text: "Sıfat tamlaması", ok: false }
    ]
  },
  {
    text: "<p>Duvara bir titiz örümcek gibi, / İnce dertlerimle işledim bir ağ. / Ruhum, gün doğunca sönecek gibi, / Şimdiden hayata ediyor veda.</p><p><b>Bu dizelerde aşağıdakilerden hangisi yoktur?</b></p>",
    diff: 2,
    expl: "Dizelerde 'şimdiden' (zaman zarfı), 'gibi' (edat), 'veda etmek' (birleşik eylem), 'bir' (belgisiz sıfat) vardır ancak isim-fiil (-ma, -ış, -mak) yoktur.",
    answers: [
      { text: "Zaman zarfı", ok: false },
      { text: "Edat", ok: false },
      { text: "İsim-fiil", ok: true },
      { text: "Birleşik eylem", ok: false },
      { text: "Belgisiz sıfat", ok: false }
    ]
  },
  {
    text: "<p>Köprü Sokağı'nın iki tarafında <u>I. güzelliklere</u> kucak <u>II. açacak</u> <u>III. yıllanan</u> <u>IV. meydanlarda</u>, büyüleyici saraylar, kiliseler ve bahçelerden <u>V. oluşan</u> hoş bir dünya saklıdır.</p><p><b>Bu parçadaki altı çizili sözcüklerle ilgili olarak aşağıdaki ifadelerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "II numaralı 'açacak' sözcüğü bir sıfat-fiildir. 'Meydan' ismini nitelemektedir. Zarf-fiil eki almamıştır.",
    answers: [
      { text: "I, hem yapım hem çekim eki almıştır.", ok: false },
      { text: "II, zarf-fiil eki almıştır.", ok: true },
      { text: "III, isim kökünden türemiştir.", ok: false },
      { text: "IV, çoğul eki almıştır.", ok: false },
      { text: "V, işteşlik eki almıştır.", ok: false }
    ]
  },
  {
    text: "<p>Her zamanki gibi bir sabahtı. O gün de yandaki taş binanın yüksek tavanlarına ve eskimiş pencerelerinden odaya sızan renk renk ışıklara merhaba demişti.</p><p><b>Bu parçada aşağıdakilerden hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Parçada 'yandaki' (ilgi ekiyle türemiş sıfat), 'renk renk' (ikileme), 'bir' (belgisiz), 'o' (işaret) sıfatları vardır. Sıra sayı sıfatı (birinci, ikinci vb.) yoktur.",
    answers: [
      { text: "İlgi ekiyle türemiş sıfat", ok: false },
      { text: "İkilemeyle oluşmuş sıfat", ok: false },
      { text: "Belgisiz sıfat", ok: false },
      { text: "İşaret sıfatı", ok: false },
      { text: "Sıra sayı sıfatı", ok: true }
    ]
  },
  {
    text: "<p>\"Rüyalar gerçekleştirmenin yolu, uyanıvermektir uykulardan.\" demiş bir düşünür. Öyleyse ne duruyoruz, hemen silkinip kalkalım yumuşak yataklarımızdan!</p><p><b>Bu parçada, aşağıdakilerden hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Metinde 'uyanıvermek' (tezlik), 'silkinip' (zarf-fiil), 'gerçekleştirmenin' (isim-fiil/sıfat-fiil), 'kalkalım' (istek kipi) vardır. Şimdiki zamanla çekimlenmiş (-yor) bir fiil yoktur.",
    answers: [
      { text: "Tezlik fiili", ok: false },
      { text: "Zarf-fiil", ok: false },
      { text: "Sıfat-fiil", ok: false },
      { text: "İstek kipiyle çekimlenmiş fiil", ok: false },
      { text: "Şimdiki zamanla çekimlenmiş fiil", ok: true }
    ]
  }
];