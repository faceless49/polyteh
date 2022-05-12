import { FC, memo } from 'react';

import { CardPoint } from 'components/CardPoint';
import { PlaceType } from 'data';
import { Nullable, ReturnComponentType } from 'types';

type PointsListPageProps = {
  items: PlaceType[];
  onRemoveMarkerClick: (id: string) => Nullable<void>;
};

/**
 * @function
 * Mapping CardPoints
 */
export const PointsList: FC<PointsListPageProps> = memo(
  ({ items, onRemoveMarkerClick }): ReturnComponentType => (
    <>
      {items.map(item => (
        <CardPoint item={item} onButtonClick={onRemoveMarkerClick} key={item.placeId} />
      ))}
    </>
  ),
);
