<template>
  <PbLegalPage title="Hesabını Silme">
    <p>
      Pracby hesabını ve ona bağlı verileri istediğin zaman kendin silebilirsin. Silme işlemi geri
      alınamaz.
    </p>

    <h2>Web sitesinden</h2>
    <ul>
      <li>pracby.com'da hesabına giriş yap.</li>
      <li><strong>Profil</strong> → <strong>Profili Düzenle</strong> sayfasına git.</li>
      <li>En alttaki <strong>Hesabı Sil</strong> bölümünde şifreni yazıp silmeyi onayla.</li>
    </ul>

    <h2>Mobil uygulamadan</h2>
    <ul>
      <li>Pracby uygulamasında hesabına giriş yap.</li>
      <li><strong>Profil</strong> → <strong>Profili Düzenle</strong> ekranına git.</li>
      <li>En alttaki <strong>Hesabı Sil</strong> düğmesine dokun, şifreni yazıp silmeyi onayla.</li>
    </ul>

    <h2>Giriş yapamıyorsan</h2>
    <p>
      Şifreni unuttuysan önce <NuxtLink to="/auth/forgot-password">şifreni sıfırla</NuxtLink>. Hesabına
      hiç erişemiyorsan, hesabında kayıtlı e-posta adresinden
      <a :href="`mailto:${LEGAL.email}?subject=Hesap%20silme%20talebi`">{{ LEGAL.email }}</a> adresine
      kullanıcı adınla birlikte yaz; talebin en geç 30 gün içinde yerine getirilir.
    </p>

    <h2>Neler silinir?</h2>
    <ul>
      <li>E-posta adresin, kullanıcı adın ve şifren,</li>
      <li>Sınav kayıtların, çözdüğün testler ve cevapların, ilerlemen, XP, seri ve başarıların,</li>
      <li>Palamut bakiyen, mağaza işlemlerin, envanterin ve liderlik tablosundaki yerin.</li>
    </ul>
    <p>
      Veriler hemen silinir; veritabanı yedeklerinden de en geç 30 gün içinde kalkar. Gönderdiğin soru
      bildirimleri, soruları düzeltmek için saklanır ama hesabınla bağlantısı kaldırılır. Ayrıntılar
      için <NuxtLink to="/gizlilik">Gizlilik ve KVKK Aydınlatma Metni</NuxtLink>'ne bakabilirsin.
    </p>
  </PbLegalPage>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

useSeoMeta({
  title: 'Hesabını Silme',
  description: 'Pracby hesabını ve verilerini web sitesinden veya mobil uygulamadan nasıl silebileceğin.',
})
useHead({ link: [{ rel: 'canonical', href: 'https://pracby.com/hesap-silme' }] })
</script>
