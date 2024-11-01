import { motion } from 'framer-motion';
import Image from 'next/image';
import { MdMailOutline } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

const ContactSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={sectionVariants}
      className="max-w-[1920px] mx-auto px-5 py-16 bg-white"
    >
      <div className="max-w-[1250px] mx-auto">
        <div className="flex justify-center mb-5 relative">
          <Image
            quality={100}
            className="object-cover h-auto w-auto hidden md:flex"
            src={'/home/talk-to-us.png'}
            alt="Seção de fale conosco"
            width={1588}
            height={477}
          />
          <div className="md:absolute top-0 left-[23%] lg:top-[15%] lg:left-[30%] text-white bg-hisense md:bg-transparent p-8 rounded-[2rem] w-full mx-auto">
            <h4 className="font-bold text-4xl lg:text-5xl text-center md:text-start">Fale conosco</h4>
            <p className="mt-5 opacity-85 mb-2">Canais de atendimento:</p>
            <div className="flex gap-x-5 gap-y-2 tracking-wide flex-wrap">
              <div className="flex items-center gap-2">
                <MdMailOutline className="text-white mt-[-2px]" />
                <span>sac@hisense.com</span>
              </div>
              <div className="flex items-center gap-2 border-x-[1px] px-5">
                <FaPhoneAlt className="text-white mt-[-2px]" />
                <span>0800 000 1454</span>
              </div>
              <div className="flex items-center gap-2">
                <IoLogoWhatsapp className="text-white mt-[-2px] text-xl" />
                <span>11 98990-8945</span>
              </div>
            </div>
            <p className="mt-7 lg:mt-5 opacity-85 mb-2">Horário de atendimento:</p>
            <div className="flex gap-5 tracking-wide">
              <span>Segunda a Sexta das 8h00 às 20h00</span>
              <span className="border-s-[1px] ps-5">Sábados das 8h00 às 14h00</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
