import React, { Component } from 'react'

import { Link, Redirect } from 'react-router-dom'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                { cid: 123, title: '技术胖的个人博客-1' },
                { cid: 456, title: '技术胖的个人博客-2' },
                { cid: 789, title: '技术胖的个人博客-3' },
            ]
        }
    }

    render() {
        return (
            <Redirect to='/home' />
            // <ul>
            //     {
            //         this.state.list.map((item, index) => {
            //             return (
            //                 <li key={index}>
            //                     <Link to={'/list/' + item.cid}>{item.title}</Link>

            //                 </li>
            //             )
            //         })
            //     }
            // </ul>
        )
    }
}

export default Index