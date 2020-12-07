<template>
  <div class="header">
    <div class="header_left">
      <!-- {{menueList}} -->
      <p></p>
      <ul>
        <li class="header_logo"><img src="http://cp.jekang.cn/uploads/image/logo/logo.png"></li>
        <li v-for="(v,i) in menueList" :key="i">{{v.name}}</li>
      </ul>
    </div>
    <div class="header_right">
      <!-- <div class="header_search">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <i class="el-icon-search"></i>
      </div> -->
      <ul>
        <li class="header_search">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
          <i class="el-icon-search"></i>
        </li>
				<li><a>备案</a></li>
				<li><a>论坛</a></li>
				<li><a>管理控制台</a></li>
        <li>登陆</li>
        <li>注册</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    name:"HomeHeader",
    data () {
      return {
        menueList: [
          {
            id: '1',
            name: '最新活动',
            url: '/new'
          },
          {
            id: '2',
            name: '产品',
            url: '/product'
          },
          {
            id: '3',
            name: '解决方案',
            url: '/'
          },
          {
            id: '4',
            name: '合作与生态',
            url: '/case'
          },
          {
            id: '5',
            name: '服务体系',
            url: '/cooperation'
          },
          {
            id: '6',
            name: '帮助中心',
            url: '/help'
          },
          {
            id: '7',
            name: '关于我们',
            url: '/about'
          }
        ],
        searchText: '',
        secondNav: {},
        map: {}
      }
    },
  }
</script>
<style lang="less" scoped>
  .header{
    height: 55px;
    line-height: 55px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    .header_logo{
      img{
        height: 45px;
        display: flex;
        margin-top: 5px;
      }
    }
    .header_left{
      ul{
        display: flex;
        li{
          margin-left: 10px;
          padding: 0 10px;
        }
      }
      flex: 7;
    }
    .header_right{
      flex: 4;
      display: flex;
      .header_search{
        border: 1px SOLID #ccc;
        height: 30px;
        width: 150px;
        margin-top: 15px;
        line-height: 20px;
        .el-input {
          width: 120px;
        }
        .el-input /deep/ input{
          border: none;
          height: 30px;
        }
      }
      ul{
        display: flex;
        li{
          padding: 0 15px;
        }
      }
    }
   
  }
</style>