import React, { Component } from 'react'

import { Input, Button, List } from 'antd'

import store from './store/index'



import {changeInputAction, addItemAction, deleteItemAction} from './store/actionCreators'


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        console.log(store.getState())
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        // this.deletBtn = this.deletBtn.bind(this)
        store.subscribe(this.storeChange)
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
            <div className='todo_wrap'>
                <Input placeholder={this.state.inputValue} className='todo_input' onChange={this.changeInputValue} value={this.state.inputValue} />
                <Button type='primary' onClick={this.clickBtn}>增加</Button>
                <div className='todo_list'>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => (<List.Item onClick={this.deletBtn.bind(this,index)}>{item}
                        {/* <Button type='danger' onClick={this.deletBtn(index)}>删除</Button> */}
                        </List.Item>)}

                    />
                </div>
            </div>
        );
    }
}

export default TodoList;