
import Layout from '@/layout'
export default {
  path: '/workorder',
  name: 'workorder',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/workorder'),
      meta: { title: '工单管理', icon: 'el-icon-date' }
    }

  ]
}
