import React from 'react';

const SingleGun = ( props ) => {
  const { gun, increaseCount } = props;
  const { name, img, bullet, category, action, price } = gun;
  
  return (
    <div className='mt-10'>
      {/* Tailwind Cards  */}
      <div className="card w-full bg-base-100 shadow-xl">
      <figure><img className='w-[100%] h-96' src={ img } alt="Shoes" /></figure>
    <div className="card-body">
    <h2 className="card-title">
      { name }
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <div className="badge badge-outline">{ action }</div>
      <div className="badge badge-outline">{ category }</div>
      <div className='mt-4'>
        <button onClick={ () => increaseCount() } className="btn btn-danger mr-4">Add To Cart</button>
        <button className="btn btn-secondary">Details</button>
      </div>
    </div>
  </div>
</div>
      {/* Tailwind Cards  */}
    </div>
  );
};

export default SingleGun;