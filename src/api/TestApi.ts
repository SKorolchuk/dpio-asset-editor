import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export class TestApi {
    private endpoint: AxiosInstance;

    protected constructor(protected endpointConfig: AxiosRequestConfig) {
        this.endpoint = axios.create(endpointConfig);
    }
}
