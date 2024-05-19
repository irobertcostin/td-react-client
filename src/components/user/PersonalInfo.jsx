


export default function PersonalInfo({ user }) {


    return (
        <div className="w-full py-10 px-5 text-white flex flex-col gap-5 max-w-5xl ">
            <h1 className="font-semibold">Informatii personale</h1>
            <div className="w-full flex flex-col items-start ">
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




            <div className="w-full   flex flex-col justify-start items-center sm:items-start gap-5 py-10 max-w-2xl">
                <div className="w-full">
                    <p className="font-bold mb-4">Stergere cont </p>
                    <p>Aceasta este o actiune destructiva. Nu mai ai nevoie de cont? Il poti sterge de aici. Actiunea nu este reversibila. Toate informatiile referitoare la acest cont vor fi sterse definitiv.</p>
                </div>
                <div className="w-full flex justify-center items-center sm:justify-start">
                    <button
                        className="bg-red-600 hover:bg-red-500 text-white flex w-full  justify-center rounded-sm sm:max-w-xs  px-3 py-1 text-sm font-semibold leading-6 "
                    >
                        Sterge cont
                    </button>
                </div>
            </div>


        </div>
    )
}