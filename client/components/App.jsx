import React, { useState } from 'react'
import { sendCow } from '../api'

import AllCows from './AllCows'
import UpdateCow from './UpdateCow'

function App () {
  const initialState = { collarId: '', cowNumber: '', collarStatus: '' }
  const [data, setData] = useState(initialState)

  function handleChange (evt) {
    const { name, value } = evt.target
    setData({
      ...data,
      [name]: value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    sendCow(data)
    window.location.reload(true)
  }

  return (
    <>
      <div>
        <AllCows />
      </div>
      <br></br>
      <div>
        <form method='post'>
          <label htmlFor='collarId'>collar id</label>
          <input type='int' id='collarId' name='collarId' placeholder='Enter collar id' onChange={handleChange}/>

          <label htmlFor='cowNumber'>cow number</label>
          <input type='text' id='cowNumber' name='cowNumber' placeholder='Enter cow number' onChange={handleChange}/>

          <label htmlFor='collarStatus'>collar status</label>
          <input type='string' id='collarStatus' name='collarStatus' placeholder='Enter collar status' onChange={handleChange}/>
        </form>
        <button onClick={handleSubmit} type="submit" name="next"> Submit New Friend </button>
      </div>
      <br></br>
      <div>
        update cow: <UpdateCow />
      </div>
    </>
  )
}

export default App
