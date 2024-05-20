import { WhatsAppOutlined } from "@ant-design/icons";
import tiktok from "../../images/tiktok2.png"
import facebook from "../../images/facebook.png"
import insta from "../../images/insta.png"
import { useNavigate } from "react-router-dom";
import tdlogo2 from "../../images/tina-logos/1.png"
import stripe from "../../images/stripe2.png"
import cardlogos from "../../images/stripe-2.png"


export default function Footer() {


    const navigate = useNavigate();

    const goReimbursementPol = () => {
        navigate('/politica-rambursare')
    }

    const goRegistrationPol = () => {
        navigate('/politica-inscriere')
    }

    const goUtilizationPol = () => {
        navigate('/politica-utilizare')
    }

    const goPaymentPol = () => {
        navigate('/politica-plata')
    }

    const goTerms = () => {
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
            className=" text-center text-slate-300  lg:text-left relative pt-20">
            <div className="w-full border-b border-slate-700 border-opacity-50 sm:flex justify-center items-center xl:gap-60">
                <div className=" flex justify-center items-center relative z-50  py-5">
                    <img src={tdlogo2} alt="logo" className=" w-60"></img>
                </div>
                <div
                    className="flex relative z-50 items-center justify-center  p-6  lg:justify-center xl:flex-col xl:gap-5 ">
                    <div className=" hidden xl:block xl:font-bold text-white  text-center">
                        <span>Retele de socializare:</span>
                    </div>

                    <div className="flex justify-center ">

                        <a href="https://www.facebook.com/tinaadriana331" alt="facebook-link" target="_blank" className="mr-6  text-neutral-600 dark:text-neutral-200">
                            <img alt="facebook-icon" className="h-10 w-10" src={facebook}></img>
                        </a>

                        <a href="https://www.tiktok.com/@tinadobre.nailinstructor" alt="tiktok-link" target="_blank" className="mr-6 text-neutral-600 dark:text-neutral-200">
                            <img alt="tiktok-icon" className="h-10 w-10" src={tiktok}></img>
                        </a>

                        <a href="https://www.instagram.com/tinadobre.nailinstructor/" alt="instagram-link" target="_blank" className=" text-neutral-600 dark:text-neutral-200">
                            <img alt="instagram-icon" className="h-10 w-10" src={insta}></img>
                        </a>

                    </div>
                </div>
            </div>

            <div className=" py-10 text-center md:text-left relative z-50 border-b border-slate-700 border-opacity-50">
                <div className="grid-1 mx-6 grid gap-8 md:grid-cols-2 sm:px-10 sm:mx-auto lg:grid-cols-3 lg:px-24">
                    <div className="flex flex-col sm:gap-1 ">
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-white">
                            Politici
                        </h6>

                        <div className="mb-2 cursor-pointer">
                            <p onClick={goTerms} className="text-slate-300 "
                            >Termeni si Conditii</p>
                        </div>

                        <div className="mb-2 cursor-pointer">
                            <p onClick={goReimbursementPol} className="text-slate-300 "
                            >Politica de rambursare</p>
                        </div>
                        <div className="mb-2 cursor-pointer">
                            <p onClick={goRegistrationPol} className="text-slate-300 "
                            >Politica de inscriere</p>
                        </div>

                        <div className="mb-2 cursor-pointer">
                            <p onClick={goPaymentPol} className="text-slate-300 "
                            >Politica de plata</p>
                        </div>

                        <div className="mb-2 cursor-pointer">
                            <p onClick={goUtilizationPol} className="text-slate-300 "
                            >GDPR</p>
                        </div>
                    </div>


                    <div className="">
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-white">
                            Contact
                        </h6>
                        <a
                            href="https://www.google.com/maps/dir/?api=1&destination=Str. Povernei 18, Sector 1, Bucuresti"
                            target="_blank"
                            alt="google-maps-directions"
                            className="mb-4  cursor-pointer flex items-center justify-center md:justify-start">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-6 w-6 mb-2">
                                <path
                                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                <path
                                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                            </svg>
                            Str. Povernei 18, Sector 1, Bucuresti
                        </a>
                        <div
                            onClick={handleEmailButtonClick}
                            className="mb-4 cursor-pointer flex items-center justify-center md:justify-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-6 w-6">
                                <path
                                    d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path
                                    d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>
                            <span className="">nail.instructor@tinadobre.ro</span>
                        </div>
                        <p className=" cursor-pointer mb-4 flex justify-center gap-3 text-center w-full items-center sm:justify-start" onClick={handleWhatsAppButtonClick}><WhatsAppOutlined className="text-2xl" /><span className=" mt-1">Whatsapp message</span></p>

                        <a
                            href="tel:0769896988"
                            alt="phonecall"
                            className=" flex items-center justify-center md:justify-start">
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
                            <span className="ml-1">0769896988</span>

                        </a>


                    </div>
                    <div className=" w-full flex flex-col justify-center items-center rounded-md sm:w-[100vw] xl:w-full xl:justify-start">
                        <img alt="stripe-icon" src={stripe} className="rounded-lg w-80"></img>
                        <img alt="stripe-icon" src={cardlogos} className="rounded-lg w-[330px]"></img>
                    </div>
                </div>
            </div>
            <div className="p-6 text-center flex flex-col sm:flex-row sm:gap-4 justify-center relative z-50">
                <span>© 2024 Copyright: </span>
                <p
                    className="font-semibold  text-amber-400"
                >SC Tina Dobre Nail Artist SRL</p>
            </div>
        </footer>
    )
}