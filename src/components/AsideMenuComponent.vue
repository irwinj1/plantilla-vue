<template>
  <v-navigation-drawer app v-model="props.drawer" temporary width="400">
    <v-list density="compact" nav>
      <v-list-item class="pa-2">
        <v-row align="center" no-gutters>
          <!-- Botón de menú -->
          <v-col cols="auto">
            <v-btn icon="mdi-reorder-horizontal" variant="text" density="comfortable" @click="toggleDrawer"></v-btn>
          </v-col>

          <!-- Logo + Título -->
          <v-col class="d-flex align-center ml-10" >
            <v-img :src="logoNegro" max-width="40" class="mr-2" contain></v-img>
            <span class="text-h6 font-weight-medium">Admin Panel</span>
          </v-col>
        </v-row>
      </v-list-item>

      <v-list-item v-for="item in props.menu" :key="item.nombre" :to="item.uri" link @click="toggleDrawer"
        :active="isActive(item.uri)" :class="isActive(item.uri) ? 'item-activo' : ''">
        <v-row>
          <v-col cols="3"><v-icon>{{ item.icon }}</v-icon></v-col>
          <v-col><v-list-item-title>{{ item.nombre }}</v-list-item-title></v-col>
        </v-row>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import logoNegro from '../assets/img/logo.png'

const props = defineProps({
  drawer: Boolean,
  menu: Array
})

const emit = defineEmits(['update:drawer'])

const toggleDrawer = () => {
  emit('update:drawer')
}
const route = useRoute()

const isActive = (uri: string) => route.path === uri
</script>

<style scoped>
.item-activo {
  background-color: #212121;
  color: white;
}
</style>
