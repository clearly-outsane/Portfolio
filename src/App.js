import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import './App.css'
import { Work } from './pages'
import { theme } from './styles'
import { Nav } from './components'

function App() {
    return (
        <div className='App'>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Nav />
                <Work />
            </ThemeProvider>
        </div>
    )
}

export default App
