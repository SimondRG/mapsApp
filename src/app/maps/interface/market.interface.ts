import { Marker } from 'mapbox-gl';

export interface MarkertAndColor {
    color: string;
    marker: Marker
}

export interface PlainMarket {
    color: string;
    lngLat: number[];
}