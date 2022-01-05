import React, { useState } from 'react';

import clsx from 'clsx';

import { IconButton, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { alpha, makeStyles } from '@material-ui/core/styles';

import CmtList from '../CmtList';
import CmtGridList from '../CmtGridView';

const useStyles = makeStyles(theme => ({
  collapseHeader: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${alpha(theme.palette.common.black, 0.12)}`,
    borderRadius: 4,
    padding: '8px 24px',
    marginTop: 10,
    marginBottom: 10,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const CmtGroupItem = ({ isGrid, items, itemPadding, column, renderItem }) => {
  if (isGrid) {
    return <CmtGridList data={items} itemPadding={itemPadding} column={column} renderRow={renderItem} />;
  }

  return <CmtList data={items} renderRow={renderItem} />;
};

const CmtGroupListItem = ({ isGrid, itemPadding, column, isExpandable, group, items, renderHeader, renderItem }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (isExpandable) {
    return (
      <React.Fragment>
        <div className={clsx(classes.collapseHeader, 'CmtGroupListItem-collapseHeader')} onClick={handleExpandClick}>
          <div>{renderHeader(group)}</div>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            edge="end"
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more">
            <ExpandMoreIcon />
          </IconButton>
        </div>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CmtGroupItem
            isGrid={isGrid}
            items={items[group.id]}
            itemPadding={itemPadding}
            column={column}
            renderItem={renderItem}
          />
        </Collapse>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {renderHeader(group)}
      <CmtGroupItem
        isGrid={isGrid}
        items={items[group.id]}
        itemPadding={itemPadding}
        column={column}
        renderItem={renderItem}
      />
    </React.Fragment>
  );
};

export default CmtGroupListItem;
