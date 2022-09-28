
import Layout from '@/layout'
export default {
  path: '/ointposition',
  name: 'ointposition',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/ointposition/index.vue'),
      meta: { title: '点位管理', icon: 'el-icon-location-outline' }
    }

  ]
}
