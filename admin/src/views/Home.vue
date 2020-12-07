<template>
  <div class="home">
    14121212121
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import {getCurrentInstance} from "vue"

export default {
  name: "home",
  components: {
    HelloWorld
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
  
    this.axios.post('/api/indexApi/getrotation').then((res) => {
      console.log(res)
    }).catch();
   
  },
};
</script>
