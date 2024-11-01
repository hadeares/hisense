import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface VideoContainerProps {
  videoSrc: string;
}

const VideoContainer: React.FC<VideoContainerProps> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      gsap.to(videoElement, {
        yPercent: -20,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: videoElement,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={videoRef} className="video-container">
      <video src={videoSrc} autoPlay loop muted className="background-video" />

      <div className="content">
       
      </div>

      <style jsx>{`
        .video-container {
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        
        .video-container::before {
          content: "";
          display: block;
          padding-top: 56.25%; 
        }

        .background-video,
        .content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .background-video {
          object-fit: cover;
          object-position: center;
        }

        .content {
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          text-align: center;
          padding: 20px;
          box-sizing: border-box;
        }

        /* Ajustes para telas menores */
        @media (max-width: 768px) {
          .video-container::before {
            padding-top: 75%; 
          }
        }
      `}</style>
    </div>
  );
};

export default VideoContainer;
