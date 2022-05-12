/**
 * Coordinates lat and long of Saint-Petersburg
 * @constant
 */
import L from 'leaflet';

const SPB_LAT = 59.939098;
const SPB_LONG = 30.315868;

/**
 * @constant {[number, number]} default position for map (Saint-Petersburg)
 */
export const defaultPosition: [number, number] = [SPB_LAT, SPB_LONG];

/**
 * @constant {number}
 * Params icon Marker size, position
 */
const ICON_WIDTH = 25;
const ICON_HEIGHT = 41;
const ICON_ANCHOR_X = 10;
const ICON_ANCHOR_Y = 41;
const POPUP_ANCHOR_X = 2;
const POPUP_ANCHOR_Y = -40;

/**
 * @constant
 * default icon for Map
 */
export const icon = L.icon({
  iconSize: [ICON_WIDTH, ICON_HEIGHT],
  iconAnchor: [ICON_ANCHOR_X, ICON_ANCHOR_Y],
  popupAnchor: [POPUP_ANCHOR_X, POPUP_ANCHOR_Y],
  iconUrl: 'https://unpkg.com/leaflet@1.8/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.8/dist/images/marker-shadow.png',
});
