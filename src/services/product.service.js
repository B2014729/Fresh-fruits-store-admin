import createApiClient from './api.service.js';

class ProductService {
    constructor(baseUrl = "http://localhost:8081/fresh-fruits-api") {
        this.api = createApiClient(baseUrl);
    }

    async getProductList() {
        return (await this.api.get('/product-list')).data;
    }

    async getIsOutstanding() {
        return (await this.api.get('/product-outstanding')).data;
    }

    async getProduct(id) {
        return (await this.api.get(`/product/${id}`)).data;
    }

    async getProductWithType(type) {
        return (await this.api.get(`/product-type/${type}`,)).data;
    }

    async createProduct(data) {
        return (await this.api.post('/product-create', { data })).data;
    }

    async deleteProduct(idproduct) {
        return (await this.api.delete(`/product/${idproduct}`)).data;
    }

    async updateProduct(data, idproduct) {
        return (await this.api.put(`/product/${idproduct}`, { data })).data;
    }
}

export default new ProductService();