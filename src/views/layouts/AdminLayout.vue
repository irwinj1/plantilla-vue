<template>
  <v-app>
    <!-- Side Menu -->
    <aside-menu-component :drawer="drawer" :menu="menu" @update:drawer="abrirAside" />

    <!-- Toolbar -->
    <tool-bar-component @abrir-aside="abrirAside" />

    <!-- Main content -->
    <v-main>
      <v-container fluid>
        <router-view></router-view>
        <alert-component />
      </v-container>
      <footer-component class="position-fixed bottom-0" style="width: -webkit-fill-available;"></footer-component>
    </v-main>
    
  </v-app>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import AsideMenuComponent from '../../components/AsideMenuComponent.vue'
import ToolBarComponent from '../../components/ToolBarComponent.vue'
import { menu } from '../../config/utils/menu'
import FooterComponent from '../../components/FooterComponent.vue'
import AlertComponent from '../../components/AlertComponent.vue'

const drawer = ref(false)

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
