<template>
  <div>
    <v-app>
        <AppHeader />
        <v-main>
          <div class="container-main">
            <Location />
            <Tabs />
            <Filter />
            <Divider />
            <Room />
          </div>
        </v-main>
    </v-app>
  </div>
</template>

<style scoped>
.container-main {
  max-width: 1032px;
}
</style>