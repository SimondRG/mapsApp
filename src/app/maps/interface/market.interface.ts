import { Marker } from 'mapbox-gl';

export interface MarkertAndColor {
    color: string;
    marker: Marker
}

export interface PlainMarket {
    color: string;
    lngLat: number[];
}

export interface House {
    title: string;
    description: string;
    lngLat: [number, number];
  }