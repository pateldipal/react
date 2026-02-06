import React from 'react'

export const Card = (props) => {
  return (
    <div>
        <div className='card'>
                <img src={props.img} alt="" />
                <h1>{props.user}</h1>
                <p>{props.lorems}</p>
                <button>View Profile</button>
        </div>
    </div>

  )
}
