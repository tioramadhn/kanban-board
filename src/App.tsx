import "@fontsource-variable/nunito-sans";
import "./App.css";
import { AuthContext } from "./provider/authProvider";
import { useContext } from "react";
import { Board, Form, Header } from "./components";
import { SettingsContext } from "./provider/settingsProvider";

function App() {
  const { auth } = useContext<any>(AuthContext);
  const { open, setOpen } = useContext<any>(SettingsContext);

  const handleClick = (e: any) => {
    if (e.target.closest(".box-menu")) return;
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
