import Security from "~/components/SecurityComponent";
import useApi from "~/hooks/apiComponent/useApi";

function UtilityList() {
  const { securities, error } = useApi();

  if (error) {
    return <div>Erreur : {error.message}</div>;
  }

  return (
    <article className="containerPrincipalUtilities">
      {securities.map((security) => (
        <Security
          key={security.id}
          img={security.img}
          alt={security.alt}
          title={security.title}
          subtitle={security.subtitle}
          paragraph={security.paragraph}
        />
      ))}
    </article>
  );
}

export default UtilityList;
