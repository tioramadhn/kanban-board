import "@fontsource-variable/nunito-sans";
import "./App.css";
import { AuthContext } from "./provider/authProvider";
import { useContext, useEffect } from "react";
import { Board, Form, Header } from "./components";
import { SettingsContext } from "./provider/settingsProvider";

function App() {
  const { auth } = useContext<any>(AuthContext);
  const { open, setOpen } = useContext<any>(SettingsContext);
  useEffect(() => {
    console.log("open", open);
    if (open) {
      setOpen(false);
    }
  }, [auth]);

  const handleClick = (e: any) => {
    // if (e.target.closest(".setting-box")) {
    //   setOpen(!open);
    // }
    if (e.target.closest(".box-menu")) {
      console.log("box-menu");

      return;
    }
    if (open) {
      setOpen(false);
    }
  };
  return (
    <>
      {auth ? (
        <div className="min-h-screen" onClick={handleClick}>
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
