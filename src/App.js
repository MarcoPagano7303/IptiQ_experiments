import Main from "./components/Main";
import Sec from "./components/Sec";

function App() {
  const t = window.pageData.translations;
  return (
    <div className="container">
      <Main />
      <div className="sec-lang">
        <Sec language="de" />
        <Sec language="it" />
        <Sec language="fr" />
        <Sec language="nl" />
      </div>
    </div>
  );
}

export default App;
