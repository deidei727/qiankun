import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import { registerMicroApps, start } from 'qiankun';
Vue.config.productionTip = false
Vue.use(VueRouter)

registerMicroApps([
  
  {
    name: 'vueApp',
    // 入口地址根据自己情况进行书写
    entry: '//localhost:8081',
    container: '#container',
    activeRule: '/vue1',
  }, 
  {
    name: 'vue2App',
    entry: '//localhost:8082',
    container: '#container',
    activeRule: '/vue2',
  }, 
  {
    name: 'subAPP',
    entry: '//localhost:9000',
    container: '#container',
    activeRule: '/subAPP',
  },
   
]);
// 启动 qiankun
start();
new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
