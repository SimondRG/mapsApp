import { AfterViewInit, Component } from '@angular/core';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2ltb25yZyIsImEiOiJjbHgyZ3R0NDAwa2NyMmtxNmNnam00dGk1In0.gJw5BBCNeo3gvHJYW-KQig';

@Component({
  selector: 'app-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css',
})
export class FullScreenPageComponent implements AfterViewInit{


  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }

  

}
