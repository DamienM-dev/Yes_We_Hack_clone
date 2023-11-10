import Button from "~/components/Button";
import CardClient from "~/components/CardClient";
import useClient from "~/hooks/useClients";

function ClienContainer() {
  const TITLE_BUTTON = "Plus d'études de cas de clients";
  const HREF_BUTTON = "/blog/customer-stories";
  const TITLE_PAGE = "DES CLIENTS QUI NOUS FONT CONFIANCE DANS LE MONDE ENTIER";

  const { clients, errors } = useClient();

  if (errors) {
    return <div>Erreur: {errors.message}</div>;
  }

  return (
    <article>
      <div>
        <div>
          <h2>{TITLE_PAGE}</h2>
          <Button title={TITLE_BUTTON} href={HREF_BUTTON} />
        </div>
        {clients.map((client) => (
          <CardClient
            key={client.id}
            img={client.img}
            alt={client.alt}
            paragraph={client.paragraph}
            who={client.who}
            link={client.link}
          />
        ))}
      </div>
    </article>
  );
}

export default ClienContainer;
