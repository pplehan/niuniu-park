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
      <img class="h-[360px] w-full object-cover " :src="item.image" alt="">
      </div>
  </a-carousel>

  <h1>關於niuniu-park</h1>
  <h1>About us</h1>
<div class="business">
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

  </div>




</niu-layout>
</template>

<style scoped>
:deep(.slick-slide h3) {
  color: #fff
}

/* 
:deep(.slick-slide) {
  text-align: center;
  background: #364d79;
  overflow: hidden;
} */

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



.content-p-l-1 {
  background-image: url(https://img.pikbest.com/wp/202345/cow-an-image-of-a-group-cows-in-field_9584541.jpg!w700wp);
}

.content-p-l-2 {
  background-image: url(https://1.bp.blogspot.com/-lxsoh7O5dHA/YSO9BUcSu_I/AAAAAAAAGVs/jF-sr_1rDqIVTfXiqVYtiyzjE7wKE-2OACLcBGAsYHQ/s0/P1100115-3.jpg);
  background-size: Cover ; 
}

.content-p-l-3 {
  background-image: url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pulemilk.com%2Fblog%2Fposts%2Fdairy-log-10&psig=AOvVaw1yA0ayo1CpTIB0x6RxpU7a&ust=1717255320420000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJjOoOCYuIYDFQAAAAAdAAAAABAE);
  background-size: Cover ; 
}
.content-p-r {
  display: flex;
  flex-direction: column;
  justify-content: center;
}





</style>
