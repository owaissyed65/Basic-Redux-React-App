import React from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { actioncreators} from '../State/index'
import { bindActionCreators } from 'redux'
import { useSelector } from 'react-redux'
// import { depositMoney, withdrawMoney } from '../State/action-creator'
const Shop = () => {
  const dispatch = useDispatch();
  const {withdrawMoney,depositMoney}  = bindActionCreators(actioncreators,dispatch)
  
  const amount = useSelector(state => state.amount)
  
    
  return (
    <div class="container">
        <h1 className='d-flex justify-content-center'>Your Balance </h1>
    <div className='d-flex justify-content-evenly'>
      <button className="btn btn-primary"onClick={()=>{depositMoney(100)}}> + </button>
      <h5 className='d-flex justify-content-center'> Rupee : {amount}</h5>
      <button className="btn btn-primary" onClick={()=>{withdrawMoney(100)}}> - </button>
    </div>
    </div>
  )
}

export default Shop
