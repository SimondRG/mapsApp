import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl'; // Se llama este paquete preinstalado por npm para el manejo de mapas
import { MarkertAndColor, PlainMarket } from '../../interface/market.interface'


@Component({
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css',
  host: { 'class': 'maps-page-markers' },
})
export class MarkersPageComponent implements AfterViewInit {
  
  @ViewChild('map') divMap?: ElementRef; 
  
  public markers: MarkertAndColor[] = [];
  
  public map?:Map;
  public currentlngLat: LngLat = new LngLat( -74.13363563983047, 4.64274853854198  );
  
  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {

    if ( !this.divMap ) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentlngLat, // starting position [lng, lat]
      zoom: 12, // starting zoom
    });

    // Lee la información de las coordenadas y el color del market del localstorage
    this.readFromLocalStorage();

    // Forzar la detección de cambios, esto es opcional para no arrojas errores en consola
    this.cdr.detectChanges();
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
    
    this.markers.push({ color: color, marker: marker, });
    this.saveToLocalStorage();

  }

  deleteMarter( index: number ){
    // Elimina un marcador del mapa, basado en su indice
    this.markers[index].marker.remove();
    // Elimina el marcador del arreglo basado en su indice
    this.markers.splice( index, 1 );
  }

  // flyTo  - Método que sirve para moverse hacia el marcador señalado centrando la pantalla
  flyTo( marker: Marker ){
    this.map?.flyTo({ zoom: 14, center: marker.getLngLat() });
  }

  saveToLocalStorage(){
    // Función que retorna el color y las coordenadas como arreglo
    const plaiMarkers: PlainMarket[] = this.markers.map( ({ color, marker }) =>{
      return {
        color: color,
        lngLat: marker.getLngLat().toArray(),
      }
    });
    // Guarda la información de el color y las coordenadas en el local Storage
    localStorage.setItem('plainMarkers', JSON.stringify(plaiMarkers) );
  }
  
  readFromLocalStorage(){
    const plainMarkersString = localStorage.getItem('plainMarkers') ?? '[]';
    const plainMarkers: PlainMarket[] = JSON.parse(plainMarkersString);
    
    plainMarkers.forEach( ({ color, lngLat }) => {
      const [ lng, lat  ] = lngLat;
      const coords = new LngLat( lng, lat );
      this.addMarker( coords, color);
    });

  }
}
