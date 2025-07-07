/**
 * MultiBaas error response.
 *
 * Example:
 * {
 *   status: 404,
 *   message: "Blockchain Not Found"
 * }
 */
export interface ErrorResponse {
  status: number;
  message: string;
}

/**
 * Local interface for Axios error structure to avoid direct dependency on AxiosError type
 */
interface AxiosErrorLike {
  code?: string;
  message: string;
  stack?: string;
  response?: {
    data: ErrorResponse;
  };
}

export class APIError<T = AxiosErrorLike> extends Error {
  status: number | undefined;
  code: string | undefined;
  cause: T;

  constructor(originalError: T & AxiosErrorLike) {
    const errorData = originalError.response?.data;
    const message = errorData?.message || originalError.message || 'Unknown error';
    const status = errorData?.status;

    super(message);
    this.name = 'APIError';
    this.stack = originalError.stack;

    this.status = status;
    this.code = originalError.code;
    this.cause = originalError;
  }
}
