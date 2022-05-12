import { defaultPosition } from 'constants';

import { FC, memo } from 'react';

import { MapContainer, TileLayer } from 'react-leaflet';

import { Markers } from 'components';
import { PlaceType } from 'data';
import { ReturnComponentType } from 'types';

type HomePage = {
  items: PlaceType[];
};

export const Home: FC<HomePage> = memo(
  ({ items }): ReturnComponentType => (
    <div>
      <MapContainer center={defaultPosition} zoom={13} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Markers items={items} />
      </MapContainer>
    </div>
  ),
);
