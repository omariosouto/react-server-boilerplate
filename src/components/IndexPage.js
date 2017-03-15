'use strict';

import React from 'react';
import posts from '../data/posts';
import { Link } from 'react-router';

export default class IndexPage extends React.Component {
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
      <div className="home">
          <div className="container">
            <h1 className="text-center">This is the home page of our React Template</h1>
            {authors.map( author => {
              return (
                  <div key={author}>
                    <li>
                      <Link to={`author/${author}`}>
                        {author}
                      </Link>
                    </li>
                  </div>
                )
            })}
          </div>
      </div>
    );
  }
}
