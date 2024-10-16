import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import AllPost from './post/AllPost';

function Content() {

  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route path="/" component={Dashboard} /> 
            <Route path="/post" component={AllPost} /> 
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default Content