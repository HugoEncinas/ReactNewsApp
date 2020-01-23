// Component with basic useEffect hooks as example, feel free to copy and rename

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Typography } from '@material-ui/core';
import { actionExample } from '../../redux/actions';

function NewsFeed({ prop1, prop2 }) {
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

  return (
    <div>
      <Container maxWidth="sm">
        <Typography variant="h3">News</Typography>
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
