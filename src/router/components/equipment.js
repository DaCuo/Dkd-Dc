
import Layout from '@/layout'
export default {
  path: '/equipment',
  name: 'equipment',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/equipment/index.vue'),
      meta: { title: '设备管理', icon: 'tree' }
    }

  ]
}
