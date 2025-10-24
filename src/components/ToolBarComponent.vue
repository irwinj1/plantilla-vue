<template>
  <v-app-bar app color="grey-darken-4" dark>
    <v-app-bar-nav-icon @click="$emit('abrir-aside')" />

    <v-toolbar-title class="d-flex align-center">
      <div class="d-flex align-center">
        <v-img :src="logoBlanco" width="50" class="mr-2" />
        <span :class="display.mdAndDown.value ? 'text-h6' : 'text-h5'" style="white-space: nowrap; overflow: visible;">
          Admin Panel
        </span>
      </div>
    </v-toolbar-title>

    <v-btn icon>
      <v-icon>mdi-bell</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
import logoBlanco from '/src/assets/img/logo_blanco.png'
import { useDisplay } from 'vuetify'

const display = useDisplay()

defineEmits<{
  (e: 'abrir-aside'): void
}>()
</script>
