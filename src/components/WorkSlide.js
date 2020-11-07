import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import { cover, white } from '../styles'

const WorkSlide = ({ img, center = true, title, content }) => {
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

            <Grid
                container
                alignItems='flex-start'
                justify='flex-end'
                style={{ color: white, ...cover }}
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
