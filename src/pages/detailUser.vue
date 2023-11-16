<template>
    <div class="p-3">
        <h4 class="text-secondary fw-bold">Thông tin cá nhân__:</h4>
        <div class="d-flex justify-content-center">
            <div class="w-50 border shadow p-3">
                <h5 class="text-center fst-italic fw-bold pb-3">{{ user.fullname }}</h5>
                <div>
                    <ul>
                        <li><span class="fw-bold">Mã nhân viên: </span> B2014729</li>
                        <li><span class="fw-bold">Họ và tên: </span> {{ user.fullname }}</li>
                        <li><span class="fw-bold">Ngày sinh: </span> {{ user.birthday }}</li>
                        <li><span class="fw-bold">Số điện thoại: </span> {{ user.phone }}</li>
                        <li><span class="fw-bold">E-mail: </span> {{ user.email }}</li>
                        <li><span class="fw-bold">Địa chỉ: </span> {{ user.address }}</li>
                        <li><span class="fw-bold">Chức vụ: </span> {{ user.position }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import authService from '@/services/auth.service';
export default {
    name: 'DetailUser',

    data() {
        return {
            user: {},
        };
    },

    async created() {
        try {
            await authService.getInfo(this.$cookies.get('jwt')).then((result) => {
                this.user = result.data[0];
            });
        } catch (error) {
            console.log(error)
        }
    }

}
</script>
<style scoped></style>