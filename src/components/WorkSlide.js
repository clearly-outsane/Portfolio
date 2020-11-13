import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import gsap from 'gsap'

import hoverEffect from '../utils/transition'
import disp1 from '../assets/images/disp1.jpg'

import { cover, white } from '../styles'
import {
    imageSlideUp,
    imageSlideFromDown,
    textSlideUp,
    textSlideFromDown,
} from '../utils/animations'
import { noOfSlides } from '../constants'

const WorkSlide = ({ img, title, content, setPos, images }) => {
    useEffect(() => {
        images.forEach((image) => {
            const img = new Image()
            img.src = image
        })
        return () => {}
    }, [])

    useEffect(() => {
        let animating = false
        let duration = 1.8
        let timeout
        let pos = 0

        var myAnimation = new hoverEffect({
            parent: document.querySelector('.renderImageHere'),
            intensity: 0.3,
            // image1: images[1],
            // image2: images[0],
            displacementImage: disp1,
            imagesRatio: 3 / 4,
            intensity: 0.36,
            speed: 1.2,
            images: images,
        })

        const updateAnimation = (pos) => {
            const nextPos = (pos + 1) % (noOfSlides + 1)
            myAnimation[2](pos, nextPos)
        }

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
            updateAnimation(pos)
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
                    imageSlideUp(() => updatePos('top'), 1.4)
                    textSlideUp(() => {}, 1.2)
                    setTimeout(() => {
                        myAnimation[1]()
                    }, 600)

                    setTimeout(() => {
                        textSlideFromDown(() => {}, 1)
                    }, 1.3 * 1000)
                    setTimeout(() => {
                        imageSlideFromDown(onAnimationComplete, 1)
                    }, 1.5 * 1000)
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
