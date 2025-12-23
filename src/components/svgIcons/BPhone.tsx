import * as React from "react";

const BPhone: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    fill="none"
    viewBox="0 0 60 60"
  >
    <rect width="60" height="60" fill="#5BA3F8" rx="30"></rect>
    <path
      fill="#fff"
      d="M32.292 19.965c.584 0 1.08-.354 1.306-.853.139-.304.419-.582.742-.496a3.45 3.45 0 0 1 2.56 3.334v16.1a3.45 3.45 0 0 1-3.45 3.45h-6.9a3.45 3.45 0 0 1-3.45-3.45v-16.1a3.45 3.45 0 0 1 2.533-3.327c.327-.09.612.194.755.502.23.492.732.84 1.304.84z"
    ></path>
  </svg>
);

export default BPhone;