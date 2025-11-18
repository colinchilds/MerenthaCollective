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
  { label: 'Area List', isActive: true },
];

const Arealist = () => {
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
                <Table size="small" stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Typography variant="subtitle2" fontWeight="bold">
                          Zone
                        </Typography>
                      </TableCell>
                      <TableCell align="center" style={{ minWidth: '120px' }}>
                        <Typography variant="subtitle2" fontWeight="bold">
                          Level Range
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography variant="subtitle2" fontWeight="bold">
                          AOE
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography variant="subtitle2" fontWeight="bold">
                          Strong
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography variant="subtitle2" fontWeight="bold">
                          Elite
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography variant="subtitle2" fontWeight="bold">
                          Legendary
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {continents.map((continent) => {
                      // Filter each region to include only regions with matching areas
                      const filteredRegions = continent.regions
                        .map((region) => {
                          const regionAreas = region.areas
                            .filter((area) => {
                              const matchesSearch = area.name.toLowerCase().includes(searchTerm.toLowerCase());

                              const matchesMin =
                                !minLevelFilter || (area.minLevel !== null && area.minLevel >= parseInt(minLevelFilter));

                              const matchesMax =
                                !maxLevelFilter || (area.maxLevel !== null && area.maxLevel <= parseInt(maxLevelFilter));

                              return matchesSearch && matchesMin && matchesMax;
                            })
                            .sort((a, b) => {
                              if (a.minLevel === null && b.minLevel === null) return 0;
                              if (a.minLevel === null) return 1;
                              if (b.minLevel === null) return -1;
                              return a.minLevel - b.minLevel;
                            });

                          return { ...region, regionAreas };
                        })
                        .filter((region) => region.regionAreas.length > 0); // <== REMOVE empty regions

                      if (filteredRegions.length === 0) return null; // <== REMOVE empty continents

                      return (
                        <React.Fragment key={continent.name}>
                          {/* CONTINENT ROW */}
                          <TableRow>
                            <TableCell colSpan={6} sx={{ backgroundColor: 'grey.200' }}>
                              <Typography variant="subtitle1" fontWeight="bold">
                                {continent.name}
                              </Typography>
                            </TableCell>
                          </TableRow>

                          {filteredRegions.map((region) => (
                            <React.Fragment key={region.name}>
                              {/* REGION ROW */}
                              <TableRow>
                                <TableCell colSpan={6} sx={{ backgroundColor: 'grey.100' }}>
                                  <Typography variant="subtitle2" fontWeight="medium">
                                    {region.name}
                                  </Typography>
                                </TableCell>
                              </TableRow>

                              {/* AREAS */}
                              {region.regionAreas.map((area, index) => (
                                <TableRow key={index} hover>
                                  <TableCell>
                                    <Typography variant="body2" fontWeight="medium">
                                      {area.name}
                                    </Typography>
                                  </TableCell>

                                  <TableCell align="center">
                                    <Typography variant="body2">{getLevelRange(area)}</Typography>
                                  </TableCell>

                                  <TableCell align="center">{renderBooleanCell(area.aoe)}</TableCell>
                                  <TableCell align="center">{renderBooleanCell(area.strong)}</TableCell>
                                  <TableCell align="center">{renderBooleanCell(area.elite)}</TableCell>
                                  <TableCell align="center">{renderBooleanCell(area.legendary)}</TableCell>
                                </TableRow>
                              ))}
                            </React.Fragment>
                          ))}
                        </React.Fragment>
                      );
                    })}
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

export default Arealist;
