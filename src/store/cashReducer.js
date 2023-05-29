const defaultState={
    cash:0,
  }

export const INCREMENT="INCREMENT"
export const ASYNC_INCREMENT="ASYNC_INCREMENT"
export const DECREMENT="DECREMENT"
export const ASYNC_DECREMENT='ASYNC_DECREMENT'

export const cashReducer=(state=defaultState, action)=>{
    switch(action.type){
      case INCREMENT:
        return {...state, cash:state.cash+1}
      case DECREMENT:
        return {...state, cash:state.cash-1}
      default:
        return state;
    }
  }

  export  const addIncrementAction=()=>({type:INCREMENT})
  export const addDecrementAction=()=>({type:DECREMENT})
  export const AsyncAddIncrementAction=()=>({type:ASYNC_INCREMENT})
  export const AsyncAddDecrementAction=()=>({type:ASYNC_DECREMENT})