import React, { useState } from 'react'
import { randomNumber } from '../../utils/random';
import datos from '../../assets/data.json'


const Card = ({user}) => {
  
  return (
    <div className=''>
    
      <img className='w-full h-full' src={user.imgs} alt="" />
      <div className='flex flex-col  absolute inset-0 w-30 h-20 bg-green-50 rounded-full top-60'>
      <h1 className='flex justify-center '>{user.author}</h1>
      <p className='flex justify-center '>{user.phrase}</p>
      </div>
  </div>
  );
};
export default Card;