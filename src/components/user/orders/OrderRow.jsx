



export default function OrderRow() {



    return (
        <section className="py-10 relative w-full border-b border-white">
            <div className="w-full max-w-7xl mx-auto">
                <div className="  flex flex-col ">
                    <div className="w-full flex justify-between items-center">
                        <p className="font-medium  text-white">Comanda # 91256800100</p>
                        <h2 className="font-manrope text-white text-lg">LEI 150.00</h2>
                    </div>
                    <div className=" flex justify-center py-5">
                        <img src="https://pagedone.io/asset/uploads/1705403665.png" alt="" className="" />
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <button className="rounded-sm px-3 py-1 bg-amber-400 hover:bg-amber-300 text-black w-full max-w-xs font-semibold">
                            Detalii curs
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}