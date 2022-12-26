import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./link.module.scss";

type LinkComponentType = {
  path: string;
  text: string;
  external?: boolean;
  primary?: boolean;
  className?: string;
};

export const LinkComponent = ({
  path,
  text,
  external = false,
  primary = false,
  className = ""
}: LinkComponentType) => {
  const router = useRouter();
  const isActive = primary || router.pathname === path;

  if (external) {
    return (
      <span className={`${styles.linkComponent} ${className}`}>
        <Link
          className={`${styles.link} ${isActive ? styles.active : ""} ${
            styles.external
          }`}
          href={path}
          target={"_blank"}
        >
          {text}
        </Link>
      </span>
    );
  }

  return (
    <div className={`${styles.linkComponent} ${className}`}>
      <Link
        className={`${styles.link} ${isActive ? styles.active : ""} `}
        href={path}
      >
        {text}
      </Link>
    </div>
  );
};
