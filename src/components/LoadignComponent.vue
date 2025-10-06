<template>
    <div>
        <v-overlay
      :model-value="props.overlay"
      class="align-center justify-center"
    >
      <v-progress-circular
        color="primary"
        size="64"
        indeterminate
      ></v-progress-circular>
    </v-overlay>
    </div>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
    overlay:boolean
}>(),{
    overlay:false
});

</script>