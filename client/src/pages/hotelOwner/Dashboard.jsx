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
                    <div className='flex flex-col sm:ml-4 font-medium'>
                        <p>Total Bookings</p>
                        <p className='text-neutral-400 text-base'>{dashboardData.totalBookings}</p>
                    </div>
                </div>
                {/* total reveinwu */}
                <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
                    <img src={assets.totalRevenueIcon} className='max-sm:hidden h-10' />
                    <div className='flex flex-col sm:ml-4 font-medium'>
                        <p>Total Reveneue</p>
                        <p className='text-neutral-400 text-base'>$ {dashboardData.totalRevenue}</p>
                    </div>
                </div>

            </div>
            {/* Recent Bookings */}
            <h2 className='text-xl text-blue-950/70 font-medium mb-5'>Recent Bookings</h2>
            <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll'>
                <table className='w-full'>
                    <thead className='bg-gray-50'>
                        <tr>
                            <th className='py-3 px-4 text-gray-800 font-medium'>User Name</th>
                            <th className='py-3 px-4 text-gray-800 max-sm:hidden font-medium'>Room Name</th>
                            <th className='py-3 px-4 text-gray-800 font-medium text-center'>Total Amount</th>
                            <th className='py-3 px-4 text-gray-800 font-medium text-center'> Payment Status</th>
                        </tr>
                    </thead>

                    <tbody className='text-sm'>
                        {dashboardData.bookings.map((item, index) => (
                            <tr key={index}>
                                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{item.user.username}</td>
                                <td className='py-3 px-4 text-gray-700 border-t max-sm:hidden border-gray-300'>{item.room.roomType}</td>
                                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>$ {item.totalPrice}</td>
                                <td className='py-3 px-4 border-t border-gray-300 flex'>
                                    <button className={`py-1 px-3 text-xs rounded-full mx-auto ${item.isPaid ? 'bg-green-200 text-green-600' : 'bg-amber-200 text-yellow-600'}`}>
                                        {item.isPaid ? 'Completed' : 'Pending'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Dashboard