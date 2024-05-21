<script>
import NiuLayout from '@/components/NiuLayout.vue';
</script>
<template>
<div class="wrap">
<div class="cart">
<h1> ①付款與取貨方式</h1>
  <div class="pay">
    <ul>
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
      取貨人姓名<input class="order-text" type="text">
      電子郵件<input class="order-text" type="email">
      寄送地址<input class="order-text" type="text">
      <button class="button">確認</button>
    </form>
  </div>
</div>
</template>
<style scoped>

.cart {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  padding: 50px;
}

.pay  {
  font-size: 24px;
  border: solid black;
  width: 80%;
  height: 160px;
  padding: 20px;
}

.content-detail {
  border: solid black;
  height: 200px;
  width: 80%;
  display: flex;
  justify-content: space-around;
}

.order {
  font-size: 20px;
  width: 60%;
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