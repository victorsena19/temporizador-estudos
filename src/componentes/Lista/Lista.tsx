import React, {useState} from 'react';
import styles from "./Lista.module.scss";
import Item from './Item/Item';
import { ITarefa } from '../../interface/Tarefa';

interface ListaProps{
    tarefas: ITarefa[]
    selecionarTarefa: (tarefaSelecionada:ITarefa) => void
}

const Lista = ({tarefas, selecionarTarefa}:ListaProps) => {
    return(
        
      (tarefas.length > 0) ? <aside className={styles.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
            {tarefas.map((item, index) => 
                    <Item
                    selecionarTarefa={selecionarTarefa}
                    key={item.id}
                    {...item}/>
                )}
            </ul>    
        </aside>    
        :<></>
    )
}

export default Lista;