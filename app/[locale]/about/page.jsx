import Button from "@/components/button";
import { useTranslations } from "next-intl";
import React from "react";

const About = () => {
  const t = useTranslations("About");

  return (
    <div>
      {/* <h1>About</h1> */}
      <h1>{t("title about")}</h1>
      <Button />
    </div>
  );
};

export default About;
