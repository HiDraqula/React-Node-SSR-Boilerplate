import React from 'react'
import { StaticRouter } from 'react-router'

// import { Provider } from 'react-redux'
// import store from './store/store';

// import {Route} from 'react-router-dom'
// import Index from './index/index'
// import About from './about/about'
import Nav from './All/Nav'
import Routes from './Routes';

export default function Root(props) {
    // console.log(props)
    return (
        // <Provider store={store}>
            <StaticRouter location={props.url} >
                <Nav />
                <Routes />
                {/* <Route path='/' exact render={() => <Index />} />
                <Route path='/About' render={() => <About />} /> */}
                
            </StaticRouter>
        // </Provider>

    )
}