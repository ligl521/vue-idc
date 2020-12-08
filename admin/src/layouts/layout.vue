<template>
  <div>
      <home-header></home-header>
      <router-view></router-view>
      <home-footer></home-footer>
  </div>
</template>
<script>
import HomeHeader from "../components/header"
import HomeFooter from "../components/Footer/Footer"
export default{
  name:"home",
  data(){
    return{

    }
  },
  components:{
    HomeHeader,
    HomeFooter
  }
}
</script>