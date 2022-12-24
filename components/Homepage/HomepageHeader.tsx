import { Button } from "../Button/Button";
import { Body } from "../Typography/Body";
import { H1 } from "../Typography/H1";
import MyImg from "../../assets/my-img.jpeg";
import Image from "next/image";

import styles from "../../styles/Home.module.scss";
import { useRouter } from "next/router";

export default function HomepageHeader({ t }: { t: any }) {
  const router = useRouter();
  return (
    <div className={styles.header}>
      <div className={styles.leftSide}>
        <div className={styles.content}>
          <div className={styles.titleTexts}>
            <H1 className={styles.title}>{t("homepage.presentation.title")}</H1>
            <H1 className={styles.subTitle}>
              {t("homepage.presentation.sub-title")}
            </H1>
          </div>

          <Body className={styles.bodyText}>
            {t("homepage.presentation.about")}
          </Body>
          <div className={styles.buttonWrapper}>
            <Button
              className={styles.button}
              text={t("homepage.presentation.check-work")}
              onClick={() => router.push("/works")}
            />
          </div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.imageWrapper}>
          <div className={styles.imageBackground}></div>
          <Image className={styles.image} src={MyImg} alt="my-img" />
        </div>
      </div>
    </div>
  );
}
