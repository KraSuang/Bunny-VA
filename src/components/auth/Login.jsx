export default function Login() {
    return (
        <>
            <div className="w-full h-fit bg-black/50 rounded-2xl px-6 py-6 mb-[80px] text-white">
                <p className="text-[26px] mb-6">Login</p>
                <div className="block w-full my-2">
                    <p className="text-base font-normal">Email Address</p>
                    <input type="text" placeholder="Email Address" className="w-full my-1 pl-4 pr-2 py-2 rounded-lg text-gray-800 bg-gray-100" />
                </div>
                <div className="block w-full my-2">
                    <p className="text-base font-normal">Password</p>
                    <input type="password" placeholder="Password" className="w-full my-1 pl-4 pr-2 py-2 rounded-lg text-gray-800 bg-gray-100" />
                </div>
                <div className="w-full my-4 py-2 px-4 rounded-lg bg-red-500 hidden">
                    <p className="text-base font-normal text-white">User not founded.</p>
                </div>
                <div className="flex flex-col w-full h-fit justify-center items-center pt-4">
                    <button className="px-10 py-2 transition-all duration-200 bg-button group hover:bg-button-hover rounded-md scale-100 hover:scale-105">
                        <p className="text-xl text-button-text group-hover:text-button-text-hover font-normal rounded-lg">Login</p>
                    </button>
                    <div className="flex w-full h-git justify-center items-center my-2">
                        <p className="text-sm font-normal mr-1">Don't have account?</p>
                        <a href="/authentication/signup" className="text-sm font-semibold underline cursor-pointer transition-all duration-200 hover:text-text-hover1 hover:scale-110">Register</a>
                    </div>
                </div>
            </div>
        </>
    )
}