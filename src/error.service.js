export class ErrorService {
    throwError(value) {
        console.error(value);
        throw new Error(value);
    }
}