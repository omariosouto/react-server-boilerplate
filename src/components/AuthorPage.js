'use strict';

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import posts from '../data/posts';

export default class ProductPage extends React.Component {
  render() {
    const authorID = this.props.params.id;
    const currentAuthorPosts = posts.filter((post) => {
      return post.userId == authorID;
    })
    return (
      <div className="author-page">
        Você está visualizando os posts do author: {authorID}
        {currentAuthorPosts.map( postData => {
          return (
            <div>
              <h1>{postData.title}</h1>
            </div>
          )
        })}
      </div>
    );
  }
}
