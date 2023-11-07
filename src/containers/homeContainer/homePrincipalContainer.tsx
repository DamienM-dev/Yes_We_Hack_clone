import HomePincipal from "~/components/HomePincipalComponent";
import useHome from "~/hooks/apiComponent/useHome";

function HomePrincipalContainer() {
  const { homeComponents, error } = useHome();

  if (error) {
    return <div>Erreur : {error.message}</div>;
  }

  return (
    <article className="containerPrincipalHome">
      {homeComponents.map((component) => (
        <HomePincipal
          key={component.id}
          img={component.img}
          alt={component.alt}
          title={component.title}
          paragraph={component.paragraph}
        />
      ))}
    </article>
  );
}

export default HomePrincipalContainer;
