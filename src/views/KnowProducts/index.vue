<script setup>
import NiuLayout from '@/components/NiuLayout.vue';
import { ref } from 'vue';
import { homeApi } from '@/api/module/home'
import { onMounted } from 'vue';

const milkList = ref ([])

const getMilksData = async() => {
  const { data } = await homeApi.getMilks()
  milkList.value = data
}


onMounted(() => {
  getMilksData()
})


</script>
<template>
<niu-layout>
  <div class="flex flex-col my-5">
  <section class="container mx-auto">
    <h2 class="product-title mb-3">產品介紹</h2>
    <div class="flex flex-wrap -mx-4">
      <div class="flex-none md:w-1/3 sm:w-2/4 px-20 mb-10" v-for="item in milkList" :key="item.id" hoverable>
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
