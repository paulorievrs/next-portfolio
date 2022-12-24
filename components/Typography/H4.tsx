import { TypographyProps } from "./TypographyTypes";
import style from "./typography.module.scss";

export const H4 = ({ children, className = "" }: TypographyProps) => {
  return <h1 className={`${className} ${style.h4}`}>{children}</h1>;
};
