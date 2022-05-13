import { defaultPosition, icon } from 'constants';

import { ChangeEvent, FC, useCallback, useState } from 'react';

import L, { LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import { v1 } from 'uuid';

import styles from './AddPoint.module.scss';

import { Form } from 'components/Form';
import { PlaceType } from 'data';
import { Nullable, ReturnComponentType } from 'types';

type AddPointProps = {
  onAddMarkerClick: (marker: PlaceType) => Nullable<void>;
};

/**
 * @component
 * This component page for add point on the map
 * @param {onButtonClick}
 */

export const AddPoint: FC<AddPointProps> = ({
  onAddMarkerClick,
}): ReturnComponentType => {
  /**
   * states for inputs
   */
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [coords, setCoords] = useState<LatLngExpression>();

  /**
   * Conditional render
   */
  const [isAdded, setIsAdded] = useState(false);

  const handleButtonClick = (): Nullable<void> => {
    if (coords) {
      const newMarker: PlaceType = {
        description,
        name,
        coordinates: coords,
        createdAt: new Date(),
        placeId: v1(),
      };
      onAddMarkerClick(newMarker);
      setName('');
      setDescription('');
      setIsAdded(!isAdded);
    } else {
      console.log('Bad coords');
    }
  };

  const handleChangeName = useCallback(
    (e: ChangeEvent<HTMLInputElement>): Nullable<void> => {
      setName(e.currentTarget.value);
    },
    [name],
  );

  const handleChangeDescription = useCallback(
    (e: ChangeEvent<HTMLInputElement>): Nullable<void> => {
      setDescription(e.currentTarget.value);
    },
    [description],
  );

  const GetCoordsHelper = (): Nullable<null> => {
    const map = useMapEvents({
      click: e => {
        const { lat, lng } = e.latlng;
        L.marker([lat, lng], { icon }).addTo(map);
        setCoords([lat, lng]);
      },
    });
    return null;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <Form
          disabled={isAdded}
          name={name}
          handleChangeName={handleChangeName}
          description={description}
          handleChangeDescription={handleChangeDescription}
          handleButtonClick={handleButtonClick}
          coords={coords}
        />
      </div>
      {isAdded ? (
        <div>Point is added. Please return to main page.</div>
      ) : (
        <>
          <h3 className={styles.subtitle}>
            Please click on the map for choose location popup
          </h3>
          <MapContainer center={defaultPosition} zoom={13} scrollWheelZoom>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GetCoordsHelper />
          </MapContainer>
        </>
      )}
    </div>
  );
};
