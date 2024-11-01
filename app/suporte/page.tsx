'use client'

import Image from "next/image";

// import required modules
import { motion } from "framer-motion";
import ProductSection from "@/components/ProductSection";
import Accordion from "@/components/Accordion";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowForward, IoLogoWhatsapp } from "react-icons/io";
import { IoChatboxEllipses } from "react-icons/io5";
import Link from "next/link";

export default function Suporte() {

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <main className="max-w-[1920px] mx-auto">

            <section>
                <div className="relative h-[80vh] w-full m-0 p-0 overflow-hidden">
                    <div className="bg-gradient-to-t lg:bg-gradient-to-r from-dark opacity-80 absolute top-0 h-full w-full"></div>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="absolute lg:left-[18%] left-[2%] lg:top-[40%] bottom-[10%]"
                    >
                        <motion.div variants={item} className="text-center lg:text-start">
                            <h2 className="text-white lg:text-7xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Suporte
                            </h2>
                            <p className="text-white lg:text-lg font-bold lg:max-w-[600px] max-w-[450px]">Transformando problemas em soluções, todos os dias.
                                Confira aqui nossos pontos de assistência técnica, manuais, dúvidas frequentes e informações sobre os produtos.</p>
                        </motion.div>

                    </motion.div>
                    <Image className="h-full w-full object-cover object-top hidden md:block" src='/Suporte/suporte.png' alt="Imagem key visual do Side by side" width={2000} height={800} quality={100} />
                    <Image className="h-full w-full object-cover md:hidden" src='/Suporte/suporte-mobile.png' alt="Imagem key visual do Side by side" width={2268} height={948} quality={100} />
                </div>
            </section>

            <section className="bg-dark px-3 py-20">
                <div className="max-w-[1250px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            ease: "linear",
                            duration: 1,
                            x: { duration: 1 },
                        }}
                        className="text-center"
                    >
                        <h4 className="text-white lg:text-5xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                            Nossos canais de suporte
                        </h4>
                        <p className="text-md text-gray-300">
                            Tudo o que fazemos é para tornar sua vida mais simples. Como podemos te ajudar?
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20">
                <div className="flex flex-col md:flex-row gap-16 max-w-[1250px] mx-auto px-3">
                    <div className="flex-1">
                        <h4 className="lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-7 text-dark">Assistência Técnica</h4>
                        <p>Precisa de assistência? Entre em contato:</p>
                        <ul className="p-5 mt-7 mb-7 bg-gray-100 rounded-3xl flex flex-col gap-4">
                            <li className="flex gap-3">
                                <div className="text-hisense">
                                    <FaPhoneAlt />
                                </div>
                                0800 000 1454
                            </li>
                            <li className="flex gap-3">
                                <div className="text-hisense">
                                    <IoLogoWhatsapp />
                                </div>
                                (11) 98990-8945
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="text-hisense">
                                    <IoChatboxEllipses />
                                </div>
                                sac@hisense.com
                            </li>
                        </ul>
                        <div className="flex gap-3">
                            <Link href={'https://posvenda.telecontrol.com.br/assist/externos/hisense_gorenje/fale_conosco.php?site=hisense'} target="_blank">
                                <button className="flex items-center justify-center w-full lg:w-auto text-md bg-hisense transition-all duration-300 px-6 pt-3 pb-2 rounded-full text-white hover:shadow-xl">Fale Conosco</button>
                            </Link>
                            <Link href={'https://posvenda.telecontrol.com.br/assist/externos/hisense_gorenje/assistencia_tecnica_maps.php?cf=MjI1&nf=SGlzZW5zZSBHb3Jlbmpl&tk=dGVsZWNvbnRyb2xOZXR3b3JraW5nSGlzZW5zZSBHb3JlbmplYXNzaXN0ZW5jaWFUZWNuaWNhMjI1&getby=YWxs'} target="_blank">
                                <button className="flex items-center justify-center w-full lg:w-auto text-md bg-hisense transition-all duration-300 px-6 pt-3 pb-2 rounded-full text-white hover:shadow-xl">Busque uma assistência mais próxima</button>
                            </Link>
                        </div>
                        <h4 className="lg:text-[20px] text-[26px] pb-3 font-bold tracking-tight leading-7 text-dark mt-10">Horário de atendimento:</h4>
                        <p>- Segunda a Sexta das 08h00 às 20h00</p>
                        <p>- Sábados das 8h00 às 14h00</p>
                    </div>
                    <div className="flex-1">
                        <div className="lg:ps-14">
                            <h4 className="lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-7 text-dark">Manuais de Instruções</h4>
                            <p>Encontre aqui o manual do seu produto Hisense.</p>
                            <div className="flex flex-col gap-3 w-[50%] mt-7">
                                <button className="flex items-center justify-center w-full lg:w-auto text-md bg-hisense transition-all duration-300 px-6 pt-3 pb-2 rounded-full text-white hover:shadow-xl">Eletrodomésticos</button>
                                <button className="flex items-center justify-center w-full lg:w-auto text-md bg-hisense transition-all duration-300 px-6 pt-3 pb-2 rounded-full text-white hover:shadow-xl">Ar Condicionados</button>
                                <button className="flex items-center justify-center w-full lg:w-auto text-md bg-hisense transition-all duration-300 px-6 pt-3 pb-2 rounded-full text-white hover:shadow-xl">Televisores</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-20 px-3">
                <div className="max-w-[1250px] mx-auto px-3 py-20 bg-gray-100 rounded-[2rem]">
                    <h4 className="text-dark lg:text-5xl text-[26px] pb-3 font-bold tracking-tight leading-10 text-center mb-10">
                        Dúvidas Frequentes
                    </h4>

                    <div className="flex flex-wrap gap-5 lg:px-10 relative overflow-hidden">
                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/68EJg0rq6_w?si=PEnduCcNjcY_jUTP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/k9NTmi2HsLA?si=jDJZA1HEZq_sE0AF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/FhCB2NsLPjA?si=LaOy8x0DViUUd4p5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>

        </main >
    );
}


