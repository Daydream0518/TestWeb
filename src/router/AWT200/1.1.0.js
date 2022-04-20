export default [
  {
    path: 'dashboard',
    name: 'Dashboard1.1.0',
    component: () => import('@/views/dashboard/index'),
    meta: { title: 'Dashboard1.1.0', icon: 'dashboard' }
  },
  {
    path: 'rrrrrrjjjjj',
    // name: 'Dashboard1.1.0',
    component: () => import('@/views/renjian/index'),
    meta: { title: '菜单名称任健', icon: 'user' },
    children: [
      {
        path: 'rrrrrrjjjjj22222',
        // name: 'Dashboard1.1.0',
        component: () => import('@/views/renjian/index'),
        meta: { title: '菜单名称任健sssss', icon: 'user' }
      }
    ]
  },
  {
    path: 'rrrrrrjjjj2j',
    // name: 'Dashboard1.1.0',
    component: () => import('@/views/renjian/index'),
    meta: { title: '菜单名称任健2', icon: 'user' }
  }
]
