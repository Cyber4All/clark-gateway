import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const FILE_ROUTES: ProxyRoute[] = [
    /**
     * File Manager Routes
     */
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:learningObjectId/files/:fileId/download",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:learningObjectId/files/bundle",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:learningObjectId/pdf",
        auth: true,
    },

    /**
     * File Metadata Routes
     */
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:learningObjectId/materials/files",
        auth: true,
    },
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/:learningObjectId/materials/files",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:learningObjectId/materials/files/:fileId",
        auth: true,
    },
    {
        method: HTTPMethod.DELETE,
        path: "/learning-objects/:learningObjectId/materials/files/:fileId",
        auth: true,
    },
];
