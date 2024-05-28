<script setup>
import NiuLayout from '@/components/NiuLayout.vue';
import { ref } from 'vue';
import { homeApi } from '@/api/module/home'
import { onMounted } from 'vue';

const cowList = ref ([])

const getCowsData = async() => {
  const { data } = await homeApi.getCows()
  cowList.value = data
}


onMounted(() => {
  getCowsData()
})

</script>

<template>
<niu-layout>
  <div class="flex flex-col my-5">
  <section class="container mx-auto">
    <h2 class="cow-title mb-3">認識牧場牛</h2>
    <div class="flex flex-wrap -mx-4">
      <div class="flex-none md:w-1/3 sm:w-2/4 px-4 mb-4" v-for="item in cowList" :key="item.id" hoverable>
  <a-card >
    <template #cover>
      <img class="h-72 object-fit" alt="example" :src="item.image" />
    </template>
    <a-card-meta :title="item.title">
      <template #description>{{ item.desc }}</template>
    </a-card-meta>
  </a-card>
      </div>
    </div>
  </section>
  </div>
</niu-layout>
</template>

<style scoped>


.cow, .product {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.cow-title, .product-title {
  text-align: center;
  font-size: 28px;
}



.cow > div,.product > div {
  position: relative;
  height: 300px;
  width: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0px -44px;
}
.cow-content, .product-content{
  width: 500px;
  position: absolute;
  height: 48px;
  bottom: 0;
  text-align: center;
  font-size: 32px;
  background-color: white;
}


</style>
