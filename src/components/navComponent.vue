<template>
    <div class="menu d-flex justify-content-center w-100">
        <ul class="w-100 p-0">
            <router-link style="text-decoration: none;" :to="{ name: 'home-page' }">
                <li class="nav-item"><i class="fa-solid fa-house"></i> TRANG CHỦ</li>
            </router-link>

            <li>
                <div class="btn-group">
                    <button class="btn btn-sm nav-item" type="button">
                        <i class="fa-brands fa-product-hunt"></i> QUẢN LÍ SẢN PHẨM
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
            <router-link class="nav-item" style="text-decoration: none;" :to="{ name: 'consumer-list' }">
                <li> <i class="fa-solid fa-users"></i> KHÁCH HÀNG </li>
            </router-link>
            <li class="nav-item"><i class="fa-solid fa-gear"></i> CÀI ĐẶT</li>
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
    padding: 5px 0;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 2px;

}
</style>
