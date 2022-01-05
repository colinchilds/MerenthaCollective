import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Collapse, IconButton, Link } from '@material-ui/core';
import { alpha } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import { Alert } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';

import CmtImage from '../../../../@coremat/CmtImage';

import IntlMessages from '../../../utils/IntlMessages';
import { AuhMethods } from '../../../../services/auth';
import ContentLoader from '../../ContentLoader';
import { CurrentAuthMethod } from '../../../constants/AppConstants';
import AuthWrapper from './AuthWrapper';
import { setForgetPassMailSent } from '../../../../redux/actions/Auth';

const useStyles = makeStyles(theme => ({
  authThumb: {
    backgroundColor: alpha(theme.palette.primary.main, 0.12),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    [theme.breakpoints.up('md')]: {
      width: '50%',
      order: 2,
    },
  },
  authContent: {
    padding: 30,
    [theme.breakpoints.up('md')]: {
      order: 1,
      width: props => (props.variant === 'default' ? '50%' : '100%'),
    },
    [theme.breakpoints.up('xl')]: {
      padding: 50,
    },
  },
  titleRoot: {
    marginBottom: 14,
    color: theme.palette.text.primary,
  },
  textFieldRoot: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: alpha(theme.palette.common.dark, 0.12),
    },
  },
  alertRoot: {
    marginBottom: 10,
  },
}));

//variant = 'default', 'standard', 'bgColor'
const ForgotPassword = ({ method = CurrentAuthMethod, variant = 'default', wrapperVariant = 'default' }) => {
  const { send_forget_password_email } = useSelector(({ auth }) => auth);
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = useState('demo@example.com');
  const dispatch = useDispatch();
  const classes = useStyles({ variant });
  const history = useHistory();

  useEffect(() => {
    let timeOutStopper = null;
    if (send_forget_password_email) {
      setOpen(true);

      timeOutStopper = setTimeout(() => {
        dispatch(setForgetPassMailSent(false));
        history.push('/');
      }, 1500);
    }

    return () => {
      if (timeOutStopper) clearTimeout(timeOutStopper);
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [send_forget_password_email]);

  const onSubmit = () => {
    dispatch(AuhMethods[method].onForgotPassword({ email }));
  };

  return (
    <AuthWrapper variant={wrapperVariant}>
      {variant === 'default' ? (
        <div className={classes.authThumb}>
          <CmtImage src={'/images/auth/forgot-img.png'} />
        </div>
      ) : null}
      <div className={classes.authContent}>
        <div className={'mb-7'}>
          <CmtImage src={'/images/logo.png'} />
        </div>
        <Typography component="div" variant="h1" className={classes.titleRoot}>
          ForgotPassword
        </Typography>
        <Collapse in={open}>
          <Alert
            variant="outlined"
            severity="success"
            className={classes.alertRoot}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}>
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }>
            A mail has been sent on your email address with reset password link.
          </Alert>
        </Collapse>
        <form>
          <div className={'mb-5'}>
            <TextField
              label={<IntlMessages id="appModule.email" />}
              fullWidth
              onChange={event => setEmail(event.target.value)}
              defaultValue={email}
              margin="normal"
              variant="outlined"
              className={classes.textFieldRoot}
            />
          </div>
          <div className={'mb-5'}>
            <Button onClick={onSubmit} variant="contained" color="primary">
              <IntlMessages id="appModule.resetPassword" />
            </Button>
          </div>

          <div>
            <Typography>
              Don't remember your email?
              <span className={'ml-2'}>
                <Link href="#">
                  <IntlMessages id="appModule.contactSupport" />
                </Link>
              </span>
            </Typography>
          </div>
        </form>
        <ContentLoader />
      </div>
    </AuthWrapper>
  );
};

export default ForgotPassword;
