import React from 'react'
import Header from '../components/Header'
import { data } from '../data/Data'
import {useSelector,useDispatch} from 'react-redux'
import { decrement ,increment} from '../redux/features/counterSlice'
const Basket = () => {
  const dispatch=useDispatch();
  const count=useSelector(state=>state.counter.value);
  
  const selectedCount = count.map(item=>{
    if(item.counter != 0)
    {
      return item.id ;
    }
  })
  
  return (
    <>
      <Header />
        <div className='w-4/5 h-auto mx-auto mt-7 bg-[#933131] rounded-md opacity-95'>
          
            {
              data.map((data,index)=>{
                if(data.id == selectedCount[index])
                  return (
                    <div className='flex border-b-2 p-2 justify-between items-center'>
                      <div className='flex gap-x-3'>
                      <img className='w-28 h-40 rounded-md' src={data.image} alt="" />
                      <p className='text-white  font-poppins'>{data.name}</p> 
                      <p className='text-white  font-poppins'>{data.price}</p>
                      </div>
                      <div>
                      <button onClick={()=>dispatch(increment(data.id))} 
                      className='bg-white px-6 py-2 rounded-md font-poppins hover:bg-gray-200 duration-200'>Arttır</button>
                      <span className='mx-4 text-white font-poppins font-semibold'>{count[index].counter}</span>
                      <button onClick={()=>dispatch(decrement(data.id))}
                       className='bg-white px-6 py-2 rounded-md font-poppins hover:bg-gray-200 duration-200'>Azalt</button>
                      </div>
                    </div>
                )
              })
            }
          
          
        </div>
    </>
  )
}

export default Basket