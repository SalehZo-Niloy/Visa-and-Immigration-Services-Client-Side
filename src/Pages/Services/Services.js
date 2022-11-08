import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCards from '../Shared/ServiceCards/ServiceCards';

const Services = () => {
    const services = useLoaderData();
    // console.log(services);
    return (
        <div>
            <h1 className='text-3xl font-semibold text-zinc-800 text-center my-10'>All Provided Services</h1>
            <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {
                    services.map(service => <ServiceCards
                        key={service?._id}
                        service={service}
                    ></ServiceCards>)
                }
            </div>
        </div>
    );
};

export default Services;