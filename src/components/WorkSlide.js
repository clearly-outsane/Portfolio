import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import gsap from 'gsap'

import { cover, white } from '../styles'
import { imageSlideUp, imageSlideFromDown } from '../utils/animations'

const WorkSlide = ({ img, center = true, title, content }) => {
    useEffect(() => {
        let duration = 1.8
        let animating = false
        window.addEventListener('wheel', (e) => {
            // window.requestAnimationFrame(raf)
            console.log(e.deltaY)

            if (e.deltaY > 0)
                window.requestAnimationFrame(function () {
                    raf('top')
                    // Run our scroll functions
                    console.log('top')
                })
            else
                window.requestAnimationFrame(function () {
                    raf('down')
                    // Run our scroll functions
                    console.log('debounced')
                })
        })

        const allowAnimation = () => {
            animating = false
        }

        const raf = (direction) => {
            if (!animating) {
                if (direction === 'top') {
                    animating = true
                    imageSlideUp(allowAnimation, 1.6)
                    setTimeout(() => {
                        imageSlideFromDown(allowAnimation, 1)
                    }, duration * 1000)
                }
            }
        }
        return () => {}
    }, [])

    return (
        <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
            <div
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: `${center ? 'center' : undefined}`,
                    ...cover,
                    position: 'absolute',
                    zIndex: -1,
                    filter: ' grayscale(84%)',
                }}
            >
                <div className='overlay'></div>
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
                <Typography variant='h1'> {title}</Typography>
                <Typography
                    variant='h6'
                    style={{
                        fontWeight: 400,
                    }}
                >
                    {content}
                </Typography>
            </Grid>
        </div>
    )
}

export default WorkSlide
