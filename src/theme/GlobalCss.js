import makeStyles from '@mui/styles/makeStyles';

let paddingClasses = {};
let marginClasses = {};
for (let count = 1; count <= 8; count++) {
  paddingClasses['.pt-' + count] = { paddingTop: count * 4 + 'px !important' };
  paddingClasses['.pb-' + count] = { paddingBottom: count * 4 + 'px !important' };
  paddingClasses['.pl-' + count] = { paddingLeft: count * 4 + 'px !important' };
  paddingClasses['.pr-' + count] = { paddingRight: count * 4 + 'px !important' };
  marginClasses[`.ml-${count}`] = { marginLeft: `${count * 4}px !important` };
  marginClasses[`.mr-${count}`] = { marginRight: `${count * 4}px !important` };
  marginClasses[`.mt-${count}`] = { marginTop: `${count * 4}px !important` };
  marginClasses[`.mb-${count}`] = { marginBottom: `${count * 4}px !important` };
}

const globalStyles = makeStyles((theme) => ({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      fontSize: 14,
    },
    a: {
      textDecoration: 'none',
      '&:hover,&:focus': {
        textDecoration: 'none',
      },
      '&.disable-link': {
        pointerEvents: 'none',
        cursor: 'default',
        [theme.breakpoints.down('sm')]: {
          pointerEvents: 'inherit',
          cursor: 'pointer',
        },
      },
    },
    img: {
      maxWidth: '100%',
    },
    '.pointer': {
      cursor: 'pointer',
    },
    '.rounded': {
      borderRadius: '50%',
    },
    '.Cmt-table-responsive': {
      minHeight: '.01%',
      overflowX: 'auto',
      [theme.breakpoints.down('md')]: {
        width: '100%',
        marginBottom: 15,
        overflowY: 'hidden',
        border: `1px solid ${theme.palette.borderColor.main}`,
        '& > table': {
          marginBottom: 0,
          '& > thead > tr > th': {
            paddingTop: 8,
          },
          '& > thead > tr > th, > tbody > tr > th, > tfoot > tr > th, thead > tr > td, tbody > tr > td, tfoot > tr > td': {
            whiteSpace: 'nowrap',
          },
        },
      },
    },
    '.dropzone': {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(10, 5),
      border: `2px dashed ${theme.palette.borderColor.main}`,
      borderRadius: 2,
      backgroundColor: theme.palette.background.default,
      outline: 'none',
      transition: 'border .24s ease-in-out',
    },
    '.swal2-shown .swal2-container': {
      zIndex: 1104,
    },
    '.swal2-container .swal2-popup, .swal2-container .swal2-popup.swal2-toast': {
      backgroundColor: theme.palette.popupColor.main,
      color: theme.palette.text.primary,
    },
    '.swal2-container .swal2-content, .swal2-container .swal2-title': {
      color: theme.palette.text.primary,
    },
    '.swal2-container .swal2-footer a': {
      color: theme.palette.primary.main,
    },
    '.swal2-container .swal2-close:focus': {
      outline: 'none',
    },
    pre: {
      margin: '15px',
    },
    ...paddingClasses,
    ...marginClasses,
  },
}));

export default globalStyles;
