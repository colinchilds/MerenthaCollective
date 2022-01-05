import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  cardHeaderRoot: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  titleRoot: {
    fontSize: 12,
    marginBottom: 2,
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightBold,
  },
  iconRoot: {
    fontSize: 14,
    display: 'block',
    marginTop: 4,
  },
}));

export default useStyles;
