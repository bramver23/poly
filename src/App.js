import React from 'react';
import './App.css';
import Nav from './comp/nav';
//import { Switch, Route } from 'react-router-dom';
import GetPage from './comp/pages/getPage'
import PostPage from './comp/pages/postPage'
function App() {
  return (
    <div className="App">
      <Nav/>
      {/* <Route render={({location})=>( */}
      {/* <TransitionGroup> */}
        <GetPage/>
        <PostPage className="post"/>
      {/* </TransitionGroup>     */}

    </div>
  );
}

export default App;
