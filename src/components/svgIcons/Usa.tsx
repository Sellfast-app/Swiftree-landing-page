import * as React from "react";

const Usa: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="12" fill="url(#pattern0_89_5027)"></circle>
    <defs>
      <pattern
        id="pattern0_89_5027"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use
          xlinkHref="#image0_89_5027"
          transform="matrix(.00833 0 0 .00833 -.167 0)"
        ></use>
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="image0_89_5027"
        width="160"
        height="120"
        preserveAspectRatio="none"
      ></image>
    </defs>
  </svg>
);

export default Usa;