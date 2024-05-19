import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../redux-store/user/User.selector";
import PersonalInfo from "./PersonalInfo";
import Orders from "./Orders";
import { useState } from "react";
import { resetState } from "../redux-store/user/User.reducer";


export default function MyAccount() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch()

    const INFO = "info";
    const ORDERS = "orders";


    const [isActive, setIsActive] = useState(INFO);
    const [page, setPage] = useState("info");


    const actions = [
        { name: "Cont", key: INFO },
        { name: "Comenzi", key: ORDERS }
    ];

    const signOut = () => {
        dispatch(resetState())
    }

    return (
        <div className="w-full text-slate-400 py-20 flex flex-col items-center relative sm:px-10">
            <div className="w-full flex px-5 sm:justify-center sm:max-w-5xl">
                <div className="w-full flex justify-start items-center text-lg  font-bold gap-10 max-w-5xl ">
                    {actions.map((item) => (
                        <button
                            key={item.key}
                            onClick={() => {
                                setIsActive(item.key);
                                setPage(item.key);
                            }}
                            className={`${isActive === item.key ? "text-amber-400" : ""} hover:text-amber-400`}
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
