import React from 'react'
import {Route} from 'react-router-dom'

import Index from './index/index'
import About from './about/about'

export default function(){
    return(
        <>
        <Route path='/' exact render={() => <Index />} />
        <Route path='/About' render={() => <About />} />
        {/* <Route path="/Awards" render={() => <Awards />} />
                <Route path="/About" render={() => <About />} />
                <Route path="/Services" render={() => <Service />} />
                <Route path="/CaseStudy" exact render={() => <Casestudy />} />
                <Route path="/CaseStudy/:id" render={(props) => <CasestudyP id={props.match.params.id} />} />
                <Route path="/Blog" exact render={() => <Blog />} />
                <Route path="/Blog/:id" render={(props) => <BlogP id={props.match.params.id} />} /> */}
        </>
    )
}