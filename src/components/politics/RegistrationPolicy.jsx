import { useNavigate } from "react-router-dom";
import backArrow from "../../images/back-icon.png"



export default function RegistrationPolicy() {


    let navigate = useNavigate();

    let goHomepage = () => {
        navigate("/")
    }




    return (
        <div className="relative pt-8 lg:pt-14">

            <img src={backArrow} onClick={goHomepage} className="w-8 sm:w-10 absolute top-5 left-7 cursor-pointer sm:left-11"></img>

            <p className="px-8 sm:px-12 mt-12 text-2xl sm:text-3xl lg:text-5xl">Politica de inscriere</p>

            <div className="p-8 sm:p-12 mb-12">

                <h1 className="mb-4 text-xl sm:text-2xl lg:text-3xl">Inscrierea</h1>
                <p className="mb-2 sm:mb-4">Poate fi realizata prin achizitionarea cursurilor de pe website, sectiunea Cursuri.</p>
                <p className="mb-2 sm:mb-4">In limita locurilor disponibile afisate pe website, cursantul rezerva in mod automat locul la cursul dorit, numai dupa ce plata a fost efectuata online, cu cardul, pentru cursul respectiv.</p>
                <p className="mb-2 sm:mb-4">Inainte de a va inscrie si de a achita cursul, va rugam sa cititi cu atentie detaliile: denumire curs, durata, localitatea de desfasurare si numarul maxim de locuri la curs.</p>
                <p className="mb-2 sm:mb-4">Cursurile se desfasoara fizic in localitatile afisate pe website pentru fiecare curs in parte.</p>

                <h1 className="mt-12 mb-4 text-xl sm:text-2xl lg:text-3xl">Cum intri in posesia cursurilor</h1>
                <p className="mb-2 sm:mb-4">Utilizatorii intra in posesia cursurilor imediat dupa ce plata a fost efectuata, acestia avand locul rezervat pentru cursul achitat prin intermediul website-ului.</p>
                <p>Acestia primesc un mail de confirmare atat pentru plata efectuata, cat si pentru inscrierea la curs. Participantii la cursuri vor fi contactati in prealabil, inainte de inceperea cursurilor fizice, cat si pentru cele online, pentru a le oferi toate detaliile.</p>

            </div>
        </div>
    )
}