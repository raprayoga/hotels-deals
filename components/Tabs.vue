<template>
  <v-tabs
    v-model="tabs"
    color="primary"
    grow
    style="border-bottom: 0.5px solid #0000002b;"
  >
    <v-tab
      :value="1"
    >
      <v-icon>mdi-tag-outline</v-icon>
    </v-tab>

    <v-tab
      :value="2"
    >
      <v-icon>mdi-grid</v-icon>
    </v-tab>

    <v-tab
      :value="3"
    >
      <v-icon>mdi-alert-circle-outline</v-icon>
    </v-tab>
  </v-tabs>
</template>

<script setup lang="ts">
  const tabs = ref<number | null>(null)
</script>

<style scoped>

</style>