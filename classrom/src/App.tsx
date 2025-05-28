import "./global.css"
import { Button } from "./components/button"
import styles from "./app.module.css"

import { useMessage } from "./hooks/useMessages"

export function App() {
  const message = useMessage({name: "Pablo Henrique"})

  return(
    <div className={styles.container}>
      <Button name="Adicionar" onClick={()=> message.show("seja bem vindo!")}/>
      <span>0</span>
      <Button name="Remover"/>
    </div>
  )
}