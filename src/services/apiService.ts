import apiClient from "./apiClient";

class apiService {
    endpoint;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }
    getAll(){
        const controller = new AbortController();
        const request = apiClient.get(this.endpoint, { signal: controller.signal });
        
        return { request, cancel: () => controller.abort() };
    }
}

export default apiService;
