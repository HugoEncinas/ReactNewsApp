// Component with basic useEffect hooks as example, feel free to copy and rename

import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Typography, Grid } from '@material-ui/core';
import { actionExample } from '../../redux/actions';
import Search from '../Search';
import Article from '../Article';
import NewsService from '../../services/newsService';

function NewsFeed() {
  const [searchValue, setSearchValue] = useState('test');
  // eslint-disable-next-line no-unused-vars
  const [news, setNews] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Component mounted');
    return () => {
      // eslint-disable-next-line no-console
      console.log('Component will unmount');
    };
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Component mounted or updated');
  });

  const searchNewsHandler = event => {
    if (event.type === 'click' || event.charCode === 13) {
      const search = document.querySelector('#search');
      const searchWord = search.value.toLowerCase();
      search.value = '';
      setSearchValue(searchWord);
      console.log(searchValue);
    }
  };

  useEffect(() => {
    async function searchNews() {
      const newsFromSearch = await NewsService.getNews(searchValue);
      console.log('newsFromSearch', newsFromSearch);
      setNews([...newsFromSearch]);
    }
    if (searchValue) {
      searchNews();
    }
  }, [searchValue]);

  const hideArticleHandler = index => {
    console.log(index);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Typography variant="h3">News</Typography>
        <Search searchNewsHandler={searchNewsHandler} />
        <Grid container spacing={16}>
          {news.map((article, index) => {
            return (
              <Article
                title={article.title}
                index={index}
                hideArticleHandler={hideArticleHandler}
              />
            );
          })}
          {news.length === 0 && <p>No news</p>}
        </Grid>
      </Container>
    </div>
  );
}

// NewsFeed.defaultProps = {
//   prop2: '',
// };

// NewsFeed.propTypes = {
//   prop1: PropTypes.bool.isRequired,
//   prop2: PropTypes.string,
// };

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
