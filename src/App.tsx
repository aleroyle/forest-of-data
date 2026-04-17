import ScrollProgress from "./components/ScrollProgress";
import Scene01Forest from "./scenes/Scene01Forest";
import Scene02Roots from "./scenes/Scene02Roots";
import Scene03Building from "./scenes/Scene03Building";
import Scene04Carelessness from "./scenes/Scene04Carelessness";
import Scene05Strangers from "./scenes/Scene05Strangers";
import Scene06Collapse from "./scenes/Scene06Collapse";
import Scene07Flood from "./scenes/Scene07Flood";
import Scene08Keepers from "./scenes/Scene08Keepers";
import Scene08bMarketplace from "./scenes/Scene08bMarketplace";
import Scene09Ready from "./scenes/Scene09Ready";
import Scene10Invitation from "./scenes/Scene10Invitation";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.container}>
      <ScrollProgress />
      <Scene01Forest />
      <Scene02Roots />
      <Scene03Building />
      <Scene04Carelessness />
      <Scene05Strangers />
      <Scene06Collapse />
      <Scene07Flood />
      <Scene08Keepers />
      <Scene08bMarketplace />
      <Scene09Ready />
      <Scene10Invitation />
    </div>
  );
}
