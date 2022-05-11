import { LatLngExpression } from 'leaflet';

export type PlaceType = {
  placeId: number;
  name: string;
  createdAt: string;
  description: string;
  coordinates: LatLngExpression;
};
