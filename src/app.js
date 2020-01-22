import React from 'react';
import ReactDOM from 'react-dom';


import { BrowserRouter as Router } from 'react-router-dom';
// import Index from './index/index'
// import About from './about/about'
import Nav from './All/Nav'
import Routes from './Routes';

const All=()=>{
return(
    <>
    <Router>
        <Nav/>
        {/* <Route path='/' render={() => <App />} />
        <Route path='/About' render={() => <App />} /> */}
        <Routes />
        {/* <Route path='/' exact render={() => <Index />} />
        <Route path='/About' render={() => <About />} /> */}
    </Router>
    </>
)
}

ReactDOM.render(<All />, document.getElementById('root'));