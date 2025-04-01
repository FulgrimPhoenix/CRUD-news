import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import styles from "./Tag.module.scss";

interface ITag
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "sm" | "md";
  color?: "ghost" | "gray" | "accent";
  href?: string;
  children: ReactNode;
}

const Tag: FC<ITag> = ({
  size = "md",
  color = "ghost",
  children,
  ...props
}) => {
  return (
    <div
      className={cn(styles.tag, {
        [styles.sm]: size === "sm",
        [styles.md]: size === "md",
        [styles.ghost]: color === "ghost",
        [styles.gray]: color === "gray",
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default Tag;
