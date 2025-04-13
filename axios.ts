import { AxiosError, isAxiosError } from 'axios';

/**
 * MultiBaas error response.
 *
 * Example:
 * {
 *   status: 404,
 *   message: "Blockchain Not Found"
 * }
 */
interface ErrorResponse {
  status: number;
  message: string;
}

export class APIError extends Error {
  status: number | undefined;
  code: string | undefined;
  cause: AxiosError;

  constructor(originalError: AxiosError<ErrorResponse>) {
    const { status, message } = originalError.response.data;
    super(message);
    this.name = 'APIError';
    this.stack = originalError.stack;

    this.status = status;
    this.code = originalError.code;
    this.cause = originalError;
  }
}

export function errorInterceptor(error: unknown) {
  if (isAxiosError<ErrorResponse>(error)) {
    return Promise.reject(new APIError(error));
  }
  return Promise.reject(error);
}
