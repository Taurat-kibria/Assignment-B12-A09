import React from 'react';
import { Link, useNavigate,  } from 'react-router';

const PlantsCard = ({ data }) => {

    
        const Navigate = useNavigate();
        
    

    return (
        <div onClick={()=>Navigate(`/details/${data.plantId}`)} className="flex justify-center items-center   p-4">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-4 pt-4">
                    <img
                        src={data.image}
                        alt={data.dataName}
                        className="rounded-xl h-64 w-64 object-cover"
                    />
                </figure>

                <div className="card-body">
                    <div className="flex justify-between items-start">
                        <h2 className="card-title text-2xl">{data.dataName}</h2>
                        <div className="badge badge-secondary">{data.category}</div>
                    </div>

                    <p className="text-sm text-base-content/70">{data.description}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center">
                            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="ml-1 font-semibold">{data.rating}</span>
                        </div>

                        <div className="badge badge-outline">
                            {data.careLevel} Care
                        </div>
                        <Link to={`/plants/${data.plantId}`} className="badge badge-outline">View Details</Link>
                    </div>

                    <div className="divider my-2"></div>

                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-xs text-base-content/60">Provider</p>
                            <p className="font-medium">{data.providerName}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-base-content/60">Stock</p>
                            <p className="font-medium">{data.availableStock} available</p>
                        </div>
                    </div>

                    <div className="card-actions justify-between items-center mt-4">
                        <div className="text-3xl font-bold text-primary">
                            ${data.price}
                        </div>
                        <Link  className="btn btn-primary">Add to Cart</Link >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantsCard;