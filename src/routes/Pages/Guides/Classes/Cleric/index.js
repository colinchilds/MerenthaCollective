import React from 'react';
import { useParams, useHistory, Redirect } from 'react-router';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import { Typography, Box, Button } from '@mui/material';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';

import ClericGuideData from 'data/Guides/Classes/Cleric';
import ClassData from 'data/Guides/Classes/ClassData';

import White from './White';
import Grey from './Grey';
import Black from './Black';

/* Map static pages */
const PAGE_MAP = {
  white: White,
  grey: Grey,
  black: Black,
};

const BaseView = () => {
  return (
    <>
      {ClericGuideData.map((item, index) => (
        <Grid item xs={12} key={index}>
          <CmtCard>
            <CmtCardHeader title={item.question} />
            <CmtCardContent>
              <Typography>{item.answer}</Typography>
            </CmtCardContent>
          </CmtCard>
        </Grid>
      ))}
      <Grid item>
        <Typography>Written by Ggood and Stasia</Typography>
      </Grid>
    </>
  );
};

const Cleric = () => {
  const { subclass } = useParams();
  const history = useHistory();

  const subclasses = (ClassData.cleric || []).map((s) => s.toLowerCase());

  const active = subclass?.toLowerCase() || 'faq';

  /* Invalid subclass guard */
  if (subclass && !subclasses.includes(active)) {
    return <Redirect to="/guides/cleric" />;
  }

  const breadcrumbs = [
    { label: 'Guides', link: '/guides' },
    { label: 'Cleric', link: '/guides/cleric', isActive: !subclass },
    ...(subclass ? [{ label: active.charAt(0).toUpperCase() + active.slice(1), isActive: true }] : []),
  ];

  const ActivePage = PAGE_MAP[active] || BaseView;

  let header = '';
  if (!subclass) {
    header = 'Cleric Guide';
  } else {
    header = `${active.charAt(0).toUpperCase() + active.slice(1)} Cleric Guide`;
  }

  return (
    <PageContainer heading={header} breadcrumbs={breadcrumbs}>
      <GridContainer>
        {/* Subclass Navigation */}
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Button variant={active === 'faq' ? 'contained' : 'outlined'} onClick={() => history.push('/guides/cleric')}>
              FAQ
            </Button>

            {subclasses.map((sc) => (
              <Button
                key={sc}
                variant={active === sc ? 'contained' : 'outlined'}
                onClick={() => history.push(`/guides/cleric/${sc}`)}>
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

export default Cleric;
