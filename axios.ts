import axios, { isAxiosError } from 'axios';

export class APIError extends Error {
  status: number | undefined;
  code: string | undefined;
  cause: unknown;

  constructor(originalError: unknown) {
    let message = 'An unknown error occurred';
    let status: number | undefined;
    let code: string | undefined;
    let stack: string | undefined;

    if (isAxiosError(originalError)) {
      message = originalError.response?.data.message || originalError.message;
      status = originalError.response?.status;
      code = originalError.code;
      stack = originalError.stack;
    } else if (originalError instanceof Error) {
      message = originalError.message;
    }

    super(message);
    this.name = 'APIError';
    this.stack = stack;
    this.status = status;
    this.code = code;
    this.cause = originalError;
  }
}

export const axiosInstance = axios.create({});

// Wrap all SDK calls to reject with an APIError
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(new APIError(error)) 
);
