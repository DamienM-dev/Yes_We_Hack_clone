import BugBounty from "~/components/plateformes/BugBounty";

const title_principal = "UNE PLATEFORME DE GESTION DES VULNÉRABILITÉS COMPLÈTE";

//--------- BUG BOUNTY --------

const title_BugBounty = "UNLEASH THE POWER OF OUR HUNTERS";
const paragraphe_BugBounty =
  "Appuyez-vous sur les compétences de dizaines de milliers de hackers éthiques vérifiés – des experts dans la détection de vulnérabilités dans les environnements les plus variés. Profitez d’un modèle crowdsourcé et payez au résultat, au lieu du temps passé. Alignez votre stratégie de tests sur vos exigences sécuritaires, informatiques et métiers.";
const href_BugBounty = "/images/bugBounty.webp";
const alt_bugBounty = "Un graphique de bug";

export default function plateformContainer() {
  return (
    <article>
      <div>
        <h2>{title_principal}</h2>
        <div>
          <BugBounty
            title={title_BugBounty}
            alt={alt_bugBounty}
            img={href_BugBounty}
            paragraph={paragraphe_BugBounty}
          />
        </div>
      </div>
    </article>
  );
}
