import Logo from "../assets/image/bunny.png"
import None from "../assets/image/none-avatar.jpg"

export default function Navbar() {
    return (
        <div className="flex w-full h-[60px] px-8 py-4 justify-between items-center bg-slate-800">
            <div className="flex w-full max-w-[400px] h-full items-center">
                <img src={Logo} className="flex w-fit max-h-[50px] mr-4" />
                <div className="">
                    <p className="font-semibold text-2xl text-white">BUNNY</p>
                    <p className="font-normal text-sm -mt-2 text-white">Virtual Aviation</p>
                </div>
            </div>
            <div className="flex w-full max-w-[400px] justify-end items-center">
                <p className="font-semibold text-xl text-white mx-auto">ABOUT</p> {/* About Page Component */}
                <p className="font-semibold text-xl text-white mx-auto">CREWS</p> {/* Crew Page Component */}
                <div className="flex w-fit h-full mx-auto items-center max-w-[200px]"> 
                    <img src={None} className="flex w-fit max-h-[40px] rounded-full" />
                    <div className="ml-4">
                        <p className="font-semibold text-lg text-white">KraSuang</p> {/* Username */}
                        <p className="font-light -mt-1 text-xs text-gray-300">ID: 512878</p> {/* UserID */}
                    </div>
                </div>
            </div>
        </div>
    )
}