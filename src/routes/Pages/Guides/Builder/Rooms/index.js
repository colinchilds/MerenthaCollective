import React, { useState } from 'react';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import { Typography } from '@mui/material';
import CodeViewerCard from '@jumbo/components/Common/CodeViewerCard';
import roomBasic from './room.basic.c';
import roomDetailed from './room.detailed.c';
import roomDaynight from './room.daynight.c';
import roomIndoors from './room.indoors.c';
import roomAction from './room.action.c';

const breadcrumbs = [
  { label: 'Guides', link: '/guides' },
  { label: 'Builder', link: '/guides/builder' },
  { label: 'Rooms', isActive: true },
];

function MerenthaCodeViewerCard(props) {
  const { file, children } = props;
  const [code, setCode] = useState('');

  fetch(file)
    .then((t) => t.text())
    .then((text) => setCode(text));

  return (
    <CodeViewerCard code={code} language="c">
      {children}
    </CodeViewerCard>
  );
}

const Builder = () => {
  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Rooms">
      <MerenthaCodeViewerCard file={roomBasic}>
        <Typography>Room with basic attributes</Typography>
      </MerenthaCodeViewerCard>
      <MerenthaCodeViewerCard file={roomDetailed}>
        <Typography>Room with more detailed attributes</Typography>
      </MerenthaCodeViewerCard>
      <MerenthaCodeViewerCard file={roomDaynight}>
        <Typography>Room with more day and night differences</Typography>
      </MerenthaCodeViewerCard>
      <MerenthaCodeViewerCard file={roomIndoors}>
        <Typography>Room which is indoors</Typography>
      </MerenthaCodeViewerCard>
      <MerenthaCodeViewerCard file={roomAction}>
        <Typography>Room with action</Typography>
      </MerenthaCodeViewerCard>
    </PageContainer>
  );
};

export default Builder;
