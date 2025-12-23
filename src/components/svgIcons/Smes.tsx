import * as React from "react";

const Smes: React.FC<React.SVGProps<SVGElement>> = (props) => (
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
      d="M53.82 33.276c.973 0 1.8-.591 2.177-1.422.23-.508.698-.971 1.237-.828a5.75 5.75 0 0 1 4.266 5.557v26.833a5.75 5.75 0 0 1-5.75 5.75h-11.5a5.75 5.75 0 0 1-5.75-5.75V36.583a5.75 5.75 0 0 1 4.222-5.545c.545-.15 1.02.325 1.258.836.384.82 1.22 1.402 2.174 1.402z"
    ></path>
  </svg>
);

export default Smes;