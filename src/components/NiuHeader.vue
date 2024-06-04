<template>
<div class="bg-headerColor flex items-center justify-between h-24 px-5 fixed w-full top-0 z-10 shadow-lg shadow-slate-500">
  <div class="flex items-center cursor-pointer" @click="changePage('/')">
    <img class="w-20 mr-2" :src="headerImg" alt="logo">
    <h1 class="text-3xl font-bold">niuniu-park</h1>
  </div>
  <ul class="flex items-center text-2xl">
    <li class="cursor-pointer mr-4 text-greyPrimary " @click="changePage('/KnowCows')">{{ t ('knowCows')}}</li>
    <li class="cursor-pointer text-greyPrimary" @click="changePage('/KnowProducts')">{{t('ProductsIntro')}}</li>
  </ul>
  <a-input-search 
    class="w-[240px]" 
    size = "large" v-model:value="value"
    placeholder="input search text" 
    enter-button 
    @search="onSearch"/>
  <div class="text-2xl flex items-center justify-between">
    <a-button type="link" block  @click="changePage('/login')">
      <UserOutlined class="text-greyPrimary" :style="{fontSize: '24px'}"/> 
    </a-button>
   <a-button type="link" block @click="changePage('/cart')">
      <ShoppingCartOutlined class="text-greyPrimary" :style="{fontSize: '25px'}"/>
   </a-button>
   <a-dropdown>
     <a-button type="link" block >
      <GlobalOutlined class="text-greyPrimary" :style="{fontSize: '24px'}"/>
     </a-button>
     <a-button type="link" block >
      <LogoutOutlined class="text-greyPrimary" :style="{fontSize: '24px'}"/>
     </a-button>
    <template #overlay>
      <a-menu>
        <a-menu-item v-for="item in translateButton" :key="item.key">
            <a-button block>{{ item.title }}</a-button>
        </a-menu-item>
        <a-menu-divider/>
      </a-menu>
    </template>
  </a-dropdown>
  </div>
</div>

</template>

<script setup>

import headerImg from '@/assets/image/001.png';
import { useRouter } from 'vue-router'
import { UserOutlined, ShoppingCartOutlined, GlobalOutlined, LogoutOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
const translateButton = ref([
  {
    key:'zh-TW',
    title:'繁體中文'
  }, 
  {
    key:'en-US',
    title:'English'
  }
])

const router = useRouter()
const changePage = (page) => {
  router.push(page)
}
</script>

<style scoped>


.input-search {
  border-radius: 100px;
  outline: none;
}


</style>