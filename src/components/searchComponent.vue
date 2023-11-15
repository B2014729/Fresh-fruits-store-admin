<template>
    <div class="float-end mb-3">
        <form @submit.prevent="submit" class="d-flex w-100">
            <input type="text" class="form-control rounded-0 rounded-start-2" placeholder="Search"
                aria-label="Recipient's username" aria-describedby="button-addon2" v-model="textSearch">
            <button class="btn btn-secondary border-1 rounded-0 rounded-end-2" type="submit" id="button-addon2"><i
                    class="fa-solid fa-magnifying-glass"></i></button>

        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            textSearch: '',
        };
    },

    methods: {
        submit() {
            this.$emit('submit', this.textSearch);
        }
    }
}
</script>
<style></style>