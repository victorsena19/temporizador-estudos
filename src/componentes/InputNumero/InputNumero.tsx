interface InputNumeroProps{
    value:string
    step:string
    name:string
    id:string
    min:string
    max:string
    required:boolean
    onChange:React.ChangeEventHandler<HTMLInputElement>
    htmlFor:string
    label:string

}

const InputNumero = (props:InputNumeroProps) => {
    return(
        <>
            <label htmlFor={props.htmlFor}>{props.label}</label>
            <br/>
            <input 
                onChange={props.onChange}
                type="time"
                value={props.value}
                step={props.step}
                name={props.name}
                id={props.id}
                min={props.min}
                max={props.max}
                required={props.required}/>
        </>
    )
}
export default InputNumero;