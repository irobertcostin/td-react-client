import { useState, useRef, Fragment } from "react";
import { ClipLoader } from "react-spinners"
import { useNavigate } from "react-router-dom";
import UserService from "../../services/UserApi";
import { Transition, Dialog } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'
import { useDispatch, useSelector } from "react-redux";
import { signedIn, statuses } from "../redux-store/user/User.reducer";
import { selectToken, selectUser, selectUserStatus } from "../redux-store/user/User.selector";




export default function Login() {

    const navigate = useNavigate()
    const userService = new UserService();

    const dispatch = useDispatch();
    const status = useSelector(selectUserStatus)
    const token = useSelector(selectToken)



    const [loginAccountError, setLoginAccountError] = useState("")
    const [loginPassError, setLoginPassError] = useState("")
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const [regConfirmation, setRegConfirmation] = useState()
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)


    const { ...allData } = user;
    const canSubmit = [...Object.values(allData)].every(Boolean);


    const getUser = async (token) => {

        const user = await userService.getUser(token);
        return user;
    }

    const login = async () => {
        if (loading) {
            return
        }
        setLoginAccountError("")
        setLoginPassError("")
        setLoading(true)
        const attempt = await userService.login(user)
        if (attempt && attempt.message) {
            let message = attempt.message
            if (message.includes("password must be longer than or equal to 6 characters") || message.includes("Parola incorecta")) {
                setLoginPassError(attempt.message)
            } else if (message.includes("Un link de validare")) {
                setOpen(true);
                setRegConfirmation(attempt.message)
            } else {
                setLoginAccountError(attempt.message)
            }
        } else if (attempt && attempt.token) {
            let user = await getUser(attempt.token)
            dispatch(signedIn({ user: user, token: attempt.token, status: statuses.SIGNED_IN }))
            navigate("/")
        }
        setLoading(false)
    };



    return (
        <div className="h-[80vh]   flex justify-center items-center">
            <div className="w-full max-w-xs lg:max-w-md">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm lg:max-w-md">
                    <h2 className="text-start text-3xl font-bold leading-9 tracking-tight text-white">
                        Autentificare
                    </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm lg:max-w-md">
                    <div className="space-y-6" >
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    placeholder="Email"
                                    onChange={(e) => {
                                        setUser({
                                            ...user,
                                            email: e.target.value
                                        });
                                    }}
                                    value={user.email}
                                    className="block w-full px-4 outline-0 rounded-sm py-1.5 text-white sm:text-sm sm:leading-6 bg-slate-800"
                                />
                            </div>
                            <div className="h-2">
                                {loginAccountError !== "" && (
                                    <div className="text-red-500 text-sm">{loginAccountError}</div>
                                )}
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between ">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                    Parola
                                </label>
                                <div className="text-sm">
                                    <button
                                        onClick={() => { navigate("/resetare-parola") }}
                                        className="font-semibold text-amber-400 hover:text-amber-300 ">
                                        Ai uitat parola?
                                    </button>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="password"
                                    required
                                    onChange={(e) => {
                                        setUser({
                                            ...user,
                                            password: e.target.value
                                        });
                                    }}
                                    value={user.password}
                                    className="block w-full px-4 outline-0 rounded-sm py-1.5 text-white sm:text-sm sm:leading-6 bg-slate-800"
                                />
                                <div className="h-2">
                                    {loginPassError !== "" && (
                                        <div className="text-red-500 text-sm">{loginPassError}</div>
                                    )}
                                </div>

                            </div>
                        </div>

                        <div className="">
                            <button
                                onClick={login}
                                disabled={!canSubmit}
                                className={`${!canSubmit ? "bg-slate-500 text-white" : " bg-amber-400 hover:bg-amber-300 text-black"} "flex w-full lg:max-w-md mt-10 justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6  "`}
                            >
                                {
                                    loading ?
                                        <div className="text-white flex justify-center h-6">
                                            <ClipLoader color="black" size={"20px"} />
                                        </div>
                                        :
                                        <>Autentifica-te</>
                                }
                            </button>
                        </div>
                    </div>
                    <div className="mt-10 text-center text-sm text-gray-500">
                        Nu ai cont?{' '}
                        <button onClick={() => { navigate('/inregistrare') }} className="font-semibold leading-6 text-amber-400 hover:text-amber-300">
                            Inregistreaza-te aici
                        </button>
                    </div>
                </div>
            </div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity " />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto sm:pl-14 lg:pl-72">
                        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <ExclamationTriangleIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                                            </div>
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-500">
                                                    Validare cont
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-black">

                                                        {
                                                            regConfirmation &&
                                                            <>{regConfirmation}</>
                                                        }

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md bg-amber-400 hover:bg-amber-300 px-3 py-2 text-sm font-semibold text-black shadow-sm  sm:ml-3 sm:w-auto lg:max-w-md"
                                            onClick={() => {
                                                setOpen(false);
                                                navigate("/autentificare")
                                            }}
                                            ref={cancelButtonRef}
                                        >
                                            Am inteles
                                        </button>

                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}