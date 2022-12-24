import { TypographyProps } from "./TypographyTypes";
import style from "./typography.module.scss";

export const H3 = ({ children, className = "" }: TypographyProps) => {
  return <h1 className={`${className} ${style.h3}`}>{children}</h1>;
};
