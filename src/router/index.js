import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home-page',
        component: () => import('@/pages/homePage.vue'),
    },
    {
        path: '/danh-sach-san-pham',
        name: 'product-list',
        component: () => import('@/pages/productList.vue'),
    },
    {
        path: '/them-san-pham',
        name: 'product-new',
        component: () => import('@/pages/newProduct.vue'),
    },
    {
        path: '/cap-nhat-san-pham/:idproduct',
        name: 'product-update',
        component: () => import('@/pages/updateProduct.vue'),
        props: true
    },

    {
        path: '/chi-tiet-san-pham/:idproduct',
        name: 'product-detail',
        component: () => import('@/pages/detailProduct.vue'),
        props: true
    },
    {
        path: '/danh-sach-khach-hang',
        name: 'consumer-list',
        component: () => import('@/pages/consumerList.vue'),

    },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;