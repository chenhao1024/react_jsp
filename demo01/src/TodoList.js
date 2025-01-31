import React, { Component } from 'react'

import TodoListUI from './StatelessTodoListUI'

import store from './store/index'


import './mockdata/mockdata'


import {changeInputAction, addItemAction, deleteItemAction, getTodoList} from './store/actionCreators'


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        console.log(store.getState())
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deletBtn = this.deletBtn.bind(this)
        store.subscribe(this.storeChange)
    }
    componentDidMount(){
        const action = getTodoList()
        store.dispatch(action)
    }
    changeInputValue(e) {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    storeChange() {
        this.setState(store.getState())
    }
    clickBtn() {
        const action = addItemAction()
        store.dispatch(action)
    }
    deletBtn(index) {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
    render() {
        return (
            <TodoListUI 
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                deletBtn={this.deletBtn}
            />
        );
    }
}

export default TodoList;