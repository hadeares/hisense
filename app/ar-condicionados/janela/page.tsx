'use client'

import Image from "next/image";

// Importação dos módulos necessários
import { motion } from "framer-motion";
import { useState } from "react";
import Specifications from "@/components/Specifications";
import VideoContainer from "@/components/VideoContainer ";
import ProductBar from "@/components/ProductBar";
import { IoClose } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import ForYou from "@/components/ForYou";

// Importação dos estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// Interfaces definidas uma única vez
interface Product {
  productImages: string[];
  technologyImage: string;
  name: string; // Código único do modelo
  copy: string;
  features: string[];
  btu: string; // BTU único
  volt: string; // Voltagem única
}

interface ProductData {
  [key: string]: Product; // Chave combinada de BTU e Voltagem
}

interface StoreLink {
  name: string;
  logo: string; // Caminho da imagem
  link: string;
  description?: string; // Opcional
}

interface StoreLinks {
  [key: string]: StoreLink[];
}

export default function Janela() {
  // Definição de animações para o Framer Motion
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

  // Dados do produto Janela integrados no productData com as associações corretas
  const productData: ProductData = {
    "AW-08CWBRVGU00 8.500 BTU 220v": {
      productImages: ['/Janela/1.png', '/Janela/2.png', '/Janela/3.png', '/Janela/4.png', '/Janela/5.png', '/Janela/6.png'],
      technologyImage: '',
      name: 'AW-08CWBRVGU00',
      copy: 'Ar-Condicionado 8.500 BTU 220v',
      features: [
        'Com Wi-fi pelo APP Connect Life',
        'Modo Dormir',
        'Timer 24h',
        'Controle Remoto Infravermelho',
        'Fluxo de Ar com 4 direções',
        '3 Velocidades de Ventilação',
        'Silencioso',
        'Filtro lavável de fácil acesso',
        'Multifuncional',
        'Gás R32'
      ],
      btu: '8.500 BTU',
      volt: '220v'
    },
    "AW-08CWBRVGU01 8.500 BTU 127v": {
      productImages: ['/Janela/1.png', '/Janela/2.png', '/Janela/3.png', '/Janela/4.png', '/Janela/5.png', '/Janela/6.png'],
      technologyImage: '',
      name: 'AW-08CWBRVGU01',
      copy: 'Ar-Condicionado 8.500 BTU 127v',
      features: [
        'Com Wi-fi pelo APP Connect Life',
        'Modo Dormir',
        'Timer 24h',
        'Controle Remoto Infravermelho',
        'Fluxo de Ar com 4 direções',
        '3 Velocidades de Ventilação',
        'Silencioso',
        'Filtro lavável de fácil acesso',
        'Multifuncional',
        'Gás R32'
      ],
      btu: '8.500 BTU',
      volt: '127v'
    },
    "AW-10CWBRVGU00 10.000 BTU 220v": {
      productImages: ['/Janela/1.png', '/Janela/2.png', '/Janela/3.png', '/Janela/4.png', '/Janela/5.png', '/Janela/6.png'],
      technologyImage: '',
      name: 'AW-10CWBRVGU00',
      copy: 'Ar-Condicionado 10.000 BTU 220v',
      features: [
        'Com Wi-fi pelo APP Connect Life',
        'Modo Dormir',
        'Timer 24h',
        'Controle Remoto Infravermelho',
        'Fluxo de Ar com 4 direções',
        '3 Velocidades de Ventilação',
        'Silencioso',
        'Filtro lavável de fácil acesso',
        'Multifuncional',
        'Gás R32'
      ],
      btu: '10.000 BTU',
      volt: '220v'
    },
    "AW-10CWBRVGU01 10.000 BTU 127v": {
      productImages: ['/Janela/1.png', '/Janela/2.png', '/Janela/3.png', '/Janela/4.png', '/Janela/5.png', '/Janela/6.png'],
      technologyImage: '',
      name: 'AW-10CWBRVGU01',
      copy: 'Ar-Condicionado 10.000 BTU 127v',
      features: [
        'Com Wi-fi pelo APP Connect Life',
        'Modo Dormir',
        'Timer 24h',
        'Controle Remoto Infravermelho',
        'Fluxo de Ar com 4 direções',
        '3 Velocidades de Ventilação',
        'Silencioso',
        'Filtro lavável de fácil acesso',
        'Multifuncional',
        'Gás R32'
      ],
      btu: '10.000 BTU',
      volt: '127v'
    }
  };

  // Estados do componente
  const [showWhereToBuyModal, setShowWhereToBuyModal] = useState(false);
  const [selectedBTU, setSelectedBTU] = useState<string>('8.500 BTU'); // BTU inicial ajustado
  const [selectedVolt, setSelectedVolt] = useState<string>('220v'); // Voltagem inicial ajustada
  const [selectedProductKey, setSelectedProductKey] = useState<string>('AW-08CWBRVGU00 8.500 BTU 220v'); // Produto inicial ajustado
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null); // Recomenda-se tipagem mais específica se possível

  // Funções de manipulação de seleção
  const handleBTUChange = (btu: string) => {
    if (btu === selectedBTU) {
      // Desselecionar BTU não é permitido para evitar estados indefinidos
      return;
    } else {
      setSelectedBTU(btu);
      // Encontrar as voltagens disponíveis para o BTU selecionado
      const availableVoltages = Object.values(productData)
        .filter(product => product.btu === btu)
        .map(product => product.volt);
      const uniqueVoltages = Array.from(new Set(availableVoltages));
      setSelectedVolt(uniqueVoltages[0]); // Seleciona a primeira voltagem disponível
      // Definir a chave do produto selecionado
      const newProduct = Object.values(productData).find(product => product.btu === btu && product.volt === uniqueVoltages[0]);
      if (newProduct) {
        setSelectedProductKey(`${newProduct.name} ${newProduct.btu} ${newProduct.volt}`);
      }
    }
  };

  const handleVoltChange = (volt: string) => {
    if (volt === selectedVolt) {
      // Desselecionar volt não é permitido
      return;
    } else {
      setSelectedVolt(volt);
      // Definir a chave do produto selecionado
      const newProduct = Object.values(productData).find(product => product.btu === selectedBTU && product.volt === volt);
      if (newProduct) {
        setSelectedProductKey(`${newProduct.name} ${newProduct.btu} ${newProduct.volt}`);
      }
    }
  };

  // Encontrar o produto selecionado
  const productProps = productData[selectedProductKey];

  // Dados das lojas ajustados para os modelos do Janela (4 combinações)
  const storeLinks: StoreLinks = {
    'AW-08CWBRVGU00 8.500 BTU 220v': [
      {
        name: 'Casas Bahia',
        logo: '/casas_bahia.png',
        link: 'https://www.casasbahia.com.br/ar-condicionado-de-janela-hisense-aw-08cw2rvgu00-8500-btus-branco/p/55064074'
      }
    ],
    'AW-08CWBRVGU01 8.500 BTU 127v': [
      {
        name: 'Friopeças',
        logo: '/friopecas.png',
        link: 'https://www.friopecas.com.br/acj-hisense-8500k-220-f-eletronico-1030493/p'
      },
      {
        name: 'Bigazine',
        logo: '/bigazine.png',
        link: 'https://bigazine.com.br/produtos/ar-condicionado-janela-hisense-aw-08cwbrvgu01-wi-fi-controle-remoto-8-500-btus-frio-220v/'
      },
      {
        name: 'Comprebel',
        logo: '/comprebel.png',
        link: 'https://comprebel.com.br/ar-condicionado-de-janela-hisense-wi-fi-8-500-btu-h-frio-monofasico-eletronico-branco-aw-08cwbrvgu01-220v'
      }
    ],
    'AW-10CWBRVGU00 10.000 BTU 220v': [
      {
        name: 'Casas Bahia',
        logo: '/casas_bahia.png',
        link: 'https://www.casasbahia.com.br/ar-condicionado-de-janela-hisense-aw-10cw2rvgu00-10-000-btus-branco/p/55064073'
      }
    ],
    'AW-10CWBRVGU01 10.000 BTU 127v': [
      {
        name: 'Friopeças',
        logo: '/friopecas.png',
        link: 'https://www.friopecas.com.br/acj-hisense-10k-220-f-eletronico-1030493/p'
      },
      {
        name: 'DUFRIO',
        logo: '/duofrio.png',
        link: 'https://www.dufrio.com.br/ar-condicionado-janela-eletronico-hisense-10000-btus-frio-aw-10cwbrvgu01-220v.html'
      },
      {
        name: 'Telerio',
        logo: '/telerio.png',
        link: 'https://www.telerio.com.br/ar-condicionado-de-janela-hisense-digital-10-500-btus-aw-10cwbrvgu01-220v/p'
      }
    ],
  };

  // Items para a seção "For You"
  const items = [
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
    {
      name: 'Piso Teto',
      imageSrc: '/Piso-teto/c1.png',
      link: '/ar-condicionados/piso-teto'
    },
  ];

  // Dados das especificações
  const specificationsData = [
    {
      title: 'Informações Gerais',
      content: [
        { item: 'Modelo', description: 'AW-08CWBRVGU00 | AW-08CWBRVGU01 | AW-10CWBRVGU00 | AW-10CWBRVGU01' },
        { item: 'Capacidade', description: '8.500 / 10.000 BTU/h' },
        { item: 'Classificação Energética', description: 'A' },
      ],
    },
    {
      title: 'Dimensões',
      content: [
        { item: 'Embalado', description: '330 x 470 x 445 mm' },
        { item: 'Desembalado', description: '375 x 560 x 510 mm' },
      ],
    },
    {
      title: 'Peso',
      content: [
        { item: 'Bruto (AW-08CWBRVGU00)', description: '22,9 Kg' },
        { item: 'Bruto (AW-08CWBRVGU01)', description: '23,5 Kg' },
        { item: 'Bruto (AW-10CWBRVGU00)', description: '24,6 Kg' },
        { item: 'Bruto (AW-10CWBRVGU01)', description: '25,2 Kg' },
        { item: 'Líquido (AW-08CWBRVGU00)', description: '20,3 Kg' },
        { item: 'Líquido (AW-08CWBRVGU01)', description: '21 Kg' },
        { item: 'Líquido (AW-10CWBRVGU00)', description: '22 Kg' },
        { item: 'Líquido (AW-10CWBRVGU01)', description: '22,7 Kg' },
      ],
    },
    {
      title: 'Limite de Empilhamento',
      content: [
        { item: 'Limite de Empilhamento', description: '7' },
      ],
    },
    {
      title: 'Capacidade Container (40\'H)',
      content: [
        { item: 'Capacidade Container', description: '644' },
      ],
    },
    {
      title: 'Alimentação Elétrica',
      content: [
        { item: 'IDU/ODU', description: 'IDU' },
      ],
    },
  ];

  // Função para rolar até a seção de especificações
  const scrollToManualSection = () => {
    const specificationsSection = document.getElementById('specifications');
    if (specificationsSection) {
      specificationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Determinar a chave para storeLinks com base no modelo selecionado
  const storeLinkKey = selectedProductKey
    ? `${productProps.name} ${productProps.btu} ${productProps.volt}`
    : '';

  return (
    <main className="max-w-[1920px] mx-auto">
      <ProductBar productName={productProps?.copy || 'Produto'} openStoreModal={() => setShowWhereToBuyModal(true)} />

      {/* Banner Principal */}
      <section>
        <div className="relative h-[100vh] w-full m-0 p-0 overflow-hidden">
          <div className="bg-gradient-to-b from-dark opacity-20 absolute top-0 h-full w-full"></div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="absolute left-[8%] lg:left-[15%] lg:top-[15%] bottom-[10%]"
          >
            <motion.div variants={item}>
              <h2 className="text-white lg:text-7xl text-5xl pb-3 font-bold tracking-tight leading-10">
                Ar-Condicionado Janela
              </h2>
              <h4 className="text-white lg:text-2xl text-xl">Experiência confortável com design elegante</h4>
            </motion.div>
          </motion.div>
          <Image
            className="h-full w-full object-cover hidden md:block"
            src="/Janela/banner1.jpg"
            alt="Imagem key visual do Janela"
            width={2000}
            height={800}
            quality={100}
          />
          <Image
            className="h-full w-full object-cover md:hidden"
            src="/Janela/banner1-mobile.jpg"
            alt="Imagem key visual do Janela para mobile"
            width={2268}
            height={948}
            quality={100}
          />
        </div>
      </section>

      {/* Seção do Produto */}
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
                        <Image
                          src={image}
                          alt={`Imagem ${index + 1} do ${productProps.name}`}
                          width={1000}
                          height={600}
                          quality={100}
                          className="object-contain"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <Swiper
                  onSwiper={(swiperInstance) => setThumbsSwiper(swiperInstance)}
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
                        alt={`Thumbnail ${index + 1} do ${productProps.name}`}
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
                <div className="flex items-start gap-2">
                  {/* Adicione conteúdo relacionado à tecnologia, se houver */}
                  <Image src={productProps.technologyImage} alt="Tecnologia" width={50} height={50} />
                </div>
              )}

              <h2 className="text-4xl font-bold mb-3">{productProps?.copy || 'Modelo'}</h2>
              <span className="text-gray-600 text-xl">{productProps ? productProps.copy : 'Ar-Condicionado'}</span>
            </div>

            <div className="bg-gray-100 rounded-2xl px-3 py-6 my-4 max-w-[98%]">
              <ul className="text-gray-600 text-sm list-disc ps-7 flex flex-col gap-2">
                {productProps && productProps.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Filtros: Capacidade | Voltagem */}
            <div className="lg:flex items-center text-gray-600 gap-4 mt-5">
              <h4 className="text-lg">Capacidade:</h4>
              {/* Layout Flexível para BTU */}
              <div className="flex flex-wrap gap-2">
                {Array.from(new Set(Object.values(productData).map(product => product.btu))).map((btu) => (
                  <span
                    key={btu}
                    onClick={() => handleBTUChange(btu)}
                    className={`text-lg lg:text-md border border-gray-400 text-gray-500 px-5 lg:px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${
                      selectedBTU === btu ? 'bg-hisense text-white border-hisense' : ''
                    }`}
                  >
                    {btu}
                  </span>
                ))}
              </div>
            </div>

            {selectedBTU && (
              <>
                <div className="lg:flex items-center text-gray-600 gap-4 mt-5">
                  <h4 className="text-lg">Voltagem:</h4>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(new Set(Object.values(productData)
                      .filter(product => product.btu === selectedBTU)
                      .map(product => product.volt))).map((volt) => (
                        <span
                          key={volt}
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

                <div className="lg:flex items-start text-gray-600 gap-4 mt-5">
                  <h4 className="text-lg">Modelo:</h4>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(productData)
                      .filter(([key, product]) => product.btu === selectedBTU && product.volt === selectedVolt)
                      .map(([key, product]) => (
                        <span
                          key={product.name}
                          onClick={() => setSelectedProductKey(`${product.name} ${product.btu} ${product.volt}`)}
                          className={`text-lg lg:text-md border border-gray-400 text-gray-500 px-5 lg:px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${
                            selectedProductKey === `${product.name} ${product.btu} ${product.volt}` ? 'bg-hisense text-white border-hisense' : ''
                          }`}
                        >
                          {product.name}
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

      {/* Modal "Onde Comprar" */}
      {showWhereToBuyModal && (
        <section>
          <div className="fixed top-0 right-0 w-[80%] md:w-[50%] lg:w-[30%] h-screen bg-white z-[60] duration-300 overflow-y-auto">
            <nav className="h-full w-full p-5">
              <button
                className="absolute text-gray-400 top-7 right-4 text-2xl rounded-full border border-gray-400"
                onClick={() => setShowWhereToBuyModal(false)}
              >
                <IoClose />
              </button>
              <div>
                {productProps ? (
                  <Image
                    src={productProps.productImages[0]}
                    alt={productProps.name}
                    width={252}
                    height={32}
                    className="object-contain"
                  />
                ) : (
                  <p className="text-center text-gray-500">Selecione um produto para visualizar.</p>
                )}
              </div>
              <div className="mt-5 px-3">
                {productProps ? (
                  <>
                    <h4 className="text-2xl font-bold">{productProps.copy}</h4>

                    {/* Filtros no Modal: Capacidade | Voltagem */}
                    <div className="lg:flex items-center text-gray-600 gap-4 mt-5">
                      <h4 className="text-lg">Capacidade:</h4>
                      {/* Layout Flexível para BTU */}
                      <div className="flex flex-wrap gap-2">
                        {Array.from(new Set(Object.values(productData).map(product => product.btu))).map((btu) => (
                          <span
                            key={btu}
                            onClick={() => handleBTUChange(btu)}
                            className={`text-lg lg:text-md border border-gray-400 text-gray-500 px-5 lg:px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${
                              selectedBTU === btu ? 'bg-hisense text-white border-hisense' : ''
                            }`}
                          >
                            {btu}
                          </span>
                        ))}
                      </div>
                    </div>

                    {selectedBTU && (
                      <>
                        <div className="lg:flex items-center text-gray-600 gap-4 mt-5">
                          <h4 className="text-lg">Voltagem:</h4>
                          <div className="flex flex-wrap gap-2">
                            {Array.from(new Set(Object.values(productData)
                              .filter(product => product.btu === selectedBTU)
                              .map(product => product.volt))).map((volt) => (
                                <span
                                  key={volt}
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

                        <div className="lg:flex items-start text-gray-600 gap-4 mt-5">
                          <h4 className="text-lg">Modelo:</h4>
                          <div className="flex flex-wrap gap-2">
                            {Object.entries(productData)
                              .filter(([key, product]) => product.btu === selectedBTU && product.volt === selectedVolt)
                              .map(([key, product]) => (
                                <span
                                  key={product.name}
                                  onClick={() => setSelectedProductKey(`${product.name} ${product.btu} ${product.volt}`)}
                                  className={`text-lg lg:text-md border border-gray-400 text-gray-500 px-5 lg:px-4 pt-1 rounded-2xl cursor-pointer duration-300 hover:border-hisense hover:bg-hisense hover:text-white ${
                                    selectedProductKey === `${product.name} ${product.btu} ${product.volt}` ? 'bg-hisense text-white border-hisense' : ''
                                  }`}
                                >
                                  {product.name}
                                </span>
                              ))}
                          </div>
                        </div>
                      </>
                    )}

                    <p className="mt-10 pb-3 border-b border-gray-200">Disponível agora em:</p>

                    {/* Exibição dinâmica dos links das lojas */}
                    <ul className="flex flex-col gap-5 mt-8">
                      {storeLinks[storeLinkKey]?.map((store, index) => (
                        <li key={index} className="flex justify-between items-center border-b border-gray-200 pb-5">
                          <Image src={store.logo} alt={store.name} width={150} height={32} className="object-contain" />
                          <a href={store.link} target="_blank" rel="noopener noreferrer">
                            <button className="border border-hisense text-white rounded-3xl relative text-sm pb-2 pt-3 px-5 duration-500 bg-hisense">
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

          {/* Overlay */}
          <div
            className="fixed top-0 left-0 w-full h-full bg-dark bg-opacity-70 z-50"
            onClick={() => setShowWhereToBuyModal(false)}
          ></div>
        </section>
      )}

      {/* Principais Características */}
      <section id="principais-caracteristicas" className="mx-auto px-3 py-20 bg-gray-100">
        <div className="max-w-[1250px] mx-auto">
          <div className="mb-10 text-center">
            <h2 className="lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-7">Principais características</h2>
          </div>

          <div className="grid grid-cols-12 gap-3 lg:gap-5 min-h-[400px]">
            <div className="col-span-12 lg:col-span-4">
              <div className="bg-white text-center hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center p-20">
                <Image src="/Janela/AC_Janela_Icone01.png" alt="ConnectLife" width={150} height={150} />
                <span>ConnectLife</span>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 flex flex-col gap-5">
              <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                <Image src="/Janela/AC_Janela_Icone02.png" alt="Gás Sustentável R32" width={150} height={150} />
                <span className="text-xs md:text-sm">Gás Sustentável R32</span>
              </div>

              <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                <Image src="/Janela/AC_Janela_Icone03.png" alt="Baixo consumo de energia" width={150} height={150} />
                <span className="text-xs md:text-sm">Baixo consumo de energia</span>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 flex flex-col gap-5">
              <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                <Image src="/Janela/AC_Janela_Icone04.png" alt="Filtro de Nylon Lavável" width={150} height={150} />
                <span className="text-xs md:text-sm">Filtro de Nylon Lavável</span>
              </div>

              <div className="bg-white hover:shadow-xl hover:bg-opacity-40 duration-500 cursor-pointer h-full rounded-[2rem] flex flex-col gap-3 items-center justify-center w-full py-8">
                <Image src="/Janela/AC_Janela_Icone05.png" alt="Modo Dormir" width={130} height={130} />
                <span className="text-xs md:text-sm">Modo Dormir</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Baixa Emissão de Carbono e Filtro Lavável */}
      <section className="mx-auto lg:py-20 py-14 bg-dark overflow-x-hidden">
        <div className="max-w-[1250px] mx-auto">
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="flex flex-col md:flex-row gap-16 items-center"
          >
            <div className="flex-1 rounded-[2rem] overflow-hidden">
              <Image src='/Janela/box1.png' alt="Baixa emissão de carbono" width={743} height={744} quality={100} />
            </div>
            <div className="flex-1 md:px-2">
              <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Baixa emissão de carbono</h4>
              <p className="text-md text-gray-300">
                A tecnologia R32 oferece uma redução impressionante de 75% no potencial de aquecimento global em comparação com refrigerantes convencionais, contribuindo assim para um futuro mais limpo e saudável para as gerações futuras. Com o R32, você desfruta de uma revolução em eficiência energética e sustentabilidade ambiental.
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
              <h4 className="text-white lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-10">Filtro lavável</h4>
              <p className="text-md text-gray-300">
                Basta uma lavagem simples e rápida para manter o filtro em perfeitas condições, evitando a necessidade de trocas constantes e economizando tempo e dinheiro. Esse recurso é ideal para quem busca praticidade no dia a dia. Além de ser mais sustentável, o filtro lavável contribui para a manutenção do ar puro, retendo partículas como poeira e poluição.
              </p>
            </div>
            <div className="flex-1 rounded-[2rem] overflow-hidden">
              <Image src='/Janela/box2.png' alt="Filtro lavável" width={743} height={744} quality={100} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção de Vídeo */}
      <section>
        <VideoContainer videoSrc="/Janela/v2.mp4" />
      </section>

      {/* Seção Wi-Fi Control */}
      <section className="mx-auto bg-white overflow-hidden">
        <div className="w-[100%] h-full relative">
          <Image
            className="h-full w-full object-cover object-right hidden md:block"
            src='/Janela/estatico1.png'
            alt="Wi-Fi Control Desktop"
            width={1920}
            height={1080}
            quality={100}
          />

          <div className="bg-gradient-to-t from-dark opacity-70 absolute top-0 h-full w-full lg:hidden"></div>
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="absolute top-[15%] left-[15%] hidden md:block overflow-hidden z-[5]"
          >
            <div className="max-w-[450px]">
              <h2 className="text-white lg:text-7xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                Wi-Fi Control
              </h2>
              <p className="text-white">
                O Ar-Condicionado de Janela Hisense tem controle remoto e conexão Wi-Fi através do aplicativo Connect Life. Controle seu ar-condicionado de maneira prática a partir de qualquer lugar, usando apenas seu celular e uma conexão Wi-Fi.
              </p>
            </div>
          </motion.div>

          {/* Versão Mobile */}
          <Image
            className="h-full w-full object-cover object-right-bottom md:hidden"
            src='/Janela/estatico1-mobile.png'
            alt="Wi-Fi Control Mobile"
            width={1920}
            height={1080}
            quality={100}
          />

          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, delay: 0.5 }}
            className="absolute bottom-[10%] left-[5%] md:hidden overflow-hidden z-[5] text-white"
          >
            <div className="max-w-[430px]">
              <h2 className="lg:text-7xl text-[26px] pb-3 font-bold tracking-tight leading-10">
                Wi-Fi Control
              </h2>
              <p>
                Por meio do aplicativo de controle do Wi-Fi inteligente, você tem o poder de alterar o mundo ao seu redor, do jeito que você gosta. O Ar-condicionado de Janela Hisense tem controle remoto e conexão Wi-Fi, você pode controlar seu ar-condicionado a qualquer hora e em qualquer lugar da maneira que você quiser desde o minuto em que você entrar pela porta.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Galeria de Imagens */}
      <section className="mx-auto px-3 py-20 bg-gray-100">
        <div className="max-w-[1250px] mx-auto">
          <div className="mb-10 text-center">
            <h2 className="lg:text-[38px] text-[26px] pb-3 font-bold tracking-tight leading-7">Galeria de imagens</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-5">
            <div className="overflow-hidden rounded-[2.7rem] bg-white">
              <Image
                className="w-full h-full object-cover hover:scale-105 duration-300"
                src="/Janela/g1.png"
                alt="Galeria 1"
                width={496}
                height={497}
                quality={100}
              />
            </div>
            <div className="overflow-hidden rounded-[2.7rem] bg-white">
              <Image
                className="w-full h-full object-cover hover:scale-105 duration-300"
                src="/Janela/g2.png"
                alt="Galeria 2"
                width={496}
                height={497}
                quality={100}
              />
            </div>
            <div className="overflow-hidden rounded-[2.7rem] bg-white">
              <Image
                className="w-full h-full object-cover hover:scale-105 duration-300"
                src="/Janela/g3.png"
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
                src="/Janela/g4.png"
                alt="Galeria 4"
                width={496}
                height={497}
                quality={100}
              />
            </div>
            <div className="overflow-hidden rounded-[2.7rem] bg-white">
              <Image
                className="w-full h-full object-cover hover:scale-105 duration-300"
                src="/Janela/g5.png"
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
                className="w-full h-full object-cover hover:scale-105 duration-300 hidden lg:block"
                src="/Janela/final.png"
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
                className="w-full h-full object-cover hover:scale-105 duration-300 lg:hidden"
                src="/Janela/final-mobile.png"
                alt="Galeria Final Mobile"
                width={1588}
                height={890}
                quality={100}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Especificações Técnicas */}
      <section id="specifications" className="scroll-mt-20">
        <Specifications categories={specificationsData} />
      </section>

      {/* Seção Recomendações */}
      <section>
        <ForYou products={items} title='Climatize seu espaço com eficiência e conforto' />
      </section>
    </main>
  );
}
