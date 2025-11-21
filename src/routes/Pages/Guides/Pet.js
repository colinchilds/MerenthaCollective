import React from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { Typography } from '@mui/material';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import UpdatedBy from 'common/UpdatedBy';

const breadcrumbs = [
  { label: 'Guides', link: '/guides' },
  { label: 'Pet', isActive: true },
];

const data = [
  {
    question: 'Where do I buy a pet?',
    answer: `Look east of the Whitestorm []. One of the shops nearby sells pets.\r\nThere's also one west of the Haven []`,
  },
  {
    question: 'What pets can I purchase?',
    answer: `Before a pet reaches level 50, you can purchase a dog, cat, monkey, or bird.\r\nOnce a pet reaches level 50, you can trade them for a bear, snake, elephant, or bat.`,
  },
  {
    question: 'What commands can my pet do?',
    answer: `Commands currently need reworked, but for fighting you can use 'order pet claw $*' or 'order pet rage'.\r\nIn addition, pets can do most actions you can do (drop, get, apply salve, eat food, etc.).`,
  },
  {
    question: 'How do I get my pet to stop following me?',
    answer: 'Same way you would get your real pet -- order them to stay.',
  },
  {
    question: 'I left my pet somewhere, how do I get them back?',
    answer: "You can try 'recall pet'. If that doesn't work, you'll need to go to a pet store and 'claim pet'.",
  },
  {
    question: "I recalled my pet successfully, but now they won't follow me or join me in combat - what do I do?",
    answer:
      'Pets are not intelligent creatures. You have to order them to follow you after you recall them - otherwise they stay where you left them.',
  },
];

const Pet = () => {
  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Pet FAQ">
      <GridContainer>
        {data.map((item, index) => (
          <Grid item xs={12} key={index}>
            <CmtCard>
              <CmtCardHeader title={item.question} />
              <CmtCardContent>
                <Typography style={{ whiteSpace: 'pre-line' }}>{item.answer}</Typography>
              </CmtCardContent>
            </CmtCard>
          </Grid>
        ))}
        <UpdatedBy name="Manannan" />
      </GridContainer>
    </PageContainer>
  );
};

export default Pet;
