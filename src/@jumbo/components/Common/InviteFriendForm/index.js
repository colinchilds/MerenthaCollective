import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { Box, Button, Chip, Divider, Fade, TextField, Typography } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import { makeStyles } from '@material-ui/styles';

import AppTextInput from '../formElements/AppTextInput';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';

const useStyles = makeStyles(theme => ({
  divider: {
    flex: 1,
  },
  noBorder: {
    '& fieldset': {
      border: 0,
    },
  },
  inputGroup: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    width: '100%',
  },
  textField: {
    position: 'relative',
    flex: '1 1 auto',
    width: '1%',
    minWidth: 0,

    '&:not(:last-child) .MuiOutlinedInput-root': {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  inputGroupAppend: {
    marginRight: '-1px',
  },
  button: props => ({
    backgroundColor: props.linkCopy ? '#8DCD03' : '#6200EE',
    color: '#fff',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    height: '100%',

    '&:hover': {
      backgroundColor: props.linkCopy ? '#8DCD03' : '#6200EE',
    },
  }),
  successMsg: {
    color: '#8DCD03',
  },
  userIcon: {
    marginBottom: 2,
    '& > svg': {
      color: '#8DCD03',
      height: 55,
      width: 55,
    },
  },
  iconBlock: {
    display: 'block',
  },
}));

const linkStr = 'https://www.example.com/home/';

const CopyShareLink = () => {
  const [linkCopy, setLinkCopy] = useState(false);
  const classes = useStyles({ linkCopy });

  const linkRef = useRef(null);

  const copyToClipboard = () => {
    linkRef.current.select();
    document.execCommand('copy');
    setLinkCopy(true);
    setTimeout(() => {
      setLinkCopy(false);
    }, 5000);
  };

  return (
    <div>
      <Typography gutterBottom component="h6" variant="h6">
        Get link to share
      </Typography>
      <div className={classes.inputGroup}>
        <TextField
          className={classes.textField}
          size="small"
          variant="outlined"
          value={linkStr}
          placeholder="Type name or email address..."
          inputProps={{ ref: linkRef }}
          onFocus={copyToClipboard}
          readOnly
        />
        <div className={classes.inputGroupAppend}>
          <Button className={classes.button} onClick={copyToClipboard}>
            {linkCopy ? <CheckCircleIcon /> : <FileCopyIcon />}
          </Button>
        </div>
      </div>

      {linkCopy && (
        <Fade in={linkCopy}>
          <div style={{ display: 'flex', alignItems: 'center' }} className={clsx(classes.successMsg, 'mt-2')}>
            <span className={'mr-2'}>
              <CheckCircleIcon className={classes.iconBlock} />
            </span>
            <Typography>Link copied!</Typography>
          </div>
        </Fade>
      )}
    </div>
  );
};

const InvitationSuccessMessage = ({ setInviteMore }) => {
  const classes = useStyles();

  return (
    <div className={'mb-4'} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className={classes.userIcon}>
        <PersonOutlinedIcon />
      </div>
      <h4 className={'mb-4'}>Invitations Sent</h4>
      <Button variant="contained" color="primary" onClick={() => setInviteMore(false)}>
        Invite More
      </Button>
    </div>
  );
};

const InviteFriendForm = () => {
  const [invitations, setInvitations] = useState(['Chris Harris', 'Rob Williams']);
  const [hasInvitationSent, setHasInvitationSent] = useState(false);
  const [username, setUsername] = useState('');
  const classes = useStyles();

  const handleChipDelete = item => {
    setInvitations(invitations.filter(chip => chip !== item));
  };

  const handleOnKeyDown = event => {
    if (event.key === 'Enter' && event.target.value) {
      event.target.value.split(',').map(value => {
        if (!invitations.some(item => item === value.trim()) && value.trim() !== '') {
          invitations.push(value.trim());
        }

        return value;
      });

      setInvitations([...invitations]);
      setUsername('');
    }
  };

  const sendInvitation = () => {
    setHasInvitationSent(true);
  };

  useEffect(() => {
    if (hasInvitationSent) {
    }
    setInvitations([]);
    setUsername('');
  }, [hasInvitationSent]);

  return (
    <CmtCardContent>
      {hasInvitationSent ? (
        <Fade in={hasInvitationSent}>
          <InvitationSuccessMessage setInviteMore={setHasInvitationSent} />
        </Fade>
      ) : (
        <Fade in={!hasInvitationSent}>
          <div className={'mb-4'}>
            <Box display="flex" flexWrap="wrap" border={1} borderColor="borderColor.main" borderRadius="borderRadius">
              {invitations.map((item, index) => (
                <Chip key={index} label={item} className={classes.chip} onDelete={() => handleChipDelete(item)} />
              ))}
              <AppTextInput
                fullWidth={false}
                variant="outlined"
                placeholder="Type name or email..."
                value={username}
                onChange={event => setUsername(event.target.value)}
                onKeyDown={handleOnKeyDown}
                className={classes.noBorder}
              />
            </Box>
            <Box my={4}>
              <Button color="primary" variant="contained" disabled={!invitations.length} onClick={sendInvitation}>
                Invite
              </Button>
            </Box>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span className={'mr-2'}>Or</span>
              <Divider className={classes.divider} />
            </div>
          </div>
        </Fade>
      )}
      <CopyShareLink />
    </CmtCardContent>
  );
};

export default InviteFriendForm;
