'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Specifications from "@/components/Specifications";
import { IoClose } from "react-icons/io5";
import ProductBar from "@/components/ProductBar";
import ForYou from "@/components/ForYou";

interface Product {
    productImages: string[];
    technologyImage: string;
    name: string;
    copy: string;
    features: string[];
    volts: string[];
    btus: string[];
}

interface ProductData {
    [key: string]: Product;
}

interface StoreLink {
    name: string;
    logo: string;
    link: string;
    description: string;
}

interface StoreLinks {
    [key: string]: StoreLink[];
}

export default function Cassete() {

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

    const productData: ProductData = {
        AUC_36TR4RKKA: {
            productImages: [
                '/Cassette/1.png',
                '/Cassette/3.png',
                '/Cassette/5.png',
                '/Cassette/6.png',
                '/Cassette/7.png',
            ],
            technologyImage: '',
            name: 'AUC-36TR4RKKA - Frio',
            copy: 'Ar-Condicionado Cassete 8 Vias',
            features: [
                'ConnectLife',
                'Tubulação longa',
                'Captação de ar fresco',
                'Motor Inverter',
                'Baixo consumo de energia'
            ],
            volts: ['220v'],
            btus: ['36.000 BTU']
        },

        AUC_60TR6RKKA_Quente_Frio: {
            productImages: [
                '/Cassette/1.png',
                '/Cassette/3.png',
                '/Cassette/5.png',
                '/Cassette/6.png',
                '/Cassette/7.png',
            ],
            technologyImage: '',
            name: 'AUC_60TR6RKKA - Quente/Frio',
            copy: 'Ar-Condicionado Cassete 8 Vias',
            features: [
                'ConnectLife',
                'Tubulação longa',
                'Captação de ar fresco',
                'Motor Inverter',
                'Baixo consumo de energia'
            ],
            volts: ['220v'],
            btus: ['60.000 BTU']
        },

        AUC_60TR6RNKA: {
            productImages: [
                '/Cassette/6.png',
                '/Cassette/7.png',
            ],
            technologyImage: '',
            name: 'AUC_60TR6RNKA - Frio',
            copy: 'Ar-Condicionado Cassete 8 Vias',
            features: [
                'ConnectLife',
                'Tubulação longa',
                'Captação de ar fresco',
                'Motor Inverter',
                'Baixo consumo de energia'
            ],
            volts: ['220v'],
            btus: ['60.000 BTU']
        },


    };

    const storeLinks: StoreLinks = {
        '36.000 BTU 220v AUC_36TR4RKKA': [
            {
                name: 'Clima Rio',
                logo: '/clima-rio.png',
                link: 'https://www.climario.com.br/ar-condicionado-split-cassete-4-vias-hisense-inverter-36-000-btus-frio-220v-r-32-auw-36t4rk/p',
                description: '36.000 BTU (Frio)'
            }
        ],
        '60.000 BTU 220v AUC_60TR6RKKA_Quente_Frio': [
            {
                name: 'Clima Rio',
                logo: '/clima-rio.png',
                link: 'https://www.climario.com.br/ar-condicionado-split-cassete-4-vias-hisense-inverter-55-000-btus-frio-220v-r-32-auw-60u2rn/p',
                description: '60.000 BTU (Quente/Frio)'
            }
        ],
        '60.000 BTU 220v AUC_60TR6RNKA': [
            {
                name: 'Friopeças',
                logo: '/friopecas.png',
                link: 'https://www.friopecas.com.br/exemplo-de-link-para-60mil-btus-220v',
                description: '60.000 BTU (Frio)'
            }
        ],
        '60.000 BTU 220v AUC_UR2RNKA': [
            {
                name: 'Friopeças',
                logo: '/friopecas.png',
                link: 'https://www.friopecas.com.br/exemplo-de-link-para-60mil-btus-220v',
                description: '60.000 BTU (Quente/Frio)'
            }
        ]
    };

    const items = [
        {
            name: 'Janela',
            imageSrc: '/Janela/1.png',
            link: '/ar-condicionados/janela'
        },
        {
            name: 'Split',
            imageSrc: '/Split/DJ/AC_SplitDJ_Carrossel01.png',
            link: '/ar-condicionados/split'
        },
        {
            name: 'Portátil',
            imageSrc: '/Portatil/2.png',
            link: '/ar-condicionados/portatil'
        },
        {
            name: 'Piso Teto',
            imageSrc: '/Piso-teto/c1.png',
            link: '/ar-condicionados/piso-teto'
        },
    ];

    // Estados do componente
    const [showWhereToBuyModal, setShowWhereToBuyModal] = useState(false);
    const [selectedBTU, setSelectedBTU] = useState<string>('36.000 BTU');
    const [selectedVolt, setSelectedVolt] = useState<string>('220v');
    const [selectedCategory, setSelectedCategory] = useState<string>('AUC_36TR4RKKA');
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    // Encontrar o produto selecionado
    const productProps = productData[selectedCategory];

    const handleBTUChange = (btu: string) => {
        setSelectedBTU(btu);
        // Resetar Voltagem e Modelo ao mudar a Capacidade
        setSelectedVolt('220v');

        // Filtrar os modelos disponíveis com base na Capacidade selecionada
        const modelosDisponiveis = Object.keys(productData).filter(model => productData[model].btus.includes(btu));

        if (!modelosDisponiveis.includes(selectedCategory)) {
            setSelectedCategory(modelosDisponiveis[0] || '');
        }
    };

    const handleVoltChange = (volt: string) => {
        setSelectedVolt(volt);
    };

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    // Função para construir a chave para o storeLinks
    const storeLinkKey = `${selectedBTU} ${selectedVolt} ${selectedCategory}`;

    const specificationsData = [
        {
            title: 'Gerais',
            content: [
                { item: 'Set', description: 'AUC-36TR4RKKA | AUC-60TR6RNKA | AUC-60UR2RNKA' },
                { item: 'Unidade Interna', description: 'AUC-36TR4RKA | AUC-60TR6RKA | AUC-60UR2RKA' },
                { item: 'Unidade Externa', description: 'AUW-36T4RK | AUW-60T6RN | AUW-60U2RN' },
                { item: 'Ciclo', description: 'Frio | Quente e Frio' },
                { item: 'Capacidade', description: '36.000 BTU | 60.000 BTU' },
            ],
        },
        {
            title: 'Fluxo de Ar',
            content: [
                { item: 'Fluxo', description: '1650/1450/1200 | 2000/1750/1550 | 1800/1600/1400 m³/h' },
            ],
        },
        {
            title: 'Dimensões',
            content: [
                { item: 'Unidade Externa ', description: '900x750x340mm | 900x1170x320mm | 900x1170x320mm' },
                { item: 'Unidade Externa (Embalado)', description: '1060x820x450mm | 970x1300x430mm | 970x1300x430mm' },
                { item: 'Unidade Interna ', description: '840x272x840mm | 840x272x840mmm | 840x272x840mm' },
                { item: 'Unidade Interna (Embalado)', description: '950x950x360mm | 950x950x360mmm | 950x950x360mm' },
            ],
        },
        {
            title: 'Peso',
            content: [
                { item: 'Unidade Interna', description: '26-32kg | 26-32kg | 26-31.5kg' },
                { item: 'Unidade Externa', description: '55-59kg | 75-84kg | 83-91kg' },
            ],
        },
        {
            title: 'Tubulação de Refrigerante',
            content: [
                { item: 'Líquido/Gás', description: 'Φ9.52/Φ15.88(3/8"/5/8") - Φ9.52/Φ15.88(3/8"/5/8") - Φ9.52/Φ19.05(3/8"/3/4")' },
                { item: 'Comprimento Máximo de Instalação', description: '50m' },
                { item: 'Desnível Máximo entre Unidades', description: '30m' },
            ],
        },
    ];

    const manualSectionRef = useRef<HTMLElement | null>(null);

    const scrollToManualSection = () => {
        manualSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main className="max-w-[1920px] mx-auto">

            {/* Barra de Produto */}
            <ProductBar productName={'Cassete'} openStoreModal={() => setShowWhereToBuyModal(true)} />

            {/* Banner Principal */}
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
                                Ar-Condicionado Cassete
                            </h2>
                            <h4 className="text-white lg:text-2xl text-xl">Eficiência silenciosa, frescor em todos os ambientes</h4>
                        </motion.div>
                    </motion.div>
                    <Image className="h-full w-full object-cover hidden md:block" src="/Cassette/cassete.png" alt="Imagem key visual do Cassete 8 Vias" width={2000} height={800} quality={100} />
                    <Image className="h-full w-full object-cover md:hidden" src="/Cassette/cassete-mobile.png" alt="Imagem key visual do Cassete 8 Vias Mobile" width={2268} height={948} quality={100} />
                </div>
            </section>

            {/* Seção do Produto */}
            <section className="px-3 lg:px-0 py-14">
                <div className="grid md:grid-cols-2 items-center max-w-[1250px] mx-auto py-10 gap-10">
                    <div className="px-3 w-[90vw] md:w-auto">
                        {productProps.productImages && (
                            <>
                                <Swiper
                                    spaceBetween={10}
                                    navigation={true}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="product-swiper"
                                >
                                    {productProps.productImages.map((image, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="flex items-center justify-center w-full h-full relative p-5">
                                                <Image src={image} alt={`Imagem ${index + 1} do Cassete`} width={1000} height={600} quality={100} />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                <Swiper
                                    onSwiper={(swiperInstance: any) => setThumbsSwiper(swiperInstance)}
                                    spaceBetween={10}
                                    slidesPerView={4}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="product-swiper2 mt-4"
                                >
                                    {productProps.productImages.map((image, index) => (
                                        <SwiperSlide key={index}>
                                            <Image
                                                className="cursor-pointer max-h-[80px] object-cover"
                                                src={image}
                                                alt={`Thumbnail ${index + 1} do Cassete`}
                                                width={252}
                                                height={32}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </>
                        )}
                    </div>

                    <div className="lg:ps-20 ps-2">
                        <div>
                            {productProps.technologyImage && (
                                <div className="flex items-start gap-2">
                                </div>
                            )}

                            <h2 className="text-4xl font-bold mb-3">{'Cassete'}</h2>
                            <span className="text-gray-600 text-xl">{'Ar-Condicionado'}</span>
                        </div>

                        <div className="bg-gray-100 rounded-2xl px-3 py-6 my-4 max-w-[98%]">
                            <ul className="text-gray-600 text-sm list-disc ps-7 flex flex-col gap-2">
                                {productProps.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Filtros: Capacidade | Voltagem | Modelo */}
                        {/* Capacidade */}
                        <div className="flex flex-col text-gray-600 gap-4 mt-5 mb-8">
                            <h4 className="text-lg font-semibold">Capacidade:</h4>
                            <div className="flex flex-wrap gap-2">
                                {Object.values(productData)
                                    .flatMap(product => product.btus)
                                    .filter((btu, index, self) => self.indexOf(btu) === index) // Remover duplicatas
                                    .map((btu) => (
                                        <span
                                            key={btu}
                                            onClick={() => handleBTUChange(btu)}
                                            className={`text-lg lg:text-md border border-gray-400 text-gray-500 px-5 lg:px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${selectedBTU === btu ? 'bg-hisense text-white border-hisense' : ''
                                                }`}
                                        >
                                            {btu}
                                        </span>
                                    ))}
                            </div>
                        </div>

                        {/* Voltagem */}
                        <div className="flex flex-col text-gray-600 gap-4 mt-5">
                            <h4 className="text-lg font-semibold">Voltagem:</h4>
                            <div className="flex flex-wrap gap-2">
                                {productProps.volts.map((volt, index) => (
                                    <span
                                        key={volt}
                                        onClick={() => handleVoltChange(volt)}
                                        className={`text-lg lg:text-md border border-gray-400 text-gray-500 px-5 lg:px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${selectedVolt === volt ? 'bg-hisense text-white border-hisense' : ''}`}
                                    >
                                        {volt}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Modelo */}
                        <div className="flex flex-col text-gray-600 gap-4 mt-5">
                            <h4 className="text-lg font-semibold">Modelo:</h4>
                            <div className="flex flex-wrap gap-2">
                                {Object.keys(productData)
                                    .filter(model => productData[model].btus.includes(selectedBTU))
                                    .map((category) => (
                                        <span
                                            key={category}
                                            onClick={() => handleCategoryChange(category)}
                                            className={`text-lg lg:text-md border border-gray-400 text-gray-500 px-5 lg:px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${selectedCategory === category ? 'bg-hisense text-white border-hisense' : ''}`}
                                        >
                                            {productData[category].name}
                                        </span>
                                    ))}
                            </div>
                        </div>

                        {/* Botões de Ação */}
                        <div className="mt-12 flex gap-2">
                            <button type="button" className="flex items-center justify-center text-md bg-hisense transition-all duration-300 px-6 pt-3 pb-2 rounded-full text-white hover:shadow-xl"
                                onClick={() => setShowWhereToBuyModal(true)}
                            >
                                Comprar
                            </button>
                            <button type="button" onClick={scrollToManualSection} className="flex items-center justify-center text-md border border-gray-400 transition-all duration-300 px-6 pt-3 pb-2 rounded-full text-gray-500 hover:shadow-xl">
                                Especificações técnicas
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal "Onde Comprar" */}
            {showWhereToBuyModal && (
                <>
                    <section>
                        <div className="fixed top-0 w-[80%] md:w-[50%] lg:w-[30%] h-screen bg-white z-[60] duration-300 right-0 overflow-y-auto">
                            <nav className="h-full w-full p-5">
                                <button
                                    className="absolute text-gray-400 top-7 right-4 text-2xl rounded-full border border-gray-400"
                                    onClick={() => setShowWhereToBuyModal(false)}
                                >
                                    <IoClose />
                                </button>
                                <div>
                                    <Image src={productProps.productImages[0]} alt={productProps.name} width={252} height={32} />
                                </div>
                                <div className="mt-5 px-3">
                                    <h4 className="text-2xl font-bold">{'Cassete'}</h4>

                                    {/* Filtros no Modal: Capacidade | Voltagem | Modelo */}
                                    {/* Capacidade */}
                                    <div className="flex flex-col text-gray-600 gap-4 mt-5 mb-8">
                                        <h4 className="text-lg font-semibold">Capacidade:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {Object.values(productData)
                                                .flatMap(product => product.btus)
                                                .filter((btu, index, self) => self.indexOf(btu) === index)
                                                .map((btu) => (
                                                    <span
                                                        key={btu}
                                                        onClick={() => handleBTUChange(btu)}
                                                        className={`text-lg lg:text-md border border-gray-400 text-gray-500 px-5 lg:px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${selectedBTU === btu ? 'bg-hisense text-white border-hisense' : ''
                                                            }`}
                                                    >
                                                        {btu}
                                                    </span>
                                                ))}
                                        </div>
                                    </div>

                                    {/* Voltagem */}
                                    <div className="flex flex-col text-gray-600 gap-4 mt-5">
                                        <h4 className="text-lg font-semibold">Voltagem:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {productProps.volts.map((volt, index) => (
                                                <span
                                                    key={volt}
                                                    onClick={() => handleVoltChange(volt)}
                                                    className={`text-lg lg:text-md border border-gray-400 text-gray-500 px-5 lg:px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${selectedVolt === volt ? 'bg-hisense text-white border-hisense' : ''}`}
                                                >
                                                    {volt}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Modelo */}
                                    <div className="flex flex-col text-gray-600 gap-4 mt-5">
                                        <h4 className="text-lg font-semibold">Modelo:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {Object.keys(productData)
                                                .filter(model => productData[model].btus.includes(selectedBTU))
                                                .map((category) => (
                                                    <span
                                                        key={category}
                                                        onClick={() => handleCategoryChange(category)}
                                                        className={`text-lg lg:text-md border border-gray-400 text-gray-500 px-5 lg:px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${selectedCategory === category ? 'bg-hisense text-white border-hisense' : ''}`}
                                                    >
                                                        {productData[category].name}
                                                    </span>
                                                ))}
                                        </div>
                                    </div>

                                    <p className="mt-10 pb-3 border-b border-gray-200">Disponível agora em:</p>

                                    <ul className="flex flex-col gap-5 mt-8">
                                        {storeLinks[storeLinkKey]?.map((store: StoreLink, index: number) => (
                                            <li key={`${store.name}-${index}`} className="flex justify-between items-center border-b border-gray-200 pb-5">
                                                <Image src={store.logo} alt={store.name} width={150} height={32} />
                                                <a href={store.link} target="_blank" rel="noopener noreferrer">
                                                    <button className="border border-hisense text-white rounded-3xl text-sm pb-2 pt-3 px-5 duration-500 bg-hisense">
                                                        Comprar
                                                    </button>
                                                </a>
                                            </li>
                                        ))}
                                        {!storeLinks[storeLinkKey] && (
                                            <p className="text-gray-500">Não há lojas disponíveis para essa combinação.</p>
                                        )}
                                    </ul>
                                </div>
                            </nav>
                        </div>

                        {/* Overlay */}
                        <div
                            className="overlay absolute top-0 w-screen h-screen bg-dark bg-opacity-70 z-50 lg:z-[51]"
                            onClick={() => setShowWhereToBuyModal(false)}
                        ></div>
                    </section>
                </>
            )}

            {/* Seção Principais Características */}
            <section id="principais-caracteristicas" className="mx-auto px-3 py-20 bg-gray-100">
                <div className="max-w-[1250px] mx-auto">
                    <div className="mb-10 text-center">
                        <h2 className="lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-7">Principais características</h2>
                    </div>

                    <div className="grid grid-cols-12 gap-3 lg:gap-5 min-h-[400px]">
                        <div className="col-span-12 lg:col-span-4">
                            <div className="bg-white text-center hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center p-20">
                                <Image src="/Cassette/i1.png" alt="ConnectLife" width={150} height={32} />
                                <span>ConnectLife</span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/Cassette/i2.png" alt="Gás Sustentável R32" width={150} height={32} />
                                <span className="text-xs md:text-sm">Gás Sustentável R32</span>
                            </div>

                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/Cassette/i3.png" alt="Baixo Consumo de Energia" width={150} height={32} />
                                <span className="text-xs md:text-sm">Baixo consumo de energia</span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/Cassette/i4.png" alt="Captação de Ar Fresco" width={150} height={32} />
                                <span className="text-xs md:text-sm">Captação de ar fresco</span>
                            </div>

                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/Cassette/i5.png" alt="Motor Inverter" width={130} height={32} />
                                <span className="text-xs md:text-sm">Motor Inverter</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção Climatização 360° */}
            <section className="mx-auto bg-white overflow-hidden">
                <div className="w-[100%] h-full relative">
                    <Image className="h-full w-full object-cover object-right hidden md:block" src='/Cassete/estatico1.png' alt="Climatização 360° para conforto completo" width={1920} height={1080} quality={100} />

                    <div className="lg:bg-gradient-to-l bg-gradient-to-t from-dark opacity-80 lg:opacity-60 absolute top-0 h-full w-full"></div>
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-[20%] right-[5%] hidden md:block overflow-hidden z-[5]"
                    >
                        <div className="max-w-[700px]">
                            <h2 className="text-white lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Climatização 360° para conforto completo
                            </h2>
                            <p className="text-white">
                                A brisa suave e constante alcança todos os cantos do ambiente, criando uma atmosfera confortável e agradável, ideal para espaços comerciais de médio e grande porte.<br />
                                O sistema foi desenvolvido para oferecer um fluxo natural de ar, garantindo que cada área receba a mesma qualidade de resfriamento, sem pontos quentes ou frios. Além disso, o funcionamento silencioso e eficiente permite que o ambiente mantenha a produtividade e o bem-estar durante todo o dia.
                            </p>
                        </div>
                    </motion.div>

                    {/* Versão Mobile */}
                    <Image className="h-full w-full object-cover object-right-bottom md:hidden" src='/Cassete/estatico1-mobile.png' alt="Climatização 360° Mobile" width={1920} height={1080} quality={100} />

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute bottom-[10%] left-[5%] md:hidden overflow-hidden z-[5] text-white"
                    >
                        <div className="max-w-[430px]">
                            <h2 className="lg:text-7xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Climatização 360° para conforto completo
                            </h2>
                            <p className="text-white">
                                A brisa suave e constante alcança todos os cantos do ambiente, criando uma atmosfera confortável e agradável, ideal para espaços comerciais de médio e grande porte.<br />
                                O sistema foi desenvolvido para oferecer um fluxo natural de ar, garantindo que cada área receba a mesma qualidade de resfriamento, sem pontos quentes ou frios. Além disso, o funcionamento silencioso e eficiente permite que o ambiente mantenha a produtividade e o bem-estar durante todo o dia.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Seção Controle por Wi-Fi */}
            <section className="mx-auto px-3 lg:py-20 py-14 bg-dark overflow-x-hidden">
                <div className="max-w-[1250px] mx-auto">
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col md:flex-row gap-16 items-center"
                    >
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/Cassete/box1.png' alt="Controle por Wi-Fi" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Controle por Wi-Fi</h4>
                            <p className="text-md text-gray-300">
                                Ajuste a temperatura antes de chegar ao local, programe o desligamento automático ou altere as configurações com um simples toque – tudo isso, sem precisar estar fisicamente presente. Essa conectividade oferece mais conforto e eficiência, permitindo que você otimize o uso de energia e mantenha o clima ideal a todo momento. Seja em casa, no escritório ou em qualquer ambiente comercial, o controle remoto via Wi-Fi garante praticidade e gestão inteligente do seu ar-condicionado.
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
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Modo I Feel</h4>
                            <p className="text-md text-gray-300">
                                Ideal para quem busca eficiência e praticidade, o Modo I Feel monitora as variações de temperatura e adapta o funcionamento do ar-condicionado em tempo real. Seja em um ambiente comercial ou residencial, essa função garante que cada canto tenha o clima perfeito para proporcionar conforto o dia todo. Com a tecnologia Hisense, sua experiência de climatização é personalizada e inteligente, ajustada exatamente do jeito que você precisa.
                            </p>
                        </div>
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/Cassete/box2.png' alt="Modo I Feel" width={743} height={744} quality={100} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col md:flex-row gap-16 items-center lg:pt-14"
                    >
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/Cassete/box3.png' alt="Conforto silencioso" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Conforto silencioso para um ambiente tranquilo
                            </h4>
                            <p className="text-md text-gray-300">
                                As lâminas otimizadas do ventilador e a simulação avançada do duto de ar garantem um fluxo suave, reduzindo significativamente os ruídos durante o funcionamento.<br />
                                Esse sistema é ideal para ambientes que exigem concentração ou descanso, como escritórios, salas de reunião e quartos. Além de manter a temperatura ideal, o fornecimento de ar silencioso permite que você trabalhe, relaxe ou durma sem interrupções, garantindo bem-estar a qualquer hora do dia.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Seção Refrigeração Ecologicamente Correta */}
            <section className="mx-auto bg-white overflow-hidden">
                <div className="w-[100%] h-full relative">
                    <Image className="h-full w-full object-cover object-right hidden md:block" src='/Cassete/Banner-Feature-R32.png' alt="Refrigeração ecologicamente correta" width={1920} height={1080} quality={100} />

                    <div className="lg:bg-gradient-to-l bg-gradient-to-t from-dark opacity-80 lg:opacity-60 absolute top-0 h-full w-full"></div>
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-[10%] left-[15%] hidden md:block overflow-hidden z-[5]"
                    >
                        <div className="max-w-[700px]">
                            <h2 className="text-white lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Refrigeração ecologicamente correta
                            </h2>
                            <p className="text-white">
                                O R32 possui potencial zero de destruição da camada de ozônio (ODP) e um menor potencial de aquecimento global (GWP), tornando-o uma escolha mais sustentável para o meio ambiente. Além de ser ecologicamente correto, o R32 é mais eficiente no processo de resfriamento, garantindo melhor desempenho com menor consumo de energia.
                            </p>
                        </div>
                    </motion.div>

                    {/* Versão Mobile */}
                    <Image className="h-full w-full object-cover object-right-bottom md:hidden" src='/Cassete/Banner-Feature-R32-mobile.png' alt="Refrigeração ecologicamente correta Mobile" width={1920} height={1080} quality={100} />

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute bottom-[10%] left-[5%] md:hidden overflow-hidden z-[5] text-white"
                    >
                        <div className="max-w-[430px]">
                            <h2 className="lg:text-7xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Refrigeração ecologicamente correta
                            </h2>
                            <p className="text-white">
                                O R32 possui potencial zero de destruição da camada de ozônio (ODP) e um menor potencial de aquecimento global (GWP), tornando-o uma escolha mais sustentável para o meio ambiente. Além de ser ecologicamente correto, o R32 é mais eficiente no processo de resfriamento, garantindo melhor desempenho com menor consumo de energia.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Seção Galeria de Imagens */}
            <section className="mx-auto px-3 py-20 bg-gray-100">
                <div className="max-w-[1250px] mx-auto">
                    <div className="mb-10 text-center">
                        <h2 className="lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-7">Galeria de imagens</h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-5">
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image
                                className="w-full h-full object-cover hover:scale-105 duration-300"
                                src="/Cassete/g1.png"
                                alt="Galeria 1"
                                width={496}
                                height={497}
                                quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image
                                className="w-full h-full object-cover hover:scale-105 duration-300"
                                src="/Cassete/g2.png"
                                alt="Galeria 2"
                                width={496}
                                height={497}
                                quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image
                                className="w-full h-full object-cover hover:scale-105 duration-300"
                                src="/Cassete/g3.png"
                                alt="Galeria 3"
                                width={496}
                                height={497}
                                quality={100} />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-5 mt-5">
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image
                                className="w-full h-full object-cover hover:scale-105 duration-300"
                                src="/Cassete/g4.png"
                                alt="Galeria 4"
                                width={496}
                                height={497}
                                quality={100} />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image
                                className="w-full h-full object-cover hover:scale-105 duration-300"
                                src="/Cassete/g5.png"
                                alt="Galeria 5"
                                width={496}
                                height={497}
                                quality={100} />
                        </div>
                    </div>

                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image
                                className="w-full h-full object-cover hover:scale-105 duration-300 hidden md:block"
                                src="/Cassete/final.png"
                                alt="Galeria Final Desktop"
                                width={1588}
                                height={890}
                                quality={100} />
                        </div>
                    </div>

                    <div className="h-full mt-5">
                        <div className="overflow-hidden rounded-[2.7rem]">
                            <Image
                                className="w-full h-full object-cover hover:scale-105 duration-300 md:hidden"
                                src="/Cassete/final-mobile.png"
                                alt="Galeria Final Mobile"
                                width={1588}
                                height={890}
                                quality={100} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção Especificações Técnicas */}
            <section id="specifications" ref={manualSectionRef} className="scroll-mt-20">
                <Specifications categories={specificationsData} />
            </section>

            {/* Seção Recomendações */}
            <section>
                <ForYou products={items} title='Climatize seu espaço com eficiência e conforto' />
            </section>

        </main>
    )
}
