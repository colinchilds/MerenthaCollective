import React from 'react';

import Box from '@material-ui/core/Box';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import useStyles from './CryptoCard.style';

const CryptoCard = ({ title, amount, progress, children }) => {
  const classes = useStyles();

  const headerSubTitle = (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <div style={{ fontWeight: 'fontWeightBold', fontSize: 20 }}>{amount}</div>
      <Box ml={2} fontSize={16} color={progress.color} display="flex" flexDirection="row" alignItems="center">
        <span className="mr-1">{progress.value}</span>
        {parseFloat(progress.value) > 0 ? (
          <ExpandLessIcon className={classes.iconRoot} />
        ) : (
          <ExpandMoreIcon className={classes.iconRoot} />
        )}
      </Box>
    </div>
  );

  return (
    <CmtCard>
      <CmtCardHeader
        className={classes.cardHeaderRoot}
        titleProps={{
          variant: 'h6',
          component: 'div',
          className: classes.titleRoot,
        }}
        title={title}
        subTitle={headerSubTitle}
      />
      {children}
    </CmtCard>
  );
};

export default CryptoCard;
