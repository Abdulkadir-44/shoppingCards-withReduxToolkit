import React from 'react'
import {data} from '../data/Data'
import Cards from './Cards'
const Products = () => {
  
  return (
    <div className='mt-5 w-11/12 bg-[#933131] flex justify-center flex-wrap mx-auto p-3 rounded-lg gap-3'>
      {
        data.map((item,index)=>(
          <Cards key={index} item={item}/>
        ))
      }
    </div>
  )
}

export default Products