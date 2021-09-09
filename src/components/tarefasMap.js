import React from 'react'
import TarefaComponent from './tarefaComponent';

const TarefasMap = ({ tarefasArray, mudarStatus,deletarTarefa })=>{
    return(
        <>
            {tarefasArray.map((t)=> <TarefaComponent deletarTarefa={deletarTarefa} mudarStatus={mudarStatus} tarefa = {t} /> )}
        </>
    )
}
const TarefasMapCalendar = ({ tarefasArray })=>{

    return (tarefasArray.map((t)=>{return({title:t.title, date:t.date}) }))
}
export {TarefasMap} 
export {TarefasMapCalendar};