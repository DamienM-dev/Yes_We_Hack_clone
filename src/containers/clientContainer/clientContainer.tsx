import Image from "next/image";
import { useState } from "react";
import Button from "~/components/Button";
import CardClient from "~/components/CardClient";
import useClient from "~/hooks/useClients";

function ClienContainer() {
  const TITLE_BUTTON = "Plus d'études de cas de clients";
  const HREF_BUTTON = "/blog/customer-stories";
  const TITLE_PAGE = "DES CLIENTS QUI NOUS FONT CONFIANCE DANS LE MONDE ENTIER";
  const LEFT_ARROW = "/icones/left-black.png";
  const RIGHT_ARROW = "/icones/droite-black.png";
  const ALT_RIGHT = "fléche de droite";
  const ALT_LEFT = "fléche de gauche";

  const { clients, errors } = useClient();

  const [carouselIndex, setCarouselIndex] = useState(0);

  if (errors) {
    return <div>Erreur: {errors.message}</div>;
  }

  const handleCarouselChange = (direction: string) => {
    if (direction === "next") {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % clients.length);
    } else {
      setCarouselIndex((prevIndex) => {
        if (prevIndex === 0) return clients.length - 1;
        return prevIndex - 1;
      });
    }
  };

  return (
    <article className="containerPrincipalClient">
      <div className="containerSubClient">
        <div className="containerTtitleClient">
          <h2>{TITLE_PAGE}</h2>
          <Button title={TITLE_BUTTON} href={HREF_BUTTON} variant="secondary" />
        </div>
        <div className="containerMainCardsClient">
          <div className="containerCardsClient containerCardsClientMobile">
            {clients.map(
              (client, index) =>
                index === carouselIndex && (
                  <CardClient
                    key={client.id}
                    img={client.img}
                    alt={client.alt}
                    paragraph={client.paragraph}
                    who={client.who}
                    link={client.link}
                  />
                )
            )}
          </div>

          <div className="containerCardsClient containerCardsClientTablet">
            {clients.map((client) => (
              <CardClient
                key={client.id}
                img={client.img}
                alt={client.alt}
                paragraph={client.paragraph}
                who={client.who}
                link={client.link}
              />
            ))}
          </div>
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
    </article>
  );
}

export default ClienContainer;
