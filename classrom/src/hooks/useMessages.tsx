type props = {
    name: string
}

export function useMessage({name}: props){
    function show(message: string){
      console.log(name, message)
    }

    return {show}
  }