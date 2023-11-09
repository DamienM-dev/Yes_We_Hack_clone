import { useRef, useState } from "react";
import Image from "next/image";
import Button from "~/components/Button";
import BugBounty from "~/components/plateformes/BugBounty";
import UsePlateform from "~/hooks/usePlateform";
import useSlider from "~/hooks/useSlider";

import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const title_principal = "UNE PLATEFORME DE GESTION DES VULNÉRABILITÉS COMPLÈTE";
const subtitle_back =
  "NOUS PROTÉGEONS Des organisations de toutes tailles et de tous secteurs";
const chevron_down = "/icones/chevron-bas.png";
const alt = "Chevron ouvrir menu";

export default function PlateformContainer() {
  const { plateforms, error } = UsePlateform();
  const [idBlock, setIdblock] = useState(1);
  const [isModalOpen, setModalOpen] = useState(false);
  const [switchName, setSwitchName] = useState("Bug Bounty");

  const { sliders } = useSlider();

  const ref = useRef();

  if (error) {
    return <div>Erreur : {error.message}</div>;
  }

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <article className="containerPlateform">
      <div className="containerSubPlateform">
        <h2 className="titlePrincipalPlateforme">{title_principal}</h2>
        <div className="containerTopPlateform">
          <div className="containerList" onClick={handleOpenModal}>
            <span className="listPlateform">{switchName}</span>
            <span className="chevronDownPlateform">
              <Image src={chevron_down} alt={alt} height={20} width={20} />
            </span>

            {isModalOpen && (
              <div className="customModal" onClick={(e) => e.stopPropagation()}>
                <div className="modalContent">
                  {plateforms.map((plateform) => (
                    <div
                      key={plateform.id}
                      onClick={() => {
                        setIdblock(plateform.id);
                        setSwitchName(plateform.list);
                        handleCloseModal();
                      }}
                    >
                      <p>{plateform.list}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* --------- FOR TABLET AND UNDER -------- */}
          <div>
            <div className="containerUnderTablet">
              {plateforms.map((plateform) => (
                <div
                  key={plateform.id}
                  onClick={() => {
                    setIdblock(plateform.id);
                    setSwitchName(plateform.list);
                    handleCloseModal();
                  }}
                  style={{
                    background: idBlock === plateform.id ? "red" : null,
                    borderRadius: idBlock === plateform.id ? "10px" : null,
                  }}
                  className="containerTitleUnderTablet"
                >
                  <p>
                    <span>{plateform.list}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* --------------------- */}

          {plateforms
            .filter((plateform) => plateform.id === idBlock)
            .map((plateform) => (
              <li key={plateform.id}>
                <BugBounty
                  title={plateform.title}
                  alt={plateform.alt}
                  img={plateform.img}
                  paragraph={plateform.paragraph}
                />
              </li>
            ))}
        </div>
        <div className="containerButton containerButtonPlateform">
          <Button title="Reservez une démo" href="/contact" variant="primary" />
          <Button
            title="plus d'infos"
            href="/product/bug-bounty-programme"
            variant="secondary"
          />
        </div>
      </div>
      <div className="containerSubtitleBack">
        <h2 className="subtitleBackPlateform">{subtitle_back}</h2>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={2}
          breakpoints={{
            591: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            975: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            1621: {
              slidesPerView: 8,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {sliders.map((slider) => (
            <SwiperSlide key={slider.id}>
              <div className="containerImagesSlider">
                <Image
                  src={slider.img}
                  alt={slider.alt}
                  width={112}
                  height={64}
                  layout="responsive"
                  objectFit="contain"
                  className="imagesSliderPlateforme"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </article>
  );
}
