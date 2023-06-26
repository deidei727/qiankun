<template>
 
    <div class="mainapp">
    <!-- 标题栏 -->
    <header class="mainapp-header">
      <h1>QianKun</h1>
    </header>
    <div class="mainapp-main">
      <!-- 侧边栏 -->
      <ul class="mainapp-sidemenu">
        <li> <router-link to="/main/vue1">main-vue1 </router-link></li>
        <li> <router-link to="/main/vue2">main-vue2</router-link></li>
        <li> <router-link to="/subapp/vue1">subapp-vue1 </router-link></li>
        <li> <router-link to="/subapp/vue2">subapp-vue2 </router-link></li>
        <li> <router-link to="/subapp/vue3">subapp-vue3 </router-link></li>
     
      </ul>
      
       <router-view></router-view>
      <!-- 子应用  -->
    <div id="container"></div>
    </div>


   
   
  </div>
</template>

<script>

 
export default {
  name: 'App',
  components: {
    
  },

}
</script>

<style lang="less" scoped>

.mainapp {
  // 防止被子应用的样式覆盖
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  line-height: 1;
}

.mainapp-header {
  >h1 {
    color: #333;
    font-size: 36px;
    font-weight: 700;
    margin: 0;
    padding: 36px;
  }
}

.mainapp-main {
  display: flex;

  .mainapp-sidemenu {
    width: 130px;
    list-style: none;
    margin: 0;
    margin-left: 40px;
    padding: 0;
    border-right: 2px solid #aaa;

    >li {
      color: #aaa;
      margin: 20px 0;
      font-size: 18px;
      font-weight: 400;
      cursor: pointer;

      &:hover {
        color: #444;
      }

      &:first-child {
        margin-top: 5px;
      }
    }
  }
}

// 子应用区域
#container {
  flex-grow: 1;
  position: relative;
  margin: 0 40px;

  
}

</style>
