import React, { useState } from 'react'

import { WorkSlide } from '../components'
import countdown from '../assets/images/countdown.png'
import mockup1 from '../assets/images/mockup1.png'
import { noOfSlides } from '../constants'

const works = [
    {
        img: countdown,
        title: 'TEDx PESU',
        content: 'Website for the TEDx PESU Countdown event',
        center: false,
    },
    {
        img: countdown,
        title: 'CAREHUB',
        content:
            'A safe space for young adults to deal with mental health issues',
        center: false,
    },
    {
        img: countdown,
        title: 'APNE',
        content: 'Platform for the next 400 million users of India',
        center: false,
    },
]

const Work = () => {
    const [pos, setPos] = useState(0)

    const limitSetPos = (pos) => {
        if (pos > noOfSlides) setPos(0)
        else setPos(pos)
    }

    return (
        <div>
            <WorkSlide {...works[pos]} setPos={limitSetPos} pos={pos} />
        </div>
    )
}

export default Work
