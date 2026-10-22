<template>
  <PbLegalPage title="Gizlilik Politikası ve KVKK Aydınlatma Metni">
    <p>
      Bu metin, Pracby web sitesi (pracby.com) ve Pracby mobil uygulamasını ("Pracby") kullanırken
      kişisel verilerinin nasıl işlendiğini 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK")
      kapsamında açıklar.
    </p>

    <h2>1. Veri sorumlusu</h2>
    <p>
      <strong>{{ LEGAL.controller }}</strong><br>
      Adres: {{ LEGAL.address }}<br>
      E-posta: <a :href="`mailto:${LEGAL.email}`">{{ LEGAL.email }}</a>
    </p>

    <h2>2. İşlenen kişisel veriler</h2>
    <ul>
      <li><strong>Hesap bilgileri:</strong> e-posta adresi, kullanıcı adı ve şifre (şifren geri çevrilemeyecek şekilde şifrelenerek saklanır, biz de göremeyiz).</li>
      <li><strong>Kullanım ve öğrenme verileri:</strong> seçtiğin sınav ve düzeyler, çözdüğün testler ve verdiğin cevaplar, puan (XP), seri, enerji, palamut bakiyesi, mağaza işlemleri, kazandığın başarılar ve günlük hedefin.</li>
      <li><strong>Bildirimler:</strong> bir soruyu hatalı diye bildirdiğinde seçtiğin neden ve yazdığın açıklama.</li>
      <li><strong>Teknik veriler:</strong> IP adresi, tarayıcı/cihaz bilgisi ve istek kayıtları (güvenlik ve hata ayıklama için sunucu kayıtlarında).</li>
      <li><strong>Misafir kullanım:</strong> hesap açmadan kullandığında ilerlemen yalnızca cihazında saklanır; soru bildirirsen cihazına özel rastgele bir kimlik numarası bizimle paylaşılır.</li>
    </ul>

    <h2>3. İşleme amaçları ve hukuki sebepler</h2>
    <ul>
      <li>Hesabını oluşturmak, giriş yapmanı sağlamak ve Pracby'ı sunmak (ilerleme, puan, seri, mağaza): <strong>sözleşmenin kurulması ve ifası</strong> (KVKK m. 5/2-c).</li>
      <li>Şifre sıfırlama e-postası göndermek: <strong>sözleşmenin ifası</strong> (m. 5/2-c).</li>
      <li>Liderlik tablosunda kullanıcı adını ve puanını diğer kullanıcılara göstermek: <strong>sözleşmenin ifası</strong> (m. 5/2-c).</li>
      <li>Hatalı soruları düzeltmek, hizmeti güvenli tutmak, kötüye kullanımı ve hileyi önlemek: <strong>meşru menfaat</strong> (m. 5/2-f).</li>
      <li>Yasal yükümlülükleri yerine getirmek (ör. 5651 sayılı Kanun kapsamındaki kayıtlar, resmi makam talepleri): <strong>hukuki yükümlülük</strong> (m. 5/2-ç).</li>
    </ul>
    <p>Kişisel verilerin reklam veya pazarlama amacıyla kullanılmaz, satılmaz ve profil çıkarmak için işlenmez.</p>

    <h2>4. Verilerin aktarıldığı taraflar</h2>
    <ul>
      <li><strong>E-posta hizmet sağlayıcısı (Resend, ABD):</strong> şifre sıfırlama e-postalarını göndermek için e-posta adresin aktarılır.</li>
      <li><strong>Google Fonts (Google, ABD):</strong> web sitesindeki yazı tipleri Google sunucularından yüklendiği için IP adresin ve tarayıcı bilgin Google'a iletilir.</li>
      <li><strong>Sunucu/barındırma hizmeti:</strong> veriler, Pracby'ın çalıştığı sunucuda saklanır.</li>
      <li><strong>Yetkili kamu kurumları:</strong> yalnızca yasal bir talep olduğunda.</li>
    </ul>
    <p>
      Yurt dışındaki hizmet sağlayıcılara aktarım KVKK m. 9'daki şartlara uygun olarak yapılır.
    </p>

    <h2>5. Toplama yöntemi</h2>
    <p>
      Veriler; kayıt, giriş ve profil formlarına yazdıkların, Pracby'ı kullanırken oluşan kayıtlar ve
      sunucu kayıtları yoluyla elektronik ortamda otomatik ya da kısmen otomatik olarak toplanır.
    </p>

    <h2>6. Saklama süresi</h2>
    <p>
      Hesap verilerin, hesabın açık olduğu sürece saklanır. Hesabını sildiğinde hesabın ve ona bağlı
      tüm veriler hemen silinir; veritabanı yedeklerinden de en geç 30 gün içinde kalkar. Soru
      bildirimlerin silinmez ama hesabınla bağlantısı kaldırılır. Sunucu kayıtları, yasal sürelerle
      sınırlı olarak tutulur.
    </p>

    <h2>7. Çerezler ve cihazda saklanan veriler</h2>
    <p>
      Pracby reklam veya takip çerezi kullanmaz. Giriş bilgin (oturum anahtarı), misafir ilerlemen ve
      bazı tercihlerin yalnızca hizmetin çalışması için cihazında (tarayıcı yerel depolaması veya
      uygulamanın güvenli depolaması) saklanır. Çıkış yaptığında oturum anahtarı silinir.
    </p>

    <h2>8. KVKK kapsamındaki hakların</h2>
    <p>KVKK m. 11 uyarınca şu haklara sahipsin:</p>
    <ul>
      <li>Kişisel verilerinin işlenip işlenmediğini öğrenme ve işlenmişse bilgi talep etme,</li>
      <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
      <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
      <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
      <li>KVKK m. 7 çerçevesinde silinmesini veya yok edilmesini isteme,</li>
      <li>Düzeltme ve silme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
      <li>Münhasıran otomatik sistemlerle analiz edilmesi sonucu aleyhine bir sonuç çıkmasına itiraz etme,</li>
      <li>Kanuna aykırı işleme nedeniyle zarara uğrarsan zararın giderilmesini talep etme.</li>
    </ul>
    <p>
      Kullanıcı adını, e-postanı ve şifreni profil ayarlarından kendin değiştirebilir, hesabını
      <NuxtLink to="/hesap-silme">hesap silme</NuxtLink> sayfasında anlatıldığı gibi kendin silebilirsin.
      Diğer talepler için <a :href="`mailto:${LEGAL.email}`">{{ LEGAL.email }}</a> adresine yazabilirsin;
      talebin en geç 30 gün içinde ücretsiz olarak yanıtlanır.
    </p>

    <h2>9. Çocuklar</h2>
    <p>
      Pracby sınavlara hazırlanan yetişkinler için tasarlanmıştır. 18 yaşından küçüksen Pracby'ı
      velinin veya yasal temsilcinin onayıyla kullanmalısın.
    </p>

    <h2>10. Değişiklikler</h2>
    <p>
      Bu metni güncelleyebiliriz. Önemli değişiklikleri Pracby üzerinden duyururuz; güncel metin her
      zaman bu sayfadadır.
    </p>
  </PbLegalPage>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

useSeoMeta({
  title: 'Gizlilik Politikası ve KVKK Aydınlatma Metni',
  description: 'Pracby kişisel verilerini hangi amaçla işler, kimlerle paylaşır, ne kadar saklar ve KVKK kapsamındaki hakların nelerdir.',
})
useHead({ link: [{ rel: 'canonical', href: 'https://pracby.com/gizlilik' }] })
</script>
