<template>
    <div class="p-3">
        <h4 class="text-secondary fw-bold">Danh sách khách hàng__:</h4>
        <search-component @submit="search($event)">

        </search-component>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col" style="width: 150px;">Mã KH</th>
                    <th scope="col">Tên khách hàng</th>
                    <th scope="col" class="text-center">Số điện thoại</th>
                    <th scope="col" class="text-center">Số đơn hàng</th>
                    <th scope="col">Địa chỉ</th>
                    <th scope="col"></th>

                </tr>
            </thead>
            <tbody v-for="(consumer, index) in listConsumer" :key="index">

                <tr>
                    <th scope="row" class="_id">{{ consumer._id }}</th>

                    <td>
                        <router-link :to="{ name: 'product-list' }" style="text-decoration: none; color: black;">
                            {{ consumer.fullname }}
                        </router-link>
                    </td>

                    <td class="text-center">{{ consumer.phone }}</td>
                    <td class="text-center">3</td>
                    <td>{{ consumer.address }}</td>
                    <td class="p-0 pe-1">
                        <div class="d-flex justify-content-end">
                            <router-link :to="{ name: 'consumer-list' }">
                                <button class="btn btn-secondary"><i class="fa-solid fa-info"></i></button>
                            </router-link>
                            <button class="btn btn-danger ms-1" @click="onDelete(consumer._id)"> <i
                                    class="fa-solid fa-xmark"></i></button>
                        </div>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
</template>

<script>
import SearchComponent from '@/components/searchComponent.vue';
import consumerService from '@/services/consumer.service';

export default {
    name: 'ConsumerList',
    components: {
        SearchComponent
    },

    data() {
        return {
            listConsumer: [],
        }
    },
    methods: {
        search(data) {
            console.log(data);
        },

        async onDelete(idConsumer) {
            if (confirm('Bạn chắc chắn muốn xóa khách hàng?')) {
                try {
                    let statusDelete = false;
                    await consumerService.deleteConsumer(idConsumer).then((result) => {
                        if (result.statusCode == 200) {
                            statusDelete = true;
                            alert('Đã xóa khách hàng khỏi hệ thống!');
                        }
                    });

                    if (statusDelete) {
                        await consumerService.getListConsumer().then((result) => {
                            this.listConsumer = result.data;
                        })
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
    },

    async created() {
        await consumerService.getListConsumer().then((result) => {
            this.listConsumer = result.data;
        })
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