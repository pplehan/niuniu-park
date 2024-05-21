<template>
<div class="header">
  <div class="title">
    <img class="title-logo" :src="headerImg" alt="logo">
    <h1 class="text-3xl font-bold ">niuniu-park</h1>
  </div>
  <ul class="menu">
    <li><a href="">認識牧場牛</a></li>
    <li><a href="">產品介紹</a></li>
    <form class="form-search" action="url" method="get|post" name="search">
    <input class="input-search" type="text" > 
    <button><i class="fa-solid fa-magnifying-glass"></i></button>
    </form>
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
  width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 24px;
  color: #333333;;
  margin-right: 20px;
}

.form-search{
  width: 300px;
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
  width: 250px;
  outline: none;
}
i {
  font-size: 25px;
  color: #CC0000;
}


</style>