import heroimage from "../../../images/tinahero.png"
import { TypeAnimation, GraphemeSplitter } from "react-type-animation"




export default function Hero() {

    return (
        <div className="w-full   ">

            <div className="w-full relative  min-h-[62vh] flex justify-center">
                <img src={heroimage} className="min-h-[62vh]"></img>

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
        </div>
    )
}
