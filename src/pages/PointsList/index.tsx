import { FC } from 'react';

import { PlaceType } from 'data';
import { Nullable, ReturnComponentType } from 'types';

type PointsListPageProps = {
  items: PlaceType[];
  onButtonClick: (id: number) => Nullable<void>;
};

export const PointsList: FC<PointsListPageProps> = ({
  items,
  onButtonClick,
}): ReturnComponentType => (
  <ul>
    {items.map(({ name, placeId }) => (
      <div key={placeId}>
        <li>{name}</li>
        <button type="button" onClick={() => onButtonClick(placeId)}>
          X
        </button>
      </div>
    ))}
  </ul>
);
