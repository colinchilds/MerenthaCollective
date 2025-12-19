import React, { useState } from 'react';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import GridContainer from '@jumbo/components/GridContainer';
import Grid from '@mui/material/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { Typography, Box, Chip, Paper, Link } from '@mui/material';
import { alpha } from '@mui/material/styles';
import commands from 'data/CommonCommands';

const breadcrumbs = [
  { label: 'General', link: '/' },
  { label: 'Common Commands', isActive: true },
];

const CommonCommands = () => {
  const [selectedCommand, setSelectedCommand] = useState(null);

  const handleCommandClick = (command) => {
    setSelectedCommand(command);
  };

  const renderDescriptionWithLinks = (description) => {
    const parts = [];

    // Look for "See also:" pattern and link commands after it
    const seeAlsoMatch = description.match(/(.*See also:\s*)(.+)/i);

    if (seeAlsoMatch) {
      const beforeSeeAlso = seeAlsoMatch[1];
      const afterSeeAlso = seeAlsoMatch[2];

      parts.push(beforeSeeAlso);

      // Split the commands by comma and space
      const potentialCommands = afterSeeAlso.split(/,\s*/);

      potentialCommands.forEach((item, index) => {
        const commandName = item.trim();
        const cleanCommandName = commandName.replace(/[.,;:!?]+$/, ''); // Strip trailing punctuation
        const existingCommand = commands.find((cmd) => cmd.name.toLowerCase() === cleanCommandName.toLowerCase());

        if (existingCommand) {
          parts.push(
            <Link
              key={`link-${index}`}
              component="button"
              variant="body1"
              onClick={(e) => {
                e.preventDefault();
                handleCommandClick(existingCommand);
              }}
              sx={{
                color: 'primary.main',
                textDecoration: 'underline',
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                padding: 0,
                font: 'inherit',
                '&:hover': {
                  color: 'primary.dark',
                },
              }}>
              {commandName}
            </Link>,
          );
        } else {
          parts.push(commandName);
        }

        if (index < potentialCommands.length - 1) {
          parts.push(', ');
        }
      });

      return <>{parts}</>;
    }

    return description;
  };

  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Common Commands">
      <GridContainer>
        <Grid item xs={12}>
          <CmtCard>
            <CmtCardContent>
              <Box sx={{ mb: 6 }}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {commands.map((command) => (
                    <Chip
                      key={command.id}
                      label={command.name}
                      onClick={() => handleCommandClick(command)}
                      sx={{
                        cursor: 'pointer',
                        bgcolor: selectedCommand?.id === command.id ? 'primary.main' : 'grey.100',
                        color: selectedCommand?.id === command.id ? 'white' : 'text.primary',
                        '&:hover': {
                          bgcolor:
                            selectedCommand?.id === command.id
                              ? 'primary.dark'
                              : (theme) => alpha(theme.palette.primary.main, 0.1),
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>

              {/* Command Details */}
              {selectedCommand && (
                <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 'bold',
                      mb: 2,
                      color: 'primary.main',
                      textTransform: 'lowercase',
                    }}>
                    {selectedCommand.name}
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    Syntax:
                  </Typography>
                  <Paper sx={{ p: 2, mb: 3, bgcolor: 'grey.900', color: 'white' }}>
                    <Typography variant="body1" component="code" sx={{ fontFamily: 'monospace' }}>
                      {selectedCommand.syntax}
                    </Typography>
                  </Paper>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    Description:
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                    {renderDescriptionWithLinks(selectedCommand.description)}
                  </Typography>
                </Paper>
              )}

              {!selectedCommand && (
                <Paper sx={{ p: 3, bgcolor: 'grey.50', textAlign: 'center' }}>
                  <Typography variant="body1" color="text.secondary">
                    Select a command from the list above to view its details.
                  </Typography>
                </Paper>
              )}
            </CmtCardContent>
          </CmtCard>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default CommonCommands;
