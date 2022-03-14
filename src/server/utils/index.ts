
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
