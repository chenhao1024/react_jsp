import React, { useContext } from 'react'
import { ColorContext } from './Color'

function ShowArea() {
    const { color } = useContext(ColorContext)
    return (<div style={{ color: color }}>字体颜色为{color}</div>)
}

export default ShowArea