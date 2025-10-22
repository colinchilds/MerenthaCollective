import React, { useState } from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TextField,
  Box,
  TableContainer,
  Paper,
} from '@mui/material';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import { continents } from 'data/Areas/index';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import QuestionMark from '@mui/icons-material/QuestionMark';

const breadcrumbs = [
  { label: 'Main', link: '/' },
  { label: 'Areas', isActive: true },
];

const Areas = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [minLevelFilter, setMinLevelFilter] = useState('');
  const [maxLevelFilter, setMaxLevelFilter] = useState('');

  // Helper function to render boolean indicators
  const renderBooleanCell = (value) => {
    if (value === 'yes') {
      return <CheckIcon color="success" fontSize="small" />;
    } else if (value === 'no') {
      return <CloseIcon color="error" fontSize="small" />;
    } else if (value === 'some') {
      return (
        <Typography variant="body2" color="warning.main">
          Some
        </Typography>
      );
    }
    return <QuestionMark fontSize="small" />;
  };

  // Function to get level range display
  const getLevelRange = (area) => {
    if (!area.minLevel || !area.maxLevel) return 'Unknown';
    return `${area.minLevel} - ${area.maxLevel}`;
  };

  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Areas by Level">
      <GridContainer>
        <Grid item xs={12}>
          <CmtCard>
            <CmtCardHeader title="Experience Areas">
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <TextField
                  size="small"
                  label="Search areas"
                  variant="outlined"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  sx={{ minWidth: 200 }}
                />
                <TextField
                  size="small"
                  label="Min level"
                  variant="outlined"
                  type="number"
                  value={minLevelFilter}
                  onChange={(e) => setMinLevelFilter(e.target.value)}
                  sx={{ width: 100 }}
                />
                <TextField
                  size="small"
                  label="Max level"
                  variant="outlined"
                  type="number"
                  value={maxLevelFilter}
                  onChange={(e) => setMaxLevelFilter(e.target.value)}
                  sx={{ width: 100 }}
                />
              </Box>
            </CmtCardHeader>
            <CmtCardContent>
              <Typography size="medium">These values are player provided and may need updated.</Typography>
              <Typography size="medium">
                If you have any information missing below, please reach out via our{' '}
                <Link href="https://github.com/colinchilds/MerenthaCollective/issues">GitHub&#8658;Issues</Link>
              </Typography>
              {/* ADD SOME PADDING BELOW THE ABOVE */}
              <Typography>&nbsp;</Typography>

              <TableContainer component={Paper} sx={{ maxHeight: '70vh' }}>
                <Table size="small" stickyHeader sx={{ tableLayout: 'auto', width: '100%' }}>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ whiteSpace: 'nowrap', width: 'clamp(200px, 1%, 250px)' }}>
                        <Typography variant="subtitle2" fontWeight="bold">
                          Zone
                        </Typography>
                      </TableCell>

                      <TableCell align="center" sx={{ whiteSpace: 'nowrap', width: 'clamp(150px, 1%, 200px)' }}>
                        <Typography variant="subtitle2" fontWeight="bold">
                          Level Range
                        </Typography>
                      </TableCell>

                      <TableCell align="left" sx={{ width: '100%' }}>
                        <Typography variant="subtitle2" fontWeight="bold">
                          Notes
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {continents.map((continent) => (
                      <React.Fragment key={continent.name}>
                        {/* Continent Row */}
                        <TableRow>
                          <TableCell colSpan={3} sx={{ backgroundColor: 'grey.200' }}>
                            <Typography variant="subtitle1" fontWeight="bold">
                              {continent.name}
                            </Typography>
                          </TableCell>
                        </TableRow>

                        {continent.regions.map((region) => {
                          const regionAreas = region.areas
                            .filter((area) => {
                              const matchesSearch = area.name.toLowerCase().includes(searchTerm.toLowerCase());

                              const matchesMinLevel =
                                !minLevelFilter || (area.minLevel !== null && area.minLevel >= parseInt(minLevelFilter));

                              const matchesMaxLevel =
                                !maxLevelFilter || (area.maxLevel !== null && area.maxLevel <= parseInt(maxLevelFilter));

                              return matchesSearch && matchesMinLevel && matchesMaxLevel;
                            })
                            .sort((a, b) => {
                              if (a.minLevel === null && b.minLevel === null) return 0;
                              if (a.minLevel === null) return 1;
                              if (b.minLevel === null) return -1;
                              return a.minLevel - b.minLevel;
                            });

                          if (regionAreas.length === 0) return null;

                          return (
                            <React.Fragment key={region.name}>
                              <TableRow>
                                <TableCell colSpan={3} sx={{ backgroundColor: 'grey.100' }}>
                                  <Typography variant="subtitle2" fontWeight="medium">
                                    {region.name}
                                  </Typography>
                                </TableCell>
                              </TableRow>

                              {regionAreas.map((area, index) => (
                                <TableRow key={index} hover>
                                  <TableCell>
                                    <Typography
                                      variant="body2"
                                      fontWeight="medium"
                                      sx={{
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                      }}
                                      title={area.name}>
                                      {area.name}
                                    </Typography>
                                  </TableCell>
                                  <TableCell align="center">
                                    <Typography variant="body2">{getLevelRange(area)}</Typography>
                                  </TableCell>
                                  <TableCell align="left">
                                    <Typography>{area.notes}</Typography>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </React.Fragment>
                          );
                        })}
                      </React.Fragment>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CmtCardContent>
          </CmtCard>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Areas;
