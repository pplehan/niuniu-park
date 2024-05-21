<script setup>
import NiuLayout from '@/components/NiuLayout.vue'
</script>
<template>
  <niu-layout>
    <div class="main-inform">
      <h2>註冊 / 登入</h2>
    <span class="main-number">請輸入手機號碼</span>
    <form class="form-number">
      <input class="input-number" type="text">
    </form>
    <button class="button-number">傳送認證碼</button>
    </div>
  </niu-layout>
</template>

<style scoped>
.wrapper{
  min-height: 100%; 
  margin-bottom: -50px;
}
.main-inform {
  width: 500px;
  height: 680px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h2 {
  font-size: 40px;
  font-weight: bold;
}

.main-number{
  margin-top: 10px;
  font-size: 20px;
  color: #333333;;
}

.form-number{
  width: 300px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 30px;
  display: flex;
  justify-content: space-around;
  margin: 50px 50px;
}


.input-number{
  width: 250px;
  border-radius: 10px;
  font-size: 30px;
  outline: none;

}

.button-number{
  width: 200px;
  height: 30px;
  border: solid 1px black;
  border-radius: 20px;
  font-size: 20px;
  background-color: #333333;
  color: #FFFFFF;
}



</style>
