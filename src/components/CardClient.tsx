import Image from "next/image";
import Link from "next/link";

type CardClientProps = {
  img: string;
  alt: string;
  paragraph: string;
  who: string;
  link: string;
};

const LINK = "Read More";
const ARROW = "/icones/arrow-right.png";
const ALT_ARROW = "fleche de droite";

function CardClient({ img, alt, paragraph, who, link }: CardClientProps) {
  return (
    <div className="containerCardClient">
      <div className="subContainerCardClient">
        <figure>
          <Image
            src={img}
            alt={alt}
            height={70}
            width={120}
            object-fit="contain"
            className="imageCardClient"
          />
        </figure>
        <p className="paragraphCardClient">{paragraph}</p>
        <div className="whoCardClient">{who}</div>
        <div className="linkCard">
          {link ? (
            <>
              <Link href={link}>{LINK}</Link>
              <Image
                src={ARROW}
                alt={ALT_ARROW}
                height={24}
                width={24}
                object-fit="contain"
              />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default CardClient;
