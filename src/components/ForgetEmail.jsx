import React, { use } from 'react';
import { AuthContext } from './Provider/AuthProvider';

const ForgetEmail = () => {

    const { passReset } = use(AuthContext);

    const handlePassReset = (e) => {

        e.preventDefault();
        const email = e.target.email.value;
        console.log(email)
        passReset(email)
            .then()
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log({ errorMessage, errorCode })
            })

    }
    return (
        <div className="hero bg-base-200 min-h-[50vh]">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handlePassReset} className="fieldset">
                            <label className="label text-2xl font-semibold text-black">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />

                            <button className="btn btn-neutral mt-4">Confirm</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetEmail;