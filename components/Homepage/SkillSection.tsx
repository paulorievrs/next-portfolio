import AngularIcon from "../../assets/icons/AngularIcon";
import DockerIcon from "../../assets/icons/DockerIcon";
import FirebaseIcon from "../../assets/icons/FirebaseIcon";
import JavaIcon from "../../assets/icons/JavaIcon";
import JavascriptIcon from "../../assets/icons/JavascriptIcon";
import LaravelIcon from "../../assets/icons/LaravelIcon";
import MySqlLogo from "../../assets/icons/MySqlLogo";
import NestJsIcon from "../../assets/icons/NestJsIcon";
import PhpIcon from "../../assets/icons/PhpIcon";
import ReactIcon from "../../assets/icons/ReactIcon";
import ScssIcon from "../../assets/icons/ScssIcon";
import TypescriptIcon from "../../assets/icons/TypescriptIcon";
import { H4 } from "../Typography/H4";
import style from "./skill.module.scss";

export type Skill = {
  name: string;
  image: JSX.Element;
  workedTime: string;
};

const skills: Skill[] = [
  {
    name: "Laravel",
    image: <LaravelIcon />,
    workedTime: "2y3y"
  },
  {
    name: "Javascript",
    image: <JavascriptIcon />,
    workedTime: "2y3y"
  },
  {
    name: "Typescript",
    image: <TypescriptIcon />,
    workedTime: "1y2y"
  },
  {
    name: "React",
    image: <ReactIcon />,
    workedTime: "2y3y"
  },
  {
    name: "MySQL",
    image: <MySqlLogo />,
    workedTime: "2y3y"
  },
  {
    name: "PHP",
    image: <PhpIcon />,
    workedTime: "2y3y"
  },
  {
    name: "NestJS",
    image: <NestJsIcon />,
    workedTime: "1y2y"
  },
  {
    name: "Firebase",
    image: <FirebaseIcon />,
    workedTime: "1y2y"
  },
  {
    name: "SASS",
    image: <ScssIcon />,
    workedTime: "6m1y"
  },
  {
    name: "Angular",
    image: <AngularIcon />,
    workedTime: "6m1y"
  },
  {
    name: "Docker",
    image: <DockerIcon />,
    workedTime: "6m1y"
  },
  {
    name: "Java",
    image: <JavaIcon />,
    workedTime: "6m1y"
  }
];

export default function SkillSection({ t }: { t: any }) {
  const Skill = ({ name, image, workedTime }: Skill) => {
    return (
      <div className={style.skill}>
        {image}
        <div className={style.skillInfo}>
          <span>{name}</span>
          <span className={style.workedTime}>
            {t(`homepage.skills.workedTime.${workedTime}`)}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className={style.skillWrapper}>
      <div className={style.title}>
        <H4>{t("homepage.skills.title")}</H4>
      </div>
      <div className={style.skillsAlign}>
        <div className={style.skills}>
          {skills.map(({ name, image, workedTime }) => (
            <Skill
              key={name}
              name={name}
              image={image}
              workedTime={workedTime}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
