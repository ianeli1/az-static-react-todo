import React from "react"
import {useEffect, useState} from "react"

function useList(): [string[], ((element: string) => Promise<void>)]{
  const [list, setList] = useState<string[]>([])

  useEffect(() => {
    getTodos().then(todos => setList(todos))
  }, [])

  async function getTodos(): Promise<string[]>{
    const req = await fetch ("/api/getTodos")
    return await req.json()
  }

  async function add(element: string){
    await fetch("/api/newTodo", {
      body: JSON.stringify({
        todo: element
      })
    })
    setList(await getTodos())
  }


  return [list, add]
}

function App() {
  const [list, add] = useList()
  const [entry, setEntry] = useState("")

  return <div>
      <h1>
        Cool Todo List ({list.length} entr{list.length > 1 ? "ies" : "y"})
      </h1>

      <div>
        <input placeholder="Todo entry" value={entry} onChange={e => setEntry(e.target.value)} />
        <button onClick={() => entry && add(entry)}>Add</button>
      </div>

      <ul>
        {list.map((entry, i) => (
          <li key={i}>
              {entry}
          </li>
        ))}
      </ul>
    
    </div>;
}

export default App;
