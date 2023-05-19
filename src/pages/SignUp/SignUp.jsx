import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSignUp = event => {};

    return (
        <div className="mt-20 hero">
            <div className="hero-content w-full md:w-1/2">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-2xl text-center font-semibold">Sign Up</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="example@gmail.com" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={show ? "text" : "password"} name="password" placeholder="******" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type={show ? "text" : "password"} name='confirmPassword' placeholder="******" className="input input-bordered" required />
                                <Link className="mt-1 label-text-alt link-hover" onClick={() => setShow(!show)}>
                                    {
                                        show ? <span>Hide Password</span>: <span>Show Password</span>
                                    }
                                </Link>
                            </div>
                            <div className="form-control mt-5">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p>Already Have an Account? <Link className="link link-primary" to="/login">Login</Link></p>
                        <p className="text-sm text-center text-success">{success}</p>
                        <p className="text-sm text-center text-error">{error}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;