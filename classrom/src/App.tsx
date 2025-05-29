import "./global.css"
import { useEffect, useState } from "react"
import { Button } from "./components/button"
import styles from "./app.module.css"

import { useMessage } from "./hooks/useMessages"

export function App() {

  const [count, setCount] = useState(0)

  function handleAdd(){

      setCount((prevCount)=> prevCount + 1)
    
  }

  function handleRemove(){
    if(count > 0){
      setCount((prevCount) => prevCount - 1)
    }
  }

  const message = useMessage({name: "Pablo Henrique"})

  useEffect(()=>{
    if(count > 0){
      console.log(`O valor é ${count}`)
    }
    console.log("O valor mudou!")
  }, [count])

  return (
    <div className={styles.container}>
      <Button name="Adicionar" onClick={handleAdd}/>
      <span>{count}</span>
      <Button name="Remover" onClick={handleRemove}/>
    </div>
  )
}