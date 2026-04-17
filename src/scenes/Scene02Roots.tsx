import Scene from "../components/Scene";
import Narrative from "../components/Narrative";
import Label from "../components/Label";

export default function Scene02Roots() {
  return (
    <Scene
      image="/forest-of-data/images/scene-02.jpg"
      alt="Cross-section of a forest showing interconnected roots underground"
      id="scene-2"
    >
      {/* Root network — centre, shifted right to overlay dense roots */}
      <Label text="data pipelines (EAT — Evergreen Analytics Transport)" top="58%" left="20%" delay={0.5} />
      {/* River — right side of image where water is visible */}
      <Label text="governed data" top="38%" left="48%" delay={0.7} />
      {/* Rocky/slate layer at the very bottom */}
      <Label text="data platform" top="88%" left="5%" delay={0.9} />
      {/* Near the tree trunks — discoverable, catalogued */}
      <Label text="DataHub catalogue" top="28%" left="3%" delay={1.1} />

      <Narrative position="right" splash="green" delay={0.3}>
        Beneath the forest floor, roots connect every tree. Pipelines carry governed data from source to warehouse, catalogued and discoverable through DataHub.
      </Narrative>
    </Scene>
  );
}
