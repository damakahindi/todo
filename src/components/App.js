import React from 'react'
import Footer from './Footer'
import { Modal } from 'react-bootstrap'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
    <div className="static-modal" style={{textAlign:'center', marginTop:'100px'}}>
      <div style={{ width:'100%' }}>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title> Todo </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <VisibleTodoList />
            <AddTodo />
          </Modal.Body>
          <Footer />
        </Modal.Dialog>
      </div>
      
    </div>
  
)

export default App