
import {put,takeEvery} from 'redux-saga/effects'
import { ASYNC_DECREMENT, ASYNC_INCREMENT, addDecrementAction, addIncrementAction } from '../store/cashReducer'

const delay=(ms)=>new Promise(res=>setTimeout(res,ms))


function* incrementWorker(){
    yield(delay(1000))
    yield put(addIncrementAction())
}

function* decrementWorker(){
    yield(delay(100))
    yield put(addDecrementAction())
}



export function* countWatcher(){
    yield takeEvery(ASYNC_INCREMENT,incrementWorker)
    yield takeEvery(ASYNC_DECREMENT,decrementWorker)
}