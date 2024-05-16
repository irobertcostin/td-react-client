import Hero from "../Hero"
import Testimonials from "../Testimonials"
import Contact from "../Contact"
import AboutMe from "../About"
import Courses from "../Courses"



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