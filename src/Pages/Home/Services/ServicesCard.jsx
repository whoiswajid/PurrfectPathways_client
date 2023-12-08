import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {

    const { _id, serviceName, img, price, description , area , providerName } = service;

    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} /></figure>
                <div className="card-body">
                    <h2 className="card-title">

                        <div className=""><img alt="" className="w-12 h-12 rounded-full ri ri dark:bg-gray-500 ri ri" src="https://source.unsplash.com/40x40/?portrait?1" /></div>
                        <p>{providerName}</p>



                    </h2>
                    <p className="font-bold">{serviceName}</p>
                    <p className="text-gray-500">{description}</p>
                    <p className="text-rose-600">Price:<span className="text-gray-600"> ${price}</span></p>
                    <p>location : {area}</p>
                    <div className="card-actions justify-end">

                        <Link to={`/details/${_id}`}>
                            <button className=" btn bg-rose-400 text-white ">view details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;