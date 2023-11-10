import ClienContainer from "~/containers/clientContainer/clientContainer";
import UtilityList from "~/containers/homeContainer/homeContainer";
import HomePrincipalContainer from "~/containers/homeContainer/homePrincipalContainer";
import PlateformContainer from "~/containers/plateformContainer/platerformContainer";
export default function Home() {
  return (
    <main>
      <HomePrincipalContainer />
      <UtilityList />
      <PlateformContainer />
      <ClienContainer />
    </main>
  );
}
