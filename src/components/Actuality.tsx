import Image from "next/image";
import Link from "next/link";

const LINK = "Read More";
const IMG_ARROW = "/icones/arrow-right.png";
const ALT_ARROW = "fleche droite";

type ActualityComponent = {
  img: string;
  alt: string;
  link: string;
  paragraph: string;
};

function actuality({ img, alt, link, paragraph }: ActualityComponent) {
  return (
    <div className="containerCardActuality">
      <figure>
        <Image
          src={img}
          alt={alt}
          objectFit="cover"
          layout="responsive"
          width={390}
          height={237}
        />
      </figure>
      <div className="containerBotomCardActuality">
        <div>
          <p className="paragraphActuality">{paragraph}</p>
        </div>
        <div className="linkCard">
          <Link href={link}>{LINK}</Link>
          <Image
            src={IMG_ARROW}
            alt={ALT_ARROW}
            objectFit="cover"
            layout="responsive"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
}

export default actuality;
