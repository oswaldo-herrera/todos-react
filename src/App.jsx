import { useState } from "react"

import Button from "./components/Button"
import Item from "./components/Item"


export default function App() {

  const [todos, setTodos] = useState([])

  const [text,setText] = useState("")

  function onINputChange(event){
    setText(event.target.value)

  }

  function onKeyUp(event) {
    if(event.key === 'Enter'){
      addToDo();
    }
  }

  function addToDo () {
    // todos.push(text)
    if(text.trim().length > 0){
      setTodos([text,...todos])
      setText("")

    }
    
  }
  function onDelete (index) {
    todos.splice(index,1)
    setTodos([...todos])
  }
  return (
    <main className="bg-black min-h-screen flex justify-center p-16 text-white">
      
      <div className="h-full flex flex-col w-full max-w-[500px] gap-5">
        <input  type="text" className="bg-white/20 p-2 rounded " value={text} onChange={onINputChange} onKeyUp={onKeyUp} />
        <Button className="bg-white rounded p-2 text-black" onClick={addToDo} >agregar</Button>
        {
          todos.map((todo,index)=>{
            return(
              <Item key={`item-${index}`} text={todo} onDelete={() => onDelete(index)}/>

              // <article key={`todo-${index}`}>
              //   {todo}
              // </article>
            )
          })
        }
      </div>
      
    </main>
  )
}