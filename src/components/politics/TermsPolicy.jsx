import { useNavigate } from "react-router-dom";
import backArrow from "../../images/back-icon.png"



export default function TermsPolicy() {

    let navigate = useNavigate();

    let goHomepage = () => {
        navigate("/")
    }


    return (
        <div className="relative pt-8 my-20 lg:pt-14">

            <img src={backArrow} onClick={goHomepage} className="w-8 sm:w-10 absolute top-5 left-7 cursor-pointer sm:left-11"></img>

            <p className="px-8 sm:px-12 mt-12 text-2xl sm:text-3xl lg:text-5xl">Termeni si conditii</p>

            <div className="p-8 sm:p-12 mb-12">

                <h1 className="mb-4 text-xl sm:text-2xl lg:text-3xl">Academia</h1>
                <p className="mb-2 sm:mb-4">Acest capitol reglementeaza relatia legala cu societatea Tina Dobre Nail Instructor SRL  care opereaza site-ul pe care il vizitati si/sau prin care incheiati o tranzactie online.</p>

                <h1 className="mb-4 mt-12 text-xl sm:text-2xl lg:text-3xl">Definitii</h1>
                <p className="mb-2 sm:mb-4">Operator – Societatea Tina Dobre Nail Instructor SRL.</p>
                <p className="mb-2 sm:mb-4">Document – Termenii si conditiile expusi in prezentul document.</p>
                <p className="mb-2 sm:mb-4">Site – reprezinta domeniul tinadobre.ro.</p>
                <p className="mb-2 sm:mb-4">Utilizator – orice persoana care acceseaza acest site sau care utilizeaza serviciile oferite prin intermediul site-ului.</p>
                <p className="mb-2 sm:mb-4">Continut – orice informatie aflata pe site sau disponibila in serviciu care poate fi vizualizata sau accesata de Utilizator prin intermediul unui echipament electronic.</p>
                <p className="mb-2 sm:mb-4">Serviciu – posibilitatea unui Utilizator de a emite o comanda in scopul achizitionarii unor bunuri comercializate prin intermediul site-ului, conditionata de furnizarea datelor necesare preluarii comenzii.</p>
                <p className="mb-2 sm:mb-4">Acest document poate suferi modificari pe parcursul timpului. Documentul trebuie recitit cu regularitate, intrucat la momentul utilizarii site-ului sau al confirmarii unei expeditii, se vor aplica Termenii si conditiile in vigoare la acel moment.</p>
                <p className="mb-2 sm:mb-4">Daca accesati sau vizitati acest site sau utilizati un serviciu oferit prin intermediul acestui site, se genereaza automat acceptarea Termenilor si conditiilor expuse in cele ce urmeaza, in afara de cazul in care pentru serviciul respectiv exista conditii de utilizare distinct formulate. In cazul in care nu sunteti de acord cu Termenii si conditiile expuse in prezenta, sunteti invitati sa parasiti acest site.</p>
                <p className="mb-2 sm:mb-4">Accesul dumneavoastra si utilizarea site-ului nostru sunt supuse si reglementate de toate legile si regulamentele in materie. Inainte de a ne oferi date cu caracter personal prin intermediul site-ului nostru, vi se va solicita in mod explicit acceptul acestor Termeni si conditii. Ne rezervam dreptul de a aduce modificari in orice moment site-ului nostru si Termenilor si conditiior, fara nicio alta notificare prealabila.</p>

                <h1 className="mb-4 mt-12 text-xl sm:text-2xl lg:text-3xl">Disponibilitate si defecte</h1>
                <p className="mb-2 sm:mb-4">Site-ul nostru nu va fi intotdeauna disponibil si poate avea anumite erori. Acesta este furnizat de catre un tert si in masura permisa de lege, fara garantari, conditii sau garantii de orice fel. Nu avem nicio obligatie de a actualiza informatiile de pe site-ul nostru, cu exceptia cazului in care se prevede altfel in legislatia in vigoare. Ne rezervam dreptul de a modifica, edita, sterge, suspenda sau intrerupe, temporar sau permanent, site-ul nostru si/sau informatiile, materialele, produsele si/sau serviciile disponibile prin acesta.</p>

                <h1 className="mb-4 text-xl sm:text-2xl lg:text-3xl">Proprietate si drepturi de autor</h1>
                <p className="mb-2 sm:mb-4">tinadobre.ro, logo-ul si site-ul sunt marci inregistrate ale Tina Dobre Nail Instructor SRL  din Romania, nu trebuie, in niciun caz sa fie utilizate in legatura cu orice produs sau serviciu care nu este legat de Tina Dobre Nail Instructor SRL  .Site-ul, inclusiv tot continutul acestuia, cum ar fi design-ul, textul, grafica, logo-urile, imaginile, precum si alte aspecte legate de site si respectiv de continut, sunt protejate de regulile drepturilor de autor si alte legi de proprietate intelectuala in vigoare si reprezinta proprietatea Tina Dobre Nail Instructor SRL  sau a afiliatilor sai sau a furnizorilor continutului respectiv. Tina Dobre Nail Instructor SRL  (sau, dupa caz, licentiatul) este proprietarul intregii proprietati intelectuale si altor drepturi de proprietate asupra sau cu privire la site. Toate aceste drepturi sunt rezervate.</p>
                <p className="mb-2 sm:mb-4">Site-ul si tot ce cuprinde acesta, incluzand textele, imaginile, datele, slide-urile sunt proprietatea societatii sau a altor terti care detin drepturile de proprietate intelectuala asupra acestora. In masura in care doriti sa utilizati, sa preluati, sa copiati ori sa distribuiti o parte din continut, se impune sa trimiteti o solicitare in scris pe adresa de mail: nail.instructor@tinadobre.ro, in care sa precizati continutul pe care doriti sa il utilizati, modalitatea efectiva in care intentionati sa il utilizati si scopul folosirii acestuia. In lipsa unui acord explicit din partea Tina Dobre Nail Instructor SRL , orice distribuire, comunicare, copiere, expunere, reproducere, publicare, acordare de licenta de folosire, creare de opere derivate, transferare sau vanzare a continutului va fi considerata o incalcarea a Termenilor si conditiilor precum si a drepturilor de care beneficiaza titularii drepturilor de proprietare intelectuala asupra continutului. Orice utilizare a continutului fara acest acord se va considera o incalcare a acestor termeni si conditii si va atrage raspunderea legala a utilizatorului.</p>

                <p>Am ramas la utilizarea site-ului</p>
            </div>


        </div>
    )
}