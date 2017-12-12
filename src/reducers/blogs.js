const Blogs = ( state = [], action ) => {
    switch(action.type) {
      case 'Blogs':
        return action.Blogs
      case 'ADD_Blog':
        return [action.Blog, ...state];
      case 'TOGGLE_Blog':
        return state.map( Blog => {
          if (Blog.id === action.id)
            return {...Blog, complete: !Blog.complete}
          return Blog
        })
      default:
        return state
    }
  }
  
  export default Blogs;