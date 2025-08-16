import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'

const ExclusiveOffers = () => {
    return (
        <div>
            <div>
                <Title title={"Exclusive Offers"} />
                <button>
                    View All
                    <img src={assets.arrowIcon} alt="" />
                </button>
            </div>
        </div>
    )
}

export default ExclusiveOffers