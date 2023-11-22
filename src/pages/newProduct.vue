<template>
    <div class="p-3">
        <h4 class="text-secondary fw-bold">Thêm mới sản phẩm__:</h4>
        <div class="d-flex justify-content-center">
            <div class="w-75 border rounded-3 shadow p-3 bg-white my-3">
                <form class="row" @submit.prevent="submit">
                    <h5 class="text-center fw-bold">Thông tin sản phẩm:</h5>
                    <div class="col-md-6 col-12">
                        <div class="mb-3">
                            <label for="name" class="form-label fst-italic">* Tên sản phẩm:</label>
                            <input type="text" class="form-control" v-model="data.name" id="name">
                        </div>

                        <div class="mb-3">
                            <label for="origin" class="form-label fst-italic">* Nguồn gốc:</label>
                            <input type="text" class="form-control" v-model="data.origin" id="origin">
                        </div>

                        <div>
                            <label for="type" class="form-label fst-italic">* Loại sản phẩm:</label>
                            <select class="form-select mb-3" aria-label="Default select example" v-model="data.type"
                                id="type">
                                <option value="mn">Trái cây miền Nam</option>
                                <option value="mb">Trái cây miền Bắc</option>
                                <option value="nn">Trái cây nhập khẩu</option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <label for="hsd" class="form-label fst-italic">* Hạn sử dụng (tháng):</label>
                            <input type="number" class="form-control" v-model="data.hsd" id="hsd">
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label fst-italic">* Mô tả:</label>
                            <textarea type="text" class="form-control" v-model="data.description" id="description"
                                rows="5"></textarea>
                        </div>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="mb-3">
                            <label for="preserve" class="form-label fst-italic">* Bảo quản:</label>
                            <input type="text" class="form-control" v-model="data.preserve" id="preserve">
                        </div>
                        <div class="mb-3">
                            <label for="specifications" class="form-label fst-italic">* Quy cách (kg/1 gói):</label>
                            <input type="float" class="form-control" v-model="data.specifications" id="specifications">
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label fst-italic">* Giá bán (vnd):</label>
                            <input type="number" class="form-control" v-model="data.price" id="price">
                        </div>
                        <div class="mb-3">
                            <label for="quantity" class="form-label fst-italic">* Số lượng trong kho:</label>
                            <input type="number" class="form-control" v-model="data.quantity" id="quantity">
                        </div>

                        <div class="mb-3">
                            <label for="image" class="form-label fst-italic">* Link ảnh sản phẩm:</label>
                            <input type="text" class="form-control" v-model="data.image" id="image">
                        </div>

                        <div class="mb-3">
                            <label for="outstanding" class="form-label fst-italic">* Sản phẩm nổi bật:</label>
                            <input type="checkbox" style="height: 15px; width: 30px;" v-model="data.outstanding"
                                id="outstanding" value="false">
                        </div>

                        <!-- <div class="w-50">
                            <img src="#" alt="Anh san pham">
                            <input type="file">
                        </div> -->

                        <p v-if="error.notEnoughData" class="text-warning" style="font-size: 13px;">
                            <i class="fa-solid fa-triangle-exclamation"></i> Vui lòng cung cấp đủ thông tin sản phẩm!
                        </p>
                        <button type="submit" class="btn btn-success float-end">Thêm sản phẩm</button>

                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import productService from '@/services/product.service';

export default {
    name: 'NewProduct',

    data() {
        return {
            data: {},
            error: {},
        };
    },
    methods: {
        async submit() {
            if (!this.data.name | !this.data.origin || !this.data.type || !this.data.image || !this.data.price ||
                !this.data.specifications || !this.data.description || !this.data.preserve || !this.data.hsd || !this.data.quantity) {
                this.error.notEnoughData = true;
            } else {
                this.error.notEnoughData = false;
            }

            if (!this.data.outstanding) {
                this.data.outstanding = false;
            }


            if (!this.error.notEnoughData) {
                try {
                    await productService.createProduct(this.data).then((result) => {
                        console.log(result);
                        if (result.statusCode == 200) {
                            alert('Đã thêm sản phẩm vào hệ thống!');
                            this.$router.push({ name: 'product-list' });
                        }
                    })
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
}
</script>
<style scoped></style>