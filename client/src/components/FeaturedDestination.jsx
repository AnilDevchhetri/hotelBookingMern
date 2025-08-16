import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from "./Title.jsx"
import { useNavigate } from 'react-router-dom'
const FeaturedDestination = () => {

    const navigate = useNavigate();
    return (
        <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
            <Title title="Features Rooms" subtitle=" Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
            <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
                {roomsDummyData.slice(0, 4).map((room, index) => (
                    <HotelCard room={room} key={room._id} index={index} />
                ))}
            </div>

            <button onClick={() => { navigate('/rooms'); scrollTo(0, 0) }} scroll className='my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transaition-all cursor-pointer' >View All Rooms</button>

        </div>
    )
}

export default FeaturedDestination