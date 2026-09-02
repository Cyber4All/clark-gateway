import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const PLAYLIST_ROUTES: ProxyRoute[] = [
    {
        method: HTTPMethod.POST,
        path: "/playlists",
        auth: true,
    },
    {
        method: HTTPMethod.GET,
        path: "/playlists",
    },
    {
        method: HTTPMethod.PATCH,
        path: "/playlists/:playlistId",
        auth: true,
    },
    {
        method: HTTPMethod.DELETE,
        path: "/playlists/:playlistId",
        auth: true,
    },
];
