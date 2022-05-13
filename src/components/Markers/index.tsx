import { icon } from 'constants';

import { FC, memo } from 'react';

import { Marker, Popup } from 'react-leaflet';

import { PlaceType } from 'data';

type PointsProps = {
  items: PlaceType[];
};
export const Markers: FC<PointsProps> = memo(({ items }) => (
  <>
    {items.map(({ description, createdAt, name, coordinates, placeId }) => (
      <Marker position={coordinates} key={placeId} icon={icon}>
        <Popup autoClose closeButton closeOnEscapeKey>
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
));
