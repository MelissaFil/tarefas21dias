import React, { useState } from "react";
import Button from './Button';

const AddTarefa = ({adicionarTarefa})=>{
    const [titulo, setarEntradaDado] = useState("");

    const handleEntradaDado = (e)=>{
        setarEntradaDado(e.target.value)
    }
    const setarTarefa = ()=>{
        adicionarTarefa(titulo)
        //limpar imput
        setarEntradaDado('')
    }
    return (
        <div className="d-flex flex-row mb-2">
            <input type="text" placeholder="Adcionar tarefa" onChange={handleEntradaDado} value={titulo} className="form-group " />

            <Button onClick={setarTarefa}>Nova tarefa</Button>
        </div>
    )

}

export default AddTarefa