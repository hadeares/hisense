'use client'

import Image from "next/image";

// import required modules
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Specifications from "@/components/Specifications";
import ProductPresentation from "@/components/ProductPresentation";
import ProductBar from "@/components/ProductBar";
import ForYou from "@/components/ForYou";
import ProductModalF from "@/components/ProductModalF";


export default function Freezer() {

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

    const productProps = {
        productImages: {
            '142L': [
                '/Freezer/142L-1.png', 
                '/Freezer/142L-2.png', 
                '/Freezer/142L-3.png'
            ],
            '198L': [
                '/Freezer/198L-1.png', 
                '/Freezer/198L-2.png', 
                '/Freezer/198L-3.png', 
                '/Freezer/198L-4.png'
            ],
        },
        technologyImage: '',
        name: 'Freezer Horizontal',
        copy: 'Congelador Horizontal',
        features: [
            'Dobradiças ultrafinas', 
            'Tecnologia Super Freeze',
            'Grande capacidade de armazenamento'
        ],
        dimensions: '500x445x468 - 840x475x450 - 840x475x556mm',
        option1: ['142L', '198L'],
        option2: ['110V', '220V'],        
        guarantee: 'Garantia de 10 anos no compressor',
    };
    
    const storeLinks = [
        {
            options: { options1: '142L', options2: '110V' },
            stores: [
                {
                    name: 'Engage - 142L',
                    logo: '/engaje_eletro.png',
                    link: 'https://www.engageeletro.com.br/freezer-horizontal-hisense-142-litros-fc185nw-1-porta-branco-branco',
                },
                {
                    name: 'Lojas Adelino - 142L',
                    logo: '/adelino.png',
                    link: 'https://www.lojasadelino.com.br/produto/125863/freezer-horizontal-hisense-fc185n-142lt-branco-220v-125863',
                },
                {
                    name: 'Fujioka - 142L',
                    logo: '/fujioka.png',
                    link: 'https://www.fujioka.com.br/freezer-horizontal-hisense-142-litros-fc185nw-196944/p',
                },
            ],
        },
        {
            options: { options1: '142L', options2: '220V' },
            stores: [
                {
                    name: 'Engage - 142L',
                    logo: '/engaje_eletro.png',
                    link: 'https://www.engageeletro.com.br/freezer-horizontal-hisense-142-litros-fc185nw-1-porta-branco-branco',
                },
                {
                    name: 'Lojas Adelino - 142L',
                    logo: '/adelino.png',
                    link: 'https://www.lojasadelino.com.br/produto/125863/freezer-horizontal-hisense-fc185n-142lt-branco-220v-125863',
                },
                {
                    name: 'Fujioka - 142L',
                    logo: '/fujioka.png',
                    link: 'https://www.fujioka.com.br/freezer-horizontal-hisense-142-litros-fc185nw-196944/p',
                },
            ],
        },
        {
            options: { options1: '198L', options2: '110V' },
            stores: [
                {
                    name: 'Engage - 198L',
                    logo: '/engaje_eletro.png',
                    link: 'https://www.engageeletro.com.br/freezer-horizontal-hisense-198-litros-fc257nw-1-porta-branco-branco',
                },
                {
                    name: 'Lojas Adelino - 198L',
                    logo: '/adelino.png',
                    link: 'https://www.lojasadelino.com.br/produto/125874/freezer-horizontal-hisense-fc257n-198lt-branco-220v-125874',
                },
                {
                    name: 'Fujioka - 198L',
                    logo: '/fujioka.png',
                    link: 'https://www.fujioka.com.br/freezer-horizontal-hisense-198-litros-fc257nw-196946/p',
                },
            ],
        },
        {
            options: { options1: '198L', options2: '220V' },
            stores: [
                {
                    name: 'Engage - 198L',
                    logo: '/engaje_eletro.png',
                    link: 'https://www.engageeletro.com.br/freezer-horizontal-hisense-198-litros-fc257nw-1-porta-branco-branco',
                },
                {
                    name: 'Lojas Adelino - 198L',
                    logo: '/adelino.png',
                    link: 'https://www.lojasadelino.com.br/produto/125874/freezer-horizontal-hisense-fc257n-198lt-branco-220v-125874',
                },
                {
                    name: 'Fujioka - 198L',
                    logo: '/fujioka.png',
                    link: 'https://www.fujioka.com.br/freezer-horizontal-hisense-198-litros-fc257nw-196946/p',
                },
            ],
        },
    ];
    

    const specificationsData = [
        {
            title: 'Modelos',
            content: [
                { item: 'Modelos', description: 'BD-144 (142 Litros) | BD-199 (198 Litros)' },
            ],
        },
        {
            title: 'Tipo',
            content: [
                { item: 'Tipo', description: 'Horizontal' },
            ],
        },
        {
            title: 'Dimensões',
            content: [
                { item: '142 Litros', description: '625 x 559 x 854 mm' },
                { item: '198 Litros', description: '802 x 559 x 854 mm' },
            ],
        },
        {
            title: 'Capacidade',
            content: [
                { item: 'Capacidade', description: '142 e 198 Litros' },
            ],
        },
        {
            title: 'Peso',
            content: [
                { item: '142 Litros', description: '29 Kg' },
                { item: '198 Litros', description: '38 Kg' },
            ],
        },
        {
            title: 'Garantia',
            content: [
                { item: 'Garantia', description: '1 ano' },
            ],
        },
    ];

    const items = [
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
            name: 'Frigobar',
            imageSrc: '/Frigobar/1.jpg',
            link: '/eletrodomesticos/frigobar'
        },
        {
            name: 'Side by Side',
            imageSrc: '/SideBySide/2.png',
            link: '/eletrodomesticos/side-by-side'
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
                    <div className="bg-gradient-to-t from-dark opacity-50 absolute top-0 h-full w-full"></div>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="absolute left-[15%] bottom-[12%]"
                    >
                        <motion.div variants={item}>
                            <h2 className="text-white lg:text-7xl text-5xl pb-3 font-bold tracking-tight leading-10">
                                Freezer
                            </h2>
                            <h4 className="text-white lg:text-2xl text-xl">Design premium de porta sem limites</h4>
                        </motion.div>

                    </motion.div>
                    <Image className="h-full w-full object-cover hidden md:block" src='/Freezer/freezer.jpg' alt="Imagem key visual do Freezer" width={2000} height={800} quality={100} />
                    <Image className="h-full w-full object-cover md:hidden" src='/Freezer/freezer-mobile.png' alt="Imagem key visual do Freezer" width={750} height={1200} quality={100} />
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
                        <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/Freezer/360-cooling.png" alt="" width={180} height={32} />
                                <span className="text-xs md:text-sm">360 Cooling</span>
                            </div>
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/Freezer/keepfor135hv2.png" alt="" width={190} height={32} />
                                <span className="text-xs md:text-sm">Congelado por 135h</span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col items-center justify-center w-full py-6">
                                <Image src="/Freezer/my-fresh-choice.png" alt="" width={120} height={32} />
                                <span className="text-xs md:text-sm">Minha escolha fresca</span>
                            </div>
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-6 items-center justify-center w-full py-8">
                                <Image src="/Freezer/sliding-basket.png" alt="" width={150} height={32} />
                                <span className="text-xs md:text-sm">Cesto móvel</span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col items-center justify-center w-full py-5">
                                <Image src="/Freezer/super-freeze.png" alt="" width={122} height={32} />
                                <span className="text-xs md:text-sm">Super Freeze</span>
                            </div>
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/Freezer/ultrathinhingesv2.png" alt="" width={150} height={32} />
                                <span className="text-xs md:text-sm">Dobradiças Ultrafinas</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto bg-dark overflow-hidden">
                <div className="w-full h-full relative">
                    <Image className="h-full w-full object-cover hidden md:block" src='/Freezer/super-freeze-banner.jpg' alt="" width={1920} height={1080} quality={100} />

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-[33%] left-[15%] hidden md:block overflow-hidden z-[5]">
                        <div className="max-w-[550px]">
                            <h2 className="text-dark lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Super Freeze
                            </h2>
                            <p>Ao ativar esse modo, a temperatura pode cair para até -30°C, preservando a frescura, sabor e nutrientes dos alimentos como se tivessem acabado de ser comprados. Ideal para armazenar carnes, vegetais e refeições preparadas, o Super Freeze reduz a formação de cristais de gelo, mantendo a qualidade dos alimentos por mais tempo. Essa tecnologia é especialmente útil para itens que precisam ser congelados rapidamente após a compra ou preparo, evitando a deterioração e prolongando sua validade.</p>
                        </div>
                    </motion.div>

                    {/* Mobile Version */}
                    <Image className="h-full w-full object-cover md:hidden" src='/Freezer/super-freeze-banner-mobile.png' alt="" width={750} height={1200} quality={100} />

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-[15%] left-[5%] md:hidden overflow-hidden z-[5]">
                        <div className="max-w-[400px]">
                            <h2 className="text-dark lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Super Freeze
                            </h2>
                            <p>Ao ativar esse modo, a temperatura pode cair para até -30°C, preservando a frescura, sabor e nutrientes dos alimentos como se tivessem acabado de ser comprados. Ideal para armazenar carnes, vegetais e refeições preparadas, o Super Freeze reduz a formação de cristais de gelo, mantendo a qualidade dos alimentos por mais tempo. Essa tecnologia é especialmente útil para itens que precisam ser congelados rapidamente após a compra ou preparo, evitando a deterioração e prolongando sua validade.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto bg-white overflow-hidden">
                <div className="w-full h-full relative">
                    <Image className="h-full w-full object-cover hidden md:block" src='/Freezer/door-banner.png' alt="" width={1920} height={1080} quality={100} />

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-[40%] right-[6%] hidden md:block overflow-hidden z-[5]">
                        <div className="max-w-[550px]">
                            <h2 className="text-dark lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Design de Porta Plana Premium
                            </h2>
                            <p>A tampa embutida na extremidade da porta garante um encaixe harmonioso, evitando saliências e otimizando o uso do espaço disponível. Além de oferecer um visual moderno e elegante, a porta plana facilita a instalação em locais compactos e permite que o freezer se alinhe perfeitamente aos armários e móveis. Essa característica combina funcionalidade e estilo, tornando o freezer uma escolha versátil para diferentes ambientes domésticos.</p>
                        </div>
                    </motion.div>

                    {/* Mobile Version */}
                    <Image className="h-full w-full object-cover md:hidden" src='/Freezer/door-banner-mobile.png' alt="" width={750} height={1200} quality={100} />

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-[15%] left-[5%] md:hidden overflow-hidden z-[5]">
                        <div className="max-w-[400px]">
                            <h2 className="text-dark lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Super Freeze
                            </h2>
                            <p>A tampa embutida na extremidade da porta garante um encaixe harmonioso, evitando saliências e otimizando o uso do espaço disponível. Além de oferecer um visual moderno e elegante, a porta plana facilita a instalação em locais compactos e permite que o freezer se alinhe perfeitamente aos armários e móveis. Essa característica combina funcionalidade e estilo, tornando o freezer uma escolha versátil para diferentes ambientes domésticos.</p>
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
                            <Image src='/Freezer/135h.png' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Mantém por 135H</h4>
                            <p className="text-md text-gray-300">Essa tecnologia é capaz de manter a temperatura interna em 0°C por até 135 horas após uma queda de energia ou desligamento. Isso garante que seus alimentos permaneçam conservados e seguros, mesmo em situações imprevistas, evitando desperdícios e garantindo frescor. Ideal para quem armazena grandes quantidades de alimentos ou produtos delicados, essa funcionalidade proporciona tranquilidade em emergências, mantendo a qualidade e integridade dos itens armazenados.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col-reverse md:flex-row gap-16 items-center py-16 lg:pb-0"
                    >
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Revestimento interno de alumínio</h4>
                            <p className="text-md text-gray-300">Esse material durável não apenas evita a corrosão, mas também facilita a limpeza, permitindo que você mantenha o interior sempre higienizado com menos esforço. E é ideal para armazenar alimentos congelados com segurança, o alumínio contribui para uma distribuição eficiente do frio, otimizando o desempenho do freezer e preservando a qualidade dos alimentos por mais tempo. O revestimento reduz a necessidade de manutenção frequente, proporcionando mais tempo e tranquilidade para você.</p>
                        </div>
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/Freezer/revestimento.png' alt="" width={743} height={744} quality={100} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col md:flex-row gap-16 items-center lg:pt-16"
                    >
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/Freezer/dobradicas.png' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Dobradiças Ultrafinas</h4>
                            <p className="text-md text-gray-300">Com um design discreto e eficiente, essas dobradiças minimizam o espaço necessário para a abertura da porta, permitindo que você aproveite cada centímetro do ambiente. Além de otimizar o espaço externo, o sistema de dobradiças ultrafinas também contribui para uma organização interna mais prática, deixando mais espaço disponível para armazenar alimentos. Essa funcionalidade é perfeita para cozinhas compactas ou ambientes que exigem maior aproveitamento do layout, garantindo liberdade e facilidade na rotina.</p>
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
                            <Image className="hover:scale-105 duration-300" src="/Freezer/gallery-1.jpg" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white py-14">
                            <Image className="hover:scale-105 duration-300" src="/Freezer/gallery-2.jpg" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white py-14">
                            <Image className="hover:scale-105 duration-300" src="/Freezer/gallery-3.jpg" alt="" width={496} height={497} quality={100} />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-5 mt-5">
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image className="hover:scale-105 duration-300" src="/Freezer/gallery-4.jpg" alt="" width={496} height={497} quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image className="hover:scale-105 duration-300" src="/Freezer/gallery-5.jpg" alt="" width={769} height={497} quality={100} />
                        </div>
                    </div>

                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300 hidden md:block" src="/Freezer/gallery-6.jpg" alt="" width={1588} height={890} quality={100} />
                        </div>
                    </div>

                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image className="hover:scale-105 duration-300 md:hidden" src="/Freezer/gallery-7.png" alt="" width={1588} height={890} quality={100} />
                        </div>
                    </div>
                </div>
            </section>

            <section id="specifications" className="scroll-mt-20">
                <Specifications categories={specificationsData} />
            </section>

            {/* Seção Recomendações */}
            <section>
                <ForYou products={items} title='Descubra a solução ideal para sua vida' />
            </section>

        </main >
    );
}


