import React from 'react';
import { useParams, useHistory, Redirect } from 'react-router';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import { Typography, Box, Button } from '@mui/material';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';

import FighterGuideData from 'data/Guides/Classes/Fighter';
import ClassData from 'data/Guides/Classes/ClassData';

import Warrior from './Warrior';
import Paladin from './Paladin';
import Berserker from './Berserker';
import Antipaladin from './Antipaladin';
import Ranger from './Ranger';
import Mercenary from './Mercenary';

/* Map static pages */
const PAGE_MAP = {
  warrior: Warrior,
  paladin: Paladin,
  berserker: Berserker,
  antipaladin: Antipaladin,
  ranger: Ranger,
  mercenary: Mercenary,
};

const BaseView = () => {
  return (
    <>
      {FighterGuideData.map((item, index) => (
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
        <Typography>Written by Giam</Typography>
      </Grid>
    </>
  );
};

const Fighter = () => {
  const { subclass } = useParams();
  const history = useHistory();

  const subclasses = (ClassData.fighter || [])
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
    .map((s) => s.toLowerCase());

  const active = subclass?.toLowerCase() || 'faq';

  /* Invalid subclass guard */
  if (subclass && !subclasses.includes(active)) {
    return <Redirect to="/guides/fighter" />;
  }

  const breadcrumbs = [
    { label: 'Guides', link: '/guides' },
    { label: 'Cleric', link: '/guides/fighter', isActive: !subclass },
    ...(subclass ? [{ label: active.charAt(0).toUpperCase() + active.slice(1), isActive: true }] : []),
  ];

  const ActivePage = PAGE_MAP[active] || BaseView;

  let header = '';
  if (!subclass) {
    header = 'Fighter Guide';
  } else {
    header = `Fighter Guide - ${active.charAt(0).toUpperCase() + active.slice(1)}`;
  }

  return (
    <PageContainer heading={header} breadcrumbs={breadcrumbs}>
      <GridContainer>
        {/* Subclass Navigation */}
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Button variant={active === 'faq' ? 'contained' : 'outlined'} onClick={() => history.push('/guides/fighter')}>
              FAQ
            </Button>

            {subclasses.map((sc) => (
              <Button
                key={sc}
                variant={active === sc ? 'contained' : 'outlined'}
                onClick={() => history.push(`/guides/fighter/${sc}`)}>
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

export default Fighter;
