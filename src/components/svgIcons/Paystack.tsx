import * as React from "react";

const Paystack: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    fill="none"
    viewBox="0 0 60 60"
  >
    <g clipPath="url(#clip0_22_325)">
      <mask
        id="mask0_22_325"
        width="40"
        height="40"
        x="10"
        y="10"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "luminance" }}
      >
        <path fill="#fff" d="M10 10h40v39.346H10z"></path>
      </mask>
      <g mask="url(#mask0_22_325)">
        <path
          fill="#0BA4DB"
          d="M45.844 10H12.078A2.086 2.086 0 0 0 10 12.082v3.747c0 1.145.935 2.082 2.078 2.082H45.74a2.086 2.086 0 0 0 2.078-2.082v-3.747c.104-1.145-.831-2.082-1.974-2.082m0 20.922H12.078A2.086 2.086 0 0 0 10 33.004v3.747c0 1.145.935 2.082 2.078 2.082H45.74a2.086 2.086 0 0 0 2.078-2.082v-3.747c.104-1.145-.831-2.082-1.974-2.082M31.091 41.435H12.078A2.086 2.086 0 0 0 10 43.518v3.748c0 1.145.935 2.081 2.078 2.081H31.09a2.086 2.086 0 0 0 2.078-2.081v-3.748a2.086 2.086 0 0 0-2.078-2.082m16.831-20.922H12.078A2.086 2.086 0 0 0 10 22.595v3.747c0 1.145.935 2.082 2.078 2.082h35.844A2.086 2.086 0 0 0 50 26.342v-3.747a2.086 2.086 0 0 0-2.078-2.082"
        ></path>
      </g>
    </g>
    <defs>
      <clipPath id="clip0_22_325">
        <path fill="#fff" d="M10 10h40v39.346H10z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default Paystack;