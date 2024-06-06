import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
  templateUrl: './zomm-range-page.component.html',
  styleUrl: './zomm-range-page.component.css',
})
export class ZommRangePageComponent implements AfterViewInit{

    // Permite tomar referencias del html
    @ViewChild('map') divMap?: ElementRef; 

    ngAfterViewInit(): void {
  
      if ( !this.divMap ) throw 'El elemento HTML no fue encontrado';
  
      const map = new Map({
        container: this.divMap.nativeElement, // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9, // starting zoom
      });
    }

}
