import React, { use } from 'react';
import TipsCard from './TipsCard';

const careTipsPromise = fetch('/plantCare.json')
.then(res => res.json());

const LeftSide = () => {

    const tipsData = use(careTipsPromise);
    // console.log(tipsData)
    return (
        <div>
            <h1 className='font-bold text-2xl mb-4 text-center'>
                Useful Tips
            </h1>
            {
                tipsData.map(data =>
                    <TipsCard
                        key={data.id}
                        data ={data}
                    ></TipsCard>
                )
            }
        </div>
    );
};

export default LeftSide;