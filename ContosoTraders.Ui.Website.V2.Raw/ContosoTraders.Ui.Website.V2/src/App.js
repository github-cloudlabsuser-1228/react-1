import "./App.css";
import WelcomePopup from "./components/WelcomePopup";
import Nav from "./Nav";
import Main from "./Main";

function App() {
  return (
    <>
      <WelcomePopup />
      <header>
        <Nav />
      </header>
      
      <Main />

    </>
  );
}

export default App;
