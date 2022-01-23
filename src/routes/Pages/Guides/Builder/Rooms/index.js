import React, { useState } from 'react';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import { Typography } from '@mui/material';
import CodeViewerCard from '@jumbo/components/Common/CodeViewerCard';
import roomBasic from './room.basic.c';
import roomAction from './room.action.c';

const breadcrumbs = [
  { label: 'Guides', link: '/guides' },
  { label: 'Builder', link: '/guides' },
  { label: 'Rooms', isActive: true },
];

const Builder = () => {
  const [roomBasicCode, setRoomBasicCode] = useState('');
  const [roomActionCode, setRoomActionCode] = useState('');

  fetch(roomBasic)
    .then((t) => t.text())
    .then((text) => {
      setRoomBasicCode(text);
    });
  fetch(roomAction)
    .then((t) => t.text())
    .then((text) => {
      setRoomActionCode(text);
    });

  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Rooms">
      <CodeViewerCard code={roomBasicCode} language="c">
        <Typography>Room with basic attributes</Typography>
      </CodeViewerCard>
      <CodeViewerCard code={roomActionCode} language="c">
        <Typography>Room with action</Typography>
      </CodeViewerCard>
    </PageContainer>
  );
};

export default Builder;
