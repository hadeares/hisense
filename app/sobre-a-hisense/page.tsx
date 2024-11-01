'use client'

import Image from "next/image";

// import required modules
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";
import { LuTarget } from "react-icons/lu";
import { MdOutlineSaveAs } from "react-icons/md";

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
                <div className="relative h-[85vh] w-full m-0 p-0 overflow-hidden">
                    <Image className="h-full w-full object-cover object-top hidden md:block" src='/Sobre/about.webp' alt="" width={2000} height={800} quality={100} />
                    <Image className="h-full w-full object-cover md:hidden" src='/Sobre/about-mobile.png' alt="" width={2268} height={948} quality={100} />
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
                            Conheça a Hisense
                        </h4>
                        <p className="text-md text-gray-300 max-w-[700px] mx-auto">
                            Aspirando a se tornar a marca mais confiável do mundo, com mais de um século de herança de marca, nosso objetivo é buscar continuamente a inovação científica e tecnológica na esperança de melhorar a qualidade de vida geral e trazer felicidade a milhões de famílias.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="bg-dark">
                <div className="max-w-[1920px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            ease: "linear",
                            duration: 1,
                            x: { duration: 1 }
                        }}
                        className="flex flex-col md:flex-row gap-5 py-20 max-w-[1250px] mx-auto px-3 text-center lg:text-start"
                    >
                        <div className="flex gap-5 justify-center items-center flex-1 lg:text-center">
                            <div className="text-hisense text-5xl mb-5">
                                <FaEye />
                            </div>
                            <h4 className="text-white lg:text-5xl text-[26px] pb-3 font-bold tracking-tight leading-10">Visão</h4>
                        </div>
                        <div className="flex-1 md:px-5">
                            <p className="text-md text-gray-300">Ser uma empresa centenária e se tornar a marca mais confiável do mundo.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="bg-dark">
                <div className="max-w-[1920px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            ease: "linear",
                            duration: 1,
                            x: { duration: 1 }
                        }}
                        className="flex flex-col md:flex-row gap-5 max-w-[1250px] mx-auto px-3 text-center lg:text-start"
                    >
                        <div className="flex gap-5 justify-center items-center flex-1 lg:text-center">
                            <div className="text-hisense text-5xl mb-5">
                                <LuTarget />
                            </div>
                            <h4 className="text-white lg:text-5xl text-[26px] pb-3 font-bold tracking-tight leading-10">Missão</h4>
                        </div>
                        <div className="flex-1 md:px-5">
                            <p className="text-md text-gray-300">Buscar a inovação científica e tecnológica, assumir a liderança na fabricação avançada, tendo a inteligência como base para trazer felicidade a milhões de famílias com produtos e serviços de alta qualidade.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="bg-dark">
                <div className="max-w-[1920px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            ease: "linear",
                            duration: 1,
                            x: { duration: 1 }
                        }}
                        className="flex flex-col md:flex-row gap-5 py-20 pb-32 max-w-[1250px] mx-auto px-3 text-center lg:text-start"
                    >
                        <div className="flex gap-5 justify-center items-center flex-1 lg:text-center">
                            <div className="text-hisense text-5xl mb-5">
                                <MdOutlineSaveAs />
                            </div>
                            <h4 className="text-white lg:text-5xl text-[26px] pb-3 font-bold tracking-tight leading-10">Valores</h4>
                        </div>
                        <div className="flex-1 md:px-5">
                            <p className="text-md text-gray-300">Sempre aderimos aos valores fundamentais de <span className="text-hisense">Integridade, Inovação, Foco no Cliente e Sustentabilidade:</span> atribuindo nosso desenvolvimento sustentável e saudável a quadros íntegros e boa cultura corporativa, dando importância ao investimento em P&D, priorizando o foco no cliente e, o mais importante, promovendo uma governança urbana precisa e contribuindo para o desenvolvimento sustentável da cidade.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="bg-[#00b3ac] px-3 py-20">
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
                            Nossa História
                        </h4>
                        <p className="text-md text-white max-w-[700px] mx-auto">
                            A Hisense começou em 1969 como fabricante de rádios em Qingdao, China. Dez anos depois, estávamos fabricando televisores. Desde então, a Hisense cresceu para se tornar uma das principais e mais confiáveis marcas de eletrônicos de consumo e eletrodomésticos do mundo, com escritórios e fábricas em todos os cantos do globo.
                        </p>
                    </motion.div>
                </div>
            </section>

        </main >
    );
}


