import { TypographyProps } from "./TypographyTypes";
import style from "./typography.module.scss";

export const H1 = ({ children, className = "" }: TypographyProps) => {
  return <h1 className={`${className} ${style.h1}`}>{children}</h1>;
};
