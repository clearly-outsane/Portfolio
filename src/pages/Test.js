import React, { useEffect } from 'react'

import hoverEffect from '../utils/transition'
import image from '../assets/images/countdown.png'
import image2 from '../assets/images/mockup1.png'
import disp1 from '../assets/images/disp1.jpg'
import { cover } from '../styles'

const Test = () => {
    useEffect(() => {
        var myAnimation = new hoverEffect({
            parent: document.querySelector('.renderHere'),
            intensity: 0.3,
            image1: image,
            image2: image2,
            displacementImage: disp1,
            imagesRatio: 3 / 4,
            intensity: 0.36,
            speed: 1.2,
        })

        return () => {}
    }, [])
    return <div className='renderHere' style={{ height: '100vh' }}></div>
}

export default Test
