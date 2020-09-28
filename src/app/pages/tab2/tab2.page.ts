import { Component } from '@angular/core';
import { Registry } from 'src/app/models/registry';
import { DataLocalService } from './../../services/data-local.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public dataService: DataLocalService) { }
  sendEmail() {
    this.dataService.clearHistory();
  }
  openRegistry(registry: Registry) {
    this.dataService.openRegistry(registry);
  }
}
