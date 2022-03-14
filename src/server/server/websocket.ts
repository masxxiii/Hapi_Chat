import { Plugin, Server, } from '@hapi/hapi';
import * as Nes from '@hapi/nes';

export const subscriptions = {
    notification: '/notification',
};

type WebsocketOptions = Record<string, any>;

export const Websocket: Plugin<WebsocketOptions> = {
    name: 'websocket',
    register: async (server: Server, options: WebsocketOptions) => {
        await server.register({
            plugin: Nes,
            options: {
                ...options,
            },
        });
        for (const path of Object.values(subscriptions)) {
            await server.subscription(path);
        }

        server.method('send', (path: string, data: any) => {
            server.publish(path, data);
        });
    },
