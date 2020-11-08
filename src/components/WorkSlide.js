import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import gsap from 'gsap'

import hoverEffect from '../utils/transition'
import image from '../assets/images/countdown.png'
import image2 from '../assets/images/mockup1.png'
import disp1 from '../assets/images/disp1.jpg'

import { cover, white } from '../styles'
import {
    imageSlideUp,
    imageSlideFromDown,
    textSlideUp,
    textSlideFromDown,
} from '../utils/animations'
import { noOfSlides } from '../constants'

const WorkSlide = ({ img, center = true, title, content, setPos }) => {
    useEffect(() => {
        return () => {}
    }, [])

    useEffect(() => {
        var myAnimation = new hoverEffect({
            parent: document.querySelector('.renderImageHere'),
            intensity: 0.3,
            image1: image2,
            image2: image,
            displacementImage: disp1,
            imagesRatio: 3 / 4,
            intensity: 0.36,
            speed: 1.2,
        })
        let animating = false
        let duration = 1.8
        let timeout
        let pos = 0

        window.addEventListener('touchmove', (e) => {
            console.log(e.touches[0].clientY)
        })
        window.addEventListener('wheel', (e) => {
            // window.requestAnimationFrame(raf)
            animate(e.deltaY)
        })

        const animate = (value) => {
            if (timeout) {
                window.cancelAnimationFrame(timeout)
            }
            if (value > 0)
                timeout = window.requestAnimationFrame(function () {
                    raf('top')
                })
            else
                timeout = window.requestAnimationFrame(function () {
                    raf('down')
                    // Run our scroll functions
                    console.log('debounced')
                })
        }

        const onAnimationComplete = () => {
            animating = false
        }

        const updatePos = (direction) => {
            if (direction === 'top') {
                setPos(pos + 1)
                pos += 1
                if (pos > noOfSlides) pos = 0
            }
        }

        const raf = (direction) => {
            if (!animating) {
                if (direction === 'top') {
                    animating = true
                    imageSlideUp(() => updatePos('top'), 1.6)
                    textSlideUp(() => {}, 1.6)
                    setTimeout(() => {
                        myAnimation[1]()
                    }, 800)

                    setTimeout(() => {
                        textSlideFromDown(() => {}, 1)
                    }, 1.6 * 1000)
                    setTimeout(() => {
                        imageSlideFromDown(onAnimationComplete, 1)
                    }, 1.8 * 1000)
                }
            }
        }
        return () => {}
    }, [])

    return (
        <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
            <div
                className='background-image'
                style={
                    {
                        // backgroundImage: `url(${img})`,
                        // backgroundSize: 'cover',
                        // backgroundRepeat: 'no-repeat',
                        // backgroundPosition: `${center ? 'center' : 'top'}`,
                    }
                }
            >
                <div
                    className='renderImageHere'
                    style={{
                        ...cover,
                        position: 'absolute',
                        zIndex: -1,
                        filter: ' grayscale(84%)',
                    }}
                >
                    <div className='overlay' />
                </div>
            </div>
            <div style={{ ...cover, position: 'absolute' }}>
                <Grid
                    container
                    justify='center'
                    alignItems='center'
                    style={{ ...cover }}
                >
                    <div
                        className='project-image-container'
                        style={{
                            width: '50%',
                            height: '60%',
                            overflow: 'hidden',
                            position: 'relative',
                        }}
                    >
                        <div
                            style={{
                                backgroundImage: `url(${img})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: '50% 30%',
                                ...cover,
                            }}
                        />
                    </div>
                </Grid>
            </div>

            <Grid
                container
                alignItems='flex-start'
                justify='flex-end'
                style={{ color: white, ...cover, position: 'relative' }}
                className='container'
                direction='column'
            >
                <div style={{ overflow: 'hidden' }}>
                    <Typography variant='h1' className='work-title'>
                        {title}
                    </Typography>
                </div>
                <div style={{ overflow: 'hidden' }}>
                    <Typography
                        variant='h6'
                        style={{
                            fontWeight: 400,
                        }}
                        className='work-description'
                    >
                        {content}
                    </Typography>
                </div>
            </Grid>
        </div>
    )
}

export default WorkSlide
