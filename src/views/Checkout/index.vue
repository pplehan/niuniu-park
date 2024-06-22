<script setup>
import NiuLayout from '@/components/NiuLayout.vue'
import { ref, computed } from 'vue' 
import { useRouter, useRoute } from 'vue-router';
const router = useRouter()
const route = useRoute()
const orderId = ref(route.query.orderId)
const orderStr = computed(()=>`訂單編號: ${orderId.value}`)

</script>
<template>
<niu-layout>
  <a-result status="success" title="訂購完成"
    :sub-title="orderStr">
    <template #extra>
      <a-button @click="router.push('/')" key="console" type="primary">回首頁</a-button>
    </template>
  </a-result>
</niu-layout>
</template>