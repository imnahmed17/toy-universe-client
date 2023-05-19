import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
            })
            .catch(error => {
                setError(error.message);
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                // console.log(error.message);
                setError(error.message);
            })
    };

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
                        <p>New to Toy Universe? <Link className="link link-primary" to="/signup">Sign Up</Link></p>
                        <div className="divider">OR</div>
                        <div className="text-center">
                            <button className="btn btn-circle btn-outline" onClick={handleGoogleSignIn}>
                                <FcGoogle size={30} />
                            </button>
                        </div>
                        <p className="text-sm text-center text-error">{error}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;