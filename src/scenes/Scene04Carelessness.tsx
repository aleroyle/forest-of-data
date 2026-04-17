import Scene from "../components/Scene";
import Narrative from "../components/Narrative";
import Label from "../components/Label";

export default function Scene04Carelessness() {
  return (
    <Scene
      image="/forest-of-data/images/scene-04.jpg"
      alt="A wobbly tower built on cracked roots in a darkening forest"
      id="scene-4"
    >
      {/* Cracked ground centre — missing documentation */}
      <Label text="missing data product docs" top="82%" left="40%" delay={0.5} />
      {/* Wobbly tower — no one checking quality */}
      <Label text="unchecked data quality" top="10%" left="15%" delay={0.7} />
      {/* Raccoon head — bottom-right */}
      <Label text="slow discovery" top="72%" left="62%" delay={0.9} />

      <Narrative position="top-right" splash="amber" delay={0.3}>
        But not all roots were well tended. Some data owners let governance slip — metadata missing, quality unchecked. And when builders came looking, the search took so long they stopped checking altogether.
      </Narrative>
    </Scene>
  );
}
