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
  disabled: boolean;
};

export const Form: FC<FormProps> = memo(
  ({
    handleChangeName,
    handleChangeDescription,
    name,
    description,
    handleButtonClick,
    coords,
    disabled,
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
          disabled={disabled}
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
          disabled={disabled}
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
