import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  lastLog!: string;

  constructor() {}

  log(msg: string) {
    console.log(msg);
    console.log(this.lastLog);
    this.lastLog = msg;
  }
}
