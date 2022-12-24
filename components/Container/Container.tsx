import { ReactNode } from "react";

import style from "./container.module.scss";

export default function Container({ children }: { children: ReactNode }) {
  return <div className={style.container}>{children}</div>;
}
