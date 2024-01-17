import Login from "../components/auth/Login.jsx"
import Signup from "../components/auth/Signup.jsx"

import { Routes, Route } from 'react-router-dom'

export default function Registration() {
    return (
        <>
            <div className="flex w-full">
                <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path="/signup" element={<Signup />}/>
                </Routes>
            </div>
        </>

    )
}