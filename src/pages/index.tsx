import ActualityContainer from "~/containers/actualityContainer/actualityContainer";
import ClienContainer from "~/containers/clientContainer/clientContainer";
import UtilityList from "~/containers/homeContainer/homeContainer";
import HomePrincipalContainer from "~/containers/homeContainer/homePrincipalContainer";
import PlateformContainer from "~/containers/plateformContainer/platerformContainer";
import WarningContainer from "~/containers/warningContainer/warningConainer";
export default function Home() {
  return (
    <main>
      <HomePrincipalContainer />
      <UtilityList />
      <PlateformContainer />
      <ClienContainer />
      <ActualityContainer />
      <WarningContainer />
    </main>
  );
}
