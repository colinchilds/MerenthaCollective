import React, { useState } from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import {
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
import { areas } from 'data/Areas';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const breadcrumbs = [
  { label: 'Main', link: '/' },
  { label: 'Areas', isActive: true },
];

const Areas = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [minLevelFilter, setMinLevelFilter] = useState('');
  const [maxLevelFilter, setMaxLevelFilter] = useState('');

  const filteredAreas = areas.filter((area) => {
    const matchesSearch = area.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesMinLevel = !minLevelFilter || (area.minLevel && area.minLevel >= parseInt(minLevelFilter));

    const matchesMaxLevel = !maxLevelFilter || (area.maxLevel && area.maxLevel <= parseInt(maxLevelFilter));

    return matchesSearch && matchesMinLevel && matchesMaxLevel;
  });

  // Sort areas by minimum level (null values at the end)
  const sortedAreas = [...filteredAreas].sort((a, b) => {
    if (a.minLevel === null && b.minLevel === null) return 0;
    if (a.minLevel === null) return 1;
    if (b.minLevel === null) return -1;
    return a.minLevel - b.minLevel;
  });

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
    return '-';
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
                    {sortedAreas.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} align="center">
                          <Typography variant="body2" color="textSecondary">
                            No areas found matching your criteria
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ) : (
                      sortedAreas.map((area, index) => (
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
                      ))
                    )}
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
