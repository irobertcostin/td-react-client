import { useNavigate } from "react-router-dom";
import backArrow from "../../images/back-icon.png"


export default function UtilizationPolicy() {


    let navigate = useNavigate();

    let goHomepage = () => {
        navigate("/")
    }


    return (
        <div className="relative pt-8 lg:pt-14">

            <img src={backArrow} onClick={goHomepage} className="w-8 sm:w-10 absolute top-5 left-7 cursor-pointer sm:left-11"></img>

            <p className="px-8 sm:px-12 mt-12 text-2xl sm:text-3xl lg:text-5xl">Politica de confidentialitate a datelor cu caracter personal</p>

            <div className="p-8 sm:p-12 mb-12">

                <h1 className="mb-4 text-xl sm:text-2xl lg:text-3xl">Despre informatiile tale</h1>
                <p className="mb-2 sm:mb-4">Datele furnizate pentru completarea comenzilor efectuate si pentru inscrierea la newsletter vor fi considerate confidentiale de catre noi, si nu vor fi divulgate catre niciun tert pentru alta folosinta.</p>
                <p className="mb-2 sm:mb-4">Numele, numarul de telefon, adresa de email, adresa de livrare, cardul de debit/credit, suma si alte detalii pentru finalizarea diverselor actiune pe website vor ramane strict in interiorul firmei SC Tina Dobre Nail Instructor SRL.</p>
                <p>Toate aceste detalii sunt utilizate in spatiul online pentru clarificare si pentru ca lucrurile sa poata fi finalizate cu succes, de catre ambele parti.</p>
                <h1 className="mt-12  mb-4 text-xl sm:text-2xl lg:text-3xl">Despre politica de confidentialitate</h1>
                <p className="mb-2 sm:mb-4">Prin furnizarea adresei de email pe website-ul www.tinadobre.ro, va veti da consimtamantul in mod expres si neechivoc ca datele dumneavoastra cu caracter personal sa intre in baza de date a societatii SC Tina Dobre Nail Instructor SRL si sa fie prelucrate si folosite in viitor de catre aceasta.</p>
                <p className="mb-2 sm:mb-4">Scopul colectarii datelor de catre societate este transmiterea de oferte, promotii, mesaje publicitare si de marketing, de pe site-urile administrate de noi, efectuarea de statistici interne, fara alte obligatii din partea dumneavoastra. Societatea va prelucra datele cu caracter personal pe perioada existentei contului persoanei vizate, iar ulterior stergerii contului, societatea va transforma datele cu caracter personal in date anonime si le va prelucra in scopul statisticilor interne.</p>
                <p className="mb-2 sm:mb-4">Pe durata existenta a societatii, garantam confidentialitatea datelor personale ale tuturor celor care completeaza formularul de inscriere.</p>
                <p className="mb-2 sm:mb-4">Informatiile din formularul de comanda vor fi folosite pentru a va trimite confirmarea comenzilor, eventualele promotii, buletinele informative periodice, newsletter, actualizari bloc, etc.</p>
                <p className="mb-2 sm:mb-4">Ne obligam sa nu facem publice sau sa nu vindem bazele de date continand informatii referitoare la datele personale ale clientilor nostri.</p>
                <p>Ramanem la sunteti obligat...</p>

            </div>
        </div>
    )
}