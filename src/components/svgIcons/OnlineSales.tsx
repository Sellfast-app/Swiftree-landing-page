import * as React from "react";

const OnlineSales: React.FC<React.SVGProps<SVGElement>> = (props) => (
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
      fill="#AF9CED"
      fillOpacity="0.19"
      rx="14"
    ></rect>
    <path
      fill="#7234FF"
      d="M6.5 18.5a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75H7.25a.75.75 0 0 1-.75-.75z"
    ></path>
    <path
      fill="#7234FF"
      d="M20.75 17.75v.054c0 .384-.336.696-.75.696H8c-.414 0-.75-.312-.75-.696v-.054zm-9.772-9c.352 0 .645.282.924.497.163.125.371.2.598.2h3a.98.98 0 0 0 .598-.2c.28-.215.572-.497.925-.497H20c.414 0 .75.312.75.696v7.179H7.25V9.446c0-.384.336-.696.75-.696z"
    ></path>
  </svg>
);

export default OnlineSales;