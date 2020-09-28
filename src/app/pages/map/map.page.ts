import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  lat: number;
  lng: number;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    let geo: any = this.router.snapshot.paramMap.get('geo');
    geo = geo.substr(4);
    geo = geo.split(',');
    this.lat = geo[0];
    this.lng = geo[1];
    console.log(this.lat, this.lng);
  }

}
