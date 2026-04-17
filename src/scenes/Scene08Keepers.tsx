import Scene from "../components/Scene";
import Narrative from "../components/Narrative";

export default function Scene08Keepers() {
  return (
    <Scene
      image="/forest-of-data/images/scene-08.jpg"
      alt="Dawn breaking as determined animals restore the forest together"
      id="scene-8"
    >
      <Narrative position="top-centre" splash="gold" delay={0.3} wide>
        The forest keepers got to work. They provided tools &amp; platform for teams to ingest data with EAT (Evergreen Analytics Transport), managed environments to transform it, and frameworks to classify columns, enforce access, and publish trusted data products — with rich documentation and controls built in.
      </Narrative>
    </Scene>
  );
}
