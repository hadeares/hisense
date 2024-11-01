'use client'

import Image from "next/image";

// import required modules
import { motion } from "framer-motion";
import { useRef } from "react";
import Specifications from "@/components/Specifications";
import ProductPresentation from "@/components/ProductPresentation";
import ProductBar from "@/components/ProductBar";
import ForYou from "@/components/ForYou";
import ProductModalEletro from "@/components/ProductModalEletro";



export default function LavaSeca3S() {

    const productRef = useRef<HTMLButtonElement>(null);


    const openStoreModal = () => {
        if (productRef.current) {
            productRef.current.click();
        }
    };


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


    const specificationsData = [
        {
            title: 'Modelo',
            content: [
                { item: 'Modelo', description: 'Série 3S' },
            ],
        },
        {
            title: 'Tipo',
            content: [
                { item: 'Tipo', description: 'Lava e Seca' },
            ],
        },
        {
            title: 'Dimensões',
            content: [
                { item: 'Dimensões', description: '595 x 610 x 845 mm' },
            ],
        },
        {
            title: 'Capacidade de Lavagem',
            content: [
                { item: 'Lava', description: '13 kg' },
                { item: 'Seca', description: '8 kg' },
            ],
        },
        {
            title: 'Velocidade de Rotação',
            content: [
                { item: 'Velocidade Máxima', description: '1400 RPM' },
            ],
        },
        {
            title: 'Tipo de Tambor',
            content: [
                { item: 'Tipo de Tambor', description: 'Snowflake (Floco de neve)' },
            ],
        },
        {
            title: 'Motor',
            content: [
                { item: 'Tipo de Motor', description: 'Inverter' },
            ],
        },
    ];

    const items = [
        {
            name: 'Televisores',
            imageSrc: '/U8N/1.png',
            link: '/televisores'
        },
        {
            name: 'Refrigeradores',
            imageSrc: '/BottomFreezer/1.png',
            link: '/refrigeradores'
        },
        {
            name: 'Adegas',
            imageSrc: '/WineCooler/1.jpg',
            link: '/adegas'
        },
        {
            name: 'Lava Louças',
            imageSrc: '/LavaLoucas/1.jpg',
            link: '/eletrodomesticos/lava-loucas'
        },
    ];



    const productProps = {
        productImages: ['/LavaSeca3S/1.png', '/LavaSeca3S/2.png', '/LavaSeca3S/3.png', '/LavaSeca3S/4.png', '/LavaSeca3S/5.png', '/LavaSeca3S/6.png', '/LavaSeca3S/7.png', '/LavaSeca3S/8.png'],
        technologyImage: '',
        copy: 'Máquina de lavar',
        name: 'Lava e Seca 3S',
        features: ['Com Wi-fi pelo APP ConnectLife', 'Água e Gelo na porta', 'Prateleiras Ajustáveis', 'Puxador Embutido'],
        options1: ['branco', 'Titanium'],
        options2: ['127v', '220v'],
        guarantee: 'Garantia de 10 anos no motor',
    };

    const storeLinks = [

        {
            options: { options1: 'Titanium', options2: '220v' },
            stores: [
                {
                    name: 'Fast Shop',
                    logo: '/fast.png',
                    link: 'https://site.fastshop.com.br/lava-e-seca-13kg-hisense-titanium-com-13-programas-de-lavagem--steam--wi-fi---wd3s13-hhwd3s1343bt_prd-51466/p',
                },
                {
                    name: 'Casas Bahia',
                    logo: '/casas_bahia.png',
                    link: 'https://www.casasbahia.com.br/lava-e-seca-hisense-steam-wd3s13-inverter-com-wi-fi-13-programas-de-lavagem-e-3-de-secagem-titanium-13kg-8kg/p/55067161?utm_source=Google&utm_medium=BuscaOrganica&utm_campaign=DescontoEspecial',
                },
            ],
        },
    ];





    return (
        <main className="max-w-[1920px] mx-auto">
            <ProductBar
                productName={productProps.name}
                openStoreModal={openStoreModal}
            />
            <section>
                <div className="relative h-[100vh] w-full m-0 p-0 overflow-hidden">
                    <div className="bg-gradient-to-t from-dark opacity-60 absolute top-0 h-full w-full"></div>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="absolute lg:left-[17%] left-[5%] bottom-[10%]"
                    >
                        <motion.div variants={item}>
                            <h2 className="text-white lg:text-7xl text-5xl pb-3 font-bold tracking-tight leading-10">
                                Lava e Seca 3S
                            </h2>
                            <h4 className="text-white lg:text-2xl text-xl pe-3">A escolha inteligente para sua rotina</h4>
                        </motion.div>

                    </motion.div>
                    <Image className="h-full w-full object-cover hidden md:block" src='/LavaSeca3S/lava-e-seca-3s.png' alt="Imagem key visual do Side by side" width={2000} height={800} quality={100} />
                    <Image className="h-full w-full object-cover md:hidden" src='/LavaSeca3S/lava-e-seca-3s-mobile.png' alt="Imagem key visual do Side by side" width={2268} height={948} quality={100} />
                </div>
            </section>


            <ProductModalEletro
                productProps={productProps}
                stores={storeLinks}
                option1Title="Cor:"
                option2Title="Voltagem:"
                ref={productRef}
            />


            <section id="principais-caracteristicas" className="mx-auto px-3 py-20 bg-gray-100">
                <div className="max-w-[1250px] mx-auto">
                    <div className="mb-10 text-center">
                        <h2 className="lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-7">Principais características</h2>
                    </div>

                    <div className="grid grid-cols-11 gap-3 lg:gap-5 min-h-[400px]">
                        <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col items-center justify-center w-full py-12 px-12 text-center">
                                <Image src="/LavaSeca3S/top-feature-1.png" alt="" width={200} height={32} />
                                <h5 className="text-xl font-bold mb-2"></h5>
                                <span className="text-xs md:text-sm">Dosagem automática</span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-7 flex flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex items-center justify-center w-full px-20 py-10 text-center">
                                <Image src="/LavaSeca3S/top-feature-2.png" alt="" width={160} height={32} />
                                <span className="text-xs md:text-sm">Connectlife</span>
                            </div>
                            <div className="flex flex-row gap-3 lg:gap-5">
                                <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col items-center justify-center w-full py-10 px-3 text-center">
                                    <Image src="/LavaSeca3S/top-feature-3.png" alt="" width={160} height={32} />
                                    <span className="text-xs md:text-sm">Vapor</span>
                                </div>
                                <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col items-center justify-center gap-3 w-full py-10">
                                    <Image src="/LavaSeca3S/top-feature-4.png" alt="" width={160} height={32} />
                                    <span className="text-xs md:text-sm">Proteção de higiene</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto bg-dark overflow-hidden">
                <div className="w-full h-full relative">
                    <Image className="h-full w-full object-cover hidden md:block" src='/LavaSeca3S/banner-1.png' alt="" width={1920} height={1080} quality={100} />

                    <div className="absolute top-0 left-0">
                        <Image className="h-full w-full object-cover hidden md:block" src='/LavaSeca3S/banner-1-asset.png' alt="" width={1920} height={1080} quality={100} />
                    </div>

                    <div className="lg:bg-gradient-to-r bg-gradient-to-b from-dark opacity-40 absolute top-0 h-full w-full"></div>
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-[20%] left-[15%] hidden md:block overflow-hidden z-[5]">
                        <div className="max-w-[600px] text-white">
                            <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Fluxo de água potente e de alta velocidade
                            </h2>
                            <p>Perfeito para quem busca praticidade e resultados impecáveis,
                                o Jet Wash cuida de cada peça, desde as mais delicadas até
                                as mais pesadas. Com esse sistema, cada lavagem se torna
                                mais eficiente e cuidadosa. Um fluxo de água de alta velocidade
                                dissolve rapidamente o sabão, garantindo que ele atue
                                profundamente nas fibras para remover toda a sujeira. Além
                                de proporcionar uma limpeza eficaz, esse sistema evita
                                o acúmulo de resíduos e protege suas roupas contra o
                                desbotamento, preservando as cores e a qualidade por mais tempo.
                                <br></br>
                                Sua combinação de potência e eficiência faz com que o ciclo
                                de lavagem seja mais rápido e suas roupas saiam renovadas
                                e prontas para o próximo uso.</p>
                        </div>
                    </motion.div>

                    {/* Mobile Version */}
                    <Image className="h-full w-full object-cover md:hidden" src='/LavaSeca3S/banner-1-mobile.png' alt="" width={750} height={1200} quality={100} />

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-[5%] left-[5%] md:hidden overflow-hidden z-[5]">
                        <div className="max-w-[550px] text-white">
                            <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Fluxo de água potente e de alta velocidade
                            </h2>
                            <p className="pe-3">Perfeito para quem busca praticidade e resultados impecáveis,
                                o Jet Wash cuida de cada peça, desde as mais delicadas até
                                as mais pesadas. Com esse sistema, cada lavagem se torna
                                mais eficiente e cuidadosa. Um fluxo de água de alta velocidade
                                dissolve rapidamente o sabão, garantindo que ele atue
                                profundamente nas fibras para remover toda a sujeira. Além
                                de proporcionar uma limpeza eficaz, esse sistema evita
                                o acúmulo de resíduos e protege suas roupas contra o
                                desbotamento, preservando as cores e a qualidade por mais tempo.
                                <br></br>
                                Sua combinação de potência e eficiência faz com que o ciclo
                                de lavagem seja mais rápido e suas roupas saiam renovadas
                                e prontas para o próximo uso.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto bg-dark overflow-hidden">
                <div className="w-full h-full relative">
                    <Image className="h-full w-full object-cover hidden md:block" src='/LavaSeca3S/banner-2.png' alt="" width={1920} height={1080} quality={100} />

                    <div className="lg:bg-gradient-to-r from-dark opacity-50 absolute top-0 h-full w-full z-[4]"></div>

                    <div className="absolute top-0 left-0 z-[5]">
                        <Image className="h-full w-full object-cover hidden md:block" src='/LavaSeca3S/banner-2-asset-1.png' alt="" width={1920} height={1080} quality={100} />
                    </div>

                    <div className="absolute top-0 left-0 z-[2]">
                        <Image className="h-full w-full object-cover hidden md:block" src='/LavaSeca3S/banner-2-asset-2.png' alt="" width={1920} height={1080} quality={100} />
                    </div>
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute bottom-[22%] left-[4%] hidden md:block overflow-hidden z-[5]">
                        <div className="max-w-[550px] text-white">
                            <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Silencioso, energeticamente eficiente e mais durável
                            </h2>
                            <p>Com o motor BLDC (Brushless Direct Current), a Lava e Seca 3S da
                                Hisense oferece uma lavagem silenciosa, econômica e confiável. Esse
                                motor de acionamento sem escovas reduz o atrito durante o funcionamento,
                                minimizando o desgaste e garantindo uma operação mais silenciosa,
                                perfeita para quem busca conforto e tranquilidade em casa.
                                <br></br>
                                Além do silêncio, o motor BLDC proporciona maior eficiência energética,
                                ajudando você a economizar energia a cada ciclo de lavagem. Como ele
                                se mantém fresco durante o uso, também aumenta a durabilidade do
                                equipamento, garantindo um desempenho consistente por mais tempo.</p>
                        </div>
                    </motion.div>

                    {/* Mobile Version */}
                    <Image className="h-full w-full object-cover md:hidden" src='/LavaSeca3S/banner-2-mobile.png' alt="" width={750} height={1200} quality={100} />

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-[5%] left-[5%] md:hidden overflow-hidden z-[5]">
                        <div className="max-w-[550px] text-dark">
                            <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Silencioso, energeticamente eficiente e mais durável
                            </h2>
                            <p>Com o motor BLDC (Brushless Direct Current), a Lava e Seca 3S da
                                Hisense oferece uma lavagem silenciosa, econômica e confiável. Esse
                                motor de acionamento sem escovas reduz o atrito durante o funcionamento,
                                minimizando o desgaste e garantindo uma operação mais silenciosa,
                                perfeita para quem busca conforto e tranquilidade em casa.
                                <br></br>
                                Além do silêncio, o motor BLDC proporciona maior eficiência energética,
                                ajudando você a economizar energia a cada ciclo de lavagem. Como ele
                                se mantém fresco durante o uso, também aumenta a durabilidade do
                                equipamento, garantindo um desempenho consistente por mais tempo.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto px-3 lg:py-20 bg-dark overflow-x-hidden py-16">
                <div className="max-w-[1250px] mx-auto">

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col-reverse md:flex-row gap-16 items-center pb-14"
                    >
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Conecte-se e simplifique sua rotina</h4>
                            <p className="text-md text-gray-300">Programe ciclos de lavagem, ajuste as configurações e receba notificações em tempo real – tudo com apenas alguns toques no seu smartphone. Esqueceu de ligar a máquina? Sem problemas! Inicie ou pause a lavagem a qualquer momento, mesmo fora de casa. Precisa que a roupa esteja pronta na hora certa? Programe o ciclo com antecedência e encontre suas roupas limpas e secas na hora exata.</p>
                        </div>
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/Cassette/box1.png' alt="" width={743} height={744} quality={100} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col md:flex-row gap-16 items-center"
                    >
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/LavaSeca3S/box-1.png' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Termine o ciclo no horário conveniente</h4>
                            <p className="text-md text-gray-300">Graças a lavagem programada inteligente, você pode definir livremente o horário de término da lavagem de acordo com sua necessidade. Isso permite que você economize eletricidade e desfrute de contas de energia menores.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col-reverse md:flex-row gap-16 items-center py-16 lg:pb-0"
                    >
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Mais tempo para o que importa</h4>
                            <p className="text-md text-gray-300">A função Quick Wash foi desenvolvida para aqueles momentos em que
                                você precisa de rapidez e eficiência. Em apenas 15 minutos, ela cuida
                                de cargas pequenas e peças levemente sujas, deixando-as limpas e
                                prontas para uso. Ideal para o dia a dia corrido, essa função é perfeita
                                para roupas usadas por poucas horas ou aquela lavagem rápida
                                entre compromissos. Você economiza tempo e energia, mantendo
                                sua rotina organizada sem abrir mão de roupas limpas.</p>
                        </div>
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/LavaSeca3S/box-2.png' alt="" width={743} height={744} quality={100} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col md:flex-row gap-16 items-center lg:pt-16"
                    >
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/LavaSeca3S/box-3.png' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Cuide da sua máquina e ganhe tranquilidade</h4>
                            <p className="text-md text-gray-300">Com a tecnologia Drum Clean, manter sua máquina de lavar sempre
                                em perfeitas condições ficou mais fácil. Esse ciclo realiza uma limpeza
                                profunda a 95 graus, eliminando resíduos, odores e bactérias que podem
                                se acumular após o uso. Assim, você garante que suas roupas sejam
                                sempre lavadas em um ambiente limpo e higienizado.</p>
                        </div>
                    </motion.div>

                </div>
            </section>

            <section className="mx-auto px-3 py-20 bg-gray-100">
                <div className="max-w-[1250px] mx-auto">
                    <div className="mb-10 text-center">
                        <h2 className="lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-7">Galeria de imagens</h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-5">
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image className="hover:scale-105 duration-300" src="/LavaSeca3S/gallery-1.png" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image className="hover:scale-105 duration-300" src="/LavaSeca3S/gallery-2.png" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image className="hover:scale-105 duration-300" src="/LavaSeca3S/gallery-3.png" alt="" width={496} height={497} quality={100} />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-5 mt-5">
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image className="hover:scale-105 duration-300" src="/LavaSeca3S/gallery-4.png" alt="" width={996} height={697} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image className="hover:scale-105 duration-300" src="/LavaSeca3S/gallery-5.png" alt="" width={996} height={697} quality={100} />
                        </div>
                    </div>

                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300" src="/LavaSeca3S/gallery-6.png" alt="" width={1588} height={890} quality={100} />
                        </div>
                    </div>
                </div>
            </section>

            <section id="specifications" className="scroll-mt-20">
                <Specifications categories={specificationsData} />
            </section>


            {/* Seção Recomendações */}
            <section>
                <ForYou products={items} title='Explore o que há de melhor para sua casa' />
            </section>

        </main >
    );
}


