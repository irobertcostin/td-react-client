import { useNavigate } from "react-router-dom";
import backArrow from "../../images/back-icon.png"



export default function RetourePolicy() {


    let navigate = useNavigate();

    let goHomepage = () => {
        navigate("/")
    }




    return (
        <div className="relative pt-8 lg:pt-14">

            <img src={backArrow} onClick={goHomepage} className="w-8 sm:w-10 absolute top-5 left-7 cursor-pointer sm:left-11"></img>

            <p className="px-8 sm:px-12 mt-12 text-2xl sm:text-3xl lg:text-5xl">Politica de rambursare</p>

            <div className="p-8 sm:p-12 mb-12">

                <h1 className="mb-4 text-xl sm:text-2xl lg:text-3xl">Restituirea banilor</h1>
                <p className="mb-2 sm:mb-4">Plata efectuata prin website este rambursabila doar daca cursanta anunta, cu cel putin 21 de zile inaintea inceperii cursului, ca nu mai poate participa.</p>
                <p>Pretul nu este negociabil si rambursabil in cazul neparticiparii la curs de catre beneficiar sau in cazul in care cursantul este nemultumit de anumite aspecte ale cursului, dat fiind faptul ca programa este prezentata inaintea inscrierii la curs.</p>

                <h1 className="mt-12 mb-4 text-xl sm:text-2xl lg:text-3xl">Responsabilitate</h1>
                <p className="mb-2 sm:mb-4">Beneficiarul va gasi descrierea detaliata a fiecarui curs pe platforma prestatorului, astfel ca acestuia sa ii fie foarte usor sa recunoasca la ce nivel actual de informatii se afla.</p>
                <p>Cursantul are dreptul de a se inscrie la orice curs de pe platforma prestatorului. Acesta din urma nu isi asuma raspunderea daca cursantul nu este de nivelul cursului ales.</p>

            </div>
        </div>
    )
}

