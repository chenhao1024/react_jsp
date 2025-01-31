import React from 'react'
import { BrowserRouter as Router, Route, Link  } from "react-router-dom";
import Reactpage from './video/ReactPage'
import Vue from './video/Vue'
import Flutter from './video/Flutter'

function Video() {
    return (
        <div>
            <Router>
            <div className="topNav">
                <ul>
                    <li><Link to="/video/reactpage/">React教程</Link></li>
                    <li><Link to="/video/vue/">Vue教程</Link></li>
                    <li><Link to="/video/flutter/">Flutter教程</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>视频教程</h3></div>
                
                    <Route exact path="/video/" component={Reactpage} />
                    <Route path="/video/reactpage/" component={Reactpage} />
                    <Route path="/video/vue/" component={Vue} />
                    <Route path="/video/flutter/" component={Flutter} />
                
            </div>
            </Router>
        </div>
    )
}

export default Video;