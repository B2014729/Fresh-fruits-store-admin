<template>
    <div class="p-3">
        <h4 class="text-secondary fw-bold">Chi tiết đơn hàng__:</h4>
        <div class="d-flex justify-content-center">
            <div class="w-50 border shadow p-3">
                <h5 class="text-center fst-italic fw-bold pb-3">{{ order._id }}</h5>
                <div>
                    <ul>
                        <li><span class="fw-bold">Mã đơn hàng: </span> {{ order._id }}</li>
                        <li><span class="fw-bold">Khách hàng: </span> {{ order.consumer }}</li>
                        <li><span class="fw-bold">Số điện thoại: </span> {{ order.phone }}</li>
                        <li><span class="fw-bold">Địa chỉ: </span> {{ order.deliveryAddress }}</li>
                        <li><span class="fw-bold">Ngày đặt hàng: </span> {{ order.orderDate }}</li>
                        <li><span class="fw-bold">Ngày giao hàng: </span> {{ order.deliveryDate }}</li>
                        <li><span class="fw-bold">Trạng thái: </span> {{ order.status }}</li>
                        <li><span class="fw-bold">Sản phẩm: </span>
                            <ul v-for="(product, index) in order.products" :key="index">
                                <li>Masp: {{ product.idProduct }}, {{ product.name }}, sl: {{ product.quantity }},
                                    tổng: {{ formatNumber(product.quantity * product.price) }}đ
                                </li>
                            </ul>
                        </li>
                        <li><span class="fw-bold">Vận chuyển: </span>49,000 VND </li>
                        <li><span class="fw-bold">Thanh toán: </span> {{ formatNumber(order.payment + 49000) }} VND</li>
                    </ul>
                </div>
                <router-link :to="{ name: 'order' }">
                    <button class="btn btn-secondary">
                        Quay lại
                    </button>
                </router-link>
                <button class="btn btn-success float-end" @click="approve">Duyệt đơn hàng</button>

            </div>
        </div>
    </div>
</template>
<script>
import consumerService from '@/services/consumer.service';
import orderService from '@/services/order.service';
export default {
    name: 'DetailOrder',

    setup() {
        function formatNumber(number) {
            return (new Intl.NumberFormat().format(number));
        }

        return {
            formatNumber
        }
    },

    props: {
        idOrder: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            order: {},
        };
    },
    methods: {
        async approve() {
            await orderService.approveOrder(this.idOrder).then((result) => {
                if (result.statusCode == 200) {
                    this.order.status = 'Đơn hàng đang được chuẩn bị.'
                    alert('Đã duyệt đơn hàng!');
                }
            })
        }
    },
    async created() {
        try {
            await orderService.getOrder(this.idOrder).then((result) => {
                this.order = result.data;
            });
            await orderService.getOrderDetail(this.order._id).then((result) => {
                this.order.products = result.data.products;
                this.order.payment = result.data.payment;
            });
            await consumerService.getInfo(this.order.idConsumer).then((result) => {
                this.order.consumer = result.data.fullname;
                this.order.phone = result.data.phone;
            });
        } catch (error) {
            console.log(error)
        }
    }

}
</script>
<style scoped></style>