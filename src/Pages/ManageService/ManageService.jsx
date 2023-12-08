
import { useLoaderData } from 'react-router-dom'
import ManageServiceCard from './ManageServiceCard';
const ManageService = () => {

    const services = useLoaderData();

    return (
        <div>
            <h2> My Services : {services.length}</h2>
            {
                services.map(service => <ManageServiceCard
                key={service._id}
                service={service}></ManageServiceCard>)
            }
        </div>

    );
};

export default ManageService;