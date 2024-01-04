import { HTTPMethod } from "./http-method.type";

export interface ProxyRoute {
    method: HTTPMethod;
    path: string;
    auth?: boolean;
    proxy?: {
        target?: string;
        changeOrigin?: boolean;
        secure?: boolean;
        pathRewrite: any;
    };
}
