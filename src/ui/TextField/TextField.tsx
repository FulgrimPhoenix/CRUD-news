import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./TextField.module.scss";
import { Tag } from "@/ui";

interface ITextField
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  variant: "text" | "textarea";
}

const TextField: FC<ITextField> = (props) => {
  return props.variant === "text" ? (
    <>
      <Tag style={{ marginLeft: "5px" }}>{props.placeholder}</Tag>
      <input className={cn(styles["text-field"])} {...props} />
    </>
  ) : (
    <div className={cn(styles["text-field-container"])}>
      <Tag style={{ marginLeft: "5px" }}>{props.placeholder}</Tag>
      <textarea
        className={cn(styles["text-field"])}
        name={props.name}
        rows={10}
        placeholder={props.placeholder}
        value={props.value}
        style={props.style}
        onChange={
          props.variant === "textarea"
            ? (props.onChange as unknown as React.ChangeEventHandler<HTMLTextAreaElement>)
            : undefined
        }
      />
    </div>
  );
};

const MemoizedTextField = React.memo(TextField);

export default MemoizedTextField;
