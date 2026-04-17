import Scene from "../components/Scene";
import Narrative from "../components/Narrative";

export default function Scene08bMarketplace() {
  return (
    <Scene
      image="/forest-of-data/images/scene-08b.jpg"
      alt="A bright forest marketplace where animals browse maps, charts, and scrolls"
      id="scene-8b"
    >
      <Narrative position="top-centre" splash="gold" delay={0.3} wide>
        Then they invited data modellers to craft a semantic layer in Looker — a marketplace for insights. Alongside DataHub as a catalogue with rich data product documentation, builders could finally discover the data they needed without asking around.
      </Narrative>
    </Scene>
  );
}
