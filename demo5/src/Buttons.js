import React,{useContext} from 'react'

import {ColorContex,UPDATE_COLER, ColorContext} from './Color'

function Buttons(){
    const {dispatch} = useContext(ColorContext)
    return(
        <div>
            <button onClick={()=>{dispatch({type:UPDATE_COLER,color:'red'})}}>红色</button>
            <button onClick={()=>{dispatch({type:UPDATE_COLER,color:'yellow'})}}>黄色</button>
        </div>
    )
}

export default Buttons