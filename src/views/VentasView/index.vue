<template>
    <v-container>
        <v-row>
            <v-col>
                casa
            </v-col>
        </v-row>
        <table-component :headers="headers" :items="items">
            <template v-slot:[`item.acciones`]="{ item }">
                <v-row>
                    <v-btn density="compact" icon="mdi-pencil-outline" elevation="0"></v-btn>
                </v-row>
            </template>
        </table-component>
    </v-container>
</template>
<script setup lang="ts">
import TableComponent from '../../components/TableComponent.vue';

import { onMounted, ref } from 'vue';
import { useVentas } from './composables/useVentas';
const { ventas, cargarVentas } = useVentas()

const headers = ref([
    {
        title: 'Id',
        align: 'start',
        key: 'id',
    },
    {
        title: 'Cliente',
        align: 'start',
        key: 'cliente.nombre',
    },
    {
        title: 'Total',
        align: 'start',
        key: 'total',
    },
    {
        title: 'Acciones',
        align: 'start',
        key: 'acciones'
    }
])

const items = ref<typeof ventas.value>([]);

onMounted(async () => {
    await cargarVentas()
    items.value = ventas.value
    console.log(ventas.value);

})
</script>