import { McQ } from "../../../../types";

// ============================================================================
// SÖZCÜK TÜRLERİ BİLGİSİ GEREKTİREN SÖZCÜKTE YAPI ÇIKMIŞ SORULAR - TEST 1
// ============================================================================
export const TUR_SOZCUK_TURLERI_BILGISI_GEREKTIREN_SOZCUKTE_YAPI_CIKMIS_SORULAR_TEST_1: McQ[] = [
  {
    text: "<p>North Carolina Üniversitesinde <u>yapılan</u> (I) bir araştırma, çocukların yeni besinlerle <u>tanışmayı</u> (II) <u>reddetmesinde</u> (III) tabaklarında hangi yemeğin olduğundan çok, <u>kalıtsal</u> (IV) özelliklerinin etkili olduğunu <u>ortaya koyuyor</u> (V).</p><p><b>Bu parçadaki altı çizili sözcüklerin yapısıyla ilgili olarak aşağıdakilerin hangisi <u>söylenemez</u>?</b></p>",
    diff: 3,
    expl: "III numaralı 'reddetmesinde' sözcüğünde 'red' ve 'etmek' sözcüklerinin birleşimi sırasında 'd' ünsüzü türemiştir, bu bir ses türemesidir. Ancak IV numaralı 'kalıtsal' sözcüğü 'kalıt' isminden '-sal' ekiyle türetilmiştir; bu ek isimden isim yapma ekidir, isimden fiil yapma eki değildir.",
    answers: [
      { text: "I. sözcük, sıfat-fiil eki almıştır.", ok: false },
      { text: "II. sözcük, hem yapım hem de çekim eki almıştır.", ok: false },
      { text: "III. sözcük, ses türemesi olmuş bir sözcüktür.", ok: false },
      { text: "IV. sözcük, isimden fiil yapma eki almıştır.", ok: true },
      { text: "V. sözcük, birleşik fiildir.", ok: false }
    ]
  },
  {
    text: "<p>NASA'nın Jüpiter'i <u>incelemek</u> (I) amacıyla gezegenin yörüngesine gönderdiği Juno adlı uzay aracı, ağustos ayı başında önemli bir dönüm <u>noktasını</u> (II) geride bıraktı. <u>Katedeceği</u> (III) iki yakalama yörüngesinin <u>ilindeki</u> (IV) en uzak noktaya ulaşan Juno, dev gezegene geri <u>dönmeye</u> (V) başladı. Apojove adı verilen bu en uzak nokta, gezegenden 8,1 km uzakta.</p><p><b>Bu parçadaki altı çizili sözcüklerle ilgili aşağıdakilerden hangisi <u>yanlıştır</u>?</b></p>",
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
    text: "<p>Bir pazar günü Kanlıca'nın tarihî <u>yerlerini</u> (I) gezmeyi umut ederek <u>çıktığım</u> (II) yolda Boğaz'ın masmavi suları, martıların çığlığı ve bir ölüyü bile <u>diriltecek</u> (III) kadar tatlı esen meltem, beni kendine doğru <u>çekmişti</u> (IV). Kendi kendime \"Kanlıca bu hafta kalsın.\" deyip <u>sahile</u> (V) doğru yürümüş ve orada saatlerce oturmuştum.</p><p><b>Bu parçadaki altı çizili sözcüklerle ilgili olarak aşağıdakilerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "III numaralı 'diriltecek' sözcüğü 'kadar' edatıyla öbekleşerek 'tatlı' sözcüğünü nitelemektedir; buradaki '-ecek' eki gelecek zaman eki değil, sıfat-fiil ekidir. I 'yer-ler-i-ni' belirtme hâli eki, II 'çık-tığ-ım' sıfat-fiil eki, IV 'çek-miş-ti' geçmiş zaman eki, V 'sahil-e' yönelme hâli eki almıştır.",
    answers: [
      { text: "I. sözcükte belirtme hâli eki kullanılmıştır.", ok: false },
      { text: "II. sözcükte sıfat-fiil eki kullanılmıştır.", ok: false },
      { text: "III. sözcükte gelecek zaman eki kullanılmıştır.", ok: true },
      { text: "IV. sözcükte geçmiş zaman eki kullanılmıştır.", ok: false },
      { text: "V. sözcükte yönelme hâli eki kullanılmıştır.", ok: false }
    ]
  },
  {
    text: "<p>Her sene, <u>zamanı</u> (I) gelince İstanbul'un mahallelerinden Boğaz'ın <u>köylerine</u> (II) göçler başlardı. Eski İstanbullular; Boğaziçi'nin kenarlarına <u>yapılmış</u> (III) ve eski erkân sedirleriyle,kerevet, şilte ve halılar üstünde yer <u>minderleri</u> (IV) gibi eski eşyalarla döşenmiş geniş odalı, gönül ferahlatıcı yalılara <u>taşınırlardı</u> (V).</p><p><b>Bu parçada altı çizili sözcüklerle ilgili aşağıdakilerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "'zamanı gelince' ifadesindeki 'zamanı' sözcüğündeki '-ı' eki belirtme durumu eki değil, iyelik ekidir. Bu nedenle A seçeneğindeki yargı yanlıştır. V numaralı 'taşın-ır-lar-dı' sözcüğü ise geniş zaman eki almıştır.",
    answers: [
      { text: "I. sözcük belirtme durumu eki almıştır.", ok: true },
      { text: "II. sözcük iyelik eki almıştır.", ok: false },
      { text: "III. sözcük sıfat-fiil eki almıştır.", ok: false },
      { text: "IV. sözcük çokluk eki almıştır.", ok: false },
      { text: "V. sözcük geniş zaman eki almıştır.", ok: false }
    ]
  },
  {
    text: "<p>Orta Asya ve Sibirya'da eski geleneklere yeniden can veren mistik insanların ayinleri, kitlelerin ilgisini çekiyor. Bu mistiklerden biri olan Nergui'nin sesi inişli çıkışlı, çok çok eskilerin balatları gibi tekrar ediyor: \"Ey engin mavi gökyüzü, battaniyem, lütfen gel bana.\"</p><p><b>Bu parçada aşağıdakilerden hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Metinde 'veren, olan' (sıfat-fiil), 'geleneklere' (çokluk), 'battaniyem' (iyelik), 'kitlelerin' (tamlayan) ekleri vardır ancak zarf-fiil eki (-arak, -ınca vb.) yoktur.",
    answers: [
      { text: "Zarf-fiil eki", ok: true },
      { text: "Çokluk eki", ok: false },
      { text: "İyelik eki", ok: false },
      { text: "Tamlayan eki", ok: false },
      { text: "Sıfat-fiil eki", ok: false }
    ]
  },
  {
    text: "<p>Bilgisayar teknolojisiyle yetişen kuşaklarda ekrandan kitap okumanın yaratacağı hazzı, bilgisayarla ileriki yaşlarda tanışan insanlar tadamayacaktır.</p><p><b>Bu cümlede aşağıdakilerden hangisi <u>yoktur</u>?</b></p>",
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
    text: "<p>Duvara bir titiz örümcek gibi,<br>İnce dertlerimle işledim bir ağ.<br>Ruhum, gün doğunca sönecek gibi,<br>Şimdiden hayata ediyor veda.</p><p><b>Bu dizelerde aşağıdakilerden hangisi <u>yoktur</u>?</b></p>",
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
    text: "<p>Köprü Sokağı'nın iki tarafında <u>güzelliklere</u> (I) kucak <u>açacak</u> (II) <u>yıllanan</u> (III) <u>meydanlarda</u> (IV), büyüleyici saraylar, kiliseler ve bahçelerden <u>oluşan</u> (V) hoş bir dünya saklıdır.</p><p><b>Bu parçadaki altı çizili sözcüklerle ilgili olarak aşağıdaki ifadelerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "V numaralı 'oluşan' sözcüğü 'ol-uş-an' şeklinde sıfat-fiil eki almıştır; 'oluşmak' fiili karşılıklı ya da birlikte yapılan bir eylem bildirmediği için sözcükte işteşlik eki yoktur. Bu nedenle E yanlıştır.",
    answers: [
      { text: "I, hem yapım hem çekim eki almıştır.", ok: false },
      { text: "II, zarf-fiil eki almıştır.", ok: false },
      { text: "III, isim kökünden türemiştir.", ok: false },
      { text: "IV, çoğul eki almıştır.", ok: false },
      { text: "V, işteşlik eki almıştır.", ok: true }
    ]
  },
  {
    text: "<p>Her zamanki gibi bir sabahtı. O gün de yandaki taş binanın yüksek tavanlarına ve eskimiş pencerelerinden odaya sızan renk renk ışıklara merhaba demişti.</p><p><b>Bu parçada aşağıdakilerden hangisi <u>yoktur</u>?</b></p>",
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
    text: "<p>\"Rüyalar gerçekleştirmenin yolu, uyanıvermektir uykulardan.\" demiş bir düşünür. Öyleyse ne duruyoruz, hemen silkinip kalkalım yumuşak yataklarımızdan!</p><p><b>Bu parçada, aşağıdakilerden hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Metinde 'uyanıvermek' (tezlik fiili), 'silkinip' (zarf-fiil), 'kalkalım' (istek kipi), 'duruyoruz' (şimdiki zaman) vardır. 'Gerçekleştirmenin' ve 'uyanıvermektir' isim-fiildir; parçada sıfat-fiil yoktur.",
    answers: [
      { text: "Tezlik fiili", ok: false },
      { text: "Zarf-fiil", ok: false },
      { text: "Sıfat-fiil", ok: true },
      { text: "İstek kipiyle çekimlenmiş fiil", ok: false },
      { text: "Şimdiki zamanla çekimlenmiş fiil", ok: false }
    ]
  }
];
