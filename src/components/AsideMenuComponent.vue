 <template>
  <v-navigation-drawer app v-model="props.drawer" permanent>
    <v-list>
  <v-list-item
    class="d-flex align-center"
    v-for="item in props.menu"
    :key="item.nombre"
    :to="item.uri"
    link
  >
  <v-row>
    <v-col><v-icon class="">{{ item.icon }}</v-icon></v-col>
    <v-col> <v-list-item-title>{{ item.nombre }}</v-list-item-title></v-col>
  </v-row>
    
   
  </v-list-item>
</v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">



const props = defineProps({
  drawer: Boolean,
  menu: Array
})


</script>