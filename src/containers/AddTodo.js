import React from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>     
        <form
            onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
                return
            }
            dispatch(addTodo(input.value))
            input.value = ''
            }}
        >
            <input
            ref={node => {
                input = node
            }}
            />
            <div style={{ margin:'10px' }}>
                <Button bsStyle="primary" type="submit" bsSize="large">
                    Add Todo
                </Button>
            </div>
        </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo