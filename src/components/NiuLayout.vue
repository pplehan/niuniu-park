<script setup>
import NiuHeader from '@/components/NiuHeader.vue';
import NiuFooter from '@/components/NiuFooter.vue'
</script>
<template>
  <niu-header />
  <div class="pt-24">
    <slot />
  </div>
  <niu-footer />
</template>
<style scoped></style>