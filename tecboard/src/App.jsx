import "./App.css";
import { FormularioDeEvento } from "./components/FormularioDeEvento";

// No react componentes são funções

function App() {
  return (
    <main>
      <header>
        <img src="./img/logo.png" alt="" />
      </header>

      <section>
        <img src="./img/banner.png" alt="" />
      </section>

      <FormularioDeEvento />
    </main>
  );
}

export default App;
