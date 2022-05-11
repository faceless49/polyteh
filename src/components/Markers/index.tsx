import { FC } from 'react';

import { Marker, Popup } from 'react-leaflet';

import { PlaceType } from 'data';

type PointsProps = {
  items: PlaceType[];
};
export const Markers: FC<PointsProps> = ({ items }) => (
  <>
    {items.map(({ description, createdAt, name, coordinates, placeId }) => (
      <Marker position={coordinates} key={placeId}>
        <Popup>
          <div>
            <h2>{`Name: ${name}`}</h2>
            <p>{`CreatedAt: ${createdAt}`}</p>
            <p>{`Description: ${description}`}</p>
            <p>{`Coordinates: ${coordinates}`}</p>
          </div>
        </Popup>
      </Marker>
    ))}
  </>
);
