import React from 'react'

const AppButton = (props) => {
  return (
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded' onClick={props.onClick}>
        {props.title}
    </button>
  )
}

export default AppButton