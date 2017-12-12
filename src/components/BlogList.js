import React from 'react';
import { connect } from 'react-redux';
import Blog from './Blog';

const filtered = (Blogs, filter) => {
  switch (filter) {
    case 'All':
      return Blogs;
    case 'Active':
      return Blogs.filter( t => !t.complete )
    case 'Completed':
      return Blogs.filter( t => t.complete )
  }
}

const BlogList = ({ blogs, filter }) => (
  <ul>
    { filtered(blogs, filter).map( (t) => {
        return ( <Blog key={t.id} {...t} /> )
      })
    }
  </ul>
)

const mapStateToProps = (state) => {
  return { Blogs: state.Blogs, filter: state.filter }
}

export default connect(mapStateToProps)(BlogList)