import React, {useState} from 'react';
import './App.scss'
import Cronometro from './componentes/Cronometro/Cronometro';
import Formulario from './componentes/Formulario/Formulario';
import Lista from './componentes/Lista/Lista';
import { ITarefa } from './interface/Tarefa';

function App() {

  const [tarefas, setTarefas] = useState<ITarefa[]>([])
  const [selecionado, setSelecionado] = useState<ITarefa>()
  
  //COMEÇO
  const selecionarTarefa = (tarefaSelecionada:ITarefa) => {
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores=> tarefasAnteriores.map(tarefa =>({
      ...tarefa, 
      selecionado: tarefa.id == tarefaSelecionada.id ? true : false 
    })))
  }
// FIM

//COMEÇO
  const adicionarNovo = (tarefa:ITarefa)=>{
    setTarefas([...tarefas, tarefa])
  }
//FIM

  const finalizarRatefa = () =>{
    if(selecionado){
      setSelecionado(undefined);
      setTarefas(tarefas => tarefas.map(tarefa =>{
        if(tarefa.id == selecionado.id){
          return{
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa
      }))
    }
  }

  return (
    <div className="App">
      <div className='AppStyle'>
        <Formulario aoSalvar={tarefa => adicionarNovo(tarefa)}/>
        <Lista
          tarefas = {tarefas}
          selecionarTarefa={selecionarTarefa}/>
        <Cronometro 
          finalizarRatefa={finalizarRatefa} 
          selecionado={selecionado}/>
      </div>
    </div>
  );
}

export default App;
