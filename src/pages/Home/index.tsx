import { defaultPosition } from 'constants';

import { FC } from 'react';

import { MapContainer, TileLayer } from 'react-leaflet';

import { Markers } from 'components/Markers';
import { PlaceType } from 'data';
import { ReturnComponentType } from 'types';

type HomePage = {
  items: PlaceType[];
};

export const Home: FC<HomePage> = ({ items }): ReturnComponentType => {
  console.log(items);
  return (
    <div>
      <MapContainer center={defaultPosition} zoom={13} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Markers items={items} />
      </MapContainer>
    </div>
  );
};