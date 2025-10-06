export const homeRoute =[
    {
        path: '/',
        name: 'inicio',
        component: () => import('./index.vue'),
        meta:{requiresAuth:true}
    }
]