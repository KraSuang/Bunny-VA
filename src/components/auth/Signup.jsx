import React, { useState } from 'react'
import { isValidElement } from 'react'

export default function Signup() {

    const [isIVAO, setIsIVAO] = useState(false)
    const [isVATSIM, setIsVATSIM] = useState(false)

    const handleIVAO = () => {
        setIsIVAO(!isIVAO)
    }

    const handleVATSIM = () => {
        setIsVATSIM(!isVATSIM)
    }

    return (
        <>
            <div className={`w-full h-fit bg-black/50 rounded-2xl px-6 py-6 mb-[80px] text-white`}>
                <p className="text-[26px] mb-6">Register</p>
                <div className="flex w-full my-2">
                    <div className="block w-full mr-1">
                        <p className="text-base font-normal">First Name</p>
                        <input type="text" placeholder="First Name" className="w-full my-1 pl-4 pr-2 py-2 rounded-lg bg-gray-200" />
                    </div>
                    <div className="block w-full ml-1">
                        <p className="text-base font-normal">Last Name</p>
                        <input type="text" placeholder="Last Name" className="w-full my-1 pl-4 pr-2 py-2 rounded-lg bg-gray-200" />
                    </div>
                </div>
                <div className="block w-full my-2">
                    <p className="text-base font-normal">Email Address</p>
                    <input type="text" placeholder="Email Address" className="w-full my-1 pl-4 pr-2 py-2 rounded-lg bg-gray-200" />
                </div>
                <div className="block w-full my-2">
                    <p className="text-base font-normal">Password</p>
                    <input type="password" placeholder="Password" className="w-full my-1 pl-4 pr-2 py-2 rounded-lg bg-gray-200" />
                </div>
                <div className="flex w-full my-2 justify-center items-center">
                    <p className="mx-2 text-lg">Network</p>
                    <div className="flex w-fit">
                        <input type="checkbox" checked={isIVAO} onChange={handleIVAO} className="w-full my-1 pl-4 pr-2 py-2 rounded-lg bg-gray-200" />
                        <p className="mx-2 text-lg">IVAO</p>
                    </div>
                    <div className="flex w-fit">
                        <input type="checkbox" checked={isVATSIM} onChange={handleVATSIM} className="w-full my-1 pl-4 pr-2 py-2 rounded-lg bg-gray-200" />
                        <p className="mx-2 text-lg">VATSIM</p>
                    </div>
                </div>
                <div className={`${isIVAO ? `block` : `hidden`} w-full my-2`}>
                    <p className="text-base font-normal">IVAO</p>
                    <input type="text" placeholder="IVAO" className="w-full my-1 pl-4 pr-2 py-2 rounded-lg bg-gray-200" />
                </div>
                <div className={`${isVATSIM ? `block` : `hidden`} w-full my-2`}>
                    <p className="text-base font-normal">VATSIM</p>
                    <input type="text" placeholder="VATSIM" className="w-full my-1 pl-4 pr-2 py-2 rounded-lg bg-gray-200" />
                </div>
                <div className="w-full my-4 py-2 px-4 rounded-lg bg-red-500 hidden animate-pulse">
                    <p className="text-base font-normal text-white">Email Address is already used.</p>
                </div>
                <div className="flex flex-col w-full h-fit justify-center items-center">
                    <button className="px-10 py-2 bg-slate-700 rounded-md">
                        <p className="text-xl text-white font-normal rounded-lg">Register</p>
                    </button>
                    <div className="flex w-full h-git justify-center items-center my-2">
                        <a href='/authentication' className="text-sm font-semibold underline cursor-pointer">Cancel</a>
                    </div>
                </div>
            </div>
        </>
    )
}