'use client'

import Image from "next/image";

// import required modules
import { motion } from "framer-motion";
import ProductSection from "@/components/ProductSection";

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// Import Swiper styles
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


// Definição de tipos para evitar erro de índice
interface Product {
    productImages: string[];
    technologyImage: string;
    name: string;
    copy: string;
    features: string[];
    volt: string[];
    btus: string[]; // Adicionado para as capacidades de BTU
    sizes?: string[];
}

interface ProductData {
    [key: string]: Product;
}


export default function Portatil() {

    const specificationsData = [
        {
            title: 'Informações Gerais',
            content: [
                { item: 'Modelo', description: 'AP-12CWBRNPS01' },
                { item: 'Capacidade', description: '12000 BTU/h' },
                { item: 'Display', description: 'LED' },
                { item: 'Voltagem', description: '127V / 60Hz' },
            ],
        },
        {
            title: 'Dimensões',
            content: [
                { item: 'Externo', description: '480 × 880 × 380 mm' },
                { item: 'Interno', description: '430 × 694 × 320 mm' },
            ],
        },
        {
            title: 'Peso',
            content: [
                { item: 'Líquido', description: '25,0 kg' },
                { item: 'Bruto', description: '30,0 kg' },
            ],
        },
        {
            title: 'Nível de Ruído',
            content: [
                { item: 'Nível de Ruído', description: '56 dB (A)' },
            ],
        },
        {
            title: 'Gás Refrigerante',
            content: [
                { item: 'Tipo', description: 'R32' },
            ],
        },
        {
            title: 'Sistema de Ventilação',
            content: [
                { item: 'Sistema', description: 'Single Duct' },
            ],
        },
    ];

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
            name: 'Cassete',
            imageSrc: '/Cassette/3.png',
            link: '/ar-condicionados/cassete'
        },
        {
            name: 'Piso Teto',
            imageSrc: '/Piso-teto/c1.png',
            link: '/ar-condicionados/piso-teto'
        },
    ];


    const storeLinks = [
        {
            name: 'DUFRIO',
            logo: '/duofrio.png',
            link: 'https://www.dufrio.com.br/portatil-elet-fr-12000-hisense-wi-fi-r32-127-1.html',
        },
        {
            name: 'Fast Shop',
            logo: '/fast.png',
            link: 'https://site.fastshop.com.br/ar-condicionado-portatil-wi-fi-hisense-com-12-000-btus--frio--branco---ap-12cwbrnps01-hhap12cwbrbco_prd-2835/p',
        },
        {
            name: 'Casas Bahia',
            logo: '/casas_bahia.png',
            link: 'https://www.casasbahia.com.br/ar-condicionado-portatil-hisense-12-000-btus-ap-12cwbrnps01-wi-fi-controle-remoto-frio-110v/p/55064075',
        },
    ]

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
        Portatil: {
            productImages: ['/Portatil/1.png', '/Portatil/2.png', '/Portatil/3.png', '/Portatil/4.png'],
            technologyImage: '/Split/inverte_split.png',
            name: 'Portátil',
            copy: 'Ar-Condicionado',
            features: [
                'Wi-fi pelo APP Connect Life',
                'Desumidificação Potente',
                'Multifunções',
                'Refrigeração Rápida',
                'Rodinha Universal 360°',
                'Teclas e Display de LED grandes',
                'Gás R32',
            ],
            volt: ['127v'],
            btus: ['12.000 BTU'] 
        },
    };

    const [showWhereToBuyModal, setShowWhereToBuyModal] = useState(false); // Controla a visibilidade do modal
    const [selectedCategory, setSelectedCategory] = useState<string>('Portatil');
    const [selectedVolt, setSelectedVolt] = useState<string>(productData['Portatil'].volt[0]);
    const [selectedBTU, setSelectedBTU] = useState<string>(productData['Portatil'].btus[0]); // Novo estado para BTU
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const productProps = productData[selectedCategory];


    const handleModelChange = (model: string) => {
        setSelectedVolt(model);
    };

    const handleBTUChange = (btu: string) => {
        setSelectedBTU(btu);
    };


    const manualSectionRef = useRef<HTMLElement | null>(null);

    const scrollToManualSection = () => {
        manualSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };



    return (
        <main className="max-w-[1920px] mx-auto">
            <ProductBar productName={productProps.name} openStoreModal={() => setShowWhereToBuyModal(true)} />


            <section>
                <div className="relative h-[100vh] w-full m-0 p-0 overflow-hidden">
                    <div className="bg-gradient-to-t from-dark opacity-20 absolute top-0 h-full w-full"></div>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="absolute left-[8%] lg:left-[15%] bottom-[10%]"
                    >
                        <motion.div variants={item}>
                            <h2 className="text-white lg:text-7xl text-5xl pb-3 font-bold tracking-tight leading-10">
                                Ar-Condicionado Portátil
                            </h2>
                            <h4 className="text-white lg:text-2xl text-xl">Clima ideal a qualquer hora.
                                Satisfação no toque de um botão.</h4>
                        </motion.div>

                    </motion.div>
                    <Image className="h-full w-full object-cover hidden md:block" src="/Portatil/portatil-kv.jpg" alt="Imagem key visual do Side by side" width={2000} height={800} quality={100} />
                    <Image className="h-full w-full object-cover md:hidden" src="/Portatil/portatil-kv-mobile.jpg" alt="Imagem key visual do Side by side" width={2268} height={948} quality={100} />
                </div>
            </section>

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
                                                <Image src={image} alt="" width={1000} height={20} quality={100} />
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
                                    className="product-swiper2"
                                >
                                    {productProps.productImages.map((image, index) => (
                                        <SwiperSlide key={index}>
                                            <Image
                                                className="cursor-pointer max-h-[80px] object-cover"
                                                src={image}
                                                alt=""
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

                            <h2 className="text-4xl font-bold mb-3">{productProps.name}</h2>
                            <span className="text-gray-600 text-xl">{productProps.copy}</span>
                        </div>

                        <div className="bg-gray-100 rounded-2xl px-3 py-6 my-4 max-w-[98%]">
                            <ul className="text-gray-600 text-sm list-disc ps-7 flex flex-col gap-2">
                                {productProps.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="lg:flex items-center text-gray-600 gap-4 mt-5">
                            <h4 className="text-lg">Voltagem:</h4>
                            <div className="flex gap-2">
                                {productProps.volt.map((volt, index) => (
                                    <span
                                        key={index}
                                        onClick={() => handleModelChange(volt)}
                                        className={`text-lg lg:text-md border border-gray-400 text-gray-500 px-5 lg:px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${selectedVolt === volt ? 'bg-hisense text-white border-hisense' : ''
                                            }`}
                                    >
                                        {volt}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="lg:flex items-center text-gray-600 gap-4 mt-5">
                            <h4 className="text-lg">Capacidade:</h4>
                            <div className="flex gap-2">
                                {productProps.btus.map((btu, index) => (
                                    <span
                                        key={index}
                                        onClick={() => handleBTUChange(btu)}
                                        className={`text-lg lg:text-md border border-gray-400 text-gray-500 px-5 lg:px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${selectedBTU === btu ? 'bg-hisense text-white border-hisense' : ''}`}
                                    >
                                        {btu}
                                    </span>
                                ))}
                            </div>
                        </div>

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
                                <h4 className="text-2xl font-bold">{productProps.name}</h4>

                                <div className="lg:flex items-center text-gray-600 gap-4 mt-5">
                                    <h4 className="text-lg">Voltagem:</h4>
                                    <div className="flex gap-2">
                                        {productProps.volt.map((volt, index) => (
                                            <span
                                                key={index}
                                                onClick={() => handleModelChange(volt)}
                                                className={`text-lg lg:text-md border border-gray-400 text-gray-500 px-5 lg:px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${selectedVolt === volt ? 'bg-hisense text-white border-hisense' : ''
                                                    }`}
                                            >
                                                {volt}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="lg:flex items-center text-gray-600 gap-4 mt-5">
                                    <h4 className="text-lg">BTU:</h4>
                                    <div className="flex gap-2">
                                        {productProps.btus.map((btu, index) => (
                                            <span
                                                key={index}
                                                onClick={() => handleBTUChange(btu)}
                                                className={`text-lg lg:text-md border border-gray-400 text-gray-500 px-5 lg:px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${selectedBTU === btu ? 'bg-hisense text-white border-hisense' : ''}`}
                                            >
                                                {btu}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <p className="mt-10 pb-3 border-b border-gray-200">Disponível agora em:</p>
                                <ul className="flex flex-col gap-5 mt-8">
                                    {storeLinks.map((store) => (
                                        <li key={store.name} className="flex justify-between items-center border-b border-gray-200 pb-5">
                                            <Image src={store.logo} alt="" width={150} height={32} />
                                            <a href={store.link} target="_blank" rel="noopener noreferrer">
                                                <button className="border border-hisense text-white rounded-3xl relative text-sm pb-2 pt-3 px-5 duration-500 bg-hisense">
                                                    Comprar
                                                </button>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </nav>
                    </div>

                    {/* Overlay */}
                    <div className="overlay absolute top-0 w-screen h-[5000px] bg-dark bg-opacity-70 z-50 lg:z-[51]" onClick={() => setShowWhereToBuyModal(false)}></div>
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
                                <Image src="/Portatil/i1.png" alt="" width={150} height={32} />
                                <span>ConnectLife</span>
                            </div>

                        </div>

                        <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/Portatil/i2.png" alt="" width={150} height={32} />
                                <span className="text-xs md:text-sm" >Gás Sustentável R32</span>

                            </div>



                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/Portatil/i3.png" alt="" width={150} height={32} />
                                <span className="text-xs md:text-sm">Fácil Instalação </span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/Portatil/i5.png" alt="" width={150} height={32} />
                                <span className="text-xs md:text-sm">Dreno Seco</span>
                            </div>


                            <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                                <Image src="/Portatil/i4.png" alt="" width={130} height={32} />
                                <span className="text-xs md:text-sm">3 Velocidades</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto bg-white overflow-hidden">
                <div className="w-[100%] h-full relative">
                    <Image className="h-full w-full object-cover object-right hidden md:block" src='/Portatil/modo-dormir.png' alt="" width={1920} height={1080} quality={100} />
                    <div className="bg-gradient-to-l from-dark opacity-80 absolute top-0 h-full w-full hidden lg:block"></div>
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute top-[13%] right-[12%] hidden md:block overflow-hidden z-[5]">
                        <div className="max-w-[550px] text-white">
                            <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Conforto silencioso durante a noite
                            </h2>
                            <p>
                                Desfrute de noites tranquilas e refrescantes com o Modo Dormir do
                                Ar-Condicionado Portátil Hisense. Esta funcionalidade inteligente ajusta
                                automaticamente a temperatura e o nível de ruído, garantindo um ambiente
                                ideal para o seu descanso. Com o Modo Dormir ativado, o aparelho reduz
                                gradualmente a intensidade do ar frio e o ruído, proporcionando uma brisa
                                suave que não perturba seu sono.<br></br>

                            </p>
                        </div>
                    </motion.div>

                    {/* Mobile Version */}
                    <Image className="h-full w-full object-cover object-right-bottom md:hidden" src='/Portatil/modo-dormir-mobile.png' alt="" width={1920} height={1080} quality={100} />
                    <div className="bg-gradient-to-t from-dark opacity-70 absolute top-0 h-full w-full lg:hidden"></div>
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="absolute bottom-[7%] left-[5%] md:hidden overflow-hidden z-[5]">
                        <div className="max-w-[480px]  text-white">
                            <h2 className="lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Conforto silencioso durante a noite
                            </h2>
                            <p>
                                Desfrute de noites tranquilas e refrescantes com o Modo Dormir do
                                Ar-Condicionado Portátil Hisense. Esta funcionalidade inteligente ajusta
                                automaticamente a temperatura e o nível de ruído, garantindo um ambiente
                                ideal para o seu descanso. Com o Modo Dormir ativado, o aparelho reduz
                                gradualmente a intensidade do ar frio e o ruído, proporcionando uma brisa
                                suave que não perturba seu sono.<br></br>
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
                            <Image src='/Portatil/box1.png' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">3 Velocidades</h4>
                            <p className="text-md text-gray-300">
                                O sistema é fácil de usar e pensado para oferecer versatilidade em todas as estações, tornando sua rotina mais agradável e prática. Com a liberdade de ajustar a ventilação ao toque de um botão, o bem-estar está sempre ao seu alcance.<br></br>
                                Escolha entre três níveis de ventilação - suave, média ou intensa - adaptando a experiência às suas necessidades, seja para uma brisa leve durante a noite ou um resfriamento potente em dias quentes.
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
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Reinício automático</h4>
                            <p className="text-md text-gray-300">
                                Você não precisa se preocupar com quedas de energia ou interrupções inesperadas. Assim que a energia é restabelecida, o aparelho retoma seu funcionamento na mesma configuração anterior, garantindo que o conforto seja mantido sem necessidade de ajustes manuais. Essa funcionalidade é especialmente útil em situações em que você não está em casa ou durante a noite, proporcionando tranquilidade e continuidade no uso.
                            </p>
                        </div>
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/Portatil/box2.png' alt="" width={743} height={744} quality={100} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
                        className="flex flex-col md:flex-row gap-16 items-center lg:pt-16"
                    >
                        <div className="flex-1 rounded-[2rem] overflow-hidden">
                            <Image src='/Portatil/box3.png' alt="" width={743} height={744} quality={100} />
                        </div>
                        <div className="flex-1 md:px-2">
                            <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">
                                Timer de 24 horas
                            </h4>
                            <p className="text-md text-gray-300">
                                Agende o momento exato para ligar ou desligar o aparelho e garanta o conforto na medida certa. Acorde com o ambiente climatizado ou retorne para casa com a temperatura ideal, tudo pensado para facilitar o seu dia a dia.<br></br>
                                Além de maximizar o conforto, o Timer é uma solução inteligente para economizar energia, evitando que o aparelho funcione sem necessidade.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto bg-dark overflow-hidden">
                <div className="w-full h-full relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-dark z-[2] opacity-30 hidden lg:block"></div>
                    <Image className="h-full w-full object-cover hidden md:block" src='/Portatil/portatil-wifi.png' alt="Depth Enhancer" width={1920} height={1080} quality={100} />

                    {/* Versão Mobile */}
                    <Image className="h-full w-full object-cover md:hidden" src='/Portatil/portatil-wifi-mobile.png' alt="Depth Enhancer Mobile" width={1920} height={1080} quality={100} />

                    <div className="lg:absolute top-[20%] left-[10%] max-w-[600px] px-3 py-20 lg:p-0 z-[3]">
                        <h4 className="text-white lg:text-dark lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Wi-Fi Control</h4>
                        <p className="text-gray-300 lg:text-dark text-md lg:max-w-[500px]">
                            Por meio do aplicativo de controle do Wi-Fi inteligente, você tem o poder de
                            alterar o mundo ao seu redor, do jeito que você gosta. Após a conexão Wi-fi,
                            você pode controlar o ar condicionado a qualquer hora e em qualquer lugar
                            da maneira que você quiser desde o minuto em que você entrar pela porta.
                        </p>
                    </div>
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
                                src="/Portatil/g1.png"
                                alt=""
                                width={496}
                                height={497}
                                quality={100}
                            />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image
                                className="w-full h-full object-cover hover:scale-105 duration-300"
                                src="/Portatil/g2.png"
                                alt=""
                                width={496}
                                height={497}
                                quality={100}
                            />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image
                                className="w-full h-full object-cover hover:scale-105 duration-300"
                                src="/Portatil/g3.png"
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
                                src="/Portatil/g4.png"
                                alt=""
                                width={496}
                                height={497}
                                quality={100}
                            />
                        </div>
                        <div className="overflow-hidden rounded-[2.7rem] bg-white">
                            <Image
                                className="w-full h-full object-cover hover:scale-105 duration-300"
                                src="/Portatil/g5.png"
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
                                src="/Portatil/final.png"
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
                                src="/Portatil/final-mobile.png"
                                alt=""
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

            {/* Seção Recomendações */}
            <section>
                <ForYou products={items} title='Climatize seu espaço com eficiência e conforto' />
            </section>

        </main >
    );
}


