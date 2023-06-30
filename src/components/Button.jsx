import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
    <div>
        <Link to={props.url}>
            <button className='bg-button min-w-max text-white rounded-full px-8 py-4'>{props.text}</button>
        </Link>
    </div>
  )
}

export default Button