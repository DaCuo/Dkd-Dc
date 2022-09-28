
import Layout from '@/layout'
export default {
  path: '/personnel',
  name: 'personnel',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/personnel'),
      meta: { title: '人员管理', icon: 'el-icon-user' }
    }

  ]
}
