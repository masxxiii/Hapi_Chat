import * as Qs from 'qs';
import { Util, } from 'hapi';
import { ServerOptions, } from '@hapi/hapi';
import config from '../config/config';
import Dictionary = Util.Dictionary;
import { handleValidationError, } from '../utils';


export const options: ServerOptions = {
    port: config.server.port,
    host: config.server.host,
    query: {
        parser: (query: Dictionary<string>) => Qs.parse(query),
    },

};
