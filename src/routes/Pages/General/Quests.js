import React, { useState } from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';

import questData from 'data/Quests';

const breadcrumbs = [
  { label: 'Main', link: '/' },
  { label: 'Quests', active: true },
];

const Quests = () => {
  // Track which quest is selected
  const [selected, setSelected] = useState(questData[0] ?? null);

  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Quests">
      <GridContainer spacing={3}>
        {/* LEFT MENU */}
        <Grid item xs={12} sm={4} md={3}>
          <CmtCard>
            <CmtCardContent>
              {questData.map((quest, index) => (
                <div
                  key={index}
                  onClick={() => setSelected(quest)}
                  style={{
                    padding: '10px 12px',
                    marginBottom: 6,
                    borderRadius: 6,
                    cursor: 'pointer',
                    background: selected?.name === quest.name ? 'rgba(0,0,0,0.15)' : 'transparent',
                    fontWeight: selected?.name === quest.name ? 'bold' : 'normal',
                  }}>
                  {quest.name}
                </div>
              ))}
            </CmtCardContent>
          </CmtCard>
        </Grid>

        {/* RIGHT CONTENT PANEL */}
        <Grid item xs={12} sm={8} md={9} sx={{ position: 'sticky', top: '0', alignSelf: 'start' }}>
          <CmtCard>
            <CmtCardContent>
              {selected ? (
                <>
                  <h2 style={{ marginBottom: '1rem' }}>{selected.name}</h2>

                  {Array.isArray(selected.description) ? (
                    selected.description.map((line, idx) => (
                      <div key={idx} style={{ marginBottom: '0.5rem' }}>
                        {line}
                      </div>
                    ))
                  ) : (
                    <div>{selected.description}</div>
                  )}

                  {selected.hint ? (
                    <p style={{ marginTop: '1rem' }}>
                      <strong style={{ textTransform: 'capitalize' }}>HINT: </strong>
                      {selected.hint}
                    </p>
                  ) : (
                    <></>
                  )}

                  <h3 style={{ marginTop: '1rem' }}>
                    <strong>Level:</strong> {selected.level}
                  </h3>
                </>
              ) : (
                <p>Select a quest from the menu.</p>
              )}
            </CmtCardContent>
          </CmtCard>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Quests;
