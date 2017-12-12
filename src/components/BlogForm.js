import React from 'react';
import { connect } from 'react-redux';

const BlogForm = ({ dispatch, nextId }) => {
  let input;

  return (
    <div>
      <h3>Add A Blog</h3>
      <form
        onSubmit={ e => {
          e.preventDefault();
          dispatch({ 
            type: 'ADD_BLOG', 
            Blog: { name: input.value, id: nextId, complete: false }
          })
          dispatch({ type: 'INC_ID' })
          input.value = null;
        }}
       >
         <input ref={ n => input = n } />
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { nextId: state.nextId }
}

export default connect(mapStateToProps)(BlogForm);