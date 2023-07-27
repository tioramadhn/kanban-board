import "@fontsource-variable/nunito-sans";
import "./App.css";
import { AuthContext } from "./provider/authProvider";
import { useContext } from "react";
import { Board, Form, Header } from "./components";
import { SettingsContext } from "./provider/settingsProvider";

function App() {
  const { auth } = useContext<any>(AuthContext);
  // const { close, setClose } = useContext<any>(SettingsContext);

  // const handleClick = (e: any) => {
  //   if (e.target.closest(".box-menu")) return;
  //   // if (!close) {
  //   //   setClose(true);
  //   // }
  // };
  return (
    <>
      {auth ? (
        <div className="min-h-screen">
          <Header />
          <Board />
        </div>
      ) : (
        <Form />
      )}
    </>
  );
}

export default App;
