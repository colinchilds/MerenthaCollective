import React from 'react';
import { useParams, useHistory, Redirect } from 'react-router';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import { Typography, Box, Button } from '@mui/material';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';

import MageGuideData from 'data/Guides/Classes/Mage';
import ClassData from 'data/Guides/Classes/ClassData';

import Druid from './Druid';
import Healer from './Healer';
import Illusionist from './Illusionist';
import Necromancer from './Necromancer';
import Sorcerer from './Sorcerer';
import Warlock from './Warlock';
import Wizard from './Wizard';

/* Map static pages */
const PAGE_MAP = {
  druid: Druid,
  healer: Healer,
  illusionist: Illusionist,
  necromancer: Necromancer,
  sorcerer: Sorcerer,
  warlock: Warlock,
  wizard: Wizard,
};

const BaseView = () => {
  return (
    <>
      {MageGuideData.map((item, index) => (
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
        <Typography>Written by Cordell</Typography>
      </Grid>
    </>
  );
};

const Mage = () => {
  const { subclass } = useParams();
  const history = useHistory();

  const subclasses = (ClassData.mage || [])
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
    .map((s) => s.toLowerCase());

  const active = subclass?.toLowerCase() || 'faq';

  /* Invalid subclass guard */
  if (subclass && !subclasses.includes(active)) {
    return <Redirect to="/guides/mage" />;
  }

  const breadcrumbs = [
    { label: 'Guides', link: '/guides' },
    { label: 'Mage', link: '/guides/mage', isActive: !subclass },
    ...(subclass ? [{ label: active.charAt(0).toUpperCase() + active.slice(1), isActive: true }] : []),
  ];

  const ActivePage = PAGE_MAP[active] || BaseView;

  let header = '';
  if (!subclass) {
    header = 'Mage Guide';
  } else {
    header = `Mage Guide - ${active.charAt(0).toUpperCase() + active.slice(1)}`;
  }

  return (
    <PageContainer heading={header} breadcrumbs={breadcrumbs}>
      <GridContainer>
        {/* Subclass Navigation */}
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Button variant={active === 'faq' ? 'contained' : 'outlined'} onClick={() => history.push('/guides/mage')}>
              FAQ
            </Button>

            {subclasses.map((sc) => (
              <Button
                key={sc}
                variant={active === sc ? 'contained' : 'outlined'}
                onClick={() => history.push(`/guides/mage/${sc}`)}>
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

export default Mage;
