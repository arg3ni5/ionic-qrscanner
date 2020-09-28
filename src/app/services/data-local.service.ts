import { NavController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Registry } from '../models/registry';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  history: Registry[] = [];

  constructor(private nativeStorage: NativeStorage, private navCtrl: NavController, private inAppBrowser: InAppBrowser) {
    this.getHistory();
  }

  
  async getHistory() {
    this.history = (await this.nativeStorage.getItem('history')) || [];
  }

  async saveRegistry(format: string, text: string) {
    await this.getHistory();

    const registry = new Registry(format, text);
    this.history.unshift(registry);
    this.nativeStorage.setItem("history", this.history);
    this.openRegistry(registry);
  }

  async clearHistory() {
    this.nativeStorage.setItem("history", []);
    await this.getHistory();
  }

  openRegistry(registry: Registry) {
    this.navCtrl.navigateForward('/tabs/tab2');
    switch (registry.type) {
      case 'http':
        this.inAppBrowser.create(registry.text, '_system');
        break;
    }
  }
}
