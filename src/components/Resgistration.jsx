import React, { use } from 'react';
import { Link, Navigate, useNavigate } from 'react-router';
import { AuthContext } from './Provider/AuthProvider';
import { ToastContainer } from 'react-toastify';
import toast from 'daisyui/components/toast';

const Resgistration = () => {

    const { signUp, credError, setCredError, googleSignIn } = use(AuthContext);
    const navigate = useNavigate();
    const passRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    const HandleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(createUser)
        signUp(email, password)
            .then(res => {
                console.log(res.user)
                navigate("/")
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log({ errorMessage, errorCode })
                toast(errorMessage);

            })


    }

    function validatePass(e) {
        const password = e.target.value;
        if (!passRegex.test(password)) {
            setCredError("Password doess't match the credentials");
            toast(credError);
        }
        else {
            setCredError("")
        }


        // console.log(password)
        // if(credError){

        // }
    }

    const handleGoogleLogin = () => {

        googleSignIn()
            .then()
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log({ errorMessage, errorCode })
                toast(errorMessage)
            })

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card bg-base-100 w-full pt-6 max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-2xl text-center font-bold">Sign Up!</h1>
                    <div className="card-body">
                        <form onSubmit={HandleRegister} className="fieldset">
                            {/* name */}
                            <label className="label">Name</label>
                            <input name='name' type="text" className="input" placeholder="Name" />
                            {/* email */}
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />
                            {/* photo url */}
                            <label className="label">Photo URL</label>
                            <input name='url' type="email" className="input" placeholder="Photo url" />
                            {/* password */}
                            <label className="label">Password</label>
                            <input onChange={validatePass} name='password' type="password" className="input" placeholder="Password" />
                            <button className="btn btn-neutral mt-4">Sign Up</button>
                            <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Sign Up with Google
                            </button>
                        </form>
                        <p className='font-semibold'>
                            Already have an account? Please <Link to="/auth/login" className='text-blue-500 hover:underline'>login</Link>
                        </p>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Resgistration;