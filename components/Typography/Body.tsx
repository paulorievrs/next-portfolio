import { TypographyProps } from "./TypographyTypes";
import style from "./typography.module.scss";

export const Body = ({ children, className = "" }: TypographyProps) => {
  return <p className={`${className} ${style.p}`}>{children}</p>;
};
