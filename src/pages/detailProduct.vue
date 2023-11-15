<template>
    <div class="p-3">
        <h4 class="text-secondary fw-bold">Chi tiết sản phẩm__:</h4>
        <div class="d-flex justify-content-center">
            <div class="w-75 h-50 border rounded-3 shadow mt-3 pt-3 row ">
                <div class="col-md-5 col-12">
                    <img src="https://cdn.tgdd.vn/Files/2021/08/24/1377401/nho-mau-don-la-gi-cac-loai-nho-mau-don-cach-chon-mua-va-bao-quan-202108241107504721.jpg"
                        alt="" class="img-fluid">
                </div>
                <div class="col-md-7 col-12 ">
                    <div>
                        <h4 class="fw-bold text-success">Nho mẫu đơn</h4>
                        <ul>
                            <li><span class="fw-bold">Ngày nhập: </span>12/11/2023</li>
                            <li><span class="fw-bold">Hạn sử dụng: </span>17/11/2023</li>
                            <li><span class="fw-bold">Bảo quản: </span>Để ngăn mát tủ lạnh</li>
                            <li><span class="fw-bold">Quy cách: </span>0.5kg/1 gói</li>
                            <li><span class="fw-bold">Mô tả: </span>Giống nho này có nguồn gốc từ Nhật Bản. Là giống nho có
                                những đặc trưng như trái to, vỏ mịn, phần thịt nhiều và có độ giòn nhiều. Shine Muscat cũng
                                có
                                hàm lượng đường và vị ngọt không khác gì với giống Muscat of Alexandria. Thường được thu
                                hoạch
                                vào cuối tháng 5 đến tháng 10. Giá thành từ 1.500.000 - 2.500.000/ 1 chùm.</li>
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
</script>
<style scoped></style>