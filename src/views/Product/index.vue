<script>
import NiuLayout from '@/components/NiuLayout.vue'
export default {
  components: {
    NiuLayout,
  },
};
</script>
<template>
<niu-layout>
<div class="product">
  <div class="image-col-4"></div>
  <div class="product-content">
    <h3 class="product-name">高優質鮮乳</h3>
    <p class="product-detail">品名：niuniu-park高優質鮮乳
超高溫瞬間殺菌(U.H.T.)
原料：100%生乳(品質符合CNS3055標準)
成分：非脂肪乳固形物8.25%以上、乳脂肪3.0%以上未滿3.8%
內容量：946mL
保存期限：12日(係指未開封前保存日數)
原產地：台灣
需冷藏2℃~7℃，離開冷藏勿超過半小時
本產品含有牛乳，不適合對牛乳過敏者食用
品質符合：CNS3056標準</p>
<p class="date">有效期限: 2026/02/14</p>
    <span class="price">NT$484</span> 
    <span class="number-text">數量</span>
    <div class="number">
     
    </div>
    <div class="order">
    <button class="order-add">加入購物車</button>
    <button class="order-buy">直接購買</button>
    </div>
    <span class="love">加入追蹤清單</span>
</div>
    </div>

</niu-layout>
</template>
<style scoped>


.product {
  width: 90%;
  margin-left: 5%;
  height: 720px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
  .product-content {
  margin-top: 24px ;
  width: 800px;
  display: flex;
  flex-direction: column;
  font-size: 24px;

  }
.product-name {
  font-size: 32px;
  margin-bottom: 20px;

}

.date {
  margin: 40px 0px 40px;
}


.price {
  font-size: 40px;
  color: grey;
}

.number {
  border: solid black;
  height: 50px;
}

.order {
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
}

.order-add, .order-buy {
  width: 300px;
  border: solid 1px black;
  border-radius: 10px;
}
.love {
  padding: 40px 60px;
}



.image-col-4 {
  margin: 40px 40px;
  border: solid 1px black;
  width: 500px;
  background-repeat: no-repeat;
  background-size: cover;
}

.image-col-4 {
  background-image: url('https://cdn.cybassets.com/media/W1siZiIsIjIxMjc0L3Byb2R1Y3RzLzM2NjI0MTkyLzE2NDk0MDMxNjJfMTQzMmNiMTk0YTA3YTMxOTY0MjAuanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=444028f8a2f3410e');
}


</style>