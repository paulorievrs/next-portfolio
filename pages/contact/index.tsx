import Head from "next/head";
import Link from "next/link";
import Input from "../../components/Input/Input";
import { LinkComponent } from "../../components/Link/LinkComponent";
import TextArea from "../../components/Textarea/Textarea";
import { Body } from "../../components/Typography/Body";
import { H1 } from "../../components/Typography/H1";
import style from "../../styles/Contact.module.scss";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../../components/Button/Button";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const validationSchema = z.object({
    name: z.string().min(1, { message: t("contact.requiredName") as string }),
    email: z
      .string()
      .min(1, { message: t("contact.requiredEmail") as string })
      .email({
        message: t("contact.emailValidation") as string
      }),
    subject: z
      .string()
      .min(1, { message: t("contact.requiredSubject") as string }),
    message: z
      .string()
      .min(1, { message: t("contact.requiredMessage") as string })
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
    reValidateMode: "onBlur"
  });

  const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
    setLoading(true);

    const emailPromise = fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(() => {
        reset();
      })
      .finally(() => {
        setLoading(false);
      });

    toast.promise(emailPromise, {
      pending: "Sending email...",
      success: "E-mail sent successfully! We'll be in touch soon!",
      error: "An error occured sending the email 🤯"
    });
  };

  return (
    <div>
      <Head>
        <title>
          Paulo Rievrs - {t("header.contact") ? t("header.contact") : ""}
        </title>
      </Head>
      <div className={style.header}>
        <H1>{t("header.contact")} ✉️</H1>
        <div>
          <Body>
            {t("contact.social1")}{" "}
            <LinkComponent
              text="Twitter"
              external={true}
              path={"https://twitter.com/paulorievrs"}
            />{" "}
            {t("contact.or")}{" "}
            <LinkComponent
              text="Linkedin"
              external={true}
              path={"https://linkedin.com/in/paulo-rievrs"}
            />
            .
          </Body>
          <Body>
            {t("contact.social2")}{" "}
            <LinkComponent
              text="eu@paulorievrs.dev"
              external={true}
              path={"mailto:eu@paulorievrs.dev"}
            />{" "}
            😃
          </Body>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={style.emailForm}>
          <div className={style.nameAndEmail}>
            <Input
              label={t("contact.name")}
              type={"text"}
              name={"name"}
              register={register}
              placeholder={t("contact.nameValidation")}
              error={errors.name?.message}
            />

            <Input
              label={t("contact.email")}
              type={"text"}
              name={"email"}
              placeholder={t("contact.emailValidation")}
              register={register}
              error={errors.email?.message}
            />
          </div>
          <Input
            label={t("contact.subject")}
            type={"text"}
            name={"subject"}
            placeholder={t("contact.subjectValidation")}
            register={register}
            error={errors.subject?.message}
          />
          <TextArea
            label={t("contact.message")}
            name={"message"}
            placeholder={t("contact.messageValidation")}
            register={register}
            error={errors.message?.message}
          ></TextArea>
          <Button
            text={t("contact.sendEmail")}
            type="submit"
            disabled={loading}
          />
        </form>
      </div>
    </div>
  );
}
