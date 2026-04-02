<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat dense round icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" />
        <q-toolbar-title>
          <q-icon name="local_fire_department" color="orange" class="q-mr-sm" />
          Pracby
        </q-toolbar-title>
        <q-btn flat round icon="notifications" />
        <q-btn flat round icon="person" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header>Menü</q-item-label>
        <q-item v-for="item in menuItems" :key="item.to" clickable :to="item.to" active-class="text-primary">
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>
          <q-item-section>{{ item.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <slot />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
const leftDrawerOpen = ref(false);

const menuItems = [
  { icon: "school", label: "Öğren", to: "/" },
  { icon: "emoji_events", label: "Liderlik", to: "/leaderboard" },
  { icon: "person", label: "Profil", to: "/profile" },
];
</script>
