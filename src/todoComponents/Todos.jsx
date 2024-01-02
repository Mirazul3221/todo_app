import React, { useState } from 'react'
import Users from './Users'
import AddUser from './AddUser'
import { createContext } from './usecontext/UseContext'

const Todos = () => {
    const [state, setState] = useState([
        { id: 1, name: "Mirazul Islam", email: "mirazul232@gmail.com" }
    ])
  const deleteById = (id) => {
    const filterState = state.filter(state => state.id !== id)
    setState(filterState)
  }

  const addNweUser = (newUser) => {
    setState([
      ...state,newUser
    ])
  }
console.log(createContext)
  return (
    <div className='mt-4'>
      <AddUser addNweUser={addNweUser} />
          <Users deleteById={deleteById} state = {state} />
    </div>
  )
}

export default Todos