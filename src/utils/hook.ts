import { useMapEvents } from 'react-leaflet';

export const hook = (): any => {
  const res = useMapEvents({
    click: e => {
      res.locate();
      console.log(e.latlng);
      return e.latlng;
    },

    locationfound: location => {
      console.log('location found:', location);
    },
  });
  return res;
};
