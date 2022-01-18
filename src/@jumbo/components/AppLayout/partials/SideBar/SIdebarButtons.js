import React, { useContext } from 'react';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import FlagIcon from '@mui/icons-material/Flag';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import GitHubIcon from '@mui/icons-material/GitHub';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';
import { lighten } from '@mui/material';
import SidebarThemeContext from '../../../../../@coremat/CmtLayouts/SidebarThemeContext/SidebarThemeContext';

const useStyles = makeStyles((theme) => ({
  list: {
    padding: '30px 24px',
    marginTop: 10,
    '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
      padding: '30px 20px',
    },
  },
  listItem: {
    borderRadius: theme.shape.borderRadius,
    transition: 'all 0.3s ease',

    '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
      width: 40,
      height: 40,
      padding: 3,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& .MuiListItemIcon-root': {
        marginTop: 0,
      },
    },
    '&:not(:last-child)': {
      marginBottom: 16,
    },

    '& .MuiListItemIcon-root': {
      minWidth: 'auto',
      color: lighten(theme.palette.common.black, 0.5),
    },
    '& .MuiListItemText-root': {
      marginLeft: 20,

      '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
        display: 'none',
      },
    },
  },
}));

const buttons = [
  {
    title: {
      text: 'Documentations',
      color: '#5D9405',
    },
    icon: <ImportContactsIcon />,
    backgroundColor: '#D7F5B1',
    link: 'https://docs-jumbo.g-axon.work/',
  },
  {
    title: {
      text: 'Changelog',
      color: '#384CC4',
    },
    icon: <RotateLeftIcon />,
    backgroundColor: '#EAEDFF',
    link: 'https://docs-jumbo.g-axon.work/settings/change-logs',
  },
  {
    title: {
      text: 'Raise a ticket',
      color: '#019592',
    },
    subTitle: {
      text: 'Avg. response time 18 hrs.',
      color: '#00C4B4',
    },
    icon: <FlagIcon />,
    backgroundColor: '#D8FFF7',
    link: 'https://themeforest.net/item/react-material-bootstrap-4-admin-template/20978545/support',
  },
  {
    title: {
      text: 'Join Community',
      color: '#D36F1A',
    },
    subTitle: {
      text: 'Join 1000+ memers.',
      color: '#FF8C00',
    },
    icon: <GroupWorkIcon />,
    backgroundColor: '#FFF1D2',
    link: 'https://jumbo-react.slack.com/join/shared_invite/enQtNTQyMTA4MDk5NjIwLWFiYjk0YzBmY2E4MTRmOGQwOGE4ZWNkNTFmMjBiZGU5ZjY5ZmYyOTgwYjgzZjM5MWIxMmY5ZjE5M2UxMTkwOGE#/',
  },
  {
    title: {
      text: 'Github Access',
      color: '#0356AF',
    },
    subTitle: {
      text: 'Get connected with Github.',
      color: '#0795F4',
    },
    icon: <GitHubIcon />,
    backgroundColor: '#E3F9FF',
    link: 'http://github.g-axon.com/index.php?repo=gaxon-lab/jumbo-react-5.x.x',
  },
];

const SidebarButtons = () => {
  const { sidebarTheme } = useContext(SidebarThemeContext);
  const classes = useStyles({ sidebarTheme });
  return (
    <List className={classes.list} disablePadding>
      {buttons.map((button, index) => (
        <ListItem
          key={index}
          alignItems="flex-start"
          button
          component="a"
          href={button.link}
          target="_blank"
          style={{
            backgroundColor: button.backgroundColor,
            color: button.title.color,
          }}
          className={classes.listItem}>
          <ListItemIcon style={{ color: button.title.color }}>{button.icon}</ListItemIcon>
          <ListItemText
            primary={button.title.text}
            secondary={button.subTitle ? button.subTitle.text : ''}
            secondaryTypographyProps={{
              style: button.subTitle ? { color: button.subTitle.color } : {},
            }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default SidebarButtons;
