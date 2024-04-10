import React from 'react'
// import PropTypes from 'prop-types'

const Todoitem = props => {
    return (
        <div>
            <h5>{props.arrtodo.name}</h5>
            <h5>{props.arrtodo.dept}</h5>
            <h5>{props.arrtodo.sem}</h5>
            <h5>{props.arrtodo.age}</h5>
        </div>
    )
}

// Todoitem.propTypes = {

// }

export default Todoitem
