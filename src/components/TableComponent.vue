<template>
    <v-row>
        <v-data-table :headers="props.headers" :items="props.items" item-key="name" hide-default-footer>
            <template v-for="header in headers" v-slot:[`item.${header.key}`]="{ item }">
        <slot :name="`item.${header.key}`" :item="item">
          <!-- Valor por defecto si no se pasa slot -->
          {{ getItemValue(item, header.key) }}
        </slot>
      </template>
        </v-data-table>
        <v-pagination :length="4" @update:model-value="onPageChange"> </v-pagination>
    </v-row>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
    headers:Array,
    items:Array,
    pagination:Number
})
function getItemValue(item: any, key: string) {
  return key.split('.').reduce((acc, part) => acc && acc[part], item)
}
const items = []

const onPageChange = (e) => {
    console.log(e);

}
</script>