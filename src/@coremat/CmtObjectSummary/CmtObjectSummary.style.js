import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    '&.vertical': {
      flexDirection: 'column',
      textAlign: 'center',
    },
    '&.horizontal': {
      '& $userInfo': {
        marginLeft: 15,
        marginTop: 0,
      },
    },
  },
  badgeRoot: {
    backgroundColor: 'white',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.15)',
    borderRadius: 30,
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
  },
  badgeAvatarRoot: {
    position: 'relative',
    '&.top.center': {
      marginTop: 14,
    },
    '&.top.center .MuiBadge-badge': {
      top: 0,
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    '&.bottom.left, &.bottom.center, &.bottom.right': {
      marginBottom: 14,
      '& .vertical': {
        paddingBottom: 16,
      },
    },
    '&.bottom.center .MuiBadge-badge': {
      bottom: 0,
      left: '50%',
      transform: 'translate(-50%, 50%)',
    },
  },
  userInfo: {
    position: 'relative',
    marginTop: 6,
  },
  title: {
    fontSize: 14,
    color: theme.palette.text.primary,
    margin: 0,
  },
  subTitle: {
    fontSize: 12,
    color: theme.palette.text.secondary,
    margin: 0,
  },
}));

export default useStyles;
