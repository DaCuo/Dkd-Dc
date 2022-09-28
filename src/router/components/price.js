
import Layout from '@/layout'
export default {
  path: '/price',
  name: 'price',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/price'),
      meta: { title: '对账管理', icon: 'el-icon-finished' }
    }

  ]
}
