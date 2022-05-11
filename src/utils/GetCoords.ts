import { useMapEvents } from 'react-leaflet';

import { Nullable } from 'types';

export const GetCoords = (): Nullable<null> => {
  const map = useMapEvents({
    click: e => {
      map.locate();
      console.log(e);
    },

    locationfound: location => {
      console.log('location found:', location);
    },
  });
  console.log(map);
  return null;
};
