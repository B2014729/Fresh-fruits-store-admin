import createApiClient from './api.service';

class ConsumerService {
    constructor(baseUrl = "http://localhost:8081/fresh-fruits-api") {
        this.api = createApiClient(baseUrl);
    }

    async getInfo(idConsumer) {
        return (await this.api.get(`/consumer-search/${idConsumer}`)).data;
    }

    async getListConsumer() {
        return (await this.api.get('/consumer-list')).data;
    }
    async deleteConsumer(idConsumer) {
        return (await this.api.delete(`/consumer/${idConsumer}`)).data;
    }
}

export default new ConsumerService();