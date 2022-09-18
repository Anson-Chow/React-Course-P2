import "./App.css";
import Todo from "./components/Todo";
import Title from "./components/Title";
import Modal from "./components/Modal";
import Counter from "./components/Counter";
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";

function App() {

  const [showModal, setShowModal] = useState(false)

  function removeModal(){
    setShowModal(false)
  }

  function onTodoDelete(){
    setShowModal(true)
  }

  useEffect(() => {
    console.log('on mount')
  }, [])

  return (
   <div>
      <Router>
        <Nav />
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/about" element={<About />} />
          <Route path = "/contact" element={<Contact />} />
        </Routes>
      </Router>
   </div>
  );
}

export default App;

 // <>
    //   <Title />
    //   <div>
    //     <input type="text" onChange={(event) => {
    //       console.log(event.target.value)
    //     } } />
    //     <button onClick={() => {setShowModal(true)}}>Add todo</button>
    //   </div>
    //   <div className="todo__wrapper">
    //     <Todo onTodoDelete={onTodoDelete} removeModal={removeModal} title="Finished Frontend Simplified" />
    //     <Todo onTodoDelete={onTodoDelete} removeModal={removeModal} title="Finished Interview Section" />
    //     <Todo onTodoDelete={onTodoDelete} removeModal={removeModal} title="Finished Land a Job" />
    //   </div>
    //   {showModal && <Modal removeModal={removeModal} title="Confirm Delete?"/>}
    // </>