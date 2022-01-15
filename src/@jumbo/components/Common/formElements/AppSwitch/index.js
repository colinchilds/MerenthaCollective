import React from 'react';
import Switch from '@mui/material/Switch';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import makeStyles from '@mui/styles/makeStyles';
import { FormHelperText } from '@mui/material';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  helperText: {
    marginTop: 0,
  },
}));

const AppSwitch = ({
  name,
  id,
  value,
  label,
  labelPlacement,
  labelProps,
  helperText,
  helperTextProps,
  checked,
  onChange,
  color,
  switchProps,
  ...rest
}) => {
  const classes = useStyles();
  const unique = Math.random()
    .toString(36)
    .slice(2);

  return (
    <Box className={classes.root} {...rest}>
      <Box className={classes.container}>
        {labelPlacement === 'start' && (
          <FormLabel className="pointer" htmlFor={id || name || unique} {...labelProps}>
            {label}
          </FormLabel>
        )}
        <Switch
          name={name}
          id={id || name || unique}
          color={color}
          value={value}
          checked={checked}
          onChange={onChange}
          {...switchProps}
        />
        {labelPlacement !== 'start' && <FormLabel for="1">{label}</FormLabel>}
      </Box>
      {helperText && (
        <FormHelperText className={classes.helperText} {...helperTextProps}>
          {helperText}
        </FormHelperText>
      )}
    </Box>
  );
};

AppSwitch.prototype = {
  name: PropTypes.string,
  id: PropTypes.string,
  checked: PropTypes.bool,
  value: PropTypes.string,
  label: PropTypes.string,
  color: PropTypes.string,
  labelPlacement: PropTypes.string,
  onChange: PropTypes.func,
};

AppSwitch.defaultProps = {
  checked: false,
  color: 'primary',
  labelPlacement: 'start',
};

export default AppSwitch;
