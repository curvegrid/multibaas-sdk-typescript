import { AxiosError, isAxiosError } from 'axios';

export class APIError extends Error {
  status: number | undefined;
  code: string | undefined;
  cause: AxiosError;

  constructor(originalError: AxiosError<{ message?: string }>) {
    const message = originalError.response?.data.message || originalError.message;

    super(message);
    this.name = 'APIError';
    this.stack = originalError.stack;

    this.status = originalError.response?.status;
    this.code = originalError.code;
    this.cause = originalError;
  }
}

export function errorInterceptor(error: unknown) {
  if (isAxiosError(error)) {
    return Promise.reject(new APIError(error));
  }
  return Promise.reject(error);
}
