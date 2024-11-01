import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

// Registrando o plugin do ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const LuzRevo = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    // Efeito parallax aplicado à largura e altura da seção
    gsap.to(section, {
      yPercent: -20, // Move a seção verticalmente para criar o efeito de parallax
      scaleX: 0.8,   // Reduz a largura para 80%
      scaleY: 0.9,   // Reduz a altura para 90%
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom", // Inicia quando a seção entra na viewport
        end: "bottom top",   // Termina quando a seção sai da viewport
        scrub: true,         // Sincroniza a animação com a rolagem
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="mx-auto px-3 py-20 bg-dark">
      <div className="max-w-[1250px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 1 },
          }}
          className="flex flex-col md:flex-row gap-2"
        >
          <div className="flex-1">
            <h4 className="text-white lg:text-5xl text-[26px] pb-3 font-bold tracking-tight leading-10">
              Iluminação em MiniLED
            </h4>
          </div>
          <div className="flex-1 md:px-2">
            <p className="text-md text-gray-300">
              A Hisense sempre esteve na vanguarda do entretenimento,
              impulsionando avanços na tecnologia LED para aprimorar todos os
              aspectos da experiência de visualização. A nova linha de TVs
              Hisense Mini LED-ULED representa o próximo passo à frente com a
              inovação da retroiluminação Mini LED. Com processador Hi-View
              Engine e Quantum Dot Colour, estamos abrindo caminho para a melhor
              qualidade de imagem, criando um mundo de entretenimento mais
              brilhante, envolvente e mais cativante do que nunca.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LuzRevo;
