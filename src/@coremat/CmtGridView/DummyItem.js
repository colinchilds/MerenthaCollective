import React from 'react';

import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';

const DummyItem = ({ item }) => (
  <ListItem key={item} style={{ backgroundColor: 'red' }}>
    <ListItemAvatar>
      <Avatar>
        <ImageIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary={'Photos - ' + item} secondary="Jan 9, 2014" />
  </ListItem>
);
export default DummyItem;
