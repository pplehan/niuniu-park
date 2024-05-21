<script setup>
import NiuHeader from '@/components/NiuHeader.vue';
import NiuFooter from '@/components/NiuFooter.vue'
</script>
<template>
<div class="wrapper">
  <niu-header />
  <div class="main">
    <slot />
  </div>
  <niu-footer />
</div>
</template>
<style scoped>
.main {
  display: flex;
  justify-content: center;
  background-color: #CCD3CA;
}
</style>