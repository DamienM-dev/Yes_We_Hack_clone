import Button from "~/components/Button";
import useActuality from "~/hooks/useActuality";
import Actuality from "~/components/Actuality";
import { useState } from "react";
import Image from "next/image";

function ActualityContainer() {
  const { actuality, error } = useActuality();

  const TITLE_ACTUALITY = "Dernières actualités";
  const TITLE_BUTTON = "lisez notre blog";
  const HREF_BUTTON = "https://www.yeswehack.com/fr/blog/";
  const LEFT_ARROW = "/icones/left-black.png";
  const RIGHT_ARROW = "/icones/droite-black.png";
  const ALT_RIGHT = "fléche de droite";
  const ALT_LEFT = "fléche de gauche";

  const [carouselIndex, setCarouselIndex] = useState(0);

  if (error) {
    return <div>Erreur: {error.message}</div>;
  }

  const handleCarouselChange = (direction: string) => {
    if (direction === "next") {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % actuality.length);
    } else {
      setCarouselIndex((prevIndex) => {
        if (prevIndex === 0) return actuality.length - 1;
        return prevIndex - 1;
      });
    }
  };

  return (
    <article className="containerPlateform containerActuality">
      <div className="containerComponantActuality">
        <div>
          <div>
            <h2 className="titleActuality">{TITLE_ACTUALITY}</h2>
            <Button title={TITLE_BUTTON} href={HREF_BUTTON} variant="primary" />
          </div>
          {actuality.map(
            (actualitie, index) =>
              index === carouselIndex && (
                <Actuality
                  key={actualitie.id}
                  img={actualitie.img}
                  alt={actualitie.alt}
                  link={actualitie.link}
                  paragraph={actualitie.paragraph}
                />
              )
          )}
        </div>
        <div className="containerArrowSlider">
          <div
            onClick={() => handleCarouselChange("next")}
            className="arrowSlider"
          >
            <Image src={LEFT_ARROW} alt={ALT_LEFT} width={32} height={32} />
          </div>
          <div
            onClick={() => handleCarouselChange("prev")}
            className="arrowSlider"
          >
            <Image src={RIGHT_ARROW} alt={ALT_RIGHT} width={32} height={32} />
          </div>
        </div>
      </div>

      {/* ----------- SCREEN 1000 PX ----------- */}

      <div className="containerComponantActualityTablet">
        <div className="containerActualityFlexMain">
          <div className="blockButtonTitleActuality">
            <h2 className="titleActuality">{TITLE_ACTUALITY}</h2>
            <Button title={TITLE_BUTTON} href={HREF_BUTTON} variant="primary" />
          </div>
          <div className="cointainerCardActualityFlex">
            {actuality.map((actualitie) => (
              <Actuality
                key={actualitie.id}
                img={actualitie.img}
                alt={actualitie.alt}
                link={actualitie.link}
                paragraph={actualitie.paragraph}
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ActualityContainer;
