import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Technologies = () => {
  const [activeTech, setActiveTech] = useState('Hi-View Engine'); // Define a aba ativa
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Define se é mobile pela largura da tela
    };

    handleResize(); // Executa na montagem do componente
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Dados das tecnologias/produtos com texto adicional para cada uma
  const technologies = [
    {
      name: 'Hi-View Engine',
      imageSrc: '/03-engine-pro-BG2.jpg', // Fundo da aba para desktop
      icon: '/hi-view-home.png',
      mobileImageSrc: '/hiview-mobile.png', // Fundo da aba para mobile
      elementSrc: '/03-engine-pro-elementos.png', // Elementos animados da aba HiView Engine
      description: 'Domínio visual perfeito baseado em IA',
      additionalText: 'Seja assistindo filmes, shows ou esportes ao vivo, o Processador Hi-View Engine com IA entrega uma imagem impecável e que se adapta automaticamente para a melhor experiência.',
    },
    {
      name: 'Mini-LED',
      imageSrc: '/miniled.png', // Fundo para desktop
      icon: '/miniled-home.png',
      mobileImageSrc: '/miniled-mobile.png', // Fundo para mobile
      elementSrc: '', // Sem elementos animados
      description: 'Controle preciso de luz para uma imagem incrivelmente nítida',
      additionalText: 'Riqueza de detalhes até nos filmes mais escuros ou ambientes muito iluminados.',
    },
    {
      name: 'Quantum Dot Color',
      imageSrc: '/quantumdot.png', // Fundo para desktop
      icon: '/quantum-dot-home.png',
      mobileImageSrc: '/quantumdot-mobile.png', // Fundo para mobile
      elementSrc: '', // Sem elementos animados
      description: 'Bilhões de cores vibrantes, projetadas para a perfeição',
      additionalText: 'Imersão completa em filmes, séries e jogos se tornam com tons ricos e imagens de tirar o fôlego. Essa tecnologia traz à vida nuances que outras telas não conseguem captar, resultando em uma experiência visual mais próxima da realidade.',

    },
    {
      name: 'Game Mode Pro',
      imageSrc: '/gamemode.png', // Fundo para desktop
      icon: '/game-mode-home.png',
      mobileImageSrc: '/gamemode-mobile.png', // Fundo para mobile
      elementSrc: '', // Sem elementos animados
      description: 'Desempenho ultrarrápido para jogos sem limites',
      additionalText: 'Suas partidas nunca mais serão as mesmas. Essa tecnologia reduz a latência e entrega taxas de atualização de até 144Hz, garantindo respostas ultrarrápidas em cada movimento.',

    },
  ];

  // Obtém a tecnologia ativa (produto)
  const currentTech = technologies.find((tech) => tech.name === activeTech);

  return (
    <div className="relative w-full h-auto bg-white overflow-hidden">

      <h2 className="text-dark text-[28px] lg:text-4xl font-bold mb-[10px] text-center pb-4 pt-8">
        Tecnologias
      </h2>

      <div className="max-w-full mx-auto text-center">
        {/* Navegação das tecnologias */}
        <div className="flex flex-wrap justify-center items-center w-full mx-auto mb-8 px-4">
          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center">
              <button
                className={`px-2 sm:px-4 py-2 text-xs sm:text-base lg:text-lg border-b-2 transition-opacity duration-500 ${tech.name === activeTech
                  ? 'border-b-[#00AAA6] text-black opacity-100 font-bold'
                  : 'border-b-gray-300 text-gray-500 opacity-50'
                  }`}
                onClick={() => setActiveTech(tech.name)} // Muda a aba ativa
              >
                {tech.name}
              </button>
              {index < technologies.length - 1 && (
                <div className="hidden sm:block w-[24px] h-[0px] border-t border-[#808080] transform -rotate-90 opacity-50 mx-2 sm:mx-8"></div>
              )}
            </div>
          ))}
        </div>

        {/* Fundo e animações */}
        {currentTech && (
          <div className="relative w-full h-[650px] lg:h-[100vh]">

            <div className="bg-gradient-to-t from-dark opacity-[52%] absolute top-0 h-full w-full z-[2]"></div>

            {/* Fundo fixo da tecnologia ativa (diferente para mobile) */}
            <div className="absolute w-full h-full top-0 left-0">
              <Image
                quality={100}
                src={isMobile && currentTech.mobileImageSrc ? currentTech.mobileImageSrc : currentTech.imageSrc} // Verifica se é mobile e se há uma imagem mobile
                alt={currentTech.name}
                layout="fill"
                objectFit="cover"
                className="w-full h-full fixed"
              />
            </div>

            {/* Elementos animados da tecnologia ativa, se disponíveis */}
            {!isMobile && currentTech.elementSrc && (
              <motion.div
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [1, 0.9, 1],
                }}
                transition={{
                  duration: 10,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                <Image
                  src={currentTech.elementSrc} // Elementos animados que mudam conforme o produto
                  alt=""
                  layout="fill"
                  objectFit="contain"
                  className="w-full h-full"
                  quality={100}
                />
              </motion.div>
            )}

            {/* Texto e botão sobrepostos */}
            <div className="relative z-10 flex flex-col justify-end items-center text-white h-full pb-5 px-4">
              <div className='mb-4 w-[280px]'>
                <Image
                  src={currentTech.icon} // Elementos animados que mudam conforme o produto
                  alt=""
                  objectFit="contain"
                  width={250}
                  height={200}
                  className="w-full h-full"
                  quality={100}
                />
              </div>
              <p className="font-normal text-[22px] lg:text-[30px] leading-[24px] sm:leading-[32px] lg:leading-[40px] text-center mb-4">
                {currentTech.description}
              </p>
              <p className="text-center text-gray-200 text-[18px] leading-[22px] sm:leading-[28px] lg:leading-[32px] mb-4 max-w-[700px]">
                {currentTech.additionalText}
              </p>
              <button className="px-4 py-2 w-[150px] sm:w-[200px] lg:w-[250px] h-[40px] sm:h-[48px] lg:h-[60px] text-white border-2 border-white rounded-[40px] bg-transparent hover:bg-white hover:text-black transition-colors duration-300 mb-4 hidden">
                Saiba mais
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Technologies;
