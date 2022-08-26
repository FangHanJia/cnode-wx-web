/**
 * 定义基础路由
 * @type { *[] }
 */

// 以下方法是读取./modules/目录下的所有js文件
let moduleRoutes = [];
const routerContext = import.meta.globEager("./modules/*.js");
for (const path in routerContext) {
  const routerModule = routerContext[path];
  moduleRoutes = [...moduleRoutes, ...(routerModule.default || routerModule)];
}

const baseRoutes = [
   {
     path: "/",
     name: "Home",
     meta: { title: "首页", requireAuth: false },
     component: () => import(/* webpackChunkName: "home" */ "@/views/home/Index.vue")
   },
   {
     path: "/:pathMatch(.*)*",
     name: "notFound",
     meta: { title: "页面丢失了..." },
     component: () => import(/* webpackChunkName: "notFound" */ "@/views/other/404.vue")
   }
 ];
 
 moduleRoutes = [...moduleRoutes, ...baseRoutes];
 export const routes = moduleRoutes;
 