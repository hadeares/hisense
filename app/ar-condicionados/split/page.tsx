'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { IoClose } from "react-icons/io5";
import ProductBar from "@/components/ProductBar";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import ForYou from "@/components/ForYou";
import Specifications from "@/components/Specifications";

// Definição de tipos para evitar erro de índice
interface Product {
  productImages: string[];
  technologyImage: string;
  name: string;
  copy: string;
  features: string[];
  dimensions: string;
  models: string[];
  btus: string[];
  volts: string[];
}

interface ProductData {
  [key: string]: Product;
}


interface StoreLink {
  name: string;
  logo: string | StaticImport;
  link: string;
  description: string;
}

interface StoreLinks {
  [key: string]: StoreLink[];
}


export default function Split() {

  const productData: ProductData = {
    "9.000 BTU Frio": {
      productImages: [
        '/Split/TT/tt1.png',
        '/Split/TT/tt2.png',
        '/Split/TT/tt3.png',
        '/Split/TT/tt4.png'
      ],
      technologyImage: '/Split/inverte_split.png',
      name: 'Split Hi-Wall',
      copy: 'Ar-Condicionado',
      features: [
        'Com Wi-fi pelo APP ConnectLife',
        'Mais economia e sustentabilidade com o gás Refrigerador R32',
        'Filtro 4 em 1 (removível e lavável)',
        'Auto limpeza da Evaporadora',
        'Garantia de 10 anos no compressor',
        '05 velocidades de ventilação'
      ],
      dimensions: '9.000 BTU',
      models: ['AS-09TW2RLDTT00'],
      volts: ['220v'],
      btus: ['9.000 BTU Frio']
    },
    "12.000 BTU Frio": {
      productImages: [
        '/Split/TT/tt1.png',
        '/Split/TT/tt2.png',
        '/Split/TT/tt3.png',
        '/Split/TT/tt4.png'
      ],
      technologyImage: '/Split/inverte_split.png',
      name: 'Split Hi-Wall',
      copy: 'Ar-Condicionado',
      features: [
        'Com Wi-fi pelo APP ConnectLife',
        'Mais economia e sustentabilidade com o gás Refrigerador R32',
        'Filtro 4 em 1 (removível e lavável)',
        'Auto limpeza da Evaporadora',
        'Garantia de 10 anos no compressor',
        '05 velocidades de ventilação'
      ],
      dimensions: '12.000 BTU',
      models: ['AS-12TW2RLDTT00E'],
      volts: ['220v'],
      btus: ['12.000 BTU Frio']
    },
    "18.000 BTU Frio": {
      productImages: [
        '/Split/TT/tt1.png',
        '/Split/TT/tt2.png',
        '/Split/TT/tt3.png',
        '/Split/TT/tt4.png'
      ],
      technologyImage: '/Split/inverte_split.png',
      name: 'Split Hi-Wall',
      copy: 'Ar-Condicionado',
      features: [
        'Com Wi-fi pelo APP ConnectLife',
        'Mais economia e sustentabilidade com o gás Refrigerador R32',
        'Filtro 4 em 1 (removível e lavável)',
        'Auto limpeza da Evaporadora',
        'Garantia de 10 anos no compressor',
        '05 velocidades de ventilação'
      ],
      dimensions: '18.000 BTU',
      models: ['AS-18TW2RMATT02E'],
      volts: ['220v'],
      btus: ['18.000 BTU Frio']
    },
    "24.000 BTU Frio": {
      productImages: [
        '/Split/TT/tt1.png',
        '/Split/TT/tt2.png',
        '/Split/TT/tt3.png',
        '/Split/TT/tt4.png'
      ],
      technologyImage: '/Split/inverte_split.png',
      name: 'Split Hi-Wall',
      copy: 'Ar-Condicionado',
      features: [
        'Com Wi-fi pelo APP ConnectLife',
        'Mais economia e sustentabilidade com o gás Refrigerador R32',
        'Filtro 4 em 1 (removível e lavável)',
        'Auto limpeza da Evaporadora',
        'Garantia de 10 anos no compressor',
        '05 velocidades de ventilação'
      ],
      dimensions: '24.000 BTU',
      models: ['AS-24TW2RBBTT03E'],
      volts: ['220v'],
      btus: ['24.000 BTU Frio']
    },
    "30.000 BTU Quente/Frio": {
      productImages: [
        '/Split/VQ/vq1.png',
        '/Split/VQ/vq2.png',
        '/Split/VQ/vq3.png',
        '/Split/VQ/vq4.png',
        '/Split/VQ/vq5.png',
      ],
      technologyImage: '/Split/inverte_split.png',
      name: 'Split Hi-Wall',
      copy: 'Ar-Condicionado',
      features: [
        'Com Wi-fi pelo APP ConnectLife',
        'Mais economia e sustentabilidade com o gás Refrigerador R32',
        'Filtro 4 em 1 (removível e lavável)',
        'Auto limpeza da Evaporadora',
        'Garantia de 10 anos no compressor',
        '05 velocidades de ventilação'
      ],
      dimensions: '30.000 BTU',
      models: ['AS-30UW2RKKVQ01E'],
      volts: ['220v'],
      btus: ['30.000 BTU Quente/Frio']
    },
    "36.000 BTU Quente/Frio": {
      productImages: [
        '/Split/VQ/vq1.png',
        '/Split/VQ/vq2.png',
        '/Split/VQ/vq3.png',
        '/Split/VQ/vq4.png',
        '/Split/VQ/vq5.png',
      ],
      technologyImage: '/Split/inverte_split.png',
      name: 'Split Hi-Wall',
      copy: 'Ar-Condicionado',
      features: [
        'Com Wi-fi pelo APP ConnectLife',
        'Mais economia e sustentabilidade com o gás Refrigerador R32',
        'Filtro 4 em 1 (removível e lavável)',
        'Auto limpeza da Evaporadora',
        'Garantia de 10 anos no compressor',
        '05 velocidades de ventilação'
      ],
      dimensions: '36.000 BTU',
      models: ['AS-36UW2RKKVQ00E'],
      volts: ['220v'],
      btus: ['36.000 BTU Quente/Frio']
    }
  };
  
  


  const storeLinks: StoreLinks = {
    '12.000 BTU Frio 220v AS-12TW2RLDTT00E': [
      {
        name: 'Bigazine',
        logo: '/bigazine.png',
        link: 'https://bigazine.com.br/produtos/split-hisense-12-000-btus-inverter-wifi-220v-as-12tw2rldtt00/',
        description: '12.000 BTU (Frio)'
      },
      {
        name: 'Comprebel',
        logo: '/comprebel.png',
        link: 'https://comprebel.com.br/ar-condicionado-hisense-hi-wall-12-000-btus-frio-inverter-monofasico-220v',
        description: '12.000 BTU (Frio)'
      },
      {
        name: 'Dufrio',
        logo: '/duofrio.png',
        link: 'https://www.dufrio.com.br/ar-condicionado-split-inverter-hi-wall-wi-fi-hisense-12000-btus-frio-as-12tw2rld-220v.html',
        description: '12.000 BTU (Frio)'
      },
      {
        name: 'Casas Bahia',
        logo: '/casas_bahia.png',
        link: 'https://www.casasbahia.com.br/ar-condicionado-split-inverter-hi-wall-wi-fi-hisense-12000-btus-frio-as-12tw2rld-220v/p/1569807069?utm_source=GP_PLA&utm_medium=Cpc&utm_campaign=3p_gg_pmax_apostas',
        description: '12.000 BTU (Frio)'
      },
      {
        name: 'Fast Shop',
        logo: '/fast.png',
        link: 'https://site.fastshop.com.br/ar-condicionado-split-inverter-hi-wall-wi-fi-hisense-12000-btus-frio-as-12tw2rld---220v-71942-75541/p',
        description: '12.000 BTU (Frio)'
      }
    ],
  
    '18.000 BTU Frio 220v AS-18TW2RMATT02E': [
      {
        name: 'Bigazine',
        logo: '/bigazine.png',
        link: 'https://bigazine.com.br/produtos/split-hisense-inverter-18-000-btus-wi-fi-220v-as-18tw2rmatt02/',
        description: '18.000 BTU (Frio)'
      },
      {
        name: 'Comprebel',
        logo: '/comprebel.png',
        link: 'https://comprebel.com.br/ar-condicionado-hisense-hi-wall-18-000-btus-frio-inverter-monofasico-220v',
        description: '18.000 BTU (Frio)'
      },
      {
        name: 'Carrefour',
        logo: '/carrefour.png',
        link: 'https://www.carrefour.com.br/ar-condicionado-split-hisense-hi-wall-inverter-18000-btuh-frio-monofasico-220v-mp936968190/p',
        description: '18.000 BTU (Frio)'
      },
      {
        name: 'Casas Bahia',
        logo: '/casas_bahia.png',
        link: 'https://www.casasbahia.com.br/ar-condicionado-split-hisense-hi-wall-inverter-18000-btu-h-frio-monofasico-220v/p/1564794333?utm_source=GP_PLA&utm_medium=Cpc&utm_campaign=3p_gg_pmax_apostas',
        description: '18.000 BTU (Frio)'
      }
    ],
  
    '9.000 BTU Frio 220v AS-09TW2RLDTT00': [
      {
        name: 'Comprebel',
        logo: '/comprebel.png',
        link: 'https://comprebel.com.br/ar-condicionado-split-hisense-hi-wall-inverter-9-000-btu-h-frio-monofasico-220v',
        description: '9.000 BTU (Frio)'
      },
      {
        name: 'Dufrio',
        logo: '/duofrio.png',
        link: 'https://www.dufrio.com.br/ar-condicionado-split-inverter-hi-wall-wi-fi-hisense-9000-btus-frio-as-09tw2rld-220v.html',
        description: '9.000 BTU (Frio)'
      },
      {
        name: 'Carrefour',
        logo: '/carrefour.png',
        link: 'https://www.carrefour.com.br/ar-condicionado-split-hisense-hi-wall-inverter-9000-btuh-frio-monofasico-220v-mp936166445/p',
        description: '9.000 BTU (Frio)'
      },
      {
        name: 'Casas Bahia',
        logo: '/casas_bahia.png',
        link: 'https://www.casasbahia.com.br/ar-condicionado-split-hisense-hi-wall-inverter-9000-btu-h-frio-monofasico-220v/p/1564687615?utm_source=GP_PLA&utm_medium=Cpc&utm_campaign=3p_gg_pmax_apostas',
        description: '9.000 BTU (Frio)'
      },
      {
        name: 'Fast Shop',
        logo: '/fast.png',
        link: 'https://site.fastshop.com.br/ar-condicionado-split-inverter-hi-wall-wi-fi-hisense-9000-btus-frio-as-09tw2rld---220v-71940-75539/p',
        description: '9.000 BTU (Frio)'
      }
    ],
  
    '24.000 BTU Frio 220v AS-24TW2RBBTT03E': [
      {
        name: 'Comprebel',
        logo: '/comprebel.png',
        link: 'https://comprebel.com.br/ar-condicionado-hisense-hi-wall-24-000-btus-frio-inverter-monofasico-220v',
        description: '24.000 BTU (Frio)'
      },
      {
        name: 'Carrefour',
        logo: '/carrefour.png',
        link: 'https://www.carrefour.com.br/ar-condicionado-split-hisense-hi-wall-inverter-24000-btuh-frio-monofasico-220v-mp936966425/p',
        description: '24.000 BTU (Frio)'
      },
      {
        name: 'Casas Bahia',
        logo: '/casas_bahia.png',
        link: 'https://www.casasbahia.com.br/ar-condicionado-split-hisense-hi-wall-inverter-24000-btu-h-frio-monofasico-220v/p/1566520843?utm_source=GP_PLA&utm_medium=Cpc&utm_campaign=3p_gg_pmax_apostas',
        description: '24.000 BTU (Frio)'
      }
    ],
  
    '30.000 BTU Quente/Frio 220v AS-30UW2RKKVQ01E': [
      {
        name: 'Comprebel',
        logo: '/comprebel.png',
        link: 'https://comprebel.com.br/ar-condicionado-split-hisense-hi-wall-inverter-30-000-btu-h-frio-monofasico-220v',
        description: '30.000 BTU (Frio)'
      },
      {
        name: 'Carrefour',
        logo: '/carrefour.png',
        link: 'https://www.carrefour.com.br/ar-condicionado-split-hisense-hi-wall-inverter-30000-btuh-frio-monofasico-220v-mp936166432/p',
        description: '30.000 BTU (Frio)'
      },
      {
        name: 'Casas Bahia',
        logo: '/casas_bahia.png',
        link: 'https://www.casasbahia.com.br/ar-condicionado-split-hisense-hi-wall-inverter-30000-btu-h-frio-monofasico-220v/p/1564687623?utm_source=GP_PLA&utm_medium=Cpc&utm_campaign=3p_gg_pmax_apostas',
        description: '30.000 BTU (Frio)'
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
      name: 'Portátil',
      imageSrc: '/Portatil/2.png',
      link: '/ar-condicionados/portatil'
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

  const manualSectionRef = useRef<HTMLElement | null>(null);

  const scrollToManualSection = () => {
    manualSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };



  const [showWhereToBuyModal, setShowWhereToBuyModal] = useState(false); // Controla a visibilidade do modal
  const [selectedCategory, setSelectedCategory] = useState<string>('12.000 BTU Frio'); // Capacidade padrão
  const [selectedModel, setSelectedModel] = useState<string>(productData['12.000 BTU Frio'].models[0]);
  const [selectedVolt, setSelectedVolt] = useState<string>(productData['12.000 BTU Frio'].volts[0]);
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  const productProps = productData[selectedCategory];
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedModel(productData[category].models[0]); // Define o primeiro modelo da nova capacidade selecionada
    setSelectedVolt(productData[category].volts[0]);   // Define a primeira voltagem do novo modelo
  };
  
  const handleModelChange = (model: string) => {
    setSelectedModel(model);
    setSelectedVolt(productData[selectedCategory].volts[0]); // Atualiza com a primeira voltagem disponível
  };
  
  const handleVoltChange = (volt: string) => {
    setSelectedVolt(volt);
  };
  
  const storeLinkKey = `${selectedCategory} ${selectedVolt} ${selectedModel}`;


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
      title: 'Gerais',
      content: [
        { item: 'Modelo', description: 'Split Hi-Wall' },
        { item: 'Capacidade', description: '9.000 | 12.000 | 18.000 | 24.000 | 30.000 | 36.000 BTU' },
        { item: 'Ciclo', description: 'Quente/Frio | Frio' },
        { item: 'Voltagem', description: '220V' },
        { item: 'Compressor', description: 'Inverter' },
        { item: 'Gás Refrigerante', description: 'R32' }
      ]
    },
    {
      title: 'Consumo',
      content: [
        { item: 'Energia IDRS (Wh/Wh)', description: '5,50' },
        { item: 'Área a ser resfriada', description: '12-18 | 16-21 | 20-25 | 28-46 m²' }
      ]
    },
    {
      title: 'Dimensões',
      content: [
        { item: 'Unidade Interna', description: '780x270x208 mm | 960x315x228 mm | 1131x315x240 mm' },
        { item: 'Unidade Externa', description: '660x482x240 mm | 780x540x260 mm | 1131x315x230 mm | 780x270x208 mm' }
      ]
    },
    {
      title: 'Peso',
      content: [
        { item: 'Líquido (kg)', description: '19,0 | 7,7 | 20,0 | 7,9 | 26,5 | 12,0 | 14,5 | 39,0' },
        { item: 'Bruto (kg)', description: '22,0 | 9,2 | 23,0 | 9,4 | 29,0 | 14,0 | 16,5 | 46,0' }
      ]
    },
    {
      title: 'Classificação',
      content: [
        { item: 'Classificação do Inmetro', description: 'A' },
        { item: 'Tensão Elétrica', description: '60Hz' },
        { item: 'Garantia do produto', description: '1 ano no produto' },
        { item: 'Garantia do compressor', description: '10 anos no compressor Inverter' }
      ]
    }
  ];


  return (
    <main className="max-w-[1920px] mx-auto">
      <ProductBar productName={productProps.name} openStoreModal={() => setShowWhereToBuyModal(true)} />



      <section>
      <div className="relative h-[100vh] w-full m-0 p-0 overflow-hidden">
        <div className="bg-gradient-to-r from-dark opacity-60 absolute top-0 h-full w-full"></div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="absolute left-[5%] lg:left-[15%] bottom-[10%]"
        >
          <motion.div variants={item}>
            <h2 className="text-white lg:text-7xl text-5xl pb-3 font-bold tracking-tight leading-10 pe-3">
              Ar-Condicionados Split Hi-Wall
            </h2>
            <h4 className="text-white lg:text-2xl text-xl">Clima ideal com até 80% de economia de energia</h4>
          </motion.div>
        </motion.div>
        <Image className="h-full w-full object-cover hidden md:block" src="/Split/split-kv.png" alt="Imagem key visual do Side by side" width={2000} height={800} quality={100} />
        <Image className="h-full w-full object-cover md:hidden" src="/Split/split-kv-mobile.png" alt="Imagem key visual do Side by side" width={2268} height={948} quality={100} />
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
                {/* ... */}
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

          {/* Seção "Capacidade" */}
          <div className="lg:flex items-start text-gray-600 gap-4 mt-5 mb-8">
            <h4 className="text-lg">Capacidade:</h4>
            <div className="flex flex-wrap gap-2">
              {Object.keys(productData).map((category) => (
                <span
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`text-lg lg:text-md border border-gray-400 text-gray-500 px-5 lg:px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${
                    selectedCategory === category ? 'bg-hisense text-white border-hisense' : ''
                  }`}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* Seção "Modelo" */}
          <div className="lg:flex items-center text-gray-600 gap-4 mt-5">
            <h4 className="text-lg">Modelo:</h4>
            <div className="flex flex-wrap gap-2">
              {productProps.models.map((model, index) => (
                <span
                  key={index}
                  onClick={() => handleModelChange(model)}
                  className={`text-lg lg:text-md border border-gray-400 text-gray-500 px-5 lg:px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${
                    selectedModel === model ? 'bg-hisense text-white border-hisense' : ''
                  }`}
                >
                  {model}
                </span>
              ))}
            </div>
          </div>

          {/* Seção "Voltagem" */}
          <div className="lg:flex items-center text-gray-600 gap-4 mt-5">
            <h4 className="text-lg">Voltagem:</h4>
            <div className="flex gap-2">
              {productProps.volts.map((volt, index) => (
                <span
                  key={index}
                  onClick={() => handleVoltChange(volt)}
                  className={`text-lg lg:text-md border border-gray-400 text-gray-500 px-5 lg:px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${
                    selectedVolt === volt ? 'bg-hisense text-white border-hisense' : ''
                  }`}
                >
                  {volt}
                </span>
              ))}
            </div>
          </div>

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

              {/* Seção "Capacidade" no modal */}
              <div className="lg:flex items-start text-gray-600 gap-4 mt-5 mb-8">
                <h4 className="text-lg">Capacidade:</h4>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(productData).map((category) => (
                    <span
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`text-lg lg:text-md border border-gray-400 text-gray-500 px-5 lg:px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${
                        selectedCategory === category ? 'bg-hisense text-white border-hisense' : ''
                      }`}
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              {/* Seção "Modelo" no modal */}
              <div className="lg:flex items-center text-gray-600 gap-4 mt-5">
                <h4 className="text-lg">Modelo:</h4>
                <div className="flex flex-wrap gap-2">
                  {productProps.models.map((model, index) => (
                    <span
                      key={index}
                      onClick={() => handleModelChange(model)}
                      className={`text-lg lg:text-md border border-gray-400 text-gray-500 px-5 lg:px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${
                        selectedModel === model ? 'bg-hisense text-white border-hisense' : ''
                      }`}
                    >
                      {model}
                    </span>
                  ))}
                </div>
              </div>

              {/* Seção "Voltagem" no modal */}
              <div className="lg:flex items-center text-gray-600 gap-4 mt-5">
                <h4 className="text-lg">Voltagem:</h4>
                <div className="flex gap-2">
                  {productProps.volts.map((volt, index) => (
                    <span
                      key={index}
                      onClick={() => handleVoltChange(volt)}
                      className={`text-lg lg:text-md border border-gray-400 text-gray-500 px-5 lg:px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${
                        selectedVolt === volt ? 'bg-hisense text-white border-hisense' : ''
                      }`}
                    >
                      {volt}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-10 pb-3 border-b border-gray-200">Disponível agora em:</p>

              {/* Exibição dinâmica dos links das lojas */}
              <ul className="flex flex-col gap-5 mt-8">
                {storeLinks[storeLinkKey]?.map((store, index) => (
                  <li key={index} className="flex justify-between items-center border-b border-gray-200 pb-5">
                    <Image src={store.logo} alt={store.name} width={150} height={32} />
                    <a href={store.link} target="_blank" rel="noopener noreferrer">
                      <button className="border border-hisense text-white rounded-3xl relative text-sm pb-2 pt-3 px-5 duration-500 bg-hisense">
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
          className="overlay absolute top-0 w-screen h-[5000px] bg-dark bg-opacity-70 z-50 lg:z-[51]"
          onClick={() => setShowWhereToBuyModal(false)}
        ></div>
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
                <Image src="/Split/ConnectLife.png" alt="" width={150} height={32} />
                <span>ConnectLife</span>
              </div>

            </div>

            <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
              <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                <Image src="/Split/R32.png" alt="" width={150} height={32} />
                <span className="text-xs md:text-sm" >Gás Sustentável R32</span>

              </div>



              <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                <Image src="/Split/A.png" alt="" width={150} height={32} />
                <span className="text-xs md:text-sm">80% em economia de energia</span>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 flex lg:flex-col gap-3 lg:gap-5">
              <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                <Image src="/Split/inverter.png" alt="" width={150} height={32} />
                <span className="text-xs md:text-sm">Motor Inverter</span>
              </div>


              <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                <Image src="/Split/cobre.png" alt="" width={150} height={32} />
                <span className="text-xs md:text-sm">Serpentina em cobre</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="mx-auto bg-white overflow-hidden">
        <div className="w-[100%] h-full relative">
          <Image className="h-full w-full object-cover object-right hidden md:block" src='/Split/estatico1.png' alt="" width={1920} height={1080} quality={100} />

          <div className="bg-gradient-to-t from-dark opacity-30 absolute top-0 h-full w-full lg:hidden"></div>
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="absolute top-[35%] left-[15%] hidden md:block overflow-hidden z-[5]">
            <div className="max-w-[550px]">
              <h2 className="text-dark lg:text-7xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                Super silencioso
              </h2>
              <p>
                Estável e com economia de energia essa tecnologia inverter proporciona um controle de temperatura mais estável para o seu ar-condicionado. Além disso, os produtos com inversor são mais eficientes em termos de energia, ajudando você a economizar dinheiro.
              </p>
            </div>
          </motion.div>

          {/* Mobile Version */}
          <Image className="h-full w-full object-cover object-right-bottom md:hidden" src='/Split/estatico1-mobile.png' alt="" width={1920} height={1080} quality={100} />

          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="absolute top-[35%] left-[5%] md:hidden overflow-hidden z-[5]">
            <div className="max-w-[430px] text-dark">
              <h2 className="lg:text-7xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                Super silencioso
              </h2>
              <p>
                Estável e com economia de energia essa tecnologia inverter proporciona um controle de temperatura mais estável para o seu ar-condicionado. Além disso, os produtos com inversor são mais eficientes em termos de energia, ajudando você a economizar dinheiro.
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
              <Image src='/Split/box1.png' alt="" width={743} height={744} quality={100} />
            </div>
            <div className="flex-1 md:px-2">
              <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Baixa emissão de carbono</h4>
              <p className="text-md text-gray-300">
                A tecnologia R32 oferece uma redução impressionante de 75%
                no potencial de aquecimento global em comparação com
                refrigerantes convencionais, contribuindo assim para um futuro
                mais limpo e saudável para as gerações futuras. Com o R32, você
                desfruta de uma revolução em eficiência energética e sustentabilidade ambiental.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="flex flex-col-reverse md:flex-row gap-16 items-center pt-14 lg:pb-0"
          >
            <div className="flex-1 md:px-2">
              <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Modo Dormir</h4>
              <p className="text-md text-gray-300">
                Ideal para noites de descanso profundo, o <strong>Modo Dormir</strong> da Hisense, o conforto noturno está ao seu alcance com apenas um toque. Esse recurso ajusta automaticamente a temperatura ao longo da noite, garantindo um ambiente mais fresco no início e levemente aquecido nas horas finais, acompanhando o ciclo natural do corpo. Além disso, o sistema reduz o ruído do aparelho, proporcionando um sono tranquilo e sem interrupções.
              </p>
            </div>
            <div className="flex-1 rounded-[2rem] overflow-hidden">
              <Image src='/Split/box2.png' alt="" width={743} height={744} quality={100} />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="flex flex-col md:flex-row gap-16 items-center mt-16"
          >
            <div className="flex-1 rounded-[2rem] overflow-hidden">
              <Image src='/Split/box3.png' alt="" width={743} height={744} quality={100} />
            </div>
            <div className="flex-1 md:px-2">
              <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">
                Grade horizontal de oscilação automática (Auto Wing)

              </h4>
              <p className="text-md text-gray-300">
                Equipados com stepping motors independentes, os dissipadores de vento horizontais podem se mover de forma autônoma, permitindo que você ajuste a distribuição do ar conforme suas preferências. Desfrute de um ambiente perfeitamente ventilado e confortável, adaptado às suas necessidades específicas.
              </p>
            </div>
          </motion.div>


        </div>
      </section>

      <section className="mx-auto bg-white overflow-hidden">
        <div className="w-[100%] h-full relative">
          <Image className="h-full w-full object-cover object-right hidden md:block" src='/Split/split-wifi.png' alt="" width={1920} height={1080} quality={100} />

          <div className=" bg-gradient-to-t lg:bg-gradient-to-r from-dark opacity-60 absolute top-0 h-full w-full"></div>
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="absolute top-[35%] left-[15%] hidden md:block overflow-hidden z-[5]">
            <div className="max-w-[550px]   ">
              <h2 className="text-white lg:text-7xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                Wi-Fi Control
              </h2>
              <p className="text-white">
                Por meio do aplicativo de controle do Wi-Fi inteligente, você tem o  poder de alterar o mundo ao seu redor, do jeito que você gosta. Após a conexão Wi-fi, você pode controlar o ar-condicionado a qualquer hora e em qualquer lugar da maneira que você quiser desde o minuto em que você entrar pela porta.

              </p>
            </div>
          </motion.div>

          {/* Mobile Version */}
          <Image className="h-full w-full object-cover object-right-bottom md:hidden" src='/Split/split-wifi-mobile.png' alt="" width={1920} height={1080} quality={100} />

          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="absolute bottom-[5%] left-[5%] md:hidden overflow-hidden z-[5]">
            <div className="max-w-[420px] text-white">
              <h2 className="lg:text-7xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                Wi-Fi Control
              </h2>
              <p>
                Por meio do aplicativo de controle do Wi-Fi inteligente, você tem o  poder de alterar o mundo ao seu redor, do jeito que você gosta. Após a conexão Wi-fi, você pode controlar o ar-condicionado a qualquer hora e em qualquer lugar da maneira que você quiser desde o minuto em que você entrar pela porta.

              </p>
              <p>- Entre no menu do APP</p>
              <p>- Selecione Ar-Condicionado</p>
              <p>- Selecione o modo, temperatura, fluxo de ar, entre outros.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto px-3 lg:py-20 py-14 bg-dark overflow-x-hidden">
        <div className="max-w-[1250px] mx-auto">

          <motion.div
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="flex flex-col-reverse md:flex-row gap-16 items-center pt-14 lg:pb-0"
          >
            <div className="flex-1 md:px-2">
              <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Modo I Feel</h4>
              <p className="text-md text-gray-300">
                O controle inteligente direciona automaticamente o fluxo de ar conforme suas preferências. Desfrute de uma temperatura sempre ideal, garantindo o máximo de conforto em todos os momentos.
              </p>
            </div>
            <div className="flex-1 rounded-[2rem] overflow-hidden">
              <Image src='/Split/smart.png' alt="" width={743} height={744} quality={100} />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="flex flex-col md:flex-row gap-16 items-center mt-16"
          >
            <div className="flex-1 rounded-[2rem] overflow-hidden">
              <Image src='/Split/4em1.png' alt="" width={803} height={744} quality={100} />
            </div>
            <div className="flex-1 md:px-2">
              <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">
                Filtro 4 em 1 para um ar mais puro
              </h4>
              <p className="text-md text-gray-300">
                A combinação dos quatro filtros garante um ar mais puro e limpo, protegendo o ambiente interno e promovendo conforto respiratório. Elimina poeira e odores, deixando o ar fresco e revitalizante, tanto em casa quanto no escritório.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto bg-white overflow-hidden">
        <div className="w-[100%] h-full relative">
          <Image className="h-full w-full object-cover object-right hidden md:block" src='/Split/resfriamento.png' alt="" width={1920} height={1080} quality={100} />

          <div className=" bg-gradient-to-t lg:bg-gradient-to-r from-dark opacity-40 absolute top-0 h-full w-full"></div>
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="absolute top-[15%] left-[10%] hidden md:block z-[5]">
            <div className="max-w-[400px] xl:max-w-[500px]">
              <h2 className="text-white lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                Resfriamento 46% mais rápido
              </h2>
              <p className="text-white">
                Nossa tecnologia mantém o consumo de energia eficiente e silencioso, evitando desperdícios e minimizando o impacto na conta de luz. Assim que ligado, o sistema maximiza o fluxo de ar, atingindo a temperatura desejada em menos tempo e proporcionando um alívio rápido nos dias mais quentes.
              </p>
            </div>
          </motion.div>

          {/* Mobile Version */}
          <Image className="h-full w-full object-cover object-right-bottom md:hidden" src='/Split/resfriamento-mobile.png' alt="" width={1920} height={1080} quality={100} />

          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="absolute bottom-[5%] left-[5%] md:hidden overflow-hidden z-[5]">
            <div className="max-w-[420px] text-white">
              <h2 className="lg:text-7xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                Resfriamento 46% mais rápido
              </h2>
              <p>
                Nossa tecnologia mantém o consumo de energia eficiente e silencioso, evitando desperdícios e minimizando o impacto na conta de luz. Assim que ligado, o sistema maximiza o fluxo de ar, atingindo a temperatura desejada em menos tempo e proporcionando um alívio rápido nos dias mais quentes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto bg-white overflow-hidden">
        <div className="w-[100%] h-full relative">
          <Image className="h-full w-full object-cover object-right hidden md:block" src='/Split/compressor.png' alt="" width={1920} height={1080} quality={100} />

          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="absolute top-[8%] left-[10%] hidden md:block overflow-hidden z-[5]">
            <div className="max-w-[800px]">
              <h2 className="text-white lg:text-6xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                Compressor Inverter
              </h2>
              <p className="text-white">
                Esse motor oferece uma combinação ideal de resfriamento rápido, baixo ruído e eficiência energética. Graças à sua tecnologia avançada, o compressor ajusta automaticamente sua velocidade para manter a temperatura estável, garantindo um ambiente confortável durante todo o ano, sem oscilações bruscas. E também minimiza o desgaste do equipamento, aumentando sua durabilidade e oferecendo 10 anos de garantia no compressor, para que você tenha tranquilidade e segurança no uso.
              </p>
            </div>
          </motion.div>

          {/* Mobile Version */}
          <Image className="h-full w-full object-cover object-right-bottom md:hidden" src='/Split/compressor-mobile.png' alt="" width={1920} height={1080} quality={100} />

          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="absolute bottom-[5%] left-[5%] md:hidden overflow-hidden z-[5]">
            <div className="max-w-[420px] text-white">
              <h2 className="lg:text-7xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                Compressor Inverter
              </h2>
              <p>
                Esse motor oferece uma combinação ideal de resfriamento rápido, baixo ruído e eficiência energética. Graças à sua tecnologia avançada, o compressor ajusta automaticamente sua velocidade para manter a temperatura estável, garantindo um ambiente confortável durante todo o ano, sem oscilações bruscas. E também minimiza o desgaste do equipamento, aumentando sua durabilidade e oferecendo 10 anos de garantia no compressor, para que você tenha tranquilidade e segurança no uso.
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
                src="/Split/1.png"
                alt=""
                width={496}
                height={497}
                quality={100}
              />
            </div>
            <div className="overflow-hidden rounded-[2.7rem] bg-white">
              <Image
                className="w-full h-full object-cover hover:scale-105 duration-300"
                src="/Split/2.png"
                alt=""
                width={496}
                height={497}
                quality={100}
              />
            </div>
            <div className="overflow-hidden rounded-[2.7rem] bg-white">
              <Image
                className="w-full h-full object-cover hover:scale-105 duration-300"
                src="/Split/3.png"
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
                className="w-full h-full object-contain hover:scale-105 duration-300"
                src="/Split/4.png"
                alt=""
                width={496}
                height={497}
                quality={100}
              />
            </div>

            <div className="overflow-hidden rounded-[2.7rem] bg-white">
              <Image
                className="w-full h-full object-contain hover:scale-105 duration-300"
                src="/Split/split-6.png"
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
                src="/Split/final.png"
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
                src="/Split/final-mobile.png"
                alt=""
                width={1588}
                height={890}
                quality={100}
              />
            </div>
          </div>
        </div>
      </section>
      <section id={"specifications"} ref={manualSectionRef} className="scroll-mt-20">
        <Specifications categories={specificationsData} />
      </section>

      {/* Seção Recomendações */}
      <section>
        <ForYou products={items} title='Climatize seu espaço com eficiência e conforto' />
      </section>

      <section className="lg:py-18 py-14 bg-dark scroll-mt-20">
        <div className="max-w-[1250px] mx-auto px-3 mb-10 text-center">
          <h2 className="lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-7 text-hisense">
            Manual
          </h2>
        </div>
        <div className="max-w-[1250px] px-3 mx-auto mt-10 text-center">
          <a
            href="https://hisense.com.br/wp-content/uploads/2024/07/Manual-AC-Split-Hisense.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 pt-4 bg-hisense text-white font-bold rounded-full hover:brightness-105 transition-colors"
          >
            Clique para Baixar o Manual
          </a>
        </div>
      </section>

    </main >
  );
}


