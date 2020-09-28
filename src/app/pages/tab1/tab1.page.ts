import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DataLocalService } from './../../services/data-local.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  opts = {
    allowSlidePrev: false,
    allowSlideNext: false
  }
  constructor(private barcodeScanner: BarcodeScanner, private dataService: DataLocalService) {
  }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);

      if (!barcodeData.cancelled) {
        this.dataService.saveRegistry(barcodeData.format, barcodeData.text);
      }
    }).catch(err => {
      console.log('Error', err);      
      this.dataService.saveRegistry("QRCode", "https://www.qrcode.es/es/generador-qr-code/");
    });
  }

  ionViewWillEnter() {
    this.scan();
  }
  ionViewDidEnter() {

  }
  ionViewDidLeave() {

  }
  ioionViewWillLeave() {

  }

}
