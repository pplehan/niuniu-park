<script setup>
import NiuLayout from '@/components/NiuLayout.vue'
</script>
<template>
  <niu-layout>
    <div class="main-inform">
      <h2>註冊 / 登入</h2>
    <span>請輸入手機號碼</span>
    <a-input v-model:value="userName" placeholder="PhoneNumber">
      <template #prefix>
        <user-outlined />
      </template>
      <template #suffix>
        <a-tooltip title="Extra information">
          <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
        </a-tooltip>
      </template>
    </a-input>
<a-space wrap>
    <a-button type="primary">傳送認證碼</a-button>
  </a-space>
    </div>
  </niu-layout>
</template>

<style scoped>

.main-inform {
  width: 500px;
  height: 720px;
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
  height: 48px;
  border-radius: 20px;
  font-size: 20px;
  background-color: #333333;
  color: #FFFFFF;
}



</style>
