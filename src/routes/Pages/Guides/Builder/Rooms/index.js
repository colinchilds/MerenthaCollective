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
  { label: 'Builder', link: '/guides' },
  { label: 'Rooms', isActive: true },
];

const Builder = () => {
  const [roomBasicCode, setRoomBasicCode] = useState('');
  const [roomDetailedCode, setRoomDetailedCode] = useState('');
  const [roomDaynightCode, setRoomDaynightCode] = useState('');
  const [roomIndoorsCode, setRoomIndoorsCode] = useState('');
  const [roomActionCode, setRoomActionCode] = useState('');

  fetch(roomBasic)
    .then((t) => t.text())
    .then((text) => {
      setRoomBasicCode(text);
    });
  fetch(roomDetailed)
    .then((t) => t.text())
    .then((text) => {
      setRoomDetailedCode(text);
    });
  fetch(roomDaynight)
    .then((t) => t.text())
    .then((text) => {
      setRoomDaynightCode(text);
    });
  fetch(roomIndoors)
    .then((t) => t.text())
    .then((text) => {
      setRoomIndoorsCode(text);
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
      <CodeViewerCard code={roomDetailedCode} language="c">
        <Typography>Room with more detailed attributes</Typography>
      </CodeViewerCard>
      <CodeViewerCard code={roomDaynightCode} language="c">
        <Typography>Room with more day and night differences</Typography>
      </CodeViewerCard>

      <CodeViewerCard code={roomIndoorsCode} language="c">
        <Typography>Room which is indoors</Typography>
      </CodeViewerCard>
      <CodeViewerCard code={roomActionCode} language="c">
        <Typography>Room with action</Typography>
      </CodeViewerCard>
    </PageContainer>
  );
};

export default Builder;
