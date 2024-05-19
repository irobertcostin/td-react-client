

import heroimage from "../../images/tinahero.png"
import { TypeAnimation, GraphemeSplitter } from "react-type-animation"




export default function Hero() {

    return (
        <div className="w-full   ">

            <div className="w-full relative  min-h-[62vh] flex justify-center">
                <img src={heroimage} className=""></img>

                <div className="w-full  absolute bottom-24  sm:bottom-60 xl:bottom-72">

                    <div className="w-full bg-white bg-opacity-10 text-white backdrop-filter backdrop-blur-lg    flex flex-col py-5 sm:py-10 xl:py-16 gap-5 text-center ">
                        <p className="font-extrabold text-xl text-amber-400 sm:text-3xl xl:text-5xl">
                            <TypeAnimation
                                sequence={[

                                    'cursuri', //  Continuing previous Text
                                    500,
                                    'cursuri autorizate',
                                    500,
                                    'cursuri autorizate de',
                                    500,
                                    'cursuri autorizate de manichiura',
                                    500,
                                ]}
                                cursor={false}
                                repeat={false}
                            // splitter={(str) => new GraphemeSplitter().splitGraphemes(str)}
                            />
                        </p>
                    </div>

                </div>
            </div>

            <div className=" w-full  text-center text-[12px] text-white  py-10 sm:text-xl xl:text-2xl">
                <p>Trainer National si International in Tehnica Ruseasca</p>
                <p className="font-extrabold text-2xl mt-4 sm:text-3xl xl:text-4xl">TINA DOBRE</p>
                <p className="mt-4">De la o simpla manichiurista la femeie de afaceri.</p>
                <p className="">Te ajut sa incepi aceasta meserie si sa iti formezi <span className="text-amber-400">propriul business.</span></p>
            </div>






            {/* <div className="relative isolate   lg:px-8 z-10 ">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu  blur-3xl overflow-hidden"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>


                <div className=" overflow-hidden   bg-transparent mt-10 sm:mt-20 relative z-50 ">
                    <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                            <div className="sm:max-w-lg  text-center ">


                                <div className="flex lg:flex-1   justify-center">
                                    <a href="#" className="-m-1.5 p-1.5">
                                        <span className="sr-only">Your Company</span>
                                        <img
                                            className="h-40 xl:h-60  w-auto"
                                            src={tdlogo2}
                                            alt=""
                                        />
                                    </a>
                                </div>


                                <p className="mt-10 text-3xl sm:text-4xl text-black ">
                                    Fie ca vrei sa iti dezvolți abilitatile, sa incepi o cariera in domeniu sau sa iti deschizi propriul salon de manichiura, suntem alegerea potrivita pentru tine.
                                </p>
                            </div>
                            <div className='w-full  flex justify-center  sm:justify-start sm:pl-28'>
                                <button

                                    className="inline-block my-10 cursor-pointer rounded-full border border-transparent bg-gradient-to-r from-slate-900 to-slate-700 px-10 py-1  text-center text-2xl sm:text-3xl sm:px-20 text-white relative z-50"
                                >
                                    Descopera mai mult
                                </button>
                            </div>
                            <div>
                                <div className="min-h-[200px] ">

                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                                    >
                                        <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                            <div className="flex items-center space-x-6 lg:space-x-8">
                                                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                    <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 xl:h-72 xl:w-52">
                                                        <video
                                                            // src="https://res.cloudinary.com/dqvazcqdl/video/upload/v1713566477/video1_jlpzqt.mp4"
                                                            alt="video-1"
                                                            src={video1}
                                                            autoPlay={true}
                                                            muted={true}
                                                            loop={true}
                                                            playsInline={true}
                                                            controls={false}

                                                            className="h-full w-full object-cover object-center"
                                                        />
                                                    </div>
                                                    <div className="h-64 w-44 overflow-hidden rounded-lg xl:h-72 xl:w-52">
                                                        <video
                                                            alt="video-2"
                                                            src={video2}
                                                            autoPlay={true}
                                                            muted={true}
                                                            loop={true}
                                                            playsInline={true}
                                                            controls={false}
                                                            // src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                                                            className="h-full w-full object-cover object-center"
                                                        />

                                                    </div>
                                                </div>
                                                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                    <div className="h-64 w-44 overflow-hidden rounded-lg xl:h-72 xl:w-52">
                                                        <video
                                                            alt="video-3"
                                                            src={video3}
                                                            autoPlay={true}
                                                            muted={true}
                                                            loop={true}
                                                            playsInline={true}
                                                            controls={false}
                                                            className="h-full w-full object-cover object-center"
                                                        />
                                                    </div>
                                                    <div className="h-64 w-44 overflow-hidden rounded-lg xl:h-72 xl:w-52">
                                                        <video
                                                            alt="video-4"
                                                            src={video4}
                                                            autoPlay={true}
                                                            muted={true}
                                                            loop={true}
                                                            playsInline={true}
                                                            controls={false}
                                                            className="h-full w-full object-cover object-center"
                                                        />
                                                    </div>
                                                    <div className="h-64 w-44 overflow-hidden rounded-lg xl:h-72 xl:w-52">
                                                        <video
                                                            alt="video-3"
                                                            src={video3}
                                                            autoPlay={true}
                                                            muted={true}
                                                            loop={true}
                                                            playsInline={true}
                                                            controls={false}
                                                            className="h-full w-full object-cover object-center"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 ">
                                                    <div className="h-64 w-44 overflow-hidden rounded-lg xl:h-72 xl:w-52">
                                                        <video
                                                            alt="video-2"
                                                            src={video2}
                                                            autoPlay={true}
                                                            muted={true}
                                                            loop={true}
                                                            playsInline={true}
                                                            controls={false}
                                                            // src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                                                            className="h-full w-full object-cover object-center"
                                                        />
                                                    </div>
                                                    <div className="h-64 w-44 overflow-hidden rounded-lg xl:h-72 xl:w-52">
                                                        <video
                                                            alt="video-2"
                                                            src={video2}
                                                            autoPlay={true}
                                                            muted={true}
                                                            loop={true}
                                                            playsInline={true}
                                                            controls={false}
                                                            // src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                                                            className="h-full w-full object-cover object-center"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div> */}
        </div>
    )
}
