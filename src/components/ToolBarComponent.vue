<template>
     <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="$emit('abrir-aside')" />
      <v-toolbar-title>Admin Panel</v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>
</template>
<script setup lang="ts">
defineEmits<{
  (e: 'abrir-aside'): void
}>()
</script>