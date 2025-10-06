// props é um OBJETO
//props.children
import './titulo-formulario.estilos.css'

export function TituloFormulario({ children }) {
  return <h2 className='titulo-form'>{children}</h2>;
}
