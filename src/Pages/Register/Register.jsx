import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { LuEye } from "react-icons/lu";
import { FaRegEyeSlash } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { createUser } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState("");

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photo = form.get('photo');

        if (!name || !email || !password || !photo) {
            setError("Please fill out all fields");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
            setError("Password must contain at least one uppercase and one lowercase letter");
            return;
        }
        if (name || email || password || photo) {
            setError("");
            toast.success("Successfully Registered");
            return;
        }
        setError('');
        

        createUser(email, password, photo)
            .then(result => {
                navigate(location?.state ? location.state : '/');
                toast.success("Successfully Registered");
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <div>
                <h2 className="text-3xl my-10 text-center">Please Register</h2>
                <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" required name="name" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" required name="photo" placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                            <span onClick={() => setShowPass(!showPass)}>
                                {showPass ? <FaRegEyeSlash /> : <LuEye />}
                            </span>
                        </label>
                        <input type={showPass ? "text" : "password"} required name="password" placeholder="Password" className="input input-bordered" />
                    </div>
                    {error && <small className="text-red-600">{error}</small>}
                    <div className="form-control mt-6">
                        <button className="btn bg-[#a38138]">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;
