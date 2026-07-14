import axios from 'axios'
import { useEffect, useState } from 'react'
import Navigation from './Navigation'

const ViewVeh = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {

        axios.post("http://localhost:3000/view-veh").then(

            (response) => {

                changeData(response.data)

            }

        ).catch()

    }

    useEffect(

        () => {

            fetchData()

        }, []

    )

    return (
        <div>

<Navigation/>
            <div className="container-fluid px-2 mt-4">

                <h1 className="text-center mb-4">EV Vehicle Bookings</h1>

                <div className="row">

                    <div className="col-12">

                        <div className="table-responsive">

                            <table className="table table-light table-striped">

                                <thead>

                                    <tr>
                                        <th>Booking ID</th>
                                        <th>Owner Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Vehicle Registration Number</th>
                                        <th>Vehicle Brand</th>
                                        <th>Vehicle Model</th>
                                        <th>Battery Capacity</th>
                                        <th>Connector Type</th>
                                        <th>Charging Date</th>
                                        <th>Time Slot</th>
                                        <th>Estimated Units</th>
                                        <th>Charging Bay Number</th>
                                    </tr>

                                </thead>

                                <tbody>

                                    {data.map((value) => (

                                        <tr key={value.booking_id}>

                                            <td>{value.booking_id}</td>
                                            <td>{value.owner_name}</td>
                                            <td>{value.email}</td>
                                            <td>{value.phone}</td>
                                            <td>{value.vehicle_registration_number}</td>
                                            <td>{value.vehicle_brand}</td>
                                            <td>{value.vehicle_model}</td>
                                            <td>{value.battery_capacity}</td>
                                            <td>{value.connector_type}</td>
                                            <td>{value.charging_date}</td>
                                            <td>{value.time_slot}</td>
                                            <td>{value.estimated_units}</td>
                                            <td>{value.charging_bay_number}</td>

                                        </tr>

                                    ))}

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )

}

export default ViewVeh