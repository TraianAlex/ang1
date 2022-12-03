import { ErrorHandler } from '@angular/core';

export class ErrorHandlerService implements ErrorHandler {
  constructor() {}

  handleError(error: any): void {
    console.log('--ERROR--', error);
  }
}
