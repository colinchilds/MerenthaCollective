import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';

import GridContainer from '../../GridContainer';

const useStyles = makeStyles(theme => ({
  textPrimary: {
    color: theme.palette.primary.main,
  },
  mbSpace: {
    marginBottom: 16,
  },
}));

const currencies = [
  {
    name: 'USD',
    code: 'usd',
  },
  {
    name: 'INR',
    code: 'inr',
  },
  {
    name: 'EURO',
    code: 'euro',
  },
];

const currencyRates = {
  'usd-inr': 74,
  'inr-usd': 0.0135,
  'usd-euro': 0.89,
  'euro-usd': 1.13,
  'inr-euro': 0.0117,
  'euro-inr': 85,
  'inr-inr': 1,
  'usd-usd': 1,
  'euro-euro': 1,
};

const ConversionResult = ({ fromCurrency, toCurrency, amount, convertedValue, currencyRate }) => {
  const classes = useStyles();
  return (
    <div>
      <Box component="p" mb={4} fontSize={12} color="text.primary">
        {`${amount} ${fromCurrency.name} equals`}
      </Box>
      <Typography component="div" variant="h1" className={clsx(classes.textPrimary, classes.mbSpace)}>
        {convertedValue + ' ' + toCurrency.name}
      </Typography>
      <Box component="p" fontSize={12} display="flex" alignItems="center" color="text.secondary" mb={6}>
        <span className="mr-2">
          {`@ 1 ${fromCurrency.name}`} = <span className={classes.textPrimary}>{`${currencyRate} ${toCurrency.name}`}</span>
        </span>
      </Box>
    </div>
  );
};

const ConversionControls = ({ amount, setAmount, fromCurrency, setFromCurrency, toCurrency, setToCurrency }) => {
  return (
    <Box pb={{ xs: 6, md: 10, xl: 16 }}>
      <GridContainer>
        <Grid item xs={12} sm={4}>
          <FormControl style={{ width: '100%' }} variant="outlined">
            <InputLabel>From</InputLabel>
            <Select
              label="From"
              value={fromCurrency}
              onChange={event => setFromCurrency(event.target.value)}
              inputProps={{
                name: 'from',
                id: 'demo-controlled-open-select',
              }}>
              {currencies.map((currency, index) => (
                <MenuItem key={index} value={currency}>
                  {currency.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={4}>
          <FormControl style={{ width: '100%' }} variant="outlined">
            <InputLabel>To</InputLabel>
            <Select
              label="To"
              value={toCurrency}
              onChange={event => setToCurrency(event.target.value)}
              inputProps={{
                name: 'to',
                id: 'demo-controlled-open-select-to',
              }}>
              {currencies.map((currency, index) => (
                <MenuItem key={index} value={currency}>
                  {currency.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            variant="outlined"
            label="Amount"
            margin="normal"
            type="number"
            fullWidth
            style={{
              marginTop: 0,
              marginBottom: 0,
            }}
            value={amount}
            onChange={e => setAmount(parseFloat(e.target.value))}
          />
        </Grid>
      </GridContainer>
    </Box>
  );
};

const CurrencyCalculator = ({ title, titleProps, className }) => {
  const [fromCurrency, setFromCurrency] = useState(currencies[0]);
  const [toCurrency, setToCurrency] = useState(currencies[1]);
  const [amount, setAmount] = useState(0);
  const [convertedValue, setConvertedValue] = useState(0);
  const [currencyRate, setCurrencyRate] = useState(1);

  useEffect(() => {
    setCurrencyRate(currencyRates[`${fromCurrency.code}-${toCurrency.code}`]);
    setConvertedValue(amount * currencyRate);
  }, [fromCurrency, toCurrency, amount, currencyRate]);

  const resetCalculator = () => {
    setFromCurrency(currencies[0]);
    setToCurrency(currencies[1]);
    setAmount(0);
  };

  return (
    <CmtCard className={className}>
      {title && <CmtCardHeader title={title} titleProps={titleProps} />}
      <CmtCardContent>
        <div>
          <ConversionResult
            {...{
              fromCurrency,
              toCurrency,
              amount,
              convertedValue,
              currencyRate,
            }}
          />
          <ConversionControls
            {...{
              fromCurrency,
              toCurrency,
              setFromCurrency,
              setToCurrency,
              amount,
              setAmount,
            }}
          />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button variant="outlined" size={'large'} onClick={resetCalculator}>
              Reset
            </Button>
          </div>
        </div>
      </CmtCardContent>
    </CmtCard>
  );
};

export default CurrencyCalculator;
