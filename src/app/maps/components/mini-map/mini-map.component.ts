import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, Marker } from 'mapbox-gl'; // Se llama este paquete preinstalado por npm para el manejo de mapas

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css',
})
export class MiniMapComponent implements AfterViewInit{
  
  @Input() lngLat?: [number, number];
  @ViewChild('map') divMap?: ElementRef;

  public map?:Map;
  
  ngAfterViewInit(): void {
    
    if( !this.divMap?.nativeElement ) throw 'Map Div not found';
    if( !this.lngLat ) throw "LngLat can't be null";

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 15, // starting zoom
      interactive: false,
    });

    new Marker()
      .setLngLat( this.lngLat ) // Se establecen las coordenadas
      .addTo( this.map ); // Se añade al mapa actual

  }


}
