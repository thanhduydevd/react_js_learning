import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import todosAtom from '../states/todosAtom'

export default function TodoItem({todo}){
  const setTodos = useSetRecoilState(todosAtom)
  const [editing, setEditing] = useState(false)
  const [text, setText] = useState(todo.text)

  const remove = () => {
    setTodos(prev => prev.filter(t => t.id !== todo.id))
  }

  const save = () => {
    const t = text.trim()
    if(!t) return
    setTodos(prev => prev.map(it => it.id === todo.id ? {...it, text: t} : it))
    setEditing(false)
  }

  return (
    <div style={{display:'flex',gap:8,alignItems:'center',padding:6,borderBottom:'1px solid #eee'}}>
      {editing ? (
        <>
          <input value={text} onChange={e=>setText(e.target.value)} style={{flex:1}} />
          <button onClick={save}>Save</button>
          <button onClick={()=>{setEditing(false); setText(todo.text)}}>Cancel</button>
        </>
      ) : (
        <>
          <span style={{flex:1}}>{todo.text}</span>
          <button onClick={()=>setEditing(true)}>Edit</button>
          <button onClick={remove}>Delete</button>
        </>
      )}
    </div>
  )
}
