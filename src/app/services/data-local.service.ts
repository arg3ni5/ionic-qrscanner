import { Injectable } from '@angular/core';
import { Registry } from '../models/registry';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  history: Registry[] = [];

  constructor() { }

  saveRegistry(format: string, text: string) {
    const registry = new Registry(format, text);
    this.history.unshift(registry);
    console.log(this.history);
  }
}
