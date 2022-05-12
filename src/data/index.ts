import { LatLngExpression } from 'leaflet';

/**
 * Types our Place
 */

export type PlaceType = {
  placeId: string;
  name: string;
  createdAt: string;
  description: string;
  coordinates: LatLngExpression;
};
