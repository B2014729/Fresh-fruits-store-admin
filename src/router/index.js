import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home-page',
        component: () => import('@/pages/homePage.vue'),
    },

    {
        path: '/quan-li-don-hang',
        name: 'order',
        component: () => import('@/pages/orderManager.vue'),
    },

    {
        path: '/chi-tiet-don-hang/:idOrder',
        name: 'order-detail',
        component: () => import('@/pages/detailOrder.vue'),
        props: true
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

    {
        path: '/lap-bao-cao',
        name: 'report',
        component: () => import('@/pages/reportPage.vue'),

    },

    {
        path: '/cai-dat',
        name: 'setting',
        component: () => import('@/pages/settingPage.vue'),

    },


    {
        path: '/thong-tin-ca-nhan',
        name: 'detail-user',
        component: () => import('@/pages/detailUser.vue'),

    },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;