import { useState } from 'react'
import Header from './components/Header'
import StudentInfo from './components/StudentInfo'
import Footer from './components/Footer'
import Counter from './components/Counter'
import './App.css'
import ToDoList from './components/ToDoList'

function App() {
  const student = {
    name: "Nguyễn Văn A",
    id: "23673181",
    class: "DHKTPM19B"
  }
  return (
    <>
      <div style={{display:"flex", gap:5}}>
        <div>
          <Header />
          <StudentInfo name={student.name} id={student.id} class={student.class} />
          <Footer />
        </div>
        <div>
          <Counter />
        </div>
        <div>
          <ToDoList/>
        </div>
      </div>
    </>
  )
}

export default App
