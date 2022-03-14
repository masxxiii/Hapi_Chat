import * as Pino from 'hapi-pino';
import * as Inert from '@hapi/inert';
import * as Vision from '@hapi/vision';
import * as HapiSwagger from 'hapi-swagger';
import { ServerRegisterPluginObject, } from '@hapi/hapi';
import * as HapiBearer from 'hapi-auth-bearer-token';
import SwaggerOptions from '../config/swagger';
import { pinoConfig, } from '../config/pino';


export const plugins: Array<ServerRegisterPluginObject<any>> = [
    {
        plugin: Inert,
    },
    {
        plugin: HapiBearer,
    },
    {
        plugin: Vision,
    },
    {
        plugin: HapiSwagger,
        options: SwaggerOptions,
    },
    {
        plugin: Pino,
        options: pinoConfig(),
    },
    {
        plugin: Websocket,
        options: {},
        routes: { prefix: '/ws', },
    }
];
