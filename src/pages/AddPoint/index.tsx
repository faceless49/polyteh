import { defaultPosition } from 'constants';

import { FC, useState } from 'react';

import { LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';

import styles from './AddPoint.module.scss';

import { PlaceType } from 'data';
import { Nullable, ReturnComponentType } from 'types';

type AddPointProps = {
  onButtonClick: (marker: PlaceType) => Nullable<void>;
};

/**
 * @component
 * This component page for add point on the map
 * @param {onButtonClick}
 */

export const AddPoint: FC<AddPointProps> = ({ onButtonClick }): ReturnComponentType => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [coords, setCoords] = useState<LatLngExpression>();
  const [isAdded, setIsAdded] = useState(false);

  const handleButtonClick = (): Nullable<void> => {
    if (coords) {
      const newMarker: PlaceType = {
        description,
        name,
        coordinates: coords,
        createdAt: new Date().toString(),
        placeId: 4,
      };
      onButtonClick(newMarker);
      setName('');
      setDescription('');
      setIsAdded(!isAdded);
    } else {
      console.log('Bad coords');
    }
  };

  const GetCoordsHelper = (): null => {
    useMapEvents({
      click: e => {
        const { lat, lng } = e.latlng;
        setCoords([lat, lng]);
      },
    });
    return null;
  };

  return (
    <div>
      <div className={styles.form}>
        <label htmlFor="name">
          Name of point
          <input name="name" />
        </label>
        <label htmlFor="description">
          Description
          <input name="description" />
        </label>
        <button
          type="button"
          onClick={handleButtonClick}
          className={styles.btn}
          disabled={!name && !description && !coords}
        >
          Add mark
        </button>
      </div>
      <MapContainer center={defaultPosition} zoom={13} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GetCoordsHelper />
      </MapContainer>
    </div>
  );
};
