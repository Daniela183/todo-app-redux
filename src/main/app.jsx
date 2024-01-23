import React from 'react'
import '../template/custom.css'
import Menu from '../template/menu'
import Routes from './routes'

require('modules/bootstrap/dist/css/bootstrap.min.css')
require('modules/font-awesome/css/font-awesome.min.css')

 const App = props => (
    <div className='container'>
        <Menu />
        <Routes/>
    </div>
)
export default App;