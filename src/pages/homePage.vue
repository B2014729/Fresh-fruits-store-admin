<template>
    <div class="p-3">
        <h4 class="text-secondary fw-bold">Thống kê doanh thu__:</h4>
        <div class="row">
            <div class="col-xl-3 col-sm-6 col-12">
                <div class="card">
                    <div class="card-content">
                        <div class="card-body">
                            <div class="media d-flex justify-content-between">
                                <div class="align-self-center">
                                    <i class="fa-solid fa-chart-simple fs-1 text-success"></i>
                                </div>
                                <div class="media-body text-right">
                                    <h4>1,345,909 VND</h4>
                                    <span>Doanh Thu</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12">
                <div class="card">
                    <div class="card-content">
                        <div class="card-body">
                            <div class="media d-flex justify-content-between ">
                                <div class="align-self-center">
                                    <i class="fa-brands fa-first-order fs-1 text-warning"></i>
                                </div>
                                <div class="media-body float-right">
                                    <h3>156</h3>
                                    <span>Đơn hàng</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12">
                <div class="card">
                    <div class="card-content">
                        <div class="card-body">
                            <div class="media d-flex justify-content-between">
                                <div class="align-self-center">
                                    <i class="fa-solid fa-chart-line fs-1 text-success"></i>
                                </div>
                                <div class="media-body text-right">
                                    <h3>64.89 %</h3>
                                    <span>Bounce Rate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12">
                <div class="card">
                    <div class="card-content">
                        <div class="card-body">
                            <div class="media d-flex justify-content-between">
                                <div class="align-self-center">
                                    <i class="fa-solid fa-users fs-1 text-primary"></i>
                                </div>
                                <div class="media-body">
                                    <h3>423</h3>
                                    <span>Khách hàng</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <chart-component description='Biểu đồ thống kê doanh thu theo tháng.' :value="[
                { x: '1', y: 1200000 },
                { x: '2', y: 5572390 },
                { x: '3', y: 1200789 },
                { x: '4', y: 6390000 },
                { x: '5', y: 7383000 },
                { x: '6', y: 4390000 },
                { x: '7', y: 1250000 },
                { x: '8', y: 7903890 },
                { x: '9', y: 8700000 },
                { x: '10', y: 6009009 },
                { x: '11', y: 7890899 },
                { x: '12', y: 2589000 },
            ]
                ">
            </chart-component>
        </div>
    </div>
</template>
<script>
import ChartComponent from '@/components/chartComponent.vue';
export default {
    name: 'HomePage',
    components: {
        ChartComponent,
    }
}
</script>
<style scoped></style>