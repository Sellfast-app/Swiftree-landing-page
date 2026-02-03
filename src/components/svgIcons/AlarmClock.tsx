import * as React from "react";

const AlarmClock: React.FC<React.SVGProps<SVGElement>> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="27"
    height="27"
    fill="none"
    viewBox="0 0 27 27"
  >
    <path
      fill="#9359F1"
      d="M13.5 3.656c6.058 0 10.969 4.911 10.969 10.969S19.558 25.594 13.5 25.594 2.531 20.683 2.531 14.625 7.442 3.656 13.5 3.656m0 5.625a.844.844 0 0 0-.844.844v4.2c0 .47.235.908.626 1.17l3.125 2.082a.844.844 0 0 0 .936-1.404l-3-2v-4.048a.844.844 0 0 0-.843-.844"
    ></path>
    <path
      stroke="#9359F1"
      strokeLinecap="round"
      strokeWidth="1.688"
      d="m19.125 2.25 4.5 3.375M13.5 2.25V4.5M19.125 23.625l1.125 2.25M7.875 23.625l-1.125 2.25M7.875 2.25l-4.5 3.375"
    ></path>
  </svg>
);

export default AlarmClock;