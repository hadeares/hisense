'use client'

import Image from "next/image";

// import required modules
import { motion } from "framer-motion";
import { useRef } from "react";
import ProductPresentation from "@/components/ProductPresentation";
import Specifications from "@/components/Specifications";
import ProductBar from "@/components/ProductBar";
import ForYou from "@/components/ForYou";
import ProductModalF from "@/components/ProductModalF";





export default function Frigobar() {

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
                { item: 'Frigobar 44L', description: 'RR58NW3A / RR58NW2A' },
                { item: 'Frigobar 90L', description: 'RR121NW3A / RR121NW2A' },
                { item: 'Frigobar 115L', description: 'RR157NW3A / RR157NW2A' },
            ],
        },
        {
            title: 'Capacidade',
            content: [
                { item: 'Frigobar 44L', description: '44L (refrigerador)' },
                { item: 'Frigobar 90L', description: '90L (refrigerador)' },
                { item: 'Frigobar 115L', description: '115L (refrigerador)' },
            ],
        },
        {
            title: 'Classificação Energética',
            content: [
                { item: 'Frigobar 44L', description: 'A+' },
                { item: 'Frigobar 90L', description: 'A+' },
                { item: 'Frigobar 115L', description: 'A+' },
            ],
        },
        {
            title: 'Dimensões',
            content: [
                { item: 'Frigobar 44L', description: '500x445x468 mm (desembalado)' },
                { item: 'Frigobar 90L', description: '840x475x450 mm (desembalado)' },
                { item: 'Frigobar 115L', description: '840x475x556 mm (desembalado)' },
            ],
        },
        {
            title: 'Peso',
            content: [
                { item: 'Frigobar 44L', description: '14kg (bruto), 13.5kg (líquido)' },
                { item: 'Frigobar 90L', description: '23.2kg (bruto), 19.5kg (líquido)' },
                { item: 'Frigobar 115L', description: '25.2kg (bruto), 21.5kg (líquido)' },
            ],
        },
        {
            title: 'Consumo de Energia',
            content: [
                { item: 'Frigobar 44L', description: '17.40 kWh/mês' },
                { item: 'Frigobar 90L', description: '19.70 kWh/mês' },
                { item: 'Frigobar 115L', description: '19.70 kWh/mês' },
            ],
        },
    ];


    const productProps = {
        productImages: {
            '44L': ['/Frigobar/Prancheta1_44.png', '/Frigobar/Prancheta2_44.png', '/Frigobar/Prancheta3_44.png', '/Frigobar/Prancheta4_44.png', '/Frigobar/Prancheta5_44.png', '/Frigobar/Prancheta6_44.png', '/Frigobar/Prancheta7_44.png', '/Frigobar/Prancheta8_44.png', '/Frigobar/Prancheta9_44.png'],
            '90L': ['/Frigobar/Prancheta1_90.png', '/Frigobar/Prancheta2_90.png', '/Frigobar/Prancheta3_90.png', '/Frigobar/Prancheta4_90.png', '/Frigobar/Prancheta5_90.png'],
            '115L': ['/Frigobar/Prancheta1_115.png', '/Frigobar/Prancheta2_115.png', '/Frigobar/Prancheta3_115.png', '/Frigobar/Prancheta4_115.png', '/Frigobar/Prancheta5_115.png', '/Frigobar/Prancheta6_115.png', '/Frigobar/Prancheta7_115.png', '/Frigobar/Prancheta8_115.png', '/Frigobar/Prancheta9_115.png'],

        },
        technologyImage: '',
        name: 'Frigobar',
        copy: 'Refrigerador',
        features: ['Prateleiras de vidro temperado', 'Porta reversível', 'Pés ajustáveis'],
        dimensions: '500x445x468 - 840x475x450 - 840x475x556mm',
        option1: ['44L', '90L', '115L'],
        option2: ['110V', '220V'],
        guarantee: 'Garantia de 10 anos no compressor',
    };

    const storeLinks = [
        {
            options: { options1: '115L', options2: '110V' },
            stores: [
                {
                    name: 'Carrefour - 110V',
                    logo: '/carrefour.png',
                    link: 'https://www.carrefour.com.br/frigobar-hisense-115-litros-porta-reversivel1-porta-rr157nw3arr157nw2abranco-110v-mp939361921/p',
                },
                {
                    name: 'Casas Bahia - 110V',
                    logo: '/casas_bahia.png',
                    link: 'https://www.casasbahia.com.br/frigobar-hisense-rr157nw-com-porta-reversivel-e-termostato-ajustavel-115l-branco/p/55067166',
                },
            ],
        },
        {
            options: { options1: '115L', options2: '220V' },
            stores: [
                {
                    name: 'Carrefour - 220V',
                    logo: '/carrefour.png',
                    link: 'https://www.carrefour.com.br/frigobar-hisense-115-litros-porta-reversivel-branco-1-porta-rr157nw2a-220v-mp939295722/p',
                },
                {
                    name: 'Casas Bahia - 220V',
                    logo: '/casas_bahia.png',
                    link: 'https://www.casasbahia.com.br/frigobar-hisense-rr157nw-com-porta-reversivel-e-termostato-ajustavel-115l-branco/p/55067167?utm_source=GP_PLA&utm_medium=Cpc&utm_campaign=gg_pmax_core_eldo',
                },
            ],
        },
        {
            options: { options1: '90L', options2: '110V' },
            stores: [
                {
                    name: 'Casas Bahia - 110V',
                    logo: '/casas_bahia.png',
                    link: 'https://www.casasbahia.com.br/frigobar-hisense-rr121nw-com-porta-reversivel-branco-90-litros/p/55067164?utm_source=GP_PLA&utm_medium=Cpc&utm_campaign=gg_pmax_core_eldo',
                },
            ],
        },
        {
            options: { options1: '90L', options2: '220V' },
            stores: [
                {
                    name: 'Carrefour - 220V',
                    logo: '/carrefour.png',
                    link: 'https://www.carrefour.com.br/frigobar-hisense-90-litros-porta-reversivel-branco-1-porta-rr121nw2a-220v-mp939004832/p',
                },
                {
                    name: 'Casas Bahia - 220V',
                    logo: '/casas_bahia.png',
                    link: 'https://www.casasbahia.com.br/frigobar-hisense-rr121nw-com-porta-reversivel-branco-90-litros/p/55067165',
                },
            ],
        },
        {
            options: { options1: '44L', options2: '110V' },
            stores: [
                {
                    name: 'Carrefour - 110V',
                    logo: '/carrefour.png',
                    link: 'https://www.carrefour.com.br/frigobar-hisense-44-litros-porta-reversivel-1-porta-rr58nw3arr58nw2abranco-110v-mp939358203/p',
                },
                {
                    name: 'Casas Bahia - 110V',
                    logo: '/casas_bahia.png',
                    link: 'https://www.casasbahia.com.br/frigobar-hisense-44-litros-porta-reversivel-branco-1-porta-rr58nw3a-rr58nw2a/p/1568867748?utm_source=GP_PLA&utm_medium=Cpc&utm_campaign=gg_pmax_core_eldo',
                },
            ],
        },
        {
            options: { options1: '44L', options2: '220V' },
            stores: [
                {
                    name: 'Carrefour - 220V',
                    logo: '/carrefour.png',
                    link: 'https://www.carrefour.com.br/frigobar-hisense-44-litros-porta-reversivel-1-porta-rr58nw3arr58nw2abranco220v-mp939361958/p',
                },
                {
                    name: 'Casas Bahia - 220V',
                    logo: '/casas_bahia.png',
                    link: 'https://www.casasbahia.com.br/frigobar-hisense-44-litros-porta-reversivel-branco-1-porta-rr58nw3a-rr58nw2a/p/1568867750',
                },
            ],
        },
    ];

    const items = [
        {
            name: 'Side by Side',
            imageSrc: '/SideBySide/2.png',
            link: '/eletrodomesticos/side-by-side'
        },
        {
            name: 'Bottom Freezer',
            imageSrc: '/BottomFreezer/1.png',
            link: '/eletrodomesticos/bottom-freezer'
        },
        {
            name: 'French Door',
            imageSrc: '/FrenchDoor/01.png',
            link: '/eletrodomesticos/french-door'
        },
        {
            name: 'Freezer',
            imageSrc: '/Freezer/1.jpg',
            link: '/eletrodomesticos/freezer'
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
                                Frigobar
                            </h2>
                            <h4 className="text-white lg:text-2xl text-xl pe-3">Sua bebida na temperatura ideal, sempre ao seu alcance</h4>
                        </motion.div>

                    </motion.div>
                    <Image className="h-full w-full object-cover object-bottom hidden md:block" src='/Frigobar/frigobar.jpg' alt="Imagem key visual do Frigobar" width={2000} height={800} quality={100} />
                    <Image className="h-full w-full object-cover md:hidden" src='/Frigobar/frigobar-mobile.png' alt="Imagem key visual do Frigobar" width={2268} height={948} quality={100} />
                </div>
            </section>

            <ProductModalF
                productProps={productProps}
                stores={storeLinks}
                option1Title="Capacidade"
                option2Title="Voltagem"
                ref={productRef}
            />

            <section id="principais-caracteristicas" className="mx-auto px-3 py-20 bg-gray-100">
                <div className="max-w-[1250px] mx-auto">
                    <div className="mb-10 text-center">
                        <h2 className="lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-7">Principais características</h2>
                    </div>

                    <div className="grid grid-cols-12 gap-3 lg:gap-5 min-h-[400px]">
                        <div className="col-span-12 lg:col-span-4">
                            <div className="bg-white text-center hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center p-20">
                                <Image src="/Frigobar/vidro-temperado.png" alt="" width={232} height={32} />
                                <span>Prateleiras de vidro temperado</span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/Frigobar/pes-ajustaveis.png" alt="" width={122} height={32} />
                                <span className="text-xs md:text-sm">Pés ajustáveis</span>
                            </div>
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/Frigobar/fresh-zone.png" alt="" width={122} height={32} />
                                <span className="text-xs md:text-sm">Fresh Zone</span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/Frigobar/prateleiras.png" alt="" width={122} height={32} />
                                <span className="text-xs md:text-sm">Prateleiras extra-grandes</span>
                            </div>
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/Frigobar/porta-reversivel.png" alt="" width={122} height={32} />
                                <span className="text-xs md:text-sm">Porta reversível</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto bg-white overflow-hidden">
                <div className="h-full relative">
                    <Image className="h-full w-full object-cover object-right hidden md:block" src='/Frigobar/fresh-zone-banner.png' alt="" width={1920} height={1080} quality={100} />

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-[17%] left-[15%] hidden md:block overflow-hidden z-[5]">
                        <div className="max-w-[650px]">
                            <h2 className="text-dark lg:text-5xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Frescor prolongado para alimentos delicados
                            </h2>
                            <p>No Frigobar Hisense, o Fresh Zone é uma câmara exclusiva
                                que mantém a temperatura próxima de 0°C, proporcionando
                                um congelamento suave ideal para alimentos que precisam
                                de conservação especial, como carnes frescas, peixes, frios
                                e laticínios. Essa funcionalidade preserva o sabor, a textura e
                                os nutrientes dos alimentos por mais tempo, sem que eles
                                congelem completamente. Isso significa que você pode
                                armazenar ingredientes delicados e ainda assim tê-los prontos
                                para uso imediato, sem esperar descongelar.</p>
                        </div>
                    </motion.div>

                    {/* Mobile Version */}
                    <Image className="h-full w-full object-cover object-right-bottom md:hidden" src='/Frigobar/fresh-zone-banner-mobile.png' alt="" width={750} height={1200} quality={100} />

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-[3%] left-[5%] md:hidden overflow-hidden z-[5]">
                        <div className="max-w-[350px]">
                            <h2 className="text-dark lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Frescor prolongado para alimentos delicados
                            </h2>
                            <p>No Frigobar Hisense, o Fresh Zone é uma câmara exclusiva
                                que mantém a temperatura próxima de 0°C, proporcionando
                                um congelamento suave ideal para alimentos que precisam
                                de conservação especial, como carnes frescas, peixes, frios
                                e laticínios. Essa funcionalidade preserva o sabor, a textura e
                                os nutrientes dos alimentos por mais tempo, sem que eles
                                congelem completamente. Isso significa que você pode
                                armazenar ingredientes delicados e ainda assim tê-los prontos
                                para uso imediato, sem esperar descongelar.</p>
                        </div>
                    </motion.div>
                </div>
            </section>


            <section className="mx-auto px-3 lg:py-20 py-14 bg-dark overflow-x-hidden">
                <div className="max-w-[1250px] mx-auto">
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col md:flex-row gap-16 items-center"
                    >
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/Frigobar/caixa-frutas.png' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Gaveta de frutas e legumes</h4>
                            <p className="text-md text-gray-300">Graças ao controle otimizado de umidade, essa gaveta preserva a textura crocante e o frescor natural de frutas, verduras e legumes por muito mais tempo. Ideal para quem gosta de preparar refeições saudáveis ou ter lanches frescos sempre à mão, a gaveta evita que os alimentos murchem rapidamente, garantindo uma experiência mais prática e econômica.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col-reverse md:flex-row gap-16 items-center py-16 lg:pb-0"
                    >
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Prateleiras de vidro temperado</h4>
                            <p className="text-md text-gray-300">Sua estrutura resistente suporta recipientes pesados com segurança, garantindo que garrafas, potes e alimentos estejam sempre bem organizados, sem risco de quebra ou instabilidade. A superfície lisa facilita a limpeza, evitando o acúmulo de sujeira e resíduos, deixando o interior do seu frigobar impecável com o mínimo de esforço.</p>
                        </div>
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/Frigobar/vidro-temperado-box.png' alt="" width={743} height={744} quality={100} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col md:flex-row gap-16 items-center lg:pt-16"
                    >
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/Frigobar/prateleiras-porta.png' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Prateleira de porta extra grande</h4>
                            <p className="text-md text-gray-300">A prateleira é perfeita para guardar itens como garrafas de até 2 litros, jarras ou sucos, otimizando o espaço interno do frigobar e deixando tudo ao seu alcance. Além de maximizar a organização, a prateleira evita que objetos grandes ocupem espaço nas prateleiras principais, permitindo uma melhor distribuição dos itens dentro do frigobar.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col-reverse md:flex-row gap-16 items-center py-16 lg:pb-0"
                    >
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Porta reversível</h4>
                            <p className="text-md text-gray-300">Com uma dobradiça ajustável, você pode escolher abrir a porta para a direita ou para a esquerda, proporcionando maior conforto, seja você destro ou canhoto, e otimizando a circulação em espaços reduzidos. Essa funcionalidade é especialmente útil para quem busca praticidade e organização, garantindo que o frigobar se encaixe perfeitamente em cozinhas compactas, escritórios ou áreas de lazer.</p>
                        </div>
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/Frigobar/porta-reversivel-box.png' alt="" width={743} height={744} quality={100} />
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
                        <div className="overflow-hidden rounded-[2.7rem] bg-white py-14">
                            <Image className="hover:scale-105 duration-300" src="/Frigobar/gallery-1.jpg" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white py-14">
                            <Image className="hover:scale-105 duration-300" src="/Frigobar/gallery-2.jpg" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white py-14">
                            <Image className="hover:scale-105 duration-300" src="/Frigobar/gallery-3.jpg" alt="" width={496} height={497} quality={100} />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-5 mt-5">
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image className="hover:scale-105 duration-300" src="/Frigobar/gallery-4.jpg" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image className="hover:scale-105 duration-300" src="/Frigobar/gallery-5.jpg" alt="" width={496} height={497} quality={100} />
                        </div>
                    </div>

                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300 hidden md:block" src="/Frigobar/gallery-6.jpg" alt="" width={1588} height={890} quality={100} />
                        </div>
                    </div>

                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300 md:hidden" src="/Frigobar/gallery-7.png" alt="" width={1588} height={890} quality={100} />
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


