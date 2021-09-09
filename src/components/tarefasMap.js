import React from 'react'
import TarefaComponent from './tarefaComponent';

const TarefasMap = ({ tarefasArray, mudarStatus,deletarTarefa })=>{
    return(
        <>
            {tarefasArray.map((t)=> <TarefaComponent deletarTarefa={deletarTarefa} mudarStatus={mudarStatus} tarefa = {t} /> )}
        </>
    )
}

export default TarefasMap;