/// <reference types="react-scripts" />

declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: "development" | "production" | "test";
        readonly PUBLIC_URL: string;
        readonly REACT_APP_ENVIRONMENT: string;
        readonly REACT_APP_VERSION: string;
        readonly REACT_APP_LANGUAGE: string;
    }
}
