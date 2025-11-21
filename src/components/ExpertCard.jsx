import React from 'react';

const ExpertCard = ({ data }) => {

    const {name,  title, photo} = data;
    return (
        <div className="card bg-base-100 max-w-96 mb-4 shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src={photo}
                    
                    className="rounded-xl max-h-[300px] " 
                    />
            </figure>
            <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
                <p>{title}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Contact </button>
                </div>
            </div>
        </div>
    );
};

export default ExpertCard;