
import './App.css'

// No react componentes são funções

// props é um OBJETO
//props.children

function TituloFormulario({children}){
  return(
    <h2>
      {children}
    </h2>
  )
}

function CampoDeFormulario({children}){
  return (

    <fieldset>
      {children}
    </fieldset>

  );
}

function Label({ children }) {
  return <label>{children}</label>;
}

function CampoDeEntrada(props){
  return(
    <input {...props} />
  )
}


function FormularioDeEvento(){

  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>

      <CampoDeFormulario>
        <Label htmlFor="nome">Qual é o nome do evento?</Label>

        <CampoDeEntrada
          type="text"
          id="nome"
          placeholder="Summer dev hits"
          name="nomeEvento"
        />
      </CampoDeFormulario>
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
