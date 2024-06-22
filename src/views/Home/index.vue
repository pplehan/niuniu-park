<<<<<<< HEAD
// Home/index.vue

<script setup></script>
=======
<script setup>
import NiuLayout from '@/components/NiuLayout.vue';
import { ref } from 'vue';
import { homeApi } from '@/api/module/home'
import { onMounted } from 'vue';
// import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
// <LeftOutlined />
const carouselImg = ref([
  {
    id: 1,
    image: "https://img.shoplineapp.com/media/image_clips/65703906b68e7f0023544f54/original.jpg?1701853446"
  },
  {
    id: 2,
    image: "https://www.penghutimes.com/FileUploads/ArticlePhoto/20230226093140284.jpg"
  },
  {
    id: 3,
    image: "https://img.ltn.com.tw/Upload/news/600/2023/06/29/4348677_1_1.jpg"
  },
  {
    id: 4,
    image: "https://hoshinoresorts.com/wpadmin2022/wp-content/uploads/2022/08/0c6264bcef555c4d418ad5d08010623f-1200x801.jpg"
  }
])





</script>
>>>>>>> 7f70e535f375628355e4e2d914beea1cc7455ea0

<template>
<niu-layout>
<a-carousel autoplay arrows>
   <template #prevArrow>
      <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
        <left-circle-outlined />
      </div>
    </template>
    <template #nextArrow>
      <div class="custom-slick-arrow" style="right: 10px">
        <right-circle-outlined />
      </div>
    </template>
    <div v-for="item in carouselImg" :key="item.id">
      <img class="h-[720px] w-full object-cover " :src="item.image" alt="">
      </div>
  </a-carousel>
<div class="container mx-auto">
  <h1 class="my-10 text-center text-3xl">關於niuniu-park</h1>
   <a-row >
  <a-col :span="12">
    <h2 class="text-2xl my-10" >經營理念</h2>
      <p class="text-lg leading-loose">我們致力於打造一個融合教育、娛樂和自然體驗的牧場。通過導覽和互動展示，讓遊客近距離了解牛隻的生活和環境。我們希望啟發對自然和動物的尊重，並提供一個安全、舒適的環境，讓遊客放鬆身心，享受美好時光，帶著愉快的回憶離開。</p>
  </a-col>
  <a-col :span="12">
    <img src="https://img.pikbest.com/wp/202345/cow-an-image-of-a-group-cows-in-field_9584541.jpg!w700wp" alt="" >
  </a-col>
</a-row>
  <a-row>
    <a-col :span="12"><img src="https://1.bp.blogspot.com/-lxsoh7O5dHA/YSO9BUcSu_I/AAAAAAAAGVs/jF-sr_1rDqIVTfXiqVYtiyzjE7wKE-2OACLcBGAsYHQ/s0/P1100115-3.jpg" alt=""></a-col>
    <a-col :span="12">
      <h2 class="text-2xl my-10" >niuniu-park由來</h2>
      <p class="text-lg leading-loose ">
      傳說中，賢明的巴巴羅薩國王夢想創建一個與自然和諧相處的地方。他招募了最優秀的建築師、農夫和溫暖的牛隻，建造了一座神秘的牧場。這裡黎明鮮花綻放，夜晚星光閃耀。人們與牛群共舞，享受自然之美，找到心靈的寧靜。牧場成為傳奇，傳承和平、友愛與美好的價值觀。
      </p>
      </a-col>
  </a-row>
    <a-row>
    <a-col :span="12">
      <h2 class="text-2xl my-10" >顏色意境</h2>
      <p class="text-lg leading-loose ">
      綠色象徵生命與和諧，藍色代表天空與清新，黃色象徵陽光與豐收，棕色和土色展現大地的穩定，白色則帶來純淨與和平。這些色彩融合，營造出自然美麗、寧靜愉悅的環境。
      </p>
    </a-col>
    <a-col :span="12"><img src="https://www.dabencar.com/archive/image/article5/a3eec51b0fa273b9.jpg" alt=""></a-col>
  </a-row>
  <a-row class="mb-10">
    <a-col :span="12"><img src="https://image.kkday.com/v2/image/get/w_960%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_145912/20240116050152_btKnr/jpg" alt=""></a-col>
    <a-col :span="12">
      <h2 class="text-2xl my-10" >牧場使命</h2>
        <p class="text-lg leading-loose ">我們致力於創造一個融合教育、娛樂和自然體驗的場所，讓遊客能夠近距離了解和欣賞牛隻的生活與自然環境。我們提供安全、舒適且友善的氛圍，傳承和平、友愛和美好的價值觀，讓每位遊客都能帶著愉悅的回憶離開。</p>
    </a-col>
  </a-row>



<!-- <div class="business">
  <span class="idea">經營理念</span>
</div>
  <div class="content">
    <div class="content-p">
      <div class="content-p-l-1"></div>
      <div class="content-p-r">
        <h2>niuniu-park由來</h2>
        <p>先扭一下，再扭一下，想像它是個公園</p>
      </div>
    </div>
    <div class="content-p">
      <div class="content-p-l-2"></div>
      <div class="content-p-r">
        <h2>顏色意象</h2>
        <p>niuniu-park標準色是以藍、白、綠依一定的比例調和而成的niuniu綠。</p>
      </div>
    </div>
    <div class="content-p">
      <div class="content-p-l-3"></div>
      <div class="content-p-r">
        <h2>牧場使命</h2>
        <p>透過三生(生活、生產、生態)一體與三育(培育、保（復）育、教育 )並重的發展策略，永續經營寓教於樂的休閒事業，提供客人身、心、靈全方位的休閒體驗。</p>
      </div>
    </div>
</div> -->

  </div>




</niu-layout>
</template>

<<<<<<< HEAD
<style scoped></style>
=======
<style scoped>
:deep(.slick-slide h3) {
  color: #fff
}


:deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
}

:deep(.slick-arrrow.custom-slick-arrow:before){
  display: none;
}

:deep(.slick-arrrow.custom-slick-arrow:hover){
  color:#fff;
  opacity: 0.5;
}



</style>
>>>>>>> 7f70e535f375628355e4e2d914beea1cc7455ea0
