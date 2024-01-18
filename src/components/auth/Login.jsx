export default function Login() {
    return (
        <>
            <div className="w-full h-fit bg-black/50 rounded-2xl px-6 py-6 mb-[80px] text-white">
                <p className="text-[26px] mb-6">Login</p>
                <div className="block w-full my-2">
                    <p className="text-base font-normal">Email Address</p>
                    <input type="text" placeholder="Email Address" className="w-full my-1 pl-4 pr-2 py-2 rounded-lg bg-gray-200" />
                </div>
                <div className="block w-full my-2">
                    <p className="text-base font-normal">Password</p>
                    <input type="password" placeholder="Password" className="w-full my-1 pl-4 pr-2 py-2 rounded-lg bg-gray-200" />
                </div>
                <div className="w-full my-4 py-2 px-4 rounded-lg bg-red-500 hidden">
                    <p className="text-base font-normal text-white">User not founded.</p>
                </div>
                <div className="flex flex-col w-full h-fit justify-center items-center pt-4">
                    <button className="px-10 py-2 bg-slate-700 rounded-md">
                        <p className="text-xl text-white font-normal rounded-lg">Login</p>
                    </button>
                    <div className="flex w-full h-git justify-center items-center my-2">
                        <p className="text-sm font-normal mr-1">Don't have account?</p>
                        <a href="/authentication/signup" className="text-sm font-semibold underline cursor-pointer">Register</a>
                    </div>
                </div>
            </div>
        </>
    )
}