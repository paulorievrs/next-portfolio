//import SkillSection from "./SkillSection";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import Container from "../components/Container/Container";
import ExperienceSection from "../components/Homepage/ExperienceSection";
import HomepageHeader from "../components/Homepage/HomepageHeader";
import SkillSection from "../components/Homepage/SkillSection";
//import ProjectSection from "./ProjectSection";
import styles from "../styles/Home.module.scss";

export default function Homepage() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Paulo Rievrs - {t("header.home") ? t("header.home") : ""}</title>
      </Head>
      <div className={styles.pageHomepage}>
        <HomepageHeader t={t} />
        <SkillSection t={t} />
        <ExperienceSection t={t} />
      </div>
    </>
  );
}
