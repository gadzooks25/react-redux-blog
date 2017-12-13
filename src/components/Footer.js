import React from 'react';
import FilterLink from './FilterLink'

const Footer = () => (
  <div>
    <FilterLink>All</FilterLink>
    {' '}
    <FilterLink>Check</FilterLink>
    {' '}
    <FilterLink>Still-Needed</FilterLink>
  </div>
)

export default Footer