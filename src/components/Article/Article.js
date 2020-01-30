import React from 'react';
import PropTypes from 'prop-types';
import { Card, Grid, Button } from '@material-ui/core';
import { VisibilityOffOutlined } from '@material-ui/icons';

function Article({ title, index, hideArticleHandler }) {
  console.log('title', title);
  return (
    <Grid item xs={12} sm={6}>
      <Card className="card">
        <div className="news-info">
          <h2 className="title">{title}</h2>
          <Button
            size="small"
            onClick={() => hideArticleHandler(index)}
            variant="contained"
            color="red"
          >
            <VisibilityOffOutlined />
          </Button>
        </div>
      </Card>
    </Grid>
  );
}

Article.defaultProps = {
  title: '',
  index: 0,
  hideArticleHandler: () => {},
};

Article.propTypes = {
  title: PropTypes.string,
  index: PropTypes.number,
  hideArticleHandler: PropTypes.func,
};

export default Article;
