import React from "react";

// Section title and optional intro, revealed together as one unit.
function SectionHeading({ title, intro, className = "", titleClassName = "", introClassName = "" }) {
  return (
    <div data-reveal className={className}>
      <h2 className={`h2 ${titleClassName}`}>{title}</h2>
      {intro && <p className={`lead mt-4 ${introClassName}`}>{intro}</p>}
    </div>
  );
}

export default SectionHeading;
