import "@fontsource-variable/nunito-sans";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import { AuthContext } from "./provider/authProvider";
import { useContext } from "react";

function App() {
  const { auth } = useContext<any>(AuthContext);
  return (
    <>
      {auth ? (
        <Header />
      ) : (
        <div className="min-h-screen flex items-center justify-center">
          <Form />
        </div>
      )}
    </>
  );
}

export default App;
