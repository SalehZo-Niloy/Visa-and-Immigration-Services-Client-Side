import { Spinner } from 'flowbite-react';
import React from 'react';

const Loader = () => {
    return (
        <div className="flex items-center justify-center min-h-[90vh]">
            <Spinner
                color="success"
                aria-label="Extra large spinner example"
                size="xl"
            />
        </div>
    );
};

export default Loader;