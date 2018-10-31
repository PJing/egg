import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      meta: { title: '首页', icon: 'example' },
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '表单', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },
  // 商机
  {
    path: '/business',
    component: Layout,
    name: 'Business',
    meta: { title: '商机', icon: 'example' },
    children: [
      {
        path: 'businessDown',
        name: 'BusinessDown',
        component: () => import('@/views/business/businessDown'),
        meta: { title: '下游合作商', icon: 'example' }
      },
      {
        path: 'businessUpper',
        name: 'BusinessUpper',
        component: () => import('@/views/business/BusinessUpper'),
        meta: { title: '上游合作商', icon: 'example' }
      }
    ]
  },
  // 基础设置
  {
    path: '/basicSetting',
    component: Layout,
    // redirect: '/example/table',
    name: 'BasicSetting',
    meta: { title: '基础设置', icon: 'example' },
    children: [
      {
        path: 'varietyManage',
        name: 'VarietyManage',
        component: () => import('@/views/basicSetting/varietyManage'),
        meta: { title: '品种管理', icon: 'example' }
      },
      {
        path: 'phoneBind',
        name: 'PhoneBind',
        component: () => import('@/views/basicSetting/phoneBind'),
        meta: { title: '设备绑定', icon: 'example' }
      },
      {
        path: 'specManage',
        name: 'SpecManage',
        component: () => import('@/views/basicSetting/specManage'),
        meta: { title: '规格管理', icon: 'example' }
      },
      {
        path: 'specDetail',
        name: 'SpecDetail',
        hidden: true,
        component: () => import('@/views/basicSetting/template/specDetail'),
        meta: { title: '规格设置', icon: 'example' }
      },
      {
        path: 'addSpec',
        name: 'AddSpec',
        hidden: true,
        component: () => import('@/views/basicSetting/template/addSpec'),
        meta: { title: '规格设置', icon: 'example' }
      }
    ]
  },
  // 员工管理
  {
    path: '/staffManage',
    component: Layout,
    name:'StaffManage',
    meta: { title: '员工管理', icon: 'example' },
    children: [
      {
        path: 'staffSearch',
        name: 'StaffSearch',
        component: () => import('@/views/staffManage/staffSearch'),
        meta: { title: '员工工作量', icon: 'example' }
      },
      {
        path: 'staffList',
        name: 'StaffList',
        component: () => import('@/views/staffManage/staffList'),
        meta: { title: '员工名单', icon: 'example' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
