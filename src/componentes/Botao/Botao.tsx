import React, {ReactElement} from "react";
import styles from "./styles.module.scss";

interface BotaoProps{
    children: ReactElement | string
    onClick?: ()=> void
}

const Botao = (props:BotaoProps) => {
    return(
        <button onClick={props.onClick} className={styles.botao}>
            {props.children}
        </button>
    )
}

export default Botao;