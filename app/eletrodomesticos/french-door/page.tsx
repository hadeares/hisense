'use client'

import Image from "next/image";

// import required modules
import { motion } from "framer-motion";
import { useRef } from "react";
import Specifications from "@/components/Specifications";
import ProductPresentation from "@/components/ProductPresentation";
import ProductBar from "@/components/ProductBar";
import ForYou from "@/components/ForYou";


export default function FrenchDoor() {

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


    const storeLinks = {

    };

    const productProps = {
        productImages: ['/FrenchDoor/01.png', '/FrenchDoor/02.png', '/FrenchDoor/03.png', '/FrenchDoor/04.png'],
        technologyImage: '',
        name: 'REFRIGERADOR FRENCH DOOR',
        copy: 'REFRIGERADOR',
        features: ['Tecnologia Inverter ', 'Espaço amplo', 'Super Freeze e Super Control', 'Aço resistente a impressões digitais'],
        dimensions: '1830 x 714 x 704mm',
        type: 'Voltagem:',
        models: ['127v', '220v'],
        size: ['220v |  RF-79W2AIQS', '127v |  RF-79W1AIQS'],
        volt: ['127v', '220v']
    }

    const specificationsData = [
        {
            title: 'Modelo',
            content: [
                { item: 'Modelo', description: 'RF-79W1AIQS' },
            ],
        },
        {
            title: 'Capacidade',
            content: [
                { item: 'Capacidade Líquida', description: '536 | 396 | 140 Litros' },
            ],
        },
        {
            title: 'Classificação Energética',
            content: [
                { item: 'Classificação Energética', description: 'A+++' },
            ],
        },
        {
            title: 'Dimensões',
            content: [
                { item: 'Embalado (A x L x P)', description: '1853 x 952 x 762 mm' },
                { item: 'Desembalado (A x L x P)', description: '1778 x 914 x 730 mm' },
            ],
        },
        {
            title: 'Peso',
            content: [
                { item: 'Peso Bruto', description: '134 Kg' },
                { item: 'Peso Líquido', description: '120 Kg' },
            ],
        },
        {
            title: 'Código EAN',
            content: [
                { item: '127V', description: '6921727068156' },
                { item: '220V', description: '6921727068163' },
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
            name: 'Side by Side',
            imageSrc: '/SideBySide/2.png',
            link: '/eletrodomesticos/side-by-side'
        },
        {
            name: 'Frigobar',
            imageSrc: '/Frigobar/1.jpg',
            link: '/eletrodomesticos/frigobar'
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
                    <div className="bg-gradient-to-r from-dark opacity-60 absolute top-0 h-full w-full"></div>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="absolute left-[15%] bottom-[12%]"
                    >
                        <motion.div variants={item}>
                            <h2 className="text-white lg:text-7xl text-5xl pb-3 font-bold tracking-tight leading-10">
                                French Door
                            </h2>
                            <h4 className="text-white lg:text-2xl text-xl">Ideal para espaços mobiliados minimalistas e contemporâneos.</h4>
                        </motion.div>

                    </motion.div>
                    <Image className="h-full w-full object-cover hidden md:block" src="/FrenchDoor/french1-banner.png" alt="Imagem key visual do Side by side" width={2000} height={800} quality={100} />
                    <Image className="h-full w-full object-cover md:hidden" src="/FrenchDoor/french1-banner-mobile.png" alt="Imagem key visual do Side by side" width={2268} height={948} quality={100} />
                </div>
            </section>

            <ProductPresentation
                productProps={productProps}
                stores={storeLinks}
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
                                <Image src="/FrenchDoor/premium.png" alt="" width={252} height={32} />
                                <span className="font-bold">DESIGN DE PORTA PLANA PREMIUM</span>
                                <span>Adapta-se a qualquer cozinha</span>
                            </div>

                        </div>

                        <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/FrenchDoor/agua.png" alt="" width={250} height={32} />
                                <div className="px-3 text-center">
                                    <p className="text-xs md:text-lg font-bold mb-2">DISPENSADOR DE GELO E ÁGUA</p>
                                    <p className="text-sm">descomplicada de obter suas bebidas geladas</p>
                                </div>
                            </div>



                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/FrenchDoor/inverter.png" alt="" width={250} height={32} />
                                <span className="text-xs md:text-sm">Tecnologia Inverter</span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-12">
                                <Image src="/FrenchDoor/amplo.png" alt="" width={250} height={32} />
                                <span className="text-xs md:text-sm">Espaço amplo</span>
                            </div>


                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/FrenchDoor/resistente.png" alt="" width={250} height={32} />
                                <span className="text-xs md:text-sm">Aço resistente a impressões digitais</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto bg-white overflow-hidden">
                <div className="w-[100%] h-full relative">
                    <Image className="h-full w-full object-cover object-right hidden md:block" src='/FrenchDoor/estatico-1.jpg' alt="" width={1920} height={1080} quality={100} />

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-[35%] left-[15%] hidden md:block overflow-hidden z-[5]">
                        <div className="max-w-[480px]">
                            <h2 className="text-dark lg:text-7xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Tecnologia Inverter
                            </h2>
                            <p>
                                Estável e com economia de energia
                                Os refrigeradores com tecnologia inverter proporcionam um controle de temperatura mais estável para a sua unidade.
                                Além disso, os produtos com inversor são mais eficientes em termos de energia, ajudando você a economizar dinheiro.

                            </p>
                        </div>
                    </motion.div>

                    {/* Mobile Version */}
                    <Image className="h-full w-full object-cover object-right-bottom md:hidden" src='/FrenchDoor/estatico1-mobile.png' alt="" width={1920} height={1080} quality={100} />
                    <div className="bg-gradient-to-t from-dark opacity-70 absolute top-0 h-full w-full lg:hidden"></div>
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute bottom-[10%] left-[5%] md:hidden overflow-hidden z-[5]">
                        <div className="max-w-[480px]  text-white">
                            <h2 className="lg:text-7xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Tecnologia Inverter
                            </h2>
                            <p>
                                Estável e com economia de energia
                                Os refrigeradores com tecnologia inverter proporcionam um controle de temperatura mais estável para a sua unidade.
                                Além disso, os produtos com inversor são mais eficientes em termos de energia, ajudando você a economizar dinheiro.

                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>


            <section className="mx-auto bg-white overflow-hidden">
                <div className="w-[100%] h-full relative">
                    <Image className="h-full w-full object-cover object-right hidden md:block" src='/FrenchDoor/estatico2.png' alt="" width={1920} height={1080} quality={100} />

                    <div className="bg-gradient-to-r from-dark opacity-60 absolute top-0 h-full w-full"></div>
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-[15%] left-[5%] hidden md:block overflow-hidden z-[5]">
                        <div className="max-w-[500px]">
                            <h2 className="text-white lg:text-7xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Diga adeus às impressões digitais
                            </h2>
                            <p className="text-white max-w-[480px]">
                                O exterior de aço inoxidável anti-impressão digital resiste às impressões digitais e facilita a limpeza. Esse acabamento exclusivo não requer produtos de limpeza especiais, portanto, você pode manter a geladeira com ótima aparência.

                            </p>
                        </div>
                    </motion.div>

                    {/* Mobile Version */}
                    <Image className="h-full w-full object-cover object-right-bottom md:hidden" src='/FrenchDoor/estatico2-mobile.png' alt="" width={1920} height={1080} quality={100} />

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-[7%] left-[5%] md:hidden overflow-hidden z-[5]">
                        <div className="max-w-[480px] text-white">
                            <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Diga adeus às impressões digitais
                            </h2>
                            <p>
                                O exterior de aço inoxidável anti-impressão digital resiste às impressões digitais e facilita a limpeza. Esse acabamento exclusivo não requer produtos de limpeza especiais, portanto, você pode manter a geladeira com ótima aparência.
                            </p>
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
                            <Image src='/FrenchDoor/boxes01.png' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Design de porta plana premium</h4>
                            <p className="text-md text-gray-300">
                                Com a largura ideal de 36 polegadas, ele se integra harmoniosamente ao ambiente, proporcionando uma aparência uniforme e elegante. Seu acabamento em aço inoxidável não apenas agrega beleza, mas também garante durabilidade e resistência. Além disso, a porta plana evita saliências desnecessárias, facilitando a instalação em espaços compactos e otimizando a circulação na cozinha.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col-reverse md:flex-row gap-16 items-center py-16 lg:pb-0"
                    >
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Espaço amplo</h4>
                            <p className="text-md text-gray-300">
                                Grande capacidade de 25,4 pés cúbicos.
                                O design bonito e elegante combina com qualquer decoração de cozinha e tem espaço suficiente para acomodar todos os seus alimentos frescos e as sobras! Disponível em 36” (25,4 cu. ft.), o refrigerador oferece mais espaço interno, não externo.

                            </p>
                        </div>
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/FrenchDoor/boxes02.png' alt="" width={743} height={744} quality={100} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col md:flex-row gap-16 items-center lg:pt-14"
                    >
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/FrenchDoor/boxes03.png' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Frescor e Praticidade sempre ao seu alcance</h4>
                            <p className="text-md text-gray-300">
                                Esse distribuidor embutido de 2,2 litros oferece opções para todos os momentos: cubos de gelo, gelo picado ou água fresca – tudo com um simples toque. Perfeito para reuniões em família e encontros com amigos, o Joy at the Door garante gelo e água gelada a qualquer hora, evitando a perda de resfriamento do refrigerador e economizando energia. Além disso, o sistema prático e intuitivo facilita o uso, trazendo mais conveniência para o seu dia a dia.
                            </p>
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
                            <Image
                                className="w-full h-full object-cover hover:scale-105 duration-300"
                                src="/FrenchDoor/g1.png"
                                alt=""
                                width={496}
                                height={497}
                                quality={100}
                            />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image
                                className="w-full h-full object-cover hover:scale-105 duration-300"
                                src="/FrenchDoor/g2.png"
                                alt=""
                                width={496}
                                height={497}
                                quality={100}
                            />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image
                                className="w-full h-full object-cover hover:scale-105 duration-300"
                                src="/FrenchDoor/g3.png"
                                alt=""
                                width={496}
                                height={497}
                                quality={100}
                            />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-5 mt-5">
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image
                                className="w-full h-full object-cover hover:scale-105 duration-300"
                                src="/FrenchDoor/g4.png"
                                alt=""
                                width={496}
                                height={497}
                                quality={100}
                            />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image
                                className="w-full h-full object-cover hover:scale-105 duration-300"
                                src="/FrenchDoor/g5.png"
                                alt=""
                                width={496}
                                height={497}
                                quality={100}
                            />
                        </div>
                    </div>

                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image
                                className="w-full h-full object-cover hover:scale-105 duration-300 hidden md:block"
                                src="/FrenchDoor/final.png"
                                alt=""
                                width={1588}
                                height={890}
                                quality={100}
                            />
                        </div>
                    </div>

                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image
                                className="w-full h-full object-cover hover:scale-105 duration-300 md:hidden"
                                src="/FrenchDoor/final-mobile.png"
                                alt=""
                                width={1588}
                                height={890}
                                quality={100}
                            />
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


