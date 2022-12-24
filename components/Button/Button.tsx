import styles from "./button.module.scss";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  style?: "primary" | "secondary";
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
};

import LoadingIcon from "../../assets/loadingIcon.gif";
import Image from "next/image";

export const Button = ({
  text,
  onClick = () => {},
  style = "primary",
  disabled = false,
  className,
  type = "button"
}: ButtonProps) => {
  return (
    <button
      className={`${styles.buttonComponent} ${
        disabled ? styles.disabled : ""
      } ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
