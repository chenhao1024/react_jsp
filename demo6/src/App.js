import React, {useReducer} from 'react';

const myReducer = (state, action) => {
  switch (action.type) {
    case 'countUp':
      return {count: state.count + 1 }
    case 'countDown':
      return {count: state.count > 0 ? state.count - 1 : 0}
    default:
      return state
  }
}

const App=()=>{
  const [state,dispatch] = useReducer(myReducer,{count: 0})
  return(
    <div>
      <button onClick={()=>dispatch({type:'countUp'})}>+1</button>
      <button onClick={()=>dispatch({type:'countDown'})}>-1</button>
      <h1>{state.count > 0 ? state.count : '最低为0,不能再减了'}</h1>
    </div>
  )
}

export default App;
