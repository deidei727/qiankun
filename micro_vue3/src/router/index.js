import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path: '/',
        component: () => import("../view/Index.vue")
    },
    {
      path: '/a',
      component: () => import("../view/A.vue")
  }
]
const router = createRouter({
	// 微服务启动时：路由前缀 + 基座父应用的规则
	// 独自启动时： 路由为： /
    history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? '/subAPP/' : '/'),
    routes,
  });

export default router
