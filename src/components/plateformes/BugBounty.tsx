import Image from "next/image";

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
        </div>
      </div>
    </article>
  );
}
