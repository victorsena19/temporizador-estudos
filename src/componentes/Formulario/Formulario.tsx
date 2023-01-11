import React, {useState} from "react";
import { ITarefa } from "../../interface/Tarefa";
import Botao from "../Botao/Botao";
import InputNumero from "../InputNumero/InputNumero";
import InputTexto from "../InputTexto/InputTexto";
import styles from './styles.module.scss';
import {v4 as uuidv4} from 'uuid'

interface FormularioProps{
    aoSalvar:(tarefa:ITarefa) => void
    
}

const Formulario = (props:FormularioProps) => {

    const [tarefa, setTarefa] = useState("")
    const [tempo, setTempo] = useState("00:00:00")
    
    const adicionar = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        props.aoSalvar({
            tarefa,
            tempo,
            selecionado:false,
            completado:false,
            id: uuidv4()
        })
        setTarefa("")
        setTempo("00:00:00")
     }
    return(
        <form onSubmit={adicionar} className={styles.novaTarefa}>
            <div className={styles.inputContainer}>
                <InputTexto
                    value={tarefa}
                    onChange={e => setTarefa(e.target.value)}
                    htmlFor="tarefa"
                    label="Adicione um novo estudo"
                    name="tarefa"
                    id="tarefa"
                    placeholder="O que você quer estudar"
                    required={true}/>
            </div>
            <div className={styles.inputContainer}>
                <InputNumero
                    value={tempo}
                    onChange={e => setTempo(e.target.value)}
                    htmlFor="tempo"
                    label="Tempo"
                    step="1"
                    name="tarefa"
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required={true}/>
            </div>
            <Botao>Adicionar</Botao>
        </form>
    )
}

export default Formulario;