function Main() {
  const t = window.pageData.translations;
  return (
    <div className="main-lang">
      <h1 className="main-title">{t["main.title"]}</h1>
      <p className="sub-title">{t["main.text"]}</p>
      <a className="link" id="mail_link" href={"https://google.com"}>
        {t["main.link"]}
      </a>
    </div>
  );
}

export default Main;
