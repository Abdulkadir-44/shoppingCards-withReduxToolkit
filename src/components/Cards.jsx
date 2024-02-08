import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement} from '../redux/features/counterSlice'

const Cards = ({item}) => {
  const counter = useSelector(state=>state.counter.value);
  const dispatch=useDispatch();
  return (
    <div className='bg-[#ccc] rounded-lg '>
       <div>
         <img className='w-60 h-66 rounded-lg' src={item.image} alt="" />
       </div>
       <div className='mt-2'>
        <p className='text-center font-poppins font-semibold'>{item.name}</p>
        <p className='text-center font-semibold text-red-800'>{item.price}</p>
        <div className='flex w-full justify-center gap-x-3 mb-2 mt-2'>
            <button onClick={()=>dispatch(increment(item.id))} 
            className='bg-white px-4 rounded-sm font-poppins font-semibold hover:bg-gray-600 hover:text-white duration-150'>+</button>
            {
              counter.map(value=>{
                if(value.id == item.id)
                {
                   return <span key={item.id}>{value.counter}</span>
                }
              })
            }
            <button onClick={()=>dispatch(decrement(item.id))} 
            className='bg-white px-4 rounded-sm font-poppins font-semibold hover:bg-gray-600 hover:text-white duration-150'>-</button>
        </div>
       </div>
    </div>
  )
}

export default Cards