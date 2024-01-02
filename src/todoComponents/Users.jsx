import React, { useContext } from 'react'
import User from './User'
import { createContext } from './usecontext/UseContext'

const Users = ({ state, deleteById }) => {
  const data = useContext(createContext)
  console.log(data)
  return (
    <div className='grid grid-cols-3 gap-4'>
      {
        state.map((user) => {
          return <User deleteById={deleteById} user={user} />
        })
      }

    </div>
  )
}

export default Users