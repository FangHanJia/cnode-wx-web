/**
 * 登录模块路由
 * @type { *[] }
 */
export default [
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录"
    },
    component: () => import(/* webpackChunkName: "login" */ "@/views/login/Index.vue")
  }
];
