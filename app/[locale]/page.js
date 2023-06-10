import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import AlertMessage from "./AlertMessage";
import Image from 'next/image'

export default function Home() {
  const t = useTranslations("Index");

  return (
    <div>
      <div>
        <p>{t("title")}</p>
        <p>{t("subtitle")}</p>
      </div>
      <div>
        <br />
        <AlertMessage message={t("alertMessage")} />
      </div>
    </div>
  );
}
