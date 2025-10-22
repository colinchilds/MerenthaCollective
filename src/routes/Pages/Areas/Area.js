import React from 'react';
import { useParams } from 'react-router-dom';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import * as Atheria from './Atheria';
import * as Cardania from './Cardania';

const areas = {
  atheria: Atheria,
  cardania: Cardania,
};

const Area = () => {
  const { area, subarea } = useParams(); // e.g. /areas/atheria/cabeiri

  const AreaPack = areas[area?.toLowerCase()];
  const Component = AreaPack ? AreaPack[subarea?.charAt(0).toUpperCase() + subarea?.slice(1)] : null;

  // Uppercase the first character for the breadcrumbs
  const breadcrumbArea = area ? area[0].toUpperCase() + area.slice(1) : '';
  const breadcrumbSubarea = subarea ? subarea[0].toUpperCase() + subarea.slice(1) : '';

  const breadcrumbs = [
    { label: 'Main', link: '/' },
    { label: `Areas / ${breadcrumbArea} / ${breadcrumbSubarea}`, isActive: true },
  ];

  const header = `Area Guide - ${subarea?.charAt(0).toUpperCase() + subarea?.slice(1)}`;

  return (
    <PageContainer breadcrumbs={breadcrumbs} heading={header}>
      {Component ? <Component /> : <p>Area not found.</p>}
    </PageContainer>
  );
};

export default Area;
