import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = event => {};
    return (
        <div className="mt-20 hero">
            <div className="hero-content w-full md:w-1/2">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-2xl text-center font-semibold">Login now!</h1>
                        <form onSubmit={handleLogin}>
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
                                <div className="mt-1 flex justify-between">
                                    <Link className="label-text-alt link-hover" onClick={() => setShow(!show)}>
                                        {
                                            show ? <span>Hide Password</span>: <span>Show Password</span>
                                        }
                                    </Link>
                                    <Link className="label-text-alt link link-primary">Forgot password?</Link>
                                </div>
                            </div>
                            <div className="form-control mt-5">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p> 
                            New to Toy Universe? <Link className="link link-primary" to="/signup">Sign Up</Link>
                        </p>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;