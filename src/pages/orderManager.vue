<template>
    <div class="p-3">
        <h4 class="text-secondary fw-bold">Danh sách đơn hàng__:</h4>
        <search-component @submit="search($event)">

        </search-component>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col" style="width: 150px;">Mã ĐH</th>
                    <th scope="col">Tên khách hàng</th>
                    <th scope="col" class="text-center">SDT</th>
                    <th scope="col" class="text-center" style="width: 350px;">Địa chỉ</th>
                    <th scope="col" class="text-center">Ngày đặt hàng</th>
                    <th scope="col" class="text-center">Trạng thái</th>
                    <th scope="col"></th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="(order, index) in listOrder" :key="index">
                    <th scope="row" class="_id">{{ order._id }}</th>
                    <td style="min-width: 150px;">{{ order.nameConsumer }} </td>
                    <td class="text-center"> {{ order.phone }} </td>
                    <td class="address">
                        {{ order.deliveryAddress }}
                    </td>
                    <td>{{ order.orderDate }}</td>
                    <td class="text-center">{{ order.status }}</td>
                    <td class="p-0 pe-1">
                        <div class="d-flex justify-content-end">
                            <router-link :to="{ name: 'order-detail', params: { idOrder: order._id } }">
                                <button class="btn btn-secondary me-1"><i class="fa-solid fa-info"></i></button>
                            </router-link>
                            <button class="btn btn-danger" @click="onDelete(order._id)"> <i
                                    class="fa-solid fa-xmark"></i></button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import orderService from '@/services/order.service';
import consumerService from '@/services/consumer.service';

import searchComponent from '@/components/searchComponent.vue';

export default {
    name: 'OrderManager',

    components: {
        searchComponent,
    },

    data() {
        return {
            listOrder: [],
        };
    },

    methods: {
        search(searchText) {
            console.log(searchText);
        },

        async onDelete(idOrder) {
            if (confirm('Bạn chắc muốn xóa đơn hàng này khỏi hệ thống!')) {
                try {
                    let statusDelete = false;
                    await orderService.deleteOrder(idOrder).then((result) => {
                        if (result.statusCode == 200) {
                            statusDelete = true;
                            alert('Đã xóa đơn hàng!');
                        }
                    })

                    //Cap nhat lai danh sach don hang
                    if (statusDelete) {
                        try {
                            await orderService.getOrderList().then((result) => {
                                this.listOrder = result.data;
                            });
                            for (let i = 0; i < this.listOrder.length; i++) {
                                await consumerService.getInfo(this.listOrder[i].idConsumer).then((result) => {
                                    this.listOrder[i].nameConsumer = result.data.fullname;
                                    this.listOrder[i].phone = result.data.phone;
                                })
                            }
                        } catch (error) {
                            console.log(error);
                        }
                    } else {
                        console.log('check');
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
    },

    async created() {
        try {
            await orderService.getOrderList().then((result) => {
                this.listOrder = result.data;
            });
            for (let i = 0; i < this.listOrder.length; i++) {
                await consumerService.getInfo(this.listOrder[i].idConsumer).then((result) => {
                    this.listOrder[i].nameConsumer = result.data.fullname;
                    this.listOrder[i].phone = result.data.phone;
                })
            }
        } catch (error) {
            console.log(error);
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

.address {
    width: 350px;
    overflow: hidden;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>