<template>
    <div class="p-3">
        <h4 class="text-secondary fw-bold">Danh sách sản phẩm__:</h4>
        <search-component @submit="search($event)">

        </search-component>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Mã KH</th>
                    <th scope="col">Tên KH</th>
                    <th scope="col" class="text-center">Số điện thoại</th>
                    <th scope="col" class="text-center">Số đơn hàng</th>
                    <th scope="col">Địa chỉ</th>
                    <th scope="col"></th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Nho mẫu đơn</td>
                    <td class="text-center">0789567987</td>
                    <td class="text-center">3</td>
                    <td>124/11A, đường 3/2, phường Xuân Khánh, quận Ninh Kiều, Tp.Cần Thơ.</td>
                    <td class="p-0 pe-1">
                        <div class="d-flex justify-content-end">
                            <!-- <router-link :to="{ name: 'product-detail', params: { idproduct: '123456789' } }">
                                <button class="btn btn-secondary"><i class="fa-solid fa-info"></i></button>
                            </router-link>
                            <router-link :to="{ name: 'product-update', params: { idproduct: '123456789' } }">
                                <button class="btn btn-primary mx-1"><i class="fa-solid fa-pen"></i></button>
                            </router-link> -->
                            <button class="btn btn-danger" @click="onDelete"> <i class="fa-solid fa-xmark"></i></button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Nho mẫu đơn</td>
                    <td class="text-center">0789567987</td>
                    <td class="text-center">3</td>
                    <td>124/11A, đường 3/2, phường Xuân Khánh, quận Ninh Kiều, Tp.Cần Thơ.</td>
                    <td class="p-0 pe-1">
                        <div class="d-flex justify-content-end">
                            <!-- <router-link :to="{ name: 'product-detail', params: { idproduct: '123456789' } }">
                                <button class="btn btn-secondary"><i class="fa-solid fa-info"></i></button>
                            </router-link>
                            <router-link :to="{ name: 'product-update', params: { idproduct: '123456789' } }">
                                <button class="btn btn-primary mx-1"><i class="fa-solid fa-pen"></i></button>
                            </router-link> -->
                            <button class="btn btn-danger" @click="onDelete"> <i class="fa-solid fa-xmark"></i></button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Nho mẫu đơn</td>
                    <td class="text-center">0789567987</td>
                    <td class="text-center">3</td>
                    <td>124/11A, đường 3/2, phường Xuân Khánh, quận Ninh Kiều, Tp.Cần Thơ.</td>
                    <td class="p-0 pe-1">
                        <div class="d-flex justify-content-end">
                            <!-- <router-link :to="{ name: 'product-detail', params: { idproduct: '123456789' } }">
                                <button class="btn btn-secondary"><i class="fa-solid fa-info"></i></button>
                            </router-link>
                            <router-link :to="{ name: 'product-update', params: { idproduct: '123456789' } }">
                                <button class="btn btn-primary mx-1"><i class="fa-solid fa-pen"></i></button>
                            </router-link> -->
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
    name: 'ConsumerList',
    components: {
        SearchComponent
    },


    methods: {
        search(data) {
            console.log(data);
        },

        onDelete() {
            alert('Bạn chắc chắn muốn xóa khách hàng?');
        }
    }
}
</script>
<style scoped></style>