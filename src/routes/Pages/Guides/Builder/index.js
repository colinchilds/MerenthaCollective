import React, { useState } from 'react';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import { Typography } from '@mui/material';
import CodeViewerCard from '@jumbo/components/Common/CodeViewerCard';
import rat from './rat.txt';

const breadcrumbs = [
  { label: 'Guides', link: '/guides' },
  { label: 'Builder', isActive: true },
];

const Builder = () => {
  const [ratCode, setRatCode] = useState('');

  fetch(rat)
    .then((t) => t.text())
    .then((text) => {
      setRatCode(text);
    });

  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Builder Guide">
      <CodeViewerCard code={ratCode} language="c">
        <Typography>Here's an example of how to code a rat in Cab</Typography>
      </CodeViewerCard>
    </PageContainer>
  );
};

export default Builder;
