import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ManageServiceCard = ({ service }) => {

    const { _id, serviceName, img, price, area, } = service;

    const handleDelete = _id => {

        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assignment-0002-purrfect-pathways-server.vercel.app/services/${_id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div>
                <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100 shadow-xl">
                    <h2 className="text-xl font-semibold"></h2>
                    <ul className="flex flex-col divide-y divide-gray-700">


                        <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                            <div className="flex w-full space-x-2 sm:space-x-4">
                                <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={img} alt="Set of travel chargers" />
                                <div className="flex flex-col justify-between w-full pb-4">
                                    <div className="flex justify-between w-full pb-2 space-x-2">
                                        <div className="space-y-1">
                                            <h3 className="text-lg font-semibold leadi sm:pr-8"> {serviceName}</h3>
                                            <p className="text-sm dark:text-gray-400">{area}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-lg font-semibold">Price:{price}$</p>

                                        </div>
                                    </div>
                                    <div className="flex text-sm divide-x">
                                        <button onClick={() => handleDelete(_id)} type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-rose-400 fill-current">
                                                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                                <rect width="32" height="200" x="168" y="216"></rect>
                                                <rect width="32" height="200" x="240" y="216"></rect>
                                                <rect width="32" height="200" x="312" y="216"></rect>
                                                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                            </svg>
                                            <span className="text-rose-700">Delete</span>
                                        </button>
                                        <Link to={`/updateServices/${_id}`}>
                                            <button type="button" className="flex items-center  px-2 py-1 space-x-1">
                                                <span className="text-green-500 ">Update</span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>


                </div>
            </div>
        </div>
    );
};

export default ManageServiceCard;