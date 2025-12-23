import * as React from "react";

const Business: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    fill="none"
    viewBox="0 0 60 60"
  >
    <rect width="60" height="60" fill="#DAF0FD" rx="30"></rect>
    <path
      fill="#06A4FF"
      d="M35.625 17.906a6.5 6.5 0 0 1 1.777.25 3.938 3.938 0 0 0 4.692 6.254v11.215a6.47 6.47 0 0 1-6.469 6.469h-11.25a6.47 6.47 0 0 1-6.469-6.469v-11.25a6.47 6.47 0 0 1 6.469-6.469zm.556 8.366a.844.844 0 0 0-1.19.079l-3.395 3.88-2.744-2.286a.844.844 0 0 0-1.174.093l-3.938 4.5a.844.844 0 0 0 1.27 1.111l3.395-3.88 2.742 2.286c.33.275.81.255 1.117-.032l.058-.061 3.938-4.5a.844.844 0 0 0-.08-1.19m2.989-7.308a6.48 6.48 0 0 1 2.642 3.52 2.24 2.24 0 0 1-1.687.766 2.25 2.25 0 0 1-.955-4.286"
    ></path>
    <circle
      cx="2.25"
      cy="2.25"
      r="2.25"
      fill="#06A4FF"
      transform="matrix(-1 0 0 1 42.375 18.75)"
    ></circle>
  </svg>
);

export default Business;