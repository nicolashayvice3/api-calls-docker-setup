import React, { useState, useEffect } from 'react'
import { getCows } from '../api'

function AllCows () {
  const initialState = [{ collarId: '', cowNumber: '', collarStatus: '', id: '' }]
  const [data, setData] = useState(initialState)

  useEffect(() => {
    getCows()
      .then(data => {
        setData(data)
        return null
      })
      .catch(err => {
        console.log(err.message)
        return null
      })
  }, [])

  return (
    <>
      <div>
        <p>All the cows in the herd</p>
      </div>
      <div>
        {data.map((data, i) => {
          return (
            <AllCowsIndividual key={i} collarId={data.collarId} cowNumber={data.cowNumber} collarStatus={data.collarStatus} id={data.id}/>
          )
        })}
      </div>
    </>
  )
}
