import { useState } from "react";
import Button from "~/components/Button";
import BugBounty from "~/components/plateformes/BugBounty";
import UsePlateform from "~/hooks/usePlateform";
import Modal from "@mui/material/Modal";
import { string } from "zod";

const title_principal = "UNE PLATEFORME DE GESTION DES VULNÉRABILITÉS COMPLÈTE";
const subtitle_back =
  "NOUS PROTÉGEONS Des organisations de toutes tailles et de tous secteurs";

type IdChoice = {
  idBlock: number;
};

export default function PlateformContainer() {
  const { plateforms, error } = UsePlateform();
  const [idBlock, setIdblock] = useState<IdChoice>({ idBlock: 1 });
  const [isModalOpen, setModalOpen] = useState(false);
  const [switchName, setSwitchName] = useState<string>("Bug Bounty");

  if (error) {
    return <div>Erreur : {error.message}</div>;
  }

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <article className="containerPlateform">
      <div>
        <h2>{title_principal}</h2>
        <div>
          <span className="listPlateform" onClick={handleOpenModal}>
            {switchName}
          </span>

          <Modal open={isModalOpen} onClose={handleCloseModal}>
            <div>
              {plateforms.map((plateform) => (
                <div
                  key={plateform.id}
                  onClick={() => {
                    setIdblock({ idBlock: plateform.id });
                    setSwitchName(plateform.list);
                    handleCloseModal();
                  }}
                >
                  {plateform.list}
                </div>
              ))}
            </div>
          </Modal>

          {plateforms
            .filter((plateform) => plateform.id === idBlock.idBlock)
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
        <div className="containerButton">
          <Button title="contact" href="/contact" variant="primary" />
          <Button title="s'inscrire" href="/register" variant="secondary" />
        </div>
        <h2>{subtitle_back}</h2>
      </div>
    </article>
  );
}
