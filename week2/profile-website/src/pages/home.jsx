import React from "react"

const Home = () => {
    return (
<div className='min-h-screen flex items-center justify-center bg-white px-10'>
            <div className='md:hidden flex flex-col w-full'>
                <div className="flex flex-row">
                    <div className="text-left w-3/5">
                        <p className='font-semibold text-xl'>Hello, It's me</p>
                        <h2 className='font-bold text-4xl mt-3'>Settawut Sirithongkaset</h2>
                        <p className="font-semibold text-xl mt-2">I'm a student</p>
                        <p className="font-semibold text-sm mt-2">Please hold your breath as we dive into a world full of creativity with designer John.</p>
                        <div className="flex space-x-4 mt-4">
                            <a href="https://www.facebook.com/"><img src="https://cdn-icons-png.flaticon.com/512/20/20673.png" alt="" className="w-8 mt-6" /></a>
                            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/3661/3661391.png" alt="" className="w-8 mt-6" /></a>
                            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/3178/3178158.png" alt="" className="w-8 mt-6" /></a>
                        </div>
                        <div className="mt-6">
                            <button className="bg-green-900 text-white px-8 py-2 rounded-full text-sm">My Portfolio</button>
                        </div>
                    </div>
                    <div className="w-2/5 flex justify-end items-center">
                        <img src="src/images/Spongebob3.png" alt="" className="w-full h-auto" />
                    </div>
                </div>
            </div>

            <div className='hidden md:flex flex-row justify-center items-center space-x-10 -mt-80'>
                <div className="text-left w-1/3">
                    <p className='font-semibold text-xl'>Hello, it me</p>
                    <h2 className='font-bold text-4xl mt-3'>Settawut Sirithongkaset</h2>
                    <p className="font-semibold text-xl mt-2">I'm a student</p>
                    <p className="font-semibold text-l mt-2">Please hold your breath as we divide into a world full of creativity with design John</p>
                    <div className="flex space-x-6 mt-4">
                        <a href="https://www.facebook.com/"><img src="https://cdn-icons-png.flaticon.com/512/20/20673.png" alt="" className="w-10 mt-6" /></a>
                        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/3661/3661391.png" alt="" className="w-10 mt-6" /></a>
                        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/3178/3178158.png" alt="" className="w-10 mt-6" /></a>
                    </div>
                    <button className="bg-green-900 text-white px-10 py-2 rounded-full mt-6">My Portfolio</button>
                </div>
                <div className="w-1/2">
                    <img src="src/images/Spongebob3.png" alt="" className="rounded-lg w-80 h-1/3 mx-6" />
                </div>
            </div>
        </div>
    );
}

export default Home;