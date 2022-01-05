import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import { setAuthUser, setForgetPassMailSent, updateLoadUser } from '../../../redux/actions/Auth';
import { Box } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useDispatch } from 'react-redux';
import { auth, facebookAuthProvider, githubAuthProvider, googleAuthProvider, twitterAuthProvider } from './config';
import { fetchError, fetchStart, fetchSuccess } from '../../../redux/actions';

const useStyles = makeStyles(theme => ({
  iconBtn: {
    '&:hover, &:focus': {
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.down('xs')]: {
      padding: 6,
    },
  },
}));

const SocialMediaIcons = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const signInUserWithGoogle = () => {
    dispatch(fetchStart());
    try {
      auth
        .signInWithPopup(googleAuthProvider)
        .then(data => {
          dispatch(fetchSuccess());
          dispatch(setAuthUser(data.user));
        })
        .catch(error => {
          dispatch(fetchError(error.message));
        });
    } catch (error) {
      dispatch(fetchError(error.message));
    }
  };

  const signInUserWithGithub = () => {
    dispatch(fetchStart());
    try {
      auth
        .signInWithPopup(githubAuthProvider)
        .then(data => {
          dispatch(fetchSuccess());
          dispatch(setAuthUser(data.user));
        })
        .catch(error => {
          dispatch(fetchError(error.message));
        });
    } catch (error) {
      dispatch(fetchError(error.message));
    }
  };

  const signInUserWithFacebook = () => {
    dispatch(fetchStart());
    try {
      auth
        .signInWithPopup(facebookAuthProvider)
        .then(data => {
          dispatch(fetchSuccess());
          dispatch(setAuthUser(data.user));
        })
        .catch(error => {
          dispatch(fetchError(error.message));
        });
    } catch (error) {
      dispatch(fetchError(error.message));
    }
  };

  const signInUserWithTwitter = () => {
    dispatch(fetchStart());
    try {
      auth
        .signInWithPopup(twitterAuthProvider)
        .then(data => {
          dispatch(fetchSuccess());
          dispatch(setAuthUser(data.user));
        })
        .catch(error => {
          dispatch(fetchError(error.message));
        });
    } catch (error) {
      dispatch(fetchError(error.message));
    }
  };

  return (
    <Box display="flex" alignItems="center">
      <IconButton className={classes.iconBtn} onClick={signInUserWithFacebook}>
        <FacebookIcon />
      </IconButton>
      <IconButton className={classes.iconBtn} onClick={signInUserWithTwitter}>
        <TwitterIcon />
      </IconButton>
      <IconButton className={classes.iconBtn} onClick={signInUserWithGoogle}>
        <FacebookIcon />
      </IconButton>
      <IconButton className={classes.iconBtn} onClick={signInUserWithGithub}>
        <GitHubIcon />
      </IconButton>
    </Box>
  );
};

const Firebase = {
  onRegister: ({ email, password }) => {
    return dispatch => {
      dispatch(fetchStart());
      try {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then(data => {
            dispatch(fetchSuccess());
            dispatch(setAuthUser(data));
          })
          .catch(error => {
            dispatch(fetchError(error.message));
          });
      } catch (error) {
        dispatch(fetchError(error.message));
      }
    };
  },

  onLogin: ({ email, password }) => {
    return dispatch => {
      try {
        dispatch(fetchStart());
        auth
          .signInWithEmailAndPassword(email, password)
          .then(data => {
            dispatch(fetchSuccess());
            dispatch(setAuthUser(data));
          })
          .catch(error => {
            dispatch(fetchError(error.message));
          });
      } catch (error) {
        dispatch(fetchError(error.message));
      }
    };
  },

  onLogout: () => {
    return dispatch => {
      dispatch(fetchStart());
      try {
        auth
          .signOut()
          .then(data => {
            dispatch(fetchSuccess());
            dispatch(setAuthUser(null));
          })
          .catch(error => {
            dispatch(fetchError(error.message));
          });
      } catch (error) {
        dispatch(fetchError(error.message));
      }
    };
  },

  getAuthUser: () => {
    return dispatch => {
      dispatch(fetchStart());
      dispatch(updateLoadUser(false));
      try {
        auth.onAuthStateChanged(authUser => {
          dispatch(fetchSuccess());
          if (authUser) {
            dispatch(
              setAuthUser({
                uid: authUser.uid,
                displayName: authUser.displayName,
                email: authUser.email,
                photoURL: authUser.photoURL,
                token: authUser.refreshToken,
              }),
            );
          } else {
            dispatch(updateLoadUser(true));
            dispatch(updateLoadUser(true));
          }
        });
      } catch (error) {
        dispatch(updateLoadUser(true));
        dispatch(fetchError(error.message));
      }
    };
  },

  onForgotPassword: () => {
    return dispatch => {
      dispatch(fetchStart());

      setTimeout(() => {
        dispatch(setForgetPassMailSent(true));
        dispatch(fetchSuccess());
      }, 300);
    };
  },

  getSocialMediaIcons: () => {
    return (
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box component="p" fontSize={{ xs: 13, sm: 16 }}>
          Or Login with
        </Box>
        <SocialMediaIcons />
      </Box>
    );
  },
};

export default Firebase;
