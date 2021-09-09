import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

import Header from './components/Header';
import {TarefasMap} from './components/tarefasMap';
import {TarefasMapCalendar} from './components/tarefasMap';
import AddTarefa from './components/addTarefa';

let data = new Date();
let dia = String(data.getDate()).padStart(2, '0');
let mes = String(data.getMonth() + 1).padStart(2, '0');
let ano = data.getFullYear();
let dataAtual = dia + '/' + mes + '/' + ano;
function App() {
  const [tarefas, addTarefas] = useState([
    {
      id:1,
      title:'Estudar React',
      completa: false,
      date: '2020-09-09'
    },
    {
      id:2,
      title: 'Arrumar a casa',
      completa: true,
      date: '2020-09-09'
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
    <Router>
      <div className="container">
        <Header/>
        <div className="row no-gutter mx-0">
          <Route path="/tarefas" 
                 exact 
                 render = {()=>[
                    <>
                      <AddTarefa adicionarTarefa = {adicionarTarefa}/> 
                      <TarefasMap tarefasArray = {tarefas} mudarStatus = {mudarStatusTarefa} deletarTarefa={deletarTarefa}/>
                    </>
          ]}>
          </Route>
          <Route path="/resumo" 
                 exact 
                 render = {()=>[
                  <FullCalendar
                  plugins={[ dayGridPlugin ]}
                  initialView="dayGridMonth"
                  weekends={false}
                  events={[<TarefasMapCalendar tarefasArray = {tarefas}/>]}
                />
                      
          ]} >
          </Route>
        </div>
      </div>  
    </Router>
  );
 
}

export default App;
