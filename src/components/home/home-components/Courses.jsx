import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



export default function Courses() {


    const navigate = useNavigate()


    const callouts = [
        {
            name: '3 Tipuri de intretinere',
            description: 'Toate secretele muncii de salon',
            imageSrc: 'https://res.cloudinary.com/dqvazcqdl/image/upload/v1713610945/curs2_r0vvf7.png',
            imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',

        },
        {
            name: 'Tips Master',
            description: 'Cele mai cerute tehnici din domeniu',
            imageSrc: 'https://res.cloudinary.com/dqvazcqdl/image/upload/v1713611087/curs3_gop4rb.jpg',
            imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',

        },
        {
            name: 'Curs de baza',
            description: 'De la incepator la expert',
            imageSrc: 'https://res.cloudinary.com/dqvazcqdl/image/upload/v1713610660/curs1_v2writ.png',
            imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
            href: '#',
        },
    ]




    return (
        <div className="bg-transparent  ">
            <div className="mx-auto max-w-7xl xl:max-w-[1450px] px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-16">
                    <div className="w-full  flex justify-between items-center">
                        <h2 className="text-xl font-semibold  text-white lg:text-3xl">Cursuri</h2>
                        <button onClick={() => { navigate('/cursuri') }} className="text-md   text-amber-400 lg:text-xl">Afla mai mult</button>
                    </div>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {callouts.map((callout) => (
                            <div key={callout.name} className="group relative">
                                <div className="relative shadow-xl h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 sm:h-64">
                                    <img
                                        src={callout.imageSrc}
                                        alt={callout.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-lg font-semibold  text-white">
                                    <p>
                                        <span className="absolute inset-0" />
                                        {callout.name}
                                    </p>
                                </h3>
                                <p className="text-md   text-gray-400">{callout.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
