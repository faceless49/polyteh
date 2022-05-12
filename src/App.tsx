import React, { useCallback, useState } from 'react';

import { Route, Routes } from 'react-router-dom';

import * as data from './data/places.json';

import { Navigation } from 'components/Navigation';
import { PlaceType } from 'data';
import { AddPoint, Home, PointsList } from 'pages';
import './index.css';
import { Nullable, ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
  const places = JSON.parse(JSON.stringify(data));
  /**
   * Our Mock data
   * Or we can using redux and fetch places from api
   */
  const [markers, setMarkers] = useState<PlaceType[]>([places]);

  const handleMarkerPost = useCallback((marker: PlaceType): Nullable<void> => {
    setMarkers(prevState => [...prevState, marker]);
  }, []);

  const handleMarkerDelete = useCallback((id: string): Nullable<void> => {
    const filteredMarkers = markers.filter(({ placeId }) => placeId !== id);
    setMarkers(filteredMarkers);
  }, []);

  return (
    <div className="container">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home items={markers} />} />
        <Route
          path="/addpoint"
          element={<AddPoint onAddMarkerClick={handleMarkerPost} />}
        />
        <Route
          path="/pointslist"
          element={
            <PointsList items={markers} onRemoveMarkerClick={handleMarkerDelete} />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
