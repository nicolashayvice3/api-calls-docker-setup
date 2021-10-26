import React, { useState, useEffect } from 'react'
import { sendCow } from '../api'

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
  }

  return (
    <>
      <div>

      </div>
      <div>
        <form>
          <label htmlFor='collarId'>collar id</label>
          <input type='int' id='collarId' name='collarId' placeholder='Enter collar id' onChange={handleChange}/>

          <label htmlFor='cowNumber'>cow number</label>
          <input type='text' id='cowNumber' name='cowNumber' placeholder='Enter cow number' onChange={handleChange}/>

          <label htmlFor='collarStatus'>collar status</label>
          <input type='string' id='collarStatus' name='collarStatus' placeholder='Enter collar status' onChange={handleChange}/>
        </form>
        <button onClick={handleSubmit} type="submit" name="next"> Submit Update </button>
      </div>
    </>
  )
}

export default App
