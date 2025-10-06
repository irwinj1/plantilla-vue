export const ventasRoute = [
    {
        path: '/ventas',
        name: 'ventas',
        component: () => import('./index.vue'),
        meta:{requiresAuth:true}
    }
]