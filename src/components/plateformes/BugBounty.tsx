import Image from "next/image";
import Button from "../Button";

type BugBountyProps = {
  title: string;
  paragraph: string;
  img: string;
  alt: string;
};

export default function BugBounty({
  title,
  paragraph,
  img,
  alt,
}: BugBountyProps) {
  return (
    <article>
      <div>
        <div>
          <Image src={img} alt={alt} height={500} width={500} />
          <h2>{title}</h2>
          <p>{paragraph}</p>
          <div>
            <Button
              title="Reservez une démo"
              href="/contact"
              variant="primary"
            />
          </div>
          <div>
            <Button
              title="plus d'infos"
              href="/product/bug-bounty-programme"
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
