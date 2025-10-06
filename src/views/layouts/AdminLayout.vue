<template>
  <v-app>
    <!-- Side Menu -->
    <aside-menu-component :drawer="drawer" :menu="menu"/>

    <!-- Toolbar -->
    <tool-bar-component @abrir-aside="abrirAside" />

    <!-- Main content -->
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import AsideMenuComponent from '../../components/AsideMenuComponent.vue'
import ToolBarComponent from '../../components/ToolBarComponent.vue'
import { menu } from '../../config/utils/menu'

const drawer = ref(true)

const isMobil = ref<boolean>(false)

const abrirAside = () => {
 
    drawer.value = !drawer.value
}
const validateMobil = ()=>{
  if (window.innerWidth<500) {
    isMobil.value=true
    drawer.value=false
  }
  else{
    isMobil.value=false
  }
}

onMounted(() => {
  validateMobil()
});
</script>