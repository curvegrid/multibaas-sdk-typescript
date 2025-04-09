import { isAxiosError } from "axios";

export default class APIError extends Error {
  status: number | undefined;

  code: string | undefined;

  cause: unknown;

  constructor(originalError: unknown) {
    let message = "An unknown error occurred";
    let status;
    let code;
    let stack;

    if (isAxiosError(originalError)) {
      message = originalError.response?.data.message || originalError.message;
      status = originalError.response?.status;
      code = originalError.code;
      stack = originalError.stack;
    } else if (originalError instanceof Error) {
      message = originalError.message;
    }

    super(message);
    this.name = "APIError";
    this.stack = stack;
    this.status = status;
    this.code = code;
    this.cause = originalError;
  }
}
