import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'

const FeaturedDestination = () => {
    return (
        <div>
            <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
                {roomsDummyData.slice(0, 4).map((room, index) => (
                    <HotelCard room={room} key={room._id} index={index} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedDestination