import Swal from "sweetalert2";



const MySchedulesRow = ({ booking, handleBookingConfirm }) => {

    const { _id, serviceProvider, service, email, date, price, img } = booking;


    const handleSelectChange = (event) => {
        const selectedOption = event.target.value;
        Swal.fire({
            title: `Booking is in ${selectedOption}`,
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
    };

    


    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask  w-12 h-12">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceProvider}</div>
                        
                    </div>
                </div>
            </td>
            <td>
                {email}
            </td>
            <td>
                {service}
            </td>
            <td>
                {date}
            </td>
            <td>${price}</td>
            <th>
                <div>
                    <select id="dropdown" onClick={() => handleBookingConfirm(_id)} className="btn bg-rose-400" onChange={handleSelectChange}>
                        <option  value="Option 1">Pending</option>
                        <option value="Option 2">Progress</option>
                        <option value="Option 3">Completed</option>
                    </select>
                </div>
            </th>
        </tr>
    );
};

export default MySchedulesRow;