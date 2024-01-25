<template>
  <v-app-bar scroll-behavior="elevate">
    <div class="container-bar w-100 mx-4 mx-md-auto">
      <div class="d-flex justify-space-between align-center">
        <NuxtImg src="https://wisata.app/img/logo.png" width="184" height="42" class="d-none d-md-block" />

        <button>
          <v-icon icon="mdi-chevron-left" color="primary" size="x-large" :style="{ fontSize: '36px' }"></v-icon>
        </button>

        <div class="w-100 mx-2 mx-md-12">
          <v-btn variant="elevated" color="#f5f5f5" elevation="0" class="w-100 btn-search">
            <v-icon icon="mdi-magnify"></v-icon>
            <p class="text-none d-inline-block text-truncate">The Langham, Jakarta</p>
            <p class="text-none"> · 25 – 26 Jun </p>
          </v-btn>
        </div>

        <div>
          <v-btn variant="tonal" color="white" class="text-none bg-primary">Sign in</v-btn>
        </div>
      </div>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts"></script>

<style scoped>
.container-bar {
  max-width: 1032px;
}
</style>

<style>
.btn-search span {
  display: contents;
}
</style>
