import cn from "classnames";
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  ReactNode,
} from "react";
import styles from "./IconButton.module.scss";

interface IButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

const Button: FC<IButton> = React.memo(
  ({ size = "md", children, ...props }) => {
    return (
      <button
        type={props.type}
        className={cn(styles.button, {
          [styles["sm"]]: size === "sm",
          [styles["md"]]: size === "md",
          [styles["lg"]]: size === "lg",
        })}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
