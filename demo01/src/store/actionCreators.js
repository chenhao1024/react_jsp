import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST} from './actionTypes'
import store from './index'
import axios from 'axios'

export const changeInputAction = (value)=>({
    type: CHANGE_INPUT,
    value
})
export const addItemAction = ()=>({
    type: ADD_ITEM
})
export const deleteItemAction = (index)=>({
    type: DELETE_ITEM,
    index
})

export const getListAction = (data)=>({
    type: GET_LIST,
    data
})

export const getTodoList = ()=>{
    return ()=>{
        axios.get('http://bbb.com/todolist/data').then((res)=>{
            console.log(res)
            if (res.status === 200) {
                const data = res.data.data
                const action = getListAction(data)
                store.dispatch(action)
            }
        })
    }
}