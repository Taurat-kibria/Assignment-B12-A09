import React from 'react';
import { useLoaderData } from 'react-router';
import PlantsCard from './PlantsCard';

const TopRatedPlants = () => {
    const plantData = useLoaderData();
    console.log(plantData)
    return (
        <div>
            <h1 className='font-bold text-2xl  text-center'>Top Rated Plants</h1>
            <div className='grid grid-cols-2 gap-3'>
                {
                    plantData.map(data => <PlantsCard
                        data={data}
                        key={data.plantId}
                    ></PlantsCard>)
                }
            </div>
        </div>
    );
};

export default TopRatedPlants;