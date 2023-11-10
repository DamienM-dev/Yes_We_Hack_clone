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
    <div>
      <div>
        <figure>
          <Image src={img} alt={alt} height={70} width={120} />
        </figure>
        <p>{paragraph}</p>
        <span>{who}</span>
      </div>
      <div>
        <div>
          {link ? <Link href={link}>{LINK}</Link> : null}

          <Image src={ARROW} alt={ALT_ARROW} height={24} width={24} />
        </div>
      </div>
    </div>
  );
}
export default CardClient;
