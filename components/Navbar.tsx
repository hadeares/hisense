'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { CgMenuRightAlt } from "react-icons/cg"
import { FaAngleDown, FaSearch } from "react-icons/fa"
import { IoIosArrowForward } from "react-icons/io"
import { IoClose } from "react-icons/io5"

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)
    const [submenuOpen, setSubmenuOpen] = useState(false)
    const [modalTvOpen, setModalTvOpen] = useState(false)
    const [modalAppliancesOpen, setModalAppliancesOpen] = useState(false)
    const [modalAirOpen, setModalAirOpen] = useState(false)
    const [overlay, setOverlay] = useState(false)
    const [submenuOptions, setSubmenuOptions] = useState<Model[]>([])

    interface Model {
        option: string
        link: string
    }

    const productsOptions: Model[] = [
        { option: 'Suporte', link: '/suporte' },
        { option: 'Notícias', link: '/noticias' },
        { option: 'Sobre a Hisense', link: '/sobre-a-hisense' },
    ]

    const tvModelsMobile: Model[] = [
        { option: 'Ver todos', link: '/televisores' },
        { option: 'Hisense Smart TV FHD A4N', link: '/televisores/A4N' },
        { option: 'Hisense Smart TV UHD 4K A6K', link: '/televisores/A6K' },
        { option: 'Hisense Smart TV QLED 4K Q6N', link: '/televisores/Q6N' },
        { option: 'Hisense Smart TV ULED MiniLED 4K U6N', link: '/televisores/U6N' },
        { option: 'Hisense Smart TV ULED MiniLED 4K U7N', link: '/televisores/U7N' },
        { option: 'Hisense Smart TV ULED MiniLED U8N', link: '/televisores/U8N' },
        { option: 'Hisense Smart TV QLED 100U7', link: '/televisores/100U7N' }
    ]

    const applianceModels: Model[] = [
        { option: 'Refrigeradores', link: '/refrigeradores' },
        { option: 'Lava e Seca', link: '/' },
        { option: 'Lava Louças', link: '/eletrodomesticos/lava-loucas' },
        { option: 'Adegas', link: '/adegas' },
        { option: 'Freezer', link: '/eletrodomesticos/freezer' },
    ]

    const refrigeratorModels: Model[] = [
        { option: 'Side by Side', link: '/eletrodomesticos/side-by-side' },
        { option: 'French Door', link: '/eletrodomesticos/french-door' },
        { option: 'Bottom Freezer', link: '/eletrodomesticos/bottom-freezer' },
        { option: 'Frigobar', link: '/eletrodomesticos/frigobar' },
    ]

    const washModels: Model[] = [
        { option: 'Lava e Seca QX', link: '/eletrodomesticos/lava-e-seca-qx' },
        { option: 'Lava e Seca 3S', link: '/eletrodomesticos/lava-e-seca-3s' },
    ]

    const dishwasherModels: Model[] = [
        { option: 'Ver produto', link: '/eletrodomesticos/lava-loucas' },
    ]

    const cellarModels: Model[] = [
        { option: 'Wine Cooler', link: '/eletrodomesticos/wine-cooler' },
        { option: 'Beverage Cooler', link: '/eletrodomesticos/beverage' },
    ]

    const freezerModels: Model[] = [
        { option: 'Ver produto', link: '/eletrodomesticos/freezer' },
    ]

    const airModels: Model[] = [
        { option: 'Split', link: '/ar-condicionados/split' },
        { option: 'Portátil', link: '/ar-condicionados/portatil' },
        { option: 'Janela', link: '/ar-condicionados/janela' },
        { option: 'Piso Teto', link: '/ar-condicionados/piso-teto' },
        { option: 'Cassete', link: '/ar-condicionados/cassete' },
    ]

    const airModelsMobile: Model[] = [
        { option: 'Ver todos', link: '/ar-condicionados' },
        { option: 'Split', link: '/ar-condicionados/split' },
        { option: 'Portátil', link: '/ar-condicionados/portatil' },
        { option: 'Janela', link: '/ar-condicionados/janela' },
        { option: 'Piso Teto', link: '/ar-condicionados/piso-teto' },
        { option: 'Cassete', link: '/ar-condicionados/cassete' },
    ]

    const openMenu = () => {
        setMenuOpen(true)
        document.body.style.overflow = "hidden";
        setOverlay(true)
    }

    const openSubmenu = (submenu: string) => {
        setSubmenuOpen(true)

        if (submenu == 'tv') {
            setSubmenuOptions(tvModelsMobile)
        }

        if (submenu == 'appliance') {
            setSubmenuOptions(applianceModels)
        }

        if (submenu == 'air') {
            setSubmenuOptions(airModelsMobile)
        }
    }

    const closeMenu = () => {
        setMenuOpen(false)
        document.body.style.overflow = "";
        setOverlay(false)
        setSubmenuOpen(false)
    }

    const closeSubmenu = () => {
        setSubmenuOpen(false)
    }

    const tvModalOpen = () => {
        setModalTvOpen(true)
        applianceModalClose()
        airModalClose()
        setOverlay(true)
    }

    const tvModalClose = () => {
        setModalTvOpen(false)
        setOverlay(false)
    }

    const applianceModalOpen = () => {
        setModalAppliancesOpen(true)
        tvModalClose()
        airModalClose()
        setOverlay(true)
    }

    const applianceModalClose = () => {
        setModalAppliancesOpen(false)
        setOverlay(false)
    }

    const airModalOpen = () => {
        setModalAirOpen(true)
        tvModalClose()
        applianceModalClose()
        setOverlay(true)
    }

    const airModalClose = () => {
        setModalAirOpen(false)
        setOverlay(false)
    }

    function closeModals() {
        setModalTvOpen(false)
        setModalAppliancesOpen(false)
        setModalAirOpen(false)
    }


    return (
        <header>
            {/* Desktop Menu */}
            <div className="sticky w-full h-20 z-50 bg-white shadow-sm">
                <div className="max-w-[1250px] h-full px-3 mx-auto text-lg flex items-center justify-between">
                    <Link href={'/'}>
                        <div className="mb-1 me-12 cursor-pointer">
                            <Image src={'/hisense.svg'} alt="Logo da marca Hisense" width={125} height={20} />
                        </div>
                    </Link>
                    <div className="w-full hidden lg:block">
                        <nav className="flex lg:gap-8 xl:justify-between items-center">
                            <ul className="flex items-center gap-8 font-medium">
                                <li className="flex items-center gap-1 cursor-pointer duration-300 hover:text-hisense" onMouseEnter={tvModalOpen}>TVs <FaAngleDown className="text-gray-400 text-sm hover:text-hisense" /></li>
                                <li className="flex items-center gap-1 cursor-pointer duration-300 hover:text-hisense" onMouseEnter={applianceModalOpen}>Eletrodomésticos <FaAngleDown className="text-gray-400 text-sm hover:text-hisense" /></li>
                                <li className="flex items-center gap-1 cursor-pointer duration-300 hover:text-hisense" onMouseEnter={airModalOpen}>Ar Condicionado <FaAngleDown className="text-gray-400 text-sm hover:text-hisense" /></li>
                            </ul>

                            <ul className="flex items-center gap-8 font-medium">
                                <Link href={'/suporte'}>
                                    <li className="cursor-pointer duration-300 hover:text-hisense">Suporte</li>
                                </Link>
                                <Link href={'/noticias'}>
                                    <li className="cursor-pointer duration-300 hover:text-hisense">Notícias</li>
                                </Link>
                                <Link href={'/sobre-a-hisense'}>
                                    <li className="cursor-pointer duration-300 hover:text-hisense">Sobre a Hisense</li>
                                </Link>
                                <li className="text-hisense cursor-pointer hidden">
                                    <FaSearch />
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <button className="lg:hidden text-3xl" onClick={openMenu}>
                        <CgMenuRightAlt />
                    </button>
                </div>
            </div>

            {/* TVs Modal */}
            <div className={`absolute w-screen pt-10 pb-16 bg-dark bg-opacity-90 text-white duration-300 z-10 hidden lg:block ${modalTvOpen ? 'top-[80px]' : 'top-[-100vh]'}`}
                onMouseLeave={tvModalClose}
                onClick={closeModals}
            >
                <div className="flex justify-center max-w-[1612px] px-3 mx-auto gap-20">
                    <div>
                        <h3 className="text-3xl font-medium border-b-2 border-hisense pb-2">Televisores</h3>
                        <ul className="flex flex-col gap-2 text-sm mt-8">
                            <Link href={'/televisores'}>
                                <li className="cursor-pointer hover:text-hisense duration-300 text-lg">Ver todos os televisores</li>
                            </Link>
                            <div className="grid grid-cols-2 gap-14 mt-3">
                                <div>
                                    <h5 className="font-bold text-lg">Mini-LED</h5>
                                    <ul>
                                        <Link href='/televisores/U8N'>
                                            <li className="cursor-pointer duration-300 list-item hover:text-hisense mt-2">
                                                U8N
                                            </li>
                                        </Link>
                                        <Link href='/televisores/U7N'>
                                            <li className="cursor-pointer duration-300 list-item hover:text-hisense mt-2">
                                                U7N
                                            </li>
                                        </Link>
                                        <Link href='/televisores/U6N'>
                                            <li className="cursor-pointer duration-300 list-item hover:text-hisense mt-2">
                                                U6N
                                            </li>
                                        </Link>
                                    </ul>
                                </div>

                                <div>
                                    <h5 className="font-bold text-lg">QLED</h5>
                                    <ul>
                                        <Link href='/televisores/100U7N'>
                                            <li className="cursor-pointer duration-300 list-item hover:text-hisense mt-2">
                                                100U7
                                            </li>
                                        </Link>
                                        <Link href='/televisores/Q6N'>
                                            <li className="cursor-pointer duration-300 list-item hover:text-hisense mt-2">
                                                Q6N
                                            </li>
                                        </Link>
                                    </ul>
                                </div>

                                <div>
                                    <h5 className="font-bold text-lg">UHD</h5>
                                    <ul>
                                        <Link href='/televisores/A6K'>
                                            <li className="cursor-pointer duration-300 list-item hover:text-hisense mt-2">
                                                A6K
                                            </li>
                                        </Link>
                                    </ul>
                                </div>

                                <div>
                                    <h5 className="font-bold text-lg">Smart TV</h5>
                                    <ul>
                                        <Link href='/televisores/A4N'>
                                            <li className="cursor-pointer duration-300 list-item hover:text-hisense mt-2">
                                                A4N
                                            </li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <div className="flex gap-6">
                        <div className="rounded-3xl overflow-hidden">
                            <Image src='/100U7-menu.png' alt="Imagem da TV 100U7 Hisense" width={530} height={400} quality={100} />
                        </div>
                        <div className="rounded-3xl overflow-hidden">
                            <Image src='/U8-menu.png' alt="Imagem da TV 100U7 Hisense" width={411} height={400} quality={100} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Appliance Modal */}
            <div className={`absolute w-screen pt-10 pb-16 bg-dark bg-opacity-90 text-white duration-300 z-10 hidden lg:block ${modalAppliancesOpen ? 'top-[80px]' : 'top-[-100vh]'}`}
                onMouseLeave={applianceModalClose}
                onClick={closeModals}
            >
                <div className="max-w-[1260px] px-3 mx-auto gap-20 xl:gap-36">
                    <h3 className="text-3xl font-medium border-b-2 border-hisense pb-4 mb-6">Eletrodomésticos</h3>
                    <div className="flex gap-20">
                        <div className="mt-5">
                            <h5 className="font-bold">Refrigeradores</h5>
                            <ul className="flex flex-col gap-1 text-sm mt-5">
                                <Link href={'/refrigeradores'}>
                                    <li className="hover:text-hisense duration-300">Ver todos</li>
                                </Link>
                                {refrigeratorModels.map((model: Model, index: number) => <Link key={index} href={model.link}><li className="cursor-pointer duration-300 list-item hover:text-hisense mt-2" key={index}>{model.option}</li></Link>)}
                            </ul>
                        </div>

                        <div className="mt-5">
                            <h5 className="font-bold">Lava e Seca</h5>
                            <ul className="flex flex-col gap-1 text-sm mt-5">
                                <Link href={'/lava-e-seca'}>
                                    <li className="hover:text-hisense duration-300 cursor-pointer">Ver todas</li>
                                </Link>
                                {washModels.map((model: Model, index: number) => <Link key={index} href={model.link}><li className="cursor-pointer duration-300 list-item hover:text-hisense mt-2" key={index}>{model.option}</li></Link>)}
                            </ul>
                        </div>

                        <div className="mt-5">
                            <h5 className="font-bold">Lava Louças</h5>
                            <ul className="flex flex-col gap-1 text-sm mt-3">
                                {dishwasherModels.map((model: Model, index: number) => <Link key={index} href={model.link}><li className="cursor-pointer duration-300 list-item hover:text-hisense mt-2" key={index}>{model.option}</li></Link>)}
                            </ul>
                        </div>

                        <div className="mt-5">
                            <h5 className="font-bold">Adega</h5>
                            <ul className="flex flex-col gap-1 text-sm mt-5">
                                <Link href={'/adegas'}>
                                    <li className="hover:text-hisense duration-300 cursor-pointer">Ver todas</li>
                                </Link>
                                {cellarModels.map((model: Model, index: number) => <Link key={index} href={model.link}><li className="cursor-pointer duration-300 list-item hover:text-hisense mt-2" key={index}>{model.option}</li></Link>)}
                            </ul>
                        </div>

                        <div className="mt-5">
                            <h5 className="font-bold">Freezer</h5>
                            <ul className="flex flex-col gap-1 text-sm mt-3">
                                {freezerModels.map((model: Model, index: number) => <Link key={index} href={model.link}><li className="cursor-pointer duration-300 list-item hover:text-hisense mt-2" key={index}>{model.option}</li></Link>)}
                            </ul>
                        </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden mt-8">
                        <Image src={'/appliance-menu.png'} alt="" width={1250} height={300} />
                    </div>
                </div>
            </div>

            {/* Air Modal */}
            <div className={`absolute w-screen pt-10 pb-16 bg-dark bg-opacity-90 text-white duration-300 z-10 hidden lg:block ${modalAirOpen ? 'top-[80px]' : 'top-[-100vh]'}`}
                onMouseLeave={airModalClose}
                onClick={closeModals}
            >
                <div className="flex justify-center max-w-[1612px] px-3 mx-auto gap-20 xl:gap-36">
                    <div>
                        <h3 className="text-3xl font-medium border-b-2 border-hisense pb-2">Ar-Condicionado</h3>
                        <ul className="flex flex-col gap-2 text-sm mt-8">
                            <Link href={'/ar-condicionados'}>
                                <li className="cursor-pointer hover:text-hisense duration-300">Ver todos os Ar-Condicionados</li>
                            </Link>
                            {airModels.map((model: Model, index: number) => <Link key={index} href={model.link}><li className="cursor-pointer duration-300 list-item hover:text-hisense mt-2" key={index}>{model.option}</li></Link>)}
                        </ul>
                    </div>
                    <div className="flex gap-12">
                        <div>
                            <Image src={'/split-menu.png'} alt="Logo da marca Hisense" width={350} height={20} />
                        </div>
                        <div>
                            <Image src={'/split2-menu.png'} alt="Logo da marca Hisense" width={350} height={20} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 w-screen md:w-[50%] h-screen bg-gray-50 overflow-hidden z-[60] duration-300 ${menuOpen ? 'right-0' : 'right-[-100vw]'}`}>
                <nav className="h-full w-full">
                    <div className="relative flex justify-between items-center w-full h-[42%] bg-black">
                        <div className="absolute w-full h-full opacity-[55%]">
                            <Image src={'/mobile-menu-background.png'} className="object-cover" alt="Imagem de background do menu mobile" fill />
                        </div>
                        <div className="absolute text-white top-8 left-4 text-3xl">
                            <Image src={'/hisense.svg'} alt="Logo da marca Hisense" width={122} height={20} />
                        </div>
                        <button className="absolute text-white top-7 right-4 text-3xl" onClick={closeMenu}>
                            <IoClose />
                        </button>
                    </div>

                    <ul className="flex flex-col px-4 pt-7 gap-5 text-xl font-medium cursor-pointer">
                        <li className="flex justify-between" onClick={() => openSubmenu('tv')}>
                            Televisores
                            <IoIosArrowForward className="text-gray-400" />
                        </li>
                        <li className="flex justify-between" onClick={() => openSubmenu('appliance')}>
                            Eletrodomésticos
                            <IoIosArrowForward className="text-gray-400" />
                        </li>
                        <li className="flex justify-between" onClick={() => openSubmenu('air')}>
                            Ar-Condicionados
                            <IoIosArrowForward className="text-gray-400" />
                        </li>
                        {productsOptions.map((product, index) =>
                            <li key={index} onClick={closeMenu}>
                                <Link href={product.link}>{product.option}</Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>

            {/* Mobile SubMenu */}
            <div className={`fixed top-0 w-screen md:w-[50%] h-screen bg-gray-50 overflow-hidden z-[65] duration-300 ${submenuOpen ? 'right-0' : 'right-[-100vw]'}`}>
                <nav className="h-full w-full">
                    <div className="flex justify-between items-center text-3xl w-full h-[12%] px-4 bg-gray-200 text-gray-800">
                        <div className="cursor-pointer" onClick={closeSubmenu}>
                            <IoIosArrowForward className="rotate-180" />
                        </div>
                        <div className="cursor-pointer" onClick={closeMenu}>
                            <IoClose />
                        </div>
                    </div>

                    <ul className="flex flex-col px-4 pt-7 gap-5 text-xl font-medium">
                        <h5 className="text-hisense mb-8 text-3xl">Modelos</h5>
                        {submenuOptions.map((product, index) =>
                            <Link href={product.link} key={index}>
                                <li className="flex justify-between" onClick={closeMenu}>
                                    <h5 className="text-[16px]">{product.option}</h5>
                                    <IoIosArrowForward className="text-gray-400" />
                                </li>
                            </Link>
                        )}
                    </ul>
                </nav>
            </div>

            {/* Overlay */}
            <div className={`overlay absolute top-0 w-screen h-screen bg-dark bg-opacity-70 z-50 lg:z-[5] ${overlay ? '' : 'hidden'}`} onClick={closeMenu}></div>
        </header >
    )
}

export default Navbar