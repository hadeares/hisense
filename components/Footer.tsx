import Image from "next/image"
import Link from "next/link"
import { CiGlobe } from "react-icons/ci"
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTiktok, FaYoutube } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io"
import { MdMailOutline } from "react-icons/md"




interface FooterProps {
    id?: string;
}

const Footer: React.FC<FooterProps> = ({ id }) => {
    return (
        <footer className="bg-dark text-gray-300">
            <div className="max-w-[1250px] h-full px-3 mx-auto py-20">
                <div className="flex items-center justify-between pb-10 mb-16 border-b border-gray-200">
                    <Link href={'/'}>
                        <div className="mb-2 me-12 cursor-pointer">
                            <Image src={'/hisense.svg'} alt="Logo da marca Hisense" width={122} height={20} />
                        </div>
                    </Link>
                    <div className="flex lg:gap-2">
                        <p className="text-sm pt-4 me-2 hidden md:block">Siga-nos</p>
                        <Link target="_blank" href={'https://www.facebook.com/profile.php?id=61557290655263'}>
                            <div className="p-3 text-2xl rounded-full cursor-pointer duration-300 hover:bg-hisense hover:text-white hover:shadow-lg">
                                <FaFacebook />
                            </div>
                        </Link>
                        <Link target="_blank" href={'https://www.instagram.com/hisensebr/'}>
                            <div className="p-3 text-2xl rounded-full cursor-pointer duration-300 hover:bg-hisense hover:text-white hover:shadow-lg">
                                <FaInstagram />
                            </div>
                        </Link>
                        <Link target="_blank" href={'https://www.youtube.com/@hisensebr'}>
                            <div className="p-3 text-2xl rounded-full cursor-pointer duration-300 hover:bg-hisense hover:text-white hover:shadow-lg">
                                <FaYoutube />
                            </div>
                        </Link>
                        <Link target="_blank" href={'https://www.tiktok.com/@hisensebr'}>
                            <div className="p-3 text-2xl rounded-full cursor-pointer duration-300 hover:bg-hisense hover:text-white hover:shadow-lg">
                                <FaTiktok />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-16 lg:gap-9 text-sm">
                    <div>
                        <h5 className="text-lg lg:text-xl mb-8">Institucional</h5>
                        <ul className="flex flex-col gap-2 text-gray-400">
                            <Link href={'/sobre-a-hisense'}>
                                <li className="cursor-pointer duration-300 hover:text-hisense">A Hisense</li>
                            </Link>
                            <Link href={'/noticias'}>
                                <li className="cursor-pointer duration-300 hover:text-hisense">Notícias</li>
                            </Link>
                            <Link href={'/suporte'}>
                                <li className="cursor-pointer duration-300 hover:text-hisense">Suporte</li>
                            </Link>
                            <li className="hover:text-hisense duration-300 cursor-pointer hidden">A Hisense</li>
                            <li className="hover:text-hisense duration-300 cursor-pointer hidden">Garantia</li>
                            <li className="hover:text-hisense duration-300 cursor-pointer hidden">Trabalhe Conosco</li>
                            <li className="hover:text-hisense duration-300 cursor-pointer hidden">Termos e condições da Instalação</li>
                            <li className="hover:text-hisense duration-300 cursor-pointer hidden">Política de Privacidade</li>
                            <li className="hover:text-hisense duration-300 cursor-pointer hidden">Manuais e Arquivos</li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-lg mb-8">Fale Conosco</h5>
                        <div className="flex flex-col gap-2 text-gray-400">
                            <Link href={'mailto:sac@hisense.com'}>
                                <div className="flex gap-2 hover:text-hisense">
                                    <MdMailOutline className="text-hisense" />
                                    <span className="mt-[-1px]">sac@hisense.com</span>
                                </div>
                            </Link>
                            <Link href={'https://wa.me/11989908945'}>
                                <div className="flex gap-2 hover:text-hisense">
                                    <IoLogoWhatsapp className="text-hisense" />
                                    <span>11 989990-8945</span>
                                </div>
                            </Link>
                            <div className="flex gap-2">
                                <FaPhoneAlt className="text-hisense" />
                                <span>0800 000 1454</span>
                            </div>
                        </div>

                        <h5 className="text-md mb-8 mt-10">Horário de atendimento:</h5>
                        <div className="flex flex-col gap-2 text-gray-400">
                            <p className="pe-8">Segunda a Sexta das 08h00 às 20h00
                                <br></br>Sábados das 8h00 às 14h00</p>
                        </div>
                    </div>

                    <div>
                        <h5 className="text-lg lg:text-xl mb-8">Televisores</h5>
                        <ul className="flex flex-col gap-2 text-gray-400">
                            <Link href={'/televisores/U8N'}>
                                <li className="hover:text-hisense duration-300 cursor-pointer">Mini-LED U8N</li>
                            </Link>
                            <Link href={'/televisores/U7N'}>
                                <li className="hover:text-hisense duration-300 cursor-pointer">Mini-LED U7N</li>
                            </Link>
                            <Link href={'/televisores/U6N'}>
                                <li className="hover:text-hisense duration-300 cursor-pointer">Mini-LED U6N</li>
                            </Link>
                            <Link href={'/televisores/100U7N'}>
                                <li className="hover:text-hisense duration-300 cursor-pointer">QLED 100U7</li>
                            </Link>
                            <Link href={'/televisores/Q6N'}>
                                <li className="hover:text-hisense duration-300 cursor-pointer">QLED Q6N</li>
                            </Link>
                            <Link href={'/televisores/A6K'}>
                                <li className="hover:text-hisense duration-300 cursor-pointer">UHD A6K</li>
                            </Link>
                            <Link href={'/televisores/A4N'}>
                                <li className="hover:text-hisense duration-300 cursor-pointer">Smart TV A4N</li>
                            </Link>
                        </ul>

                        <h5 className="text-lg lg:text-xl my-8">Ar-Condicionados</h5>
                        <ul className="flex flex-col gap-2 text-gray-400">
                            <Link href={'/ar-condicionados/split'}>
                                <li className="hover:text-hisense duration-300 cursor-pointer">Split</li>
                            </Link>
                            <Link href={'/ar-condicionados/portatil'}>
                                <li className="hover:text-hisense duration-300 cursor-pointer">Portátil</li>
                            </Link>
                            <Link href={'/ar-condicionados/janela'}>
                                <li className="hover:text-hisense duration-300 cursor-pointer">Janela</li>
                            </Link>
                            <Link href={'/ar-condicionados/piso-teto'}>
                                <li className="hover:text-hisense duration-300 cursor-pointer">Piso Teto</li>
                            </Link>
                            <Link href={'/ar-condicionados/cassete'}>
                                <li className="hover:text-hisense duration-300 cursor-pointer">Cassete</li>
                            </Link>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-lg lg:text-xl mb-8">Elétrodomésticos</h5>
                        <ul className="flex flex-col gap-2 text-gray-400">
                            <li className="hover:text-hisense duration-300 cursor-pointer">Refrigeradores</li>
                            <li className="hover:text-hisense duration-300 cursor-pointer">Lava e Seca</li>
                            <li className="hover:text-hisense duration-300 cursor-pointer">Lava-louças</li>
                            <li className="hover:text-hisense duration-300 cursor-pointer">Adegas</li>
                            <li className="hover:text-hisense duration-300 cursor-pointer">Freezer</li>
                            <li className="hover:text-hisense duration-300 cursor-pointer">Frigobar</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-[#26272a] text-gray-300">
                <div className="max-w-[1250px] h-full px-3 mx-auto py-10">
                    <div className="flex flex-col xl:flex-row justify-between items-center gap-8 lg:gap-10">
                        <Link target="_blank" href={'https://global.hisense.com/'}>
                            <div className="flex items-center gap-3 cursor-pointer">
                                <div className="text-3xl text-hisense mb-2">
                                    <CiGlobe />
                                </div>
                                <h4 className="text-bold text-xl">Hisense Global</h4>
                            </div>
                        </Link>
                        <p className="text-sm text-center">© Hisense 2024 - CNPJ 16.538.529/0001-01 - Hisense Gorenje do Brasil Importação e Comércio de Eletrodoméstico LTDA.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer