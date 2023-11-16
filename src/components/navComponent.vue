<template>
    <div class="menu d-flex justify-content-center w-100">
        <ul class="w-100 p-0">
            <router-link style="text-decoration: none;" :to="{ name: 'home-page' }">
                <li class="nav-item"><i class="ps-2 fa-solid fa-house"></i> TỔNG QUAN</li>
            </router-link>
            <router-link style="text-decoration: none;" :to="{ name: 'order' }">
                <li class="nav-item"><i class="ps-2 fa-solid fa-file"></i> QUẢN LÍ ĐƠN HÀNG</li>
            </router-link>
            <li>
                <div class="btn-group">
                    <button class="btn btn-sm nav-item" type="button">
                        <i class="ps-2 fa-brands fa-product-hunt"></i> QUẢN LÍ SẢN PHẨM
                    </button>
                    <button type="button" class="btn btn-sm  dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown" aria-expanded="false">
                    </button>
                    <ul class="dropdown-menu px-2">
                        <router-link style="text-decoration: none;" :to="{ name: 'product-list' }">
                            <li class="text-black">Danh sách sản phẩm</li>
                        </router-link>
                        <router-link style="text-decoration: none;" :to="{ name: 'product-new' }">
                            <li class="text-black">Thêm sản phẩm mới</li>
                        </router-link>

                    </ul>
                </div>
            </li>
            <router-link style="text-decoration: none;" :to="{ name: 'consumer-list' }">
                <li class="nav-item"> <i class="ps-2 fa-solid fa-users"></i> KHÁCH HÀNG </li>
            </router-link>
            <router-link style="text-decoration: none;" :to="{ name: 'report' }">
                <li class="nav-item"><i class="ps-2 fa-solid fa-chart-column"></i>
                    BÁO CÁO
                </li>
            </router-link>
            <a style="text-decoration: none;" href="#">
                <li class="nav-item"><i class="ps-2 fa-brands fa-app-store-ios"></i>
                    ỨNG DỤNG
                </li>
            </a>
            <a href="#" style="text-decoration: none;">
                <li class="nav-item"><i class="ps-2 fa-brands fa-square-facebook"></i>
                    FACEBOOK
                </li>
            </a>
            <router-link style="text-decoration: none;" :to="{ name: 'setting' }">
                <li class="nav-item"><i class="ps-2 fa-solid fa-gear"></i> CÀI ĐẶT</li>
            </router-link>
        </ul>
    </div>
</template>
<script>
</script>
<style scoped>
* {
    list-style: none;
}

li {
    margin: 10px 0;
    border-bottom: 1px rgb(192, 192, 192) solid;
}

li:hover {
    color: green;
}

.nav-item {
    color: rgb(120, 120, 120);
    padding: 7px 0;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 2px;

}
</style>
