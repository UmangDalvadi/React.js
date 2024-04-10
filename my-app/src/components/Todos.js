import React from 'react'
import Todoitem from './Todoitem'
// import PropTypes from 'prop-types'

const Todos = props => {
  return (
    <div className='container'>
      <h3 className='text-center'>Todos Heading</h3>
      {props.arrtodo.map((arr)=>{
            return(
                <Todoitem arrtodo={arr}/>
            )
      })}
      
      <button className="btn btn-danger">delete</button>
    </div>
  )
}

// Todos.propTypes = {

// }

export default Todos
