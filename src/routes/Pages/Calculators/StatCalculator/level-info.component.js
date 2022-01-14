import React from 'react';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import { Box, Table, TableBody, TableCell, TableContainer, TableRow, Tooltip, Typography } from '@material-ui/core';
import { intToString } from './calculator.helpers';

export default function LevelInfo(props) {
  const { level, advExp, maxExp } = props;
  return (
    <div>
      <CmtCardHeader title="Level Information" />
      <CmtCardContent>
        <Box pb={{ xs: 6, md: 10, xl: 16 }}>
          <TableContainer>
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography>Stat Requirement</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{Math.max(0, (level - 6) * 10)}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>Skill Requirement</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{14 * (level + 1)}</Typography>
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
    </div>
  );
}
