import * as React from "react";

const Vision: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    fill="none"
    viewBox="0 0 60 60"
  >
    <rect width="60" height="60" fill="#DAF0FD" rx="30"></rect>
    <path
      fill="#5BA3F8"
      d="M17.923 19.71a.844.844 0 0 1 .993-.662l1.18.236a3.09 3.09 0 0 1 2.471 2.726l.097.958h15.272a3.43 3.43 0 0 1 3.328 4.264l-1.262 5.053a4.78 4.78 0 0 1-4.639 3.621H25.246a3.093 3.093 0 0 1-3.071-2.725l-1.114-9.276-.173-1.728a1.41 1.41 0 0 0-1.123-1.239l-1.18-.236a.844.844 0 0 1-.662-.992m8.702 11.133a.844.844 0 0 0 0 1.688h4.5a.844.844 0 0 0 0-1.687z"
    ></path>
    <circle cx="26.063" cy="39" r="1.688" fill="#5BA3F8"></circle>
    <circle cx="36.188" cy="39" r="1.688" fill="#5BA3F8"></circle>
  </svg>
);

export default Vision;