import React from 'react'

const Usercard = (props) => {
  const {id,email,name,avatarUrl} = props
  return (
    <div className='flex flex-col justify-center content-center h-300 w-300 shadow border m-2'>
      <img className='m-2' src={avatarUrl} alt="avatar" height="100px" width="100px"/>
      <h3 className='m-2'>{name}</h3>
      <p className='m-2'><b>Id:</b> {id}</p>
      <p className='m-2 word-break w-200'><b>Email:</b> {email}</p>
    </div>
  )
}

export default Usercard
