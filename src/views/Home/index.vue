<script setup>
import NiuLayout from '@/components/NiuLayout.vue';
import { ref } from 'vue';
import { homeApi } from '@/api/module/home'
import { onMounted } from 'vue';

const carouselImg = ref([
  {
    id: 1,
    Image: "https://p1-q.mafengwo.net/s10/M00/D2/0F/wKgBZ1nEoEWABQVPAAEzJML1_gw57.jpeg?imageView2%2F2%2Fw%2F680%2Fq%2F90"
  },
  {
    id: 2,
    Image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.parenting.com.tw%2Farticle%2F5070345&psig=AOvVaw2seUAGvJeumTgKtONJo7-a&ust=1716816009610000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDg65e0q4YDFQAAAAAdAAAAABAE"
  },
  {
    id: 3,
    Image: "https://i.ytimg.com/vi/1tX0z1jySQo/maxresdefault.jpg"
  },
  {
    id: 4,
    Image: "https://hoshinoresorts.com/wpadmin2022/wp-content/uploads/2022/08/0c6264bcef555c4d418ad5d08010623f-1200x801.jpg"
  }
])





</script>

<template>
<niu-layout>
  <a-carousel :after-change="onChange">
    <div><h3><img src="" alt=""></h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </a-carousel>

<div class="about">
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

</div>



</niu-layout>
</template>

<style scoped>




.about {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  font-size: 20px;
  color: black;
}

.business {
  width: 100%;
  position: relative;

}

  .idea {
    position: absolute;
    left: 5%;
  
  }

.content {
  display: flex;
  flex-direction: column;
  align-items: center;

}

.content-p {
  width: 100%;
  display: flex;
  align-items: center;
 
}


.content-p-l-1, .content-p-l-2, .content-p-l-3, .content-p-r {
  width: 600px;
  height: 400px; 
  margin-bottom: 20px;
  margin-left: 40px;
}

.content-p-l-1 {
  background-image: url(https://img.pikbest.com/wp/202345/cow-an-image-of-a-group-cows-in-field_9584541.jpg!w700wp);
}

.content-p-l-2 {
  background-image: url(https://1.bp.blogspot.com/-lxsoh7O5dHA/YSO9BUcSu_I/AAAAAAAAGVs/jF-sr_1rDqIVTfXiqVYtiyzjE7wKE-2OACLcBGAsYHQ/s0/P1100115-3.jpg);
  background-size: Cover ; 
}

.content-p-l-3 {
  background-image: url(https://cdn.hk01.com/di/media/images/2590811/org/4456bb1c7f2d0096437181981137c9ef.jpg/KcHXY_I2YafgIupBIeRuvjkiQnwR8dN53Be6ydwXusk?v=w1920);
  background-size: Cover ; 
}

.content-p-r {
  display: flex;
  flex-direction: column;
  justify-content: center;
}





</style>
