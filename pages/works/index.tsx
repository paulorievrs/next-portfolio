import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import { useTranslation } from "react-i18next";
import { LinkComponent } from "../../components/Link/LinkComponent";
import { Body } from "../../components/Typography/Body";
import { H1 } from "../../components/Typography/H1";
import { H3 } from "../../components/Typography/H3";
import style from "../../styles/Works.module.scss";

import JavascriptIcon from "../../assets/icons/JavascriptIcon";
import ReactIcon from "../../assets/icons/ReactIcon";
import TypescriptIcon from "../../assets/icons/TypescriptIcon";
import PhpIcon from "../../assets/icons/PhpIcon";
import LaravelIcon from "../../assets/icons/LaravelIcon";
import FirebaseIcon from "../../assets/icons/FirebaseIcon";
import MySqlLogo from "../../assets/icons/MySqlLogo";
import JavaIcon from "../../assets/icons/JavaIcon";

import GrupomovMainImage from "../../assets/projects/grupomov/main.png";
import OrganizadorFincaneiroMainImage from "../../assets/projects/organizacao_financeira/main.png";
import Java4NoobsMainImage from "../../assets/projects/java4noobs/main.png";
import MySQL4NoobsMainImage from "../../assets/projects/mysql4noobs/main.png";
import ThisWebsiteMainImage from "../../assets/projects/this_website/main.png";
import TwitchBotMainImage from "../../assets/projects/twitch_bot/main.png";
import CrawlerAliexpressMainImage from "../../assets/projects/crawler-aliexpress/main.png";

type linkType = {
  link: string;
  text: string;
};

type workType = {
  title: string;
  image: StaticImageData;
  links: linkType[];
  icons: (({ width = "" }) => JSX.Element)[];
  translate?: boolean;
  translation?: string;
};

const works: workType[] = [
  {
    title: "Grupomov",
    image: GrupomovMainImage,
    links: [
      {
        link: "https://chamados.grupomov.com.br",
        text: "Web"
      },
      {
        link: "https://play.google.com/store/apps/details?id=com.grupomov.MinhaEmpilhadeiraGrupoMov",
        text: "Android"
      }
    ],
    icons: [JavascriptIcon, ReactIcon, LaravelIcon, PhpIcon, FirebaseIcon]
  },

  {
    title: "Java4Noobs",
    image: Java4NoobsMainImage,
    links: [
      {
        link: "https://github.com/paulorievrs/java4noobs",
        text: "Github"
      }
    ],
    icons: [JavaIcon]
  },
  {
    title: "MySQL4Noobs",
    image: MySQL4NoobsMainImage,
    links: [
      {
        link: "https://github.com/paulorievrs/java4noobs",
        text: "Github"
      }
    ],
    icons: [MySqlLogo]
  },
  {
    title: "Organizador Financeiro",
    image: OrganizadorFincaneiroMainImage,
    links: [
      {
        link: "https://github.com/paulorievrs/organizador-financeiro-web",
        text: "Github Web"
      },
      {
        link: "https://github.com/paulorievrs/organizador-financeiro-pessoal-api",
        text: "Github API"
      }
    ],
    translate: true,
    translation: "financial_organizer",
    icons: [TypescriptIcon, ReactIcon, LaravelIcon, PhpIcon, MySqlLogo]
  },
  {
    title: "This website",
    image: ThisWebsiteMainImage,
    links: [
      {
        link: "https://github.com/paulorievrs/next-portfolio",
        text: "Github"
      }
    ],
    icons: [TypescriptIcon, ReactIcon],
    translate: true,
    translation: "this_website_name"
  },
  {
    title: "Twitch bot",
    image: TwitchBotMainImage,
    links: [
      {
        link: "https://github.com/paulorievrs/twitch-bot",
        text: "Github"
      },
      {
        link: "https://www.twitch.tv/paulorievrs",
        text: "Twitch"
      },
      {
        link: "https://paulorievrs.dev/twitch-commands",
        text: "Commands"
      }
    ],
    icons: [JavascriptIcon]
  },
  {
    title: "Crawler Aliexpress",
    image: CrawlerAliexpressMainImage,
    links: [
      {
        link: "https://github.com/paulorievrs/crawler-aliexpress-prices",
        text: "Github"
      }
    ],
    icons: [TypescriptIcon]
  }
];

export default function Works() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Paulo Rievrs - {t("header.work") ? t("header.work") : ""}</title>
      </Head>
      <div className={style.worksPage}>
        <div className={style.header}>
          <H1>{t("header.work")} 💻</H1>
          <Body>{t("works.title")}</Body>
          <Body>
            {`${t("works.sub_title")} `}
            <LinkComponent
              text="Github"
              external={true}
              path={"https://github.com/paulorievrs"}
            />
            .
          </Body>
        </div>
        <div className={style.content}>
          {works.map((work: workType, index) => (
            <div key={index} className={style.project}>
              <Image
                src={work.image}
                className={`${style.projectImage} ${style.outsideImage}`}
                alt={`Imagem site do ${work.title}`}
              />
              <div className={style.info}>
                <div className={style.projectTitle}>
                  <H3>
                    {work.translate
                      ? t("works." + work.translation)
                      : work.title}
                  </H3>
                </div>
                <Image
                  src={work.image}
                  className={`${style.projectImage} ${style.insideImage}`}
                  alt={`Imagem site do ${work.title}`}
                />
                <div className={style.projectDescription}>
                  <Body>
                    {t(
                      `works.${work.title.toLowerCase().replaceAll(" ", "_")}`
                    )}
                  </Body>
                </div>
                <div className={style.projectLinks}>
                  {work.links.map((link, index) => (
                    <LinkComponent
                      key={index}
                      text={link.text}
                      external={true}
                      path={link.link}
                    />
                  ))}

                  {/* <LinkComponent
                    text="More"
                    primary={true}
                    external={true}
                    path={`/works/${work.title
                      .toLowerCase()
                      .replaceAll(" ", "")}`}
                  /> */}
                </div>
                <div className={style.icons}>
                  {work.icons.map((Icon, index) => (
                    <Icon key={index} width="28" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
