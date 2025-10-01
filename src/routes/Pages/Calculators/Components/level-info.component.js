import React from 'react';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import { Box, Table, TableBody, TableCell, TableContainer, TableRow, Tooltip, Typography } from '@mui/material';
import { intToString } from '../Helpers/calculator.helpers';
import { alignProperty } from '@mui/material/styles/cssUtils';

export default function LevelInfo(props) {
  const { level, advExp, maxExp } = props;
  return (
    <React.Fragment>
      <CmtCardHeader title="Level Information" />
      <CmtCardContent>
        <Box pb={{ xs: 3, md: 4, xl: 6 }}>
          <TableContainer>
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography>Next Stat Requirement</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{Math.max(0, (level - 6) * 10)}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>Next Skill Requirement</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{14 * (level + 2)}</Typography>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Typography>Level Cost</Typography>
                  </TableCell>
                  <TableCell>
                    <Tooltip title={parseInt(advExp).toLocaleString('en-US')}>
                      <Typography>{intToString(advExp, 2)}</Typography>
                    </Tooltip>
                  </TableCell>
                  <TableCell>
                    <Typography>Max Experience</Typography>
                  </TableCell>
                  <TableCell>
                    <Tooltip title={parseInt(maxExp).toLocaleString('en-US')}>
                      <Typography>{intToString(maxExp, 2)}</Typography>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </CmtCardContent>
    </React.Fragment>
  );
}
