import { TypeAnimation } from 'react-type-animation'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
// import Data from '../services/Api'
import { Modal, ConfigProvider } from 'antd';
// import confirmimage from "../images/confirm.webp"
// import confirmimage2 from "../images/confirm2.webp"
import { ClipLoader } from "react-spinners"



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}




export default function Contact({ contact }) {


    // const service = new Data();




    // const 
    const [agreed, setAgreed] = useState(false)
    const [modal2Open, setModal2Open] = useState(false);
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState()

    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: '',
        status: "Must Contact",
        agreed: agreed,
    });

    const { ...allData } = data;

    const canSubmit = [...Object.values(allData)].every(Boolean);



    function resetForm() {
        document.getElementById("first-name").value = "";
        document.getElementById("last-name").value = "";

        document.getElementById("email").value = "";
        document.getElementById("phone-number").value = "";
        document.getElementById("message").value = "";
        setAgreed(false)
        setData({
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            message: "",
            agreed: false
        });
    }



    const newClient = async (item) => {
        setLoading(true)
        if (canSubmit) {

            // let data = await service.createClient(item);

            if (data) {
                resetForm();
                setName(data.first_name)
                setLoading(false)
                setModal2Open(true)

            }
        }

    }



    const handleAggreeChange = () => {
        setAgreed(!agreed)

    }


    const handleRegistration = (e) => {
        e.preventDefault();
        newClient(data)

    };



    const handleWhatsAppButtonClick = () => {
        const phoneNumber = '+40759894218';
        const message = "Hello,%20I%20want%20to%20elevate%20my%20brand%20and%20need%20your%20help.%20Please%20get%20back%20to%20me%20asap!";

        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url);
    };

    return (
        <div ref={contact} className="isolate bg-white px-6 py-10 pb-20 lg:px-8 relative z-40">

            <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                aria-hidden="true"
            >
                <div
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>


            <div className='w-full xl:flex  justify-center items-start xl:px-40 xl:gap-20 '>

                <div className='mx-auto mt-10 max-w-xl sm:mt-20  xl:max-w-5xl xl:w-full'>
                    <div className=' flex flex-col justify-center items-center gap-10  rounded-lg py-16 bg-gradient-to-r from-slate-900 to-slate-700'>
                        <p className='w-full text-center text-4xl text-white px-4 xl:text-7xl'>Contacteaza Academia</p>
                        <div className='flex flex-col gap-2'>
                            <button className=' bg-slate-500 py-2 px-20  hover:bg-opacity-50 text-white rounded-full text-xl'>

                                <a
                                    href="tel:0040759894218"
                                    className='flex justify-center items-center text-2xl'
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="mr-3 h-6 w-6">
                                        <path
                                            fillRule="evenodd"
                                            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                            clipRule="evenodd" />
                                    </svg>
                                    <span className='mt-1'>Apeleaza</span>
                                </a>

                            </button>
                            <button onClick={handleWhatsAppButtonClick} className='flex  justify-center items-center gap-2 bg-slate-500 py-2 px-10 hover:bg-opacity-50 text-white rounded-full text-xl'>
                                <svg className='ml-2' fill="#ffffff" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 308 308" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_468_"> <path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"></path> <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"></path> </g> </g></svg>

                                <span className='mt-1 text-2xl'>WhatsApp</span>

                            </button>

                        </div>
                    </div>

                    <div className='w-full flex flex-col gap-4 justify-center items-center my-10 xl:pb-8 xl:border-2 border-fuchsia-500 rounded-lg'>
                        <p className='w-full text-center xl:mt-16 text-5xl xl:text-4xl text-slate-700'>Sau completeaza formularul</p>
                        <p className='hidden xl:flex text-7xl bg-gradient-to-r from-indigo-600 to-pink-400 bg-clip-text text-transparent'>➡</p>
                    </div>

                </div>


                <div className='mx-auto  max-w-xl sm:mt-20  xl:max-w-5xl xl:w-full'>

                    <form action="" noValidate={false} onSubmit={handleRegistration} className="mx-auto mt-10  max-w-xl sm:mt-20 xl:-mt-8">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" className="block text-3xl leading-6 text-gray-900">
                                    Prenume
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        required={true}
                                        onChange={(e) => {

                                            setData({
                                                ...data,
                                                first_name: e.target.value
                                            });
                                        }}
                                        className=" block w-full text-2xl rounded-md border-0 px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-3xl leading-6 text-gray-900">
                                    Nume
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        required
                                        onChange={(e) => {

                                            setData({
                                                ...data,
                                                last_name: e.target.value
                                            });
                                        }}
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-1 text-2xl text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-3xl leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        onChange={(e) => {
                                            setData({
                                                ...data,
                                                email: e.target.value
                                            });
                                        }}
                                        autoComplete="email"
                                        className="block w-full text-2xl rounded-md border-0 px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number" className="block text-3xl leading-6 text-gray-900">
                                    Telefon
                                </label>
                                <div className="relative mt-2.5">
                                    <div className="absolute inset-y-0 left-0 flex items-center">
                                        <label htmlFor="country" className="sr-only">
                                            Country
                                        </label>
                                    </div>
                                    <input
                                        type="number"
                                        name="phone-number"
                                        id="phone-number"
                                        autoComplete="tel"
                                        onChange={(e) => {
                                            setData({
                                                ...data,
                                                phone: e.target.value

                                            });
                                        }}
                                        className="block w-full text-2xl rounded-md border-0 px-3.5 py-1  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-3xl leading-6 text-gray-900">
                                    Message
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        onChange={(e) => {
                                            setData({
                                                ...data,
                                                message: e.target.value
                                            });
                                        }}
                                        className="block w-full rounded-md border-0 px-3.5 py-1 text-2xl text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                            <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2 ">
                                <div className="flex h-6 items-center">
                                    <Switch
                                        id='switch'
                                        defaultChecked={false}
                                        color='pink'
                                        label="Confirm"
                                        checked={agreed}
                                        // unchecked={!agreed}
                                        onChange={
                                            (e) => {
                                                handleAggreeChange()
                                                setData({
                                                    ...data,
                                                    agreed: !agreed
                                                });

                                            }}
                                        className={classNames(
                                            agreed ? 'bg-indigo-600' : 'bg-gray-200',
                                            'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                        )}
                                    >
                                        <span className="sr-only">Agree to policies</span>
                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                                agreed ? 'translate-x-3.5' : 'translate-x-0',
                                                'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                                            )}
                                        />
                                    </Switch>
                                </div>
                                <Switch.Label className="text-xl w-full  flex gap-1  text-gray-600">
                                    Selectand, esti de acord cu{' '}
                                    <p className="font-semibold text-indigo-600">
                                        politica de&nbsp;confidentialitate
                                    </p>
                                    .
                                </Switch.Label>
                            </Switch.Group>
                        </div>
                        <div className="mt-10">
                            <button
                                type='submit'
                                disabled={!canSubmit}
                                className={`${!canSubmit ? "bg-slate-400" : "bg-gradient-to-r from-slate-900 to-slate-600 hover:bg-gradient-to-l hover:from-fuchsia-600 hover:to-yellow-500"}  w-full rounded-full text-white  px-3.5 py-1 pt-2 text-center text-2xl  shadow-sm flex justify-center items-center`}
                            >
                                {
                                    loading ?

                                        <div className='h-6 flex items-center'>
                                            <ClipLoader className='' size={"25px"} color='white' />
                                        </div>

                                        :

                                        <>Submit</>
                                }

                            </button>
                        </div>
                    </form>
                </div>

            </div>






            <ConfigProvider
                theme={{
                    token: {
                        colorBgBase: "white",
                        colorText: "indigo",
                        colorIcon: "indigo",
                        colorIconHover: "red",
                        padding: 0,
                        paddingLG: 0,
                        borderRadius: 4,

                    },
                }}
            >
                <Modal
                    okButtonProps={{ style: { display: "none" } }}
                    cancelButtonProps={{ style: { display: "none" } }}
                    centered
                    closable={false}
                    open={modal2Open}
                    onOk={() => setModal2Open(false)}
                    onCancel={() => setModal2Open(false)}

                >
                    <div className=' overflow-hidden  h-[40vh] flex flex-col justify-between fredoka-font'>

                        <div className='relative w-full '>
                            {/* <img className='w-40 absolute -top-10 -left-16' alt='conformation' src={confirmimage2}></img> */}
                        </div>


                        <div className=' h-full flex flex-col justify-between items-center z-50 py-6 bg-slate-800 bg-opacity-0'>

                            <div className=' w-full h-full flex justify-center  items-start pt-20 px-10 sm:px-2  pr-6  sm:justify-end sm:pt-0    sm:items-center sm:pl-6 sm:pr-60'>
                                <p className='text-center sm:text-start text-2xl font-bold bg-gradient-to-r from-indigo-600 to-pink-400 bg-clip-text text-transparent'>Thank you for your interest, {name} ! Getting back to you ASAP!</p>

                            </div>
                            <div className='w-full px-4 sm:px-8 flex justify-center md:justify-start'>
                                <button onClick={() => { setModal2Open(false) }} className='bg-slate-900  hover:bg-slate-600  block w-full rounded-full text-white max-w-[200px] px-3.5 py-2.5 text-center text-sm font-semibold  shadow-sm'>
                                    Patiently waiting
                                </button>
                            </div>
                        </div>


                        <div className='relative w-full hidden md:flex'>

                            {/* <img className='w-80 absolute -top-60 md:-top-80 -right-4' alt='conformation' src={confirmimage}></img> */}
                        </div>

                    </div>
                </Modal>
            </ConfigProvider>



        </div>
    )
}
