import FancyText from "./FancyText";
import InspirationGenerator from "./InspirationGenerator";
import Copyright from "./Copyright";

export default function Render() {
  return (
    <>
      <FancyText title text="Застосунок 'Натхнення'" />
      <InspirationGenerator>
        <Copyright year={2024} />
      </InspirationGenerator>
    </>
  );
}
