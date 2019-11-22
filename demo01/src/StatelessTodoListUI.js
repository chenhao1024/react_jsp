import React from 'react'

import {Input,Button,List} from 'antd'

const TodoListUI = (props)=>{
    return(
        <div className='todo_wrap'>
                <Input placeholder={props.inputValue} className='todo_input' onChange={props.changeInputValue} value={props.inputValue} />
                <Button type='primary' onClick={props.clickBtn}>增加</Button>
                <div className='todo_list'>
                    <List
                        bordered
                        dataSource={props.list}
                        renderItem={(item, index) => (<List.Item onClick={()=>props.deletBtn(index)}>{item}
                        {/* <Button type='danger' onClick={deletBtn(index)}>删除</Button> */}
                        </List.Item>)}

                    />
                </div>
            </div>
    )
}

export default TodoListUI