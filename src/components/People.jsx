import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const People = (props) => {
    const [data, setData]=useState()
    const{id}=useParams()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(resp=>{
              console.log(resp)//this console.log is for checking the data from the response in the console
              setData(resp.data)
            })
            .catch (err=> console.log(err))
        }, [id])
  return (
    <div>
        {/* <p>{JSON.stringify(data)}</p> */}
        <div>
            {
                data?
                <div>
                    <h1>{data.name}</h1>

                    <p>Height: {data.height} cm</p>
                    <p>Mass: {data.mass} kg</p>
                    <p>Hair Color: {data.hair_color}</p>
                    <p>Skin Color: {data.skin_color}</p>
                </div>:
                <div>
                <p>Error:These aren't the droids you're looking for</p>
                <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F11%2Frevenge-of-the-sith-2000.jpg" alt="obi-wan-kenobi"/> 
                </div>    
            }
        </div>

    </div>
  )
}

export default People