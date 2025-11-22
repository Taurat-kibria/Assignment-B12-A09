import React, { useState } from 'react';
import { } from 'react-router';

export default function ProtectedPlant({ data }) {

    // console.log(data)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [showToast, setShowToast] = useState(false);

    const {
        // plantId,
        plantName,
        // category,
        price,
        rating,
        availableStock,
        // careLevel,
        description,
        image,
        // providerName
    } = data

    const handleSubmit = () => {
        if (!name || !email) return;
        setShowToast(true);
        setName('');
        setEmail('');
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-6 flex justify-center items-center">
            <div className="card lg:card-side bg-base-100 shadow-2xl max-w-4xl w-full overflow-hidden">

                {/* Large Image Section */}
                <figure className="lg:w-1/2">
                    <img
                        src={image}
                        alt={plantName}
                        className="h-80 lg:h-full w-80 object-cover"
                    />
                </figure>

                {/* Content Section */}
                <div className="card-body lg:w-1/2 p-6">
                    {/* Plant Info */}
                    <div>
                        <h2 className="card-title text-3xl font-bold text-gray-800">
                            {plantName}
                        </h2>

                        <p className="text-gray-600 mt-2">{description}</p>

                        {/* Price, Rating, Stock Row */}
                        <div className="flex flex-wrap items-center gap-4 mt-4">
                            <span className="text-3xl font-bold text-primary">${price}</span>

                            <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
                                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="font-semibold text-gray-700">{rating}</span>
                            </div>

                            <div className={`badge ${availableStock > 5 ? 'badge-success' : 'badge-warning'} gap-1 py-3`}>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                                {availableStock} in stock
                            </div>
                        </div>
                    </div>

                    <div className="divider"></div>

                    {/* Consultation Form */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Book Consultation
                        </h3>

                        <div className="space-y-3">
                            <div className="form-control">
                                <label className="label py-1">
                                    <span className="label-text font-medium">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="input input-bordered input-primary w-full"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className="form-control">
                                <label className="label py-1">
                                    <span className="label-text font-medium">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered input-primary w-full"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <button
                                className="btn btn-primary w-full mt-2"
                                onClick={handleSubmit}
                                disabled={!name || !email}
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Toast */}
            {showToast && (
                <div className="toast toast-top toast-end">
                    <div className="alert alert-success shadow-lg">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Consultation booked successfully!</span>
                    </div>
                </div>
            )}
        </div>
    );
}