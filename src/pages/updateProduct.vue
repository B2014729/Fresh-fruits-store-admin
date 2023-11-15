<template>
    <div class="p-3">
        <h4 class="text-secondary fw-bold">Cập nhật sản phẩm__:</h4>
        <div class="d-flex justify-content-center">
            <div class="w-75 border rounded-3 shadow p-3 bg-white my-3">
                <form class="row">
                    <div class="col-md-4 col-12">
                        <img src="https://nebula.wsimg.com/d7b296094ee8cdd374d5a0f38d252edf?AccessKeyId=CDBF849EA216B819FEB0&disposition=0&alloworigin=1"
                            alt="Anh san pham" class="img-fluid mb-3">
                        <input type="file">
                    </div>
                    <div class="col-md-8 col-12">
                        <h5>Thông tin sản phẩm:</h5>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                        </div>

                        <button type="submit" class="btn btn-success float-end">Cập nhật</button>

                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        idproduct: {
            type: String,
            required: true,
        }
    }
}
</script>
<style scoped></style>