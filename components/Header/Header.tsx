import DevLogo from "../../assets/icons/DevLogo";
import { LinkComponent } from "../Link/LinkComponent";
import { useTranslation } from "react-i18next";

import style from "./header.module.scss";
import BrazilFlag from "../../assets/icons/BrazilFlag";
import USAFlag from "../../assets/icons/USAFlag";
import { ToastContainer } from "react-toastify";
const links = [
  {
    path: "/",
    text: "home"
  },
  {
    path: "/works",
    text: "work"
  },
  {
    path: "/contact",
    text: "contact"
  }
];

export const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    //localStorage.setItem("i18nextLng", language);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className={style.headerComponent}>
        <div className={style.logoContent}>
          <DevLogo className={style.icons} width={"40"} />
        </div>
        <div className={style.linksContent}>
          {links.map(({ path, text }, index) => (
            <LinkComponent path={path} text={t(`header.${text}`)} key={index} />
          ))}
          {i18n.language === "en" ? (
            <BrazilFlag
              className={style.icons}
              onClick={() => changeLanguage("ptBR")}
            />
          ) : (
            <USAFlag
              className={style.icons}
              onClick={() => changeLanguage("en")}
            />
          )}
        </div>
      </div>
    </>
  );
};
