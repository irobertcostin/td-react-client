import groupicon from "../../../images/groupicon.png"
import modernicon from "../../../images/modernicon.png"
import bookicon from "../../../images/bookicon.png"
import instagramicon from "../../../images/instagramicon.png"






export default function AboutMe() {


    const services = [
        {
            key: "1",
            title: "Grupa restransa",
            description: "Ma focusez pe nevoile tale si sunt in spatele tau la fiecare pas.",
            icon: groupicon
        },
        {
            key: "2",
            title: "Tehnici moderne",
            description: "Care te vor ajuta sa ai un timp de lucru mai scurt si iti vor mari veniturile.",
            icon: modernicon
        },
        {
            key: "3",
            title: "Scoala bine dotata",
            description: "Aparatura si produse profesionale, cat si materiale educative pentru fiecare cursant.",
            icon: bookicon
        },
        {
            key: "4",
            title: "Strategie de promovare",
            description: "Iti voi personaliza strategie de promovare pentru a-ti vinde serviciile.",
            icon: instagramicon
        }
    ]



    return (
        <div className="w-full  grid grid-cols-1 sm:grid-cols-2 sm:gap-10 text-white px-4 py-20 gap-5 sm:px-10 xl:grid-cols-4 xl:py-32">


            {
                services.map((item) => (
                    <div key={item.key} className="w-full flex justify-start gap-2">
                        <div className="w-full max-w-14">
                            <img src={item.icon} className="w-16 h-auto"></img>
                        </div>
                        <div className="">
                            <p className="font-bold sm:text-lg">{item.title}</p>
                            <p className="text-xs sm:text-md">{item.description}</p>
                        </div>
                    </div>
                ))
            }



        </div>
    )
}







