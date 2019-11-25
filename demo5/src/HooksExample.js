import React, { useState, useEffect } from 'react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index() {
    useEffect(() => {
        console.log('useEffect=>老弟，你来了！Index页面')
        return ()=>{
            console.log('老弟，你走了!Index页面')
        }
    },[]
    )
    return <h2>sdfsdfsdfsdfindex</h2>
}
function List() {
    useEffect(() => {
        console.log('useEffect=>老弟，你来了！List页面')
        return ()=>{
            console.log('sfsfsdfsdfsdf')
        }
    },[])
    return <h2>List-Page</h2>
}

const Example = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(`you click ${count} times`)
        return ()=>{
            console.log('====================')
        }
    },[count])
    return (
        <div>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => { setCount(count + 1) }}>click me</button>
            </div>
            <Router>
                <ul>
                    <li>
                        <Link to='/'>首页</Link>
                    </li>
                    <li>
                        <Link to='/list'>列表</Link>
                    </li>
                </ul>
                <Route path="/" exact component={Index}></Route>
                <Route path="/List" component={List}></Route>
            </Router>
        </div>
    )


}


export default Example