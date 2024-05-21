<script setup>
import NiuLayout from '@/components/NiuLayout.vue';
</script>
<template>
<niu-layout>
  <div class="wrap">
  <h2 class="cow-title">認識牧場牛</h2>
<div class="cow">
  <div class="cow-col-4">
    <div class="cow-content">臺灣黃牛(Taiwan Yellow Cattle)</div>
  </div>
  <div class="cow-col-4-2">
    <div class="cow-content">荷蘭(Holstein) </div>
  </div>
  <div class="cow-col-4-3">
    <div class="cow-content">聖達(Santa Gertrudis) </div>
  </div>
  <div class="cow-col-4-4">
    <div class="cow-content">布拉曼(Brahman)</div>
  </div>
  <div class="cow-col-4-5">
    <div class="cow-content">夏洛利(Charolais)</div>
  </div>
  <div class="cow-col-4-6">
    <div class="cow-content">水 牛</div>
  </div>

</div>
<h2 class="product-title">產品介紹</h2>
<div class="product">
<div class="product-col-4">
    <div class="product-content">高優質鮮乳</div>
  </div>
  <div class="product-col-4-2">
    <div class="product-content">原味優酪乳</div>
  </div>
  <div class="product-col-4-3">
    <div class="product-content">綜合莓果優酪乳</div>
  </div>
  <div class="product-col-4-4">
    <div class="product-content">原味優格</div>
  </div>
  <div class="product-col-4-5">
    <div class="product-content">柚香優格</div>
  </div>
  <div class="product-col-4-6">
    <div class="product-content">無糖優格 (無添加蔗糖)</div>
  </div>
</div>
</div>

</niu-layout>

</template>

<style scoped>
* {
  box-sizing: border-box;
}

.cow, .product { 
  height: 800px;
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

.cow-title {
  margin-top: 44px;
}


.cow > div,.product > div {
  position: relative;
  margin: 20px;
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

.cow-col-4 {
  background-image: url('@/assets/image/cow-picture/cow-1.png');
}
.cow-col-4-2 {
  background-image: url('@/assets/image/cow-picture/cow-2.jpg');
}

.cow-col-4-3 {
  background-image: url('@/assets/image/cow-picture/cow-3.jpg')
}
.cow-col-4-4 {
  background-image: url('@/assets/image/cow-picture/cow-4.jpg')
}
.cow-col-4-5 {
  background-image: url('@/assets/image/cow-picture/cow-5.jpg')
}
.cow-col-4-6 {
  background-image: url('@/assets/image/cow-picture/cow-6.jpg')
}

.product-col-4 {
  background-image: url('@/assets/image/product-picture/picture-1.jpg')
}
.product-col-4-2 {
  background-image: url('@/assets/image/product-picture/picture-2.jpg')
}
.product-col-4-3 {
  background-image: url('@/assets/image/product-picture/picture-3.jpg')
}

.product-col-4-4 {
  background-image: url('@/assets/image/product-picture/picture-4.jpg')
}
.product-col-4-5 {
  background-image: url('@/assets/image/product-picture/picture-5.jpg')
}
.product-col-4-6 {
  background-image: url('@/assets/image/product-picture/picture-6.jpg')
}

</style>
