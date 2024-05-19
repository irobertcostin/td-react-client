import Hero from "../other/Hero"
import Testimonials from "../other/Testimonials"
import Contact from "../other/Contact"
import AboutMe from "../other/About"
import Courses from "../other/Courses"



export default function Home() {




    return (
        <div className="w-full  mx-0 px-0">

            <Hero />
            <AboutMe />
            <Courses />
            {/* <Testimonials /> */}
            {/* <Contact /> */}

        </div>
    )
}