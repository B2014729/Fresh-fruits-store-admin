import createApiClient from './api.service.js';

class AuthService {
    constructor(baseUrl = "http://localhost:8081/fresh-fruits-api") {
        this.api = createApiClient(baseUrl);
    }

    async login(email, password) {
        return (await this.api.post('/staff-login', { email: email, password: password }));
    }

    async getInfo(token) {
        return (await this.api.get(`/staff/${token}`)).data;
    }
}

export default new AuthService();