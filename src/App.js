import logo from './logo.svg';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { AsyncAddIncrementAction, addCashAction, astyncAddCashAction, getCashAction,AsyncAddDecrementAction } from './store/cashReducer';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';


function App() {
  const dispatch=useDispatch()
  const count=useSelector(state=> state.count.cash)
  const users=useSelector(state=>state.customer.users)

 

  return (
    <div className="App">
      <div style={{fontSize:"3rem"}}>{count}</div>  
      <button onClick={()=>{dispatch(AsyncAddIncrementAction())}}>+ number</button>
      <button onClick={()=>{dispatch(AsyncAddDecrementAction())}}>-number</button>
      <button >+customer</button>
      <button >Clients from db</button>
        {users.length>0?
          <div>
            {users.map(user=>
              <div >{user.name}</div>)}
          </div>
          :
          <div style={{fontSize:"2rem"}}>
            No clients
          </div>}
    </div>
  );
}

export default App;
