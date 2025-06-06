import { useEffect } from "react"

type props = {
    name: string
}

export function useMessage({name}: props){
    function show(message: string){
      console.log(name, message)
    }

    useEffect(()=>{
      console.log("useMessage mounted", name)
    },[])

    return {show}
  }          