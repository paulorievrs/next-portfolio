import FirebaseIcon from "../../assets/icons/FirebaseIcon";
import JavascriptIcon from "../../assets/icons/JavascriptIcon";
import LaravelIcon from "../../assets/icons/LaravelIcon";
import MySqlLogo from "../../assets/icons/MySqlLogo";
import NestJsIcon from "../../assets/icons/NestJsIcon";
import ReactIcon from "../../assets/icons/ReactIcon";
import TypescriptIcon from "../../assets/icons/TypescriptIcon";
import AngularIcon from "../../assets/icons/AngularIcon";
import { H4 } from "../Typography/H4";
import style from "./experience.module.scss";
import DockerIcon from "../../assets/icons/DockerIcon";
import PhpIcon from "../../assets/icons/PhpIcon";
import ScssIcon from "../../assets/icons/ScssIcon";

const experiences = [
  {
    company: "Arctouch",
    workedDate: "mar/20222 - current",
    icons: [
      <JavascriptIcon key={"grupomov-js-icon"} width="28" />,
      <ScssIcon key={"grupomov-scss-icon"} width="28" />,
      <ReactIcon key={"grupomov-react-icon"} width="28" />
    ],
    contentTitle: "arctouch",
    content: ["0"]
  },
  {
    company: "Grupo MOV",
    workedDate: "jun/2020 - jul/2022",
    icons: [
      <JavascriptIcon key={"grupomov-js-icon"} width="28" />,
      <LaravelIcon key={"grupomov-laravel-icon"} width="28" />,
      <ReactIcon key={"grupomov-react-icon"} width="28" />,
      <MySqlLogo key={"grupomov-mysql-icon"} width="28" />,
      <FirebaseIcon key={"grupomov-firebase-icon"} width="28" />
    ],
    contentTitle: "grupomov",
    content: ["0", "1"]
  },
  {
    company: "Upflow",
    workedDate: "jan/2022 - jul/2022",
    icons: [
      <TypescriptIcon key={"upflow-ts-icon"} width="28" />,
      <NestJsIcon key={"upflow-nestjs-icon"} width="28" />,
      <AngularIcon key={"upflow-angular-icon"} width="28" />,
      <DockerIcon key={"upflow-docker-icon"} width="28" />
    ],
    contentTitle: "upflow",
    content: ["0", "1"]
  },
  {
    company: "Teknisa",
    workedDate: "dec/2020 - sep/2021",
    icons: [
      <JavascriptIcon key={"teknisa-js-icon"} width="28" />,
      <PhpIcon key={"teknisa-php-icon"} width="28" />,
      <ReactIcon key={"teknisa-react-icon"} width="28" />,
      <LaravelIcon key={"teknisa-laravel-icon"} width="28" />
    ],
    contentTitle: "teknisa",
    content: ["0", "1", "2"]
  },
  {
    company: "Bernoulli",
    workedDate: "sep/2021 - mar/2022",
    icons: [
      <JavascriptIcon key={"teknisa-js-icon"} width="28" />,
      <PhpIcon key={"teknisa-php-icon"} width="28" />,
      <ReactIcon key={"teknisa-react-icon"} width="28" />,
      <LaravelIcon key={"teknisa-laravel-icon"} width="28" />
    ],
    contentTitle: "bernoulli",
    content: ["0", "1"]
  }
];

export default function ExperienceSection({ t }: { t: any }) {
  const getWorkedDate = (workedDate: string) => {
    const firstMonthYear = workedDate.split(" - ")[0];
    const secondMonthYear = workedDate.split(" - ")[1];

    const firstYear = firstMonthYear.split("/")[1];
    const firstMonth = firstMonthYear.split("/")[0];
    const firstMonthTranslated = t(`months.${firstMonth}`);

    if (secondMonthYear === "current") {
      return `(${firstMonthTranslated}/${firstYear} - ${t("months.current")})`;
    }

    const secondYear = secondMonthYear.split("/")[1];
    const secondMonth = secondMonthYear.split("/")[0];

    const secondMonthTranslated = t(`months.${secondMonth}`);

    return `(${firstMonthTranslated}/${firstYear} - ${secondMonthTranslated}/${secondYear})`;
  };

  return (
    <div className={style.experienceSection}>
      <div className={style.header}>
        <H4>{t("homepage.experience.title")}</H4>
      </div>
      <div className={style.experiencesWrapper}>
        <div className={style.experiences}>
          {experiences.map((experience) => (
            <div className={style.experience} key={experience.company}>
              <div className={style.experienceHeader}>
                <div className={style.company}>
                  <div className={style.mainData}>
                    <span className={style.title}>{experience.company}</span>
                    <span className={style.workedDate}>
                      {getWorkedDate(experience.workedDate)}{" "}
                    </span>
                  </div>

                  <div className={style.icons}>
                    {experience.icons.map((icon) => icon)}
                  </div>
                </div>
              </div>
              <div className={style.content}>
                <ul className={style.list}>
                  {experience.content.map((content, index) => (
                    <li key={index}>
                      {t(
                        `homepage.experience.${experience.contentTitle}.${content}`
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
