import "./formulario-de-evento.style.css";
import { TituloFormulario } from "../TituloFormulario";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { Botao } from "../Botao";
import { ListaSuspensa } from "../ListaSuspensa";

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>

      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">Qual é o nome do evento?</Label>
          <CampoDeEntrada
            type="text"
            id="nomeEvento"
            placeholder="Summer dev hits"
            name="nomeEvento"
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do Evento</Label>
          <CampoDeEntrada type="date" id="dataEvento" name="dataEvento" />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do Evento</Label>
          <ListaSuspensa></ListaSuspensa>
        </CampoDeFormulario>

        <div className="acoes">
          <Botao>Criar Evento</Botao>
        </div>
      </div>
    </form>
  );
}
