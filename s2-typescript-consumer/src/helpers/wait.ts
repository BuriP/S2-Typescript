export function wait(seconds: number): Promise<void> {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, seconds * 1000); // Convert seconds to milliseconds
    });
}