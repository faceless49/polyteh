import { LatLngExpression } from 'leaflet';

/**
 *
 * @param arr
 * @function
 * @return {string}
 * Helper func get string coords for view
 */

export const getStringCoords = (arr: LatLngExpression): string => arr.toString();
