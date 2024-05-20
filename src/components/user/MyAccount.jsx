import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../redux-store/user/User.selector";
import PersonalInfo from "./PersonalInfo";
import Orders from "./orders/Orders";
import { useState } from "react";
import { resetState } from "../redux-store/user/User.reducer";
import { HomeIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";


export default function MyAccount() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const INFO = "info";
    const ORDERS = "orders";


    const [isActive, setIsActive] = useState(INFO);
    const [page, setPage] = useState("info");


    const actions = [
        { name: "Info", key: INFO },
        { name: "Comenzi", key: ORDERS }
    ];

    const signOut = () => {
        dispatch(resetState())
    }

    return (
        <div className="w-full  flex flex-col items-center relative sm:px-10 lg:py-20 ">
            <div className="py-10 w-full text-start text-2xl lg:text-3xl font-semibold text-white px-5 sm:max-w-5xl flex justify-between">
                <h1 className="">Contul meu</h1>
                <HomeIcon onClick={() => { navigate('/') }} className="w-8 text-gray-400 hover:text-white cursor-pointer lg:hidden" />
            </div>
            <div className="w-full flex px-5 sm:justify-center sm:max-w-5xl">
                <div className="w-full flex justify-start items-center text-lg text-gray-400  font-semibold gap-5 sm:gap-10 max-w-5xl ">
                    {actions.map((item) => (
                        <button
                            key={item.key}
                            onClick={() => {
                                setIsActive(item.key);
                                setPage(item.key);
                            }}
                            className={`${isActive === item.key ? "text-amber-400" : ""} hover:text-amber-400 lg:text-2xl`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
                <button
                    onClick={signOut}
                    className="bg-amber-400 hover:bg-amber-300 text-black flex w-52 justify-center rounded-sm  px-3 py-1 text-sm font-semibold leading-6 "
                >
                    Delogheaza-te
                </button>
            </div>
            <div className="w-full flex justify-center ">
                {(() => {
                    switch (page) {
                        case INFO:
                            return <PersonalInfo user={user} />;
                        case ORDERS:
                            return <Orders user={user} />;
                        default:
                            return <PersonalInfo user={user} />;
                    }
                })()}
            </div>
        </div>
    );
}
