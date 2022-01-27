import style from "./FormsControls.module.css"

// export const Textarea = ({input,meta, ...props}) =>{

//     let hasError =  meta.touched && meta.error


    
//     return (
//         <div className={style.textarea}>
//         <div className = {style.textareaItem}>
//             <textarea className={hasError && style.error} {...input}  {...props}/>
//         </div>    
        
//         { hasError && <span>{meta.error}</span>}
        
//         </div>
//         )
// }


// export const Input = ({input,meta, ...props}) =>{

//     let hasError =  meta.touched && meta.error


    
//     return (
//         <div className={style.textarea}>
//         <div className = {style.textareaItem}>
//             <input className={hasError && style.error} {...input}  {...props}/>
//         </div>    
        
//         { hasError && <span>{meta.error}</span>}
        
//         </div>
//         )
// }

export const FormsControls = Element => ({input,meta, ...props}) =>  {
    let hasError =  meta.touched && meta.error
    

    return (
        <div className={style.textarea}>
        <div className = {style.textareaItem}>
            <Element className={hasError ? style.error : ""} {...input}  {...props}/>
        </div>    
        
        { hasError && <span>{meta.error}</span>}
        
        </div>
        )
}