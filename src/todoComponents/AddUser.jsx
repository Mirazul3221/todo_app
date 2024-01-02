import React, { useState } from 'react'

const AddUser = ({addNweUser}) => {
    const [newUser, setNewUser] = useState({
        name: "",
        email:""
    })

    const handleInput = (e) => {
        setNewUser({
            ...newUser,[e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault() 
        const newObj = {
            ...newUser, id:new Date().getTime().toString()
        }
        addNweUser(newObj)
        setNewUser({
            name: "",
            email:""
        })
    }
  return (
      <div>
        
          <h2>Add Your Info</h2>  
          <form onSubmit={handleSubmit} className='flex gap-10'>
              <div className="">
                  <label className='mr-2' htmlFor="name">Name</label>
                  <input onChange={handleInput} value={newUser.name} name='name' className='border outline-none' type="text" placeholder='Name' />
              </div>
              <div className="">
                  <label className='mr-2' htmlFor="email">Email</label>
                  <input onChange={handleInput} value={newUser.email} name='email' className='border outline-none' type="email" placeholder='Email' />
              </div>
              <button type='submit' className="bnt bg-gray-500 text-white rounded-md w-fit px-4 cursor-pointer"> Add </button>
          </form>

    </div>
  )
}

export default AddUser