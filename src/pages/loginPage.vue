<template>
    <div class="container-100" style="height: 730px; background-color: rgb(180, 180, 180);">
        <div class="d-flex justify-content-center h-100">
            <div class="user_card">
                <div class="d-flex justify-content-center">
                    <div class="brand_logo_container">
                        <img src="https://ps.w.org/google-apps-login/assets/icon-256x256.png?rev=2834114" class="brand_logo"
                            alt="Logo">
                    </div>
                </div>
                <div class="d-flex justify-content-center form_container">
                    <form @submit.prevent="submit">
                        <div class="input-group">
                            <div class="input-group-append">
                                <span class="input-group-text"><i class="fas fa-user"></i></span>
                            </div>
                            <input type="email" v-model="data.email" class="form-control input_user" placeholder="E-mail">
                        </div>
                        <span v-if="error.emailEmpty" class="text-danger" style="font-size: 13px;">
                            <i class="fa-solid fa-triangle-exclamation"></i> Email không để trống!
                        </span>

                        <div class="input-group mt-3">
                            <div class="input-group-append">
                                <span class="input-group-text"><i class="fas fa-key"></i></span>
                            </div>
                            <input type="password" v-model="data.password" class="form-control input_pass"
                                placeholder="Password">
                        </div>
                        <span v-if="error.passwordEmpty" class="text-danger" style="font-size: 13px;">
                            <i class="fa-solid fa-triangle-exclamation"></i> Mật khẩu không để trống!
                        </span>

                        <div class="form-group">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customControlInline">
                                <label class="custom-control-label text-white ms-2" style="font-size:13px"
                                    for="customControlInline">
                                    Remember me</label>
                            </div>
                        </div>
                        <span v-if="error.loginFail" class="text-danger" style="font-size: 13px;">
                            <i class="fa-solid fa-triangle-exclamation"></i> Email hoặc mật khẩu không đúng!
                        </span>
                        <div class="d-flex justify-content-center mt-3 login_container">
                            <button type="submit" class="btn login_btn">Login</button>
                        </div>
                    </form>
                </div>

                <div class="mt-4">
                    <div class="d-flex justify-content-center links">
                        <a href="#">Forgot your password?</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import authService from '@/services/auth.service';
export default {
    name: 'LoginPage',
    data() {
        return {
            data: {},
            error: {},
        };
    },

    methods: {
        async submit() {
            if (!this.data.email) {
                this.error.emailEmpty = true;
            } else {
                this.error.emailEmpty = false;
            }

            if (!this.data.password) {
                this.error.passwordEmpty = true;
            } else {
                this.error.passwordEmpty = false;
            }

            if (!this.error.emailEmpty && !this.error.password) {
                try {
                    this.error.loginFail = false;
                    await authService.login(this.data.email, this.data.password).then((result) => {
                        if (result.data.statusCode == 201) {
                            this.$cookies.set('jwt', result.headers.user_token);
                            window.location.href = '/';
                        }
                    });
                } catch (error) {
                    console.log(error);
                    this.error.loginFail = true;
                }
            }
        }
    }

}
</script>
<style scoped>
.user_card {
    height: 400px;
    width: 350px;
    margin-top: auto;
    margin-bottom: auto;
    background: #555350;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;

}

.brand_logo_container {
    position: absolute;
    height: 170px;
    width: 170px;
    top: -75px;
    border-radius: 50%;
    background: #60a3bc;
    padding: 10px;
    text-align: center;
}

.brand_logo {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    border: 2px solid white;
}

.form_container {
    margin-top: 100px;
}

.login_btn {
    width: 100%;
    background: #c0392b !important;
    color: white !important;
}

.login_btn:focus {
    box-shadow: none !important;
    outline: 0px !important;
}

.login_container {
    padding: 0 2rem;
}

.input-group-text {
    background: #c0392b !important;
    color: white !important;
    border: 0 !important;
    border-radius: 0.25rem 0 0 0.25rem !important;
}

.input_user,
.input_pass:focus {
    box-shadow: none !important;
    outline: 0px !important;
}

.custom-checkbox .custom-control-input:checked~.custom-control-label::before {
    background-color: #c0392b !important;
}
</style>
