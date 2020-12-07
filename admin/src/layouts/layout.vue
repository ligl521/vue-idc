<template>
  <div>
      <home-header></home-header>
      <router-view></router-view>
  </div>
</template>
<script>
import HomeHeader from "../components/header"
export default{
  name:"home",
  data(){
    return{

    }
  },
  components:{
    HomeHeader

  }
}
</script>