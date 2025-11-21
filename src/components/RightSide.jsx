import React, { use } from 'react';
import ExpertCard from './ExpertCard';

const expertPromise = fetch("/experts.json")
    .then(res => res.json())

const RightSide = () => {
    const expertData = use(expertPromise)
    // console.log(expertData)
    return (
        <div>
            <h1 className='font-bold text-2xl mb-4 text-center'>Our Experts</h1>
            {
                expertData.map(data => 
                    <ExpertCard
                        key={data.id}
                        data = {data}
                    ></ExpertCard>
                )
            }
        </div>
    );
};

export default RightSide;