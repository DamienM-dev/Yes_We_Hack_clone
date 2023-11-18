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
      <div className="flexPlateform">
        <div className="MaxWidtContainerPlateform">
          <div className="containerImagesPlateformProduct">
            <Image
              src={img}
              alt={alt}
              height={500}
              width={500}
              loading="eager"
              className="imagesPlateformProduct"
            />
          </div>
          <div className="ContainerTitleParagraphe">
            <h2 className="titlesPlateformProduct">{title}</h2>
            <p className="paragraphsPlateformProduct">{paragraph}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
