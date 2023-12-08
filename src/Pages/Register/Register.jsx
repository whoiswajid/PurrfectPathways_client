import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";


const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const img = form.img.value;
        console.log(name, email, password,img)


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('created user', user)

                updateProfile(result.user, {
                    displayName: name, photoURL: img ,
                })
                .then(() =>console.log('profile Updated'))
                .catch()

            })
            .catch(error => console.log(error))

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-rose-400 font-bold right-8">Uooff In now!</h1>
                    <img className="w-[500px] " src="https://i.ibb.co/jHCSnTk/cute-shepherd-dog-posing-isolated-white-background.jpg" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name="email" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name="password" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="password" placeholder="Name" className="input input-bordered" name="name" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="img" placeholder="Add Photo url" className="input input-bordered" name="img" />

                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn  text-white bg-rose-400 font-bold">Sign Up</button>
                        </div>

                    </form>
                    <p className="px-6 text-sm text-center dark:text-gray-400">Do not have an account yet?
                        <Link to='/login' className="hover:underline text-rose-400 font-bold" >Log In</Link>

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;