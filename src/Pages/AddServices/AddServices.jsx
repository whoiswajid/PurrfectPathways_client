import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const AddServices = () => {

    const { user } = useContext(AuthContext);
    console.log(user);

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const img = form.img.value;
        const providerName = form.providerName.value;
        const serviceName = form.serviceName.value;
        const price = form.price.value;
        const email = form.email.value;
        // const password = form.password.value;
        const area = form.area.value;
        const description = form.description.value;

        const newService = { serviceName, img, price, email, area, description, providerName }
        console.log(newService);

        //sending data to the server
        fetch('https://assignment-0002-purrfect-pathways-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your service has been added",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }

            })
    }

    return (
        <div>
            <h3 className="text-center text-rose-400 font-bold font-mono text-4xl underline">Add Services</h3>
            <div className="card  shadow-2xl bg-base-100">
                <form onSubmit={handleAddService} className="card-body">
                    <div className="form-control md:flex">
                        <label className="label">
                            <span className="label-text">Service Image</span>
                        </label>
                        <input type="text" placeholder="Add your Photo url" className="input input-bordered" name="img" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Name</span>
                            </label>
                            <input type="text" placeholder="please add Service Name " className="input input-bordered" name="serviceName" />

                        </div>
                        <div className="form-control md:flex">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="Add Your Price" className="input input-bordered" name="price" />
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control md:flex">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" defaultValue={user?.email} disabled className="input input-bordered" name="email" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Provider Name</span>
                            </label>
                            <input type="text" placeholder="Add your name" defaultValue={user?.displayName} className="input input-bordered" name="providerName" />

                        </div>


                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Area</span>
                        </label>
                        <input type="text" placeholder="Add your service Area" className="input input-bordered" name="area" />

                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Description</span>
                        </label>
                        <input type="text" placeholder="Add your Service Description " className="input input-bordered" name="description" />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-rose-400 text-white">add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddServices;