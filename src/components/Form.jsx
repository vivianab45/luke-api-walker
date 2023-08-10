import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'


const Form = () => {
    const[formData, setFormData]=useState({type:'people', idNum:1})

    const navigate=useNavigate()

    const handleSubmit=(e) =>{
        e.preventDefault()
        console.log(formData)
        navigate(`${formData.type}/${formData.idNum}`)
    }

    const handleChange=(e)=>{
        const {name, value}= e.target
        setFormData({...formData, [name]:value})
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="type"> Search for: </label>
        <select className="input" name='type' id='type' onChange={handleChange}>
            <option value='people'>People</option>
            <option value='planets'>Planets</option>
        </select>

        <label htmlFor="idNum"> ID:</label>
        <input type='number' name='idNum' value={formData.idNum} onChange={handleChange}/>
        <button type="submit">Search</button>
    </form>
  )
}

export default Form