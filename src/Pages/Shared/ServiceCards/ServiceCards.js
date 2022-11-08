import { Card } from 'flowbite-react';
import React from 'react';

const ServiceCards = ({ service }) => {
    const { title, image, fee, details } = service;

    return (
        <div className="">
            <Card className='bg-emerald-400'>
                <img src={image} className='rounded-md h-48 lg:h-56' alt="" />
                <h5 className="text-2xl font-bold tracking-tight text-zinc-800">
                    {title}
                </h5>
                <p className='text-zinc-900 font-medium'>Consultancy Fee: ${fee}</p>
                <p className="font-normal text-zinc-700 dark:text-gray-400">
                    {details.slice(0, 100)}...
                </p>
            </Card>
        </div>
    );
};

export default ServiceCards;