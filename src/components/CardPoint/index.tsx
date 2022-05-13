import { FC, memo } from 'react';

import styles from './CardPoint.module.scss';

import { PlaceType } from 'data';
import { Nullable } from 'types';
import { getStringCoords } from 'utils/getStringCoords';

type CardPointProps = {
  item: PlaceType;
  onButtonClick: (id: string) => Nullable<void>;
};

export const CardPoint: FC<CardPointProps> = memo(({ item, onButtonClick }) => {
  const coordinates = getStringCoords(item.coordinates);
  return (
    <div className={styles.card}>
      <h4 className={styles.subtitle}>{item.name}</h4>
      <p>Description: {item.description}</p>
      <span>Created at: {item.createdAt.toString()}</span>
      <span>Coordinates: {coordinates}</span>
      <button
        type="button"
        onClick={() => onButtonClick(item.placeId)}
        className={styles.btn}
      >
        Delete point
      </button>
    </div>
  );
});
