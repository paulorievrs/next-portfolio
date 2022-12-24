import GithubIcon from "../../assets/icons/GithubIcon";
import LinkedinIcon from "../../assets/icons/LinkedinIcon";
import TwitterIcon from "../../assets/icons/TwitterIcon";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.footerIcons}>
          <LinkedinIcon
            className={styles.icons}
            link="https://linkedin.com/in/paulo-rievrs"
          />
          <TwitterIcon
            className={styles.icons}
            link="https://twitter.com/paulorievrs"
          />
          <GithubIcon
            className={styles.icons}
            link="https://github.com/paulorievrs"
          />
        </div>
        <span className={styles.footerText}>
          © 2023 Paulo Rievrs. All rights reserved.
        </span>
      </div>
    </footer>
  );
};
