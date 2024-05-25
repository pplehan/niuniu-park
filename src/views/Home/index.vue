<script setup>
import NiuLayout from '@/components/NiuLayout.vue';
import {ref} from 'vue';
const cowList = ref([
  {
    id: 1,
    title: '臺灣黃牛(Taiwan Yellow Cattle)',
    image: 'https://www.foodnext.net/dispPageBox/getFile/GetImg.aspx?FileLocation=%2FPJ-FOODNEXT%2FFiles%2F&FileName=photo-35688-i.jpg',
  },
  {
    id: 2,
    title: '荷蘭(Holstein)',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoISnvVwMrU_5_QmTVkxFwQYqNOa5QSbev_gV9jzIuKQ&s',
  },
  {
    id: 3,
    title: '聖達(Santa Gertrudis)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Santa_Gertrudis_bull.JPG/640px-Santa_Gertrudis_bull.JPG',
  },
  {
    id: 4,
    title: '布拉曼(Brahman)',
    image: 'https://www.angrin.tlri.gov.tw/cow/CowType/brahman1.jpg',
  },
  {
    id: 5,
    title: '夏洛利(Charolais)',
    image: 'https://media.istockphoto.com/id/184925350/zh/%E7%85%A7%E7%89%87/white-cow.jpg?s=612x612&w=0&k=20&c=u6BXpdV7XAT8qVSBEb0PDGXpalsDwxuh1yNXFJa3JOM=',
  },
  {
    id: 6,
    title: '水 牛',
    image: 'https://pic.pimg.tw/jhy212jhy/1508671075-3373181057_wn.jpg',
  },
])

const milkList = ref([
  {
    id: 1,
    title: '高優質鮮乳',
    image: 'https://cdn.cybassets.com/media/W1siZiIsIjIxMjc0L3Byb2R1Y3RzLzM2NjI0MTkyLzE2NDk0MDMxNjJfMTQzMmNiMTk0YTA3YTMxOTY0MjAuanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=444028f8a2f3410e'
  },
  {
    id: 2,
    title: '原味優酪乳',
    image: 'https://static.owlting.com/market/public/items/thumbs/640x480/item_15880_26e5e646035e9acafa6df117221a8bf8'
  },
  {
    id: 3,
    title: '綜合莓果優酪乳',
    image: 'https://golden-goods.com/wp-content/uploads/2022/12/638070215896870000.jpg'
  },
  {
    id: 4,
    title: '原味優格',
    image: 'https://online.carrefour.com.tw/on/demandware.static/-/Sites-carrefour-tw-m-inner/default/dwd672f0c7/images/large/1500302100101.jpg'
  },
  {
    id: 5,
    title: '柚香優格',
    image: 'https://online.carrefour.com.tw/on/demandware.static/-/Sites-carrefour-tw-m-inner/default/dw23b1ecc9/images/large/1500301200101.jpg'
  },
  {
    id: 6,
    title: '無糖優格 (無添加蔗糖)',
    image: 'https://good.icook.tw/wp-content/uploads/2022/08/%E5%84%AA%E6%A0%BC%E6%8E%A8%E8%96%A6%EF%BC%BF%E7%94%A2%E5%93%81%E4%BB%8B%E7%B4%B906%EF%BC%BF%E3%80%90%E5%85%89%E6%B3%89%E3%80%91%E9%A0%82%E7%B4%9A%E9%AE%AE%E5%A5%B6%E5%84%AA%E9%85%AA-1.jpg'
  },
])
</script>
<template>
<niu-layout>
  <h2 class="cow-title">認識牧場牛</h2>
<div class="flex flex-wrap">
  <a-card v-for="item in cowList" :key="item.id" hoverable style="width: 240px">
    <template #cover>
      <img class="h-72 object-fit" alt="example" :src="item.image" />
    </template>
    <a-card-meta :title="item.title">
      <template #description>{{ item.desc }}</template>
    </a-card-meta>
  </a-card>
</div>
<h2 class="product-title">產品介紹</h2>
<div class="flex flex-wrap">
 <a-card v-for="item in milkList" :key="item.id" hoverable style="width: 240px">
    <template #cover>
      <img class="h-64 object-fit" alt="example" :src="item.image" />
    </template>
    <a-card-meta :title="item.title"/>
  </a-card>
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
  font-weight: bolder;
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
