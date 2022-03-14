import { Plugin, Server, } from '@hapi/hapi';
import * as Nes from '@hapi/nes';

export const subscriptions = {
    notification: '/notification',
};

type WebsocketOptions = Record<string, any>
