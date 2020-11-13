import React, { useState, useEffect } from 'react'

import { WorkSlide } from '../components'
import img1 from '../assets/images/countdown.png'
import img2 from '../assets/images/mockup4.png'
import img3 from '../assets/images/mockup2.png'
import img4 from '../assets/images/mockup3.png'
import { noOfSlides } from '../constants'

const images = [img1, img2, img3, img4]
const works = [
    {
        img: images[0],
        title: 'TEDx PESU',
        content: 'Website for the TEDx PESU Countdown event',
    },
    {
        img: images[1],
        title: 'CAREHUB',
        content:
            'A safe space for young adults to deal with mental health issues',
    },
    {
        img: images[2],
        title: 'APNE',
        content: 'Platform for the next 400 million users of India',
    },
]

const Work = () => {
    const [pos, setPos] = useState(0)

    useEffect(() => {
        images.forEach((image) => {
            const img = new Image()
            img.src = image
        })
        return () => {}
    }, [])

    const limitSetPos = (pos) => {
        if (pos > noOfSlides) setPos(0)
        else setPos(pos)
    }

    return (
        <div>
            <WorkSlide
                {...works[pos]}
                setPos={limitSetPos}
                pos={pos}
                images={images}
            />
        </div>
    )
}

export default Work
