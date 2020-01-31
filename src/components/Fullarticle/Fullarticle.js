/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

// eslint-disable-next-line react/prop-types
function Fullarticle({ title, index, hideArticleHandler, data, match }) {
  const [article, setArticle] = useState({ title: '' });

  useEffect(() => {
    setArticle(data.find(item => item.id.toString() === match.params.newsId));
  }, [data, match.params.newsId]);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('article', article);
  }, [article]);

  return (
    <Grid item xs={12}>
      {article && <h3>{article.title}</h3>}
    </Grid>
  );
}

Fullarticle.defaultProps = {
  title: '',
  index: 0,
  hideArticleHandler: () => {},
};

Fullarticle.propTypes = {
  title: PropTypes.string,
  index: PropTypes.number,
  hideArticleHandler: PropTypes.func,
};

export default Fullarticle;
