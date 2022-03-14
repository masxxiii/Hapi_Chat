import { Boom, } from '@hapi/boom';
import { ERRORS, } from '../errors/codes';

/**
 * Error function.
 *
 * @remarks
 * Used in server handlers to define our error data.
 *
 * @param code - The https error code.
 * @param msg - The https error message.
 * @param data - The error object
 *
 * @returns Boom
 */
export function error(code: number, msg: string, data: object): Boom {
    return new Boom(msg, {
        data: {
            code,
            data,
            api: true,
        },
        statusCode: Math.floor(code / 1000),
    });
}

/**
 * Handles validation error.
 *
 * @remarks
 * A failAction value which determines how to handle failed validations.
 *
 * @returns Promise<Boom>
 */
export async function handleValidationError(r: any, h: any, err: any): Promise<Boom> {
    if (err.isJoi && Array.isArray(err.details) && err.details.length > 0) {
        const invalidItem = err.details[0];
        return error(ERRORS.BAD_REQUEST, invalidItem.message, invalidItem.details);
    }

    return error(ERRORS.BAD_REQUEST, err, {});
}
