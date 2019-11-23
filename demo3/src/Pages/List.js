import React, { Component } from 'react'


class List extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        return (
            <div>
                <h2>List-Page----> {this.state.id}</h2>
            </div>
        )
    }

    componentDidMount() {
        console.log(this.props.match)
        let tempId = this.props.match.params.id
        this.setState({
            id: tempId
        })
    }
}

export default List