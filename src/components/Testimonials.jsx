import { useState } from "react"



export default function Testimonials() {

    const testimonials = [
        {
            id: "9",
            author: "Daria Dumitrescu",
            text: "A fost super totul! Esti o persoana minunata, care se dedica, si se observa cat de mult iti place acest domeniu prin nivlul maxim de implicare. Vibe-ul academiei si al grupei a fost extraordinar! Am invatat foarte multe lucruri despre care nu aveam habar ca exista. Ati fost minunate toate si ma simt foarte bine in preajma voastra!",
            img: ""
        },
        {
            id: "1",
            author: "Tamina Sfetcu",
            text: "Mi-a placut foarte multi implicarea ta, Tina! Se vede ca esti dedicata si transmiti foarte usor informatiile! Mi-a placut mult de tot partea de social media, nu toti trainerii o fac!",
            img: ""
        },
        {
            id: "2",
            author: "Ana Tomescu",
            text: "Un vibe extraordinar! La inceput mi-a fost teama ca nu ma voi descurca, sau ca nu imi va placea, dar trainerul este foarte important si iti da incredere! Ma bucur tare mult ca te-am intalnit, si  ca am descoperit secretele meseriei!",
            img: ""
        }

    ]



    const [displayed, setDisplayed] = useState(testimonials[0])


    const changeItem = (element) => {
        setDisplayed(element)
    }




    return (

        <section className="bg-slate-950  relative  overflow-hidden py-10  sm:flex xl:justify-center  xl:px-20">
            <div
                className="absolute inset-x-0  transform-gpu overflow-hidden blur-3xl sm:top-[-10rem] z-10"
                aria-hidden="true"
            >
                <div
                    className="relative left-1/2 z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="w-full  py-5  flex flex-col justify-start items-center px-6 relative z-50 gap-2  sm:justify-center sm:w-[40%] xl:w-[35%] ">
                {
                    testimonials.map((element) => (
                        <figure onClick={() => { changeItem(element) }} key={element.author} className={`${displayed.id == element.id ? "bg-rose-800" : ""} max-w-screen-md flex justify-center cursor-pointer    mx-auto w-full rounded-lg `}>
                            <figcaption className="flex items-center justify-start  space-x-3  py-1   mx-auto  w-[250px] sm:w-[full]  pl-8">
                                <img className="w-10 h-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"></img>
                                <div className="flex mt-2 items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                    <div className="pr-3 font-medium text-3xl text-gray-900 dark:text-white xl:text-4xl">{element.author}</div>
                                </div>
                            </figcaption>
                        </figure>
                    ))
                }
            </div>
            <div className="max-w-screen-xl px-4 py-12 mx-auto text-center lg:py-16 lg:px-6 relative z-50  h-[400px]  flex items-center xl:w-full ">
                {
                    displayed &&
                    <figure key={displayed.author} className=" mx-auto  my-auto  xl:w-full">
                        <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                        </svg>
                        <blockquote>
                            <p className="text-3xl font-medium text-gray-900 dark:text-white xl:text-5xl">{displayed.text}</p>
                        </blockquote>

                    </figure>
                }
            </div>
        </section>

    )
}