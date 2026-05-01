
import type { McQ } from "../../../../types";

export const TAR_TBMM_DONEMI_TEST_1: McQ[] = [  
  // ---------------- TBMM DÖNEMİ - TEST 1 ----------------
  {
    text: "Yeni Türk devletinin kuruluşu aşağıdaki gelişmelerden hangisinin sonucunda gerçekleşmiştir?",
    diff: 1,
    expl: "23 Nisan 1920'de Ankara'da 'Büyük Millet Meclisinin Açılması' (TBMM), hukuken ve fiilen İstanbul'daki Osmanlı idaresinden bağımsız 'Yeni Türk Devleti'nin (Türkiye'nin) kurulduğunun dünyaya ilanıdır.",
    answers: [
      { text: "Cumhuriyet'in İlanı", ok: false }, { text: "Saltanatın Kaldırılması", ok: false }, { text: "Büyük Millet Meclisinin Açılması", ok: true }, { text: "Halifeliğin Kaldırılması", ok: false }, { text: "Teşkilat-ı Esasiye'nin kabulü", ok: false }
    ] // Cevap anahtarı 1.C. (Page 184 has the key: 1.C, 2.C, 3.C, 4.E, 5.A, 6.B, 7.D, 8.C, 9.B, 10.C, 11.D, 12.E, 13.D, 14.C, 15.A, 16.B)
  },
  {
    text: "I. TBMM'nin açılması ile;\nI. İstanbul Hükûmeti,\nII. Saltanat Makamı,\nIII. Temsil Heyeti\nbirimlerinden hangilerinin görevi sona ermiştir?",
    diff: 1,
    expl: "Milli Mücadele'yi örgütlemek için Sivas Kongresi'nde oluşturulan ve geçici bir yürütme organı olan 'Temsil Heyeti'nin (III) görevi, 23 Nisan 1920'de TBMM'nin açılmasıyla resmen ve hukuken sona ermiştir. (Saltanat ve İstanbul Hükümeti 1922'de sona erecektir).",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız II", ok: false }, { text: "Yalnız III", ok: true }, { text: "I ve II", ok: false }, { text: "I, II ve III", ok: false }
    ] // Cevap anahtarı 2.C (Yalnız III)
  },
  {
    text: "Büyük Millet Meclisinin açılmasında;\nI. İstanbul'un resmen işgali,\nII. Mebusan Meclisinin dağıtılması,\nIII. Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyetinin kurulması\ngelişmelerinden hangilerinin etkili olduğu söylenebilir?",
    diff: 1,
    expl: "Misak-ı Milli'yi kabul eden Mebusan Meclisinin İtilaf devletlerince dağıtılması (II) ve İstanbul'un işgal edilerek padişahın esir alınması (I), Mustafa Kemal'e Anadolu'da (Ankara'da) milli iradeyi temsil edecek olağanüstü yetkilere sahip yeni bir meclis (BMM) açma fırsatı vermiştir.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız II", ok: false }, { text: "I ve II", ok: true }, { text: "I ve III", ok: false }, { text: "II ve III", ok: false }
    ] // Cevap anahtarı 3.C (I ve II). 
  },
  {
    text: "Mustafa Kemal'in 24 Nisan 1920'de TBMM'ye sunduğu önergede;\nI. rejimin adı,\nII. hükûmetin oluşturulma biçimi,\nIII. güçler birliği\nkonularının hangilerinden bahsedilmiştir?",
    diff: 2,
    expl: "Meclisin açılmasından 1 gün sonra verilen (ve ilk Anayasa olan Teşkilat-ı Esasiye'nin taslağı sayılan) 24 Nisan Önergesinde; 'Geçici bir hükümet başkanı tanımak doğru değildir' diyerek Meclis Hükümeti sistemi (II) ve 'Yasama, yürütme yetkisi mecliste toplanır' diyerek Güçler Birliği (III) benimsenmiştir. Cumhuriyet (Rejimin adı - I) o aşamada zikredilmemiştir.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız II", ok: false }, { text: "I ve II", ok: false }, { text: "I ve III", ok: false }, { text: "II ve III", ok: true }
    ] // Cevap anahtarı 4.E (II ve III)
  },
  {
    text: "I. TBMM'ye karşı çıkartılan ayaklanmalar arasında aşağıdakilerden hangisi yer almaz?",
    diff: 2,
    expl: "Cemil Çeto, Anzavur, Çapanoğlu (Yozgat) ve Nasturi isyanları Milli Mücadele yıllarında çıkmıştır. Ancak Vali Cemal Bey, I. TBMM'ye (Ankara'ya) değil, geçmişte veya farklı bir dönemde isyan etmiş olabilir. Aslında Nasturi isyanı (A) Cumhuriyet döneminde (1924) Şeyh Sait isyanından hemen önce İngiliz kışkırtmasıyla Hakkari'de çıkmıştır. I. TBMM (1920-1923) dönemi isyanı DEĞİLDİR. (Cevap anahtarı Nasturi A diyor).",
    answers: [
      { text: "Nasturi", ok: true }, { text: "Vali Cemal Bey", ok: false }, { text: "Cemil Çeto", ok: false }, { text: "Anzavur", ok: false }, { text: "Çapanoğlu", ok: false }
    ] // Cevap anahtarı 5.A. Vali Cemal Bey isyanı Ali Galip olayı gibi bir şey mi? There was a Vali Cemal. But Nasturi is strictly 1924 (II. TBMM). So Nasturi is definitely not against I. TBMM.
  },
  {
    text: "Büyük Millet Meclisinin ilk savunma bakanlığı görevini yürüten devlet adamı aşağıdakilerden hangisidir?",
    diff: 3,
    expl: "23 Nisan 1920'de TBMM açıldıktan sonra kurulan Birinci İcra Vekilleri Heyeti'nde (Bakanlar Kurulu), Milli Savunma Bakanı (Müdafaa-i Milliye Vekili) görevine Genelkurmay Başkanı da olan Mareşal Fevzi (Çakmak) Paşa getirilmiştir.",
    answers: [
      { text: "İsmet İnönü", ok: false }, { text: "Fevzi Çakmak", ok: true }, { text: "Rauf Orbay", ok: false }, { text: "Celalettin Arif", ok: false }, { text: "Rıza Nur", ok: false }
    ] // Cevap anahtarı 6.B.
  },
  {
    text: "I. TBMM'nin çıkardığı kanunlar arasında aşağıdakilerden hangisi yer almaz?",
    diff: 2,
    expl: "I. TBMM (1920-1923); Hıyanet-i Vataniye (B), Firariler (A), Ağnam Vergisinin artırılması (C) ve Nisab-ı Müzakere (İç tüzük) (E) kanunlarını çıkarmıştır. Ancak 'Tekalif-i Milliye' emirleri (D) TBMM tarafından DEĞİL, Başkomutanlık yetkisine dayanarak bizzat Mustafa Kemal Paşa tarafından çıkarılmıştır (Kanun değildir, Başkomutan Emridir).",
    answers: [
      { text: "Firariler", ok: false }, { text: "Hıyanet-i Vataniye", ok: false }, { text: "Ağnam vergisinin arttırılması", ok: false }, { text: "Tekâlif-i Milliye", ok: true }, { text: "Nisab-ı Müzakere", ok: false }
    ] // Cevap anahtarı 7.D.
  },
  {
    text: "Büyük Millet Meclisine ve Millî Mücadele'ye karşı çıkan isyanlarda;\nI. Millî Mücadele'nin saltanat ve hilafet karşıtı olduğuna dair propaganda yürütülmesi,\nII. Cumhuriyet rejiminin değiştirilmek istenmesi,\nIII. İngilizlerin Boğazlara yakın yerlerde tampon bölge oluşturma düşüncesi\ndurumlarından hangileri etkili olmuştur?",
    diff: 2,
    expl: "TBMM'ye (1920) karşı çıkarılan isyanların asıl nedeni; İstanbul hükümetinin (Şeyhülislam fetvasıyla) 'Bunlar padişaha düşmandır' yalanını yayması (I) ve İngilizlerin Boğazları korumak için (Ahmet Anzavur, Kuva-yi İnzibatiye vb.) tampon isyanlar çıkartmasıdır (III). 'Cumhuriyet rejiminin değiştirilmek istenmesi' olamaz çünkü henüz Cumhuriyet ilan edilmemişti (1923).",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız III", ok: false }, { text: "I ve II", ok: false }, { text: "I ve III", ok: true }, { text: "I, II ve III", ok: false }
    ] // Cevap anahtarı 8.C. (C şıkkı I ve III'tür, sorudaki resimde "C) I ve II" yazıyor gibi ama resme dikkatli bakalım: A) Yalnız I, B) Yalnız III, C) I ve III. Wait, image says A) Yalnız I, B) Yalnız III, C) I ve II. Wait. I ve III is NOT in the options? Ah, D) II ve III, E) I, II ve III. But C) is I ve III in standard tests. Wait, the image says C) I ve III. Let's zoom: A) Yalnız I  B) Yalnız III  C) I ve III.  OK, C is I ve III. Yes).
  },
  {
    text: "İtilaf Devletleri tarafından İstanbul'un resmen işgal edilip, Mebusan Meclisinin dağıtılmasının;\nI. Salih Paşa Hükûmeti'nin istifası,\nII. Büyük Millet Meclisinin açılması,\nIII. Temsil Heyeti'nin Ankara'yı merkez seçmesi\ngelişmelerinden hangilerine neden olduğu söylenebilir?",
    diff: 2,
    expl: "Meclisin dağıtılmasıyla oluşan otorite boşluğunda Salih Paşa Hükümeti istifa etmiş (I) ve Ankara'da Milli İradeyi (halkı) temsil eden bağımsız Büyük Millet Meclisi açılmıştır (II). Ancak Temsil Heyeti'nin Ankara'yı merkez seçmesi İstanbul'un işgalinden ÇOK ÖNCE (27 Aralık 1919) gerçekleşmiştir.",
    answers: [
      { text: "Yalnız II", ok: false }, { text: "I ve II", ok: true }, { text: "I ve III", ok: false }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: false }
    ] // Cevap anahtarı 9.B.
  },
  {
    text: "11 kişiden oluşan Büyük Millet Meclisi hükûmeti aşağıdakilerden hangisi ile tanımlanmıştır?",
    diff: 2,
    expl: "I. TBMM döneminde uygulanan 'Meclis Hükümeti' sisteminde, meclis üyeleri arasından tek tek oylanarak seçilen bakanların (vekillerin) oluşturduğu kurula 'İcra Vekilleri Heyeti' (Bakanlar Kurulu) denilirdi.",
    answers: [
      { text: "Heyet-i Vükela", ok: false }, { text: "Layiha Encümenliği", ok: false }, { text: "İcra Vekilleri Heyeti", ok: true }, { text: "Âyan Meclisi", ok: false }, { text: "Saltanat Şûrası", ok: false }
    ] // Cevap anahtarı 10.C.
  },
  {
    text: "- Büyük Millet Meclisine karşı Erzincan bölgesinde çıkarılmıştır.\n- II. İnönü Savaşı sürecinde Yunan ordularının saldırısına zemin hazırlamıştır.\nÖzellikleri verilen isyan hareketi aşağıdakilerden hangisidir?",
    diff: 3,
    expl: "Milli Mücadele'nin en kritik günlerinde (II. İnönü savaşı öncesi) Erzincan/Tunceli dolaylarında aşiretlerin çıkardığı ve Merkez ordusu tarafından zar zor bastırılan 'Koçgiri İsyanı', Türk ordusunu iki cephede birden savaşmak zorunda bırakmıştır.",
    answers: [
      { text: "Demirci Mehmet", ok: false }, { text: "Cemal Bey", ok: false }, { text: "Ali Batı", ok: false }, { text: "Koçgiri", ok: true }, { text: "Çerkez Ethem", ok: false }
    ] // Cevap anahtarı 11.D.
  },
  {
    text: "Mardin dolaylarında Kürt devleti kurma amaçlı İngiliz destekli çıkartılan ayaklanma aşağıdakilerden hangisidir?",
    diff: 3,
    expl: "İngilizlerin kışkırtmasıyla Mardin, Siirt, Batman civarında Bağımsız bir Kürt devleti kurmak amacıyla (Sevr'in ilgili maddesi uyarınca) çıkan ve TBMM tarafından bastırılan isyan 'Ali Batı' (veya Cemil Çeto) isyanıdır. (Şıklarda Ali Batı var).",
    answers: [
      { text: "Koçgiri", ok: false }, { text: "Şeyh Said", ok: false }, { text: "Nasturi", ok: false }, { text: "Çapanoğlu", ok: false }, { text: "Ali Batı", ok: true }
    ] // Cevap anahtarı 12.E.
  },
  {
    text: "Kürt Teali Cemiyeti;\nI. Çapanoğlu,\nII. Koçgiri,\nIII. Cemil Çeto\nisyanlarından hangilerini desteklemiştir?",
    diff: 3,
    expl: "İngiliz destekli Kürt Teali Cemiyeti, Doğu'da devlet kurmak için hem Erzincan/Sivas havalisindeki Koçgiri isyanını (II) hem de Batman civarındaki Cemil Çeto isyanını (III) kışkırtmış ve desteklemiştir. Çapanoğlu (I) isyanı ise Yozgat'ta padişah/hilafet yanlısı bir isyandır.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "I ve II", ok: false }, { text: "I ve III", ok: false }, { text: "II ve III", ok: true }, { text: "I, II ve III", ok: false }
    ] // Cevap anahtarı 13.D.
  },
  {
    text: "I. TBMM'nin ayaklanmalara karşı aldığı önlemler arasında aşağıdakilerden hangisi yer almaz?",
    diff: 2,
    expl: "TBMM isyanlara karşı İstiklal Mahkemelerini kurmuş (D), Hıyanet-i Vataniye kanununu çıkarmış, Ankara Müftüsü (Rıfat Börekçi) vasıtasıyla karşı fetva yayımlatmış (E) ve İstanbul Hükümeti ile haberleşmeyi kesmiştir (B). 'Takrir-i Sükûn Kanunu' (C) ise 1925 yılında (II. TBMM döneminde) Şeyh Sait isyanı için çıkarılmıştır. Ayrıca A şıkkı Subay Okulu (Ankara'da Talimgah) açılmıştır.",
    answers: [
      { text: "Ankara'da subay okulunun açılması", ok: false }, { text: "İstanbul Hükûmeti ile haberleşmenin kesilmesi", ok: false }, { text: "Takrir-i Sükûn Kanunu'nun çıkarılması", ok: true }, { text: "İstiklal Mahkemelerinin kurulması", ok: false }, { text: "Ankara müftüsü tarafından fetva yayımlanması", ok: false }
    ] // Cevap anahtarı 14.C.
  },
  {
    text: "I. TBMM'de bulunan aşağıdaki gruplardan hangisi çoğunlukla eski İttihatçılardan oluşmuştur?",
    diff: 3,
    expl: "Birinci mecliste siyasi parti yoktu ancak meclis grupları vardı. Bunlardan 'Tesanüt' (Dayanışma) grubu, çoğunlukla Milli Mücadele saflarına katılan eski İttihat ve Terakki Cemiyeti mensuplarından oluşmaktaydı.",
    answers: [
      { text: "Tesanüt", ok: true }, { text: "Yeşil Ordu", ok: false }, { text: "Müdafaa-i Hukuk", ok: false }, { text: "Islahat-ı Esasi", ok: false }, { text: "Halk Zümresi", ok: false }
    ] // Cevap anahtarı 15.A.
  },
  {
    text: "Mustafa Kemal 1920 yılının Nisan ayı seçimlerinde aşağıdaki illerin hangisinin temsilcisi olarak Büyük Millet Meclisine katılmıştır?",
    diff: 2,
    expl: "Mustafa Kemal Paşa, Son Osmanlı Mebusan Meclisi'ne Erzurum mebusu olarak seçilmişti; ancak bu meclis dağıtılıp Ankara'da Birinci TBMM (Büyük Millet Meclisi) açıldığında (23 Nisan 1920) 'Ankara' milletvekili olarak meclise girmiştir.",
    answers: [
      { text: "Erzurum", ok: false }, { text: "Ankara", ok: true }, { text: "İzmir", ok: false }, { text: "Trabzon", ok: false }, { text: "Selanik", ok: false }
    ] // Cevap anahtarı 16.B.
  }
];

