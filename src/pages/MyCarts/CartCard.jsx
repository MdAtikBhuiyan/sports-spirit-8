import React from 'react';

const CartCard = ({ cartItem }) => {

    const { image, service_name, price } = cartItem;

    return (
        <div>
            <div className={`card card-compact shadow-2xl bg-[#ffad14] `}
            >
                <figure><img src={image} className='w-full h-52' alt="Shoes" /></figure>
                <div className="card-body my-4">
                    <h2 className='p-2 px-3 text-lg w-fit rounded font-bold bg-white text-[#ffbc3f]'>
                        {price}$
                    </h2>
                    <p className='text-xl font-bold text-white'>{service_name}</p>
                </div>
            </div>
        </div>
    );
};

export default CartCard;