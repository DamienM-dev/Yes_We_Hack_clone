import Image from "next/image";

interface SecurityProps {
  img: string;
  alt: string;
  title: string;
  subtitle: string;
  paragraph: string;
}

function Security({ img, alt, title, subtitle, paragraph }: SecurityProps) {
  return (
    <section>
      <div className="containerUtilities">
        <div className="blocksUtilities">
          <div className="logoUtilities">
            <Image src={img} alt={alt} height={56} width={56} />
          </div>

          <div className="titles">
            <div className="firstTitle">{title}</div>
            <div className="secondTitle">{subtitle}</div>
          </div>
        </div>
        <div>
          <p className="paragrahUtilities">{paragraph}</p>
        </div>
      </div>
    </section>
  );
}

export default Security;
