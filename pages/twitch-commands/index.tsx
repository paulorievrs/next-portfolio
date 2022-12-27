import Head from "next/head";
import { useTranslation } from "react-i18next";
import { Button } from "../../components/Button/Button";
import { LinkComponent } from "../../components/Link/LinkComponent";
import { H1 } from "../../components/Typography/H1";
import style from "../../styles/TwitchCommands.module.scss";

type Command = {
  command: string;
  response: string | (() => JSX.Element);
};

const commands: Command[] = [
  {
    command: "!github",
    response: () => (
      <span>
        Meus projetos estão em:{" "}
        <LinkComponent
          text="https://github.com/paulorievrs"
          path="https://github.com/paulorievrs"
          external={true}
        />
      </span>
    )
  },
  {
    command: "!twitter",
    response: () => (
      <span>
        Me siga no twitter:{" "}
        <LinkComponent
          text="https://twitter.com/paulorievrs"
          path="https://twitter.com/paulorievrs"
          external={true}
        />
      </span>
    )
  },
  {
    command: "!instagram",
    response: () => (
      <span>
        Me siga no instagram:{" "}
        <LinkComponent
          text="https://instagram.com/paulorievrs"
          path="https://instagram.com/paulorievrs"
          external={true}
        />
      </span>
    )
  },
  {
    command: "!linkedin",
    response: () => (
      <span>
        Meu perfil no LinkedIn:{" "}
        <LinkComponent
          text="https://www.linkedin.com/in/paulo-rievrs/"
          path="https://www.linkedin.com/in/paulo-rievrs/"
          external={true}
        />
      </span>
    )
  },
  {
    command: "!discord",
    response: () => (
      <span>
        Meu ID do Discord: PauloRievrs#4590 | Utilizo o servidor:{" "}
        <LinkComponent
          text="https://discord.gg/he4rt"
          path="https://discord.gg/he4rt"
          external={true}
        />
      </span>
    )
  },
  {
    command: "!website",
    response: () => (
      <span>
        Meu site pessoal:{" "}
        <LinkComponent
          text="https://paulorievrs.dev"
          path="https://paulorievrs.dev"
          external={true}
        />
      </span>
    )
  },
  {
    command: "!pc",
    response:
      "| MACBOOK PRO M1 14, 2021 - RAM: 16gb - MEM: SSD: 1tb - CPU: M1 - GPU: |"
  },
  {
    command: "",
    response:
      "| MACBOOK PRO M1 14, 2021 - RAM: 16gb - MEM: SSD: 1tb - CPU: M1 - GPU: |"
  },
  {
    command: "!help",
    response: () => (
      <span>
        Para ver todos os comandos acesse:
        <LinkComponent
          text="https://paulorievrs.dev/twitch-commands"
          path="https://paulorievrs.dev/twitch-commands"
        />
      </span>
    )
  }
];

export default function TwitchCommands() {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>
          Paulo Rievrs -{" "}
          {t("header.twitchCommands") ? t("header.twitchCommands") : ""}
        </title>
      </Head>
      <H1>{t("header.twitchCommands")} 🤖</H1>
      <div className={style.tableWrapper}>
        <table className={style.table}>
          <thead className={style.header}>
            <tr>
              <th className={style.title}>Command</th>
              <th className={style.title}>Response</th>
            </tr>
          </thead>
          <tbody className={style.content}>
            {commands.map(({ command, response }, index) => (
              <tr key={index}>
                <td className={style.item}>{command}</td>
                <td className={style.item}>
                  {typeof response === "string" ? response : response()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <LinkComponent
        className={style.bottomText}
        text={t("twitch-commands.backToHome")}
        path="/"
      />
    </div>
  );
}
