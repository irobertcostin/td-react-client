import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from "../../images/tina-logos/1.png"
import { useNavigate } from "react-router-dom";




export default function Navbar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const navigate = useNavigate()



    const navigation = [
        { name: 'Acasa', path: "/" },
        { name: 'Despre mine', },
        { name: 'Cursuri', path: '/cursuri' },
        { name: 'Feedback', },
        { name: 'Contact', },
        { name: 'Intra in cont', path: '/autentificare' },
    ]




    return (
        <nav className="w-full ">
            <header className="absolute inset-x-0 top-0 z-50">


                <nav className="flex items-center justify-between p-6 lg:px-8 " aria-label="Global">

                    <div className=' w-80'>
                        <img src={logo} alt='logo'></img>
                    </div>

                    <div className="flex lg:hidden w-full  justify-end">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-8 w-8 text-white" aria-hidden="true" />
                        </button>
                    </div>



                    <div className="hidden lg:flex lg:gap-x-12 relative z-50 xl:mt-2 xl:ml-10 justify-end  w-full">
                        {navigation.map((item) => (
                            <button onClick={() => { if (item.path) { navigate(item.path) } }} key={item.name} href={item.href} alt={item.name} className="text-xl font-semibold xl:font-normal text-white ">
                                {item.name}
                            </button>
                        ))}
                    </div>


                </nav>



                <Dialog as="div" className="lg:hidden " open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50 " />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-end mt-6">
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-white "
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 ">
                                <div className="space-y-2 py-6 flex flex-col text-2xl text-white items-start gap-5">
                                    {navigation.map((item) => (
                                        <button onClick={() => { if (item.path) { navigate(item.path); setMobileMenuOpen(false) } }} key={item.name} href={item.href} alt={item.name} >
                                            {item.name}
                                        </button>
                                    ))}
                                </div>

                            </div>
                        </div>

                        <div className='w-full mt-10 flex flex-col gap-5 text-white text-2xl border-t pt-10'>

                            <a
                                href="tel:0040769896988"
                                className='flex justify-start text-[#FFBF00] items-center text-2xl '
                            >

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="mr-3 h-8 w-8">
                                    <path
                                        fillRule="evenodd"
                                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                        clipRule="evenodd" />
                                </svg>
                                <span className='mt-1'>Contacteaza-ma</span>
                            </a>
                        </div>
                    </Dialog.Panel>
                </Dialog>




            </header>
        </nav>
    )
}