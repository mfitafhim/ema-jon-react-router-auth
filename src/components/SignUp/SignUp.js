import React, { useContext } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './SignUp.css'
const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignup = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => {
                console.error(error);
            })
        navigate('/login')
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Form onSubmit={handleSignup} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                                <label className="label">
                                    <p>Already have an account ? </p> <Link to="/login" className="label-text-alt link link-hover">Login.</Link>

                                </label>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;