import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrando o plugin do ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ParallaxContainer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLImageElement>(null);
  const layer2Ref = useRef<HTMLImageElement>(null);
  const layer3Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const containerElement = containerRef.current;
    const layer1Element = layer1Ref.current;
    const layer2Element = layer2Ref.current;
    const layer3Element = layer3Ref.current;

    // Efeito Parallax no LAYER1
    gsap.to(layer1Element, {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: containerElement,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Animação de fade-in para LAYER2 e LAYER3
    gsap.fromTo(
      [layer2Element, layer3Element],
      { opacity: 0 },
      {
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerElement,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: "200vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        ref={layer1Ref}
        src="/U6N/LAYER1.jpg"
        alt="Layer 1"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      />
      <img
        ref={layer2Ref}
        src="/U6N/LAYER2.png"
        alt="Layer 2"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 2,
        }}
      />
      <img
        ref={layer3Ref}
        src="/U6N/LAYER3.png"
        alt="Layer 3"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 3,
        }}
      />
    </div>
  );
};

export default ParallaxContainer;
