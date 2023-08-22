import { useNavigate } from "react-router-dom";
import backArrow from "../../images/back-icon.png"



export default function PaymentPolicy() {

    let navigate = useNavigate();

    let goHomepage = () => {
        navigate("/")
    }


    return (
        <div className="relative pt-8 lg:pt-14">

            <img src={backArrow} onClick={goHomepage} className="w-8 sm:w-10 absolute top-5 left-7 cursor-pointer sm:left-11"></img>

            <p className="px-8 sm:px-12 mt-12 text-2xl sm:text-3xl lg:text-5xl">Politica de confidentialitate a datelor cu caracter personal</p>


        </div>
    )
}