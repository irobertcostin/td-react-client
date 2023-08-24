import { WhatsAppOutlined } from "@ant-design/icons";
import tiktok from "../images/tiktok2.png"
import facebook from "../images/facebook.png"
import insta from "../images/insta.png"
import { useNavigate } from "react-router-dom";
import tdlogo from "../images/td-logoalb.png"
import netopia from "../images/netopia-black.png"
import tdlogo2 from "../images/tdlogoremake.jpeg"



export default function Footer() {


    let navigate = useNavigate();

    let goReimbursementPol = () => {
        navigate('/politica-rambursare')
    }

    let goRegistrationPol = () => {
        navigate('/politica-inscriere')
    }

    let goUtilizationPol = () => {
        navigate('/politica-utilizare')
    }

    let goPaymentPol = () => {
        navigate('/politica-plata')
    }

    let goTerms = () => {
        navigate('/termeni-conditii')
    }



    const handleEmailButtonClick = () => {
        const email = 'nail.instructor@tinadobre.ro';
        const subject = 'Salut';
        const body = 'Buna Tina,';

        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };


    const handleWhatsAppButtonClick = () => {
        const phoneNumber = '0769896988';
        const message = 'Buna Tina, Ce mai faci?';

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url);
    };





    return (
        <footer
            className="bg-black text-center text-slate-300  lg:text-left">


            <div className="w-full flex justify-center items-center">
                <img src={tdlogo} className=" w-40"></img>
            </div>


            <div
                className="flex items-center justify-center border-b-2 border-slate-700 p-6  lg:justify-center">
                <div className="mr-12 hidden sm:block">
                    <span>Retele de socializare:</span>
                </div>

                <div className="flex justify-center">

                    <a href="https://www.facebook.com/tinaadriana331" target="_blank" className="mr-6  text-neutral-600 dark:text-neutral-200">
                        <img className="h-10 w-10" src={facebook}></img>
                    </a>

                    <a href="https://www.tiktok.com/@tinadobre.nailinstructor" target="_blank" className="mr-6 text-neutral-600 dark:text-neutral-200">
                        <img className="h-10 w-10" src={tiktok}></img>
                    </a>

                    <a href="https://www.instagram.com/tinadobre.nailinstructor/" target="_blank" className=" text-neutral-600 dark:text-neutral-200">
                        <img className="h-10 w-10" src={insta}></img>
                    </a>

                </div>
            </div>

            <div className="mx-6 py-10 text-center md:text-left">
                <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:px-24">

                    {/* <div className="">
                        <h6
                            className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-4 w-4">
                                <path
                                    d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                            </svg>
                            Tailwind ELEMENTS
                        </h6>
                        <p>
                            Here you can use rows and columns to organize your footer
                            content. Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                        </p>
                    </div> */}

                    {/* <div className="">
                        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Products
                        </h6>
                        <p className="mb-4">
                            <a href="#!" className="text-neutral-600 dark:text-neutral-200"
                            >Angular</a>
                        </p>
                        <p className="mb-4">
                            <a href="#!" className="text-neutral-600 dark:text-neutral-200"
                            >React</a>
                        </p>
                        <p className="mb-4">
                            <a href="#!" className="text-neutral-600 dark:text-neutral-200"
                            >Vue</a>
                        </p>
                        <p>
                            <a href="#!" className="text-neutral-600 dark:text-neutral-200"
                            >Laravel</a>
                        </p>
                    </div> */}

                    <div className="flex flex-col sm:gap-1">
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Politici
                        </h6>
                        <p className="mb-4 cursor-pointer">
                            <p onClick={goReimbursementPol} className="text-slate-300 "
                            >Politica de rambursare</p>
                        </p>
                        <p className="mb-4 cursor-pointer">
                            <p onClick={goRegistrationPol} className="text-slate-300 "
                            >Politica de inscriere</p>
                        </p>

                        {/* <p className="mb-4 cursor-pointer">
                            <p onClick={goPaymentPol} className="text-slate-300 "
                            >Politica de plata</p>
                        </p> */}
                        <p className="mb-4 cursor-pointer">
                            <p onClick={goTerms} className="text-slate-300 "
                            >Termeni si Conditii</p>
                        </p>
                        <p className="mb-4 cursor-pointer">
                            <p onClick={goUtilizationPol} className="text-slate-300 "
                            >GDPR</p>
                        </p>
                    </div>


                    <div>
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Contact
                        </h6>
                        <a
                            // onClick={handleAddressClick}
                            href="https://www.google.com/maps/dir/?api=1&destination=Str. Povernei 18, Sector 1, Bucuresti"
                            target="_blank"
                            className="mb-4 cursor-pointer flex items-center justify-center md:justify-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-5 w-5">
                                <path
                                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                <path
                                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                            </svg>
                            Str. Povernei 18, Sector 1, Bucuresti
                        </a>
                        <p
                            onClick={handleEmailButtonClick}
                            className="mb-4 cursor-pointer flex items-center justify-center md:justify-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-5 w-5">
                                <path
                                    d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path
                                    d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>
                            nail.instructor@tinadobre.ro
                        </p>
                        <p className="text-2xl cursor-pointer mb-4 flex justify-center gap-3 text-center w-full items-center sm:justify-start" onClick={handleWhatsAppButtonClick}><WhatsAppOutlined className="" /><p className="text-[16px]">Whatsapp message</p></p>

                        <a
                            href="tel:PHONE_NUM"
                            className="mb-4 flex items-center justify-center md:justify-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                    clipRule="evenodd" />
                            </svg>
                            0769896988
                        </a>


                    </div>

                    <div className=" w-full flex justify-center items-center">
                        <img src={netopia}></img>
                    </div>



                </div>
            </div>


            <div className="bg-black p-6 text-center flex flex-col sm:flex-row sm:gap-4 justify-center">
                <span>© 2023 Copyright: </span>
                <p
                    className="font-semibold text-slate-200"
                    href="https://tailwind-elements.com/"
                >SC Tina Dobre Nail Artist SRL</p>
            </div>
        </footer>
    )
}