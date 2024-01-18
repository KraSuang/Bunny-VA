import Navbar from "../components/Navbar.jsx"
import Logo from "../assets/image/bunny.png"
import { Routes, Route } from "react-router-dom"
import { FaUserTie, FaCalendarDays, FaPlaneUp } from "react-icons/fa6";

function Crew() {
    return (
        <>

        </>
    )
}

function About() {
    return (
        <>
        </>
    )
}

function Start() {
    return (
        <>
            <div className="w-full h-full">
                <div className="w-full h-[1080px] flex justify-center items-center">
                    <div className="w-fit text-white">
                        <p className="text-[80px]">Welcome to</p>
                        <p className="text-[80px]">BUNNY VA</p>
                        <p className="text-lg">Let's paint the virtual skies with us today! A great community, for everyone.</p>
                        <button className="block px-6 py-3 text-lg mt-4 rounded-lg transition-all duration-200 bg-button group hover:bg-button-hover scale-100 hover:scale-105">
                            <p className="text-button-text group-hover:text-button-text-hover">Start Here</p>
                        </button>
                    </div>
                    <img src={Logo} />
                </div>
                <div className="w-full h-[300px] bg-white px-96 py-10 flex justify-between items-center">
                    <div className="w-fit flex flex-col justify-center items-center">
                        <i className="text-[40px]">
                            <FaUserTie />
                        </i>
                        <p className="text-[30px] mt-2">0</p>
                        <p className="text-[24px]">Pilot</p>
                    </div>
                    <div className="w-fit flex flex-col justify-center items-center">
                        <i className="text-[40px]">
                            <FaCalendarDays />
                        </i>
                        <p className="text-[30px] mt-2">0</p>
                        <p className="text-[24px]">Schedule</p>
                    </div>
                    <div className="w-fit flex flex-col justify-center items-center">
                        <i className="text-[40px]">
                            <FaPlaneUp />
                        </i>
                        <p className="text-[30px] mt-2">0</p>
                        <p className="text-[24px]">Flight</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function Main() {
    return (
        <>
            <div className="w-full h-full relative bg-cover overflow-y-scroll font-Roboto">
                <Navbar />
                <div className="w-full h-fit bg-black/40">
                    <Routes>
                        <Route path="/" element={<Start />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/crew" element={<Crew />} />
                    </Routes>
                </div>

                <footer className="w-full h-fit bg-background flex flex-col justify-center items-center py-20">
                    <p className="text-lg text-white ">BUNNY Virtual Aviation is a non-profit organization. This website serve the hobby of flight simulation.</p>
                    <p className="text-2xl text-white mt-4 font-semibold">Copyright © 2023 BUNNY VA</p>
                </footer>
            </div>
        </>

    )
}