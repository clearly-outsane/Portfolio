import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { white } from '../styles'

const Nav = () => {
    return (
        <div style={{ position: 'fixed', width: '100vw' }}>
            <Grid container justify='space-between' className='container nav'>
                <Typography style={{ color: white }}>V.</Typography>
                <Typography style={{ color: white }}>About</Typography>
            </Grid>
        </div>
    )
}

export default Nav
