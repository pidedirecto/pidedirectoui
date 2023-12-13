/**
 * @prettier
 *
 */

export function mockFailedApiResponse(): Promise<any> {
    return new Promise((resolve) =>
        resolve({
            ok: false,
        }),
    );
}
