import Main from './Components/MainPage'
import {useReducer} from 'react'
import './tailwind.css'
const reducer = (state,action)=>{
  return state+action;
}

function App() {
const[value,dispatch] = useReducer(reducer,0);

  return (
    <div className='bg-red-100'>
      <Main />
     <h2 onClick={()=>dispatch(1)}>+</h2>
     <h2 onClick={()=>dispatch(-1)}>-</h2>
      
     <h2>{value}</h2>
     <h2>SECOND</h2>
    </div>
  );
}

export default App;
