import { forwardRef, useImperativeHandle, useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { IoMdOptions } from 'react-icons/io';
import { motion } from 'framer-motion';
import Link from 'next/link';

const acProducts = [
  // Cassete Models
  {
    id: 1,
    name: 'Cassete 8 Vias AUC_36TR4RKKA',
    type: 'Cassete',
    resolution: '36.000 BTU',
    temperature: 'Frio',
    volts: ['220v'],
    features: [
      'ConnectLife',
      'Tubulação longa',
      'Captação de ar fresco',
      'Motor Inverter',
      'Baixo consumo de energia'
    ],
    imageSrc: '/Cassette/1.png',
    link: '/ar-condicionados/cassete',
    copy: 'Ar-Condicionado Cassete de alta eficiência.'
  },
  {
    id: 2,
    name: 'Cassete 8 Vias AUC_60TR6RKKAA',
    type: 'Cassete',
    resolution: '60.000 BTU',
    temperature: 'Quente/Frio',
    volts: ['220v'],
    features: [
      'ConnectLife',
      'Tubulação longa',
      'Captação de ar fresco',
      'Motor Inverter',
      'Baixo consumo de energia'
    ],
    imageSrc: '/Cassette/1.png',
    link: '/ar-condicionados/cassete',
    copy: 'Ar-Condicionado Cassete com função Quente/Frio.'
  },
  {
    id: 3,
    name: 'Cassete 8 Vias AUC_60TR6RNKA',
    type: 'Cassete',
    resolution: '55.000 BTU',
    temperature: 'Frio',
    volts: ['220v'],
    features: [
      'ConnectLife',
      'Tubulação longa',
      'Captação de ar fresco',
      'Motor Inverter',
      'Baixo consumo de energia'
    ],
    imageSrc: '/Cassette/6.png',
    link: '/ar-condicionados/cassete',
    copy: 'Ar-Condicionado Cassete com maior capacidade BTU.'
  },
  // Janela Models
  {
    id: 5,
    name: 'Janela AW-08CWBRVGU01',
    type: 'Janela',
    resolution: '8.500 BTU',
    temperature: 'Frio',
    volts: ['127v'],
    features: [
      'Wi-fi pelo APP Connect Life',
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
    imageSrc: '/Janela/1.png',
    link: '/ar-condicionados/janela',
    copy: 'Ar-Condicionado de Janela eficiente e compacto.'
  },
  {
    id: 18,
    name: 'Janela AW-08CWBRVGU00',
    type: 'Janela',
    resolution: '8.500 BTU',
    temperature: 'Frio',
    volts: ['220v'],
    features: [
      'Wi-fi pelo APP Connect Life',
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
    imageSrc: '/Janela/1.png',
    link: '/ar-condicionados/janela',
    copy: 'Ar-Condicionado de Janela eficiente e compacto.'
  },
  {
    id: 6,
    name: 'Janela AW-10CWBRVGU01',
    type: 'Janela',
    resolution: '10.000 BTU',
    temperature: 'Frio',
    volts: ['127v'],
    features: [
      'Wi-fi pelo APP Connect Life',
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
    imageSrc: '/Janela/1.png',
    link: '/ar-condicionados/janela',
    copy: 'Ar-Condicionado de Janela com maior capacidade BTU.'
  },
  {
    id: 20,
    name: 'Janela AW-10CWBRVGU00',
    type: 'Janela',
    resolution: '10.000 BTU',
    temperature: 'Frio',
    volts: ['220v'],
    features: [
      'Wi-fi pelo APP Connect Life',
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
    imageSrc: '/Janela/1.png',
    link: '/ar-condicionados/janela',
    copy: 'Ar-Condicionado de Janela com maior capacidade BTU.'
  },
  // Piso Teto Models
  {
    id: 7,
    name: 'Piso Teto AUV_36TR4RKCA',
    type: 'Piso Teto',
    resolution: '36.000 BTU',
    temperature: 'Frio',
    volts: ['220v'],
    features: [
      'ConnectLife',
      'Tubulação longa',
      'Captação de ar fresco',
      'Motor Inverter',
      'Baixo consumo de energia'
    ],
    imageSrc: '/Piso-teto/c1.png',
    link: '/ar-condicionados/piso-teto',
    copy: 'Ar-Condicionado Piso Teto de alta eficiência.'
  },
  {
    id: 8,
    name: 'Piso Teto AUV_60TR6RKCA',
    type: 'Piso Teto',
    resolution: '55.000 BTU',
    temperature: 'Frio',
    volts: ['220v'],
    features: [
      'ConnectLife',
      'Tubulação longa',
      'Captação de ar fresco',
      'Motor Inverter',
      'Baixo consumo de energia'
    ],
    imageSrc: '/Piso-teto/c1.png',
    link: '/ar-condicionados/piso-teto',
    copy: 'Ar-Condicionado Piso Teto com função Quente/Frio.'
  },
  // Portátil Models
  {
    id: 11,
    name: 'Portátil 12.000 BTU',
    type: 'Portátil',
    resolution: '12.000 BTU',
    temperature: 'Frio',
    volts: ['127v'],
    features: [
      'Wi-fi pelo APP Connect Life',
      'Desumidificação Potente',
      'Multifunções',
      'Refrigeração Rápida',
      'Rodinha Universal 360°',
      'Teclas e Display de LED grandes',
      'Gás R32'
    ],
    imageSrc: '/Portatil/1.png',
    link: '/ar-condicionados/portatil',
    copy: 'Ar-Condicionado Portátil fácil de transportar.'
  },
  // Split Hi-Wall Models
  {
    id: 12,
    name: 'Split Hi-Wall AS_09TW2RLTD00',
    type: 'Split Hi-Wall',
    resolution: '9.000 BTU',
    temperature: 'Frio',
    volts: ['220v'],
    features: [
      'Wi-fi pelo APP ConnectLife',
      'Gás R32',
      'Filtro 4 em 1 (removível e lavável)',
      'Auto limpeza da Evaporadora',
      'Garantia de 10 anos no compressor',
      '05 velocidades de ventilação'
    ],
    imageSrc: '/Split/TT/tt1.png',
    link: '/ar-condicionados/split',
    copy: 'Ar-Condicionado Split Hi-Wall de alta eficiência.'
  },
  {
    id: 13,
    name: 'Split Hi-Wall AS_12TW2RLTT00',
    type: 'Split Hi-Wall',
    resolution: '12.000 BTU',
    temperature: 'Frio',
    volts: ['220v'],
    features: [
      'Wi-fi pelo APP ConnectLife',
      'Gás R32',
      'Filtro 4 em 1 (removível e lavável)',
      'Auto limpeza da Evaporadora',
      'Garantia de 10 anos no compressor',
      '05 velocidades de ventilação'
    ],
    imageSrc: '/Split/TT/tt1.png',
    link: '/ar-condicionados/split',
    copy: 'Ar-Condicionado Split Hi-Wall com maior capacidade BTU.'
  },
  {
    id: 14,
    name: 'Split Hi-Wall AS_18TW2RMATT02',
    type: 'Split Hi-Wall',
    resolution: '18.000 BTU',
    temperature: 'Frio',
    volts: ['220v'],
    features: [
      'Wi-fi pelo APP ConnectLife',
      'Gás R32',
      'Filtro 4 em 1 (removível e lavável)',
      'Auto limpeza da Evaporadora',
      'Garantia de 10 anos no compressor',
      '05 velocidades de ventilação'
    ],
    imageSrc: '/Split/TT/tt1.png',
    link: '/ar-condicionados/split',
    copy: 'Ar-Condicionado Split Hi-Wall eficiente e econômico.'
  },
  {
    id: 15,
    name: 'Split Hi-Wall AS_24TW2RLT2',
    type: 'Split Hi-Wall',
    resolution: '24.000 BTU',
    temperature: 'Frio',
    volts: ['220v'],
    features: [
      'Wi-fi pelo APP ConnectLife',
      'Gás R32',
      'Filtro 4 em 1 (removível e lavável)',
      'Auto limpeza da Evaporadora',
      'Garantia de 10 anos no compressor',
      '05 velocidades de ventilação'
    ],
    imageSrc: '/Split/TT/tt1.png',
    link: '/ar-condicionados/split',
    copy: 'Ar-Condicionado Split Hi-Wall com alta capacidade BTU.'
  },
  {
    id: 16,
    name: 'Split Hi-Wall AS_30TW2RLTT00',
    type: 'Split Hi-Wall',
    resolution: '30.000 BTU',
    temperature: 'Frio',
    volts: ['220v'],
    features: [
      'Wi-fi pelo APP ConnectLife',
      'Gás R32',
      'Filtro 4 em 1 (removível e lavável)',
      'Auto limpeza da Evaporadora',
      'Garantia de 10 anos no compressor',
      '05 velocidades de ventilação'
    ],
    imageSrc: '/Split/VQ/vq1.png',
    link: '/ar-condicionados/split',
    copy: 'Ar-Condicionado Split Hi-Wall com excelente desempenho.'
  },
  {
    id: 17,
    name: 'Split Hi-Wall AS_36TW2RLTT00',
    type: 'Split Hi-Wall',
    resolution: '36.000 BTU',
    temperature: 'Quente/Frio',
    volts: ['220v'],
    features: [
      'Wi-fi pelo APP ConnectLife',
      'Gás R32',
      'Filtro 4 em 1 (removível e lavável)',
      'Auto limpeza da Evaporadora',
      'Garantia de 10 anos no compressor',
      '05 velocidades de ventilação'
    ],
    imageSrc: '/Split/VQ/vq1.png',
    link: '/ar-condicionados/split',
    copy: 'Ar-Condicionado Split Hi-Wall com função Quente/Frio.'
  }
];

const FindIdealAC = forwardRef((props, ref) => {
  const [filters, setFilters] = useState({
    type: '',
    resolution: '',
    temperature: '',
    volts: '',
  });

  useImperativeHandle(ref, () => ({
    applyTechnologyFilter(technology: any) {
      setFilters((prev) => ({ ...prev, type: technology }));
    },
  }));

  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    setShowMore(false);
  }, [filters]);

  const updateFilter = (filterType: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const removeFilter = (filterType: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: '',
    }));
  };

  const isFiltersEmpty = useMemo(() => {
    return Object.values(filters).every(value => value === '');
  }, [filters]);

  const filteredProducts = useMemo(() => {
    if (isFiltersEmpty) {
      const uniqueTypes = [...new Set(acProducts.map(p => p.type))];
      const products = uniqueTypes.map(type => acProducts.find(p => p.type === type)).filter(p => p != null);
      return products;
    } else {
      return acProducts.filter((product) => {
        const matchesType = filters.type === '' || product.type === filters.type;
        const matchesResolution = filters.resolution === '' || product.resolution === filters.resolution;
        const matchesTemperature = filters.temperature === '' || product.temperature === filters.temperature;
        const matchesVolts = filters.volts === '' || product.volts.includes(filters.volts);
        return matchesType && matchesResolution && matchesTemperature && matchesVolts;
      });
    }
  }, [filters, isFiltersEmpty]);

  const productsToDisplay = useMemo(() => {
    if (isFiltersEmpty) {
      return showMore ? filteredProducts : filteredProducts.slice(0, 5);
    } else {
      return showMore ? filteredProducts : filteredProducts.slice(0, 3);
    }
  }, [filteredProducts, showMore, isFiltersEmpty]);

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-[1250px] mx-auto px-4">
        <div className="text-center mb-6 sm:mb-10 lg:mb-12">
          <h4 className="text-dark text-2xl sm:text-3xl lg:text-4xl font-bold mb-[40px]">
            Encontre o Ar Condicionado Ideal para Você
          </h4>
        </div>
        <div className='lg:hidden'>
          <div className='flex items-center'>
            <IoMdOptions className="text-hisense mr-2 text-xl mt-1" />
            <span className="text-hisense font-semibold text-2xl">Filtros</span>
          </div>
          <span className="text-sm lg:text-base text-gray-400 mt-1">Exibindo {filteredProducts.length} resultados</span>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between w-full h-auto lg:border sm:border-gray-300 sm:rounded-full lg:px-5 py-3 overflow-x-scroll lg:overflow-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-0 w-full pe-8 lg:border-r border-gray-300 mr-8">
            <div className='lg:flex items-center hidden'>
              <div className='flex'>
                <IoMdOptions className="text-hisense mr-2 text-xl mt-1" />
                <span className="text-hisense font-semibold text-2xl">Filtros</span>
              </div>
              <span className="ml-4 text-xs sm:text-sm lg:text-base text-gray-400 mt-1">Exibindo {filteredProducts.length} resultados</span>
            </div>
            <div className="flex flex-wrap mt-2 sm:mt-0 lg:ms-auto mr-auto lg:mr-0 ps-1">
              {Object.entries(filters).map(([filterType, filterValue]) =>
                filterValue ? (
                  <button
                    key={filterType}
                    className="ml-3 border border-gray-300 text-gray-500 rounded-full px-5 lg:px-4 py-2 pt-2.5 text-sm flex items-center mt-2 sm:mt-0"
                    onClick={() => removeFilter(filterType)}
                  >
                    {filterValue} <span className="ml-1 sm:ml-2 text-gray-500 hover:text-red-600 duration-300 text-md">×</span>
                  </button>
                ) : null
              )}
            </div>
          </div>
          <div className="flex w-full gap-3">
            <select
              className="px-4 py-2 text-sm text-gray-600 w-[130px] bg-gray-100 rounded-lg cursor-pointer"
              value={filters.type}
              onChange={(e) => updateFilter('type', e.target.value)}
            >
              <option value="">Produto</option>
              <option value="Split Hi-Wall">Split Hi-Wall</option>
              <option value="Portátil">Portátil</option>
              <option value="Janela">Janela</option>
              <option value="Piso Teto">Piso Teto</option>
              <option value="Cassete">Cassete</option>
            </select>
            <select
              className="px-6 py-2 text-sm text-gray-600 bg-gray-100 rounded-lg cursor-pointer"
              value={filters.resolution}
              onChange={(e) => updateFilter('resolution', e.target.value)}
            >
              <option value="">Capacidade BTU/h</option>
              <option value="8.500 BTU">8.500</option>
              <option value="9.000 BTU">9.000</option>
              <option value="10.000 BTU">10.000</option>
              <option value="12.000 BTU">12.000</option>
              <option value="18.000 BTU">18.000</option>
              <option value="24.000 BTU">24.000</option>
              <option value="30.000 BTU">30.000</option>
              <option value="36.000 BTU">36.000</option>
              <option value="55.000 BTU">55.000</option>
              <option value="60.000 BTU">60.000</option>
            </select>
            <select
              className="px-3 py-2 text-sm text-gray-600 w-[130px] bg-gray-100 rounded-lg cursor-pointer"
              value={filters.temperature}
              onChange={(e) => updateFilter('temperature', e.target.value)}
            >
              <option value="">Ciclo</option>
              <option value="Quente/Frio">Quente/Frio</option>
              <option value="Frio">Frio</option>
            </select>
            <select
              className="px-3 py-2 text-sm text-gray-600 w-[130px] bg-gray-100 rounded-lg cursor-pointer"
              value={filters.volts}
              onChange={(e) => updateFilter('volts', e.target.value)}
            >
              <option value="">Voltagem</option>
              <option value="127v">127v</option>
              <option value="220v">220v</option>
              <option value="380v">380v</option>
            </select>
          </div>
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 lg:mt-10 cursor-pointer"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {productsToDisplay.map((product) => (
            <Link href={product.link} key={product.id}>
              <div className="w-full border border-gray-100 rounded-[12px] lg:rounded-[16px] overflow-hidden hover:shadow-xl duration-300">
                <div className="w-full h-[350px] lg:h-[250px] bg-white">
                  <Image
                    src={product.imageSrc || '/default-image.png'}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="p-4 pt-10 lg:p-6 bg-[#F3F4F6]">
                  <h3 className="text-center text-lg lg:text-lg font-semibold">{product.name}</h3>
                  <div className="flex flex-wrap gap-2 text-sm mt-4 lg:mt-6">
                    <span className="bg-gray-200 rounded-full px-2 py-1">{product.resolution}</span>
                    {product.volts.map((volt) => (
                      <span key={volt} className="bg-gray-200 rounded-full px-2 py-1">{volt}</span>
                    ))}
                    <span className="bg-gray-200 rounded-full px-2 py-1">{product.temperature}</span>
                  </div>
                  <div className="mt-4">
                    <button className="bg-hisense text-white rounded-full px-10 py-2 text-xs sm:text-sm lg:text-base w-full hover:brightness-110 duration-300">
                      Saiba mais
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
        {!isFiltersEmpty && filteredProducts.length > (isFiltersEmpty ? 5 : 3) && (
          <div className="flex justify-center mt-6 lg:mt-8">
            <button
              className="text-base sm:text-lg lg:text-xl hover:text-hisense duration-300 border-b border-gray-300 hover:border-hisense"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? 'Mostrar Menos' : 'Ver todos os modelos'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
});

FindIdealAC.displayName = 'FindIdealAC';

export default FindIdealAC;
