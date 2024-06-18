import "./style.css";
import { useTranslations } from "next-intl";

type News = {
  title: String;
  about: String;
  image: String;
};

type Event = {
  title: String;
  date: Date;
  about: String;
  image: String;
};

export default function Page() {
  const t = useTranslations("FrontPage");

  // events ja news for loopilla jostai databasesta, esim. kolme uusinta
  return (
    <div>
      <img className="img" src={"/snow-art.png"} alt="placeholder img" />
      <div className="align-centre">
        <div className="welcome-box">
          <h1>{t("title")}</h1>
          <p>{t("about")}</p>
        </div>
      </div>
      <div className="events-and-news">
        <div className="news">
          <h1>{t("news")}</h1>
          <p className="box">news1</p>
          <p className="box">news2</p>
        </div>
        <div className="events">
          <h1>{t("events")}</h1>
          <p className="box">event1</p>
          <p className="box">event2</p>
        </div>
      </div>
    </div>
  );
}
