
import Layout from '@/layout'
export default {
  path: '/goods',
  name: 'goods',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/goods/index.vue'),
      meta: { title: '商品管理', icon: 'el-icon-news' }
    }

  ]
}
