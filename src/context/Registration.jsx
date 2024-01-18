import Login from "../components/auth/Login.jsx"
import Signup from "../components/auth/Signup.jsx"
import Cover from "../assets/image/cover-1.jpg"
import { Routes, Route } from 'react-router-dom'

export default function Registration() {
    return (
        <>
            <div className="flex w-full h-full justify-center items-center relative font-Roboto">
                <div className="flex w-full h-full justify-center items-center z-20">
                    <div className="w-full max-w-[500px] h-fit">
                        <p className="text-white text-[50px]">BUNNY VA</p>
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                        </Routes>
                    </div>
                </div>
                <div className="w-full h-full absolute z-10 bg-black/50"></div>
                <img src={Cover} className="w-full h-full z-0 absolute" />
            </div>
        </>

    )
}