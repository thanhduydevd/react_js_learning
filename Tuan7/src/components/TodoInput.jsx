import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import todosAtom from '../states/todosAtom'

export default function TodoInput(){
  const [text, setText] = useState('')
  const setTodos = useSetRecoilState(todosAtom)

  const handleSubmit = (e) =>{
    e.preventDefault()
    const t = text.trim()
    if(!t) return
    setTodos(prev => [{ id: Date.now(), text: t }, ...prev])
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} style={{display:'flex',gap:8,marginBottom:12}}>
      <input
        value={text}
        onChange={e=>setText(e.target.value)}
        placeholder="New todo..."
        style={{flex:1}}
      />
      <button type="submit">Add</button>
    </form>
  )
}
