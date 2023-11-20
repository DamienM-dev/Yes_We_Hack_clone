import Button from "./Button";

const TITLE = "N'ATTENDEZ PAS LA PROCHAINE ATTAQUE POUR RÉAGIR";
const SUBTITILE = "ADOPTEZ DÈS MAINTENANT UNE POSTURE DE SÉCURITÉ PROACTIVE";
const PARAGRAPHE =
  "Bénéficiez de la puissance de notre communauté d’experts pour améliorer la découverte et la correction des vulnérabilités.";

const TITLE_BUTTON = "contactez nos experts";
const HREF_BUTTON = "/contact";

function WarningComponent() {
  return (
    <div className="containerWarningComponent">
      <div className="containerSecondaryWarning">
        <h2>{TITLE}</h2>
        <p className="subtitleWarning">{SUBTITILE}</p>
        <p className="paragrapheWarning">{PARAGRAPHE}</p>
        <Button title={TITLE_BUTTON} href={HREF_BUTTON} variant="primary" />
      </div>
    </div>
  );
}

export default WarningComponent;
