<template>
  <PbLegalPage title="Kullanım Koşulları">
    <p>
      Bu koşullar, Pracby web sitesi (pracby.com) ve Pracby mobil uygulamasının ("Pracby") kullanımını
      düzenler. Pracby'ı kullanarak veya hesap oluşturarak bu koşulları kabul etmiş olursun.
      Hizmeti sunan: <strong>{{ LEGAL.controller }}</strong>, {{ LEGAL.address }}.
    </p>

    <h2>1. Hizmet</h2>
    <p>
      Pracby, KPSS ve benzeri sınavlara hazırlık için soru çözme, tekrar ve ilerleme takibi sunan bir
      eğitim platformudur. Pracby'ı hesap açmadan misafir olarak veya ücretsiz bir hesapla
      kullanabilirsin. İçerik ve özellikler zaman içinde değişebilir.
    </p>

    <h2>2. Hesap</h2>
    <ul>
      <li>Kayıt olurken doğru bir e-posta adresi vermeli, şifreni kimseyle paylaşmamalısın.</li>
      <li>Hesabında yapılan işlemlerden sen sorumlusun; izinsiz bir kullanım fark edersen şifreni değiştirip bize haber ver.</li>
      <li>Kullanıcı adın liderlik tablosunda diğer kullanıcılara görünür. Hakaret içeren, yanıltıcı veya başkasını taklit eden kullanıcı adları kullanılamaz.</li>
      <li>Hesabını istediğin zaman <NuxtLink to="/hesap-silme">silebilirsin</NuxtLink>.</li>
    </ul>

    <h2>3. Uygulama içi puanlar ve ürünler</h2>
    <p>
      Palamut, XP, enerji ve mağazadaki ürünler yalnızca Pracby içinde geçerli sanal öğelerdir;
      parasal değerleri yoktur, nakde çevrilemez, devredilemez ve hesap silindiğinde geri gelmez.
      Oyun dengesini korumak için bu öğelerin kazanılma ve harcanma kurallarını değiştirebiliriz.
    </p>

    <h2>4. Kurallar</h2>
    <p>Pracby'ı kullanırken şunları yapmamalısın:</p>
    <ul>
      <li>Hile yapmak, puan veya palamut kazanmak için sistemi kötüye kullanmak, otomatik araçlarla istek göndermek,</li>
      <li>Hizmetin güvenliğini veya çalışmasını bozmaya çalışmak, başka bir kullanıcının hesabına erişmek,</li>
      <li>Soruları ve içerikleri toplu olarak kopyalamak, yayımlamak veya ticari amaçla kullanmak,</li>
      <li>Soru bildirimlerinde hakaret içeren veya alakasız içerik göndermek.</li>
    </ul>
    <p>
      Bu kurallara uyulmazsa kazanılan puanları ve öğeleri geri alabilir, hesabı askıya alabilir veya
      kapatabiliriz.
    </p>

    <h2>5. İçerik ve fikri haklar</h2>
    <p>
      Pracby'daki sorular, konu anlatımları, tasarım ve yazılım üzerindeki haklar Pracby'a veya
      lisans verenlerine aittir. Sana yalnızca kişisel ve ticari olmayan amaçla kullanma izni verilir.
    </p>

    <h2>6. Sorumluluğun sınırı</h2>
    <p>
      Soruları ve açıklamaları doğru tutmak için özen gösteririz, ancak hatasız olduklarını garanti
      edemeyiz; hatalı bir soru görürsen uygulama içinden bildirebilirsin. Pracby'ın sınav başarısı
      sağlayacağı garanti edilmez ve resmi sınav kurumlarıyla bir bağlantısı yoktur. Hizmet bakım veya
      teknik sebeplerle zaman zaman kesintiye uğrayabilir.
    </p>

    <h2>7. Kişisel veriler</h2>
    <p>
      Kişisel verilerinin nasıl işlendiği <NuxtLink to="/gizlilik">Gizlilik Politikası ve KVKK Aydınlatma Metni</NuxtLink>'nde anlatılır.
    </p>

    <h2>8. Değişiklikler ve uygulanacak hukuk</h2>
    <p>
      Bu koşulları güncelleyebiliriz; önemli değişiklikleri Pracby üzerinden duyururuz. Güncellemeden
      sonra Pracby'ı kullanmaya devam etmen yeni koşulları kabul ettiğin anlamına gelir. Bu koşullara
      Türkiye Cumhuriyeti hukuku uygulanır.
    </p>

    <h2>9. İletişim</h2>
    <p>Sorular ve talepler için: <a :href="`mailto:${LEGAL.email}`">{{ LEGAL.email }}</a></p>
  </PbLegalPage>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

useSeoMeta({
  title: 'Kullanım Koşulları',
  description: 'Pracby web sitesi ve mobil uygulamasının kullanım koşulları.',
})
useHead({ link: [{ rel: 'canonical', href: 'https://pracby.com/kullanim-kosullari' }] })
</script>
