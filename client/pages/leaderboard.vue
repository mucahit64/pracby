<template>
  <q-page padding>
    <div class="text-h5 text-bold q-mb-md">
      <q-icon name="emoji_events" color="amber" class="q-mr-sm" />
      Haftalık Liderlik Tablosu
    </div>

    <q-card flat bordered>
      <q-tabs v-model="league" class="text-grey" active-color="primary" indicator-color="primary" align="justify">
        <q-tab name="bronze" label="Bronz" icon="shield" />
        <q-tab name="silver" label="Gümüş" icon="shield" />
        <q-tab name="gold" label="Altın" icon="shield" />
        <q-tab name="diamond" label="Elmas" icon="diamond" />
      </q-tabs>

      <q-list separator>
        <q-item v-for="(player, index) in leaderboardData" :key="player.username">
          <q-item-section avatar>
            <q-avatar :color="index < 3 ? medalColors[index] : 'grey-3'" text-color="white" size="md">
              {{ index + 1 }}
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ player.username }}</q-item-label>
            <q-item-label caption>Seviye {{ player.level }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-badge color="primary" :label="`${player.xp} XP`" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
const league = ref("bronze");
const medalColors = ["amber", "blue-grey", "deep-orange"];

const leaderboardData = ref([
  { username: "ahmet_k", level: 8, xp: 520 },
  { username: "elif_y", level: 7, xp: 480 },
  { username: "mehmet_d", level: 6, xp: 410 },
  { username: "zeynep_a", level: 5, xp: 350 },
  { username: "can_b", level: 5, xp: 320 },
  { username: "selin_t", level: 4, xp: 280 },
  { username: "emre_g", level: 3, xp: 210 },
]);
</script>
