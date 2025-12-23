import * as React from "react";

const GlobalSales: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    fill="none"
    viewBox="0 0 28 28"
  >
    <rect
      width="28"
      height="28"
      fill="#2E54FF"
      fillOpacity="0.19"
      rx="14"
    ></rect>
    <g clipPath="url(#clip0_19_352)">
      <path
        stroke="#2E54FF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M21.5 14a7.5 7.5 0 0 1-7.5 7.5m7.5-7.5A7.5 7.5 0 0 0 14 6.5m7.5 7.5h-15m7.5 7.5A7.5 7.5 0 0 1 6.5 14m7.5 7.5a10.875 10.875 0 0 1 0-15m0 15a10.875 10.875 0 0 0 0-15M6.5 14A7.5 7.5 0 0 1 14 6.5"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_19_352">
        <path fill="#fff" d="M5 5h18v18H5z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default GlobalSales;