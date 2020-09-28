import { Injectable } from '@angular/core';
import { Registry } from '../models/registry';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  history: Registry[] = [];

  constructor(private nativeStorage: NativeStorage) {
    this.getHistory();
  }

  saveRegistry(format: string, text: string) {
    const registry = new Registry(format, text);
    this.history.unshift(registry);
    this.nativeStorage.setItem("history", this.history);
  }
  async getHistory() {
    this.history = (await this.nativeStorage.getItem('history')) || [];    
  }
}
