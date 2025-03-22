import React from "react";

const AboutMe = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4 md:px-10">
            <div className="md:hidden flex flex-col items-center w-full">
                <div className="w-full flex justify-center mb-6">
                    <img 
                        src="src/images/Spongebob2.png" 
                        alt="" 
                        className="w-64 h-auto" 
                    />
                </div>
                <div className='text-left w-full'>
                    <h2 className='font-bold text-3xl'>About Me</h2>
                    <p className='font-medium text-lg text-gray-600 mt-2'>Student</p>
                    <p className='text-gray-700 mt-4'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ipsam maxime cumque expedita iste esse rem dolores molestiae dicta nemo. Tempore modi harum molestias repellendus natus fugiat alias sequi. Sint cumque soluta alias enim expedita qui libero iure ab sunt culpa corporis quia ullam odit,
                    dolor exercitationem accusantium, voluptas quas quo. Quo tempora molestias, eveniet sed voluptatum rem. Fugit, reprehenderit.
                    </p>
                    <div className="mt-6">
                        <button className='bg-green-900 text-white rounded-full px-8 py-2'>Read More</button>
                    </div>
                </div>
            </div>

            <div className="hidden md:flex flex-row justify-center items-center space-x-10 -mt-80">
                <img src="src/images/Spongebob2.png" alt="" className="rounded-lg w-80 h-1/3 mx-6 mr-20" />
                <div className='text-left w-1/4'>
                    <h2 className='font-bold text-5xl'>About Me</h2>
                    <p className='font-bold text-2xl mt-6'>Student</p>
                    <p className='font-semibold text-l mt-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ipsam maxime cumque expedita iste esse rem dolores molestiae dicta nemo. Tempore modi harum molestias repellendus natus fugiat alias sequi. Sint cumque soluta alias enim expedita qui libero iure ab sunt culpa corporis quia ullam odit,
                        dolor exercitationem accusantium, voluptas quas quo. Quo tempora molestias, eveniet sed voluptatum rem. Fugit, reprehenderit.</p>
                    <button className='bg-green-900 text-white rounded-full px-10 py-2 mt-6'>Read More</button>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;