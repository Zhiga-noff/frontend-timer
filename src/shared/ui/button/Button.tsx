import React, { ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeElem?: "btn" | "link";
  children: React.ReactNode;
  path?: string;
}

export const Button: FC<Props> = ({
  children,
  typeElem = "btn",
  path,
  className,
}) => {
  if (typeElem === "link") {
    return (
      <a className={styles.Button} href={path}>
        {children}
      </a>
    );
  }
  return (
    <button className={`${styles.Button} ${className}`}>{children}</button>
  );
};
