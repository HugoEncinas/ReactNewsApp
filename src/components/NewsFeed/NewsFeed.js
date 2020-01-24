// Component with basic useEffect hooks as example, feel free to copy and rename

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Typography } from '@material-ui/core';
import { actionExample } from '../../redux/actions';
import Search from '../Search';

function NewsFeed({ prop1, prop2 }) {
  const [searchValue, setSearchValue] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Component mounted');
    setState({});
    return () => {
      // eslint-disable-next-line no-console
      console.log('Component will unmount');
    };
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Component mounted or updated');
  });

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Property prop1 is set or changed');
  }, [prop1]);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Property prop2 is set or changed');
  }, [prop2]);

  const searchNewsHandler = event => {
    console.log(event);
    if (event.type === 'click' || event.charCode === 13) {
      const search = document.querySelector('#search');
      const searchWord = search.value.toLowerCase();
      search.value = '';
      setSearchValue(searchWord);
      console.log(searchValue);
    }
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Typography variant="h3">News</Typography>
        <Search searchNewsHandler={searchNewsHandler} />
      </Container>
    </div>
  );
}

NewsFeed.defaultProps = {
  prop2: '',
};

NewsFeed.propTypes = {
  prop1: PropTypes.bool.isRequired,
  prop2: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    stateOption1: state.reducerExample.stateOption1,
  };
};

// eslint-disable-next-line prettier/prettier
export default connect(
  mapStateToProps,
  { actionExample }
)(NewsFeed);
