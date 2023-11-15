<template>
  <div class="container-fluid">
    <div v-if="authToken" class="row">
      <div class="col-md-2 col-12">
        <Logo></Logo>
        <hr>
        <NavComponent></NavComponent>
      </div>
      <div class="col-md-10 col-12">
        <HeaderComponent></HeaderComponent>
        <hr>
        <router-view style="min-height: 640px ;background-color: #e8e8e8cb;">

        </router-view>
      </div>
    </div>
    <div v-else>
      <LoginPage />
    </div>
  </div>
</template>

<script>
import LoginPage from '@/pages/loginPage.vue';
import Logo from '@/components/logoComponent.vue';
import HeaderComponent from '@/components/headerComponent.vue';
import NavComponent from '@/components/navComponent.vue';


export default {
  name: 'App',
  components: {
    Logo,
    HeaderComponent,
    NavComponent,
    LoginPage
  },
  data() {
    return {
      authToken: false,
    };
  },

  created() {
    this.authToken = false;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
