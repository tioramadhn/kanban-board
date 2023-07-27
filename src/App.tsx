import "@fontsource-variable/nunito-sans";
import "./App.css";
import { AuthContext } from "./provider/authProvider";
import { useContext } from "react";
import { Board, Form, Header } from "./components";

function App() {
  const { auth } = useContext<any>(AuthContext);

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
