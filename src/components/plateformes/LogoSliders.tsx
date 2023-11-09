import Image from "next/image";

type SliderProps = {
  img: string;
  alt: string;
};

function HomePincipal({ img, alt }: SliderProps) {
  return (
    <section>
      <div>
        <Image src={img} alt={alt} />
      </div>
    </section>
  );
}

export default HomePincipal;
