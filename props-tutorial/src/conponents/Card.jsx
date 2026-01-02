import React from 'react'

const Card = (props) => {
  return (
    <div className="bg-zinc-800 w-72 rounded-lg overflow-hidden p-3">

      {/* Image */}
      <div className="w-full h-70 mb-4 overflow-hidden rounded-md">
        <img
          className="w-full h-full object-cover"
          src={props.image}
          alt="User"
        />
      </div>

      {/* Name */}
      <h2 className="text-white text-lg font-semibold">
        {props.name}
      </h2>

      {/* Email */}
      <p className="text-gray-400 text-sm mb-4">
        {props.email}
      </p>

      {/* Actions */}
      <div className="flex justify-between text-sm">
        <button className="text-gray-300 hover:text-white">
          Edit
        </button>
        <button className="text-red-500 hover:text-red-400">
          Delete
        </button>
      </div>

    </div>
  )
}

export default Card
