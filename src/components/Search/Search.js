import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  Grid,
  Icon,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@material-ui/core';

const Search = ({ searchNewsHandler }) => {
  return (
    <Grid container spacing={8} alignItems="flex-end" justify="center">
      <Grid item>
        <Icon onClick={searchNewsHandler}>search</Icon>
      </Grid>
      <Grid item>
        <TextField
          id="search"
          label="Search news"
          type="search"
          onKeyPress={searchNewsHandler}
          margin="normal"
        />
      </Grid>
      <Grid item>
        <FormLabel component="legend" />
        <RadioGroup
          defaultValue="keyword"
          aria-label="searchby"
          name="customized-radios"
        >
          <FormControlLabel
            value="keyword"
            control={<Radio color="primary" />}
            label="keyword"
          />
          <FormControlLabel
            value="phrase"
            control={<Radio color="primary" />}
            label="phrase"
          />
        </RadioGroup>
      </Grid>
    </Grid>
  );
};

Search.propTypes = {
  searchNewsHandler: PropTypes.func.isRequired,
};

export default Search;
