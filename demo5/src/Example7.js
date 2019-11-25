import React, { useReducer } from 'react'

import ShowArea from './Example6'
import Buttons from './Buttons'
import { Color } from './Color'

function Example7() {
    return (
        <div>
            <Color>
                <ShowArea />
                <Buttons />
            </Color>
        </div>
    )
}

export default Example7