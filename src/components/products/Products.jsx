import { useState } from "react";
import { HomeIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";


export default function Products() {

    const navigate = useNavigate()



    return (
        <div className="w-full  flex flex-col items-center relative sm:px-10 lg:py-20 ">
            <div className="py-10 w-full text-start text-2xl lg:text-3xl font-semibold text-white px-5 sm:max-w-5xl flex justify-between">
                <h1 className="">Cursuri</h1>
                <HomeIcon onClick={() => { navigate('/') }} className="w-8 text-gray-400 hover:text-white cursor-pointer lg:hidden" />
            </div>

        </div>
    )
}