import Hero from "./home-components/Hero"
import AboutMe from "./home-components/About"
import Courses from "./home-components/Courses"
import Footer from "./Footer"


export default function Home() {




    return (
        <div className="w-full  mx-0 px-0">

            <Hero />
            <AboutMe />
            <Courses />
            <Footer />
        </div>
    )
}