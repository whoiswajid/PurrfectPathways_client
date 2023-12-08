import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MySchedulesRow from "./MySchedulesRow";


const MySchedules = () => {

    const { user } = useContext(AuthContext);

    const [bookings, setBookings] = useState([]);

    const url = `https://assignment-0002-purrfect-pathways-server.vercel.app/bookings?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url])

    const handleBookingConfirm = id =>{
        fetch(`https://assignment-0002-purrfect-pathways-server.vercel.app/bookings/${id}`,{
            method: 'PATCH',
            headers: {
               'content-type': 'application/json' 
            },
            body: JSON.stringify({status : 'confirm'})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0 ){
                // update state
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id == id);
                updated.status = 'complited'
                const newBookings = [updated, ...remaining];
                setBookings(newBookings);
            }
        })
    }


    return (
        <div>
            <h2>Bookings : {bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Service / Provider</th>
                            <th>User</th>
                            <th>Service Name</th>
                            <th>Date</th>
                            <th>Price</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <MySchedulesRow key={booking._id}
                            booking={booking}
                            handleBookingConfirm={handleBookingConfirm}
                            ></MySchedulesRow>)
                        }
                        
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default MySchedules;