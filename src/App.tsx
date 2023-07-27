import "@fontsource-variable/nunito-sans";
import "./App.css";
import { AuthContext } from "./provider/authProvider";
import { useContext } from "react";
import { Board, Form, Header } from "./components";
import { SettingsContext } from "./provider/settingsProvider";

function App() {
  const { auth } = useContext<any>(AuthContext);
  const { open, setOpen } = useContext<any>(SettingsContext);
  return (
    <>
      {auth ? (
        <div className="min-h-screen " onClick={() => setOpen(!open)}>
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
