import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

const EditarGenero = ({match}) => {
  const [name, setName] = useState([])
  const [success, setSuccess] = useState(false)
  const id = match.params.id
  useEffect(()=>{
    axios.get(`/api/genre/${id}`).then(res=> {
      setName(res.data.name)
    })
  },[id])

  const onChange = event =>{
    setName(event.target.value)
  }

  const save = () => {
    axios.put(`/api/genres/${id}`, {name}).then(res => {setSuccess(true)})
  }
  
  if(success) {
    return <Redirect to='/generos/' />
  }

  return (
    <div className='container'>
      <h1>Editar Gênero</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input type="text" value={name} onChange={onChange} className="form-control" id="name"/>
        </div>
        <button type="button" onClick={save} className="btn btn-primary">Editar</button>
      </form>
    </div> 
  )
}
export default EditarGenero