import OrderRow from "./OrderRow"


export default function Orders({ user }) {


    return (
        <div className="w-full py-10 px-5 text-white flex flex-col gap-5  sm:max-w-5xl lg:py-20">
            <div className="w-full">
                <h1 className=" text-xl lg:text-2xl ">Istoric comenzi</h1>
                <div className="w-full flex flex-col items-start py-10 ">
                    <OrderRow />
                </div>
            </div>


        </div>
    )
}