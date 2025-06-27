import { useContext } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import theamContext from "./context/theme.context";
import "./style/components/App.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

function App(){

  const { dark }=useContext(theamContext);
  return (
    <div className={`App-${dark ? 'dark' : 'light'}`}>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;