// ============================================================================
// TBMM DÖNEMİ - TEST 2
// ============================================================================
export const TAR_TBMM_DONEMI_TEST_2: McQ[] = [
  {
    text: "<p><b>I. TBMM'ye karşı çıkarılan ayaklanmaların bastırılmasında;</b></p><p>I. Merkez Ordusu,<br>II. Kuvay-ı Seyyare,<br>III. Düzenli ordu</p><p><b>birliklerinden hangileri görev almıştır?</b></p>",
    diff: 2,
    expl: "TBMM'ye karşı çıkan isyanların bastırılmasında Nurettin Paşa komutasındaki Merkez Ordusu, Çerkez Ethem'e bağlı Kuvay-ı Seyyare (düzenli ordu öncesi) ve daha sonra kurulan Düzenli Ordu birlikleri görev almıştır.",
    answers: [
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p><b>Kurtuluş mücadelesini yöneten I. TBMM'nin gelir kaynakları oluşturmak için yaptığı çalışmalar arasında aşağıdakilerden hangisi <u>yer almaz</u>?</b></p>",
    diff: 2,
    expl: "Millî Korunma Kanunu, II. Dünya Savaşı yıllarında (1940) ekonomiyi denetim altına almak için çıkarılmıştır. I. TBMM dönemi ile ilgisi yoktur.",
    answers: [
      { text: "Millî Korunma Kanunu'nun çıkarılması", ok: true },
      { text: "Osmanlı Bankasına el koyması", ok: false },
      { text: "Duyun-u Umumiye'ye aktarılan gelirlerin Millî Mücadele'ye kanalize edilmesi", ok: false },
      { text: "Vergi Kanunu'nun düzenlenmesi", ok: false },
      { text: "Sovyet Rusya aracılığı ile Müslüman toplumlardan gelen yardımın kabul edilmesi", ok: false }
    ]
  },
  {
    text: "<p><b>Büyük Millet Meclisi tarafından 24 Nisan 1920'de kabul edilen ilk kanun aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "I. TBMM'nin çıkardığı ilk kanun, hayvancılıkla uğraşanlardan alınan verginin artırılmasını öngören Ağnam vergisinin dört katına çıkarılması kanunudur.",
    answers: [
      { text: "Saltanatın kaldırılması", ok: false },
      { text: "Ağnam vergisinin arttırılması", ok: true },
      { text: "Hıyanet-i Vataniye", ok: false },
      { text: "Firariler Kanunu", ok: false },
      { text: "Nisab-ı Müzakere", ok: false }
    ]
  },
  {
    text: "<p><b>I. TBMM'ye karşı görülen;</b></p><p>I. Anzavur,<br>II. Bolu,<br>III. Yozgat</p><p><b>ayaklanmalarından hangilerinin bastırılmasında Çerkez Ethem katkı sağlamıştır?</b></p>",
    diff: 2,
    expl: "Çerkez Ethem (Kuvay-ı Seyyare), Ahmet Anzavur, Düzce-Bolu-Hendek ve Yozgat (Çapanoğlu) isyanlarının bastırılmasında TBMM'ye önemli hizmetlerde bulunmuştur.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p>I. Temsil Heyeti'nin Ankara'ya gelmesi ile yayın hayatına başlamıştır.<br>II. Büyük Millet Meclisinin yarı resmî yayın organıdır.<br>III. İstiklal Marşı'nın yayımlandığı ilk gazetedir.</p><p><b>Yukarıda verilen özelliklerden hangilerinin Hâkimiyet-i Milliye gazetesi ile ilgili olduğu söylenebilir?</b></p>",
    diff: 3,
    expl: "Hâkimiyet-i Milliye, Temsil Heyeti'nin Ankara'ya gelmesiyle çıkarılmış ve TBMM'nin yarı resmi organı olmuştur. Ancak İstiklal Marşı'nın yayımlandığı ilk gazete Kastamonu'da çıkan Açıksöz gazetesidir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: true },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Büyük Millet Meclisinin aşağıda verilen çalışmalarından hangisi, \"kurucu meclis\" olma özelliğini kazandırmıştır?</b></p>",
    diff: 1,
    expl: "Bir meclisin 'kurucu' vasfı taşıması için yeni bir anayasa yapması gerekir. I. TBMM'nin 1921 Anayasası'nı (Teşkilat-ı Esasiye) ilan etmesi onun kurucu meclis olduğunu gösterir.",
    answers: [
      { text: "Saltanatın kaldırılması", ok: false },
      { text: "İstiklal Mahkemelerinin kurulması", ok: false },
      { text: "Teşkilat-ı Esasiye'nin ilanı", ok: true },
      { text: "İzmir İktisat Kongresi'nin düzenlenmesi", ok: false },
      { text: "Lozan Konferansı'na katılması", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi I. TBMM'de yer alan siyasal gruplardan biri <u>değildir</u>?</b></p>",
    diff: 2,
    expl: "Tesanüt, Yeşil Ordu, İstiklal, Halk Zümresi, Müdafaa-i Hukuk ve Islahat I. TBMM'deki gruplardır. Teceddüt Grubu ise son Osmanlı Mebusan Meclisinde İttihatçıların kurduğu gruptur.",
    answers: [
      { text: "Teceddüt", ok: true },
      { text: "Tesanüt", ok: false },
      { text: "Yeşil Ordu", ok: false },
      { text: "İstiklal", ok: false },
      { text: "Halk Zümresi", ok: false }
    ]
  },
  {
    text: "<p>- TBMM'ye bağlı Amasya merkezli kurulmuştur.<br>- Komutanlığını Nurettin Paşa yapmış olup, Koçgiri ve Pontus Ayaklanmalarının bastırılmasına katkı sağlamıştır.</p><p><b>Özellikleri verilen askerî birlik aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "TBMM tarafından Karadeniz'deki Pontus Rum çeteleri ve Koçgiri isyanını bastırmak amacıyla Amasya merkezli olarak Nurettin Paşa komutasında kurulan birlik Merkez Ordusu'dur.",
    answers: [
      { text: "Kuvayımilliye", ok: false },
      { text: "Merkez Ordusu", ok: true },
      { text: "Kuvay-ı Muhammediye", ok: false },
      { text: "Halaskar-ı Zabitan", ok: false },
      { text: "III. Kolordu", ok: false }
    ]
  },
  {
    text: "<p><b>Birinci TBMM'nin;</b></p><p>I. üyelerini seçim yolu ile belirlemesi,<br>II. İstiklal Mahkemelerini kurması,<br>III. yasama ve yürütme yetkilerini üzerinde toplaması</p><p><b>özelliklerinden hangileri \"olağanüstü\" koşullarda görev yaptığının göstergesidir?</b></p>",
    diff: 2,
    expl: "Seçim yapılması demokratik bir özelliktir. Ancak İstiklal Mahkemeleri ile yargıyı kullanması ve güçler birliği (yasama, yürütme) ilkesini benimsemesi savaş dönemi olağanüstü yetkiler kullandığını gösterir.",
    answers: [
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: true },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>I. TBMM'nin \"ihtilalci meclis\" özelliğini kazanması aşağıdakilerden hangisi ile doğrudan ilişkilendirilebilir?</b></p>",
    diff: 2,
    expl: "İhtilalci meclis, mevcut rejimi veya yönetimi yıkan meclis demektir. I. TBMM'nin Osmanlı'nın temeli olan saltanatı kaldırması onun ihtilalci yönünü açıkça gösterir.",
    answers: [
      { text: "Düzenli birliklerin kurulması", ok: false },
      { text: "Teşkilat-ı Esasiye'nin ilanı", ok: false },
      { text: "Saltanatın kaldırılması", ok: true },
      { text: "İstiklal Marşı'nın kabulü", ok: false },
      { text: "Maarif Kongresi'nin düzenlenmesi", ok: false }
    ]
  },
  {
    text: "<p><b>I. TBMM'ye karşı başlatılan ayaklanmaların;</b></p><p>I. İtilaf Devletlerinin kışkırtmaları,<br>II. rejime karşı olunması,<br>III. bazı Kuvayımiliye şeflerinin düzenli orduya katılmak istememesi</p><p><b>nedenlerinden hangilerine bağlı olarak ortaya çıktığı söylenebilir?</b></p>",
    diff: 2,
    expl: "TBMM'ye karşı isyanlarda İtilaf kışkırtmaları ve düzenli orduya girmek istemeyen şefler etkilidir. Ancak henüz rejim (Cumhuriyet) ilan edilmediği için 'rejime karşı' bir isyan söz konusu değildir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: true },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>1921 Anayasası'nda görülen ilk değişiklik aşağıdaki gelişmelerden hangisinin sonucunda gerçekleşmiştir?</b></p>",
    diff: 3,
    expl: "1921 Anayasası'ndaki en büyük ilk değişiklik 29 Ekim 1923'te Cumhuriyetin ilanı ile yapılmış ve 'Türkiye Devleti'nin hükûmet şekli Cumhuriyettir' maddesi eklenmiştir.",
    answers: [
      { text: "Saltanatın kaldırılması", ok: false },
      { text: "Ankara'nın başkent ilan edilmesi", ok: false },
      { text: "I. İnönü Savaşı'nın kazanılması", ok: false },
      { text: "Cumhuriyetin ilanı", ok: true },
      { text: "Lozan Konferansı'nın başlaması", ok: false }
    ]
  },
  {
    text: "<p><b>İstiklal Mahkemelerinin görev yaptığı olaylar arasında aşağıdakilerden hangisi <u>yer almaz</u>?</b></p>",
    diff: 2,
    expl: "Tekâlif-i Milliye, Şeyh Sait isyanı, İzmir Suikastı ve isyanlarda İstiklal Mahkemeleri kurulmuştur. Ancak 1930'daki Menemen Olayı sanıkları Divan-ı Harp'te (askeri mahkeme) yargılanmıştır.",
    answers: [
      { text: "Tekâlif-i Milliye Emirleri'nin uygulanması", ok: false },
      { text: "Mustafa Kemal'e suikast girişimi", ok: false },
      { text: "Menemen Olayı", ok: true },
      { text: "Çerkez Ethem İsyanı", ok: false },
      { text: "Büyük Millet Meclisi karşıtı isyanlar", ok: false }
    ]
  },
  {
    text: "<p><b>Birinci dönem İstiklal Mahkemelerinin kurulmasını teklif eden devlet adamı aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "TBMM'de asker kaçaklarını önlemek için Hıyanet-i Vataniye Kanunu'nu destekleyen ve İstiklal Mahkemeleri'nin de dayanağı olan Firariler Kanunu'nu teklif eden kişi dönemin milletvekili İsmet (İnönü) Bey'dir.",
    answers: [
      { text: "İsmet İnönü", ok: true },
      { text: "Tevfik Rüştü Aras", ok: false },
      { text: "Kâzım Karabekir", ok: false },
      { text: "Rauf Orbay", ok: false },
      { text: "Ali Fethi Okyar", ok: false }
    ]
  }
];

// ============================================================================
// TBMM DÖNEMİ - TEST 3
// ============================================================================
export const TAR_TBMM_DONEMI_TEST_3: McQ[] = [
  {
    text: "<p><b>Eskişehir - Kütahya Savaşlarının kaybedilmesi üzerine İstiklal Mahkemelerinin tekrar kurulmasını (2. Dönem) teklif eden dönemin genelkurmay başkanı aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Kütahya-Eskişehir Savaşları sonrasında orduda artan asker kaçaklarını önlemek için İstiklal Mahkemeleri'nin yeniden kurulmasını Meclis'e teklif eden dönemin Genelkurmay Başkanı Fevzi (Çakmak) Paşa'dır.",
    answers: [
      { text: "İsmet İnönü", ok: false },
      { text: "Fevzi Çakmak", ok: true },
      { text: "Mustafa Kemal", ok: false },
      { text: "Kâzım Karabekir", ok: false },
      { text: "Nuri Killigil", ok: false }
    ]
  },
  {
    text: "<p><b>Sevr Antlaşması'nın taslağının oluşturulduğu 1920 yılının 18 - 26 Nisan tarihleri arasında toplanan uluslararası konferans aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "İtilaf Devletleri, Osmanlı'yı paylaşma planını ve Sevr Antlaşması'nın maddelerini taslak olarak İtalya'da düzenlenen San Remo Konferansı'nda (Nisan 1920) belirlemişlerdir.",
    answers: [
      { text: "Paris Barış Konferansı", ok: false },
      { text: "Potsdam Konferansı", ok: false },
      { text: "San Remo Konferansı", ok: true },
      { text: "Atlantik Konferansı", ok: false },
      { text: "Londra Konferansı", ok: false }
    ]
  },
  {
    text: "<p><b>Askerlikten firar edenler, düşman lehinde propaganda ve casusluk yapanlar, padişah adına halkı isyana teşvik edenler, isyan ve yağma hareketlerine katılanlar hakkında Büyük Millet Meclisinin 29 Nisan 1920'de çıkardığı 14 maddeden oluşan kanun aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "I. TBMM'nin otoritesini sağlamak ve ayaklanmaları bastırmak amacıyla 29 Nisan 1920'de çıkardığı, vatan hainliğini tanımlayan kanun Hıyanet-i Vataniye Kanunu'dur.",
    answers: [
      { text: "Nisab-ı Müzakere", ok: false },
      { text: "Men-i Müskirat", ok: false },
      { text: "Men-i İsrafat", ok: false },
      { text: "Hıyanet-i Vataniye", ok: true },
      { text: "Takrir-i Sükûn", ok: false }
    ]
  },
  {
    text: "<p><b>Büyük Millet Meclisinin çıkardığı \"ilk ihtilal kanunu\" aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "BMM'nin kendi varlığına karşı çıkanları vatan haini sayarak cezalandırdığı Hıyanet-i Vataniye Kanunu, eski yönetime ve otoriteye başkaldıran yapısıyla ilk ihtilal kanunu niteliğindedir.",
    answers: [
      { text: "Hıyanet-i Vataniye", ok: true },
      { text: "Ağnam vergisinin arttırılması", ok: false },
      { text: "Firariler", ok: false },
      { text: "Nisab-ı Müzakere", ok: false },
      { text: "Başkomutanlık", ok: false }
    ]
  },
  {
    text: "<p><b>Azınlıkların ve İtilaf Devletlerinin büyük bir zaferi olarak görülen ancak kahraman Türk milleti tarafından kabul görmeyen Sevr Antlaşması ile Osmanlı Devleti'ne bırakılan topraklar arasında aşağıdakilerden hangisi <u>yer almaz</u>?</b></p>",
    diff: 2,
    expl: "Sevr Antlaşması'na göre Muğla ve çevresi İtalyanlara bırakılmıştır. Osmanlı'ya bırakılan kısıtlı yerler Orta Karadeniz ve İç Anadolu'nun küçük bir bölümüdür (Zonguldak, Samsun, Ordu, Yozgat gibi).",
    answers: [
      { text: "Zonguldak", ok: false },
      { text: "Samsun", ok: false },
      { text: "Ordu", ok: false },
      { text: "Yozgat", ok: false },
      { text: "Muğla", ok: true }
    ]
  },
  {
    text: "<p><b>\"Sinop milletvekili olarak seçildim ve en yaşlı üye olduğum için Büyük Millet Meclisinin açılış konuşmasını yaptım.\" sözleri ile biyografisini anlatan kişi aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "23 Nisan 1920'de TBMM ilk açıldığında, meclis gelenekleri gereği en yaşlı üye sıfatıyla başkanlık kürsüsüne çıkan ve açılış konuşmasını yapan kişi Sinop Mebusu Şerif Bey'dir.",
    answers: [
      { text: "Osman Nevres", ok: false },
      { text: "Rauf Orbay", ok: false },
      { text: "Reşat Hikmet", ok: false },
      { text: "Kâzım Özalp", ok: false },
      { text: "Şerif Bey", ok: true }
    ]
  },
  {
    text: "<p><b>İstiklal Mahkemeleri ile ilgili aşağıda verilen bilgilerden hangisi doğru nitelikte <u>değildir</u>?</b></p>",
    diff: 3,
    expl: "İstiklal Mahkemelerinin üyeleri bizzat TBMM milletvekilleri arasından seçilmiştir. Yargı yetkisinin meclis üyelerince kullanılması 'kuvvetler ayrılığı' değil, 'güçler (kuvvetler) birliği' ilkesinin uygulandığını gösterir.",
    answers: [
      { text: "Başkanlarından dolayı \"Üç Aliler\" meclisi olarak da bilinmektedir.", ok: false },
      { text: "Kurulmalarında döneminin genelkurmay başkanlarının teklifte bulunması etkili olmuştur.", ok: false },
      { text: "Vergi toplanmasını kolaylaştırıcı etkide bulunmuştur.", ok: false },
      { text: "Kuvvetler ayrılığı ilkesine uygun bir yapıdadır.", ok: true },
      { text: "Son olarak Mustafa Kemal'e suikast girişimi olayında görev almışlardır.", ok: false }
    ]
  },
  {
    text: "<p><b>23 Nisan 1920'de kurulan ve 11 Ağustos 1923'e kadar fiilî görevde bulunan I. TBMM'nin özellikleri arasında aşağıdakilerden hangisi <u>yer almaz</u>?</b></p>",
    diff: 2,
    expl: "I. TBMM, 1921 Anayasasını yapmış ve Kurtuluş Savaşı'nı yönetmiştir. Ancak anayasada 1923 yılında yapılan en büyük değişiklik olan 'Cumhuriyetin İlanı', Ağustos 1923'te göreve başlayan II. TBMM tarafından yapılmıştır.",
    answers: [
      { text: "1921 Anayasası'nda 1923 değişikliklerini yapması", ok: true },
      { text: "Saltanatı kaldırdığı için ihtilalci özellik taşıması", ok: false },
      { text: "Lozan Konferansı'na katılmış olması", ok: false },
      { text: "Teşkilat-ı Esasiye'yi ilan ettiği için \"kurucu meclis\" olarak tanımlanması", ok: false },
      { text: "Güçler birliği ve meclis hükûmeti sistemlerini uygulaması", ok: false }
    ]
  },
  {
    text: "<p>- Kürt devleti kurma amaçlı Mardin dolaylarında çıkarılmıştır.<br>- Kürt Teali Cemiyeti tarafından desteklenmiştir.</p><p><b>Özellikleri verilen TBMM karşıtı ayaklanma aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Mardin, Midyat, Nusaybin çevresinde İngilizlerin kışkırtması ve Kürt Teali Cemiyeti'nin desteğiyle bağımsızlık amacıyla çıkarılan isyan Ali Batı ayaklanmasıdır.",
    answers: [
      { text: "Milli Aşireti", ok: false },
      { text: "Delibaş Mehmet", ok: false },
      { text: "Ali Batı", ok: true },
      { text: "Koçgiri", ok: false },
      { text: "Çopur Musa", ok: false }
    ]
  },
  {
    text: "<p><b>I. TBMM tarafından Amasya merkezli kurulan merkez ordusunun;</b></p><p>I. Koçgiri,<br>II. Pontus,<br>III. Yozgat</p><p><b>ayaklanmalarının hangilerinin bastırılmasında rol oynadığı söylenebilir?</b></p>",
    diff: 2,
    expl: "Nurettin Paşa komutasındaki Merkez Ordusu'nun asıl kuruluş amacı Karadeniz'deki Pontus Rum çeteleriyle ve Sivas-Erzincan bölgesindeki Koçgiri isyanıyla mücadele etmektir. Yozgat isyanını Çerkez Ethem bastırmıştır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: true },
      { text: "I ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>I. TBMM'nin yasama ve yürütme yetkilerini üzerinde toplaması;</b></p><p>I. Mecliste gruplaşmaların oluşmasını önleme,<br>II. Meclisin üstünlüğünü sağlama,<br>III. Meclisin çalışmalarına ivme kazandırma</p><p><b>düşüncelerinden hangilerini gerçekleştirmeye yöneliktir?</b></p>",
    diff: 2,
    expl: "Güçler birliği (yasama ve yürütmenin mecliste olması), savaş ortamında hızlı karar alıp uygulamak (ivme kazandırmak) ve meclis iradesini her şeyin üzerinde tutmak (üstünlük) amacıyla benimsenmiştir. Gruplaşmayı önlemekle ilgisi yoktur.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: true }
    ]
  },
  {
    text: "<p>Birinci Büyük Millet Meclisinin açılması ile yeni Türk devleti kurulmuş ve yeni bir düzenin temelleri atılmıştır. Ancak bu durum Meclis tarafından ön plana çıkarılmamıştır.</p><p><b>Böyle bir tutumun amacı aşağıdakilerden hangisi olabilir?</b></p>",
    diff: 2,
    expl: "I. TBMM, öncelikli hedefi vatanı kurtarmak (bağımsızlık) olduğu için, milletin birlik ve beraberliğini bozabilecek rejim tartışmalarından (yeni devlet, cumhuriyet vb.) savaş bitene kadar özellikle uzak durmuştur.",
    answers: [
      { text: "Ulusal bağımsızlığa öncelik vermek", ok: true },
      { text: "İtilaf Devletlerinin düşmanca tavırlarını önlemek", ok: false },
      { text: "Laik anlayışın yerleşmesini sağlamak", ok: false },
      { text: "İstanbul Hükûmeti'nin tepkisinden çekinmek", ok: false },
      { text: "Devlet başkanlığı sorununu ortadan kaldırmak", ok: false }
    ]
  },
  {
    text: "<p>Mustafa Kemal 23 Nisan 1920'de Meclise verdiği önergede \"Geçici kaydıyla bir hükûmet reisi tanımak veya padişah vekili atamak doğru değildir.\" demiştir.</p><p><b>Mustafa Kemal'in bu sözleri;</b></p><p>I. Meclisin sürekli olacağı,<br>II. Meclisin bağımsız çalışacağı,<br>III. kabine sistemine geçileceği</p><p><b>durumlarından hangilerinin göstergesi niteliğindedir?</b></p>",
    diff: 2,
    expl: "Geçici başkan atanmaması Meclisin 'sürekli' olacağını, padişah vekili atanmaması ise dışarıdan hiçbir güce bağlı kalmadan 'bağımsız' karar alacağını gösterir. Kabine sistemine Cumhuriyetin ilanı ile geçilmiştir.",
    answers: [
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: true },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>I. TBMM'nin;</b></p><p>I. İstanbul Hükûmeti'nin yaptığı ve yapacağı işleri yok sayması,<br>II. güçler birliği ilkesini benimsemesi,<br>III. Vatana İhanet Yasası'nı çıkarması</p><p><b>çalışmalarından hangilerinin otoritesini güçlendirmeye yönelik olduğu söylenebilir?</b></p>",
    diff: 1,
    expl: "İstanbul'u yok sayarak tek yasal güç olduğunu iddia etmesi, yasama/yürütmeyi tek elde toplayıp gücü tekelleştirmesi ve karşı çıkanları yargılamak için Hıyanet-i Vataniye'yi çıkarması doğrudan otoriteyi güçlendirme adımlarıdır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p><b>Birinci Büyük Millet Meclisinin;</b></p><p>I. İstiklal Marşı'nı kabul etmesi,<br>II. Misakımillî'yi ilke edinmesi,<br>III. ağnam vergisini arttırması</p><p><b>durumlarından hangileri ulusalcı niteliğine kanıt <u>sayılamaz</u>?</b></p>",
    diff: 2,
    expl: "İstiklal Marşı ve Misakımillî (Milli Yemin) doğrudan milli-ulusalcı kimliğin göstergesidir. Ancak ağnam vergisinin artırılması sadece ekonomik ve mali bir tedbirdir, ulusalcılıkla doğrudan bağlantılı değildir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız III", ok: true },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false }
    ]
  }
];