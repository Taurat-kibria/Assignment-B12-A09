import React from 'react';

const TipsCard = ({ data }) => {
    return (
        <div className="card max-w-96 bg-base-100 shadow-sm mb-4">
            <div className="card-body">
                <span className="badge badge-xs badge-warning">Useful Tips</span>
                <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">{data.name}</h2>
                    
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Light: {data.light}</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Water: {data.water}</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Soil: {data.soil}</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Humidity: {data.humidity}</span>
                    </li>
                    
                </ul>
                
            </div>
        </div>
    );
};

export default TipsCard;