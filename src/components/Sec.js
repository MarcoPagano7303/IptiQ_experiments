function Sec({ language }) {
  const t = window.pageData.translations;
  return (
    <div className="single-comp">
      <h3 className="single-title">{t[`sec.${language}.title`]}</h3>
      <p className="single-desc">{t[`sec.${language}.text`]}</p>
    </div>
  );
}

export default Sec;
