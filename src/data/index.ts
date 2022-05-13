import { LatLngExpression } from 'leaflet';

/**
 * Types our Place
 */

export type PlaceType = {
  placeId: string;
  name: string;
  createdAt: Date;
  description: string;
  coordinates: LatLngExpression;
};
