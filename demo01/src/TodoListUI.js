import React, { Component } from 'react'
import { Input, Button, List } from 'antd'

class TodoListUI extends Component{
    render(){
        return (
            <div className='todo_wrap'>
                <Input placeholder={this.props.inputValue} className='todo_input' onChange={this.props.changeInputValue} value={this.props.inputValue} />
                <Button type='primary' onClick={this.props.clickBtn}>增加</Button>
                <div className='todo_list'>
                    <List
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item, index) => (<List.Item onClick={()=>this.props.deletBtn(index)}>{item}
                        {/* <Button type='danger' onClick={this.deletBtn(index)}>删除</Button> */}
                        </List.Item>)}

                    />
                </div>
            </div>
        )
    }
}

export default TodoListUI