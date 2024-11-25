import * as React from "react";
import inspirations from "./inspirations";
import FancyText from "./FancyText";
import Color from "./Color";
import { useState } from "react";

export default function InspirationGenerator({ children }) {
  const [index, setIndex] = useState(0);
  const inspiration = inspirations[index];
  const next = () => setIndex((index + 1) % inspirations.length);

  return (
    <>
      <p>{inspiration.type}, що тебе надихає:</p>
      {inspiration.type === "quote" ? (
        <FancyText text={inspiration.value} />
      ) : (
        <Color value={inspiration.value} />
      )}

      <button onClick={next}>Надихнутися знову</button>
      {children}
    </>
  );
}
