import React from 'react'

function Input({name , id , type , handelChange , title , errors , value}) {
  return (

<>

<div className="mb-3">
    <label htmlFor={id} className="form-label">{title}</label>
    <input name={name} type={type} className="form-control" id={id} onChange={handelChange} value={value}   />



    {errors[name] && <p className='text-danger'> {errors[name]}</p>}
  </div>

</>    )
}

export default Input