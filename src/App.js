import React, {useState} from 'react'

function App() {
  const [color, setColor] = useState([])
  function handleSubmit(e){
    e.preventDefault()
  }
  function change(e){
      setColor(e.target.value)
  }
  return (
    <section>
      <h1>Color Generator</h1>
      <form>
        <label htmlFor='color' onClick={handleSubmit}>
          Color Generator:
        </label>
        <input
          name='color'
          id='color'
          onChange={change}
        />
        <button className='btn'>Submit</button>
      </form>
      <article>
        {color}
      </article>
    </section>
  )
}

export default App

