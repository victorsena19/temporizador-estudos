interface  InputTextoProps{
    label: string
    htmlFor: string
    value: string
    name: string
    id: string
    placeholder: string
    required: boolean
    onChange:React.ChangeEventHandler<HTMLInputElement>
}

const InputTexto = (props:InputTextoProps) => {
    return(
        <>
            <label htmlFor={props.htmlFor}>{props.label}</label>
            <br/>
            <input
                onChange={props.onChange}
                type="text"
                value={props.value}
                name={props.name}
                id={props.id}
                placeholder={props.placeholder}
                required={props.required}/>
        </>
    )
}
export default InputTexto;