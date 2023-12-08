import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";



const LogIn = () => {

    const { googleSignIn } = useContext(AuthContext);


    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
            })
    }

    const { signIn } = useContext(AuthContext);
    const location = useLocation();

    console.log(location)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const user = { email };
                console.log(user);

            })
            .catch(error => console.log(error));
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-rose-400 font-bold">Uooff In now!</h1>
                    <img className="w-[600px]" src="https://i.ibb.co/V23w36n/fun-3d-cartoon-super-white-labrador-retriever.jpg" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
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
                        <div className="form-control mt-6">
                            <button type="submit" className="btn text-white bg-rose-400 font-bold">Login</button>
                        </div>

                        <p className="px-6 text-sm text-center dark:text-gray-400">Do not have an account yet?
                            <Link to='/register' className="hover:underline text-rose-400 font-bold" >Sign up</Link>

                        </p>

                        <div>
                            <button onClick={handleGoogle} className="btn btn-primary">Use Google</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default LogIn;