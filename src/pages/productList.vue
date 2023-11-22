<template>
    <div class="p-3">
        <h4 class="text-secondary fw-bold">Danh sách sản phẩm__:</h4>
        <search-component @submit="search($event)" v-model="searchText">

        </search-component>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col" style="width: 150px;">ID</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Hình ảnh</th>
                    <th scope="col" class="text-center">Số lượng (Kg)</th>
                    <th scope="col">Giá bán (VND)</th>
                    <th scope="col">HSD (tháng)</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody v-for="(product, index) in searchProduct" :key="index">
                <tr>
                    <CardProductList :product="product" @onDelete="onDelete($event)" />
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

    setup() {
        function checkIndexProduct(idProduct, listProduct) {
            let index = -1;
            for (let i = 0; i < listProduct.length; i++) {
                if (idProduct === listProduct[i]._id) {
                    index = i;
                }
            }
            return index;
        }

        return {
            checkIndexProduct,
        }
    },

    data() {
        return {
            listProduct: {},
            searchText: '',
        };
    },

    computed: {
        productString() {
            return this.listProduct.map((product) => {
                const { name, origin } = product;
                return [name, origin].join("");
            });
        },
        searchProduct() {
            if (!this.searchText) {
                return this.listProduct
            }
            return this.listProduct.filter((_product, index) => {
                return this.productString[index].includes(this.searchText);
            });
        }
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

        async onDelete(idProduct) {
            if (idProduct !== '') {
                if (confirm('Bạn chắc chắn muốn xóa sản phẩm?')) {
                    try {
                        await productService.deleteProduct(idProduct).then((result) => {
                            if (result.statusCode == 200) {
                                alert('Đã xóa sản phẩm!');
                                this.listProduct.splice(this.checkIndexProduct(idProduct, this.listProduct), 1);
                            }
                        });
                    } catch (error) {
                        console.log(error);
                    }
                }
            }
        }
    }
}
</script>
<style scoped></style>