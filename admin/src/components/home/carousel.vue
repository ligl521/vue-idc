<template>
  <div class="banner">
    <el-carousel :interval="4000"  height="620px">
      <el-carousel-item v-for="item in imgArr" :key="item">
        <div class="stypeImg" :style="{background:'url('+ item +')' + 'no-repeat center'}"></div>
      </el-carousel-item>
    </el-carousel>
    <!-- 定位 盒子 -->
    <el-row>
      <el-col :span="18" :class="['minBanner1',scroll >= 200 ? 'minBanner2' : '']"><div ></div></el-col>
    </el-row>
  </div>
</template>
<script>
import {postGetrotation} from "@/api/api"
export default {
  data() {
    return {
      imgArr:[],
      scroll:""
    }
  },
  methods:{
    menu() {
        this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
        console.log(this.scroll)
      }
  },
  mounted() {
    postGetrotation({

    }).then(res => {
      var that = this;
      console.log(JSON.parse(res).row)
      let img_data = JSON.parse(res).row; //轮播图数据
      for(var i=0;i<img_data.length;i++){
        that.imgArr.push("http://cp.jekang.cn" + img_data[i].rotation_bottom);
        that.imgArr.push("http://cp.jekang.cn" + img_data[i].rotation_small)
      }
        console.log(that.imgArr)
    });

    // 滚动事件
    window.addEventListener('scroll', this.menu)
  },
}
</script>
<style scoped>
  .stypeImg{
    width: 100%;
    height: 100%;
  }


  .bg-purple-dark {
    /* background: red; */
    height: 50px;
  }
  .banner{
    position: relative;
  }
  .minBanner1{
    height: 100px;
    background: #ccc;
    position: absolute;
    top: -50px;
    z-index: 999;
    left: 50%;
    transform: translateX(-50%);
    transition: 0.4s;
    /* transform:translateY(50px); */
  }
  .minBanner2{
    transform: translate(-50%,-40px);

  }
</style>