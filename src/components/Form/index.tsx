import { ChangeEvent, FC, memo } from 'react';

import { LatLngExpression } from 'leaflet';

import styles from 'pages/AddPoint/AddPoint.module.scss';
import { Nullable, ReturnComponentType } from 'types';

type FormProps = {
  name: string;
  handleChangeName: (e: ChangeEvent<HTMLInputElement>) => Nullable<void>;
  description: string;
  handleChangeDescription: (e: ChangeEvent<HTMLInputElement>) => Nullable<void>;
  handleButtonClick: () => Nullable<void>;
  coords: LatLngExpression | undefined;
};

export const Form: FC<FormProps> = memo(
  ({
    handleChangeName,
    handleChangeDescription,
    name,
    description,
    handleButtonClick,
    coords,
  }): ReturnComponentType => (
    <>
      <label htmlFor="name">
        Name of point
        <input
          name="name"
          value={name}
          onChange={handleChangeName}
          placeholder="Please enter name of point"
          required
        />
      </label>
      <label htmlFor="description">
        Description
        <input
          required
          name="description"
          value={description}
          onChange={handleChangeDescription}
          placeholder="Please enter description"
        />
      </label>
      <button
        type="button"
        onClick={handleButtonClick}
        className={styles.btn}
        disabled={!name || !description || !coords}
      >
        Add mark
      </button>
    </>
  ),
);
