import './App.css';
import React, { useState } from 'react';
import TarefasMap from './components/tarefasMap';
import AddTarefa from './components/addTarefa';

function App() {
  const [tarefas, addTarefas] = useState([
    {
      id:1,
      tarefa:'Estudar React',
      completa: false
    },
    {
      id:2,
      tarefa: 'Arrumar a casa',
      completa: true
    }
  ])

  const adicionarTarefa = (tituloTarefa)=>{
      const novaTarefa = [...tarefas, {
        id: Math.random(1),
        tarefa : tituloTarefa,
        completa: false
      }]
      addTarefas(novaTarefa)
  }
  const mudarStatusTarefa = (idTarefa)=>{
    const tarefaSelecionada = tarefas.map((t)=>{
      if(t.id === idTarefa) return {...t, completa: !t.completa }
      else return t
    })
    addTarefas(tarefaSelecionada)
  }
  const deletarTarefa = (idTarefa)=>{
    const tarefaSelecionada = tarefas.filter((tarefas)=> tarefas.id !== idTarefa)
    addTarefas(tarefaSelecionada)
}
  return (
      <div className="container">
        <div className="row no-gutter">
          <AddTarefa adicionarTarefa = {adicionarTarefa}/> 
          <TarefasMap tarefasArray = {tarefas} mudarStatus = {mudarStatusTarefa} deletarTarefa={deletarTarefa}/>
        </div>
      </div>
  );
}

export default App;
