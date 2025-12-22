import React from 'react';
import { useParams, useHistory, Redirect } from 'react-router';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import { Typography, Box, Button } from '@mui/material';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';

import RogueGuideData from 'data/Guides/Classes/Rogue';
import ClassData from 'data/Guides/Classes/ClassData';

import Assassin from './Assassin';
import Bard from './Bard';
import Thief from './Thief';

/* Map static pages */
const PAGE_MAP = {
  assassin: Assassin,
  bard: Bard,
  thief: Thief,
};

const BaseView = () => {
  return (
    <>
      {RogueGuideData.map((item, index) => (
        <Grid item xs={12} key={index}>
          <CmtCard>
            <CmtCardHeader title={item.question} />
            <CmtCardContent>
              <Typography style={{ whiteSpace: 'pre-line' }}>{item.answer}</Typography>
            </CmtCardContent>
          </CmtCard>
        </Grid>
      ))}
      <Grid item>
        <Typography>Written by Krook</Typography>
      </Grid>
    </>
  );
};

const Rogue = () => {
  const { subclass } = useParams();
  const history = useHistory();

  const subclasses = (ClassData.rogue || [])
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
    .map((s) => s.toLowerCase());

  const active = subclass?.toLowerCase() || 'faq';

  /* Invalid subclass guard */
  if (subclass && !subclasses.includes(active)) {
    return <Redirect to="/guides/rogue" />;
  }

  const breadcrumbs = [
    { label: 'Guides', link: '/guides' },
    { label: 'Rogue', link: '/guides/rogue', isActive: !subclass },
    ...(subclass ? [{ label: active.charAt(0).toUpperCase() + active.slice(1), isActive: true }] : []),
  ];

  const ActivePage = PAGE_MAP[active] || BaseView;

  let header = '';
  if (!subclass) {
    header = 'Rogue Guide';
  } else {
    header = `Rogue Guide - ${active.charAt(0).toUpperCase() + active.slice(1)}`;
  }

  return (
    <PageContainer heading={header} breadcrumbs={breadcrumbs}>
      <GridContainer>
        {/* Subclass Navigation */}
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Button variant={active === 'faq' ? 'contained' : 'outlined'} onClick={() => history.push('/guides/rogue')}>
              FAQ
            </Button>

            {subclasses.map((sc) => (
              <Button
                key={sc}
                variant={active === sc ? 'contained' : 'outlined'}
                onClick={() => history.push(`/guides/rogue/${sc}`)}>
                {sc.charAt(0).toUpperCase() + sc.slice(1)}
              </Button>
            ))}
          </Box>
        </Grid>

        {/* Content */}
        <ActivePage />
      </GridContainer>
    </PageContainer>
  );
};

export default Rogue;
