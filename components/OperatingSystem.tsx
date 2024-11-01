import Image from 'next/image';
import { motion } from 'framer-motion';

const OperatingSystem = () => {
  return (
    <motion.section
      className="bg-black py-12 sm:py-[80px] overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-[40px] text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Sistema Operacional
      </motion.h2>

      <div className="max-w-[1250px] mx-auto flex flex-col gap-8 sm:gap-8 lg:flex-row lg:justify-between items-center mt-8">
        {/* Cartão VIDAA */}
        <motion.div
          className="flex flex-col items-center w-full lg:w-[48%] p-6 text-center"
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-[250px] sm:w-[307px] h-[80px] sm:h-[100px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Image
              src="/icon-vidaa.png"
              alt="VIDAA Logo"
              width={307}
              height={100}
              className="rounded-[20px] sm:rounded-[40px]"
            />
          </motion.div>

          <motion.p
            className="text-white text-sm sm:text-base px-14 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            O sistema operacional VIDAA TV oferece aos usuários acesso a mais de 200 aplicativos globais e locais e continua expandindo sua biblioteca de conteúdo.
          </motion.p>

          <motion.button
            className="mt-4 px-4 sm:px-6 py-2 text-white border-2 border-white rounded-full text-sm sm:text-base transition-opacity duration-300 hover:opacity-100 hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            Saiba mais
          </motion.button>
        </motion.div>

        {/* Cartão Google TV */}
        <motion.div
          className="flex flex-col items-center w-full lg:w-[48%] p-6 text-center"
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-[250px] sm:w-[307px] h-[80px] sm:h-[100px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Image
              src="/icon-googleTV.png"
              alt="Google TV Logo"
              width={307}
              height={100}
              className="rounded-[20px] sm:rounded-[40px]"
            />
          </motion.div>

          <motion.p
            className="text-white text-sm sm:text-base px-14 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >Acesse mais de 400.000 filmes e séries, escute música, aproveite seus jogos, espelhe seus dispositivos, adicione os aplicativos que você mais ama.
          </motion.p>

          <motion.button
            className="mt-4 px-4 sm:px-6 py-2 text-white border-2 border-white rounded-full text-sm sm:text-base transition-opacity duration-300 hover:opacity-100 hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            Saiba mais
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OperatingSystem;
