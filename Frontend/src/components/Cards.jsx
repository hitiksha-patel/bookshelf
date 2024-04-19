import React from 'react'

function Cards({item}) {
  return (
    
    <>
    <div className='mt-4 p-4'>
    <div className="card w-94 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.title}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.description}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline">${item.price}</div> 
      <div className="cursor-pointer rounded-full border-[1px] badge badge-outline hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
