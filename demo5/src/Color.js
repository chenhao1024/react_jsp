import React,{createContext,useReducer} from 'react'

export const ColorContext = createContext({})

export const UPDATE_COLER = "UPDATE_COLER"

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_COLER':
            return action.color
        default:
            return state
    }
}

export const Color = props=>{
    const [color,dispatch]=useReducer(reducer,'blue')
    return(
        <ColorContext.Provider value={{color,dispatch}}>
            {props.children}
        </ColorContext.Provider>
    )
}
