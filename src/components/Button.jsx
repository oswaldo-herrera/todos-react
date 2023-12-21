export default function Button(props) {
    console.log('button return')
    return(
        <>
        {/* <button onClick={props.onClick}>{props.text}</button> */}
        <button className={props.className} onClick={props.onClick}>{props.children}</button>
        </>
    ) 
    
}