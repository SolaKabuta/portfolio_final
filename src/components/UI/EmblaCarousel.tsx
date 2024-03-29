import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";


import Figma from "../../assets/icons/tech/Figma.svg";
import React from "../../assets/icons/tech/React icon.svg";
import TS from "../../assets/icons/tech/TypeScript icon.svg";
import JS from "../../assets/icons/tech/JavaScript icon.svg";
import XD from "../../assets/icons/tech/Adobe XD icons.svg";
import WB from "../../assets/icons/tech/WebStorm icons.svg";
import TW from "../../assets/icons/tech/Tailwind CSS icon.svg";
import SC from "../../assets/icons/tech/Sass.svg";

const EmblaCarousel = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
    return (
        <>
          <div>
              {/*EMBLA CAROUSEL*/}
              <div>
                  <div
                      className={"embla pt-56"} ref={emblaRef}>
                      <div
                          className="embla__container">
                          <div className="embla__slide"><img src={React} alt=""/></div>
                          <div className="embla__slide"><img src={TW} alt=""/></div>
                          <div className="embla__slide"><img src={TS} alt=""/></div>
                          <div className="embla__slide"><img src={JS} alt=""/></div>
                          <div className="embla__slide"><img src={SC} alt=""/></div>
                          <div className="embla__slide"><img src={WB} alt=""/></div>
                          <div className="embla__slide"><img src={Figma} alt=""/></div>
                          <div className="embla__slide"><img src={XD} alt=""/></div>
                      </div>
                  </div>
              </div>
          </div>
        </>
    );
};

export default EmblaCarousel;