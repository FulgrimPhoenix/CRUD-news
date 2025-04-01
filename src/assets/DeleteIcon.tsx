import { FC } from "react";
import { IIcon } from "@/types/icons.types";

const DeleteIcon: FC<IIcon> = ({ color, size, ...props }) => {
  const getSize = (size: IIcon["size"]) => {
    switch (size) {
      case "sm":
        return { width: "16px", height: "16px" };
      case "md":
        return { width: "24px", height: "24px" };
      case "lg":
        return { width: "32px", height: "32px" };
      default:
        return { width: "24px", height: "24px" };
    }
  };

  const currentSize = getSize(size);

  return (
    <svg
      width={currentSize.width}
      height={currentSize.height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ stroke: color ? color : "#000" }}
      {...props}
    >
      <path
        d="M10 12V17"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 12V17"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 7H20"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DeleteIcon;
