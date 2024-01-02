import React from 'react'

const User = ({ user,deleteById }) => {
    const { id, name, email } = user
    const handleDelete = () => {
        deleteById(id)
      }
  return (
      <div>
          <div className="p-4 bg-gray-200 w-fit my-4 rounded-md">
              <h2>{id}</h2>
              <h2>{name}</h2>
              <h2>{email}</h2>
              <div onClick={handleDelete} className="bnt bg-gray-500 text-white rounded-full py-[2px] w-fit px-4 mt-2 cursor-pointer">Delete</div>
           </div>
    </div>
  )
}

export default User