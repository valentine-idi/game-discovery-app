import apiClient from "./apiClient";

class apiService {
    endpoint;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }
    getAll<T>() {
        const controller = new AbortController();
        const request = apiClient.get<T>(this.endpoint, { signal: controller.signal });
        
        return { request, cancel: () => controller.abort() };
    }
}

export default apiService;
