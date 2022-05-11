import React, { useState } from 'react';

import { Route, Routes } from 'react-router-dom';

import * as data from './data/places.json';

import { Navigation } from 'components/Navigation';
import { PlaceType } from 'data';
import { AddPoint, Home, PointsList } from 'pages';
import './index.css';
import { Nullable, ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
  const places = JSON.parse(JSON.stringify(data));

  const [markers, setMarkers] = useState<PlaceType[]>([places]);
  const handlePostMarker = (marker: PlaceType): Nullable<void> => {
    setMarkers(prevState => [...prevState, marker]);
  };

  const handleDeleteMarker = (id: number): Nullable<void> => {
    const filteredMarkers = markers.filter(({ placeId }) => placeId !== id);
    setMarkers(filteredMarkers);
  };

  console.log(markers);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home items={markers} />} />
        <Route path="/addpoint" element={<AddPoint onButtonClick={handlePostMarker} />} />
        <Route
          path="/pointslist"
          element={<PointsList items={markers} onButtonClick={handleDeleteMarker} />}
        />
      </Routes>
    </>
  );
};

export default App;
