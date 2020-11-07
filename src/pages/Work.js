import React from 'react'

import { WorkSlide } from '../components'
import countdown from '../assets/images/countdown.png'
import mockup1 from '../assets/images/mockup1.png'

const Work = () => {
    return (
        <div>
            <WorkSlide
                img={countdown}
                center={false}
                title='TEDx PESU'
                content='Website for the TEDx PESU Countdown event'
            />
            <WorkSlide img={mockup1} />
        </div>
    )
}

export default Work
