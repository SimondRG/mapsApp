import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl'; // Se llama este paquete preinstalado por npm para el manejo de mapas

@Component({
  templateUrl: './zomm-range-page.component.html',
  styleUrl: './zomm-range-page.component.css',
})
export class ZommRangePageComponent implements AfterViewInit, OnDestroy{

    // Permite tomar referencias del html
    @ViewChild('map') divMap?: ElementRef; 

    public zoom: number = 10;
    public map?:Map;
    public currentlngLat: LngLat = new LngLat( -74.5, 40 );

    ngAfterViewInit(): void {
  
      if ( !this.divMap ) throw 'El elemento HTML no fue encontrado';
  
      this.map = new Map({
        container: this.divMap.nativeElement, // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: this.currentlngLat, // starting position [lng, lat]
        zoom: this.zoom, // starting zoom
      });
      
      // Se llama la función para establecer los listeners
      this.mapListeners();

    }
    // Limpia todos los Listeners cuando se destruye el componente
    ngOnDestroy(): void {
      this.map?.remove();
    }

    mapListeners(){
      if ( !this.map ) throw 'Mapa no inicializado';

      this.map.on('zoom', (env) => {
        this.zoom = this.map!.getZoom()
      });
      // Esta función valida si al terminar de hacer zoom el valor del zoom es menor que 18, se queda en ese valor, sino
      // le establece el valor de 18 al zoom.
      this.map.on('zoomend', (env) => {
        if( this.map!.getZoom() < 18 ) return;
        this.map!.zoomTo(18);
      });

      // Función que se ejecuta cuando el mapa se mueve y obtiene la latitud y longitud del centro del mapa
      this.map.on('move', () =>{
        this.currentlngLat = this.map!.getCenter();
      })

    }
    // Permite retroceder el zoom cuando se llama esta función en algún evento
    zoomIn(){
      this.map?.zoomIn();
    }
    // Permite hacer zoom cuando se llama esta función en algún evento
    zoomOut(){
      this.map?.zoomOut();
    }
    // Este metodo recibe como parametro la referencia local del input type="range" del template
    // y establece el zoom mediante el metodo zoomTo
    zoomChanged( value: string ){
      this.zoom = parseInt(value)
      this.map!.zoomTo(this.zoom);
    }

}
