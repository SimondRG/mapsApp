import { Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl'; // Se llama este paquete preinstalado por npm para el manejo de mapas

@Component({
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css',
  host: { 'class': 'maps-page-markers' },
})
export class MarkersPageComponent {

  @ViewChild('map') divMap?: ElementRef; 

  public map?:Map;
  public currentlngLat: LngLat = new LngLat( -74.13363563983047, 4.64274853854198  );

  ngAfterViewInit(): void {

    if ( !this.divMap ) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentlngLat, // starting position [lng, lat]
      zoom: 12, // starting zoom
    });

  }

  createMarker(){
    if( !this.map ) return;
    // Crea colores aleatorios
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lgnLat = this.map.getCenter(); // Obtiene las coordenadas centrales del mapa actual

    this.addMarker( lgnLat, color );
  }

  // Función para crear marcadores en el mapa
  addMarker( lngLat: LngLat, color: string ): void{
    if( !this.map ) return;

    const marker = new Marker({
      color: color,
      draggable: true,
    })
      .setLngLat( lngLat ) // Se establecen las coordenadas
      .addTo( this.map ); // Se agrega el marcador al mapa actual

  }

}
