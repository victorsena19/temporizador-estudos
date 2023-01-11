import { ITarefa } from '../../../interface/Tarefa';
import styles from '../Lista.module.scss';

interface ItemProps extends ITarefa{
    selecionarTarefa: (tarefaSelecionada:ITarefa) => void
}

export default function Item({
    tarefa, 
    tempo, 
    selecionado, 
    completado, 
    id, 
    selecionarTarefa}:ItemProps){
    return(
        <li 
            onClick={() => !completado && selecionarTarefa(
                {tarefa, 
                tempo, 
                selecionado, 
                completado, id}
                )}

            className={`${styles.item} ${selecionado ? styles.itemSelecionado : ''} 
                ${completado ? styles.itemCompletado : ''}`}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={styles.concluido} aria-label="Tarefa Completada"></span>}
        </li>
    )
}

