export default function WelcomePage() {
    return (
        <div className="bg-gradient-to-tr from-red-800 to-orange-400 relative h-screen w-screen flex flex-row-reverse justify-center">

            <div className='w-1/2 hidden md:flex '>
                <img
                    className=" inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-100"
                    alt="main background image"
                    src="https://cdn.midjourney.com/ea7d13a0-64ab-4273-b9dd-1d5d476443b6/0_2.webp"
                />
            </div>

            <div className='md:w-1/2 justify-center items-center flex'>

                <div className=" inset-0 flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto text-center">
                    <div className="space-y-8">
                        <h1 className="font-primary font-extrabold text-white text-3xl sm:text-4xl md:text-5xl md:leading-tight">
                            Thanks for joining
                        </h1>
                        <p className="font-secondary text-palette-light text-white md:text-lg lg:text-xl">
                            We will email you with more details soon.
                        </p>
                    </div>
                </div>
            </div>

        </div >)
}
