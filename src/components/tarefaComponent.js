import React from 'react'
import Button from './Button';


const TarefaComponent = ({tarefa, mudarStatus, deletarTarefa})=>{
    return (
        <>
            <div  className={tarefa.completa?
                'card text-light bg-success my-2 p-2 d-flex flex-row justify-content-between'
                :'card text-light my-2 p-2 bg-danger d-flex flex-row justify-content-between'}>
                <p>{tarefa.title}</p>
                <div>
                    <Button onClick={()=>mudarStatus(tarefa.id)}>Alterar Status </Button>
                    <Button onClick={()=>deletarTarefa(tarefa.id)}><i className="las la-times-circle"></i> </Button>
                </div>
            </div>
        </>
    )
}

export default TarefaComponent;