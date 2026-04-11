import { useRecoilValue } from 'recoil'
import todosAtom from '../states/todosAtom'
import TodoItem from './TodoItem'

export default function TodoList(){
  const todos = useRecoilValue(todosAtom)
  return (
    <div>
      {todos.length === 0 ? <p>No todos yet.</p> : todos.map(t => <TodoItem key={t.id} todo={t} />)}
    </div>
  )
}
