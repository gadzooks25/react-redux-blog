import React, { Component } from 'react';
import BlogForm from './BlogForm';
import BlogList from './BlogList';
import Footer from './Footer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 render() {
 return (
   <div className="App">
     <BlogForm />
     <BlogList />
     <Footer />
    </div>
   );
  }
}

export default App;