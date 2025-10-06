export const gastosRoute = [
    {
        path: '/gastos',
        name: 'inicio',
        component: () => import('./index.vue'),
        meta:{requiresAuth:true}
    }
]