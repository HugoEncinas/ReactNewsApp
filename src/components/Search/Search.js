import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Grid, Icon } from '@material-ui/core';

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
    </Grid>
  );
};

Search.propTypes = {
  searchNewsHandler: PropTypes.func.isRequired,
};

export default Search;
