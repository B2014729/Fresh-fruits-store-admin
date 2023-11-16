<template>
    <header class="d-flex align-items-end justify-content-between">
        <h5 class="text-secondary fw-bold">Dashboard</h5>
        <div class="d-flex mb-2">
            <router-link class="mt-2" :to="{ name: 'detail-user' }" style="text-decoration: none;">
                <span class="text-success">Duong Hai Bang</span>
            </router-link>

            <i class="fa-solid fa-bell mx-3 mt-2 fs-5 text-secondary"></i>
            <button class="btn" @click="onLogout">
                <i class="fa-solid fa-right-from-bracket fs-5 text-secondary"></i>
            </button>

        </div>
    </header>
</template>
<script>

export default {
    name: 'HeaderComponent',

    methods: {
        onLogout() {
            if (confirm('Bạn muốn đăng xuất!')) {
                this.$cookies.remove('jwt');
                window.location.href = '/';
            }
        }
    }
}
</script>   
<style scoped>
header {
    height: 60px;
}
</style>
