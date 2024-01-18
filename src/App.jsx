import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import DevTool from './tools/DevTool.jsx'

import Main from './context/Main.jsx'
import Registration from './context/Registration.jsx'
import User from './context/user/User.jsx'

function App() {

    return (
        <>
            <div className='flex w-full h-screen relative'>
                <BrowserRouter>
                    <Routes>
                        <Route path='/*' element={<Main />}/>
                        <Route path='/authentication/*' element={<Registration />} />
                        <Route path='/username/*' element={<User />} />
                    </Routes>
                </BrowserRouter>
                <DevTool />
            </div>
        </>
    )
}

export default App
