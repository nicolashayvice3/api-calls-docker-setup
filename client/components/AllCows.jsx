import React, { useState, useEffect } from 'react'
import { getCows } from '../api'

function AllCows () {
  const [data, setData] = useState([])

  function refreshCows () {
    getCows()
      .then(cows => {
        console.log(cows)
        setData(cows)
        return null
      })
      .catch(e => console.log(e))
  }

  useEffect(() => {
    refreshCows()
  }, [])

  return (
    <>
      <div>
        <p>All the cows in the herd</p>
      </div>
      <ul>
        {data.map((cow, i) => <li key={i}>{cow.id}, {cow.collarId}, {cow.cowNumber}, {cow.collarStatus}</li>)}
      </ul>
    </>
  )
}

export default AllCows
