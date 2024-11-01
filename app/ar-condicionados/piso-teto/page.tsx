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
    [btu: string]: Product[];
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

export default function PisoTeto() {

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
        "36.000 BTU Frio": [
            {
                productImages: [
                    '/Piso-teto/c1.png',
                    '/Piso-teto/c2.png',
                    '/Piso-teto/c3.png',
                    '/Piso-teto/c4.png',
                    '/Piso-teto/c5.png',
                    '/Piso-teto/c8.png',
                ],
                technologyImage: '',
                name: 'AUV_36TR4RKCA',
                copy: 'Ar-Condicionado',
                features: [
                    'ConnectLife',
                    'Tubulação longa',
                    'Captação de ar fresco',
                    'Motor Inverter',
                    'Baixo consumo de energia'
                ],
                volts: ['220v'],
                btus: ['36.000 BTU Frio']
            }
        ],

        "55.000 BTU Frio": [
            {
                productImages: [
                    '/Piso-teto/c6.png',
                    '/Piso-teto/c8.png',
                ],
                technologyImage: '',
                name: 'AUV_60TR6RNCA',
                copy: 'Ar-Condicionado',
                features: [
                    'ConnectLife',
                    'Tubulação longa',
                    'Captação de ar fresco',
                    'Motor Inverter',
                    'Baixo consumo de energia'
                ],
                volts: ['220v'],
                btus: ['55.000 BTU Frio']
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
            name: 'Cassete',
            imageSrc: '/Cassette/3.png',
            link: '/ar-condicionados/cassete'
        },
    ];

    const storeLinks: StoreLinks = {
        'AUV_36TR4RKCA 220v 36.000 BTU Frio': [
            {
                name: 'Clima Rio',
                logo: '/clima-rio.png',
                link: 'https://www.climario.com.br/split-hisense-pt-36k-220v-f-inv-r32-2/p',
                description: '36.000 BTU (Frio)'
            }
        ],

        'AUV_36TR4RKCA_Quente_Frio 220v 36.000 BTU Quente/Frio': [
            {
                name: 'Carrefour',
                logo: '/carrefour.png',
                link: 'https://www.carrefour.com.br/ar-condicionado-split-piso-teto-hisense-inverter-36000-btus-frio-220v-r32-mp938155896/p',
                description: '36.000 BTU (Quente/Frio)'
            }
        ],

        'AUV_60TR6RNCA 220v 55.000 BTU Frio': [
            {
                name: 'Ramsons',
                logo: '/RAMSONS-Logo.png',
                link: 'https://www.ramsons.com.br/ar-condicionado-split-piso-teto-hisense-55-000-btus-inverter-frio-380-220v-00082965-p26655?srsltid=AfmBOoqxE1ELiI6kLUicbU02G1rxaooKyFEGdqt266agH8-WmUf9e3lc',
                description: '55.000 BTU (Frio)'
            },
            {
                name: 'Friopeças',
                logo: '/friopecas.png',
                link: 'https://www.friopecas.com.br/split-hisense-pt-55k-380-3-f-in-1031741/p?srsltid=AfmBOopYKe4-7S_AHHIvRB4zzoMubJG_KKpdB7wbLORwUh77VSQABuzi',
                description: '55.000 BTU (Frio)'
            }
        ],

        'AUV_60TR6RNCA 380v 55.000 BTU Frio': [
            {
                name: 'Loja Exemplo',
                logo: '/exemplo.png',
                link: 'https://www.exemplo.com.br/ar-condicionado-split-piso-teto-hisense-55000-btu-380v/p',
                description: '55.000 BTU (Frio) - 380v'
            }
        ]
    };

    const [showWhereToBuyModal, setShowWhereToBuyModal] = useState(false);
    const [selectedBTU, setSelectedBTU] = useState<string>('36.000 BTU Frio');
    const [selectedCategory, setSelectedCategory] = useState<string>(productData['36.000 BTU Frio'][0].name);
    const [selectedVolt, setSelectedVolt] = useState<string>(productData['36.000 BTU Frio'][0].volts[0]);
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    const handleBTUChange = (btu: string) => {
        if (btu === selectedBTU) {
            return;
        } else {
            setSelectedBTU(btu);
            const firstProduct = productData[btu][0];
            setSelectedCategory(firstProduct.name);
            setSelectedVolt(firstProduct.volts[0]);
        }
    };

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        const product = productData[selectedBTU].find(p => p.name === category);
        if (product) {
            setSelectedVolt(product.volts[0]);
        }
    };

    const handleVoltChange = (volt: string) => {
        setSelectedVolt(volt);
    };

    const productProps = productData[selectedBTU]?.find(p => p.name === selectedCategory);

    const specificationsData = [
        {
            title: 'Gerais',
            content: [
                { item: 'Set', description: 'AUV-36TR4RKCA | AUV-60TR6RNCA' },
                { item: 'Unidade Interna', description: 'AUV-36TR4RCA | AUV-60TR4RCA' },
                { item: 'Unidade Externa', description: 'AUW-36T4RK | AUW-60T6RN' },
                { item: 'Ciclo', description: 'Quente/Frio' },
                { item: 'Capacidade', description: '36.000 BTU | 55.000 BTU' },
            ],
        },
        {
            title: 'Fluxo de Ar',
            content: [
                { item: 'Unidade Interna', description: '2050/1600/1400 m³/h' },
                { item: 'Unidade Externa', description: '2200/1900/1600 m³/h' },
            ],
        },
        {
            title: 'Dimensões',
            content: [
                { item: 'Unidade Interna', description: '1580x680x230mm' },
                { item: 'Unidade Interna (Embalado)', description: '1690x820x350mm' },
                { item: 'Unidade Externa', description: '900x750x340mm | 900x1170x320mm' },
                { item: 'Unidade Externa (Embalado)', description: '1060x820x450mm | 970x1300x430mm' },
            ],
        },
        {
            title: 'Peso',
            content: [
                { item: 'Unidade Interna', description: '46-54kg' },
                { item: 'Unidade Externa', description: '55-59kg | 75-84kg' },
            ],
        },
        {
            title: 'Tubulação de Refrigerante',
            content: [
                { item: 'Líquido/Gás', description: 'Φ9.52/Φ15.88(3/8"/5/8") | Φ9.52/Φ19.05(3/8"/3/4")' },
                { item: 'Comprimento Máximo de Instalação', description: '50m' },
                { item: 'Desnível Máximo entre Unidades', description: '30m' },
            ],
        },
    ];

    const storeLinkKey = `${selectedCategory} ${selectedVolt} ${selectedBTU}`;

    const manualSectionRef = useRef<HTMLElement | null>(null);

    const scrollToManualSection = () => {
        manualSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main className="max-w-[1920px] mx-auto">

            <ProductBar productName={'Piso Teto'} openStoreModal={() => setShowWhereToBuyModal(true)} />

            <section>
                <div className="relative h-[100vh] w-full m-0 p-0 overflow-hidden">
                    <div className="bg-gradient-to-b from-dark opacity-60 absolute top-0 h-full w-full"></div>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="absolute lg:left-[15%] left-[5%] top-[17%]"
                    >
                        <motion.div variants={item}>
                            <h2 className="text-white lg:text-7xl text-5xl pb-3 font-bold tracking-tight leading-10">
                                Ar-Condicionado Piso Teto
                            </h2>
                            <h4 className="text-white lg:text-2xl text-xl">Fresco, eficiente e ideal para ambientes amplos</h4>
                        </motion.div>
                    </motion.div>
                    <Image className="h-full w-full object-cover hidden md:block" src="/Piso-teto/Banner_piso_teto.png" alt="Imagem key visual do Piso Teto" width={2000} height={800} quality={100} />
                    <Image className="h-full w-full object-cover md:hidden" src="/Piso-teto/Banner_piso_teto-mobile.png" alt="Imagem key visual do Piso Teto Mobile" width={2268} height={948} quality={100} />
                </div>
            </section>

            <section className="px-3 lg:px-0 py-14">
                <div className="grid md:grid-cols-2 items-center max-w-[1250px] mx-auto py-10 gap-10">
                    <div className="px-3 w-[90vw] md:w-auto">
                        {productProps && productProps.productImages && (
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
                                                <Image src={image} alt={`Imagem ${index + 1}`} width={1000} height={600} quality={100} />
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
                                                alt={`Thumbnail ${index + 1}`}
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
                            {productProps && productProps.technologyImage && (
                                <div className="flex items-start gap-2"></div>
                            )}

                            <h2 className="text-4xl font-bold mb-3">{'Piso Teto'}</h2>
                            <span className="text-gray-600 text-xl">{productProps ? productProps.copy : 'Ar-Condicionado'}</span>
                        </div>

                        <div className="bg-gray-100 rounded-2xl px-3 py-6 my-4 max-w-[98%]">
                            <ul className="text-gray-600 text-sm list-disc ps-7 flex flex-col gap-2">
                                {productProps && productProps.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="lg:flex items-center text-gray-600 gap-4 mt-5">
                            <h4 className="text-lg">Capacidade:</h4>
                            <div className="flex flex-col gap-2">
                                {Object.keys(productData).map((btu) => (
                                    <span
                                        key={btu}
                                        onClick={() => handleBTUChange(btu)}
                                        className={`text-lg lg:text-md border border-gray-400 text-gray-500 px-5 lg:px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${selectedBTU === btu ? 'bg-hisense text-white border-hisense' : ''}`}
                                    >
                                        {btu}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {selectedBTU && productData[selectedBTU].length > 0 && productProps && (
                            <>
                                <div className="lg:flex items-center text-gray-600 gap-4 mt-5">
                                    <h4 className="text-lg">Voltagem:</h4>
                                    <div className="flex flex-col gap-2">
                                        {productProps.volts.map((volt, index) => (
                                            <span
                                                key={index}
                                                onClick={() => handleVoltChange(volt)}
                                                className={`text-lg lg:text-md border border-gray-400 text-gray-500 px-5 lg:px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${selectedVolt === volt ? 'bg-hisense text-white border-hisense' : ''}`}
                                            >
                                                {volt}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="lg:flex items-start text-gray-600 gap-4 mt-5">
                                    <h4 className="text-lg">Modelo:</h4>
                                    <div className="flex flex-col gap-2">
                                        {productData[selectedBTU].map((product) => (
                                            <span
                                                key={product.name}
                                                onClick={() => handleCategoryChange(product.name)}
                                                className={`text-lg lg:text-md border border-gray-400 text-gray-500 px-5 lg:px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${selectedCategory === product.name ? 'bg-hisense text-white border-hisense' : ''}`}
                                            >
                                                {'Piso Teto'}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}

                        <div className="mt-12 flex gap-2">
                            <button
                                type="button"
                                className="flex items-center justify-center text-md bg-hisense transition-all duration-300 px-6 pt-3 pb-2 rounded-full text-white hover:shadow-xl"
                                onClick={() => setShowWhereToBuyModal(true)}
                            >
                                Comprar
                            </button>
                            <button
                                type="button"
                                onClick={scrollToManualSection}
                                className="flex items-center justify-center text-md border border-gray-400 transition-all duration-300 px-6 pt-3 pb-2 rounded-full text-gray-500 hover:shadow-xl"
                            >
                                Especificações técnicas
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {showWhereToBuyModal && (
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
                                {productProps ? (
                                    <Image src={productProps.productImages[0]} alt={productProps.name} width={252} height={32} />
                                ) : (
                                    <p className="text-center text-gray-500">Selecione um produto para visualizar.</p>
                                )}
                            </div>
                            <div className="mt-5 px-3">
                                {productProps ? (
                                    <>
                                        <h4 className="text-2xl font-bold">{'Piso Teto'}</h4>

                                        <div className="lg:flex items-center text-gray-600 gap-4 mt-5">
                                            <h4 className="text-lg">Capacidade:</h4>
                                            <div className="flex flex-col gap-2">
                                                {Object.keys(productData).map((btu) => (
                                                    <span
                                                        key={btu}
                                                        onClick={() => handleBTUChange(btu)}
                                                        className={`text-lg lg:text-md border border-gray-400 text-gray-500 px-5 lg:px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${selectedBTU === btu ? 'bg-hisense text-white border-hisense' : ''}`}
                                                    >
                                                        {btu}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {selectedBTU && productData[selectedBTU].length > 0 && productProps && (
                                            <>
                                                <div className="lg:flex items-center text-gray-600 gap-4 mt-5">
                                                    <h4 className="text-lg">Voltagem:</h4>
                                                    <div className="flex flex-col gap-2">
                                                        {productProps.volts.map((volt, index) => (
                                                            <span
                                                                key={index}
                                                                onClick={() => handleVoltChange(volt)}
                                                                className={`text-lg lg:text-md border border-gray-400 text-gray-500 px-5 lg:px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${selectedVolt === volt ? 'bg-hisense text-white border-hisense' : ''}`}
                                                            >
                                                                {volt}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="lg:flex items-start text-gray-600 gap-4 mt-5">
                                                    <h4 className="text-lg">Modelo:</h4>
                                                    <div className="flex flex-col gap-2">
                                                        {productData[selectedBTU].map((product) => (
                                                            <span
                                                                key={product.name}
                                                                onClick={() => handleCategoryChange(product.name)}
                                                                className={`text-lg lg:text-md border border-gray-400 text-gray-500 px-5 lg:px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${selectedCategory === product.name ? 'bg-hisense text-white border-hisense' : ''}`}
                                                            >
                                                                {product.name}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        <p className="mt-10 pb-3 border-b border-gray-200">Disponível agora em:</p>

                                        <ul className="flex flex-col gap-5 mt-8">
                                            {storeLinks[storeLinkKey]?.map((store, index) => (
                                                <li key={index} className="flex justify-between items-center border-b border-gray-200 pb-5">
                                                    <Image src={store.logo} alt={store.name} width={150} height={32} />
                                                    <a href={store.link} target="_blank" rel="noopener noreferrer">
                                                        <button className="border border-hisense text-white rounded-3xl text-sm pb-2 pt-3 px-5 duration-500 bg-hisense">
                                                            Comprar
                                                        </button>
                                                    </a>
                                                </li>
                                            ))}
                                            {productProps && !storeLinks[storeLinkKey] && (
                                                <p className="text-gray-500">Não há lojas disponíveis para essa combinação.</p>
                                            )}
                                        </ul>
                                    </>
                                ) : (
                                    <p className="text-center text-gray-500">Nenhum produto selecionado.</p>
                                )}
                            </div>
                        </nav>
                    </div>

                    <div className="overlay absolute top-0 w-screen h-screen bg-dark bg-opacity-70 z-50 lg:z-[51]" onClick={() => setShowWhereToBuyModal(false)}></div>
                </section>
            )}

            <section id="principais-caracteristicas" className="mx-auto px-3 py-20 bg-gray-100">
                <div className="max-w-[1250px] mx-auto">
                    <div className="mb-10 text-center">
                        <h2 className="lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-7">Principais características</h2>
                    </div>

                    <div className="grid grid-cols-12 gap-3 lg:gap-5 min-h-[400px]">
                        <div className="col-span-12 lg:col-span-4">
                            <div className="bg-white text-center hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center p-20">
                                <Image src="/Piso-teto/AC_PisoTeto_Icone01.png" alt="ConnectLife" width={150} height={32} />
                                <span>ConnectLife</span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/Piso-teto/AC_PisoTeto_Icone05.png" alt="Tubulação longa" width={150} height={32} />
                                <span className="text-xs md:text-sm">Tubulação longa</span>
                            </div>

                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/Piso-teto/AC_PisoTeto_Icone04.png" alt="Captação de ar fresco" width={150} height={32} />
                                <span className="text-xs md:text-sm">Captação de ar fresco</span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/Piso-teto/AC_PisoTeto_Icone03.png" alt="Motor Inverter" width={150} height={32} />
                                <span className="text-xs md:text-sm">Motor Inverter</span>
                            </div>

                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/Piso-teto/AC_PisoTeto_Icone02.png" alt="Baixo consumo de energia" width={130} height={32} />
                                <span className="text-xs md:text-sm">Baixo consumo de energia</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto bg-dark overflow-hidden">
                <div className="w-[100%] h-full relative">
                    <Image className="h-full w-full object-cover object-right hidden md:block" src='/Piso-teto/Piso-teto-Estatico-Full-design.png' alt="Design elegante" width={1920} height={1080} quality={100} />

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-[7%] left-[15%] hidden md:block overflow-hidden z-[5]"
                    >
                        <div className="max-w-[570px]">
                            <h2 className="text-white lg:text-7xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Design elegante e suave
                            </h2>
                            <p className="text-white">
                                O painel de cobertura branco e brilhante da unidade tem uma estética elegante e simplificada. Os parafusos e as porcas usados para fixar a unidade na parede ou no teto foram projetados para ficarem ocultos na unidade, proporcionando um piso interno elegante.
                            </p>
                        </div>
                    </motion.div>

                    <Image className="h-full w-full object-cover object-right-bottom md:hidden" src='/Piso-teto/Piso-teto-Estatico-Full-design-mobile.png' alt="Design elegante Mobile" width={1920} height={1080} quality={100} />

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-[15%] left-[5%] md:hidden overflow-hidden z-[5]"
                    >
                        <div className="max-w-[430px]">
                            <h2 className="text-white lg:text-7xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Design elegante e suave
                            </h2>
                            <p className="text-white">
                                O painel de cobertura branco e brilhante da unidade tem uma estética elegante e simplificada. Os parafusos e as porcas usados para fixar a unidade na parede ou no teto foram projetados para ficarem ocultos na unidade, proporcionando um piso interno elegante.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto lg:py-20 bg-dark overflow-x-hidden">
                <div className="w-[100%] h-full relative overflow-hidden">
                    <Image className="h-full w-full object-cover object-right hidden md:block" src='/Piso-teto/pisoteto-banner2.png' alt="Controle por Wi-Fi" width={1920} height={1080} quality={100} />

                    <div className="bg-gradient-to-y from-dark opacity-60 absolute top-0 h-full w-full"></div>
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-[35%] left-[15%] hidden md:block overflow-hidden z-[5]"
                    >
                        <div className="max-w-[550px]">
                            <h2 className="text-white lg:text-7xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Controle por Wi-fi
                            </h2>
                            <p className="text-white">
                                Com o ConnectLife, o bem-estar e a economia estão sempre ao seu alcance. Ajuste a temperatura antes de chegar ao local, programe o desligamento automático ou altere as configurações com um simples toque – tudo isso, sem precisar estar fisicamente presente.<br />
                                Essa conectividade oferece mais conforto e eficiência, permitindo que você otimize o uso de energia e mantenha o clima ideal a todo momento.
                            </p>
                        </div>
                    </motion.div>

                    <Image className="h-full w-full object-cover object-right-bottom md:hidden" src='/Piso-teto/pisoteto-banner2-mobile.png' alt="Controle por Wi-Fi Mobile" width={1920} height={1080} quality={100} />

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute bottom-[10%] left-[5%] md:hidden overflow-hidden z-[5]"
                    >
                        <div className="max-w-[420px]">
                            <h2 className="text-white lg:text-7xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Controle por Wi-Fi
                            </h2>
                            <p className="text-white">
                                Com o ConnectLife, o bem-estar e a economia estão sempre ao seu alcance. Ajuste a temperatura antes de chegar ao local, programe o desligamento automático ou altere as configurações com um simples toque – tudo isso, sem precisar estar fisicamente presente.<br />
                                Essa conectividade oferece mais conforto e eficiência, permitindo que você otimize o uso de energia e mantenha o clima ideal a todo momento.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto px-3 lg:py-20 py-14 bg-dark overflow-hidden">
                <div className="max-w-[1250px] mx-auto">
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col md:flex-row gap-16 items-center"
                    >
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/Piso-teto/box1.png' alt="Fluxo de Ar 4D" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Fluxo de Ar 4D</h4>
                            <p className="text-md text-gray-300">
                                O design inovador do dissipador facilita o direcionamento do fluxo de ar, permitindo ajustar o ângulo do vento tanto horizontal quanto longitudinalmente. A oscilação automática horizontal e vertical (Auto Swing) assegura uma distribuição uniforme do ar, proporcionando maior conforto.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col-reverse md:flex-row items-center gap-16 mt-14"
                    >
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Fácil instalação e limpeza</h4>
                            <p className="text-md text-gray-300">
                                Com painéis laterais de fácil acesso, ajustar a altura do gabinete é simples e rápido. Seja montado no teto ou na parede, o design inteligente elimina a necessidade de escotilhas de serviço, devido ao design de caixa elétrica simplificada.
                            </p>
                        </div>
                        <div className="flex-1 rounded-[2rem] overflow-hidden px-5 bg-white">
                            <Image src='/Piso-teto/box2.png' alt="Fácil Instalação e Limpeza" width={743} height={744} quality={100} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col md:flex-row gap-16 items-center pt-14"
                    >
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/Piso-teto/box3.png' alt="Flecha de Ar Longo Alcance" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Flecha de ar longo alcance
                            </h4>
                            <p className="text-md text-gray-300">
                                Com uma projeção de ar que alcança até 15 metros, ela garante uma climatização eficiente e uniforme, tornando-a a solução ideal para ambientes médios e grandes.<br />
                                Esse recurso é perfeito para espaços comerciais ou residenciais que precisam de um fluxo contínuo e distribuído de ar, proporcionando a mesma sensação de frescor em qualquer lugar do cômodo.
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
                                src="/Piso-teto/g1.png"
                                alt="Galeria 1"
                                width={496}
                                height={497}
                                quality={100}
                            />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image
                                className="w-full h-full object-cover hover:scale-105 duration-300"
                                src="/Piso-teto/g2.png"
                                alt="Galeria 2"
                                width={496}
                                height={497}
                                quality={100}
                            />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image
                                className="w-full h-full object-cover hover:scale-105 duration-300"
                                src="/Piso-teto/g3.png"
                                alt="Galeria 3"
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
                                src="/Piso-teto/g4.png"
                                alt="Galeria 4"
                                width={496}
                                height={497}
                                quality={100}
                            />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image
                                className="w-full h-full object-cover hover:scale-105 duration-300"
                                src="/Piso-teto/g5.png"
                                alt="Galeria 5"
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
                                src="/Piso-teto/final.png"
                                alt="Galeria Final Desktop"
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
                                src="/Piso-teto/final-mobile.png"
                                alt="Galeria Final Mobile"
                                width={1588}
                                height={890}
                                quality={100}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id="specifications" ref={manualSectionRef} className="scroll-mt-20">
                <Specifications categories={specificationsData} />
            </section>

            <section>
                <ForYou products={items} title='Climatize seu espaço com eficiência e conforto' />
            </section>

        </main>
    );
}
