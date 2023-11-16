<template>
    <th scope="row" class="_id" style="height: 85px;">{{ product._id }}</th>
    <td>{{ product.name }}</td>
    <td><img :src=product.image alt="" class="img-fluid" style="width: 80px; height: 60px;"></td>
    <td class="text-center">{{ product.quantity }}</td>
    <td>{{ product.price }}</td>
    <td>{{ product.hsd }}</td>
    <td class="p-0 pe-1">
        <div class="d-flex justify-content-end">
            <router-link :to="{ name: 'product-detail', params: { idproduct: product._id } }">
                <button class="btn btn-secondary"><i class="fa-solid fa-info"></i></button>
            </router-link>
            <router-link :to="{ name: 'product-update', params: { idproduct: product._id } }">
                <button class="btn btn-primary mx-1"><i class="fa-solid fa-pen"></i></button>
            </router-link>
            <button class="btn btn-danger" @click="onDelete"><i class="fa-solid fa-xmark"></i></button>
        </div>
    </td>
</template>
<script>
export default {
    name: 'CardProductList',
    props: {
        product: {
            type: Object,
            required: true
        }
    },

    methods: {
        onDelete() {
            console.log(this.product);
        }
    }
}
</script>

<style scoped>
._id {
    width: 150px;
    overflow: hidden;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
