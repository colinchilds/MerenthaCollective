import React from 'react';
import { useParams } from 'react-router-dom';
import { areas } from 'data/Areas';
import AreaTemplate from './AreaTemplate';

const Area = () => {
  const { area, subarea } = useParams();
  const areaData = areas?.[area]?.[subarea];

  if (!areaData) {
    return <p>Area not found</p>;
  }

  return <AreaTemplate areaData={areaData} areaName={subarea.charAt(0).toUpperCase() + subarea.slice(1)} />;
};

export default Area;
