import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';

const AllGuns = ({ increaseCount }) => {

  const [ guns, setGuns ] = useState([]);
  useEffect( ()=>{
    fetch( `https://raw.githubusercontent.com/mir-hussain/guns/main/data.json` )
      .then( res => res.json() )
      .then( data => setGuns( data ) )
  }, []);

  return (
    <>
      <h2 className='text-4xl font-semibold mt-4'>Welcome To Kupa Samsu Store</h2>
      <p className='mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime maiores reiciendis rerum ut placeat consectetur odio impedit inventore asperiores nam.</p>
      <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
      {
        guns.map( gun => <SingleGun gun={ gun } increaseCount={ increaseCount }></SingleGun> )
      }
    </div>
    </>
  );
};

export default AllGuns;