<template>
    <div class="p-3">
        <h4 class="text-secondary fw-bold">Danh sách sản phẩm__:</h4>
        <search-component @submit="search($event)">

        </search-component>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col" style="width: 150px;">ID</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Hình ảnh</th>
                    <th scope="col" class="text-center">Số lượng (Kg)</th>
                    <th scope="col">Giá bán (VND)</th>
                    <th scope="col">HSD</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody v-for="(product, index) in listProduct" :key="index">
                <tr>
                    <CardProductList :product="product" />
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import productService from '@/services/product.service';
import SearchComponent from '@/components/searchComponent.vue';
import CardProductList from '@/components/cardProductList.vue';

export default {
    name: 'ProductList',
    components: {
        SearchComponent,
        CardProductList,
    },

    data() {
        return {
            listProduct: {},
        };
    },

    async created() {
        await productService.getProductList().then((result) => {
            this.listProduct = result.data;
        });
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