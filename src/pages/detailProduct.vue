<template>
    <div class="p-3">
        <h4 class="text-secondary fw-bold">Chi tiết sản phẩm__:</h4>
        <div class="d-flex justify-content-center">
            <div class="w-75 h-50 border rounded-3 shadow mt-3 pt-3 row ">
                <div class="col-md-5 col-12 mb-3">
                    <img :src=product.image alt="" class="img-fluid">
                </div>
                <div class="col-md-7 col-12 ">
                    <div>
                        <h4 class="fw-bold text-success">{{ product.name }}</h4>
                        <ul>
                            <li><span class="fw-bold">Hạn sử dụng: </span>{{ product.hsd }}</li>
                            <li><span class="fw-bold">Bảo quản: </span>{{ product.preserve }}</li>
                            <li><span class="fw-bold">Quy cách: </span>{{ product.specifications }}kg/1 gói</li>
                            <li><span class="fw-bold">Mô tả: </span>{{ product.description }}</li>
                        </ul>
                        <router-link :to="{ name: 'product-update', params: { idproduct: '123456789' } }">
                            <button class="btn btn-secondary float-end m-3"> Cập nhật</button>
                        </router-link>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import productService from '@/services/product.service';
export default {
    nane: 'DetailProduct',

    props: {
        idproduct: {
            type: String,
            required: true,
        }
    },

    data() {
        return {
            product: {}
        }
    },

    async created() {
        await productService.getProduct(this.idproduct).then((result) => {
            this.product = result.data;
        })
    }
}
</script>
<style scoped></style>