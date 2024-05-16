import { ClipLoader } from "react-spinners"
import { useNavigate } from "react-router-dom";
import { Fragment, useState, useRef } from 'react'
import { Transition, Dialog } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'
import React, { useMemo } from 'react';
import UserService from "../../services/UserApi";




export default function Register() {

    const navigate = useNavigate()
    const userService = new UserService();
    const [loading, setLoading] = useState(false)
    const [regError, setRegError] = useState()
    const [regConfirmation, setRegConfirmation] = useState()
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)


    const [user, setUser] = useState({
        full_name: "",
        email: "",
        password: "",
        confirmedPassword: "",
        address: "",
        city: "",
        country: "",
    })






    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(String(email).toLowerCase());
    };

    const isValidPassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;
        return passwordRegex.test(password);
    };







    const register = async () => {
        if (loading) {
            return
        }
        setRegError("")
        setLoading(true)

        const attempt = await userService.register(user)
        if (attempt && attempt.error) {
            setRegError(attempt.message)
        } else {
            setRegConfirmation(attempt.message)
            setOpen(true)
        }
        setLoading(false)
    };

    const canSubmit = useMemo(() => {
        const isValid = Object.values(user).every(Boolean);
        const isValidEmailValue = isValidEmail(user.email);
        const isValidPasswordValue = isValidPassword(user.password);
        const passwordsMatch = user.password === user.confirmedPassword;
        return isValid && isValidEmailValue && isValidPasswordValue && passwordsMatch;
    }, [user]);


    return (
        <div className="pt-10 pb-32 lg:pb-0 h-full flex justify-center items-center  relative">
            <div className="w-full px-4 max-w-sm sm:max-w-xl  lg:max-w-5xl ">
                <div className="sm:mx-auto sm:w-full sm:max-w-xl  lg:max-w-5xl ">
                    <h2 className="text-start text-3xl font-bold leading-9 tracking-tight text-white">
                        Inregistrare
                    </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-xl lg:max-w-4xl ">
                    <div className="space-y-6 lg:grid lg:grid-cols-2 gap-10" >

                        <div>
                            <label htmlFor="full_name" className="block text-sm font-medium leading-6 text-white">
                                Nume complet
                            </label>
                            <div className="mt-2">
                                <input
                                    id="full_name"
                                    name="full_name"
                                    type="text"
                                    autoComplete="full_name"
                                    required
                                    placeholder="Nume complet"
                                    onChange={(e) => {
                                        setUser({
                                            ...user,
                                            full_name: e.target.value
                                        });
                                    }}
                                    value={user.full_name}
                                    className="block  w-full px-4  outline-0 rounded-sm py-1.5 text-white sm:text-sm sm:leading-6 bg-slate-800 "
                                />
                            </div>
                        </div>

                        <div className="">
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
                                    placeholder="Exemplu: nick@gmail.com"
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
                            <div className="">
                                {user.email && !isValidEmail(user.email) && (
                                    <div className="text-red-500 text-sm">Format email invalid</div>
                                )}
                            </div>

                            <div>
                                {regError !== "" && (
                                    <div className="text-red-500 text-sm">{regError}</div>
                                )}
                            </div>
                        </div>


                        <div>
                            <label htmlFor="address" className="block text-sm font-medium leading-6 text-white">
                                Adresa
                            </label>
                            <div className="mt-2">
                                <input
                                    id="address"
                                    name="address"
                                    type="text"
                                    autoComplete="address"
                                    required
                                    placeholder="Adresa"
                                    onChange={(e) => {
                                        setUser({
                                            ...user,
                                            address: e.target.value
                                        });
                                    }}
                                    value={user.address}
                                    className="block  w-full px-4  outline-0 rounded-sm py-1.5 text-white sm:text-sm sm:leading-6 bg-slate-800 "
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="city" className="block text-sm font-medium leading-6 text-white">
                                Oras
                            </label>
                            <div className="mt-2">
                                <input
                                    id="city"
                                    name="city"
                                    type="text"
                                    autoComplete="city"
                                    required
                                    placeholder="Oras"
                                    onChange={(e) => {
                                        setUser({
                                            ...user,
                                            city: e.target.value
                                        });
                                    }}
                                    value={user.city}
                                    className="block  w-full px-4  outline-0 rounded-sm py-1.5 text-white sm:text-sm sm:leading-6 bg-slate-800 "
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-white">
                                Tara
                            </label>
                            <div className="mt-2">
                                <input
                                    id="country"
                                    name="country"
                                    type="text"
                                    autoComplete="country"
                                    required
                                    placeholder="Tara"
                                    onChange={(e) => {
                                        setUser({
                                            ...user,
                                            country: e.target.value
                                        });
                                    }}
                                    value={user.country}
                                    className="block  w-full px-4  outline-0 rounded-sm py-1.5 text-white sm:text-sm sm:leading-6 bg-slate-800 "
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between ">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                    Parola
                                </label>
                                <div className="text-[8px] w-[50%] text-end">
                                    <p className="font-semibold text-slate-400 ">
                                        Min. 6 caractere, dintre care o cifra, o majuscula si un caracter special
                                    </p>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    placeholder="Alege parola"
                                    onChange={(e) => {
                                        setUser({
                                            ...user,
                                            password: e.target.value
                                        });
                                    }}
                                    value={user.password}
                                    className="block w-full px-4 outline-0 rounded-sm py-1.5 text-white sm:text-sm sm:leading-6 bg-slate-800"
                                />
                            </div>
                            {user.password && !isValidPassword(user.password) && (
                                <div className="text-red-500 text-sm">Parola invalida</div>
                            )}
                        </div>

                        <div>
                            <div className="flex items-center justify-between ">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                    Repeta parola
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="confirmed-password"
                                    name="confirmed-password"
                                    type="password"
                                    autoComplete="confirmed-password"
                                    placeholder="Repeta parola"
                                    required
                                    onChange={(e) => {
                                        setUser({
                                            ...user,
                                            confirmedPassword: e.target.value
                                        });
                                    }}
                                    value={user.confirmedPassword}
                                    className="block w-full px-4 outline-0 rounded-sm py-1.5 text-white sm:text-sm sm:leading-6 bg-slate-800"
                                />
                            </div>
                            <div className="h-2">
                                {user.password !== user.confirmedPassword && (
                                    <div className="text-red-500 text-sm">Parola nu se potriveste</div>
                                )}
                            </div>
                        </div>

                        <div className="lg:col-span-2 lg:flex justify-center ">
                            <button
                                onClick={register}
                                disabled={!canSubmit}
                                className={`${!canSubmit ? "bg-slate-500 text-white" : " bg-amber-400 hover:bg-amber-300 text-black"} "flex w-full lg:max-w-md mt-5 justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6  "`}
                            >
                                {
                                    loading ?
                                        <div className="text-white flex justify-center h-6">
                                            <ClipLoader color="black" size={"20px"} />
                                        </div>
                                        :
                                        <>Inregistreaza-te</>
                                }
                            </button>
                        </div>
                    </div>



                    <div className="mt-10 text-center text-sm text-slate-300">
                        Ai cont deja?{' '}
                        <button onClick={() => { navigate('/autentificare') }} className="font-semibold leading-6 text-amber-400 hover:text-amber-300">
                            Autentifica-te aici
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

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
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
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <ExclamationTriangleIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                                            </div>
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-500">
                                                    Validare adresa email
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
                                                setOpen(false)
                                                navigate("/autentificare")
                                            }
                                            }
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