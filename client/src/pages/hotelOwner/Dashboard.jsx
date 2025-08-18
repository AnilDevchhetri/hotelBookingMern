import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets, dashboardDummyData } from '../../assets/assets'

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState(dashboardDummyData);
    return (
        <div>
            <Title title="Dashboard" align={"left"} font="outfit" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste facere maxime repellat assumenda!" />

            <div className='flex gap-4 my-8'>
                {/* total booknigs */}
                <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
                    <img src={assets.totalBookingIcon} className='max-sm:hidden h-10' />
                    <div >
                        <p>Total Bookings</p>
                        <p></p>
                    </div>
                </div>
                {/* total reveinwu */}
                <div>

                </div>
            </div>

        </div>
    )
}

export default Dashboard