<template>
<div class="header">
  <div class="title cursor-pointer" @click="changePage('/')">
    <img class="title-logo" :src="headerImg" alt="logo">
    <h1 class="text-3xl font-bold ">niuniu-park</h1>
  </div>
  <ul class="menu">
    <li class="cursor-pointer" @click="changePage('/KnowCows')">認識牧場牛</li>
    <li class="cursor-pointer" @click="changePage('/KnowProducts')">產品介紹</li>
     <a-input-search
      v-model:value="value"
      placeholder="input search text"
      enter-button
      @search="onSearch" class="size-1/3" 
    />
 <a href="" class="icon-user">
  <i class="fa-solid fa-user"></i>
 </a>
    <a href="" class="icon-shop">
    <i class="fa-solid fa-cart-shopping"></i>
    </a>
    <li><a href="" class="icon-translate">
    <i class="fa-solid fa-earth-americas"></i></a></li>
  </ul>
</div>
</template>

<script setup>
import headerImg from '@/assets/image/001.png';
import {useRouter} from 'vue-router'

const router = useRouter()
const changePage = (page) => {
  router.push(page)
}
</script>

<style scoped>



.header {
  height: 100px;
  display: flex;
  justify-content: space-between;
  background-color: #B5C0D0;
}

.title{
  display: flex;
  align-items: center;
}

.title-logo{
  width: 100px;
  margin-left: 20px;
}

.menu{
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 24px;
  color: #333333;;
  margin-right: 20px;
}

/* .form-search{
  border-radius: 100px;
  height: 50px;
  border: solid 1px black;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 20px;
  padding: 10px;
}

.input-search {
  border-radius: 100px;
  outline: none;
} */
i {
  font-size: 25px;
  color: #CC0000;
}


</style>