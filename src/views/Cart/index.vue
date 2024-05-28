<script setup>
import NiuLayout from '@/components/NiuLayout.vue'
</script>
<template>
<niu-layout>
<div class="cart">
<h1> ①付款與取貨方式</h1>
  <div class="pay">
    <ul>

       <a-radio-group v-model:value="value">
    <a-radio :style="radioStyle" :value="1">Option A</a-radio>
    <a-radio :style="radioStyle" :value="2">Option B</a-radio>
    <a-radio :style="radioStyle" :value="3">Option C</a-radio>
    <a-radio :style="radioStyle" :value="4">
      More...
      <a-input v-if="value === 4" style="width: 100px; margin-left: 10px" />
    </a-radio>
  </a-radio-group>
    <li><input type="radio">線上刷卡【 宅配到府 】</li>
    <li><input type="radio">全家【 取貨付款 】</li>
    <li><input type="radio">7-11【 取貨付款 】</li>
  </ul>
  </div>
  <h1>②購物車內容</h1>
    <ul class="content-detail">
      <li>商品資料</li>
      <li>單件價格</li>
      <li>數量</li>
      <li>小計</li>
      <li>移除</li>
    </ul>
    <h1>③填寫訂購資料</h1>
    <form class="order">
       取貨人姓名<a-space direction="vertical">
    <a-input v-model:value="value" placeholder="name" />
  </a-space>
      電子郵件<a-space direction="vertical">
    <a-input v-model:value="value" placeholder="e-mail" />
  </a-space>
      寄送地址<a-space direction="vertical">
    <a-input v-model:value="value" placeholder="address" />
  </a-space>

   <a-space wrap>
    <a-button type="primary">確認OK</a-button>
  </a-space>
    </form>
  </div>
</niu-layout>
</template>
<style scoped>

h1 {
  padding: 20px 20px;
}
.cart {
  width: 60%;
  height: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
}

.pay  {
  font-size: 24px;
  border: solid 1px black;
  width: 80%;
  height: 160px;
  padding: 20px;
}

.content-detail {
  border: solid 1px black;
  height: 200px;
  width: 80%;
  display: flex;
  justify-content: space-around;
}

.order {
  font-size: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

h1{
  font-size: 24px;
}
.button {
  border: solid 1px black;
}
.order-text {
  border: solid 1px black;
}

</style>