<template>
  <div class="home">
    <home-carouserl></home-carouserl>
   
   
  </div>
</template>

<script>
console.log("0.0.02")
import homeCarouserl from "@/components/home/carousel.vue";
import {postGetrotation} from "@/api/api"
// import {getCurrentInstance} from "vue"

export default {
  name: "home",
  components: {
    homeCarouserl
  },
  mounted() {
    // this.axios.post("/index/get_month_list.do",{

    // }).then((res) => {
    //   console.log(res)
    // })  
    // this.axios.post('/index/get_seven_days_list.do', {
        
    // }).then((res) => {
    //   // console.log(res.data)
    // })
    // 先创建一个FormData 对象
    // 将请求参数一个一个append进去，因为涉及到项目内部东西，而且需要安全请求，所以就随便写了几个键值代替
    

    postGetrotation({

    }).then(res => {
      res
    })
  },

};
</script>
