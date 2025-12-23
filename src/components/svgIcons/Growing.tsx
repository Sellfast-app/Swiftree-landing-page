import * as React from "react";

const Growing: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="80"
    height="80"
    fill="none"
    viewBox="0 0 100 100"
  >
    <rect width="100" height="100" fill="#4FCA6A" rx="50"></rect>
    <path
      fill="#fff"
      d="M49.069 31.35a1.92 1.92 0 0 1 1.861 0l13.417 7.455c.609.338.987.978.987 1.675v8.89c0 6.96-3.774 13.375-9.859 16.755l-4.545 2.524a1.92 1.92 0 0 1-1.861 0l-4.544-2.524a19.17 19.17 0 0 1-9.858-16.755v-8.89c0-.697.378-1.337.986-1.675zm8.656 13.8a1.44 1.44 0 0 0-2.033 0l-6.65 6.65-2.817-2.817a1.438 1.438 0 0 0-2.033 2.034l3.833 3.833a1.44 1.44 0 0 0 2.033 0l7.667-7.667c.561-.562.561-1.471 0-2.033"
    ></path>
  </svg>
);

export default Growing;