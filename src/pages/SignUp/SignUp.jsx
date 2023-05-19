import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {
    const { createUser, updateUserData, logOut } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSignUp = event => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(name, photo, email, password, confirmPassword);

        if (password !== confirmPassword) {
            setError('Password did not match');
            return;
        }
        else if (password.length < 6) {
            setError('Password should be greater than 6 characters');
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('created user', user);
                setError('');
                setSuccess('User has been created successfully');
                // set user name and photo
                updateUserData(result.user, name, photo)
                    .then(() => {
                        console.log('User name and photo updated');
                    })
                    .catch(error => {
                        setError(error.message);
                    });
                form.reset();
                logOut();
            })
            .catch(error => {
                setError(error.message);
            });
    };

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
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
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
                                <input type={show ? "text" : "password"} name="confirmPassword" placeholder="******" className="input input-bordered" required />
                                <Link className="mt-1 label-text-alt link-hover" onClick={() => setShow(!show)}>
                                    {
                                        show ? <span>Hide Password</span>: <span>Show Password</span>
                                    }
                                </Link>
                            </div>
                            <div className="form-control mt-5">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
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