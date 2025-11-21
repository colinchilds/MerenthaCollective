import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
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
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import QuestionMark from '@mui/icons-material/QuestionMark';

import { areas } from 'data/Areas';

const breadcrumbs = [
  { label: 'Main', link: '/' },
  { label: 'Area List', isActive: true },
];

const Arealist = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [minLevelFilter, setMinLevelFilter] = useState('');
  const [maxLevelFilter, setMaxLevelFilter] = useState('');

  const renderBooleanCell = (value) => {
    if (value === 'yes') return <CheckIcon color="success" fontSize="small" />;
    if (value === 'no') return <CloseIcon color="error" fontSize="small" />;
    if (value === 'some')
      return (
        <Typography variant="body2" color="warning.main">
          Some
        </Typography>
      );

    return <QuestionMark fontSize="small" />;
  };

  // Extract min/max from "15-20"
  const parseLevels = (range) => {
    if (!range || typeof range !== 'string') return { min: null, max: null };
    const match = range.match(/(\d+)\s*-\s*(\d+)/);
    if (!match) return { min: null, max: null };
    return { min: Number(match[1]), max: Number(match[2]) };
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
                <Link href="https://github.com/colinchilds/MerenthaCollective/issues">GitHub Issues</Link>
              </Typography>
              <Typography>Click a Subarea name (e.g., Cabeiri) to view its area guide.</Typography>

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
                      <TableCell align="center" style={{ minWidth: 120 }}>
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
                    {Object.entries(areas).map(([areaSlug, subareas]) => {
                      const areaName = areaSlug.charAt(0).toUpperCase() + areaSlug.slice(1);

                      // Build list of subareas + zones for filtering
                      const processedSubareas = Object.entries(subareas).map(([subSlug, data]) => {
                        const { min, max } = parseLevels(data.levels);

                        return {
                          name: subSlug.charAt(0).toUpperCase() + subSlug.slice(1),
                          slug: subSlug,
                          link: `/areas/${areaSlug}/${subSlug}`,
                          levels: data.levels,
                          minLevel: min,
                          maxLevel: max,
                          zones: data.zones,
                        };
                      });

                      // Filter subareas by search/min/max
                      const filtered = processedSubareas
                        .filter((sub) => {
                          const term = searchTerm.toLowerCase();

                          const matchesSearch =
                            sub.name.toLowerCase().includes(term) || areaName.toLowerCase().includes(term);

                          const matchesMin = !minLevelFilter || (sub.minLevel && sub.minLevel >= parseInt(minLevelFilter));

                          const matchesMax = !maxLevelFilter || (sub.maxLevel && sub.maxLevel <= parseInt(maxLevelFilter));

                          return matchesSearch && matchesMin && matchesMax;
                        })
                        .sort((a, b) => {
                          if (a.minLevel === null) return 1;
                          if (b.minLevel === null) return -1;
                          return a.minLevel - b.minLevel;
                        });

                      if (filtered.length === 0) return null;

                      return (
                        <React.Fragment key={areaSlug}>
                          {/* CONTINENT NAME */}
                          <TableRow>
                            <TableCell colSpan={6} sx={{ backgroundColor: 'grey.200' }}>
                              <Typography variant="subtitle1" fontWeight="bold">
                                {areaName}
                              </Typography>
                            </TableCell>
                          </TableRow>

                          {/* SUBAREAS */}
                          {filtered.map((sub) => (
                            <React.Fragment key={sub.slug}>
                              <TableRow>
                                <TableCell colSpan={6} sx={{ backgroundColor: 'grey.100' }}>
                                  <Typography variant="subtitle2" fontWeight="medium">
                                    <RouterLink to={sub.link} style={{ textDecoration: 'none', color: 'blue' }}>
                                      {sub.name}
                                    </RouterLink>
                                  </Typography>
                                </TableCell>
                              </TableRow>

                              {/* ZONES */}
                              {sub.zones.map((zone, idx) => {
                                const { min, max } = parseLevels(zone.levels);

                                const matchesSearch = zone.name.toLowerCase().includes(searchTerm.toLowerCase());

                                // Optional: Filter zones if needed
                                if (!matchesSearch && searchTerm !== '') return null;

                                return (
                                  <TableRow key={idx} hover>
                                    <TableCell>
                                      <Typography variant="body2" fontWeight="medium">
                                        {zone.name}
                                      </Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                      <Typography variant="body2">
                                        {zone.minLevel} - {zone.maxLevel}
                                      </Typography>
                                    </TableCell>

                                    <TableCell align="center">{renderBooleanCell(zone.aoe)}</TableCell>
                                    <TableCell align="center">{renderBooleanCell(zone.strong)}</TableCell>
                                    <TableCell align="center">{renderBooleanCell(zone.elite)}</TableCell>
                                    <TableCell align="center">{renderBooleanCell(zone.legendary)}</TableCell>
                                  </TableRow>
                                );
                              })}
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
