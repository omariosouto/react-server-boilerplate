'use strict';

import React from 'react';
import { Link } from 'react-router';
import posts from '../data/posts';

export default class AuthorsMenu extends React.Component {
  unique(value, index, self) { 
      return self.indexOf(value) === index;
  }
  filterAuthors () {
    const filterAuthors = posts.map( postData => postData.userId ).filter( this.unique );
    return filterAuthors;
  }
  render() {
    const authors = this.filterAuthors();
    return (
      <nav className="authors-menu">
        {authors.map(author => {
          return <Link key={author} to={`/author/${author}`} activeClassName="active">
            Author - {author}
          </Link>;
        })}
      </nav>
    );
  }
}
