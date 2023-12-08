import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const Details = () => {

    const service = useLoaderData();
    const { _id, serviceName, img, price, description , area, providerName } = service;
    const { user } = useContext(AuthContext);
    console.log(user);

    const handleBookService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const image = user?.image;
        const userName = user?.userName;
        const special = form.special.value;
        const booking = {
            customerEmail: userName,
            email,
            date,
            img,
            SpecialInstruction: special,
            service: serviceName,
            service_id: _id,
            price: price,
            serviceProvider: name,
            serviceProviderImage: image,

        }

        console.log(booking);

        fetch('https://assignment-0002-purrfect-pathways-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Booking confirmd",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })


    }

    return (
        <div>

            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="flex space-x-4">
                    <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#"  className="text-sm font-semibold">{providerName}</a>
                        <span className="text-xs dark:text-gray-400">{area}</span>
                    </div>
                </div>
                <div>
                    <img src={img} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">{serviceName}</h2>
                    <p className="text-sm dark:text-gray-400">{description}</p>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="space-x-2">
                        <h1 className="text-rose-400 font-bold">Price: $ {price}</h1>

                    </div>
                    <div className="flex space-x-2 text-sm dark:text-gray-400">
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn bg-rose-400 text-white " onClick={() => document.getElementById('my_modal_5').showModal()}>Book Now</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <div >
                                    <form onSubmit={handleBookService} className="card-body">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Service Provider Name</span>
                                                </label>
                                                <input type="text" placeholder="name" defaultValue={user?.displayName} disabled className="input input-bordered" name="name" />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Service Provider img</span>
                                                </label>
                                                <img src={user.photoURL} className="w-10  h-10 rounded-2xl " defaultValue={user?.photoURL} disabled alt="" />

                                            </div>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Service Provider Email</span>
                                            </label>
                                            <input type="email" placeholder="Service Provider Email" className="input input-bordered" disabled defaultValue={user?.email} name="email" />
                                        </div>
                                        <div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">User Email</span>
                                                </label>
                                                <input type="email" placeholder="User Email" defaultValue={user?.email} className="input input-bordered" disabled name="userName" />

                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Special Instruction</span>
                                                </label>
                                                <input type="text" placeholder="Add Your Special Instruction" className="input input-bordered" name="special" />

                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Date</span>
                                                </label>
                                                <input type="date" name="date" placeholder="Date" className="input input-bordered" />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Price</span>
                                                </label>
                                                <input type="text" placeholder="price" defaultValue={'$' + price} className="input input-bordered" disabled name="price" />

                                            </div>
                                        </div>
                                        <div className="form-control mt-6">

                                            <input className="btn bg-rose-400 text-white " type="submit" value="Confirm Booking" />
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="bg-rose-800 text-white btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;