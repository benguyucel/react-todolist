import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/footer';
import Footertop from './components/footer/FooterTop';
import Header from './components/header';
import List from './components/List';
const initialState = [
  { todo: "Learn React", done: false },
  { todo: "Have a Life", done: false },
  { todo: "Learn JavaScript", done: true }
]
function App() {
  const [todo, setTodo] = useState(initialState)
  {/* Set Todo toogle*/ }
  const handleComplete = i => {
    const mapped = todo.map((item, index) => index === i ? { ...item, done: !item.done } : { ...item })
    setTodo(mapped)
  }
  {/* Counter */ }
  const handleCompleteCount = () => {
    return todo.filter(item => item.done === false).length
  }
  const [status, setStatus] = useState("all")
  {/* just take status and we take opposite item.done on list  inside hidden attr  */ }
  const handleStatus = (type) => {
    if (type == "active") {
      setStatus("active")
    } else if (type == "completed") {
      setStatus("completed")
    } else {
      setStatus("all")
    }
  }
  {/* Clear all todos which are completed  */ }
  const handleClear = () => {
    const clear = todo.filter(item => item.done != true)
    setTodo(clear)
  }
  {/* remove singgle item */ }
  const removeItem = i => {
    const clear = todo.filter((item, idx) => idx !== i)
    setTodo(clear)
  }

  return (
    <div className="App">
      <section className="todoapp">
        <Header setTodo={setTodo} />
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">
            Mark all as complete
          </label>
          <List todoList={todo} handleComplete={handleComplete} status={status} removeItem={removeItem} />
        </section>
        <Footertop itemCount={handleCompleteCount} handleStatus={handleStatus} handleClear={handleClear} />
      </section>
      <Footer />
    </div>
  );
}

export default App;
