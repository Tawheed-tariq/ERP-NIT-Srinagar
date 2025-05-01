export default function Header() {
    return (
        <header className="bg-gradient-to-r from-blue-700 to-indigo-900 text-white shadow-xl relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-blue-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-full h-full bg-indigo-500 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-4 py-8 relative z-10">
                {/* Flex container that changes to column on small screens */}
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
                    {/* Logo container with fixed dimensions */}
                    <div className="bg-white rounded-full p-3 md:mr-6 shadow-lg flex-shrink-0">
                        <img 
                            src="NIT.png" 
                            alt="NIT logo" 
                            className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 rounded-full" 
                        />
                    </div>
                    
                    {/* Text container */}
                    <div className="text-center md:text-left">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                            National Institute of Technology Srinagar
                        </h1>
                    </div>
                </div>
                
                {/* Simple, larger Samarth text */}
                <div className="mt-4 flex justify-center">
                    <p className="text-xl md:text-2xl lg:text-3xl font-semibold italic tracking-wide text-center">
                        Samarth Enterprise Resource Planning
                    </p>
                </div>
            </div>
        </header>
    )
}