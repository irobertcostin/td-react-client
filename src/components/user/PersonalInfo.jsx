import { PencilSquareIcon } from "@heroicons/react/20/solid"
import { useState } from "react"


export default function PersonalInfo({ user }) {

    const [showEdit, setShowEdit] = useState(false)


    return (
        <div className="w-full py-10 px-5 text-white flex flex-col gap-10 max-w-5xl ">
            <div className="w-full border-b border-slate-700 lg:grid lg:grid-cols-2 lg:py-10 relative ">
                <h1 className=" text-xl lg:text-xl ">Informatii personale</h1>
                <div className="w-full flex flex-col items-start py-10 lg:justify-start  lg:py-0">
                    <div className="w-full grid grid-cols-3 gap-4">
                        <p >Nume: </p>
                        <p>{user.full_name}</p>
                    </div>
                    <div className="w-full grid grid-cols-3 gap-4">
                        <p >Email: </p>
                        <p>{user.email}</p>
                    </div>
                    <div className="w-full grid grid-cols-3 gap-4">
                        <p >Strada: </p>
                        <p>{user.address}</p>
                    </div>
                    <div className="w-full grid grid-cols-3 gap-4">
                        <p >Oras: </p>
                        <p>{user.city}</p>
                    </div>
                    <div className="w-full grid grid-cols-3 gap-4">
                        <p>Tara: </p>
                        <p>{user.country}</p>
                    </div>
                </div>
                <PencilSquareIcon onClick={() => { setShowEdit(true) }} className="w-6 absolute top-0 lg:top-9 right-0 text-gray-400 hover:text-white cursor-pointer" />
            </div>
            <div className="w-full   flex flex-col justify-start lg:grid lg:grid-cols-2">
                <h1 className=" text-xl lg:text-xl ">Stergere cont </h1>
                <div className="w-full flex flex-col gap-5 py-10 lg:py-0 lg:items-end lg:flex-col-reverse text-xs">
                    <p>Aceasta este o actiune distructiva. Nu mai ai nevoie de cont? Il poti sterge de aici. Actiunea nu este reversibila. Toate informatiile referitoare la acest cont vor fi sterse definitiv.</p>
                    <button
                        className="bg-red-600 hover:bg-red-500 text-white flex w-full  justify-center rounded-sm sm:max-w-xs lg:max-w-full  px-3 py-1 text-sm font-semibold leading-6 "
                    >
                        Sterge cont
                    </button>
                </div>
            </div>
        </div>
    )
}