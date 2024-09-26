export function Page1() {
    return (
        <div style={{ backgroundColor: '#041125' }} className="min-h-screen justify-between relative pt-4 pb-4">
            
            <div className="mx-4 rounded-lg p-[3px] bg-[linear-gradient(to_right,_#8BA4A2_0%,_#E29E54_44%,_#A66ED0_82%,_#D296B3_100%)]"> {/* Gradient border */}
                <div style={{ backgroundColor: '#041125' }} className=" rounded-lg"> {/* Inner content with gray background */}
                    
                    {/* Navbar */}
                    <div className="flex flex-col lg:flex-row h-auto lg:h-16 justify-between rounded-lg items-center px-4 py-4 lg:py-0 relative navbar">
                        
                        {/* 3-dots image in upper-left corner */}
                        <div className="absolute top-4 left-4 lg:relative lg:top-0 lg:left-0 lg:flex lg:items-start lg:flex-col">
                            {/* 3-dots image */}
                            <img src="/assets/3dots.png" className="h-2" alt="dots" />


                            {/* Logo - below and right of 3-dots on large screens */}
                            <img 
                                src="/assets/logo.png" 
                                className="h-6 mt-4 lg:mt-2 lg:ml-2 lg:relative lg:left-6 lg:top-2 lg:inline-block lg:flex lg:items-start hidden lg:block" 
                                alt="logo"
                            />
                        </div>

                        {/* Responsive middle logo on smaller screens */}
                        <div className="flex justify-center mt-3 w-full lg:hidden">
                            <img src="/assets/logo.png" className="h-6" alt="logo" />
                        </div>

                        {/* Buttons Section */}
                        <div className="flex flex-row justify-between lg:justify-end gap-2 mt-2 lg:mt-0 w-full lg:w-auto">
                            <div className="flex justify-start">
                                <img className="h-7" src="/assets/home.png" alt="home" />
                            </div>
                            <div className="flex justify-center gap-4 items-center">
                                {/* Previous Button with Circle */}
                                <div className="relative">
                                    <img className="h-4 z-10 absolute inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="/assets/prev.png" alt="previous" />
                                    <img className="h-6 w-6" src="/assets/Circle.png" alt="circle-prev" />
                                </div>
        
                                {/* Next Button with Circle */}
                                <div className="relative">
                                    <img className="h-4 z-10 absolute inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="/assets/next.png" alt="next" />
                                    <img className="h-6 w-6" src="/assets/Circle.png" alt="circle-next" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="border-t-0 border-b-[4px] border-[#8BA4A2]" /> 
        
                    {/* Content */}
                    <div className="flex flex-col lg:flex-row p-6 lg:p-28 justify-between rounded-lg gap-8">
                        {/* Text and Button Section */}
                        <div className="text-center lg:text-left flex flex-col justify-center lg:justify-start items-center lg:items-start lg:w-1/2">
                            <p className="font-urbanist mt-8 text-3xl lg:text-4xl text-white">Congratulations!!!</p>
                            <p className="font-urbanist mt-4 text-white">You have a X Genesis Conqueror Allocation</p>
                            <p className="font-urbanist text-white">On-Chain Claim will be available after a pre-reveal Trading Window</p>
                            <p className="font-urbanist text-white">Click below to see your allocation</p>
        
                            {/* Middle Button (hidden on mobile) */}
                            <button className="font-urbanist mt-4 w-48 lg:w-56 h-12 bg-[linear-gradient(to_right,_#E38B61_0%,_#4E1D13_100%)] rounded-lg text-xl text-white hidden lg:block">
                                My allocation
                            </button>

                        </div>
        
                        {/* Image Section */}
                        <div className="flex justify-center lg:justify-end lg:w-1/2">
                            <img className="h-48 lg:h-96" src="/assets/card.png" alt="card" />
                        </div>
                    </div>
        
                    <div className="flex justify-center lg:hidden mt-8">
                        <button className="font-urbanist w-48 mb-4 lg:w-56 h-12 bg-[linear-gradient(to_right,_#E38B61_0%,_#4E1D13_100%)] rounded-lg text-xl text-white  block lg:hidden">
                            My allocation
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
