<template>
    <div class="p-3">
        <h4 class="text-secondary fw-bold">Danh sách sản phẩm__:</h4>
        <search-component @submit="search($event)">

        </search-component>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Tên SP</th>
                    <th scope="col" class="text-center">Số lượng (Kg)</th>
                    <th scope="col">Ngày nhập</th>
                    <th scope="col">HSD</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Nho mẫu đơn</td>
                    <td class="text-center">30</td>
                    <td>12/11/2023</td>
                    <td>17/11/2023</td>
                    <td class="p-0 pe-1">
                        <div class="d-flex justify-content-end">
                            <button class="btn btn-secondary"><i class="fa-solid fa-info"></i></button>
                            <button class="btn btn-primary mx-1"><i class="fa-solid fa-pen"></i></button>
                            <button class="btn btn-danger"> <i class="fa-solid fa-xmark"></i></button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Nho mẫu đơn</td>
                    <td class="text-center">30</td>
                    <td>12/11/2023</td>
                    <td>17/11/2023</td>
                    <td class="p-0 pe-1">
                        <div class="d-flex justify-content-end">
                            <button class="btn btn-secondary"><i class="fa-solid fa-info"></i></button>
                            <button class="btn btn-primary mx-1"><i class="fa-solid fa-pen"></i></button>
                            <button class="btn btn-danger"> <i class="fa-solid fa-xmark"></i></button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Nho mẫu đơn</td>
                    <td class="text-center">30</td>
                    <td>12/11/2023</td>
                    <td>17/11/2023</td>
                    <td class="p-0 pe-1">
                        <div class="d-flex justify-content-end">
                            <router-link :to="{ name: 'product-detail', params: { idproduct: '123456789' } }">
                                <button class="btn btn-secondary"><i class="fa-solid fa-info"></i></button>
                            </router-link>
                            <router-link :to="{ name: 'product-update', params: { idproduct: '123456789' } }">
                                <button class="btn btn-primary mx-1"><i class="fa-solid fa-pen"></i></button>
                            </router-link>
                            <button class="btn btn-danger" @click="onDelete"> <i class="fa-solid fa-xmark"></i></button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import SearchComponent from '@/components/searchComponent.vue';

export default {
    name: 'ProductList',
    components: {
        SearchComponent
    },


    methods: {
        search(data) {
            console.log(data);
        },

        onDelete() {
            alert('Bạn chắc chắn muốn xóa sản phẩm?');
        }
    }
}
</script>
<style scoped></style>