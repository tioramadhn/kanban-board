import "@fontsource-variable/nunito-sans";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center">
        <Form />
      </div>
    </>
  );
}

export default App;
