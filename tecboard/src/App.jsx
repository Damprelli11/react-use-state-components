
import './App.css'

// No react componentes são funções

// props é um OBJETO
//props.children

function TituloFormulario(props){
  return(
    <h2>
      {props.children}
    </h2>
  )
}

function FormularioDeEvento(){

  return (
    <form className="form-evento">

      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>

      <fieldset>
        <label htmlFor="nome">Qual é o nome do evento?</label>
        <input type="text" id="nome" />
      </fieldset>
    </form>
  );

}


function App() {

  return (
    <main>
      <header>
        <img src='./img/logo.png' alt='' />
      </header>

      <section>
        <img src='./img/banner.png' alt='' />
      </section>

      <FormularioDeEvento/>
    </main>
  )
}

export default App
